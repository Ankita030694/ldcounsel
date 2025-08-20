'use client';

import React from 'react';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-[#102028] py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-[#F8F1E6] mx-auto mb-8"></div>
            
            {/* Main Title */}
            <h1 className="font-playfair text-[#F8F1E6] text-5xl sm:text-6xl lg:text-7xl mb-6 font-italic leading-tight">
              About LD Counsels
            </h1>
            
            {/* Subtitle */}
            <p className="text-[#F8F1E6] opacity-95 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
              Redefining legal solutions with expertise, ethics, and a results-driven approach
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              <div className="w-16 h-px bg-[#F8F1E6] opacity-60"></div>
              <div className="w-3 h-3 bg-[#F8F1E6] rounded-full"></div>
              <div className="w-16 h-px bg-[#F8F1E6] opacity-60"></div>
            </div>
            
            {/* Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F8F1E6] mb-2">150+</div>
                <div className="text-[#F8F1E6] opacity-80 text-sm uppercase tracking-wider">Expert Lawyers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F8F1E6] mb-2">100%</div>
                <div className="text-[#F8F1E6] opacity-80 text-sm uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F8F1E6] mb-2">1000+</div>
                <div className="text-[#F8F1E6] opacity-80 text-sm uppercase tracking-wider">Cases Handled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Path We Build Section - Redesigned */}
      <section className="py-20 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#102028] text-[#F8F1E6] px-6 py-2 rounded-full text-sm font-medium mb-6">
              About
            </div>
            <h2 className="font-playfair text-[#102028] text-4xl sm:text-5xl lg:text-6xl mb-6 font-italic">
              The Path We Build
            </h2>
            <p className="text-[#102028] text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Combining legal expertise with strategic vision to deliver exceptional results
            </p>
          </div>

          {/* Visionary Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#102028]/10">
              <div className="w-16 h-16 bg-[#102028] rounded-xl flex items-center justify-center mb-6">
                <span className="text-[#F8F1E6] text-2xl font-bold">V</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed">
                To be the most trusted legal partner for businesses and individuals, known for innovative solutions 
                and unwavering commitment to client success.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#102028]/10">
              <div className="w-16 h-16 bg-[#102028] rounded-xl flex items-center justify-center mb-6">
                <span className="text-[#F8F1E6] text-2xl font-bold">M</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed">
                To provide exceptional legal services that empower our clients to achieve their goals while 
                maintaining the highest standards of integrity and professionalism.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#102028]/10">
              <div className="w-16 h-16 bg-[#102028] rounded-xl flex items-center justify-center mb-6">
                <span className="text-[#F8F1E6] text-2xl font-bold">V</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-2xl font-semibold mb-4">Values</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed">
                Integrity, Excellence, Innovation, and Commitment form the foundation of everything we do, 
                ensuring trust and lasting relationships with our clients.
              </p>
            </div>
          </div>

          {/* Our Story Section - Moved Up */}
          <div className="bg-[#102028] p-12 rounded-2xl text-[#F8F1E6] mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-3xl font-semibold mb-6">Our Story</h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  LD Counsels was built on the belief that the practice of law is more than representation, it is about partnership. Over the years, the firm has grown into a network of dedicated professionals, trusted for their ability to handle complex disputes, high-stakes commercial matters, and sensitive personal issues with equal care and precision.
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  We are proud to be a firm that blends the agility of a modern practice with the strength of traditional advocacy. Our work is guided by three core principles: excellence, integrity, and accessibility. Excellence drives us to stay prepared and deliver results in every matter we take on. Integrity ensures that our clients' interests are always at the center of what we do. Accessibility means that whether you are a multinational corporation, a growing startup, or an individual in need of support, you will always find us approachable, responsive, and invested in your cause.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#F8F1E6] text-[#102028] p-8 rounded-xl">
                  <h4 className="font-playfair text-2xl mb-6 text-center">Our Evolution</h4>
                  <div className="space-y-6">
                    <div className="text-left">
                      <h5 className="font-semibold text-lg mb-2">From Individual to Institution</h5>
                      <p className="opacity-90 text-sm">What began as the practice of a first-generation lawyer has today evolved into LD Counsels, a trusted full-service legal firm.</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-lg mb-2">Built on Trust</h5>
                      <p className="opacity-90 text-sm">Each case and client taught us that legal practice is not just about representation but about building relationships rooted in trust and accountability.</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-lg mb-2">Expanding Horizons</h5>
                      <p className="opacity-90 text-sm">Over the years, we grew beyond litigation into corporate advisory, compliance, and sector-focused solutions ensuring we remain relevant to a fast-changing business and legal landscape.</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-lg mb-2">Evolving with Impact</h5>
                      <p className="opacity-90 text-sm">LD Counsels stands today as a team of dedicated professionals, carrying forward the same values of integrity, excellence, and commitment that defined our early days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Approach */}
          <div className="bg-[#102028] p-12 rounded-2xl text-[#F8F1E6]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-3xl font-semibold mb-6">Our Strategic Approach</h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  We believe that exceptional legal services require more than just expertise—they demand a strategic partnership that understands your unique challenges and aspirations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full"></div>
                    <span className="text-lg">Personalized Legal Strategies</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full"></div>
                    <span className="text-lg">Innovative Problem Solving</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full"></div>
                    <span className="text-lg">Proactive Risk Management</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#F8F1E6] rounded-full"></div>
                    <span className="text-lg">Results-Driven Advocacy</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-[#F8F1E6] text-[#102028] p-8 rounded-xl">
                  <p className="font-playfair text-2xl font-italic leading-relaxed">
                    "We don't just practice law; we craft solutions that transform challenges into opportunities."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Core Values Section (Off-white BG, Blue Text) */}
      <section className="py-20 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl mb-6 font-italic">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#102028] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#102028]/10 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#102028] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#F8F1E6] text-2xl font-bold">I</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed">
                Unwavering commitment to ethical practices and transparent communication in all our dealings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#102028]/10 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#102028] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#F8F1E6] text-2xl font-bold">E</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed">
                Pursuit of the highest standards in legal expertise, client service, and professional development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#102028]/10 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#102028] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#F8F1E6] text-2xl font-bold">I</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed">
                Embracing modern solutions and creative approaches to complex legal challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#102028]/10 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#102028] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#F8F1E6] text-2xl font-bold">C</span>
              </div>
              <h3 className="font-playfair text-[#102028] text-xl font-semibold mb-4">Commitment</h3>
              <p className="text-[#102028] opacity-80 leading-relaxed">
                Dedicated to achieving the best possible outcomes for our clients through persistent advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section (Blue BG, Off-white Text) */}
      <section className="py-20 bg-[#102028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[#F8F1E6] text-3xl sm:text-4xl lg:text-5xl mb-6 font-italic">
              Client Success Stories
            </h2>
            <div className="w-24 h-1 bg-[#F8F1E6] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F8F1E6] p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-4 rounded-lg mb-6">
                <h4 className="font-playfair text-xl font-semibold">Criminal Law – Defense & Appeals</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4">
                Successfully represented clients in sensitive criminal matters, including various criminal cases of different nature, bail applications, and appeals. Our work ensured that due process was upheld and rights of the party were protected at every stage.
              </p>
            </div>
            
            <div className="bg-[#F8F1E6] p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-4 rounded-lg mb-6">
                <h4 className="font-playfair text-xl font-semibold">Civil & Matrimonial Disputes</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4">
                Handled multiple family law and matrimonial cases involving custody, maintenance, and property issues. Focused on delivering both legal and emotional resolution while reducing the stress of prolonged litigation.
              </p>
            </div>
            
            <div className="bg-[#F8F1E6] p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-4 rounded-lg mb-6">
                <h4 className="font-playfair text-xl font-semibold">Consumer Protection Matters</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4">
                Represented consumers in disputes against corporations, ensuring fair treatment and accountability. Clients secured refunds, damages, and corrective action.
              </p>
            </div>
            
            <div className="bg-[#F8F1E6] p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-4 rounded-lg mb-6">
                <h4 className="font-playfair text-xl font-semibold">Corporate & Commercial Advisory</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4">
                Advised businesses on drafting contracts, shareholder agreements, and compliance strategies. This support helped companies minimize legal risks and build investor confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Call to Action Section (Blue BG, Off-white Text) */}
      <section className="py-20 bg-[#102028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-[#F8F1E6] p-12 rounded-2xl shadow-lg border border-[#102028]/10">
              <h2 className="font-playfair text-[#102028] text-3xl sm:text-4xl mb-6 font-italic">
                Ready to Work With Us?
              </h2>
              <p className="text-[#102028] opacity-80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve your legal objectives and protect your interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-[#102028] text-[#F8F1E6] px-8 py-4 rounded-lg hover:bg-[#102028]/90 transition-all duration-300 font-semibold text-lg"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="/team" 
                  className="border-2 border-[#102028] text-[#102028] px-8 py-4 rounded-lg hover:bg-[#102028] hover:text-[#F8F1E6] transition-all duration-300 font-semibold text-lg"
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
