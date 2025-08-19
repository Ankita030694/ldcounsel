'use client';

import React from 'react';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-[#102028] py-20 lg:py-32 relative overflow-hidden">
        {/* Simple Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F8F1E6] opacity-5 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#F8F1E6] opacity-3 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#F8F1E6] opacity-4 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-[#F8F1E6] opacity-2 rounded-full"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[#F8F1E6] to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#F8F1E6] rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#F8F1E6] rotate-12"></div>
        </div>

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
              Pioneering legal excellence through innovation, integrity, and unwavering commitment to client success
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

      {/* The Visionary Build Section - Redesigned */}
      <section className="py-20 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#102028] text-[#F8F1E6] px-6 py-2 rounded-full text-sm font-medium mb-6">
              About
            </div>
            <h2 className="font-playfair text-[#102028] text-4xl sm:text-5xl lg:text-6xl mb-6 font-italic">
              The Visionary Build
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

          {/* Strategic Approach */}
          <div className="bg-[#102028] p-12 rounded-2xl text-[#F8F1E6]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-3xl font-semibold mb-6">Our Strategic Approach</h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  We believe that exceptional legal services require more than just expertise—they demand 
                  a strategic partnership that understands your unique challenges and aspirations.
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

      {/* Our Story Section (Blue BG, Off-white Text) */}
      <section className="py-20 bg-[#102028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[#F8F1E6] text-3xl sm:text-4xl lg:text-5xl mb-6 font-italic">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-[#F8F1E6] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-playfair text-[#F8F1E6] text-2xl font-semibold">
                A Legacy of Legal Excellence
              </h3>
              <p className="text-[#F8F1E6] text-lg leading-relaxed opacity-90">
                Founded with a vision to transform the legal landscape, LD Counsels emerged from a deep understanding 
                that exceptional legal services require more than just expertise—they demand innovation, empathy, 
                and a relentless pursuit of justice.
              </p>
              <p className="text-[#F8F1E6] text-lg leading-relaxed opacity-90">
                Our journey began with a simple yet powerful belief: every client deserves not just legal representation, 
                but a strategic partner who understands their unique challenges and aspirations. This philosophy has 
                guided our growth from a small practice to a nationally recognized legal powerhouse.
              </p>
              <div className="bg-[#F8F1E6] text-[#102028] p-6 rounded-lg">
                <p className="font-playfair text-xl font-italic">
                  "We don't just practice law; we craft solutions that transform challenges into opportunities."
                </p>
              </div>
            </div>
            
            <div className="bg-[#F8F1E6] p-8 rounded-2xl text-[#102028]">
              <h4 className="font-playfair text-2xl mb-6 text-center">Our Evolution</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#102028] text-[#F8F1E6] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2">Foundation</h5>
                    <p className="opacity-90">Established with core values of integrity and excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#102028] text-[#F8F1E6] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2">Growth</h5>
                    <p className="opacity-90">Expanded expertise across diverse legal domains</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#102028] text-[#F8F1E6] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2">Innovation</h5>
                    <p className="opacity-90">Pioneered modern legal solutions and technology integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#102028] text-[#F8F1E6] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2">Leadership</h5>
                    <p className="opacity-90">Setting industry standards and mentoring future legal leaders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F8F1E6] p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-4 rounded-lg mb-6">
                <h4 className="font-playfair text-xl font-semibold">Corporate Restructuring</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4">
                Successfully guided a major manufacturing company through complex restructuring, 
                saving 200+ jobs and ensuring business continuity.
              </p>
              <div className="text-[#102028] font-semibold">Result: 100% Success Rate</div>
            </div>
            
            <div className="bg-[#F8F1E6] p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-4 rounded-lg mb-6">
                <h4 className="font-playfair text-xl font-semibold">Startup Funding</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4">
                Assisted a tech startup in securing $5M in Series A funding through comprehensive 
                legal structuring and investor negotiations.
              </p>
              <div className="text-[#102028] font-semibold">Result: 5x Growth Achieved</div>
            </div>
            
            <div className="bg-[#F8F1E6] p-8 rounded-xl shadow-lg border border-[#102028]/10">
              <div className="bg-[#102028] text-[#F8F1E6] p-4 rounded-lg mb-6">
                <h4 className="font-playfair text-xl font-semibold">Family Resolution</h4>
              </div>
              <p className="text-[#102028] opacity-80 leading-relaxed mb-4">
                Facilitated amicable resolution of complex family dispute involving multiple 
                properties and business interests worth ₹50 crore.
              </p>
              <div className="text-[#102028] font-semibold">Result: Peaceful Settlement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section (Off-white BG, Blue Text) */}
      <section className="py-20 bg-[#F8F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[#102028] text-3xl sm:text-4xl lg:text-5xl mb-6 font-italic">
              Awards & Recognition
            </h2>
            <div className="w-24 h-1 bg-[#102028] mx-auto"></div>
          </div>
          
          <div className="bg-[#102028] p-12 rounded-2xl text-[#F8F1E6]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-4">2023</div>
                <h4 className="font-playfair text-xl font-semibold mb-2">Legal Excellence Award</h4>
                <p className="opacity-80">Chambers & Partners</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-4">2022</div>
                <h4 className="font-playfair text-xl font-semibold mb-2">Best Law Firm</h4>
                <p className="opacity-80">India Legal Awards</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-4">2021</div>
                <h4 className="font-playfair text-xl font-semibold mb-2">Client Choice Award</h4>
                <p className="opacity-80">Legal 500</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-4">2020</div>
                <h4 className="font-playfair text-xl font-semibold mb-2">Innovation in Legal Services</h4>
                <p className="opacity-80">Asia Legal Awards</p>
              </div>
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
