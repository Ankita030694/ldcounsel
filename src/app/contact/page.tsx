'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faClock,
  faUser,
  faPaperPlane,
  faCheck,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const practiceAreas = [
    'Arbitration & Mediation',
    'Consumer Disputes & Protection',
    'Conveyancing & Wills',
    'Corporate & Commercial Advisory',
    'Employment & Labour Service Law',
    'Family Law & Matrimonial Disputes',
    'Insolvency & Bankruptcy (IBC) Matters',
    'Litigation & Dispute Resolution',
    'Media, Entertainment & IP',
    'NGO & Non-Profit Advisory',
    'Public Interest & Constitutional Matters',
    'Startup Legal Solutions',
    'Others'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Add document to Firestore with timestamp
      const docRef = await addDoc(collection(db, 'contact_forms'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      console.log('Form submitted successfully with ID:', docRef.id);
      
      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="bg-[#102028] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-[#F8F1E6] opacity-80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Get in touch with our experienced legal team for professional consultation and expert guidance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-[#102028]/10">
              <div className="mb-4 sm:mb-6">
                <h2 className="font-playfair text-[#102028] text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3">
                  Send us a Message
                </h2>
                <p className="text-[#102028] opacity-70 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-[#102028] font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] focus:border-[#102028] transition-all duration-200 bg-[#F8F1E6] text-[#102028] text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-[#102028] font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] focus:border-[#102028] transition-all duration-200 bg-[#F8F1E6] text-[#102028] text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-[#102028] font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] focus:border-[#102028] transition-all duration-200 bg-[#F8F1E6] text-[#102028] text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-[#102028] font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] focus:border-[#102028] transition-all duration-200 bg-[#F8F1E6] text-[#102028] text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {practiceAreas.map((area, index) => (
                      <option key={index} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-[#102028] font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] focus:border-[#102028] transition-all duration-200 bg-[#F8F1E6] text-[#102028] resize-vertical text-sm sm:text-base"
                    placeholder="Describe your legal matter or questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-[#102028] text-[#F8F1E6] hover:bg-[#102028]/90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="inline-block animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-600 mr-2 text-sm sm:text-base" />
                      <p className="text-red-800 text-sm sm:text-base">{submitMessage}</p>
                    </div>
                  </div>
                )}

                {/* Reset Button for Error State */}
                {submitStatus === 'error' && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Try Again
                  </button>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Company Info */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-[#102028]/10">
                <h2 className="font-playfair text-[#102028] text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#102028] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="text-[#F8F1E6] text-sm sm:text-lg" />
                    </div>
                    <div>
                      <h3 className="text-[#102028] font-medium text-base sm:text-lg mb-1">Phone</h3>
                      <p className="text-[#102028] opacity-70 text-sm sm:text-base">+91 70118 03577</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#102028] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="text-[#F8F1E6] text-sm sm:text-lg" />
                    </div>
                    <div>
                      <h3 className="text-[#102028] font-medium text-base sm:text-lg mb-1">Email</h3>
                      <p className="text-[#102028] opacity-70 text-sm sm:text-base">contact@ldcounsels.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#102028] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#F8F1E6] text-sm sm:text-lg" />
                    </div>
                    <div>
                      <h3 className="text-[#102028] font-medium text-base sm:text-lg mb-1">Address</h3>
                      <p className="text-[#102028] opacity-70 text-sm sm:text-base mb-2">
                        <strong>Gurugram Office:</strong><br />
                        Tower F, 802, Park View Spa,<br />
                        Sector 47, Gurugram, Haryana - 122018
                      </p>
                      <p className="text-[#102028] opacity-70 text-sm sm:text-base">
                        <strong>Delhi Office:</strong><br />
                        A-11, Basement, Lajpat Nagar - 3,<br />
                        Delhi - 110024
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#102028] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faClock} className="text-[#F8F1E6] text-sm sm:text-lg" />
                    </div>
                    <div>
                      <h3 className="text-[#102028] font-medium text-base sm:text-lg mb-1">Office Hours</h3>
                      <p className="text-[#102028] opacity-70 text-sm sm:text-base">Mon - Fri: 10:30 - 21:00</p>
                      <p className="text-[#102028] opacity-70 text-sm sm:text-base">Sat: 10:30 - 19:00</p>
                      <p className="text-[#102028] opacity-70 text-sm sm:text-base">Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-[#102028]/10">
                <h2 className="font-playfair text-[#102028] text-xl sm:text-2xl mb-4 sm:mb-6">
                  Follow Us
                </h2>
                <div className="flex space-x-3 sm:space-x-4">

                  <a
                    href="https://www.linkedin.com/company/ld-counsels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#102028] rounded-lg flex items-center justify-center hover:bg-[#102028]/80 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-[#F8F1E6] text-sm sm:text-lg" />
                  </a>
                  <a
                    href="https://www.instagram.com/ldcounsels?igsh=cWFid3NyOWFxZzZ1&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#102028] rounded-lg flex items-center justify-center hover:bg-[#102028]/80 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-[#F8F1E6] text-sm sm:text-lg" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#102028] rounded-lg flex items-center justify-center hover:bg-[#102028]/80 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[#F8F1E6] text-sm sm:text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-[#102028]/10">
              <h2 className="font-playfair text-[#102028] text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 text-center">
                Our Location
              </h2>
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0080534743755!2d77.21932731455172!3d28.630176982434745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2dc6e5ad4d%3A0x896e4ac2a7685fcf!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1642597850450!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Luthra Law Offices Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 