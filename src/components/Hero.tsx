'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      {/* Navigation */}
      <header className="relative h-[90vh] py-8 sm:py-12 lg:py-16 xl:py-20 bg-[#F8F1E6]">
        {/* Background banner image */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/banners/ldbanner.png"
            alt="Legal office banner background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main hero content */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 h-full flex items-center">
          <div className="max-w-4xl mx-auto sm:mx-0">
            <h1 className="font-playfair text-[#102028] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mb-3 sm:mb-4 lg:mb-6 xl:mb-8 text-center sm:text-left">
              LD Counsels – Your Trusted<br />
              Law Firm in India
            </h1>
            
            <h2 className="font-playfair text-[#102028] text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed mb-4 sm:mb-6 lg:mb-8 xl:mb-12 text-center sm:text-left font-normal">
              Delivering reliable, result-driven legal services<br /> tailored to your needs across India all under one roof.
            </h2>

            <div className="text-center sm:text-left">
              <Link href="/contact">
              <button
                className="bg-[#102028] text-[#F8F1E6] px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg border-2 border-[#102028] hover:bg-[#102028]/90 transition-colors duration-200 font-sans text-sm sm:text-base lg:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#102028] focus:ring-offset-2 shadow-sm w-full sm:w-auto"
                aria-label="Learn more about our services"
              >
                Get in touch
              </button>
              </Link>
            </div>
          </div>
        </main>
      </header>
    </>
  );
} 