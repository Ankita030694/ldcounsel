'use client';

import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section className="bg-gradient-to-br from-[#102028] via-[#1a2a35] to-[#102028] text-[#F8F1E6] py-12 lg:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#F8F1E6] rounded-full opacity-5 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#F8F1E6] rounded-full opacity-5 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#F8F1E6] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#102028] font-bold text-xl">LD</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/50 rounded-full opacity-20 blur-sm"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="inline-block bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/80 text-[#102028] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Established 2009
              </div>
              <h2 className="font-playfair text-[#F8F1E6] text-3xl lg:text-4xl mb-4 leading-tight">
                About <span className="bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/70 bg-clip-text text-transparent">LD Counsels</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F8F1E6] to-transparent mb-6"></div>
            </div>

            <div className="space-y-4">
              <p className="text-[#F8F1E6] text-lg leading-relaxed opacity-95 font-light">
                Founded with a vision to provide <span className="font-semibold text-[#F8F1E6]">exceptional legal services</span>, LD Counsels has established itself as a leading law firm in India with over <span className="font-semibold text-[#F8F1E6]">15 years of experience</span>.
              </p>

              <p className="text-[#F8F1E6] text-lg leading-relaxed opacity-95 font-light">
                Our team of seasoned attorneys specializes in corporate law, litigation, intellectual property, and real estate, delivering strategic solutions that protect our clients' interests and drive their success.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="group p-4 bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-[#102028] font-bold text-xs">LAW</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F8F1E6] mb-1 text-base">Expert Legal Team</h4>
                    <p className="text-[#F8F1E6] opacity-80 text-sm">Experienced attorneys with deep industry knowledge</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-[#102028] font-bold text-xs">FOCUS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F8F1E6] mb-1 text-base">Client-Focused</h4>
                    <p className="text-[#F8F1E6] opacity-80 text-sm">Personalized solutions tailored to your needs</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-[#102028] font-bold text-xs">WIN</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F8F1E6] mb-1 text-base">Proven Track Record</h4>
                    <p className="text-[#F8F1E6] opacity-80 text-sm">Successful outcomes in complex legal matters</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-br from-[#F8F1E6]/10 to-[#F8F1E6]/5 rounded-xl border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-[#102028] font-bold text-xs">GLOBAL</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F8F1E6] mb-1 text-base">Global Perspective</h4>
                    <p className="text-[#F8F1E6] opacity-80 text-sm">International legal expertise and networks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="group relative bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/90 text-[#102028] px-8 py-3 rounded-xl border-2 border-[#F8F1E6] hover:from-[#F8F1E6]/90 hover:to-[#F8F1E6] transition-all duration-300 font-sans text-base font-semibold focus:outline-none focus:ring-4 focus:ring-[#F8F1E6]/30 shadow-xl hover:shadow-2xl transform hover:scale-105">
                <span className="relative z-10">Learn More About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 