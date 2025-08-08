'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGavel, 
  faFileContract, 
  faTrademark 
} from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
  const services = [
    {
      title: 'Litigation',
      icon: faGavel,
      description: 'Comprehensive legal representation in civil, criminal, and commercial litigation matters. Our experienced attorneys provide strategic counsel and vigorous advocacy in courts across India.',
      features: [
        'Civil & Commercial Litigation',
        'Criminal Defense',
        'Arbitration & Mediation',
        'Appellate Practice'
      ]
    },
    {
      title: 'Drafting',
      icon: faFileContract,
      description: 'Expert legal document preparation and contract drafting services. We ensure precision, clarity, and legal compliance in all documentation to protect your interests.',
      features: [
        'Contract Drafting & Review',
        'Legal Agreements',
        'Corporate Documents',
        'Policy Formulation'
      ]
    },
    {
      title: 'Trademark',
      icon: faTrademark,
      description: 'Complete trademark registration, protection, and enforcement services. We help businesses safeguard their intellectual property and brand identity.',
      features: [
        'Trademark Registration',
        'Brand Protection',
        'Infringement Litigation',
        'Portfolio Management'
      ]
    }
  ];

  return (
    <section className="bg-[#F8F1E6] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-playfair text-[#102028] text-3xl lg:text-4xl mb-4">
            Our Legal Services
          </h2>
          <p className="text-[#102028] opacity-80 text-lg max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to meet your specific needs with expertise and dedication.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 border border-[#102028]/10 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#102028] to-[#102028]/90 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon 
                  icon={service.icon} 
                  className="text-[#F8F1E6] text-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Service Title */}
              <h3 className="font-playfair text-[#102028] text-2xl lg:text-3xl mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[#102028] opacity-80 text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#102028] opacity-90 text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <div className="mt-8">
                <button className="group/btn relative bg-[#102028] text-[#F8F1E6] px-6 py-3 rounded-lg border-2 border-[#102028] hover:bg-[#102028]/90 transition-all duration-300 font-sans text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#102028] focus:ring-offset-2 shadow-sm hover:shadow-md">
                  Learn More
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 border border-[#102028]/10">
            <h3 className="font-playfair text-[#102028] text-2xl lg:text-3xl mb-4">
              Need Custom Legal Solutions?
            </h3>
            <p className="text-[#102028] opacity-80 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experienced attorneys is ready to provide personalized legal counsel for your specific requirements.
            </p>
            <button className="bg-[#102028] text-[#F8F1E6] px-8 py-4 rounded-lg border-2 border-[#102028] hover:bg-[#102028]/90 transition-colors duration-200 font-sans text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#102028] focus:ring-offset-2 shadow-sm hover:shadow-md">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 