'use client';

import React from 'react';
import AboutUsSection from '@/components/AboutUsSection';
import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Lavanya Dhawan',
      role: 'Founder',
      image: '/team/Lavanya.png',
    },
    {
      name: 'Anuj Anand Malik',
      role: 'Partner',
      image: '/team/Anuj.png',
    },
    {
      name: 'Aman Pathak',
      role: 'Partner',
      image: '/team/Aman.png',
    },
    {
      name: 'Yash Datt',
      role: 'Partner',
      image: '/team/Yashd.png',
    },
    {
      name: 'Ashwin Kumar Nair',
      role: 'Legal Consultant & Advocate-on-Record, Supreme Court of India',
      image: '/team/Ashwin.png',
    },
    {
      name: 'Sandeep Dhawan',
      role: 'Senior Advisor',
      image: '/team/Sandeep.png',
    },
    {
      name: 'Shivraj Pawar',
      role: 'Senior Associate',
      image: '/team/Shivraj.png',
    },
    {
      name: 'Shrey Arora',
      role: 'Senior Associate',
      image: '/team/Shrey.png',
    },
    {
      name: 'Ritik Gupta',
      role: 'Senior Associate',
      image: '/team/Ritik.png',
    },
    {
      name: 'Nitika Grover',
      role: 'Senior Associate',
      image: '/team/Nitikag.png',
    },
    {
      name: 'Aishwarya Sharma',
      role: 'Chief of Administration & Legal Analyst',
      image: '/team/Aishwarya.png',
    },
    {
      name: 'Chhavi Joshi',
      role: 'Legal Content Strategist',
      image: '/team/Chhavi.png',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-[#102028] py-12 sm:py-16 lg:py-20 xl:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Decorative Line */}
            <div className="w-16 sm:w-24 h-1 bg-[#F8F1E6] mx-auto mb-6 sm:mb-8"></div>
            
            {/* Main Title */}
            <h1 className="font-playfair text-[#F8F1E6] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 sm:mb-6 font-italic leading-tight">
              About LD Counsels
            </h1>
            
            {/* Subtitle */}
            <p className="text-[#F8F1E6] opacity-95 text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Redefining legal solutions with expertise, ethics, and a results-driven approach
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-8 mb-8 sm:mb-12">
              <div className="w-12 sm:w-16 h-px bg-[#F8F1E6] opacity-60"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#F8F1E6] rounded-full"></div>
              <div className="w-12 sm:w-16 h-px bg-[#F8F1E6] opacity-60"></div>
            </div>
            
            {/* Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F8F1E6] mb-1 sm:mb-2">150+</div>
                <div className="text-[#F8F1E6] opacity-80 text-xs sm:text-sm uppercase tracking-wider">Expert Lawyers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F8F1E6] mb-1 sm:mb-2">100%</div>
                <div className="text-[#F8F1E6] opacity-80 text-xs sm:text-sm uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F8F1E6] mb-1 sm:mb-2">1000+</div>
                <div className="text-[#F8F1E6] opacity-80 text-xs sm:text-sm uppercase tracking-wider">Cases Handled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Path We Build Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-[#102028] text-[#F8F1E6] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              About
            </div>
            <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4 sm:mb-6 font-italic">
              The Path We Build
            </h2>
            <p className="text-[#102028] text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Combining legal expertise with strategic vision to deliver exceptional results
            </p>
          </div>

          {/* Visionary Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Vision Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#102028]/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#102028] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-[#F8F1E6] text-lg sm:text-2xl font-bold">V</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Vision</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed text-sm sm:text-base">
                To be the most trusted legal partner for businesses and individuals, known for innovative solutions 
                and unwavering commitment to client success.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#102028]/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#102028] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-[#F8F1E6] text-lg sm:text-2xl font-bold">M</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Mission</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed text-sm sm:text-base">
                To provide exceptional legal services that empower our clients to achieve their goals while 
                maintaining the highest standards of integrity and professionalism.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#102028]/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#102028] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-[#F8F1E6] text-lg sm:text-2xl font-bold">V</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Values</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed text-sm sm:text-base">
                Integrity, Excellence, Innovation, and Commitment form the foundation of everything we do, 
                ensuring trust and lasting relationships with our clients.
              </p>
            </div>
          </div>

          {/* Our Story Section - Moved Up */}
          <div className="bg-[#102028] p-6 sm:p-8 lg:p-12 rounded-2xl text-[#F8F1E6] mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Our Story</h3>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 mb-4 sm:mb-6">
                  LD Counsels was built on the belief that the practice of law is more than representation, it is about partnership. Over the years, the firm has grown into a network of dedicated professionals, trusted for their ability to handle complex disputes, high-stakes commercial matters, and sensitive personal issues with equal care and precision.
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90">
                  We are proud to be a firm that blends the agility of a modern practice with the strength of traditional advocacy. Our work is guided by three core principles: excellence, integrity, and accessibility. Excellence drives us to stay prepared and deliver results in every matter we take on. Integrity ensures that our clients' interests are always at the center of what we do. Accessibility means that whether you are a multinational corporation, a growing startup, or an individual in need of support, you will always find us approachable, responsive, and invested in your cause.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#F8F1E6] text-[#102028] p-6 sm:p-8 rounded-xl">
                  <h4 className="font-playfair text-xl sm:text-2xl mb-4 sm:mb-6 text-center">Our Evolution</h4>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-left">
                      <h5 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">From Individual to Institution</h5>
                      <p className="opacity-90 text-xs sm:text-sm">What began as the practice of a first-generation lawyer has today evolved into LD Counsels, a trusted full-service legal firm.</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Built on Trust</h5>
                      <p className="opacity-90 text-xs sm:text-sm">Each case and client taught us that legal practice is not just about representation but about building relationships rooted in trust and accountability.</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Expanding Horizons</h5>
                      <p className="opacity-90 text-xs sm:text-sm">Over the years, we grew beyond litigation into corporate advisory, compliance, and sector-focused solutions ensuring we remain relevant to a fast-changing business and legal landscape.</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Evolving with Impact</h5>
                      <p className="opacity-90 text-xs sm:text-sm">LD Counsels stands today as a team of dedicated professionals, carrying forward the same values of integrity, excellence, and commitment that defined our early days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Approach */}
          <div className="bg-[#102028] p-6 sm:p-8 lg:p-12 rounded-2xl text-[#F8F1E6]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Our Strategic Approach</h3>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 mb-4 sm:mb-6">
                  We believe that exceptional legal services require more than just expertise, they demand a strategic partnership that understands your unique challenges and aspirations.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#F8F1E6] rounded-full"></div>
                    <span className="text-sm sm:text-base lg:text-lg">Personalized Legal Strategies</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#F8F1E6] rounded-full"></div>
                    <span className="text-sm sm:text-base lg:text-lg">Innovative Problem Solving</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#F8F1E6] rounded-full"></div>
                    <span className="text-sm sm:text-base lg:text-lg">Proactive Risk Management</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#F8F1E6] rounded-full"></div>
                    <span className="text-sm sm:text-base lg:text-lg">Results-Driven Advocacy</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-[#F8F1E6] text-[#102028] p-6 sm:p-8 rounded-xl">
                  <p className="font-playfair text-lg sm:text-xl lg:text-2xl font-italic leading-relaxed">
                    "We don't just practice law; we craft solutions that transform challenges into opportunities."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-12 sm:py-16 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 font-italic">
              Meet Our Team
            </h2>
            <p className="text-[#102028] text-sm sm:text-base lg:text-lg opacity-80 max-w-2xl mx-auto mb-4 sm:mb-6">
              A diverse team of accomplished professionals dedicated to delivering exceptional legal solutions
            </p>
            <div className="w-16 sm:w-24 h-1 bg-[#102028] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[#102028]/10 hover:border-[#102028]/20 transform hover:-translate-y-1"
              >
                {/* Member Image Container */}
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden bg-gradient-to-br from-[#F8F1E6] to-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  
                  {/* Image overlay with role */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102028] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-[#102028] text-[#F8F1E6] px-2 py-1 rounded-full inline-block">
                      <p className="text-xs font-medium">
                        {member.role.split(' ')[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Member Information */}
                <div className="p-3 sm:p-4">
                  <h3 className="font-playfair text-[#102028] text-xs sm:text-sm font-semibold mb-1 group-hover:text-[#102028]/80 transition-colors duration-300 line-clamp-2">
                    {member.name}
                  </h3>
                  <p className="text-[#102028] opacity-70 text-xs leading-tight line-clamp-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Know More Button */}
          <div className="text-center">
            <a 
              href="/team" 
              className="inline-flex items-center bg-[#102028] text-[#F8F1E6] px-6 sm:px-8 py-3 rounded-lg hover:bg-[#102028]/90 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Know More About Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section (Blue BG, Off-white Text) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#102028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 font-italic">
              Client Success Stories
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#F8F1E6] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#F8F1E6] p-6 sm:p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <h4 className="font-playfair text-lg sm:text-xl font-semibold">Criminal Law – Defense & Appeals</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4 text-sm sm:text-base">
                Successfully represented clients in sensitive criminal matters, including various criminal cases of different nature, bail applications, and appeals. Our work ensured that due process was upheld and rights of the party were protected at every stage.
              </p>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 sm:p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <h4 className="font-playfair text-lg sm:text-xl font-semibold">Civil & Matrimonial Disputes</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4 text-sm sm:text-base">
                Handled multiple family law and matrimonial cases involving custody, maintenance, and property issues. Focused on delivering both legal and emotional resolution while reducing the stress of prolonged litigation.
              </p>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 sm:p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <h4 className="font-playfair text-lg sm:text-xl font-semibold">Consumer Protection Matters</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4 text-sm sm:text-base">
                Represented consumers in disputes against corporations, ensuring fair treatment and accountability. Clients secured refunds, damages, and corrective action.
              </p>
            </div>
            
            <div className="bg-[#F8F1E6] p-6 sm:p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <h4 className="font-playfair text-lg sm:text-xl font-semibold">Corporate & Commercial Advisory</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4 text-sm sm:text-base">
                Advised businesses on drafting contracts, shareholder agreements, and compliance strategies. This support helped companies minimize legal risks and build investor confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Call to Action Section (Blue BG, Off-white Text) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#102028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-[#F8F1E6] p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg border border-[#102028]/10">
              <h2 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 font-italic">
                Ready to Work With Us?
              </h2>
              <p className="text-[#102028] opacity-80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve your legal objectives and protect your interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-[#102028] text-[#F8F1E6] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#102028]/90 transition-all duration-300 font-semibold text-base sm:text-lg"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="/team" 
                  className="border-2 border-[#102028] text-[#102028] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#102028] hover:text-[#F8F1E6] transition-all duration-300 font-semibold text-base sm:text-lg"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
