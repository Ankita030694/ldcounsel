'use client';

import { useState, useEffect } from 'react';

export default function DisclaimerPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/20">
      <div className="bg-[#F8F1E6] p-8 max-w-2xl mx-4 rounded-lg shadow-2xl border-2 border-[#102028] relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#102028] hover:text-gray-600 text-2xl font-bold"
          aria-label="Close disclaimer"
        >
          ×
        </button>
        
        <div className="text-[#102028] space-y-4">
          <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
          
          <div className="text-sm leading-relaxed space-y-3">
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
            onClick={handleClose}
            className="mt-6 px-6 py-2 bg-[#102028] text-[#F8F1E6] rounded hover:bg-opacity-90 transition-colors duration-200"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
} 