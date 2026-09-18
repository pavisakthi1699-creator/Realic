'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InstantOfferModal, EnquiryModal } from './Modals';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isInstantOfferOpen, setIsInstantOfferOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Sell Property', href: '/sell' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'About Us', href: '/about' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isTransparent
            ? 'bg-gradient-to-b from-black/85 via-black/40 to-transparent border-b border-white/10 py-3 md:py-3.5'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-ambient border-b border-slate-200/80 py-2'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5'
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-8 max-w-[1440px] mx-auto">
          {/* Official Gold Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform active:scale-95 py-1"
          >
            <img
              src="/images/realic-logo.png"
              alt="Realic Property Consultant"
              width={190}
              height={56}
              style={{ height: '48px', width: 'auto', minHeight: '40px', display: 'block' }}
              className={`h-10 sm:h-12 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isTransparent ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]' : ''
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = pathname
                ? item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
                : false;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isTransparent
                      ? isActive
                        ? 'text-[#D4AF37] bg-white/15 backdrop-blur-md font-bold border border-[#D4AF37]/40 shadow-sm'
                        : 'text-white/90 hover:text-white hover:bg-white/15 font-medium'
                      : isActive
                      ? 'text-secondary bg-secondary/10 font-bold'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-100 font-semibold'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Actions: Demo Number & Enquiry Now Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Demo Phone Number */}
            <a
              href="tel:+919431098765"
              className={`hidden md:inline-flex items-center gap-2 px-3 py-2 text-xs lg:text-sm font-bold rounded-xl transition-colors ${
                isTransparent
                  ? 'text-white hover:text-[#D4AF37] hover:bg-white/10'
                  : 'text-primary hover:text-secondary hover:bg-surface-container-low'
              }`}
            >
              <span
                className={`material-symbols-outlined text-base ${
                  isTransparent ? 'text-[#D4AF37]' : 'text-secondary'
                }`}
              >
                call
              </span>
              <span>+91 94310 98765</span>
            </a>

            {/* Enquiry Now Button */}
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-xs hover:shadow-[0_2px_12px_rgba(212,175,55,0.35)] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              <span>Enquiry Now</span>
            </button>


            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
                isTransparent
                  ? 'text-white hover:bg-white/15'
                  : 'text-primary hover:bg-surface-container-low'
              }`}
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
          <div className="lg:hidden bg-surface-pure border-b border-border-subtle px-4 pt-3 pb-5 space-y-1.5 shadow-xl animate-in slide-in-from-top-2">
            <div className="pb-3 mb-2 border-b border-border-subtle flex items-center justify-between">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/images/realic-logo.png"
                  alt="Realic Logo"
                  style={{ height: '36px', width: 'auto' }}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-2 py-0.5 rounded">
                Realic Consultant
              </span>
            </div>
            {navLinks.map((item) => {
              const isActive = pathname
                ? item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
                : false;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-secondary bg-secondary/10 font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-border-subtle flex flex-col gap-2">
              <a
                href="tel:+919431098765"
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-bold text-primary bg-surface-container-low rounded-xl"
              >
                <span className="material-symbols-outlined text-secondary text-base">call</span>
                <span>Call Us: +91 94310 98765</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsEnquiryOpen(true);
                }}
                className="w-full py-2.5 px-3 text-center text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#B89628] rounded-xl shadow-sm"
              >
                Enquiry Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Global Modals */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      <InstantOfferModal
        isOpen={isInstantOfferOpen}
        onClose={() => setIsInstantOfferOpen(false)}
      />
    </>
  );
};
