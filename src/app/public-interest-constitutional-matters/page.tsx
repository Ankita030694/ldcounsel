'use client';

import type { Metadata } from "next";
import { useState } from "react";



export default function PublicInterestConstitutionalMattersPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Q1. What is a Public Interest Litigation (PIL)?",
      answer: "A PIL is a petition filed in court for the protection of public interest, often addressing matters that affect the community or society at large."
    },
    {
      question: "Q2. Who can file a PIL?",
      answer: "Any public-spirited individual, organisation, or group with a genuine concern for public welfare can file a PIL."
    },
    {
      question: "Q3. What types of matters fall under constitutional law?",
      answer: "Cases involving fundamental rights, legislative challenges, and disputes over interpretation of constitutional provisions."
    },
    {
      question: "Q4. Can I challenge a government order through a writ petition?",
      answer: "Yes, if the order is arbitrary, illegal, or violates constitutional rights, it can be challenged before the High Court or Supreme Court."
    },
    {
      question: "Q5. Are PILs only for non-profit causes?",
      answer: "Primarily, yes. PILs are meant for issues affecting the public at large, not for private or personal grievances."
    },
    {
      question: "Q6. How long does a PIL or writ petition take?",
      answer: "Timelines vary, but well-prepared cases with strong legal merit are more likely to receive priority hearing."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 leading-tight">
              Public Interest & Constitutional Matters
            </h1>
            <p className="text-[#102028] opacity-80 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed">
              Championing fundamental rights and public welfare through constitutional advocacy
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
                  The Constitution of India guarantees fundamental rights and freedoms to every citizen, and public interest litigation (PIL) serves as a powerful tool to protect these rights when they are threatened or violated. Whether it's defending civil liberties, challenging unjust laws, or advocating for policy reform, Public Interest & Constitutional Litigation plays a vital role in shaping our democracy.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8">
                  At LD Counsels, we represent individuals, communities, NGOs, and institutions in constitutional law matters and public interest cases before the Supreme Court, High Courts, and other constitutional forums. Our work spans a wide range of issues — from protecting the environment and advancing social justice to ensuring government accountability and upholding the rule of law.
                </p>
                <p className="text-[#F8F1E6] text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  We also handle writ petitions, constitutional challenges, and fundamental rights enforcement for both individuals and organisations, making sure that the principles enshrined in our Constitution are upheld in practice, not just on paper.
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
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Public Interest Litigations (PILs)</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Initiating matters of social, environmental, or public importance.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Writ Petitions</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Habeas corpus, mandamus, certiorari, prohibition, and quo warranto.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Constitutional Challenges</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Contesting unconstitutional legislation, executive orders, or government action.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Civil Liberties Protection</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Safeguarding rights such as freedom of speech, equality, and due process.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Policy Advocacy</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Assisting in shaping laws, regulations, and public policy through legal channels.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Impact Litigation</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Strategic cases aimed at producing long-term systemic change.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Protection of Fundamental Rights</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Under Articles 14, 19, 21, and other constitutional provisions.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Comprehensive Legal Research</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">And policy analysis to strengthen your case.</p>
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
                  Constitutional matters require deep legal knowledge, strategic litigation skills, and a principled approach. Our practice is guided by a commitment to justice and a strong understanding of constitutional principles.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Thorough Constitutional Analysis</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Ensuring every case rests on strong legal grounds.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Rights-based Advocacy</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Focusing on protecting and enforcing fundamental rights.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Strategic Public Interest Litigation</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Targeting systemic change, not just individual relief.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Meticulous Drafting</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Precision in writ petitions and constitutional challenges.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Strong Constitutional Expertise</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">In-depth knowledge of constitutional provisions and precedents.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Strategic Litigation Approach</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Cases are carefully planned for maximum legal and social impact.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Commitment to Justice</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Driven by values, not just verdicts.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#F8F1E6] text-lg lg:text-xl mb-2">Network of Experts</h3>
                      <p className="text-[#F8F1E6] opacity-80 text-sm lg:text-base">Collaboration with activists, policy think tanks, and advocacy.</p>
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
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Extensive Experience</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">In writ jurisdiction before High Courts and the Supreme Court.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Proven Track Record</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">In landmark PILs and policy-impact cases.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Expertise in Complex Matters</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Handling constitutional questions and legislative challenges.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Commitment to Ethical Advocacy</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Impactful and principled representation.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-[#102028] text-lg lg:text-xl mb-2">Capability to Manage</h3>
                      <p className="text-[#102028] opacity-80 text-sm lg:text-base">Both individual rights petitions and large-scale public interest matters.</p>
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
                {/* Public Interest Litigation (PIL) */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Public Interest Litigation (PIL)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Filing and defending PILs in matters of public welfare, environment, human rights, and governance.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Social justice advocacy for marginalised and vulnerable groups.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Strategic litigation for policy reform and legislative review.</span>
                    </div>
                  </div>
                </div>

                {/* Constitutional Law & Writ Petitions */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Constitutional Law & Writ Petitions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Writs of Habeas Corpus, Mandamus, Certiorari, Prohibition, and Quo Warranto.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Enforcement of fundamental rights under Part III of the Constitution.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Challenging arbitrary or unconstitutional government actions.</span>
                    </div>
                  </div>
                </div>

                {/* Legislative & Policy Challenges */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Legislative & Policy Challenges</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Constitutional review of statutes, executive orders, and regulations.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Advising NGOs, activist groups, and think tanks on policy interventions.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Representation in matters of legislative interpretation and constitutional validity.</span>
                    </div>
                  </div>
                </div>

                {/* Civil Liberties & Human Rights */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Civil Liberties & Human Rights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Freedom of speech and expression cases.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Right to privacy and data protection matters.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Right to equality and non-discrimination claims.</span>
                    </div>
                  </div>
                </div>

                {/* Election & Governance Matters */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Election & Governance Matters</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Challenges to electoral processes and disqualification of candidates.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Matters relating to governance transparency and public accountability.</span>
                    </div>
                  </div>
                </div>

                {/* Appeals & Higher Court Litigation */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-[#F8F1E6] text-xl lg:text-2xl xl:text-3xl mb-4">Appeals & Higher Court Litigation</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Special Leave Petitions (SLPs) in constitutional matters.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F8F1E6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#F8F1E6] text-sm lg:text-base opacity-90">Appeals in rights-based litigation from lower forums to constitutional courts.</span>
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
                  If you believe your rights or the rights of the public are being violated, LD Counsels is here to champion your cause. With deep constitutional expertise and a passion for justice, we ensure your case is presented with the precision and impact it deserves.
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