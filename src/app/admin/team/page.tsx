'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faUpload,
  faUsers,
  faSort,
  faArrowUp,
  faArrowDown,
  faSave,
  faTimes,
  faFileImport
} from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth, storage } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface TeamMember {
  id?: string;
  name: string;
  role: string;
  image: string;
  priority: number;
  created: number;
}

const TeamDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [member, setMember] = useState<TeamMember>({
    name: '',
    role: '',
    image: '',
    priority: 0,
    created: Date.now()
  });
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchTeam();
      } else {
        router.push('/admin/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const fetchTeam = async () => {
    try {
      const q = query(collection(db, 'team'), orderBy('priority', 'asc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TeamMember[];
      setTeam(data);
    } catch (error) {
      console.error("Error fetching team:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMember(prev => ({
      ...prev,
      [name]: name === 'priority' ? parseInt(value) || 0 : value
    }));
  };

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new (window as any).Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round(height * (MAX_WIDTH / width));
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round(width * (MAX_HEIGHT / height));
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (!blob) return reject(new Error('Canvas to Blob failed'));
            resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
          }, 'image/jpeg', 0.8);
        };
      };
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const storageRef = ref(storage, `team-images/${Date.now()}_${file.name}`);
      const compressedFile = await compressImage(file);
      const snapshot = await uploadBytes(storageRef, compressedFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setMember(prev => ({ ...prev, image: downloadURL }));
      setImagePreview(downloadURL);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!member.image) return alert("Please upload an image");
    try {
      const { id, ...memberData } = member;
      if (formMode === 'add') {
        await addDoc(collection(db, 'team'), { ...memberData, created: Date.now() });
      } else if (id) {
        await updateDoc(doc(db, 'team', id), memberData);
      }
      resetForm();
      fetchTeam();
    } catch (error) {
      console.error("Error saving team member:", error);
    }
  };

  const handleEdit = (m: TeamMember) => {
    setMember(m);
    setImagePreview(m.image);
    setFormMode('edit');
    setShowForm(true);
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;
    try {
      await deleteDoc(doc(db, 'team', id));
      // Optionally delete from storage if it's a firebase URL
      if (imageUrl.includes('firebasestorage')) {
        try {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        } catch (e) {
          console.error("Error deleting image from storage:", e);
        }
      }
      fetchTeam();
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  const resetForm = () => {
    setMember({ name: '', role: '', image: '', priority: 0, created: Date.now() });
    setImagePreview(null);
    setShowForm(false);
    setFormMode('add');
  };

  const importInitialTeam = async () => {
    if (!window.confirm("This will import the 12 initial team members. Continue?")) return;
    setImporting(true);
    const initialTeam = [
      { name: 'Lavanya Dhawan', role: 'Founder', image: '/team/Lavanya.png' },
      { name: 'Anuj Anand Malik', role: 'Partner', image: '/team/Anuj.png' },
      { name: 'Aman Pathak', role: 'Partner', image: '/team/Aman.png' },
      { name: 'Yash Datt', role: 'Partner', image: '/team/Yashd.png' },
      { name: 'Ashwin Kumar Nair', role: 'Legal Consultant & Advocate-on-Record, Supreme Court of India', image: '/team/Ashwin.png' },
      { name: 'Sandeep Dhawan', role: 'Senior Advisor', image: '/team/Sandeep.png' },
      { name: 'Shivraj Pawar', role: 'Senior Associate', image: '/team/Shivraj.png' },
      { name: 'Shrey Arora', role: 'Senior Associate', image: '/team/Shrey.png' },
      { name: 'Ritik Gupta', role: 'Senior Associate', image: '/team/Ritik.png' },
      { name: 'Nitika Grover', role: 'Senior Associate', image: '/team/Nitikag.png' },
      { name: 'Aishwarya Sharma', role: 'Chief of Administration & Legal Analyst', image: '/team/Aishwarya.png' },
      { name: 'Chhavi Joshi', role: 'Legal Content Strategist', image: '/team/Chhavi.png' }
    ];

    try {
      for (let i = 0; i < initialTeam.length; i++) {
        const m = initialTeam[i];
        console.log(`Importing ${m.name}...`);
        
        // Fetch local image and upload to Firebase
        let firebaseImageUrl = m.image;
        try {
          const response = await fetch(m.image);
          const blob = await response.blob();
          const file = new File([blob], `${m.name.replace(/\s+/g, '_')}.png`, { type: 'image/png' });
          const storageRef = ref(storage, `team-images/${Date.now()}_${file.name}`);
          const snapshot = await uploadBytes(storageRef, file);
          firebaseImageUrl = await getDownloadURL(snapshot.ref);
        } catch (e) {
          console.error(`Failed to upload image for ${m.name}, using local path:`, e);
        }

        await addDoc(collection(db, 'team'), {
          name: m.name,
          role: m.role,
          image: firebaseImageUrl,
          priority: i * 10,
          created: Date.now()
        });
      }
      alert("Import successful!");
      fetchTeam();
    } catch (error) {
      console.error("Error importing team:", error);
      alert("Import failed.");
    } finally {
      setImporting(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#102028]"></div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-playfair text-[#102028] text-3xl font-semibold mb-2">Team Management</h2>
          <p className="text-[#102028] opacity-70">Add, edit and organize your legal team members.</p>
        </div>
        <div className="flex gap-3">
          {team.length === 0 && (
            <button
              onClick={importInitialTeam}
              disabled={importing}
              className="bg-[#102028]/10 text-[#102028] px-4 py-2 rounded-lg hover:bg-[#102028]/20 transition-all flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faFileImport} />
              {importing ? 'Importing...' : 'Import Initial Team'}
            </button>
          )}
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#102028] text-[#F8F1E6] px-4 py-2 rounded-lg hover:bg-[#102028]/90 transition-all flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Member
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-[#102028]/10 overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#102028] mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={member.name}
                      onChange={handleInputChange}
                      required
                      className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#102028] mb-1">Role / Designation</label>
                    <input
                      type="text"
                      name="role"
                      value={member.role}
                      onChange={handleInputChange}
                      required
                      className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#102028] mb-1">Priority (Lower numbers appear first)</label>
                    <input
                      type="number"
                      name="priority"
                      value={member.priority}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-[#102028] mb-1">Profile Image</label>
                  <div className="flex items-center gap-4">
                    <div className="relative w-32 h-32 bg-[#F8F1E6] rounded-xl overflow-hidden border border-[#102028]/10">
                      {imagePreview ? (
                        <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <FontAwesomeIcon icon={faUpload} className="text-[#102028]/20 text-2xl" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className="hidden"
                        accept="image/*"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="bg-[#F8F1E6] text-[#102028] px-4 py-2 rounded-lg border border-[#102028]/20 hover:bg-[#F8F1E6]/80 transition-all text-sm font-medium"
                      >
                        {uploading ? 'Uploading...' : 'Choose New Photo'}
                      </button>
                      <p className="text-xs text-[#102028]/60 mt-2">Recommended: Square image, max 2MB.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-[#102028]/10">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 rounded-lg border border-[#102028]/20 text-[#102028] hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-[#102028] text-[#F8F1E6] px-8 py-2 rounded-lg hover:bg-[#102028]/90 transition-all flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faSave} />
                  {formMode === 'add' ? 'Add Member' : 'Save Changes'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white rounded-xl shadow-lg border border-[#102028]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#102028] text-[#F8F1E6]">
              <tr>
                <th className="px-6 py-4 font-semibold">Member</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Priority</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#102028]/10">
              {team.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#F8F1E6]">
                        <Image src={m.image} alt={m.name} fill className="object-cover" />
                      </div>
                      <span className="font-semibold text-[#102028]">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#102028] opacity-80">{m.role}</td>
                  <td className="px-6 py-4 text-[#102028] font-medium">{m.priority}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(m)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => m.id && handleDelete(m.id, m.image)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {team.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-[#102028]/40">
                    No team members found. Start by adding one or importing initial data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamDashboard;
