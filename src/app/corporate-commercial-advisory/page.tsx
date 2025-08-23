'use client';

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";



export default function CorporateCommercialAdvisoryPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Q1. How do you ensure contracts are enforceable?",
      answer: "We draft contracts in compliance with Indian laws while making them commercially practical, clear, and enforceable in court or arbitration."
    },
    {
      question: "Q2. Can you act as ongoing legal counsel for our business?",
      answer: "Yes. Many of our corporate clients retain us for regular advisory work so they always have timely legal support on call."
    },
    {
      question: "Q3. What if a commercial contract dispute arises?",
      answer: "We try to resolve disputes through negotiation or mediation first, but we are fully equipped to represent you in litigation or arbitration if needed."
    },
    {
      question: "Q4. Do you work with startups?",
      answer: "Yes. We work with businesses at all stages from early-stage startups to multinational corporations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 leading-tight">
              Corporate & Commercial Advisory
            </h1>
            <p className="text-[#102028] opacity-80 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed">
              Strategic legal solutions for business growth with commercial acumen and legal precision
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
                  In today's fast-paced business landscape, legal strategy is as important as business strategy. From structuring new ventures to negotiating deals, businesses need legal advisors who can combine commercial acumen with legal precision.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  At LD Counsels, our Corporate & Commercial Advisory practice provides end-to-end legal support for companies of all sizes, from startups finding their footing to established corporations navigating complex regulatory landscapes. We handle everything from drafting and negotiating contracts to corporate governance advisory, mergers & acquisitions (M&A), joint ventures, regulatory compliance, and general corporate RFP management.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Compliance isn't just about avoiding penalties, it's about building trust, protecting your brand, and enabling smooth operations.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Our Regulatory & Compliance practice helps businesses meet statutory, industry-specific, and operational regulations with precision. From POSH policy implementation and labour law compliance to sector-specific regulatory filings, we create customised compliance frameworks that reduce legal risk and operational friction.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  We also conduct audits, provide training sessions, and set up monitoring mechanisms so you can focus on your business while we keep you on the right side of the law.
                </p>
              </div>
            </div>
          </div>

          {/* Our Goal */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-center">
                <p className="text-[#102028] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Our goal is simple: to minimise legal risk, ensure compliance, and drive sustainable business growth. We don't just draft documents we become your strategic partners, helping you make legally sound decisions that align with your business objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Key Benefits</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Full-spectrum Corporate Legal Support</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">From company formation to complex commercial transactions.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Risk Minimisation</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Proactive structuring of contracts and governance to avoid future disputes.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Regulatory Compliance</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Keeping your business aligned with Indian and international laws.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Business Growth Support</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Legal strategies that help you scale operations safely.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Cross-functional Capability</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Combining corporate law expertise with litigation support when disputes arise.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Workplace Confidence</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">POSH training and clear policy implementation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Our Approach</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Understanding Your Business</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">We invest time in learning your operations, market, and challenges.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Proactive Legal Planning</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Identifying potential risks before they become disputes.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Commercially Viable Solutions</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Balancing legal safety with business flexibility.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Clear Communication</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">No legal jargon, just actionable advice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us for Corporate & Commercial Advisory */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Why Choose Us for Corporate & Commercial Advisory</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Extensive Experience</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Across diverse industries — manufacturing, technology, retail, finance, real estate, and more.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Multi-jurisdictional Expertise</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">In multi-jurisdictional transactions and cross-border compliance.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Versatile Capability</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Ability to handle both routine corporate matters and high-stakes strategic transactions.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Strong Track Record</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">In contract drafting and negotiation that protects client interests.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">National Presence</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Presence in Delhi NCR with capability to handle corporate advisory pan-India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory & Compliance Benefits */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Regulatory & Compliance Benefits</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Zero Compliance Headaches</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">We handle deadlines, filings, and documentation.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Custom Frameworks</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Tailored policies for your specific industry and business size.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Regulatory Watch</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Ongoing updates on changes in law affecting your business.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Workplace Confidence</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">POSH training and clear policy implementation.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Risk Reduction</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Early detection and resolution of potential legal issues.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us for Regulatory & Compliance */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Why Choose Us for Regulatory & Compliance</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Proactive Approach</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">We don't just react to compliance issues, we prevent them.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Industry-Specific Expertise</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">From IT to manufacturing to hospitality, we know your sector's rules.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Practical Guidance</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Compliance advice that's easy for your team to understand and apply.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">National Reach</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Consistent compliance management across all your business locations in India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Detailed Services</h2>
              <p className="text-[#102028] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-8 lg:mb-12 text-center">
                Our Corporate & Commercial Advisory services include:
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Corporate Structuring & Governance */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#102028] text-xl lg:text-2xl xl:text-3xl mb-4">Corporate Structuring & Governance</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Drafting Memorandum and Articles of Association, shareholder agreements, and joint venture agreements.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Advising on corporate governance, board procedures, and compliance under the Companies Act, 2013.</span>
                    </div>
                  </div>
                </div>

                {/* Contracts & Commercial Agreements */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#102028] text-xl lg:text-2xl xl:text-3xl mb-4">Contracts & Commercial Agreements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Drafting, reviewing, and negotiating supply & distribution agreements, franchise agreements, service level agreements (SLAs), employment and consultancy contracts, non-disclosure agreements (NDAs), licensing agreements, and technology transfer agreements.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Ensuring contracts are enforceable, commercially balanced, and risk-mitigated.</span>
                    </div>
                  </div>
                </div>

                {/* Mergers, Acquisitions & Joint Ventures */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#102028] text-xl lg:text-2xl xl:text-3xl mb-4">Mergers, Acquisitions & Joint Ventures</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Legal due diligence for M&A deals.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Structuring transactions for tax efficiency and compliance.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Negotiating terms and drafting transaction documents.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Handling post-merger integration legalities.</span>
                    </div>
                  </div>
                </div>

                {/* Regulatory & Compliance Advisory */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#102028] text-xl lg:text-2xl xl:text-3xl mb-4">Regulatory & Compliance Advisory</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Guidance on compliance with SEBI, RBI, FEMA, and other sector-specific regulations.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Advising on CSR obligations, ESG compliance, and anti-bribery/anti-corruption frameworks.</span>
                    </div>
                  </div>
                </div>

                {/* Dispute Avoidance & Resolution */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#102028] text-xl lg:text-2xl xl:text-3xl mb-4">Dispute Avoidance & Resolution</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Pre-dispute advisory to minimise litigation risk.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] text-sm lg:text-base opacity-90">Negotiated settlements and representation in commercial arbitrations if disputes arise.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#F8F1E6]/20 pb-6">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left flex items-center justify-between group"
                    >
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-3 group-hover:text-[#F8F1E6]/70 transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-[#F8F1E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="mt-3 animate-fadeIn">
                        <p className="text-[#F8F1E6] opacity-80 leading-relaxed text-sm lg:text-base">
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
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 text-[#102028] border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-center">
                <p className="text-[#102028] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Strong legal foundations lead to stronger businesses. At LD Counsels, our Corporate & Commercial Advisory team ensures your contracts, governance, and compliance are airtight, allowing you to focus on what you do best growing your business.
                </p>
                <div className="text-center">
                  <Link href="/contact" className="inline-block bg-[#102028] text-[#F8F1E6] px-8 py-4 lg:px-12 lg:py-6 rounded-lg font-medium text-lg lg:text-xl hover:bg-[#102028]/90 transition-colors duration-300 shadow-sm hover:shadow-md">
                    Get in Touch Today
                  </Link>
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