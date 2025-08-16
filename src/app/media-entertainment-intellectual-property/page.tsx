'use client';

import type { Metadata } from "next";
import { useState } from "react";



export default function MediaEntertainmentIntellectualPropertyPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Q1. How do I protect my content from piracy?",
      answer: "We help by securing rights registrations, drafting strong contracts, and taking swift legal action (injunctions, take-down notices) against infringers."
    },
    {
      question: "Q2. Do I really need to register my copyright or trademark?",
      answer: "While copyright exists automatically upon creation, registration strengthens your legal claim and makes enforcement easier. Trademark registration is essential for exclusive rights over a brand name or logo."
    },
    {
      question: "Q3. What if someone uses my work without permission?",
      answer: "We can send legal notices, initiate court action, or pursue arbitration/mediation depending on the situation and your preference."
    },
    {
      question: "Q4. Can startups in the creative industry afford your services?",
      answer: "Absolutely. We work with flexible fee structures for independent creators and emerging companies."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 leading-tight">
              Media, Entertainment and Intellectual Property
            </h1>
            <p className="text-[#102028] opacity-80 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed">
              Protecting creativity and innovation with comprehensive legal solutions for the entertainment industry
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Introduction */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none prose-invert">
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  The media and entertainment industry thrives on creativity, but without proper legal protection, even the most innovative ideas can be vulnerable. From film production agreements to music licensing, from managing publicity rights to enforcing trademarks, the legal framework around creative industries is complex, fast-changing, and highly competitive.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  At LD Counsels, we help artists, production houses, broadcasters, OTT platforms, event organisers, advertising agencies, and digital content creators safeguard their rights and monetise their work effectively. Our Media, Entertainment & IP practice offers comprehensive legal services covering contract negotiation, intellectual property registration and enforcement, licensing, distribution, and dispute resolution.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Whether you're a filmmaker negotiating with a streaming platform, a musician protecting your compositions, or a brand defending its trademark, we provide tailored, industry-savvy legal advice so you can focus on creating while we focus on protecting.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Our team drafts and negotiates production agreements, talent contracts, licensing deals, and distribution arrangements that safeguard our clients' rights while maximising their commercial value. We also provide comprehensive intellectual property protection from trademark and copyright registration to infringement enforcement ensuring your creative output is secure in a competitive marketplace.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  Whether you're an emerging artist, a film studio, a digital creator, or a media conglomerate, we combine industry insight with legal expertise to help you focus on your craft while we handle the legalities.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Key Benefits</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Industry-specific Legal Strategies</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">That align with creative goals.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Protection and Enforcement</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Of IP rights in India and abroad.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Strong Contract Negotiation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">To secure favourable terms.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">End-to-End Support</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">From concept to distribution.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Comprehensive IP Portfolio Management</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Registration, licensing, renewals, and enforcement under one roof.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Our Approach</h2>
              <div className="prose prose-lg lg:prose-xl max-w-none prose-invert mb-8 lg:mb-12">
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Media and Intellectual Property disputes often move quickly a leaked film, a stolen design, or an unauthorised broadcast can happen overnight. We believe in proactive, preventive legal strategies to avoid such issues and swift, decisive action when protection is needed.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Industry Insight</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Understanding how film, music, television, OTT, publishing, and digital platforms operate.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Holistic Protection</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Covering all aspects of creative rights: copyrights, trademarks, designs, and publicity rights.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Negotiation Strength</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Ensuring contracts are commercially beneficial while protecting core rights.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Enforcement Capability</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Taking urgent legal action for infringement or breach of contract.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Why clients choose LD Counsels for Media, Entertainment & Intellectual Property?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Proven Experience</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">In high-value entertainment contracts and IP litigation.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Pan-India Capability</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">With a strong network for cross-border enforcement.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Dual Expertise</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">In both transactional and contentious IP work.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Deep Legal Understanding</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Of Indian Copyright Act, Trade Marks Act, and Designs Act, as well as relevant IT and broadcasting laws.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Collaborative Approach</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Ability to work closely with production teams, marketing agencies, and PR firms to ensure legal compliance from script to screen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Detailed Services</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Intellectual Property Protection */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Intellectual Property Protection</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Copyright registration for scripts, songs, films, software, designs, and literary works.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Trademark registration and prosecution for brand names, logos, and slogans.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Design and patent advisory for product aesthetics and innovations.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Managing renewals, oppositions, and cancellations.</span>
                    </div>
                  </div>
                </div>

                {/* Entertainment Contracts & Negotiations */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Entertainment Contracts & Negotiations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Drafting and reviewing film and TV production agreements, OTT content licensing and distribution contracts, music recording and publishing agreements, artist management contracts, sponsorship and brand endorsement deals, event production and venue agreements.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Negotiating terms that secure both creative control and commercial benefit.</span>
                    </div>
                  </div>
                </div>

                {/* Licensing & Distribution */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Licensing & Distribution</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Structuring domestic and international content licensing.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Advising on syndication, re-make rights, adaptation rights, and merchandising agreements.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Ensuring compliance with censorship and broadcasting guidelines.</span>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property Enforcement & Dispute Resolution */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Intellectual Property Enforcement & Dispute Resolution</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Sending cease-and-desist notices.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Filing for injunctions in urgent infringement cases.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Representing clients before the Intellectual Property Appellate Board (IPAB), commercial courts, and arbitration panels.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Pursuing cross-border IP enforcement through partner networks.</span>
                    </div>
                  </div>
                </div>

                {/* Digital & Online Content Advisory */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Digital & Online Content Advisory</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Guidance on social media compliance, influencer agreements, and online brand protection.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Advising OTT platforms on licensing, content classification, and data privacy.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#102028]/20 pb-6">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left flex items-center justify-between group"
                    >
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-3 group-hover:text-[#102028]/70 transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-[#102028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="mt-3 animate-fadeIn">
                        <p className="text-[#102028] opacity-80 leading-relaxed text-sm lg:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-center">
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Your creativity deserves uncompromising legal protection. At LD Counsels, we ensure your media, entertainment, and IP rights are secure, enforceable, and commercially rewarding so you can focus on creating, performing, and inspiring.
                </p>
                <div className="text-center">
                  <button className="bg-[#F8F1E6] text-[#102028] px-8 py-4 lg:px-12 lg:py-6 rounded-lg font-medium text-lg lg:text-xl hover:bg-[#F8F1E6]/90 transition-colors duration-300 shadow-sm hover:shadow-md">
                    Contact Us Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
} 