'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Auto-redirect to home page after 10 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#F8F1E6] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
     

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-[#102028]/10">
          <h1 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl mb-6 font-italic">
            Thank You!
          </h1>
          
          <div className="w-24 h-1 bg-[#102028] mx-auto mb-8"></div>
          
          <p className="text-[#102028] text-lg sm:text-xl mb-6 leading-relaxed opacity-90">
            Your message has been sent successfully. Our legal team will review your inquiry and get back to you within 24-48 hours.
          </p>
          
          <p className="text-[#102028] text-base mb-8 opacity-80">
            We appreciate you choosing LD Counsels for your legal needs.
          </p>

          {/* Contact Info */}
          <div className="bg-[#102028] text-[#F8F1E6] p-6 rounded-xl mb-8">
            <h3 className="font-playfair text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
            <p className="text-sm opacity-90 mb-2">Call us directly:</p>
            <p className="text-lg font-semibold">+91 70118 03577</p>
            <p className="text-sm opacity-90 mt-2">Monday - Friday: 9:00 AM - 7:00 PM</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-[#102028] text-[#F8F1E6] px-8 py-3 rounded-lg hover:bg-[#102028]/90 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Back to Home
            </Link>
            
            <Link 
              href="/contact"
              className="border-2 border-[#102028] text-[#102028] px-8 py-3 rounded-lg hover:bg-[#102028] hover:text-[#F8F1E6] transition-all duration-300 font-semibold text-lg flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Send Another Message
            </Link>
          </div>

          {/* Auto-redirect Notice */}
          <p className="text-[#102028] text-sm opacity-60 mt-8">
            You will be automatically redirected to the home page in 10 seconds
          </p>
        </div>
      </div>
    </div>
  );
} 