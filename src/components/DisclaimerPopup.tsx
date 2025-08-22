'use client';

import { useState, useEffect } from 'react';

export default function DisclaimerPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAcceptedDisclaimer) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAccept = () => {
    // Store acceptance in localStorage
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/20 p-4">
      <div className="bg-[#F8F1E6] p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto rounded-lg shadow-2xl border-2 border-[#102028] relative w-full">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[#102028] hover:text-gray-600 text-xl sm:text-2xl font-bold"
          aria-label="Close disclaimer"
        >
          ×
        </button>
        
        <div className="text-[#102028] space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Disclaimer</h2>
          
          <div className="text-xs sm:text-sm leading-relaxed space-y-2 sm:space-y-3">
            <p>
              As per the current rules of the Bar Council of India, law firms are restricted from advertising or soliciting work through public communications. This website is intended solely for the purpose of providing basic information about LD Counsels, and is made available to the viewer upon their specific request.
            </p>
            
            <p>
              LD Counsels (including its lawyers, associates, affiliates, or anyone connected with the firm) does not seek to solicit clients or advertise its services through this medium. The content herein is for informational purposes only and should not be construed as legal advice.
            </p>
            
            <p>
              We do not accept any responsibility for decisions made by readers based solely on the information available on this website. For advice on specific legal matters, please contact us directly to schedule a consultation.
            </p>
          </div>
          
          <button
            onClick={handleAccept}
            className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-[#102028] text-[#F8F1E6] rounded hover:bg-opacity-90 transition-colors duration-200 text-sm sm:text-base"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
} 