// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// React Icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { 
  MdPhone, 
  MdEmail, 
  MdLocationOn, 
  MdAccessTime,
  MdChevronRight,
  MdCalendarToday,
  MdBuild,
  MdPeople,
  MdDescription
} from 'react-icons/md';
import { FaCar, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  const pathname = usePathname();

  // Quick links data
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Cars', href: '/cars' },
    { name: 'Electric Vehicles', href: '/cars/electric' },
    { name: 'SUVs', href: '/cars/suvs' },
    { name: 'Luxury Cars', href: '/cars/luxury' },
    { name: 'Sports Cars', href: '/cars/sports' },
  ];

  const servicesLinks = [
    { name: 'Test Drive', href: '/services/test-drive', icon: <MdCalendarToday className="w-4 h-4" /> },
    { name: 'Financing', href: '/services/financing', icon: <MdDescription className="w-4 h-4" /> },
    { name: 'Maintenance', href: '/services/maintenance', icon: <MdBuild className="w-4 h-4" /> },
    { name: 'Trade-in', href: '/services/trade-in', icon: <MdPeople className="w-4 h-4" /> },
    { name: 'Warranty', href: '/services/warranty', icon: <FaShieldAlt className="w-4 h-4" /> },
  ];

  const contactInfo = [
    { icon: <MdPhone className="w-5 h-5" />, label: 'Phone', value: '+880 1234-567890', link: 'tel:+8801234567890' },
    { icon: <MdEmail className="w-5 h-5" />, label: 'Email', value: 'info@bangladeshauto.com', link: 'mailto:info@bangladeshauto.com' },
    { icon: <MdLocationOn className="w-5 h-5" />, label: 'Address', value: 'House 1, Road 2, Sector 3, Uttara, Dhaka-1230', link: null },
    { icon: <MdAccessTime className="w-5 h-5" />, label: 'Business Hours', value: 'Sat - Thu: 9:00 AM - 8:00 PM', link: null },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook className="w-5 h-5" />, href: 'https://facebook.com', color: 'hover:bg-[#1877f2]' },
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, href: 'https://twitter.com', color: 'hover:bg-[#1da1f2]' },
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, href: 'https://instagram.com', color: 'hover:bg-[#e4405f]' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: 'https://linkedin.com', color: 'hover:bg-[#0a66c2]' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-8">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative w-48 h-24">
                <Image
                  src="/img/logo.png"
                  alt="Bangladesh Auto Industries Ltd."
                  fill
                  loading="eager"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bangladesh Auto Industries Ltd. is the leading automobile manufacturer and distributor in Bangladesh, 
              committed to delivering excellence in mobility solutions since 1985.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      flex items-center gap-2 text-gray-400 hover:text-red-500 transition-all duration-200 group
                      ${pathname === link.href ? 'text-red-500' : ''}
                    `}
                  >
                    <MdChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors group"
                  >
                    <span className="text-red-500/60 group-hover:text-red-500">
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-500 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="text-red-500 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-gray-400 hover:text-red-500 transition-colors text-sm block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm block">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8 lg:my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Bangladesh Auto Industries Ltd. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2 rounded-full bg-slate-800 text-gray-400 transition-all duration-200
                  ${social.color} hover:text-white hover:scale-110
                `}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span className="flex items-center gap-1">
              <FaShieldAlt className="w-3.5 h-3.5" />
              Secure Payment
            </span>
            <span className="w-px h-3 bg-slate-700"></span>
            <span className="flex items-center gap-1">
              <FaCar className="w-3.5 h-3.5" />
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;