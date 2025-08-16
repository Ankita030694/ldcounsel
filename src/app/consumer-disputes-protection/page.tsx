'use client';

import type { Metadata } from "next";
import { useState } from "react";



export default function ConsumerDisputesProtectionPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Q1. Who can file a consumer complaint?",
      answer: "Any person who has purchased goods or availed services for personal use, not for resale or commercial purposes, can file a complaint."
    },
    {
      question: "Q2. How much time do I have to file a consumer complaint?",
      answer: "Generally, you must file within two years from the date of cause of action, though extensions can be granted for valid reasons."
    },
    {
      question: "Q3. Can I file a complaint without a lawyer?",
      answer: "While you can represent yourself, having a lawyer increases your chances of success due to the procedural and legal complexities."
    },
    {
      question: "Q4. What compensation can I claim?",
      answer: "You can claim a refund, replacement, compensation for loss, mental harassment damages, and litigation costs."
    },
    {
      question: "Q5. Do you take builder-buyer disputes?",
      answer: "Yes, we have significant experience in representing homebuyers against builders before consumer forums and RERA authorities."
    },
    {
      question: "Q6. What if the opposite party doesn't comply with the order?",
      answer: "We assist in filing execution petitions to enforce the order and recover the awarded amount."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 leading-tight">
              Consumer Disputes & Protection
            </h1>
            <p className="text-[#102028] opacity-80 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed">
              Expert legal representation to protect your consumer rights and secure fair compensation
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
                  In today's fast-paced marketplace, consumers often face challenges such as defective goods, deficient services, unfair trade practices, false advertising, and delayed deliveries. While the law provides strong protections under the Consumer Protection Act, 2019, asserting those rights effectively requires legal expertise, persistence, and a thorough understanding of procedural requirements.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  At LD Counsels, we represent consumers in Delhi NCR and across India in disputes against sellers, service providers, manufacturers, builders, insurers, and other entities. Whether your matter involves a faulty product, a delayed real estate possession, an insurance claim rejection, or misleading advertising, we help you seek the compensation and justice you deserve.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  We handle cases before District Consumer Commissions, State Commissions, the National Consumer Disputes Redressal Commission (NCDRC), and appellate forums, ensuring that your complaint is presented strongly, supported by evidence, and pursued with unwavering dedication.
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
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Protection of Your Rights</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Under the Consumer Protection Act, 2019.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Efficient Resolution</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Through structured legal representation.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Potential for Compensation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">For financial loss, mental harassment, and litigation costs.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Access to Expert Advocacy</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Against large corporations and service providers.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Peace of Mind</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Knowing your case is handled by experienced professionals.</p>
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
                  Consumer disputes often involve an imbalance of power individuals taking on large corporations, multinational manufacturers, or well-funded service providers. Our approach bridges that gap with strategic legal action, thorough documentation, and effective representation.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Fact-based Case Building</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Gathering strong documentary proof and communications.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Time-bound Action</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Filing complaints promptly to meet statutory limitation periods.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Targeted Legal Strategies</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Tailoring our approach based on the forum, opponent, and type of claim.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Negotiation First, Litigation When Necessary</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Attempting amicable settlements where possible, while preparing for strong litigation if required.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F8F1E6] rounded-xl p-8 sm:p-12 lg:p-16 mb-12 lg:mb-16 border border-[#102028]/10 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 text-center">Why clients choose LD Counsels for Consumer Disputes & Protection?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Extensive Experience</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">With high-value consumer disputes, including real estate and insurance cases.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Pan-India Representation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">For consumer matters.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Transparent Communication</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Clear updates at every stage.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Deep Understanding</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Of consumer rights laws and procedural rules.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Track Record</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Of securing favourable awards and settlements.</p>
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
                {/* Filing Consumer Complaints */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Filing Consumer Complaints</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Drafting and filing complaints before District, State, and National Consumer Commissions.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Ensuring compliance with jurisdictional and monetary limits under the Act.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Collecting and presenting evidence, including photographs, reports, and expert opinions.</span>
                    </div>
                  </div>
                </div>

                {/* Real Estate Consumer Disputes */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Real Estate Consumer Disputes</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Representing homebuyers against builders for delayed possession, construction defects, and non-delivery.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Claiming refunds, interest, and compensation for false promises and deviations from approved plans.</span>
                    </div>
                  </div>
                </div>

                {/* Defective Goods & Deficient Services */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Defective Goods & Deficient Services</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Claims against manufacturers or retailers for substandard or unsafe products.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Disputes against service providers, including telecom, hospitality, and healthcare.</span>
                    </div>
                  </div>
                </div>

                {/* Insurance Disputes */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Insurance Disputes</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Contesting wrongful rejection or delay in processing of insurance claims.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Representing policyholders in disputes over health, motor, and life insurance policies.</span>
                    </div>
                  </div>
                </div>

                {/* Banking & Financial Services */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Banking & Financial Services</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Challenging unfair charges, unauthorised transactions, and service failures.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Disputes with loan providers over wrongful penalties or foreclosure issues.</span>
                    </div>
                  </div>
                </div>

                {/* Appellate and Enforcement Actions */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Appellate and Enforcement Actions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Filing appeals before State Commissions, NCDRC, and higher courts.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Executing consumer commission orders for enforcement of awards.</span>
                    </div>
                  </div>
                </div>

                {/* Pan-India Network */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Pan-India Network</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Capability to handle consumer disputes across jurisdictions.</span>
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
                  You don't have to let defective products, unfair services, or corporate negligence go unchallenged. At LD Counsels, we ensure your voice is heard, your rights are upheld, and you get the compensation you deserve.
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