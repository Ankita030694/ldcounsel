'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
    { href: '/practices-areas', label: 'Practice Areas' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="relative z-10 bg-[#102028] w-full">
      {/* Logo and horizontal rule */}
      <div className="relative w-full">
        <div className="lg:px-8 lg:pt-8">
          {/* Mobile menu button - top right */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              className="p-3"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-[#F8F1E6] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-[#F8F1E6] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-[#F8F1E6] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>

          {/* Desktop Layout - Logo and Navigation side by side */}
          <div className="hidden lg:flex justify-center items-center mb-4 w-full">
            {/* Left Navigation */}
            <nav className="flex space-x-10 mr-10 ml-14" role="navigation" aria-label="Left navigation">
              {navItems.slice(0, 2).map((item) => (
                <li key={item.href} className="list-none">
                  <Link
                    href={item.href}
                    className="text-[#F8F1E6] hover:text-[#F8F1E6]/80 transition-colors duration-200 font-playfair text-base font-medium px-3 py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="relative z-20">
              <Link href="/"> 
              <div className="w-32 h-32 lg:w-24 lg:h-24 border-2 border-[#F8F1E6] flex items-center justify-center bg-[#102028] shadow-sm overflow-hidden">
                <Image
                  src="/logo/ldlogo.png"
                  alt="Luthra and Luthra Law Offices India"
                  width={200}
                  height={80}
                  className="w-20 h-20 lg:w-22 lg:h-22 object-contain"
                  priority
                />
              </div>
              </Link>
            </div>

            {/* Right Navigation */}
            <nav className="flex space-x-10 ml-10" role="navigation" aria-label="Right navigation">
              {/* Practice Areas Link */}
              <li className="list-none">
                <Link
                  href="/practices-areas"
                  className="text-[#F8F1E6] hover:text-[#F8F1E6]/80 transition-colors duration-200 font-playfair text-base font-medium px-3 py-2 flex items-center"
                >
                  Practice Areas
                </Link>
              </li>

              {/* Contact Us */}
              <li className="list-none">
                <Link
                  href="/contact"
                  className="text-[#F8F1E6] hover:text-[#F8F1E6]/80 transition-colors duration-200 font-playfair text-base font-medium px-3 py-2 flex items-center -ml-5"
                >
                  Contact Us
                </Link>
              </li>
            </nav>
          </div>

          {/* Mobile Logo - centered */}
          <div className="lg:hidden flex justify-center mb-4">
            <div className="relative z-20">
              <div className="w-32 h-24 lg:w-24 lg:h-24 border-2 border-[#F8F1E6] flex items-center justify-center bg-[#102028] shadow-sm overflow-hidden">
                <Image
                  src="/logo/ldlogo.png"
                  alt="Luthra and Luthra Law Offices India"
                  width={200}
                  height={80}
                  className="w-20 h-20 lg:w-22 lg:h-22 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal rule - positioned to penetrate logo just below middle */}
        <div className="relative -mt-6 lg:-mt-8 w-full">
          <div className="h-px bg-[#F8F1E6] w-full"></div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav 
          id="mobile-menu"
          className="lg:hidden bg-[#102028] border-b border-[#F8F1E6] shadow-lg w-full"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-[#F8F1E6] hover:text-[#F8F1E6]/80 transition-colors duration-200 font-playfair text-lg font-medium py-3"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Mobile Practice Areas */}
            <li>
              <div className="text-[#F8F1E6] font-playfair text-lg font-medium py-3">
                Practice Areas
              </div>
              <ul className="ml-4 space-y-2 mt-2">
                {/* practiceAreas.map((area) => ( */}
                  <li key="arbitration-mediation">
                    <Link
                      href="/arbitration-mediation"
                      className="block text-[#F8F1E6]/80 hover:text-[#F8F1E6] transition-colors duration-200 font-playfair text-base py-2"
                      onClick={closeMenu}
                    >
                      Arbitration & Mediation
                    </Link>
                  </li>
                  <li key="consumer-disputes-protection">
                    <Link
                      href="/consumer-disputes-protection"
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
} 