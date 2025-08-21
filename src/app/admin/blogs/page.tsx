'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSignOutAlt,
  faPlus, 
  faEdit, 
  faTrash, 
  faUpload,
  faFileAlt,
  faCalendar,
  faUser,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth, storage } from '../../../lib/firebase';
import { useRouter } from 'next/navigation'; 
import dynamic from 'next/dynamic';

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('../../../components/TiptapEditor'), { 
  ssr: false,
  loading: () => (
    <div className="p-6 min-h-[300px] bg-[#F8F1E6] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#102028]"></div>
        <p className="mt-4 text-[#102028]">Loading Editor...</p>
      </div>
    </div>
  ),
});

// Define FAQ interface
interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

// Define Blog interface with updated structure
interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  faqs?: FAQ[];
  author: string;
}

const BlogsDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    subtitle: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '',
    faqs: [],
    author: 'Lavanya Dhawan'
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const currentBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Check if user is logged in; if not, redirect to login page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchBlogs();
      } else {
        router.push('/admin/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Logout handler using Firebase Auth
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Fetch blogs data
  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const data = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          title: docData.title || '',
          subtitle: docData.subtitle || '',
          description: docData.description || '',
          date: docData.date || '',
          image: docData.image || '',
          created: docData.created || Date.now(),
          metaTitle: docData.metaTitle || '',
          metaDescription: docData.metaDescription || '',
          slug: docData.slug || '',
          faqs: docData.faqs || [],
          author: docData.author || 'Lavanya Dhawan'
        };
      });
      // Sort blogs by date in descending order (newest first)
      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
      setBlogs(sortedData);
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a helper function to generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  // Handle blog form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prevState => {
      // If title field is changed, auto-generate slug (only if slug is empty or user hasn't modified it)
      if (name === 'title' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value)
        };
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  // Handle Tiptap editor content changes
  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }));
  };

  // Add FAQ to the blog
  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  // Remove FAQ from the blog
  const removeFaq = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  // Handle FAQ input changes
  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setNewBlog(prevState => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = { 
        ...updatedFaqs[index], 
        [field]: value 
      };
      return {
        ...prevState,
        faqs: updatedFaqs
      };
    });
  };

  // Helper function to compress images
  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Calculate new dimensions while maintaining aspect ratio
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          
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
          
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Canvas to Blob conversion failed'));
                return;
              }
              
              const compressedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              
              resolve(compressedFile);
            },
            'image/jpeg',
            0.7
          );
        };
        
        img.onerror = () => {
          reject(new Error('Error loading image for compression'));
        };
      };
      
      reader.onerror = () => {
        reject(new Error('Error reading file for compression'));
      };
    });
  };

  // Handle file upload to Firebase Storage
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (limit to 10MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      alert("Image is too large. Maximum size is 10MB.");
      return;
    }
    
    try {
      setUploading(true);
      setUploadProgress(0);
      
      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
      
      // Create a local preview of the image
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      // Compress the image before uploading if it's an image
      let fileToUpload = file;
      if (file.type.startsWith('image/')) {
        fileToUpload = await compressImage(file);
      }
      
      // Upload with retry logic
      const maxRetries = 3;
      let retryCount = 0;
      let uploadSuccessful = false;
      
      while (retryCount < maxRetries && !uploadSuccessful) {
        try {
          // Upload the file
          const snapshot = await uploadBytes(storageRef, fileToUpload);
          
          // Get the download URL and update the blog state
          const downloadURL = await getDownloadURL(snapshot.ref);
          setNewBlog(prevState => ({
            ...prevState,
            image: downloadURL
          }));
          
          uploadSuccessful = true;
          setUploadProgress(100);
        } catch (err) {
          console.error(`Upload attempt ${retryCount + 1} failed:`, err);
          retryCount++;
          
          if (retryCount >= maxRetries) {
            throw new Error(`Failed after ${maxRetries} attempts: ${err instanceof Error ? err.message : String(err)}`);
          }
          
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(`Failed to upload image: ${error instanceof Error ? error.message : "Please check your internet connection and try again."}`);
    } finally {
      setUploading(false);
    }
  };

  // Handle blog form submission (Create or Update)
  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add timestamp and format the date
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0]
      };
      
      // Remove faqs from the main document since we'll store them in a subcollection
      const { faqs, ...blogData } = blogWithMetadata;
      
      let blogId = newBlog.id;
      
      if (formMode === 'add') {
        // Add to Firestore
        const docRef = await addDoc(collection(db, 'blogs'), blogData);
        blogId = docRef.id;
      } else {
        // Update existing document
        if (blogId) {
          const blogRef = doc(db, 'blogs', blogId);
          await updateDoc(blogRef, blogData);
        }
      }
      
      // Add FAQs to subcollection
      if (blogId && faqs && faqs.length > 0) {
        // First delete existing FAQs if updating
        if (formMode === 'edit') {
          const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
          for (const doc of faqsSnapshot.docs) {
            await deleteDoc(doc.ref);
          }
        }
        
        // Add all FAQs to subcollection
        for (const faq of faqs) {
          await addDoc(collection(db, 'blogs', blogId, 'faqs'), {
            question: faq.question,
            answer: faq.answer
          });
        }
      }
      
      // Reset form and show table
      resetForm();
      
      // Fetch the updated blogs
      await fetchBlogs();
      
    } catch (error) {
      console.error("Error processing blog:", error);
    }
  };

  // Handle blog edit
  const handleEdit = async (blog: Blog) => {
    try {
      // Fetch FAQs for this blog
      const faqsSnapshot = await getDocs(collection(db, 'blogs', blog.id!, 'faqs'));
      const faqs = faqsSnapshot.docs.map(doc => ({
        id: doc.id,
        question: doc.data().question || '',
        answer: doc.data().answer || ''
      }));
      
      setNewBlog({...blog, faqs});
      setFormMode('edit');
      setShowBlogForm(true);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setNewBlog(blog);
      setFormMode('edit');
      setShowBlogForm(true); 
    }
  };
 
  // Handle blog delete
  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        // Get the blog content first to extract image URLs
        const blogDoc = await getDoc(doc(db, 'blogs', id));
        const blogData = blogDoc.data();
        
        if (blogData) {
          // Extract all image URLs from the blog content
          const content = blogData.description || '';
          const imgRegex = /<img[^>]+src="([^">]+)"/g;
          const imageUrls = new Set();
          let match;
          
          while ((match = imgRegex.exec(content)) !== null) {
            imageUrls.add(match[1]);
          }
          
          // Get all blog_images documents
          const imagesSnapshot = await getDocs(collection(db, 'blog_images'));
          const unusedImages = imagesSnapshot.docs.filter(doc => {
            const imageData = doc.data();
            return imageUrls.has(imageData.url);
          });
          
          // Delete unused images from Storage and Firestore
          for (const imageDoc of unusedImages) {
            const imageData = imageDoc.data();
            try {
              // Delete from Storage
              const imageRef = ref(storage, imageData.path);
              await deleteObject(imageRef);
              
              // Delete from Firestore
              await deleteDoc(imageDoc.ref);
            } catch (error) {
              console.error(`Error deleting image ${imageData.filename}:`, error);
            }
          }
        }
        
        // Delete document from Firestore
        await deleteDoc(doc(db, 'blogs', id));
        
        // Update local state
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  // Reset form state
  const resetForm = () => {
    setNewBlog({
      title: '',
      subtitle: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      created: Date.now(),
      metaTitle: '',
      metaDescription: '',
      slug: '',
      faqs: [],
      author: 'Lavanya Dhawan'
    });
    setFormMode('add');
    setShowBlogForm(false);
  };

  // Cancel form handler
  const handleCancelForm = () => {
    resetForm();
  };

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F1E6] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#102028]"></div>
          <p className="mt-4 text-[#102028]">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Header */}
      <header className="bg-[#102028] text-[#F8F1E6] p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-playfair text-2xl font-semibold">LD Counsels Admin</h1>
            <p className="text-sm opacity-80">Welcome, {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-[#F8F1E6] text-[#102028] px-4 py-2 rounded-lg hover:bg-[#F8F1E6]/90 transition-colors duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="font-playfair text-[#102028] text-3xl font-semibold mb-2">
            Blog Management
          </h2>
          <p className="text-[#102028] opacity-70">
            Create, edit, and manage blog posts for the website
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#102028]/10">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#102028] rounded-lg flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faFileAlt} className="text-[#F8F1E6] text-xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#102028]">{blogs.length}</p>
                <p className="text-[#102028] opacity-70 text-sm">Total Blogs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-[#102028]/10">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faCalendar} className="text-white text-xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#102028]">
                  {blogs.filter(blog => new Date(blog.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length}
                </p>
                <p className="text-[#102028] opacity-70 text-sm">This Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-lg border border-[#102028]/10 overflow-hidden">
          <div className="p-6 border-b border-[#102028]/10 flex justify-between items-center">
            <h3 className="font-playfair text-[#102028] text-xl font-semibold">
              {showBlogForm ? (formMode === 'add' ? 'Create New Blog' : 'Edit Blog') : 'Blog Posts'}
            </h3>
            <motion.button
              onClick={() => {
                if (showBlogForm) {
                  resetForm();
                } else {
                  setFormMode('add');
                  setShowBlogForm(true);
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#102028] text-[#F8F1E6] px-4 py-2 rounded-lg hover:bg-[#102028]/90 transition-colors duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={showBlogForm ? faFileAlt : faPlus} className="mr-2" />
              {showBlogForm ? 'View Blogs' : 'Add Blog'}
            </motion.button>
          </div>

          {/* Conditional Rendering: Show either Data Table or Blog Form */}
          {showBlogForm ? (
            // Blog Creation/Edit Form with Updated Fields and Tiptap Editor
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmitBlog}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-[#102028] mb-1">Blog Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                        placeholder="Enter blog title text here"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="slug" className="block text-sm font-medium text-[#102028] mb-1">URL Slug</label>
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={newBlog.slug}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                        placeholder="url-friendly-blog-name"
                      />
                      <p className="mt-1 text-xs text-[#102028] opacity-70">Will be used in the URL: /blog/{newBlog.slug}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subtitle" className="block text-sm font-medium text-[#102028] mb-1">Subtitle/SEO Keywords</label>
                      <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={newBlog.subtitle}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                        placeholder="Enter subtitle or SEO keywords"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="metaTitle" className="block text-sm font-medium text-[#102028] mb-1">Meta Title</label>
                      <input
                        type="text"
                        id="metaTitle"
                        name="metaTitle"
                        value={newBlog.metaTitle || ''}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                        placeholder="Enter meta title for SEO"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-[#102028] mb-1">Publication Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={newBlog.date}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="image" className="block text-sm font-medium text-[#102028] mb-1">Blog Image</label>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="file"
                            id="image-upload"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-4 py-2 bg-[#F8F1E6] text-[#102028] rounded-lg text-sm font-medium flex items-center border border-[#102028]/20 hover:bg-[#F8F1E6]/80 transition-colors"
                          >
                            <FontAwesomeIcon icon={faUpload} className="mr-2" />
                            {uploading ? 'Uploading...' : 'Choose Image'}
                          </button>
                          {newBlog.image && (
                            <span className="text-xs text-green-600">Image uploaded successfully</span>
                          )}
                        </div>
                        
                        {uploading && (
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-[#102028] h-2.5 rounded-full" 
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        )}
                        
                        {/* Image preview */}
                        {(imagePreview || newBlog.image) && (
                          <div className="mt-2">
                            <img 
                              src={imagePreview || newBlog.image} 
                              alt="Blog image preview" 
                              className="w-32 h-32 object-cover rounded-lg border border-[#102028]/20"
                            />
                          </div>
                        )}
                        
                        <input
                          type="hidden"
                          id="image"
                          name="image"
                          value={newBlog.image}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="metaDescription" className="block text-sm font-medium text-[#102028] mb-1">Meta Description</label>
                      <input
                        type="text"
                        id="metaDescription"
                        name="metaDescription"
                        value={newBlog.metaDescription || ''}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                        placeholder="Enter meta description for SEO"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-[#102028] mb-1">Author</label>
                      <select
                        id="author"
                        name="author"
                        value={newBlog.author}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-[#102028]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                      >
                        <option value="Lavanya Dhawan">Lavanya Dhawan</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#102028] mb-1">FAQs</label>
                    <div className="border border-[#102028]/20 rounded-lg p-4 bg-[#F8F1E6]">
                      {/* Display existing FAQs */}
                      {(newBlog.faqs || []).map((faq, index) => (
                        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-[#102028]/10">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium text-[#102028]">FAQ #{index + 1}</h3>
                            <motion.button
                              type="button"
                              onClick={() => removeFaq(index)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-2 py-1 bg-red-500 text-white text-xs rounded-md"
                            >
                              Remove
                            </motion.button>
                          </div>
                          <div className="mb-2">
                            <label className="block text-xs font-medium text-[#102028] mb-1">Question</label>
                            <input
                              type="text"
                              value={faq.question}
                              onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                              className="w-full px-3 py-2 text-sm border border-[#102028]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                              placeholder="Enter FAQ question"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[#102028] mb-1">Answer</label>
                            <textarea
                              value={faq.answer}
                              onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                              rows={3}
                              className="text-black w-full px-3 py-2 text-sm border border-[#102028]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent"
                              placeholder="Enter FAQ answer"
                            />
                          </div>
                        </div>
                      ))}
                      
                      {/* Add FAQ button */}
                      <motion.button
                        type="button"
                        onClick={addFaq}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-2 px-4 py-2 bg-[#102028] text-[#F8F1E6] rounded-lg text-sm font-medium flex items-center"
                      >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Add FAQ
                      </motion.button>
                      <p className="mt-2 text-xs text-[#102028] opacity-70">Add frequently asked questions related to this blog post.</p>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-[#102028] mb-1">Blog Content</label>
                    {/* Tiptap Editor Integration */}
                    <div className="border border-[#102028]/20 rounded-lg">
                      {isMounted ? (
                        <TiptapEditor
                          content={newBlog.description}
                          onChange={handleEditorChange}
                          className="bg-white text-[#102028] min-h-[300px]"
                        />
                      ) : (
                        <div className="p-6 min-h-[300px] bg-[#F8F1E6] flex items-center justify-center">
                          <div className="text-center">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#102028]"></div>
                            <p className="mt-4 text-[#102028]">Loading editor...</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-[#102028] opacity-70">Use the toolbar above to format your content.</p>
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <motion.button
                      type="button"
                      onClick={handleCancelForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-[#102028] text-[#F8F1E6] rounded-lg font-medium"
                    >
                      {formMode === 'add' ? 'Publish Blog' : 'Update Blog'}
                    </motion.button>
                  </div>
                </motion.form>
              </AnimatePresence>
            </div>
          ) : (
            // Blogs Table
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F8F1E6]">
                  <tr>
                    <th className="px-6 py-3 text-left text-[#102028] font-medium">Date</th>
                    <th className="px-6 py-3 text-left text-[#102028] font-medium">Title</th>
                    <th className="px-6 py-3 text-left text-[#102028] font-medium">Subtitle</th>
                    <th className="px-6 py-3 text-left text-[#102028] font-medium">Image</th>
                    <th className="px-6 py-3 text-left text-[#102028] font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#102028]/10">
                  {currentBlogs.length > 0 ? (
                    currentBlogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-[#F8F1E6]/30">
                        <td className="px-6 py-4 text-[#102028] text-sm">{formatDate(blog.date)}</td>
                        <td className="px-6 py-4 text-[#102028] font-medium max-w-xs truncate">{blog.title}</td>
                        <td className="px-6 py-4 text-[#102028] max-w-xs truncate">{blog.subtitle}</td>
                        <td className="px-6 py-4">
                          {blog.image && <img src={blog.image} alt="" className="w-20 h-20 rounded-lg object-cover" />}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit(blog)}
                              className="text-[#102028] hover:text-[#102028]/70 transition-colors"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="text-red-600 hover:text-red-800 transition-colors"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-[#102028] opacity-70">
                        No blogs found. Click Add Blog to create a new blog.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              {blogs.length > itemsPerPage && (
                <div className="p-6 border-t border-[#102028]/10 flex justify-between items-center">
                  <div className="text-sm text-[#102028] opacity-70">
                    Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, blogs.length)}</span> of <span className="font-medium">{blogs.length}</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handlePreviousPage}
                      className="px-3 py-1 bg-[#F8F1E6] text-[#102028] rounded-md text-sm hover:bg-[#F8F1E6]/80 transition-colors"
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNextPage}
                      className="px-3 py-1 bg-[#F8F1E6] text-[#102028] rounded-md text-sm hover:bg-[#F8F1E6]/80 transition-colors"
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogsDashboard; 