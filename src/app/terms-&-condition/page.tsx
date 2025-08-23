'use client';

import React from 'react';

export default function TermsAndConditionsPage() {
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
              Terms & Conditions
            </h1>
            
            {/* Subtitle */}
            <p className="text-[#F8F1E6] opacity-95 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
              Understanding our terms of service and legal framework
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

      {/* Terms & Conditions Content */}
      <section className="py-20 bg-[#F8F1E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#102028] text-[#F8F1E6] px-6 py-2 rounded-full text-sm font-medium mb-6">
                Legal Framework
              </div>
              <h2 className="font-playfair text-[#102028] text-3xl sm:text-4xl mb-6 font-italic">
                LD Counsels Terms & Conditions
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-[#102028]">
              <p className="text-lg leading-relaxed mb-6">
                Welcome to LD Counsels' website. By accessing or using our website www.ldcounsels.com you agree
                to comply with and be bound by the following Terms & Conditions ("T&C"). If you do not agree,
                please refrain from using our website.
              </p>
            </div>
          </div>

          {/* No Attorney-Client Relationship */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">1</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                No Attorney–Client Relationship
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                Use of this website or contacting us via forms/emails does not create an attorney-client relationship.
                A formal engagement is only established once LD Counsels issues a written engagement letter or
                agreement and requisite fees are paid.
              </p>
            </div>
          </div>

          {/* Use of Website Content */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">2</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Use of Website Content
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                All content provided is for general informational purposes only and does not constitute legal advice.
                You must not reproduce, distribute, or use our content without prior written permission.
              </p>
            </div>
          </div>

          {/* User Conduct */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">3</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                User Conduct
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                You agree not to misuse this website, including attempts to hack, spam, or post
                defamatory/infringing material.
              </p>
            </div>
          </div>

          {/* Fees & Payments */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">4</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Fees & Payments
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#F8F1E6] p-6 rounded-xl">
                <p className="text-[#102028] text-lg leading-relaxed mb-4">
                  Any fees paid towards consultation, retainership, or legal services are non-refundable, unless
                  otherwise expressly agreed in writing by LD Counsels.
                </p>
                <p className="text-[#102028] text-lg leading-relaxed">
                  Fee structures are communicated transparently prior to engagement.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#102028] opacity-80 leading-relaxed">
                    All consultation fees paid in advance are non-refundable, regardless of whether the client chooses
                    to proceed further with engagement or not.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#102028] opacity-80 leading-relaxed">
                    Fees paid towards drafting, litigation, compliance, advisory, or any other professional legal service
                    are also non-refundable once work has commenced.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#102028] opacity-80 leading-relaxed">
                    In certain cases where no work has been initiated and cancellation is requested in writing within 24 hours of payment, partial refunds may be considered at the sole discretion of LD Counsels.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#102028] opacity-80 leading-relaxed">
                    Retainership or monthly engagement fees are payable in advance and non-refundable.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#102028] opacity-80 leading-relaxed">
                    If a client wishes to discontinue, they must provide written notice at least 15 days prior to the next billing cycle.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#102028] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#102028] opacity-80 leading-relaxed">
                    Any approved refund will be processed within 15–21 business days, through the same mode of payment used by the client.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Force Majeure */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">5</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Force Majeure / Unforeseen Circumstances
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                In rare cases where LD Counsels is unable to provide the agreed service due to unforeseen
                circumstances (such as advocate unavailability, jurisdictional restrictions, or regulatory prohibitions),
                an alternate arrangement or proportional refund may be offered at our discretion.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">6</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Limitation of Liability
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                We strive for accuracy but do not guarantee completeness or suitability of website content. LD
                Counsels shall not be liable for any loss, damage, or reliance caused by using this website.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">7</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Third-Party Links
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                This website may contain links to third-party sites. We are not responsible for the content, privacy,
                or reliability of such websites.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">8</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Intellectual Property
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                All trademarks, logos, designs, and content on this website are the exclusive property of LD
                Counsels. Unauthorized use is prohibited.
              </p>
            </div>
          </div>

          {/* Governing Law & Jurisdiction */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">9</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Governing Law & Jurisdiction
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any dispute
                shall be subject to the exclusive jurisdiction of the courts at New Delhi, India.
              </p>
            </div>
          </div>

          {/* Amendments */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10 mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#102028] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#F8F1E6] text-xl font-bold">10</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold">
                Amendments
              </h3>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 rounded-xl">
              <p className="text-[#102028] text-lg leading-relaxed">
                We may revise these T&C at any time, and such changes will be effective immediately upon posting
                on this website.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#102028] p-8 lg:p-12 rounded-2xl text-[#F8F1E6] mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#F8F1E6] rounded-xl flex items-center justify-center mr-6">
                <span className="text-[#102028] text-xl font-bold">11</span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-semibold">
                Contact
              </h3>
            </div>
            
            <p className="text-lg mb-6">For clarifications regarding these Terms & Conditions, please contact us at:</p>
            
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
                Questions About Our Terms?
              </h2>
              <p className="text-[#102028] opacity-80 text-lg mb-8 max-w-2xl mx-auto">
                We're committed to transparency and clear communication. If you have any questions about our terms 
                and conditions, please don't hesitate to reach out to us.
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
