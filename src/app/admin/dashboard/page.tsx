'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faUser, 
  faEye,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface ContactForm {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: any;
  status: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [contactForms, setContactForms] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState<ContactForm | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchContactForms();
      } else {
        router.push('/admin/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchContactForms = async () => {
    try {
      const q = query(collection(db, 'contact_forms'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const forms = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContactForm[];
      setContactForms(forms);
    } catch (error) {
      console.error('Error fetching contact forms:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteForm = async (formId: string) => {
    if (window.confirm('Are you sure you want to delete this contact form?')) {
      try {
        await deleteDoc(doc(db, 'contact_forms', formId));
        setContactForms(prev => prev.filter(form => form.id !== formId));
      } catch (error) {
        console.error('Error deleting form:', error);
      }
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#102028]"></div>
          <p className="mt-4 text-[#102028]">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="font-playfair text-[#102028] text-3xl font-semibold mb-2">
          Contact Form Submissions
        </h2>
        <p className="text-[#102028] opacity-70">
          Manage and review contact form submissions from the website
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-[#102028]/10">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#102028] rounded-lg flex items-center justify-center mr-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#F8F1E6] text-xl" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#102028]">{contactForms.length}</p>
              <p className="text-[#102028] opacity-70 text-sm">Total Submissions</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-[#102028]/10">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
              <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#102028]">
                {contactForms.filter(form => form.status === 'new').length}
              </p>
              <p className="text-[#102028] opacity-70 text-sm">New Messages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Forms List */}
      <div className="bg-white rounded-xl shadow-lg border border-[#102028]/10 overflow-hidden">
        <div className="p-6 border-b border-[#102028]/10">
          <h3 className="font-playfair text-[#102028] text-xl font-semibold">
            Recent Submissions
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F1E6]">
              <tr>
                <th className="px-6 py-3 text-left text-[#102028] font-medium">Name</th>
                <th className="px-6 py-3 text-left text-[#102028] font-medium">Email</th>
                <th className="px-6 py-3 text-left text-[#102028] font-medium">Service</th>
                <th className="px-6 py-3 text-left text-[#102028] font-medium">Date</th>
                <th className="px-6 py-3 text-left text-[#102028] font-medium">Status</th>
                <th className="px-6 py-3 text-left text-[#102028] font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#102028]/10">
              {contactForms.map((form) => (
                <tr key={form.id} className="hover:bg-[#F8F1E6]/30">
                  <td className="px-6 py-4 text-[#102028] font-medium">{form.name}</td>
                  <td className="px-6 py-4 text-[#102028]">{form.email}</td>
                  <td className="px-6 py-4 text-[#102028]">{form.service}</td>
                  <td className="px-6 py-4 text-[#102028] text-sm">{formatDate(form.createdAt)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      form.status === 'new' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {form.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedForm(form)}
                        className="text-[#102028] hover:text-[#102028]/70 transition-colors"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        onClick={() => handleDeleteForm(form.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for viewing form details */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-[#102028]/10">
              <div className="flex justify-between items-center">
                <h3 className="font-playfair text-[#102028] text-xl font-semibold">
                  Contact Form Details
                </h3>
                <button
                  onClick={() => setSelectedForm(null)}
                  className="text-[#102028] hover:text-[#102028]/70"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-[#102028] font-medium">Name:</label>
                <p className="text-[#102028]">{selectedForm.name}</p>
              </div>
              <div>
                <label className="text-[#102028] font-medium">Email:</label>
                <p className="text-[#102028]">{selectedForm.email}</p>
              </div>
              <div>
                <label className="text-[#102028] font-medium">Phone:</label>
                <p className="text-[#102028]">{selectedForm.phone}</p>
              </div>
              <div>
                <label className="text-[#102028] font-medium">Service:</label>
                <p className="text-[#102028]">{selectedForm.service}</p>
              </div>
              <div>
                <label className="text-[#102028] font-medium">Message:</label>
                <p className="text-[#102028] whitespace-pre-wrap">{selectedForm.message}</p>
              </div>
              <div>
                <label className="text-[#102028] font-medium">Submitted:</label>
                <p className="text-[#102028]">{formatDate(selectedForm.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 