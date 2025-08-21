'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faArrowRight, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';

interface Blog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  author: string;
  metaDescription?: string;
}

const ResourcesPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, searchTerm, selectedCategory]);

  const fetchBlogs = async () => {
    try {
      const q = query(collection(db, 'blogs'), orderBy('created', 'desc'));
      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Blog[];
      setBlogs(blogsData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterBlogs = () => {
    let filtered = blogs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category (using subtitle as category for now)
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog =>
        blog.subtitle.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };









  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F1E6] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#102028]"></div>
          <p className="mt-4 text-[#102028] text-lg">Loading resources...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#102028] to-[#1a2a3a] text-[#F8F1E6] py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Legal Resources
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Expert insights, legal guidance, and comprehensive resources to help you navigate the complex world of law
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#102028]/50" 
              />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[#102028]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102028] focus:border-transparent text-[#102028]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredBlogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-[#102028]/50 text-6xl mb-6">📚</div>
              <h3 className="text-2xl font-semibold text-[#102028] mb-4">No resources found</h3>
              <p className="text-[#102028]/70 max-w-md mx-auto">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Check back soon for new legal resources and insights.'
                }
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#102028]/10 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    {blog.image ? (
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-[#102028] to-[#1a2a3a] flex items-center justify-center">
                                <span class="text-[#F8F1E6] text-4xl">📄</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#102028] to-[#1a2a3a] flex items-center justify-center">
                        <span className="text-[#F8F1E6] text-4xl">📄</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-[#102028]/70 mb-3">
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendar} className="text-xs" />
                        <span>{formatDate(blog.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faUser} className="text-xs" />
                        <span>{blog.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair text-xl font-semibold text-[#102028] mb-3 line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Subtitle */}
                    {blog.subtitle && (
                      <p className="text-[#102028]/70 text-sm mb-3 line-clamp-1">
                        {blog.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-[#102028]/80 text-sm leading-relaxed mb-4 line-clamp-3">
                      {truncateText(blog.description.replace(/<[^>]*>/g, ''), 120)}
                    </p>

                    {/* Read More Button */}
                    <Link href={`/resources/${blog.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-[#102028] text-[#F8F1E6] py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#102028]/90 transition-colors duration-300"
                      >
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#102028] text-[#F8F1E6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Legal Insights
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest legal resources, insights, and updates delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-[#102028] focus:outline-none focus:ring-2 focus:ring-[#F8F1E6]"
              />
              <button className="bg-[#F8F1E6] text-[#102028] px-6 py-3 rounded-lg font-medium hover:bg-[#F8F1E6]/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage; 