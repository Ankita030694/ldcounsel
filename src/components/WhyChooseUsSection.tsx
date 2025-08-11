'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faMapMarkedAlt, 
  faCogs, 
  faClock, 
  faBrain,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: faHandshake,
      title: 'Transparent & Client Centric',
      description: 'We offer client centric advice, de-mystifying the legal provisions in an open communication style. We make sure you understand every step before it\'s taken. We have a policy (for our clients & our experts) ensuring you\'re informed and confident at every step.'
    },
    {
      icon: faMapMarkedAlt,
      title: 'Pan-India Services',
      description: 'From local disputes to complex, high-stakes cases, we\'ve got you covered in every jurisdiction. We have a network of 150+ lawyers across India. We are a leading law firm in India.'
    },
    {
      icon: faCogs,
      title: 'Bespoke Solutions',
      description: 'We craft tailored strategies designed to meet your unique legal and business needs. From the first consultation to resolution, we are driven by professionalism, integrity, and an unwavering commitment to your cause.'
    },
    {
      icon: faClock,
      title: 'We Value Your Time',
      description: 'Client requests & queries are responded timely, case updates are regular, and deadlines are met without any service compromise.'
    },
    {
      icon: faBrain,
      title: 'Professional Acuity',
      description: 'We proactively plan our strategies, anticipate challenges before they arise, play to our strengths and opportunities, thereby saving clients time, money, and apprehensions.'
    },
    {
      icon: faShieldAlt,
      title: 'Confidentiality & Trust',
      description: 'Your privacy and trust are paramount. We maintain strict confidentiality and ethical standards in all our dealings, ensuring your sensitive information remains secure.'
    }
  ];

  return (
    <section className="bg-[#F8F1E6] text-[#102028] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#102028] rounded-full opacity-5 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#102028] rounded-full opacity-5 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#102028] rounded-full opacity-3 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
            Why Choose LD Counsels?
          </h2>
          <p className="text-[#102028] opacity-80 text-base sm:text-lg max-w-2xl mx-auto">
            Discover what sets us apart and makes us the preferred choice for legal services in India.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-[#102028]/10 hover:border-[#102028]/30 transition-all duration-300 hover:transform hover:scale-105 p-4 sm:p-6 shadow-sm hover:shadow-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#102028] to-[#1a2a35] rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon 
                  icon={reason.icon} 
                  className="text-[#F8F1E6] text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#102028] text-lg sm:text-xl mb-3 sm:mb-4">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-[#102028] opacity-80 text-xs sm:text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
} 