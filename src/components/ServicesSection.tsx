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
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'Litigation & Dispute Resolution',
      icon: faGavel,
      link: '/litigation-dispute-resolution',  
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
      link: '/arbitration-mediation',
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
      link: '/corporate-commercial-advisory',
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
      title: 'Consumer Disputes & Protection',
      icon: faShieldAlt,
      link: '/consumer-disputes-protection',
      concisePoints: [
        'Consumer Rights Protection',
        'Dispute Resolution',
        'Regulatory Compliance'
      ],
      description: 'Comprehensive consumer protection services ensuring your rights are protected and disputes are resolved effectively.',
      features: [
        'Consumer Rights Protection',
        'Dispute Resolution',
        'Regulatory Compliance',
        'Consumer complaint handling',
        'Legal representation in consumer forums',
        'Consumer awareness and education'
      ]
    },
    {
      title: 'Family Law & Matrimonial Disputes',
      icon: faHeart,
      link: '/family-law-matrimonial-disputes',
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
      link: '/media-entertainment-intellectual-property',
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
      link: '/startup-legal-solutions',
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
      link: '/conveyancing-wills',
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
      title: 'Employment & Labour Service Law',
      icon: faUsers,
      link: '/employment-labour-service-law',
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
      link: '/public-interest-constitutional-matters',
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
      link: '/ngo-non-profit-advisory',
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
    },
    {
      title: 'Insolvency & Bankruptcy (IBC) Matters',
      icon: faShieldAlt,
      link: '/insolvency-bankruptcy-ibc-matters',
      concisePoints: [
        'Corporate Insolvency Resolution',
        'Bankruptcy Proceedings',
        'Debt Restructuring'
      ],
      description: 'Expert insolvency and bankruptcy services including corporate restructuring, debt resolution, and IBC compliance.',
      features: [
        'Corporate Insolvency Resolution',
        'Bankruptcy Proceedings',
        'Debt Restructuring',
        'Creditor representation',
        'Asset liquidation advisory',
        'Cross-border insolvency matters'
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
            <Link href={service.link || ''} key={index}>
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

              {/* Service Description */}
              <div className="mb-6">
                <p className="text-[#102028] opacity-80 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 