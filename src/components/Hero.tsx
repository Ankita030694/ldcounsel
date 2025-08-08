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
            src="/banners/banner1.png"
            alt="Legal office banner background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main hero content */}
        {/* <main className="relative z-10 px-6 pt-12 lg:pt-20 lg:px-12">
          <div className="max-w-4xl">

            <h1 className="font-playfair text-[#102028] text-3xl lg:text-5xl xl:text-6xl leading-tight mb-8 lg:mb-12">
              Consistently ranked and<br />
              globally recognized
            </h1>


            <button
              className="bg-[#102028] text-[#F8F1E6] px-8 py-4 rounded-lg border-2 border-[#102028] hover:bg-[#102028]/90 transition-colors duration-200 font-sans text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#102028] focus:ring-offset-2 shadow-sm"
              aria-label="Learn more about our services"
            >
              Know More
            </button>
          </div>
        </main> */}
      </header>

      {/* Counter Section */}
      <CounterSection />
    </>
  );
} 