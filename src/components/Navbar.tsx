'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#resources', label: 'Resources' },
    { href: '#practiceareas', label: 'Practice Areas' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <nav className="relative z-10 bg-[#102028]">
      {/* Logo and horizontal rule */}
      <div className="relative px-6 pt-6 lg:pt-8">
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
        <div className="hidden lg:flex justify-center items-center mb-4">
          {/* Left Navigation */}
          <nav className="flex space-x-10 mr-10" role="navigation" aria-label="Left navigation">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.href} className="list-none">
                <a
                  href={item.href}
                  className="text-[#F8F1E6] hover:text-[#F8F1E6]/80 transition-colors duration-200 font-playfair text-base font-medium px-3 py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </nav>

          {/* Center Logo */}
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

          {/* Right Navigation */}
          <nav className="flex space-x-10 ml-10" role="navigation" aria-label="Right navigation">
            {navItems.slice(2).map((item) => (
              <li key={item.href} className="list-none">
                <a
                  href={item.href}
                  className="text-[#F8F1E6] hover:text-[#F8F1E6]/80 transition-colors duration-200 font-playfair text-base font-medium px-3 py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
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

        {/* Horizontal rule - positioned to penetrate logo just below middle */}
        <div className="relative -mt-6 lg:-mt-8">
          <div className="h-px bg-[#F8F1E6] w-full"></div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav 
          id="mobile-menu"
          className="lg:hidden bg-[#102028] border-b border-[#F8F1E6] shadow-lg"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-[#F8F1E6] hover:text-[#F8F1E6]/80 transition-colors duration-200 font-playfair text-lg font-medium py-3"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </nav>
  );
} 