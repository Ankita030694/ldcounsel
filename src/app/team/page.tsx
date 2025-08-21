'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faGraduationCap, 
  faBriefcase,
  faAward,
  faHandshake,
  faLightbulb,
  faChartLine,
  faShieldAlt,
  faBalanceScale,
  faUsers,
  faFileAlt,
  faEdit,
  faArrowLeft,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export default function TeamPage() {
  const [expandedMembers, setExpandedMembers] = useState<number[]>([]);

  const toggleMemberExpansion = (index: number) => {
    setExpandedMembers(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const teamMembers = [
    {
      name: 'Lavanya Dhawan',
      role: 'Founder',
      icon: faUserTie,
      image: '/team/Lavanya.png',
      concisePoints: [
        'Results-driven Advocate and Founder',
        'Expertise across litigation, arbitration, mediation',
        'Manages network of 150+ lawyers across India',
        'Appellate experience with deep command of judicial review'
      ],
      description: 'Results-driven Advocate and Founder of LD Counsels, Lavanya Dhawan brings a wealth of expertise across litigation, arbitration, mediation, and advisory work. Her diverse practice covers civil, criminal, commercial, matrimonial, consumer, tax, and constitutional law, as well as intellectual property and telecom disputes. She has appeared and argued in Trial Courts, the Delhi High Court, the Supreme Court of India, and specialised forums including Telecom Dispute Tribunals, consumer commissions, and tax appellate bodies consistently securing favourable outcomes in complex, high-value matters.',
      highlights: [
        'Appellate experience with deep command of judicial review',
        'Advises startups on legal foundations and compliance',
        'Manages network of 150+ lawyers across India',
        'Strategic insight with uncompromising integrity'
      ]
    },
    {
      name: 'Anuj Anand Malik',
      role: 'Partner',
      icon: faBriefcase,
      image: '/team/Anuj.png',
      concisePoints: [
        'Specializes in debt settlement and banking law',
        'Corporate compliance and regulatory advisory',
        'Affiliations with IACC, MCIA, Bar Council of Delhi',
        'Results-driven approach with risk mitigation'
      ],
      description: 'A seasoned advocate and legal consultant, Anuj Anand Malik specialises in debt settlement, banking law, and financial dispute resolution. With extensive experience in corporate compliance, business contracts, and regulatory advisory, he helps individuals, startups, and enterprises safeguard their interests through strategic legal solutions.',
      highlights: [
        'Specializes in debt settlement and banking law',
        'Corporate compliance and regulatory advisory',
        'Affiliations with IACC, MCIA, Bar Council of Delhi',
        'Results-driven approach with risk mitigation'
      ]
    },
    {
      name: 'Aman Pathak',
      role: 'Partner',
      icon: faBalanceScale,
      image: '/team/Aman.png',
      concisePoints: [
        'Litigation specialist with courtroom expertise',
        'Experience in landmark cases like Amazon vs. Future Retail',
        'Meticulous preparation and persuasive advocacy',
        'Strategic precision in complex legal matters'
      ],
      description: 'A litigation specialist with a sharp courtroom presence and a track record of delivering results in high-stakes matters. Aman\'s expertise spans civil, criminal, and commercial disputes, with appearances before trial courts, High Courts, and specialised tribunals across India.',
      highlights: [
        'Litigation specialist with courtroom expertise',
        'Experience in landmark cases like Amazon vs. Future Retail',
        'Meticulous preparation and persuasive advocacy',
        'Strategic precision in complex legal matters'
      ]
    },
    {
      name: 'Yash Datt',
      role: 'Partner',
      icon: faShieldAlt,
      image: '/team/Yashd.png',
      concisePoints: [
        'Expertise in high-stakes criminal litigation',
        'Skilled mediator with strategic foresight',
        'In-depth understanding of procedural law',
        'Composure in high-pressure situations'
      ],
      description: 'An accomplished litigator, Yash Datt brings extensive experience in navigating complex disputes across civil, criminal, and corporate domains. Over the years, he has represented a diverse clientele before trial courts, High Courts, and specialised forums, demonstrating versatility and command over multiple areas of law.',
      highlights: [
        'Expertise in high-stakes criminal litigation',
        'Skilled mediator with strategic foresight',
        'In-depth understanding of procedural law',
        'Composure in high-pressure situations'
      ]
    },
    {
      name: 'Ashwin Kumar Nair',
      role: 'Legal Consultant & Advocate-on-Record, Supreme Court of India',
      icon: faAward,
      image: '/team/Ashwin.png',
      concisePoints: [
        'Advocate-on-Record at Supreme Court of India',
        'Advisory work for prominent real estate companies',
        'Complex commercial, civil, and constitutional disputes',
        'Analytical depth with pragmatic approach'
      ],
      description: 'Ashwin brings a wealth of experience in litigation and advisory work, with a practice spanning the Supreme Court of India, High Courts, and various specialised tribunals. As an Advocate-on-Record, he combines procedural mastery with deep subject matter expertise to deliver precise, effective legal solutions.',
      highlights: [
        'Advocate-on-Record at Supreme Court of India',
        'Advisory work for prominent real estate companies',
        'Complex commercial, civil, and constitutional disputes',
        'Analytical depth with pragmatic approach'
      ]
    },
    {
      name: 'Sandeep Dhawan',
      role: 'Senior Advisor',
      icon: faChartLine,
      image: '/team/Sandeep.png',
      concisePoints: [
        'Three decades of global leadership experience',
        'Fellow Chartered Accountant and Insolvency Professional',
        'Former Country Head at Macquarie Group Ltd',
        'Expertise in business strategy and transformations'
      ],
      description: 'An assertive and results-driven leader with over three decades of global experience across banking, financial services, asset management, agriculture, telecommunications, and technology, Sandeep Dhawan has held leadership roles spanning Australia-New Zealand, Asia, Europe, the Middle East, and the Americas.',
      highlights: [
        'Three decades of global leadership experience',
        'Fellow Chartered Accountant and Insolvency Professional',
        'Former Country Head at Macquarie Group Ltd',
        'Expertise in business strategy and transformations'
      ]
    },
    
    {
      name: 'Shivraj Pawar',
      role: 'Senior Associate',
      icon: faUsers,
      image: '/team/Shivraj.png',
      concisePoints: [
        'Strong foundation in litigation and arbitration',
        'Experience before Supreme Court, High Courts, and tribunals',
        'Expertise in criminal litigation (NDPS and PMLA)',
        'Strategic litigation and client advisory focus'
      ],
      description: 'Shivraj brings a strong foundation in litigation and arbitration, with hands-on experience before the Supreme Court of India, High Courts, and various tribunals. Having worked with some of the country\'s leading advocates and chambers, he has honed his skills in drafting, research, and courtroom advocacy across diverse areas of law, including criminal, constitutional, civil, tax, and service matters.',
      highlights: [
        'Extensive experience in criminal litigation (NDPS and PMLA)',
        'Property disputes and corporate advisory expertise',
        'Strategic litigation and client advisory focus',
        'Meticulous legal research with practical courtroom insights'
      ]
    },
    {
      name: 'Shrey Arora',
      role: 'Senior Associate',
      icon: faUsers,
      image: '/team/Shrey.png',
      concisePoints: [
        'Dispute resolution and banking expertise',
        'Intellectual property rights specialist',
        'Cyber fraud advisory services',
        'Strategic thinking with meticulous approach'
      ],
      description: 'Shrey is a versatile advocate with a strong focus on dispute resolution, banking and finance, debt settlement, contract negotiation, intellectual property rights, and cyber fraud advisory. Known for his strategic thinking and meticulous approach, he delivers effective legal solutions in high-stakes matters.',
      highlights: [
        'Dispute resolution and banking expertise',
        'Intellectual property rights specialist',
        'Cyber fraud advisory services',
        'Strategic thinking with meticulous approach'
      ]
    },
    {
      name: 'Ritik Gupta',
      role: 'Senior Associate',
      icon: faHandshake,
      image: '/team/Ritik.png',
      concisePoints: [
        'Corporate advisory and litigation expertise',
        'Representation before Supreme Court and High Courts',
        'Technology and commercial disputes specialist',
        'Meticulous legal research with persuasive advocacy'
      ],
      description: 'Ritik is a skilled advocate whose practice bridges corporate advisory and litigation, with a strong focus on criminal law, technology, and commercial disputes. He has represented clients before the Supreme Court, High Courts, NCDRC, NGT, and district courts in Delhi and Madhya Pradesh.',
      highlights: [
        'Corporate advisory and litigation expertise',
        'Representation before Supreme Court and High Courts',
        'Technology and commercial disputes specialist',
        'Meticulous legal research with persuasive advocacy'
      ]
    },
    {
      name: 'Nitika Grover',
      role: 'Senior Associate',
      icon: faEdit,
      image: '/team/Nitikag.png',
      concisePoints: [
        'Seasoned litigation lawyer with high-stakes commercial expertise',
        'Complex contractual disputes and contentious corporate issues',
        'Practice spans Supreme Court, High Courts, and specialized tribunals',
        'Meticulous legal research with pragmatic, solution-oriented approach'
      ],
      description: 'Nitika Grover is a seasoned litigation lawyer with a strong track record in handling high-stakes commercial matters, complex contractual disputes, and contentious corporate issues. Her practice spans across multiple forums, including the Supreme Court of India, various High Courts, and specialised tribunals. Her litigation style combines meticulous legal research with a pragmatic, solution-oriented approach, ensuring strategies that are both legally sound and commercially viable.',
      highlights: [
        'Strong track record in high-stakes commercial matters',
        'Complex contractual disputes and contentious corporate issues',
        'Practice spans Supreme Court, High Courts, and specialized tribunals',
        'Unwavering commitment to client interests with sharp, detail-driven preparation'
      ]
    },
    {
      name: 'Aishwarya Sharma',
      role: 'Chief of Administration & Legal Analyst',
      icon: faFileAlt,
      image: '/team/Aishwarya.png',
      concisePoints: [
        'Meticulous legal research and analysis',
        'Administrative acumen and workflow optimization',
        'Case management and team coordination',
        'Bridge between legal strategy and operations'
      ],
      description: 'Aishwarya Sharma combines meticulous legal research skills with exceptional administrative acumen, ensuring that LD Counsels operates with precision, efficiency, and attention to detail. With a deep understanding of procedural law and case preparation, she supports the firm\'s litigation and advisory teams.',
      highlights: [
        'Meticulous legal research and analysis',
        'Administrative acumen and workflow optimization',
        'Case management and team coordination',
        'Bridge between legal strategy and operations'
      ]
    },
    {
      name: 'Chhavi Joshi',
      role: 'Legal Content Strategist',
      icon: faLightbulb,
      image: '/team/Chhavi.png',
      concisePoints: [
        'Legal content creation and curation',
        'Case updates and practice notes',
        'Professional content management',
        'Legal precision with clear communication'
      ],
      description: 'Chhavi oversees the creation, curation, and management of all legal content for LD Counsels, ensuring that every publication reflects both legal accuracy and the firm\'s professional ethos. With a strong foundation in legal research and writing, Chhavi crafts insightful articles, case updates, practice notes, and resource materials.',
      highlights: [
        'Legal content creation and curation',
        'Case updates and practice notes',
        'Professional content management',
        'Legal precision with clear communication'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102028]/5 to-[#102028]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#102028] mb-8 leading-tight">
              Our Team
            </h1>
            <div className="w-24 h-1 bg-[#102028] mx-auto mb-12"></div>
          </div>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-xl border border-[#102028]/5 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#102028]/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#102028]/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 prose prose-lg max-w-none">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#102028] mb-6">
                  Excellence Through Collaboration
                </h2>
                <div className="w-16 h-0.5 bg-[#102028] mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <p className="text-[#102028] text-lg leading-relaxed mb-6">
                    At LD Counsels, our strength lies in the people behind the practice. We are a team of researchers and professionals driven by clarity, precision, and purpose committed to solving legal problems with efficiency and integrity.
                  </p>
                  
                  <p className="text-[#102028] text-lg leading-relaxed mb-6">
                    Each member of our team contributes unique expertise, but we operate with a shared vision to protect our clients' interests with diligence, transparency, and foresight.
                  </p>
                </div>
                
                <div>
                  <div className="border-l-4 border-[#102028] pl-6 mb-6">
                    <p className="text-[#102028] text-lg leading-relaxed italic">
                      What sets us apart is how we work. We value listening before advising, collaboration over hierarchy, and outcomes over jargon.
                    </p>
                  </div>
                  
                  <p className="text-[#102028] text-lg leading-relaxed">
                    Our culture is straightforward: think deeply, act decisively, and always put clients first. Whether it is litigation, negotiation, or advisory, we stand by our clients as trusted partners, not just lawyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#102028] mb-6">
              Meet Our Legal Experts
            </h2>
            <p className="text-[#102028] text-xl opacity-80 max-w-3xl mx-auto">
              A diverse team of accomplished professionals dedicated to delivering exceptional legal solutions
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#102028]/5 hover:border-[#102028]/20 transform hover:-translate-y-2"
              >
                {/* Member Image Container */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-[#F8F1E6] to-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Image overlay with role */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102028] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-[#102028] text-[#F8F1E6] px-4 py-2 rounded-full inline-block">
                      <p className="text-sm font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#102028] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FontAwesomeIcon 
                      icon={member.icon} 
                      className="text-[#F8F1E6] text-lg" 
                    />
                  </div>
                </div>

                {/* Member Information */}
                <div className="p-8">
                  {/* Member Name */}
                  <h3 className="font-bold text-[#102028] text-2xl mb-4 group-hover:text-[#102028]/80 transition-colors duration-300">
                    {member.name} <br /> <span className="text-sm text-[#102028] opacity-80">{member.role}</span>
                  </h3>

                  {/* Concise Points */}
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-[#102028] text-base flex items-center">
                      <div className="w-2 h-2 bg-[#102028] rounded-full mr-3"></div>
                      Key Expertise
                    </h4>
                    <ul className="space-y-3">
                      {member.concisePoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[#102028] rounded-full mt-2 flex-shrink-0 opacity-60"></div>
                          <span className="text-[#102028] opacity-80 text-sm leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => toggleMemberExpansion(index)}
                    className="w-full flex items-center justify-center space-x-2 text-[#102028] text-sm font-semibold hover:text-[#102028]/70 transition-colors duration-300 border-2 border-[#102028]/20 hover:border-[#102028] rounded-full py-3 px-6 group-hover:bg-[#102028] group-hover:text-[#F8F1E6] transition-all duration-300"
                  >
                    <span>{expandedMembers.includes(index) ? 'Read Less' : 'Read More'}</span>
                    <FontAwesomeIcon 
                      icon={expandedMembers.includes(index) ? faChevronUp : faChevronDown} 
                      className="text-xs transition-transform duration-300" 
                    />
                  </button>

                  {/* Expanded Content */}
                  {expandedMembers.includes(index) && (
                    <div className="mt-8 space-y-6 animate-fadeIn border-t border-[#102028]/10 pt-6">
                      {/* Member Description */}
                      <div>
                        <h4 className="font-semibold text-[#102028] text-base mb-3 flex items-center">
                          <div className="w-2 h-2 bg-[#102028] rounded-full mr-3"></div>
                          About
                        </h4>
                        <p className="text-[#102028] text-sm leading-relaxed opacity-80">
                          {member.description}
                        </p>
                      </div>

                      {/* Detailed Highlights */}
                      <div>
                        <h4 className="font-semibold text-[#102028] text-base mb-3 flex items-center">
                          <div className="w-2 h-2 bg-[#102028] rounded-full mr-3"></div>
                          Detailed Highlights
                        </h4>
                        <ul className="space-y-2">
                          {member.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-[#102028] rounded-full mt-2 flex-shrink-0 opacity-60"></div>
                              <span className="text-[#102028] opacity-80 text-sm leading-relaxed">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102028] rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F8F1E6]/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F8F1E6]/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F1E6] mb-6">
                Ready to Work With Our Team?
              </h2>
              <p className="text-[#F8F1E6] text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Let our experienced legal professionals help you navigate complex legal challenges with confidence and precision.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-3 bg-[#F8F1E6] text-[#102028] px-8 py-4 rounded-full font-semibold hover:bg-[#F8F1E6]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Get in Touch</span>
                <FontAwesomeIcon icon={faArrowLeft} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
} 