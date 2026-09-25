'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000d22] text-neutral-300 font-sans border-t border-neutral-800 mt-auto pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/80">
          {/* Column 1: Brand & Credibility (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/header-logo.png"
                alt="Realic Property Consultant Logo"
                className="h-11 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Realic Property Consultant is an institutional advisory partner specializing in curated luxury residences, sky penthouses, and strategic prime commercial assets with 100% RERA compliance and clear title vetting.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <span className="material-symbols-outlined text-amber-400 text-sm">verified_user</span>
                <span className="font-semibold">Registered Institutional Property Advisors</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="material-symbols-outlined text-amber-400 text-sm">schedule</span>
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Column 2: Marketplace Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-montserrat">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/properties" className="hover:text-amber-400 transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Apartment" className="hover:text-amber-400 transition-colors">
                  Luxury Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Penthouse" className="hover:text-amber-400 transition-colors">
                  Sky Penthouses
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Villa" className="hover:text-amber-400 transition-colors">
                  Exclusive Villas
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-amber-400 transition-colors">
                  List Your Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Prime Corridors */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-montserrat">
              Key Corridors
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/properties?city=Bangalore" className="hover:text-amber-400 transition-colors">
                  Bangalore (Whitefield & Indiranagar)
                </Link>
              </li>
              <li>
                <Link href="/properties?city=Patna" className="hover:text-amber-400 transition-colors">
                  Patna (AIIMS-Digha Corridor)
                </Link>
              </li>
              <li>
                <Link href="/properties?city=Patna" className="hover:text-amber-400 transition-colors">
                  Ganga Marine Drive Frontage
                </Link>
              </li>
              <li>
                <Link href="/properties?city=Patna" className="hover:text-amber-400 transition-colors">
                  Danapur-Khagaul Corridor
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-amber-400 transition-colors">
                  Corridor Appreciation Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Advisory Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-montserrat">
              Direct Advisory Desk
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <a
                href="tel:+918045678900"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors text-white font-semibold"
              >
                <span className="material-symbols-outlined text-amber-400 text-sm">call</span>
                <span>+91 80 4567 8900</span>
              </a>

              <a
                href="mailto:support@realic.in"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <span className="material-symbols-outlined text-amber-400 text-sm">mail</span>
                <span>support@realic.in</span>
              </a>

              <p className="flex items-start gap-2 pt-1 leading-relaxed">
                <span className="material-symbols-outlined text-amber-400 text-sm shrink-0 mt-0.5">
                  location_on
                </span>
                <span>Level 4, Prestige Tech Park, Marathahalli ORR, Bangalore 560103</span>
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors border border-neutral-700"
                >
                  <span>Book Consultation</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Realic Property Consultant Pvt. Ltd.</span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span>All rights reserved. Real Living, Better Living.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-neutral-400">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Contact
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-neutral-400 ml-2"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
