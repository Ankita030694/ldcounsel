'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faGavel, 
  faRocket, 
  faChalkboardTeacher,
  faBalanceScale,
  faShieldAlt,
  faBriefcase,
  faHeart,
  faShoppingCart,
  faTv,
  faBuilding,
  faHandshake,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

export default function AboutUsSection() {
  return (
    <section className="bg-gradient-to-br from-[#102028] via-[#1a2a35] to-[#102028] text-[#F8F1E6] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#F8F1E6] rounded-full opacity-5 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#F8F1E6] rounded-full opacity-5 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Image on left, info on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
              <Image
                src="/banners/banner1.png"
                alt="LD Counsels Law Office"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102028]/60 via-transparent to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-12 h-12 sm:w-16 sm:h-16 bg-[#F8F1E6] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#102028] font-bold text-lg sm:text-xl">LD</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/50 rounded-full opacity-20 blur-sm"></div>
          </div>

          {/* Right Side - Initial Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="relative">
              <div className="inline-block bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/80 text-[#102028] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                The Visionary Build
              </div>
              <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight">
                About <span className="bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/70 bg-clip-text text-transparent">LD Counsels</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#F8F1E6] to-transparent mb-6 sm:mb-8"></div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#F8F1E6] text-base sm:text-lg leading-relaxed opacity-95 font-light">
                At LD Counsels, we provide <span className="font-semibold text-[#F8F1E6]">litigation, legal consultancy, contract drafting, and compliance solutions</span> designed to meet today's dynamic legal landscape. We combine courtroom expertise with strategic advisory skills, ensuring every client - from individuals to businesses, receives the clarity, confidence, and results they need to move forward.
              </p>

              <p className="text-[#F8F1E6] text-base sm:text-lg leading-relaxed opacity-95 font-light">
                <span className="italic">Your challenges become our mission. Your goals, our strategy and your trust, our greatest victory.</span>
              </p>

              <p className="text-[#F8F1E6] text-base sm:text-lg leading-relaxed opacity-95 font-light">
                Our mission is simple - to combine legal expertise with personalised attention, ensuring every client feels informed, empowered, and supported at every step. We believe that the law is not just about resolving disputes, but about building strategies that protect and advance our clients' interests.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Rest of the content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="group p-4 sm:p-6 bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <FontAwesomeIcon 
                    icon={faUsers} 
                    className="text-[#102028] text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#F8F1E6] mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Nationwide Network</h4>
                  <p className="text-[#F8F1E6] opacity-80 text-xs sm:text-sm leading-relaxed">150+ lawyers across India for seamless representation</p>
                </div>
              </div>
            </div>

            <div className="group p-4 sm:p-6 bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <FontAwesomeIcon 
                    icon={faGavel} 
                    className="text-[#102028] text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#F8F1E6] mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Multi-Court Expertise</h4>
                  <p className="text-[#F8F1E6] opacity-80 text-xs sm:text-sm leading-relaxed">Trial Courts to Supreme Court representation</p>
                </div>
              </div>
            </div>

            <div className="group p-4 sm:p-6 bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <FontAwesomeIcon 
                    icon={faRocket} 
                    className="text-[#102028] text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#F8F1E6] mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Startup Advisory</h4>
                  <p className="text-[#F8F1E6] opacity-80 text-xs sm:text-sm leading-relaxed">Strong legal foundations for growth and success</p>
                </div>
              </div>
            </div>

            <div className="group p-4 sm:p-6 bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <FontAwesomeIcon 
                    icon={faChalkboardTeacher} 
                    className="text-[#102028] text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#F8F1E6] mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">PoSH Training</h4>
                  <p className="text-[#F8F1E6] opacity-80 text-xs sm:text-sm leading-relaxed">Preventive legal programs and compliance training</p>
                </div>
              </div>
            </div>
          </div>

     
          {/* CTA Button */}
          <div className="text-center">
            <button className="group relative bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/90 text-[#102028] px-6 py-3 sm:px-8 sm:py-4 rounded-xl border-2 border-[#F8F1E6] hover:from-[#F8F1E6]/90 hover:to-[#F8F1E6] transition-all duration-300 font-sans text-sm sm:text-base lg:text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-[#F8F1E6]/30 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span className="relative z-10">Learn More About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 