'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faArrowLeft, faShare, faBookmark, faSync } from '@fortawesome/free-solid-svg-icons';
import { faFacebook as faFacebookBrand, faTwitter as faTwitterBrand, faLinkedin as faLinkedinBrand } from '@fortawesome/free-brands-svg-icons';
import { collection, getDocs, query, where, onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface Blog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  author: string;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: FAQ[];
}

const BlogDetailPage = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Custom styles for blog content to match TipTap editor
  const blogContentStyles = `
    .prose-content h1 { 
      font-size: 2em; 
      font-weight: bold; 
      margin-top: 0.67em; 
      margin-bottom: 0.67em; 
      color: #102028; 
      font-family: 'Playfair Display', serif;
    }
    .prose-content h2 { 
      font-size: 1.5em; 
      font-weight: bold; 
      margin-top: 0.83em; 
      margin-bottom: 0.83em; 
      color: #102028; 
      font-family: 'Playfair Display', serif;
    }
    .prose-content h3 { 
      font-size: 1.17em; 
      font-weight: bold; 
      margin-top: 1em; 
      margin-bottom: 1em; 
      color: #102028; 
      font-family: 'Playfair Display', serif;
    }
    .prose-content h4 { 
      font-size: 1em; 
      font-weight: bold; 
      margin-top: 1.33em; 
      margin-bottom: 1.33em; 
      color: #102028; 
      font-family: 'Playfair Display', serif;
    }
    .prose-content h5 { 
      font-size: 0.83em; 
      font-weight: bold; 
      margin-top: 1.67em; 
      margin-bottom: 1.67em; 
      color: #102028; 
      font-family: 'Playfair Display', serif;
    }
    .prose-content h6 { 
      font-size: 0.67em; 
      font-weight: bold; 
      margin-top: 2.33em; 
      margin-bottom: 2.33em; 
      color: #102028; 
      font-family: 'Playfair Display', serif;
    }
    
    .prose-content p { 
      margin: 1em 0; 
      line-height: 1.6; 
      color: #102028; 
    }
    .prose-content blockquote { 
      border-left: 4px solid #102028; 
      margin-left: 0; 
      padding-left: 1em; 
      font-style: italic; 
      color: #4B5563; 
      background-color: #F8F1E6;
      padding: 0.5em 1em;
      border-radius: 0 0.5rem 0.5rem 0;
    }
    .prose-content pre { 
      background-color: #102028; 
      padding: 1em; 
      border-radius: 0.5em; 
      font-family: monospace; 
      border: 1px solid rgba(16, 32, 40, 0.2); 
      color: #F8F1E6;
      overflow-x: auto;
    }
    .prose-content code { 
      background-color: #F8F1E6; 
      padding: 0.2em 0.4em; 
      border-radius: 0.3em; 
      font-family: monospace; 
      color: #102028;
    }
    .prose-content table { 
      border-collapse: collapse; 
      margin: 1em 0; 
      overflow: hidden; 
      table-layout: fixed; 
      width: 100%; 
      border: 1px solid rgba(16, 32, 40, 0.2); 
    }
    .prose-content table td, .prose-content table th { 
      border: 1px solid rgba(16, 32, 40, 0.2); 
      box-sizing: border-box; 
      min-width: 1em; 
      padding: 0.5em; 
      position: relative; 
      vertical-align: top; 
    }
    .prose-content table th { 
      background-color: #F8F1E6; 
      font-weight: bold; 
      text-align: left; 
      color: #102028; 
    }
    
    .prose-content ul { 
      list-style-type: disc; 
      padding-left: 1.5em; 
      margin: 1em 0;
    }
    .prose-content ol { 
      list-style-type: decimal; 
      padding-left: 1.5em; 
      margin: 1em 0;
    }
    .prose-content li { 
      margin: 0.5em 0; 
      display: list-item;
      color: #102028;
    }
    
    .prose-content hr { 
      border: none; 
      border-top: 2px solid rgba(16, 32, 40, 0.2); 
      margin: 1em 0; 
    }
    .prose-content img { 
      max-width: 100%; 
      height: auto; 
      border-radius: 0.5em; 
    }
    
    .prose-content a { 
      color: #3B82F6; 
      text-decoration: underline; 
    }
    .prose-content a:hover { 
      color: #1D4ED8; 
    }
    
    .prose-content strong { 
      font-weight: bold; 
      color: #102028; 
    }
    
    .prose-content em { 
      font-style: italic; 
    }
    
    .prose-content u { 
      text-decoration: underline; 
    }
    
    .prose-content s { 
      text-decoration: line-through; 
    }
    
    .prose-content mark { 
      background-color: #FEF3C7; 
      padding: 0.1em 0.2em; 
      border-radius: 0.2em; 
    }
    
    .prose-content sub { 
      vertical-align: sub; 
      font-size: smaller; 
    }
    
    .prose-content sup { 
      vertical-align: super; 
      font-size: smaller; 
    }

    /* Text alignment classes */
    .prose-content [style*="text-align: left"] { text-align: left !important; }
    .prose-content [style*="text-align: center"] { text-align: center !important; }
    .prose-content [style*="text-align: right"] { text-align: right !important; }
    .prose-content [style*="text-align: justify"] { text-align: justify !important; }

    /* Color classes */
    .prose-content [style*="color:"] { color: inherit !important; }
    
    /* Ensure proper spacing for nested elements */
    .prose-content p + p { margin-top: 1em; }
    .prose-content h1 + p, .prose-content h2 + p, .prose-content h3 + p, 
    .prose-content h4 + p, .prose-content h5 + p, .prose-content h6 + p { 
      margin-top: 0.5em; 
    }
    
    /* Handle any remaining TipTap specific classes */
    .prose-content .is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: #adb5bd;
      pointer-events: none;
      height: 0;
    }
    
    /* Color styles for TipTap color extension */
    .prose-content [style*="color"] { color: inherit !important; }
    .prose-content span[style*="color"] { color: inherit !important; }
    
    /* Ensure color attributes are respected */
    .prose-content [data-color] { color: var(--color) !important; }
    .prose-content span[data-color] { color: var(--color) !important; }
    
    /* Specific color classes */
    .prose-content .text-red { color: #EF4444 !important; }
    .prose-content .text-orange { color: #F97316 !important; }
    .prose-content .text-yellow { color: #EAB308 !important; }
    .prose-content .text-green { color: #22C55E !important; }
    .prose-content .text-blue { color: #3B82F6 !important; }
    .prose-content .text-indigo { color: #6366F1 !important; }
    .prose-content .text-purple { color: #8B5CF6 !important; }
    .prose-content .text-pink { color: #EC4899 !important; }
    .prose-content .text-gray { color: #4B5563 !important; }
    .prose-content .text-default { color: #102028 !important; }
  `;

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    
    if (slug) {
      fetchBlog().then((cleanup) => {
        unsubscribe = cleanup;
      });
    }

    // Cleanup function
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [slug]);

  // Add a refresh function that can be called manually
  const refreshBlog = () => {
    console.log('Refreshing blog data...');
    fetchBlog();
  };

  const fetchBlog = async () => {
    try {
      setLoading(true);
      console.log('Fetching blog with slug:', slug);
      
      // Use real-time listener for blog data
      const q = query(collection(db, 'blogs'), where('slug', '==', slug));
      const unsubscribe = onSnapshot(q, async (querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('No blog found with slug:', slug);
          router.push('/resources');
          return;
        }

        const blogData = querySnapshot.docs[0].data() as Blog;
        blogData.id = querySnapshot.docs[0].id;
        
        console.log('Fetched blog data (real-time):', blogData);
        setBlog(blogData);

        // Fetch FAQs for this blog using real-time listener
        const faqsUnsubscribe = onSnapshot(
          collection(db, 'blogs', blogData.id, 'faqs'),
          (faqsSnapshot) => {
            const faqsData = faqsSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })) as FAQ[];
            console.log('Fetched FAQs (real-time):', faqsData);
            setFaqs(faqsData);
          },
          (error) => {
            console.log('Error fetching FAQs:', error);
          }
        );

        // Fetch related blogs (excluding current blog) - this can be one-time since it's less critical
        try {
          const allBlogsQuery = query(collection(db, 'blogs'));
          const allBlogsSnapshot = await getDocs(allBlogsQuery);
          const allBlogs = allBlogsSnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() } as Blog))
            .filter(b => b.id !== blogData.id)
            .slice(0, 3);
          setRelatedBlogs(allBlogs);
        } catch (error) {
          console.error('Error fetching related blogs:', error);
        }

        setLoading(false);

        // Clean up FAQs listener when component unmounts
        return () => {
          faqsUnsubscribe();
        };
      }, (error) => {
        console.error('Error fetching blog:', error);
        router.push('/resources');
        setLoading(false);
      });

      // Return cleanup function
      return unsubscribe;
    } catch (error) {
      console.error('Error setting up blog listener:', error);
      router.push('/resources');
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareBlog = (platform: string) => {
    const url = window.location.href;
    const title = blog?.title || '';
    const text = blog?.metaDescription || '';

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F1E6] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#102028]"></div>
          <p className="mt-4 text-[#102028] text-lg">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F8F1E6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#102028] mb-4">Blog not found</h1>
          <Link href="/resources">
            <button className="bg-[#102028] text-[#F8F1E6] px-6 py-3 rounded-lg hover:bg-[#102028]/90 transition-colors">
              Back to Resources
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Global styles for blog content */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        .prose-content {
          font-family: inherit;
          line-height: 1.6;
          color: #102028;
        }
        
        .prose-content * {
          box-sizing: border-box;
        }
      `}</style>
      
      {/* Back Navigation */}
      <section className="bg-white border-b border-[#102028]/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/resources">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-[#102028] hover:text-[#102028]/70 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Resources
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Blog Header */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category/Subtitle */}
            {blog.subtitle && (
              <div className="text-[#102028]/70 text-sm font-medium mb-4">
                {blog.subtitle}
              </div>
            )}

            {/* Title */}
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#102028] mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#102028]/70 mb-8">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} />
                <span>{blog.author}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm text-[#102028]/70">Share:</span>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => shareBlog('facebook')}
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebookBrand} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => shareBlog('twitter')}
                  className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faTwitterBrand} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => shareBlog('linkedin')}
                  className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedinBrand} />
                </motion.button>
              </div>
              
              {/* Refresh Button */}
              <div className="ml-4 border-l border-[#102028]/20 pl-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={refreshBlog}
                  className="w-10 h-10 bg-[#102028] text-[#F8F1E6] rounded-full flex items-center justify-center hover:bg-[#102028]/90 transition-colors"
                  title="Refresh content"
                >
                  <FontAwesomeIcon icon={faSync} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Image */}
      {blog.image && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-6 pb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-[#102028] to-[#1a2a3a] flex items-center justify-center">
                        <span class="text-[#F8F1E6] text-6xl">📄</span>
                      </div>
                    `;
                  }
                }}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
            style={{
              // Custom styles to match TipTap editor styling
              '--tw-prose-body': '#102028',
              '--tw-prose-headings': '#102028',
              '--tw-prose-links': '#3B82F6',
              '--tw-prose-bold': '#102028',
              '--tw-prose-counters': '#102028',
              '--tw-prose-bullets': '#102028',
              '--tw-prose-hr': '#102028',
              '--tw-prose-quotes': '#102028',
              '--tw-prose-quote-borders': '#102028',
              '--tw-prose-captions': '#102028',
              '--tw-prose-code': '#102028',
              '--tw-prose-pre-code': '#F8F1E6',
              '--tw-prose-pre-bg': '#102028',
              '--tw-prose-pre-border': '#102028',
              '--tw-prose-th-borders': '#102028',
              '--tw-prose-td-borders': '#102028',
            } as React.CSSProperties}
          >
            <style>{blogContentStyles}</style>
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: blog.description }}
              style={{
                // Additional custom styles to match TipTap editor
                fontFamily: 'inherit',
                lineHeight: '1.6',
                color: '#102028',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="bg-[#F8F1E6] py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl font-bold text-[#102028] mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-[#102028]/10"
                  >
                    <h3 className="font-semibold text-[#102028] mb-3 text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-[#102028]/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl font-bold text-[#102028] mb-8 text-center">
                Related Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-[#F8F1E6] rounded-xl p-6 shadow-lg border border-[#102028]/10 hover:shadow-xl transition-all duration-300"
                  >
                    {relatedBlog.image && (
                      <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full bg-gradient-to-br from-[#102028] to-[#1a2a3a] flex items-center justify-center">
                                  <span class="text-[#F8F1E6] text-2xl">📄</span>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    )}
                    <h3 className="font-playfair text-lg font-semibold text-[#102028] mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-[#102028]/70 text-sm mb-4 line-clamp-2">
                      {relatedBlog.description.replace(/<[^>]*>/g, '').substring(0, 100)}...
                    </p>
                    <Link href={`/resources/${relatedBlog.slug}`}>
                      <button className="text-[#102028] font-medium hover:text-[#102028]/70 transition-colors">
                        Read More →
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#102028] text-[#F8F1E6] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-bold mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our team of experienced legal professionals is here to help you navigate complex legal matters
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F8F1E6] text-[#102028] px-8 py-3 rounded-lg font-medium hover:bg-[#F8F1E6]/90 transition-colors duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-[#F8F1E6] text-[#F8F1E6] px-8 py-3 rounded-lg font-medium hover:bg-[#F8F1E6] hover:text-[#102028] transition-colors duration-300"
                >
                  Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage; 