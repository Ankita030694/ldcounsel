'use client';

import type { Metadata } from "next";
import { useState } from "react";



export default function InsolvencyBankruptcyIBCMattersPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Q1. What is the purpose of the IBC?",
      answer: "The IBC provides a time-bound framework for resolving insolvency of companies, LLPs, and individuals while maximising asset value and balancing stakeholder interests."
    },
    {
      question: "Q2. Who can initiate insolvency proceedings under IBC?",
      answer: "Financial creditors, operational creditors, and corporate debtors themselves can initiate proceedings under the relevant sections of the Code."
    },
    {
      question: "Q3. How long does the insolvency process take?",
      answer: "The IBC mandates resolution within 180 days (extendable to 330 days in exceptional cases)."
    },
    {
      question: "Q4. What happens if no resolution plan is approved?",
      answer: "The corporate debtor proceeds to liquidation, and assets are sold to repay creditors as per the priority waterfall."
    },
    {
      question: "Q5. Can insolvency proceedings be withdrawn after initiation?",
      answer: "Yes, proceedings can be withdrawn with the approval of 90% of the Committee of Creditors under Section 12A."
    },
    {
      question: "Q6. Is personal insolvency covered under IBC?",
      answer: "Yes, the IBC also provides a framework for personal guarantors to corporate debtors and individuals, though certain provisions are being phased in gradually."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 leading-tight">
              Insolvency & Bankruptcy (IBC) Matters
            </h1>
            <p className="text-[#102028] opacity-80 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed">
              Expert legal support for time-bound insolvency resolution and debt restructuring
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
                  The Insolvency and Bankruptcy Code, 2016 (IBC) is India's cornerstone legislation for resolving insolvency and restructuring debts in a time-bound manner. It has transformed how distressed companies, defaulting borrowers, and creditors address financial stress ensuring faster resolution, maximised asset value, and greater transparency in the process.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  At LD Counsels, we offer end-to-end legal support in insolvency and bankruptcy matters, representing financial creditors, operational creditors, corporate debtors, resolution professionals, and investors before the National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), and higher courts including the Supreme Court of India.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  At LD Counsels, we offer end-to-end legal support in insolvency and bankruptcy matters, representing financial creditors, operational creditors, corporate debtors, resolution professionals, and investors before the National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), and higher courts including the Supreme Court of India.
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
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Swift Initiation or Defence</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">In insolvency proceedings.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Time-bound Resolution</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">In compliance with IBC timelines.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Improved Recovery Prospects</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">For creditors.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Reduced Risk of Liquidation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Through effective restructuring.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Strong Advocacy</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">And procedural compliance to protect client interests.</p>
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
                  IBC matters are high-stakes, time-bound, and procedurally intensive. Our approach ensures that you get swift, strategic, and compliant representation.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Rapid Case Assessment</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">To determine the best legal strategy within statutory timelines.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Meticulous Documentation</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">And filing to avoid procedural delays.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Holistic Advice</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Covering both litigation and corporate restructuring aspects.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Negotiation Support</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">During resolution plan discussions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Why clients choose LD Counsels:</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Experienced Representation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Before NCLT, NCLAT, and Supreme Court in IBC matters.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Hands-on Experience</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">With both creditor-initiated and debtor-initiated proceedings.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Strong Network</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">With insolvency professionals, valuers, and financial advisors.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Track Record</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Of securing successful recoveries and favourable resolutions.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Pan-India Handling</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Of IBC disputes and restructuring assignments.</p>
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
                {/* For Financial & Operational Creditors */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">For Financial & Operational Creditors</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Drafting and filing applications under Sections 7 & 9 of IBC.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Assisting in claims filing and verification before resolution professionals.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Representing in Committee of Creditors (CoC) meetings.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Challenging or defending resolution plans.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Advising on debt recovery strategy in parallel with IBC proceedings.</span>
                    </div>
                  </div>
                </div>

                {/* For Corporate Debtors */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">For Corporate Debtors</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Advisory on responding to IBC notices and default claims.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Defence in Section 7 & 9 petitions before NCLT.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Negotiating with creditors for settlement and withdrawal of petitions under Section 12A.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Support in preparing resolution plans in coordination with investors.</span>
                    </div>
                  </div>
                </div>

                {/* Resolution Professionals & Liquidators */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Resolution Professionals & Liquidators</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Legal advisory on process compliance under IBC and related regulations.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Drafting public announcements, information memoranda, and progress reports.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Litigation support in admission/rejection of claims.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Assistance in conducting auctions and asset sales in liquidation.</span>
                    </div>
                  </div>
                </div>

                {/* Corporate Restructuring & Distressed M&A */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Corporate Restructuring & Distressed M&A</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Advising investors and bidders in acquisition of stressed assets.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Due diligence and drafting of investment agreements.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Compliance with IBC, SEBI, and competition law requirements.</span>
                    </div>
                  </div>
                </div>

                {/* Appeals & Higher Court Litigation */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Appeals & Higher Court Litigation</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Appeals before NCLAT against NCLT orders.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Special Leave Petitions before the Supreme Court in IBC-related matters.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Challenging or defending liquidation orders and CoC decisions.</span>
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
                  Insolvency matters require speed, precision, and deep understanding of commercial realities. At LD Counsels, we ensure that your interests are protected at every stage from initiating or defending proceedings to negotiating successful resolutions.
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