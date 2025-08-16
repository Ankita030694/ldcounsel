'use client';

import type { Metadata } from "next";
import { useState } from "react";



export default function ArbitrationMediationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Q1. How is arbitration different from litigation?",
      answer: "Arbitration is a private process where parties agree to have disputes resolved by one or more arbitrators instead of a Hon'ble Judge at the Court. It is generally faster, more flexible, and confidential."
    },
    {
      question: "Q2. Is mediation legally binding?",
      answer: "A mediation settlement becomes binding when parties sign a settlement agreement. This agreement can be enforced in court if necessary."
    },
    {
      question: "Q3. What happens if the other party refuses to comply with the arbitral award?",
      answer: "We can initiate enforcement proceedings in court. For foreign awards, enforcement is carried out under the New York Convention or Geneva Convention, depending on the country."
    },
    {
      question: "Q4. Is arbitration cheaper than litigation?",
      answer: "While arbitration can have its own costs (arbitrator's fees, venue charges), the shorter timelines and procedural flexibility often make it more cost-effective in the long run."
    },
    {
      question: "Q5. How to choose an Arbitrator?",
      answer: "The procedure for appointing an arbitrator or an arbitral tribunal is usually specified in the arbitration clause of the parties' agreement. In many cases, both the presiding arbitrator and any arbitrators appointed in default are selected by a neutral and impartial appointing authority."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 leading-tight">
              Arbitration & Mediation
            </h1>
            <p className="text-[#102028] opacity-80 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed">
              Alternative dispute resolution solutions for faster, confidential, and cost-effective settlements
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
                  In a world where time, confidentiality, and business relationships are increasingly valuable, traditional courtroom litigation is not always the most efficient way to resolve disputes. Arbitration and mediation collectively known as alternative dispute resolution (ADR) offer parties a faster, more flexible, and often more cost-effective path to settlement, without compromising on fairness or enforceability.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  At LD Counsels, we understand that every dispute is unique. Sometimes, the best outcome comes not from a public court battle but from a private, negotiated, and binding resolution. Our arbitration and mediation practice, headquartered in Delhi NCR and operating Pan-India, serves clients across industries from construction and infrastructure to technology, finance, manufacturing, and entertainment. Our Arbitration & Mediation team offers efficient, cost-effective, and discreet ways to resolve disputes without compromising on fairness or outcomes.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  Whether you are involved in a high-value international arbitration, a domestic commercial dispute, or a sensitive contractual disagreement, we have the expertise to guide you through every stage, ensuring your interests are fully protected. We ensure the process is structured, fair, and strategically managed from start to finish.
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
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Faster Resolution</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Compared to traditional court cases.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Cost Savings</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Through streamlined procedures.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Confidential Process</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">That protects sensitive business information.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Greater Control</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Over procedure, venue, and selection of arbitrators.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Final & Binding</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Decisions with enforceability under Indian and international law.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Relationship Preservation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Through collaborative problem-solving in mediation.</p>
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
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  We believe ADR should be proactive, strategic, and client-centric. Our lawyers are trained not only in the substantive law but also in the art of negotiation and persuasive advocacy before arbitral tribunals. We aim to resolve disputes in a way that safeguards your rights while minimising disruption to your operations or personal life.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Why Choose Us for Arbitration & Mediation?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Bespoke Strategy</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Tailored approach for every dispute whether you want to preserve relationships or adopt a firm stance.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Comprehensive Understanding</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Skilled in both domestic and international arbitration under Indian Arbitration & Conciliation Act, UNCITRAL, ICC, LCIA, and SIAC rules.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Confidential Handling</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">All proceedings and settlements are conducted with the highest levels of privacy and discretion.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Strong Case Preparation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Detailed research, persuasive pleadings, and evidence strategies tailored to arbitration proceedings.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Expert Mediators</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Helping clients reach amicable settlements while preserving relationships.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="bg-[#102028] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 text-[#F8F1E6]">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Detailed Services</h2>
              <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-8 lg:mb-12 text-center">
                We handle a wide range of arbitration and mediation matters, including:
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Domestic Arbitration */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Domestic Arbitration</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Representation before arbitral tribunals under the Indian Arbitration & Conciliation Act.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Commercial contract disputes, joint venture disagreements, and partnership dissolutions.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Construction, engineering, and infrastructure-related disputes.</span>
                    </div>
                  </div>
                </div>

                {/* Mediation & Negotiated Settlements */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Mediation & Negotiated Settlements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Acting as counsel during court-referred and private mediations.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Strategic negotiation of settlements before disputes escalate.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Drafting legally binding settlement agreements to avoid future disputes.</span>
                    </div>
                  </div>
                </div>

                {/* Pre-Arbitration Advisory */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Pre-Arbitration Advisory</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Drafting and reviewing arbitration clauses in contracts to ensure enforceability.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Assessing arbitration viability versus litigation.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Advising on cost, risk, and timeline implications before initiating proceedings.</span>
                    </div>
                  </div>
                </div>

                {/* Post-Award Proceedings */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Post-Award Proceedings</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Challenging arbitral awards under Section 34 of the Arbitration Act.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Enforcing domestic and international arbitral awards.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sector-Specific Arbitration Expertise */}
              <div className="mt-12 lg:mt-16">
                <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-6 lg:mb-8 text-center">Sector-Specific Arbitration Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-3">Construction & Infrastructure</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Delay claims</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Defect liability</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Payment disputes</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-3">Corporate & Shareholder</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Oppression</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Mismanagement</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Valuation disputes</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-3">Technology & IP</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Software licensing</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Patent infringement</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Franchise agreements</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-3">Energy & Natural Resources</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Oil contract disputes</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Gas contract disputes</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#F8F1E6] text-sm opacity-90">Mining contract disputes</span>
                      </div>
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
                  Disputes don't have to drain your time, resources, or relationships. Through arbitration and mediation, we help clients resolve matters efficiently, privately, and with minimal business disruption.
                </p>
                <p className="text-[#102028] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-8 lg:mb-12">
                  At LD Counsels, we combine deep legal expertise with practical dispute resolution skills, ensuring that your matter is handled with precision, discretion, and determination. Whether you are looking to enforce a contract, negotiate a settlement, we are ready to represent you with strategic insight and unwavering commitment.
                </p>
                <div className="text-center">
                  <button className="bg-[#102028] text-[#F8F1E6] px-8 py-4 lg:px-12 lg:py-6 rounded-lg font-medium text-lg lg:text-xl hover:bg-[#102028]/90 transition-colors duration-300 shadow-sm hover:shadow-md">
                    Contact LD Counsels Today
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