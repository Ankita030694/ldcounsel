'use client';

import type { Metadata } from "next";
import { useState } from "react";



export default function LitigationDisputeResolutionPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Q1. How long will my case take?",
      answer: "It depends on the complexity, court workload, and opposing party's conduct. We aim to expedite proceedings wherever possible through strategic filing and active follow-ups."
    },
    {
      question: "Q2. Can you represent me outside Delhi NCR?",
      answer: "Yes. Our network of 150+ lawyers ensures seamless representation across India."
    },
    {
      question: "Q3. Will I be updated regularly?",
      answer: "Absolutely. We maintain transparent communication and keep you informed at every stage."
    },
    {
      question: "Q4: How long does a litigation process take in India?",
      answer: "Timelines depend on the nature of the case, the forum, and the complexity. We work to streamline proceedings and minimise delays wherever possible."
    },
    {
      question: "Q5: Can I avoid going to court if I have a strong case?",
      answer: "In many cases, we explore pre-litigation settlement or mediation first. However, if the matter cannot be resolved amicably, we pursue litigation with full force."
    },
    {
      question: "Q6. What are my chances of success?",
      answer: "We provide an honest assessment based on the facts, law, and forum. Our goal is to empower you to make informed decisions, not to promise unrealistic results."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 leading-tight">
              Litigation & Dispute Resolution
            </h1>
            <p className="text-[#102028] opacity-80 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed">
              Strategic legal representation across all Courts and Tribunals with a network of 150+ lawyers nationwide
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
                  In today's fast-moving world, disputes can arise unexpectedly whether it's a contractual disagreement, a high-stakes commercial conflict, a service law grievance, or a sensitive personal matter. Navigating these challenges demands more than just legal knowledge; it requires strategy, foresight, and the ability to anticipate the opposition's next move.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  At LD Counsels, we understand that every dispute is not just about the law it's about your business, your reputation, and your peace of mind.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  With a seasoned team of litigators and a trusted network of over 150 lawyers across India, we represent clients before Trial Courts, High Courts, the Supreme Court of India, specialised Tribunals, and quasi-judicial bodies. From defending your rights to enforcing your claims, our goal is clear to deliver decisive, result-oriented advocacy while keeping you informed and supported at every step, we work towards securing the best possible outcome for you.
                </p>
              </div>
            </div>
          </div>
             {/* Our Litigation Expertise */}
             <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#102028] relative overflow-hidden border border-[#102028]/10 shadow-sm">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23102028' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Header */}
              <div className="text-center mb-16 lg:mb-20">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-[#102028]/10 rounded-full mb-6 lg:mb-8">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#102028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8">
                  Our Litigation Expertise
                </h2>
                <p className="text-[#102028] text-lg lg:text-xl xl:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive legal solutions across all practice areas with proven expertise and dedicated representation
                </p>
              </div>
              
              {/* Expertise Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Civil Litigation */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-[#102028]/10 to-[#102028]/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-[#102028]/20 hover:border-[#102028]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#102028]/10 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#102028]/20 to-[#102028]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-playfair text-[#102028] text-2xl lg:text-3xl xl:text-4xl mb-2">Civil Litigation</h3>
                          <p className="text-[#102028] opacity-70 text-sm lg:text-base">Property & Contract Disputes</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Property disputes, injunctions, recovery suits</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Breach of contract and partnership disagreements</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Consumer protection and defective goods/services disputes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Criminal Litigation */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-[#102028]/10 to-[#102028]/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-[#102028]/20 hover:border-[#102028]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#102028]/10 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#102028]/20 to-[#102028]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-playfair text-[#102028] text-2xl lg:text-3xl xl:text-4xl mb-2">Criminal Litigation</h3>
                          <p className="text-[#102028] opacity-70 text-sm lg:text-base">Defense & Prosecution</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Bail applications, criminal trials, and appeals</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">White-collar crimes and fraud-related prosecutions</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Cheque bounce and financial offence cases</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">NDPS Act Matters & IT Act cases</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Commercial Disputes */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-[#102028]/10 to-[#102028]/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-[#102028]/20 hover:border-[#102028]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#102028]/10 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#102028]/20 to-[#102028]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-playfair text-[#102028] text-2xl lg:text-3xl xl:text-4xl mb-2">Commercial Disputes</h3>
                          <p className="text-[#102028] opacity-70 text-sm lg:text-base">Corporate & Business Law</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">High-value corporate litigation and shareholder disputes</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Breach of business agreements and non-compete violations</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Debt recovery and enforcement of contractual rights</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Law Matters */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-[#102028]/10 to-[#102028]/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-[#102028]/20 hover:border-[#102028]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#102028]/10 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#102028]/20 to-[#102028]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-playfair text-[#102028] text-2xl lg:text-3xl xl:text-4xl mb-2">Service Law Matters</h3>
                          <p className="text-[#102028] opacity-70 text-sm lg:text-base">Employment & Labor Law</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Illegal termination or suspension challenges</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Pay scale, promotion, and pension disputes</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Representation before CAT and service Tribunals</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Debt recovery and enforcement of contractual rights</span>
                      </div>
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                        <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Breach of business agreements and non-compete violations</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialised Tribunals */}
                <div className="group relative lg:col-span-2">
                  <div className="bg-gradient-to-br from-[#102028]/10 to-[#102028]/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-[#102028]/20 hover:border-[#102028]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#102028]/10 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#102028]/20 to-[#102028]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-playfair text-[#102028] text-2xl lg:text-3xl xl:text-4xl mb-2">Specialised Tribunals</h3>
                          <p className="text-[#102028] opacity-70 text-sm lg:text-base">Expert Representation Across All Forums</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                          <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">NCLT/NCLAT for company law matters</span>
                        </div>
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                          <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Consumer Commissions for consumer rights enforcement</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                          <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Debt Recovery Tribunals for banking and finance disputes</span>
                        </div>
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                          <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Criminal appeals before High Courts and Supreme Court</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                          <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">Special Leave Petitions (SLPs) challenging High Courts orders</span>
                        </div>
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-[#102028] rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                          <span className="text-[#102028] text-sm lg:text-base opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">IT Act cases including hacking, phishing, and online defamation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-6 lg:mb-8">Our Approach</h2>
              <div className="prose prose-lg lg:prose-xl max-w-none prose-invert">
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  We believe litigation is both an art and a science. At LD Counsels, our approach blends deep legal research, precise drafting, and persuasive court advocacy to build cases that stand up to the most rigorous scrutiny. We start by understanding your objectives, assessing all legal and practical angles, and then designing a strategy that would be the most suitable in your case.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  What sets us apart is our ability to combine meticulous case preparation with a practical, business-minded outlook. We don't just fight cases, we guide you on the potential outcomes, timelines, and costs so you can make informed decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Why Choose Us for Litigation?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">All-round Representation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Civil, criminal, commercial, service law, consumer, telecom disputes and more under one roof.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Nationwide Reach</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Seamless representation across jurisdictions with our extensive network.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Tailored Strategy</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">No generic templates; every case gets a custom-built approach.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Client-first Communication</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">You stay informed, without being overwhelmed by legal jargon.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Full-Spectrum Support</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">From urgent injunctions to appellate remedies, we cover it all.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Comprehensive Preparation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Meticulous drafting, exhaustive research, and thorough case-building to give you a decisive edge.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">End-to-End Representation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">From initial notice to final appeal.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Reduced Litigation Stress</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">We handle the complexity so you can focus on your life or business.</p>
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
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none prose-invert text-center">
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  Whether you're facing a complex corporate battle, a wrongful dismissal, or a personal legal challenge, LD Counsels is your trusted partner for litigation and dispute resolution across Delhi NCR and Pan-India. Our legal team is committed to protecting your rights, preserving your interests, and pursuing justice without compromise.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-8 lg:mb-12">
                  LD Counsels is ready to stand by you, fight for you, and guide you to the best possible outcome.
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