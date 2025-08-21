'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  const usefulLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Practice Areas', href: '/practices-areas' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Our Team', href: '/team' }
  ];

  const services = [
    { label: 'Litigation & Dispute Resolution', href: '/litigation-dispute-resolution' },
    { label: 'Arbitration & Mediation', href: '/arbitration-mediation' },
    { label: 'Corporate & Commercial Advisory', href: '/corporate-commercial-advisory' },
    { label: 'Consumer Disputes & Protection', href: '/consumer-disputes-protection' },
    { label: 'Family Law & Matrimonial Disputes', href: '/family-law-matrimonial-disputes' },
    { label: 'Media, Entertainment & IP', href: '/media-entertainment-intellectual-property' },
    { label: 'Startup Legal Solutions', href: '/startup-legal-solutions' },
    { label: 'Conveyancing & Wills', href: '/conveyancing-wills' },
    { label: 'Employment & Labour Service Law', href: '/employment-labour-service-law' },
    { label: 'Public Interest & Constitutional Matters', href: '/public-interest-constitutional-matters' },
    { label: 'NGO & Non-Profit Advisory', href: '/ngo-non-profit-advisory' },
    { label: 'Insolvency & Bankruptcy (IBC) Matters', href: '/insolvency-bankruptcy-ibc-matters' }
  ];

  const contactInfo = [
    { label: 'Phone', value: '+91 70118 03577', href: 'tel:+917011803577' },
    { label: 'Email', value: 'info@ldcounsels.com', href: 'mailto:info@ldcounsels.com' },
    { label: 'Address', value: 'New Delhi, India', href: '#address' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-&-condition' },
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

          {/* Useful Links */}
          <div className="lg:col-span-1">
            <h4 className="font-medium text-base mb-4 border-b border-[#F8F1E6]/20 pb-2">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs opacity-80 hover:opacity-100 hover:text-[#F8F1E6] transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h4 className="font-medium text-base mb-4 border-b border-[#F8F1E6]/20 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3">
              {/* Contact Information */}
              <div className="space-y-2">
                {contactInfo.map((contact) => (
                  <div key={contact.label}>
                    <a
                      href={contact.href}
                      className="text-xs opacity-80 hover:opacity-100 hover:text-[#F8F1E6] transition-all duration-200 block"
                    >
                      <span className="font-medium">{contact.label}:</span> {contact.value}
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Legal Links */}
              <div className="pt-2 border-t border-[#F8F1E6]/10">
                <p className="text-xs font-medium mb-2">Legal</p>
                <div className="space-y-1">
                  {legalLinks.map((link) => (
                    <div key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs opacity-80 hover:opacity-100 hover:text-[#F8F1E6] transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="font-medium text-base mb-4 border-b border-[#F8F1E6]/20 pb-2">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-xs opacity-80 hover:opacity-100 hover:text-[#F8F1E6] transition-all duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-[#F8F1E6]/20 pt-6">
          <div className="text-center">
            <p className="text-xs opacity-60">
              © 2024 LD Counsels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 