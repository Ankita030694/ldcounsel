'use client';

import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#102028] py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-[#F8F1E6] mx-auto mb-8"></div>
            
            {/* Main Title */}
            <h1 className="font-playfair text-[#F8F1E6] text-5xl sm:text-6xl lg:text-7xl mb-6 font-italic leading-tight">
              Privacy Policy
            </h1>
            
            {/* Subtitle */}
            <p className="text-[#F8F1E6] opacity-95 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
              Your privacy and data protection are fundamental to our commitment to you
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              <div className="w-16 h-px bg-[#F8F1E6] opacity-60"></div>
              <div className="w-3 h-3 bg-[#F8F1E6] rounded-full"></div>
              <div className="w-16 h-px bg-[#F8F1E6] opacity-60"></div>
            </div>
            
            {/* Last Updated */}
            <div className="bg-[#F8F1E6] text-[#102028] px-6 py-3 rounded-full inline-block">
              <span className="font-semibold">Last Updated:</span> 21.08.2025
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-[#F8F1E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#102028] text-[#F8F1E6] px-6 py-2 rounded-full text-sm font-medium mb-6">
                Privacy Commitment
              </div>
              <h2 className="font-playfair text-[#102028] text-3xl sm:text-4xl mb-6 font-italic">
                LD Counsels Privacy Policy
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-[#102028]">
              <p className="text-lg leading-relaxed mb-6">
                LD Counsels ("we," "our," or "us") respects your privacy and is committed to protecting any personal
                information that you may provide while using our website www.ldcounsels.com. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information in compliance with the
                Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices
                and Procedures and Sensitive Personal Data or Information) Rules, 2011, as applicable in India.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">1</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Information We Collect
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#F8F1E6] p-6 rounded-xl">
                <h4 className="font-playfair text-[#102028] text-xl font-semibold mb-4">Personal Information</h4>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  When you fill out our contact form, subscribe to updates, or reach out for
                  consultation, we may collect your name, email address, phone number, and any information
                  voluntarily shared by you.
                </p>
              </div>
              
              <div className="bg-[#F8F1E6] p-6 rounded-xl">
                <h4 className="font-playfair text-[#102028] text-xl font-semibold mb-4">Automatic Data</h4>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  We may collect certain non-personal information such as IP address, browser type,
                  device details, and cookies for analytics and improving user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Use of Information */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">2</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Use of Information
              </h3>
            </div>
            
            <p className="text-[#102028] text-lg mb-6">We use your information to:</p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  Respond to your queries and provide legal services.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  Communicate with you regarding updates, scheduling, or legal notices.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  Improve our website's functionality and security.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  Comply with applicable legal obligations.
                </p>
              </div>
            </div>
          </div>

          {/* Disclosure of Information */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">3</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Disclosure of Information
              </h3>
            </div>
            
            <p className="text-[#102028] text-lg mb-6">
              We do not sell, trade, or rent your personal data to third parties. Information may only be shared:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  With your consent.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  If required by law, court order, or regulatory authority.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#102028] opacity-80 leading-relaxed">
                  With trusted third-party service providers (such as website hosting/IT support) bound by
                  confidentiality obligations.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">4</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Data Security
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                We adopt reasonable security measures to protect your information. However, no system is fully
                secure, and we cannot guarantee absolute data security.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">5</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Cookies
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                Our website may use cookies to improve functionality and enhance user experience. You may
                disable cookies in your browser settings, though some features may not function properly.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">6</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Your Rights
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                You may request access to, correction of, or deletion of your personal data by contacting us at{' '}
                <a href="mailto:contact@ldcounsels.com" className="text-[#102028] font-semibold underline hover:opacity-80">
                  contact@ldcounsels.com
                </a>.
              </p>
            </div>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">7</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Changes to Privacy Policy
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                We may update this Privacy Policy periodically, and the revised version will be posted on this page
                with the "Last Updated" date.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#102028] p-8 lg:p-12 rounded-2xl text-[#F8F1E6] mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#F8F1E6] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#102028] text-xl font-bold">8</span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-semibold">
                Contact
              </h3>
            </div>
            
            <p className="text-lg mb-6">For privacy-related concerns, please write to us at:</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-[#F8F1E6] rounded-full"></div>
                <div>
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:contact@ldcounsels.com" className="underline hover:opacity-80">
                    contact@ldcounsels.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-[#F8F1E6] rounded-full"></div>
                <div>
                  <span className="font-semibold">Address:</span> [office address tbd]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#102028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-[#F8F1E6] p-12 rounded-2xl shadow-lg border border-[#102028]/10">
              <h2 className="font-playfair text-[#102028] text-3xl sm:text-4xl mb-6 font-italic">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-[#102028] opacity-80 text-lg mb-8 max-w-2xl mx-auto">
                We're committed to transparency and protecting your privacy. If you have any questions or concerns, 
                please don't hesitate to reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-[#102028] text-[#F8F1E6] px-8 py-4 rounded-lg hover:bg-[#102028]/90 transition-all duration-300 font-semibold text-lg"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:contact@ldcounsels.com" 
                  className="border-2 border-[#102028] text-[#102028] px-8 py-4 rounded-lg hover:bg-[#102028] hover:text-[#F8F1E6] transition-all duration-300 font-semibold text-lg"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
