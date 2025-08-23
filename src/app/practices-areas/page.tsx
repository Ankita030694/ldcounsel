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
  faHandHoldingHeart,
  faArrowRight,
  faStar,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

export default function PracticesAreasPage() {
  const [activeCategory, setActiveCategory] = useState('all');



  const services = [
    {
      id: 'litigation-dispute-resolution',
      title: 'Litigation & Dispute Resolution',
      icon: faGavel,
      category: 'litigation',
      link: '/litigation-dispute-resolution',
      description: 'Comprehensive legal representation in civil, criminal, and commercial litigation matters with appellate expertise.',
      features: [
        'Civil & Criminal Litigation',
        'Commercial Disputes',
        'Appellate Practice (High Courts, Supreme Court)',
        'Expert witness testimony',
        'Case strategy and preparation',
        'Settlement negotiations'
      ],
      stats: {
        cases: '150+',
        success: '95%',
        experience: '8+ years'
      }
    },
    {
      id: 'arbitration-mediation',
      title: 'Arbitration & Mediation',
      icon: faBalanceScale,
      category: 'litigation',
      link: '/arbitration-mediation',
      description: 'Expert alternative dispute resolution services including arbitration, mediation, and award enforcement.',
      features: [
        'Domestic & International Arbitration',
        'Mediation & Alternative Dispute Resolution',
        'Enforcement of Awards',
        'Arbitration clause drafting',
        'Expert determination services',
        'Dispute avoidance strategies'
      ],
      stats: {
        cases: '75+',
        success: '92%',
        experience: '6+ years'
      }
    },
    {
      id: 'corporate-commercial-advisory',
      title: 'Corporate & Commercial Advisory',
      icon: faBuilding,
      category: 'corporate',
      link: '/corporate-commercial-advisory',
      description: 'Strategic corporate legal counsel including contract negotiations, M&A support, and governance services.',
      features: [
        'Contract Drafting & Negotiation',
        'Mergers & Acquisitions Support',
        'General Corporate Counsel Services',
        'Corporate restructuring',
        'Joint venture agreements',
        'Corporate governance advisory'
      ],
      stats: {
        deals: '50+',
        success: '98%',
        experience: '10+ years'
      }
    },
    {
      id: 'consumer-disputes-protection',
      title: 'Consumer Disputes & Protection',
      icon: faShieldAlt,
      category: 'specialized',
      link: '/consumer-disputes-protection',
      description: 'Comprehensive consumer protection services ensuring rights protection and effective dispute resolution.',
      features: [
        'Consumer Rights Protection',
        'Dispute Resolution',
        'Regulatory Compliance',
        'Consumer complaint handling',
        'Legal representation in consumer forums',
        'Consumer awareness and education'
      ],
      stats: {
        cases: '200+',
        success: '94%',
        experience: '7+ years'
      }
    },
    {
      id: 'family-law-matrimonial-disputes',
      title: 'Family Law & Matrimonial Disputes',
      icon: faHeart,
      category: 'family',
      link: '/family-law-matrimonial-disputes',
      description: 'Sensitive and professional handling of family law matters with focus on amicable resolutions.',
      features: [
        'Divorce & Separation Proceedings',
        'Child Custody & Guardianship',
        'Maintenance & Alimony Matters',
        'Property settlement agreements',
        'Domestic violence protection',
        'Family mediation services'
      ],
      stats: {
        cases: '100+',
        success: '89%',
        experience: '9+ years'
      }
    },
    {
      id: 'media-entertainment-intellectual-property',
      title: 'Media, Entertainment & IP',
      icon: faFilm,
      category: 'specialized',
      link: '/media-entertainment-intellectual-property',
      description: 'Specialized legal services for media and entertainment including content contracts and intellectual property.',
      features: [
        'Film & Content Contracts',
        'Copyright & Trademark Protection',
        'Dispute Resolution in Media Law',
        'Licensing and distribution agreements',
        'Celebrity and talent contracts',
        'Digital rights management'
      ],
      stats: {
        projects: '80+',
        success: '96%',
        experience: '8+ years'
      }
    },
    {
      id: 'startup-legal-solutions',
      title: 'Startup Legal Solutions',
      icon: faRocket,
      category: 'corporate',
      link: '/startup-legal-solutions',
      description: 'Tailored legal services for startups and early-stage ventures including founders agreements and compliance.',
      features: [
        'Founders\' Agreements & Structuring',
        'Compliance for Early-Stage Ventures',
        'Intellectual Property Strategy',
        'Funding and investment documentation',
        'Employment and equity agreements',
        'Regulatory compliance for startups'
      ],
      stats: {
        startups: '120+',
        success: '97%',
        experience: '5+ years'
      }
    },
    {
      id: 'conveyancing-wills',
      title: <>Conveyancing<br />& Wills</>,  
      icon: faHome,
      category: 'specialized',
      link: '/conveyancing-wills',
      description: 'Comprehensive property law services including document drafting, registration, and estate planning.',
      features: [
        'Drafting & Registration of Property Documents',
        'Transfer & Lease Agreements',
        'Wills, Probate & Succession Planning',
        'Property due diligence',
        'Title verification and clearance',
        'Estate administration services'
      ],
      stats: {
        transactions: '180+',
        success: '99%',
        experience: '10+ years'
      }
    },
    {
      id: 'employment-labour-service-law',
      title: 'Employment & Labour Service Law',
      icon: faUsers,
      category: 'corporate',
      link: '/employment-labour-service-law',
      description: 'Comprehensive employment law services ensuring workplace compliance and effective dispute resolution.',
      features: [
        'Employment Contracts & Policies',
        'Workplace Dispute Resolution',
        'POSH Compliance & Trainings',
        'Industrial relations advisory',
        'Employee benefits and compensation',
        'Workplace safety compliance'
      ],
      stats: {
        cases: '140+',
        success: '91%',
        experience: '6+ years'
      }
    },
    {
      id: 'public-interest-constitutional-matters',
      title: 'Public Interest & Constitutional Matters',
      icon: faBalanceScale,
      category: 'specialized',
      link: '/public-interest-constitutional-matters',
      description: 'Dedicated legal services for public interest litigation, constitutional rights protection, and advocacy.',
      features: [
        'Writ Petitions & PILs',
        'Constitutional Rights Litigation',
        'Policy Advocacy',
        'Human rights protection',
        'Environmental law matters',
        'Social justice initiatives'
      ],
      stats: {
        cases: '35+',
        success: '87%',
        experience: '9+ years'
      }
    },
    {
      id: 'ngo-non-profit-advisory',
      title: 'NGO & Non-Profit Advisory',
      icon: faHandHoldingHeart,
      category: 'specialized',
      link: '/ngo-non-profit-advisory',
      description: 'Specialized legal advisory services for NGOs and non-profit organizations including registration and compliance.',
      features: [
        'Registration & Compliance',
        'FCRA & Trust Law Advisory',
        'Governance Frameworks',
        'Fundraising compliance',
        'Board governance advisory',
        'Impact assessment and reporting'
      ],
      stats: {
        organizations: '45+',
        success: '93%',
        experience: '7+ years'
      }
    },
    {
      id: 'insolvency-bankruptcy-ibc-matters',
      title: 'Insolvency & Bankruptcy Matters',
      icon: faShieldAlt,
      category: 'corporate',
      link: '/insolvency-bankruptcy-ibc-matters',
      description: 'Comprehensive legal solutions for insolvency, bankruptcy, debt resolution, and IBC compliance.',
      features: [
        'Corporate Insolvency Resolution',
        'Bankruptcy Proceedings',
        'Debt Restructuring',
        'Creditor representation',
        'Asset liquidation advisory',
        'Cross-border insolvency matters'
      ],
      stats: {
        cases: '25+',
        success: '90%',
        experience: '5+ years'
      }
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-[#102028] py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F1E6]/20 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#F8F1E6]/10 backdrop-blur-sm rounded-full border border-[#F8F1E6]/20 mb-4 sm:mb-6">
              <FontAwesomeIcon icon={faStar} className="text-[#F8F1E6] mr-2 text-sm sm:text-base" />
              <span className="text-[#F8F1E6] text-xs sm:text-sm font-medium">Expert Legal Services</span>
            </div>
          </div>
          
          <h1 className="font-playfair text-[#F8F1E6] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 sm:mb-6 leading-tight">
            Practice Areas
          </h1>
          
          <p className="text-[#F8F1E6]/90 text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Comprehensive legal expertise across diverse practice areas, delivering exceptional results with integrity and dedication.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="bg-[#F8F1E6]/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3 border border-[#F8F1E6]/20">
              <div className="text-[#F8F1E6] text-xl sm:text-2xl font-bold">12+</div>
              <div className="text-[#F8F1E6]/80 text-xs sm:text-sm">Practice Areas</div>
            </div>
            <div className="bg-[#F8F1E6]/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3 border border-[#F8F1E6]/20">
              <div className="text-[#F8F1E6] text-xl sm:text-2xl font-bold">15+</div>
              <div className="text-[#F8F1E6]/80 text-xs sm:text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Services Grid */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {filteredServices.map((service, index) => (
              <Link href={service.link} key={service.id}>
                <div className="group bg-[#F8F1E6] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-[#102028]/10 overflow-hidden flex flex-col h-full">
                  {/* Service Header */}
                  <div className="p-6 sm:p-8 pb-4 sm:pb-6 flex-1">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#102028] to-[#102028]/90 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <FontAwesomeIcon 
                          icon={service.icon} 
                          className="text-[#F8F1E6] text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-[#102028] text-xl sm:text-2xl font-bold">
                          {service.stats.cases || service.stats.deals || service.stats.projects || service.stats.transactions || service.stats.organizations || service.stats.startups}
                        </div>
                        <div className="text-[#102028]/60 text-xs sm:text-sm">Cases</div>
                      </div>
                    </div>

                    <h3 className="font-playfair text-[#102028] text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-[#102028]/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                      {service.description}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-center">
                        <div className="text-[#102028] text-base sm:text-lg font-bold">
                          {service.stats.experience}
                        </div>
                        <div className="text-[#102028]/60 text-xs">Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#102028] text-base sm:text-lg font-bold">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                        </div>
                        <div className="text-[#102028]/60 text-xs">Verified</div>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="px-6 sm:px-8 pb-4 sm:pb-6">
                    <h4 className="font-medium text-[#102028] text-xs sm:text-sm mb-2 sm:mb-3">Key Services:</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#102028] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-[#102028]/80 text-xs sm:text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-[#102028]/60 text-xs sm:text-sm font-medium">
                          +{service.features.length - 4} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 mt-auto">
                    <div className="group/btn relative bg-[#102028] text-[#F8F1E6] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-[#102028] hover:bg-[#102028]/90 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#102028] focus:ring-offset-2 shadow-sm hover:shadow-md text-center text-sm sm:text-base">
                      Explore Practice Area
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#102028] to-[#102028]/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">
            Need Expert Legal Counsel?
          </h2>
          <p className="text-[#F8F1E6]/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our experienced team is ready to provide you with comprehensive legal solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#F8F1E6] text-[#102028] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-[#F8F1E6]/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/about">
              <button className="border-2 border-[#F8F1E6] text-[#F8F1E6] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-[#F8F1E6] hover:text-[#102028] transition-all duration-300 text-sm sm:text-base">
                Learn About Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
