'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { EnquiryModal } from './Modals';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      label: 'Properties',
      href: '/properties',
      active: pathname === '/properties' || pathname?.startsWith('/properties'),
    },
    {
      label: 'Interior',
      href: '/interior',
      active: pathname?.startsWith('/interior'),
    },
    {
      label: 'Construction',
      href: '/construction',
      active: pathname?.startsWith('/construction'),
    },
    {
      label: 'Builders',
      href: '/builder',
      active: pathname?.startsWith('/builder'),
    },
    {
      label: 'Sell',
      href: '/sell',
      active: pathname?.startsWith('/sell'),
    },
    {
      label: 'About',
      href: '/about',
      active: pathname === '/about',
    },
    {
      label: 'Reviews',
      href: '/reviews',
      active: pathname === '/reviews',
    },
    {
      label: 'Blogs',
      href: '/blogs',
      active: pathname === '/blogs' || pathname?.startsWith('/blogs'),
    },
    {
      label: 'Contact',
      href: '/contact',
      active: pathname === '/contact',
    },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border-subtle transition-all duration-300 ${
          isScrolled ? 'shadow-md py-0' : 'shadow-xs py-0.5'
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 h-16 sm:h-18 max-w-7xl mx-auto">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-95 transition-opacity shrink-0 py-1"
          >
            <img
              alt="Realic Property Consultant - Real Living Better Living"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain"
              src="/images/header-logo.png"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-7 h-full">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`h-full flex items-center transition-colors duration-200 text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap ${
                  item.active
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-neutral-600 hover:text-black font-medium'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons: Phone & Enquire Now */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Phone Call Button */}
            <a
              href="tel:+919102599969"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:bg-neutral-100 hover:border-neutral-300 text-neutral-900 text-xs font-bold transition-all shadow-2xs group"
              title="Call Realic Advisory Desk"
            >
              <span className="material-symbols-outlined text-[17px] text-black group-hover:scale-110 transition-transform">
                call
              </span>
              <span className="tracking-tight font-montserrat">+91 91025 99969</span>
            </a>

            {/* Enquire Now Popup Trigger Button */}
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="px-4 sm:px-5 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-xs hover:shadow transition-all cursor-pointer active:scale-95 border border-neutral-900"
            >
              Enquire Now
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-border-subtle px-4 pt-3 pb-5 space-y-1 shadow-xl animate-in slide-in-from-top-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                  item.active
                    ? 'text-black bg-neutral-100 font-bold'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-neutral-200 flex flex-col gap-2">
              <a
                href="tel:+919102599969"
                className="w-full py-2.5 px-3 text-center text-xs font-bold text-neutral-800 bg-neutral-100 rounded-xl transition-colors flex items-center justify-center gap-2 border border-neutral-200"
              >
                <span className="material-symbols-outlined text-base text-black">call</span>
                <span>+91 91025 99969</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsEnquiryOpen(true);
                }}
                className="w-full py-2.5 px-3 text-center text-xs font-bold text-white bg-black hover:bg-neutral-900 rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enquiry Popup Modal Form */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
};
