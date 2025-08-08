'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBalanceScale, 
  faUsers, 
  faAward, 
  faGlobe, 
  faClock, 
  faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: faBalanceScale,
      title: 'Legal Excellence',
      description: 'Our team of seasoned attorneys brings decades of combined experience in various legal domains, ensuring the highest standards of legal representation.'
    },
    {
      icon: faUsers,
      title: 'Client-Centric Approach',
      description: 'We prioritize your needs and objectives, providing personalized legal solutions tailored to your specific circumstances and goals.'
    },
    {
      icon: faAward,
      title: 'Proven Track Record',
      description: 'With a history of successful outcomes in complex legal matters, we have established ourselves as trusted legal advisors.'
    },
    {
      icon: faGlobe,
      title: 'Global Perspective',
      description: 'Our international legal expertise and extensive networks enable us to handle cross-border legal matters effectively.'
    },
    {
      icon: faClock,
      title: 'Timely Solutions',
      description: 'We understand the importance of time in legal matters and provide efficient, prompt services without compromising quality.'
    },
    {
      icon: faShieldAlt,
      title: 'Confidentiality & Trust',
      description: 'Your privacy and trust are paramount. We maintain strict confidentiality and ethical standards in all our dealings.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#102028] via-[#1a2a35] to-[#102028] text-[#F8F1E6] py-16 lg:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#F8F1E6] rounded-full opacity-5 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#F8F1E6] rounded-full opacity-5 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F8F1E6] rounded-full opacity-3 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-playfair text-[#F8F1E6] text-3xl lg:text-4xl mb-4">
            Why Choose LD Counsels?
          </h2>
          <p className="text-[#F8F1E6] opacity-90 text-lg max-w-2xl mx-auto">
            Discover what sets us apart and makes us the preferred choice for legal services in India.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105 p-6"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon 
                  icon={reason.icon} 
                  className="text-[#102028] text-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#F8F1E6] text-xl mb-4">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-[#F8F1E6] opacity-90 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 p-8 lg:p-12">
            <h3 className="font-playfair text-[#F8F1E6] text-2xl lg:text-3xl mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-[#F8F1E6] opacity-90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted us with their legal matters.
            </p>
            <button className="group relative bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/90 text-[#102028] px-8 py-4 rounded-xl border-2 border-[#F8F1E6] hover:from-[#F8F1E6]/90 hover:to-[#F8F1E6] transition-all duration-300 font-sans text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-[#F8F1E6]/30 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 