'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import CounterSection from './CounterSection';

export default function Hero() {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      <header className="relative min-h-screen bg-[#F8F1E6]">
        {/* Background banner image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banners/ldbanner.png"
            alt="Legal office banner background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main hero content */}
        <main className="relative z-10 px-4 pt-8 sm:px-6 lg:pt-30 lg:px-12">
          <div className="max-w-4xl mx-auto sm:mx-0">
            <h1 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6 lg:mb-8 text-center sm:text-left">
              Consistently ranked and<br />
              globally recognized
            </h1>
            
            <h2 className="font-playfair text-[#102028] text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 text-center sm:text-left font-normal">
              Legal experts under one roof <br /> legal services that you can trust
            </h2>

            <div className="text-center sm:text-left">
              <button
                className="bg-[#102028] text-[#F8F1E6] px-6 py-3 sm:px-8 sm:py-4 rounded-lg border-2 border-[#102028] hover:bg-[#102028]/90 transition-colors duration-200 font-sans text-base sm:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#102028] focus:ring-offset-2 shadow-sm w-full sm:w-auto"
                aria-label="Learn more about our services"
              >
                Know More
              </button>
            </div>
          </div>
        </main>
      </header>

      {/* Counter Section */}
      <CounterSection />
    </>
  );
} 