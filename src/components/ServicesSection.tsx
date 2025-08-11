'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGavel, 
  faFileContract, 
  faTrademark,
  faBuilding,
  faShieldAlt,
  faHeart,
  faFilm,
  faRocket,
  faHome,
  faLightbulb,
  faUsers,
  faBalanceScale,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ServicesSection() {
  const [expandedServices, setExpandedServices] = useState<number[]>([]);

  const toggleServiceExpansion = (index: number) => {
    setExpandedServices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    {
      title: 'Litigation & Dispute Resolution',
      icon: faGavel,
      concisePoints: [
        'Civil & Criminal Litigation',
        'Commercial Disputes',
        'Appellate Practice (High Courts, Supreme Court)'
      ],
      description: 'Comprehensive legal representation in civil, criminal, and commercial litigation matters with expertise in appellate practice across all courts.',
      features: [
        'Civil & Criminal Litigation',
        'Commercial Disputes',
        'Appellate Practice (High Courts, Supreme Court)',
        'Expert witness testimony',
        'Case strategy and preparation',
        'Settlement negotiations'
      ]
    },
    {
      title: 'Arbitration & Mediation',
      icon: faBalanceScale,
      concisePoints: [
        'Domestic & International Arbitration',
        'Mediation & Alternative Dispute Resolution',
        'Enforcement of Awards'
      ],
      description: 'Expert alternative dispute resolution services including domestic and international arbitration, mediation, and award enforcement.',
      features: [
        'Domestic & International Arbitration',
        'Mediation & Alternative Dispute Resolution',
        'Enforcement of Awards',
        'Arbitration clause drafting',
        'Expert determination services',
        'Dispute avoidance strategies'
      ]
    },
    {
      title: 'Corporate & Commercial Advisory',
      icon: faBuilding,
      concisePoints: [
        'Contract Drafting & Negotiation',
        'Mergers & Acquisitions Support',
        'General Corporate Counsel Services'
      ],
      description: 'Strategic corporate legal counsel including contract negotiations, M&A support, and comprehensive corporate governance services.',
      features: [
        'Contract Drafting & Negotiation',
        'Mergers & Acquisitions Support',
        'General Corporate Counsel Services',
        'Corporate restructuring',
        'Joint venture agreements',
        'Corporate governance advisory'
      ]
    },
    {
      title: 'Regulatory & Compliance',
      icon: faShieldAlt,
      concisePoints: [
        'Statutory & Regulatory Filings',
        'Sector-Specific Compliance',
        'Risk Assessment & Governance'
      ],
      description: 'Comprehensive regulatory compliance services ensuring your business meets all statutory requirements and maintains proper governance.',
      features: [
        'Statutory & Regulatory Filings',
        'Sector-Specific Compliance',
        'Risk Assessment & Governance',
        'Compliance audits and reviews',
        'Regulatory training programs',
        'Policy development and implementation'
      ]
    },
    {
      title: 'Matrimonial & Family Law',
      icon: faHeart,
      concisePoints: [
        'Divorce & Separation Proceedings',
        'Child Custody & Guardianship',
        'Maintenance & Alimony Matters'
      ],
      description: 'Sensitive and professional handling of family law matters with focus on amicable resolutions and protecting family interests.',
      features: [
        'Divorce & Separation Proceedings',
        'Child Custody & Guardianship',
        'Maintenance & Alimony Matters',
        'Property settlement agreements',
        'Domestic violence protection',
        'Family mediation services'
      ]
    },
    {
      title: 'Media, Entertainment & IP',
      icon: faFilm,
      concisePoints: [
        'Film & Content Contracts',
        'Copyright & Trademark Protection',
        'Dispute Resolution in Media Law'
      ],
      description: 'Specialized legal services for the media and entertainment industry including content contracts and intellectual property protection.',
      features: [
        'Film & Content Contracts',
        'Copyright & Trademark Protection',
        'Dispute Resolution in Media Law',
        'Licensing and distribution agreements',
        'Celebrity and talent contracts',
        'Digital rights management'
      ]
    },
    {
      title: 'Startup Legal Solutions',
      icon: faRocket,
      concisePoints: [
        'Founders\' Agreements & Structuring',
        'Compliance for Early-Stage Ventures',
        'Intellectual Property Strategy'
      ],
      description: 'Tailored legal services for startups and early-stage ventures, from founders\' agreements to IP strategy and compliance.',
      features: [
        'Founders\' Agreements & Structuring',
        'Compliance for Early-Stage Ventures',
        'Intellectual Property Strategy',
        'Funding and investment documentation',
        'Employment and equity agreements',
        'Regulatory compliance for startups'
      ]
    },
    {
      title: 'Conveyancing & Wills',
      icon: faHome,
      concisePoints: [
        'Drafting & Registration of Property Documents',
        'Transfer & Lease Agreements',
        'Wills, Probate & Succession Planning'
      ],
      description: 'Comprehensive property law services including document drafting, registration, and estate planning for secure asset management.',
      features: [
        'Drafting & Registration of Property Documents',
        'Transfer & Lease Agreements',
        'Wills, Probate & Succession Planning',
        'Property due diligence',
        'Title verification and clearance',
        'Estate administration services'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: faLightbulb,
      concisePoints: [
        'Trademark Registration & Enforcement',
        'Copyright & Design Protection',
        'IP Portfolio Management'
      ],
      description: 'Complete IP protection services including trademark registration, copyright protection, and comprehensive portfolio management.',
      features: [
        'Trademark Registration & Enforcement',
        'Copyright & Design Protection',
        'IP Portfolio Management',
        'Patent filing and prosecution',
        'IP litigation and enforcement',
        'Licensing and technology transfer'
      ]
    },
    {
      title: 'Employment & Labour Law',
      icon: faUsers,
      concisePoints: [
        'Employment Contracts & Policies',
        'Workplace Dispute Resolution',
        'POSH Compliance & Trainings'
      ],
      description: 'Comprehensive employment law services ensuring workplace compliance and effective dispute resolution for employers and employees.',
      features: [
        'Employment Contracts & Policies',
        'Workplace Dispute Resolution',
        'POSH Compliance & Trainings',
        'Industrial relations advisory',
        'Employee benefits and compensation',
        'Workplace safety compliance'
      ]
    },
    {
      title: 'Public Interest & Constitutional Matters',
      icon: faBalanceScale,
      concisePoints: [
        'Writ Petitions & PILs',
        'Constitutional Rights Litigation',
        'Policy Advocacy'
      ],
      description: 'Dedicated legal services for public interest litigation, constitutional rights protection, and policy advocacy initiatives.',
      features: [
        'Writ Petitions & PILs',
        'Constitutional Rights Litigation',
        'Policy Advocacy',
        'Human rights protection',
        'Environmental law matters',
        'Social justice initiatives'
      ]
    },
    {
      title: 'NGO & Non-Profit Advisory',
      icon: faHandHoldingHeart,
      concisePoints: [
        'Registration & Compliance',
        'FCRA & Trust Law Advisory',
        'Governance Frameworks'
      ],
      description: 'Specialized legal advisory services for NGOs and non-profit organizations including registration, compliance, and governance.',
      features: [
        'Registration & Compliance',
        'FCRA & Trust Law Advisory',
        'Governance Frameworks',
        'Fundraising compliance',
        'Board governance advisory',
        'Impact assessment and reporting'
      ]
    }
  ];

  return (
    <section className="bg-[#102028] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
            Our Legal Services
          </h2>
          <p className="text-[#F8F1E6] opacity-80 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to meet your specific needs with expertise and dedication.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#F8F1E6] rounded-xl shadow-lg p-6 sm:p-8 border border-[#102028]/10 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#102028] to-[#102028]/90 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon 
                  icon={service.icon} 
                  className="text-[#F8F1E6] text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Service Title */}
              <h3 className="font-playfair text-[#102028] text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
                {service.title}
              </h3>

              {/* Concise Points (Always Visible) */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <h4 className="font-medium text-[#102028] text-sm sm:text-base">Key Services:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {service.concisePoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#102028] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span className="text-[#102028] opacity-90 text-xs sm:text-sm font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read More Button */}
              <button
                onClick={() => toggleServiceExpansion(index)}
                className="text-[#102028] text-sm font-medium hover:text-[#102028]/70 transition-colors duration-300 border-b border-[#102028]/30 hover:border-[#102028] pb-1 mb-4"
              >
                {expandedServices.includes(index) ? 'Read Less' : 'Read More'}
              </button>

              {/* Expanded Content */}
              {expandedServices.includes(index) && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Service Description */}
                  <div>
                    <h4 className="font-medium text-[#102028] text-sm sm:text-base mb-2">About:</h4>
                    <p className="text-[#102028] opacity-80 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Detailed Features */}
                  <div>
                    <h4 className="font-medium text-[#102028] text-sm sm:text-base mb-2">Comprehensive Services:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#102028] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-[#102028] opacity-90 text-xs sm:text-sm font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Learn More Button */}
              <div className="mt-6 sm:mt-8">
                <button className="group/btn relative bg-[#102028] text-[#F8F1E6] px-4 py-2 sm:px-6 sm:py-3 rounded-lg border-2 border-[#102028] hover:bg-[#102028]/90 transition-all duration-300 font-sans text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#102028] focus:ring-offset-2 shadow-sm hover:shadow-md w-full sm:w-auto">
                  Learn More
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>

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
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
} 