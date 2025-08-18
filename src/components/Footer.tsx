'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Corporate Law', href: '#corporate' },
        { label: 'Litigation', href: '#litigation' },
        { label: 'Intellectual Property', href: '#ip' },
        { label: 'Real Estate', href: '#real-estate' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Our Team', href: '/team' },
        { label: 'Blog', href: '#blog' },
        { label: 'Case Studies', href: '#cases' },
        { label: 'Legal Updates', href: '#updates' },
        { label: 'Publications', href: '#publications' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { label: 'Get in Touch', href: '#contact' },
        { label: 'Office Locations', href: '#locations' },
        { label: 'Careers', href: '#careers' },
        { label: 'Client Portal', href: '#portal' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ld-counsels/', icon: faLinkedin },
    { name: 'Twitter', href: '#twitter', icon: faTwitter },
    { name: 'Facebook', href: '#facebook', icon: faFacebook },
    { name: 'Instagram', href: 'https://www.instagram.com/ldcounsels?igsh=cWFid3NyOWFxZzZ1&utm_source=qr', icon: faInstagram }
  ];

  return (
    <footer className="bg-[#102028] text-[#F8F1E6]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        {/* Top Section - Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 border-2 border-[#F8F1E6] flex items-center justify-center bg-[#102028] shadow-sm overflow-hidden mr-3">
                <Image
                  src="/logo/ldlogo.png"
                  alt="LD Counsels Law Offices India"
                  width={48}
                  height={48}
                  className="w-10 h-10 object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium">LD Counsels</h3>
                <p className="text-xs opacity-80">LAW OFFICES INDIA</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed opacity-80 mb-4">
              Consistently ranked and globally recognized law firm providing exceptional legal services.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 border border-[#F8F1E6] rounded-full flex items-center justify-center hover:bg-[#F8F1E6] hover:text-[#102028] transition-colors duration-200"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="font-medium text-base mb-4 border-b border-[#F8F1E6]/20 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-xs opacity-80 hover:opacity-100 hover:text-[#F8F1E6] transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-xs opacity-80 hover:opacity-100 hover:text-[#F8F1E6] transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section - Contact Info and Copyright */}
        <div className="border-t border-[#F8F1E6]/20 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-center">
            {/* Contact Information */}
            <div className="space-y-1">
              <p className="text-xs opacity-80">
                <span className="font-medium">Phone:</span> +91 11 2345 6789
              </p>
              <p className="text-xs opacity-80">
                <span className="font-medium">Email:</span> info@ldcounsels.com
              </p>
              <p className="text-xs opacity-80">
                <span className="font-medium">Address:</span> New Delhi, India
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:text-center">
            
            </div>

            {/* Copyright */}
            <div className="lg:text-right">
              <p className="text-xs opacity-60">
                © 2024 LD Counsels. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-3 mt-1 lg:justify-end">
                <a href="#privacy" className="text-xs opacity-60 hover:opacity-80 transition-opacity">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-xs opacity-60 hover:opacity-80 transition-opacity">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-xs opacity-60 hover:opacity-80 transition-opacity">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 