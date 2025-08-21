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

  const categories = [
    { id: 'all', name: 'All Practices' },
    { id: 'litigation', name: 'Litigation' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'family', name: 'Family Law' },
    { id: 'specialized', name: 'Specialized' }
  ];

  const services = [
    {
      id: 'litigation-dispute-resolution',
      title: 'Litigation & Dispute Resolution',
      icon: faGavel,
      category: 'litigation',
      link: '/litigation-dispute-resolution',
      description: 'Comprehensive legal representation in civil, criminal, and commercial litigation matters with expertise in appellate practice across all courts.',
      features: [
        'Civil & Criminal Litigation',
        'Commercial Disputes',
        'Appellate Practice (High Courts, Supreme Court)',
        'Expert witness testimony',
        'Case strategy and preparation',
        'Settlement negotiations'
      ],
      stats: {
        cases: '500+',
        success: '95%',
        experience: '15+ years'
      }
    },
    {
      id: 'arbitration-mediation',
      title: 'Arbitration & Mediation',
      icon: faBalanceScale,
      category: 'litigation',
      link: '/arbitration-mediation',
      description: 'Expert alternative dispute resolution services including domestic and international arbitration, mediation, and award enforcement.',
      features: [
        'Domestic & International Arbitration',
        'Mediation & Alternative Dispute Resolution',
        'Enforcement of Awards',
        'Arbitration clause drafting',
        'Expert determination services',
        'Dispute avoidance strategies'
      ],
      stats: {
        cases: '200+',
        success: '92%',
        experience: '12+ years'
      }
    },
    {
      id: 'corporate-commercial-advisory',
      title: 'Corporate & Commercial Advisory',
      icon: faBuilding,
      category: 'corporate',
      link: '/corporate-commercial-advisory',
      description: 'Strategic corporate legal counsel including contract negotiations, M&A support, and comprehensive corporate governance services.',
      features: [
        'Contract Drafting & Negotiation',
        'Mergers & Acquisitions Support',
        'General Corporate Counsel Services',
        'Corporate restructuring',
        'Joint venture agreements',
        'Corporate governance advisory'
      ],
      stats: {
        deals: '150+',
        success: '98%',
        experience: '18+ years'
      }
    },
    {
      id: 'consumer-disputes-protection',
      title: 'Consumer Disputes & Protection',
      icon: faShieldAlt,
      category: 'specialized',
      link: '/consumer-disputes-protection',
      description: 'Comprehensive consumer protection services ensuring your rights are protected and disputes are resolved effectively.',
      features: [
        'Consumer Rights Protection',
        'Dispute Resolution',
        'Regulatory Compliance',
        'Consumer complaint handling',
        'Legal representation in consumer forums',
        'Consumer awareness and education'
      ],
      stats: {
        cases: '800+',
        success: '94%',
        experience: '10+ years'
      }
    },
    {
      id: 'family-law-matrimonial-disputes',
      title: 'Family Law & Matrimonial Disputes',
      icon: faHeart,
      category: 'family',
      link: '/family-law-matrimonial-disputes',
      description: 'Sensitive and professional handling of family law matters with focus on amicable resolutions and protecting family interests.',
      features: [
        'Divorce & Separation Proceedings',
        'Child Custody & Guardianship',
        'Maintenance & Alimony Matters',
        'Property settlement agreements',
        'Domestic violence protection',
        'Family mediation services'
      ],
      stats: {
        cases: '300+',
        success: '89%',
        experience: '14+ years'
      }
    },
    {
      id: 'media-entertainment-intellectual-property',
      title: 'Media, Entertainment & IP',
      icon: faFilm,
      category: 'specialized',
      link: '/media-entertainment-intellectual-property',
      description: 'Specialized legal services for the media and entertainment industry including content contracts and intellectual property protection.',
      features: [
        'Film & Content Contracts',
        'Copyright & Trademark Protection',
        'Dispute Resolution in Media Law',
        'Licensing and distribution agreements',
        'Celebrity and talent contracts',
        'Digital rights management'
      ],
      stats: {
        projects: '250+',
        success: '96%',
        experience: '16+ years'
      }
    },
    {
      id: 'startup-legal-solutions',
      title: 'Startup Legal Solutions',
      icon: faRocket,
      category: 'corporate',
      link: '/startup-legal-solutions',
      description: 'Tailored legal services for startups and early-stage ventures, from founders\' agreements to IP strategy and compliance.',
      features: [
        'Founders\' Agreements & Structuring',
        'Compliance for Early-Stage Ventures',
        'Intellectual Property Strategy',
        'Funding and investment documentation',
        'Employment and equity agreements',
        'Regulatory compliance for startups'
      ],
      stats: {
        startups: '400+',
        success: '97%',
        experience: '8+ years'
      }
    },
    {
      id: 'conveyancing-wills',
      title: 'Conveyancing & Wills',
      icon: faHome,
      category: 'specialized',
      link: '/conveyancing-wills',
      description: 'Comprehensive property law services including document drafting, registration, and estate planning for secure asset management.',
      features: [
        'Drafting & Registration of Property Documents',
        'Transfer & Lease Agreements',
        'Wills, Probate & Succession Planning',
        'Property due diligence',
        'Title verification and clearance',
        'Estate administration services'
      ],
      stats: {
        transactions: '600+',
        success: '99%',
        experience: '20+ years'
      }
    },
    {
      id: 'employment-labour-service-law',
      title: 'Employment & Labour Service Law',
      icon: faUsers,
      category: 'corporate',
      link: '/employment-labour-service-law',
      description: 'Comprehensive employment law services ensuring workplace compliance and effective dispute resolution for employers and employees.',
      features: [
        'Employment Contracts & Policies',
        'Workplace Dispute Resolution',
        'POSH Compliance & Trainings',
        'Industrial relations advisory',
        'Employee benefits and compensation',
        'Workplace safety compliance'
      ],
      stats: {
        cases: '450+',
        success: '91%',
        experience: '13+ years'
      }
    },
    {
      id: 'public-interest-constitutional-matters',
      title: 'Public Interest & Constitutional Matters',
      icon: faBalanceScale,
      category: 'specialized',
      link: '/public-interest-constitutional-matters',
      description: 'Dedicated legal services for public interest litigation, constitutional rights protection, and policy advocacy initiatives.',
      features: [
        'Writ Petitions & PILs',
        'Constitutional Rights Litigation',
        'Policy Advocacy',
        'Human rights protection',
        'Environmental law matters',
        'Social justice initiatives'
      ],
      stats: {
        cases: '100+',
        success: '87%',
        experience: '22+ years'
      }
    },
    {
      id: 'ngo-non-profit-advisory',
      title: 'NGO & Non-Profit Advisory',
      icon: faHandHoldingHeart,
      category: 'specialized',
      link: '/ngo-non-profit-advisory',
      description: 'Specialized legal advisory services for NGOs and non-profit organizations including registration, compliance, and governance.',
      features: [
        'Registration & Compliance',
        'FCRA & Trust Law Advisory',
        'Governance Frameworks',
        'Fundraising compliance',
        'Board governance advisory',
        'Impact assessment and reporting'
      ],
      stats: {
        organizations: '150+',
        success: '93%',
        experience: '11+ years'
      }
    },
    {
      id: 'insolvency-bankruptcy-ibc-matters',
      title: 'Insolvency & Bankruptcy (IBC) Matters',
      icon: faShieldAlt,
      category: 'corporate',
      link: '/insolvency-bankruptcy-ibc-matters',
      description: 'Expert insolvency and bankruptcy services including corporate restructuring, debt resolution, and IBC compliance.',
      features: [
        'Corporate Insolvency Resolution',
        'Bankruptcy Proceedings',
        'Debt Restructuring',
        'Creditor representation',
        'Asset liquidation advisory',
        'Cross-border insolvency matters'
      ],
      stats: {
        cases: '80+',
        success: '90%',
        experience: '7+ years'
      }
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Hero Section */}
      <section className="relative bg-[#102028] py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F1E6]/20 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#F8F1E6]/10 backdrop-blur-sm rounded-full border border-[#F8F1E6]/20 mb-6">
              <FontAwesomeIcon icon={faStar} className="text-[#F8F1E6] mr-2" />
              <span className="text-[#F8F1E6] text-sm font-medium">Expert Legal Services</span>
            </div>
          </div>
          
          <h1 className="font-playfair text-[#F8F1E6] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
            Practice Areas
          </h1>
          
          <p className="text-[#F8F1E6]/90 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive legal expertise across diverse practice areas, delivering exceptional results with integrity and dedication.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-[#F8F1E6]/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-[#F8F1E6]/20">
              <div className="text-[#F8F1E6] text-2xl font-bold">12+</div>
              <div className="text-[#F8F1E6]/80 text-sm">Practice Areas</div>
            </div>
            <div className="bg-[#F8F1E6]/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-[#F8F1E6]/20">
              <div className="text-[#F8F1E6] text-2xl font-bold">15+</div>
              <div className="text-[#F8F1E6]/80 text-sm">Years Experience</div>
            </div>
            <div className="bg-[#F8F1E6]/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-[#F8F1E6]/20">
              <div className="text-[#F8F1E6] text-2xl font-bold">95%</div>
              <div className="text-[#F8F1E6]/80 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#102028] text-[#F8F1E6] shadow-lg'
                    : 'bg-[#F8F1E6] text-[#102028] border-2 border-[#102028]/20 hover:border-[#102028] hover:bg-[#102028]/5'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-20 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {filteredServices.map((service, index) => (
              <Link href={service.link} key={service.id}>
                <div className="group bg-[#F8F1E6] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-[#102028]/10 overflow-hidden">
                  {/* Service Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#102028] to-[#102028]/90 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <FontAwesomeIcon 
                          icon={service.icon} 
                          className="text-[#F8F1E6] text-xl group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-[#102028] text-2xl font-bold">
                          {service.stats.cases || service.stats.deals || service.stats.projects || service.stats.transactions || service.stats.organizations}
                        </div>
                        <div className="text-[#102028]/60 text-sm">Cases</div>
                      </div>
                    </div>

                    <h3 className="font-playfair text-[#102028] text-2xl lg:text-3xl mb-4 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-[#102028]/80 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-[#102028] text-lg font-bold">
                          {service.stats.success}
                        </div>
                        <div className="text-[#102028]/60 text-xs">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#102028] text-lg font-bold">
                          {service.stats.experience}
                        </div>
                        <div className="text-[#102028]/60 text-xs">Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#102028] text-lg font-bold">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                        </div>
                        <div className="text-[#102028]/60 text-xs">Verified</div>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="px-8 pb-6">
                    <h4 className="font-medium text-[#102028] text-sm mb-3">Key Services:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#102028]/80 text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-[#102028]/60 text-sm font-medium">
                          +{service.features.length - 4} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-8 pb-8">
                    <div className="group/btn relative bg-[#102028] text-[#F8F1E6] px-6 py-3 rounded-xl border-2 border-[#102028] hover:bg-[#102028]/90 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#102028] focus:ring-offset-2 shadow-sm hover:shadow-md text-center">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#102028] to-[#102028]/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-[#F8F1E6] text-3xl lg:text-4xl mb-6">
            Need Expert Legal Counsel?
          </h2>
          <p className="text-[#F8F1E6]/90 text-lg mb-8 max-w-2xl mx-auto">
            Our experienced team is ready to provide you with comprehensive legal solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#F8F1E6] text-[#102028] px-8 py-4 rounded-xl font-medium hover:bg-[#F8F1E6]/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/about">
              <button className="border-2 border-[#F8F1E6] text-[#F8F1E6] px-8 py-4 rounded-xl font-medium hover:bg-[#F8F1E6] hover:text-[#102028] transition-all duration-300">
                Learn About Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
