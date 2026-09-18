import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white border-t border-slate-800">
      {/* Top Banner / Call to Action */}
      <div className="border-b border-white/10 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-montserrat text-white">
              Ready to discover your next residence?
            </h3>
            <p className="text-primary-fixed-dim text-sm mt-1">
              Connect with senior property counsel in Patna for private tours and verified title documentation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/properties"
              className="px-5 py-3 bg-secondary text-white font-semibold text-sm rounded-lg hover:bg-secondary/90 transition-colors shadow-sm"
            >
              Browse Curated Catalog
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block mb-2">
            <img
              src="/images/realic-logo.png"
              alt="Realic Property Consultant"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-primary-fixed-dim leading-relaxed max-w-sm">
            Setting the standard for modern real estate advisory. Curated luxury residences, verified RERA legal titles, and institutional-grade transaction certainty.
          </p>
          <div className="pt-2 flex items-center gap-3 text-primary-fixed-dim text-xs">
            <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm text-green-400">verified</span>
              100% Title Verified
            </span>
            <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm text-secondary-container">balance</span>
              RERA Compliant
            </span>
          </div>
        </div>

        {/* Col 2: Marketplace */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Properties</h4>
          <ul className="space-y-2 text-sm text-primary-fixed-dim">
            <li>
              <Link href="/properties?q=Digha" className="hover:text-white transition-colors">
                AIIMS-Digha Elevated Corridor
              </Link>
            </li>
            <li>
              <Link href="/properties?q=Atal" className="hover:text-white transition-colors">
                100-Ft Atal Path Expressway
              </Link>
            </li>
            <li>
              <Link href="/properties?q=Danapur" className="hover:text-white transition-colors">
                Danapur & AIIMS Enclaves
              </Link>
            </li>
            <li>
              <Link href="/properties?q=Marine" className="hover:text-white transition-colors">
                JP Ganga Path / Marine Drive
              </Link>
            </li>
            <li>
              <Link href="/sell" className="hover:text-white transition-colors">
                Sell Your Property
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Company */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Advisory</h4>
          <ul className="space-y-2 text-sm text-primary-fixed-dim">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                The Realic Story
              </Link>
            </li>
            <li>
              <Link href="/about#leadership" className="hover:text-white transition-colors">
                Senior Counsel & Leadership
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-white transition-colors">
                Verified Client Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Office Locations
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white transition-colors">
                Real Estate Insights & Blogs
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-secondary-container hover:text-white transition-colors font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
                Admin Management Portal
              </Link>
            </li>
            <li>
              <Link href="/shader" className="hover:text-white transition-colors text-xs text-secondary-container">
                Visual Experience Demo
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Regional Offices */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Offices</h4>
          <div className="text-xs text-primary-fixed-dim space-y-2">
            <div>
              <p className="font-semibold text-white">Patna Advisory Suite:</p>
              <p>Bailey Heights, Saguna More, Bailey Road, Patna 801503</p>
              <p className="text-secondary-container mt-0.5">+91 94310 98765</p>
            </div>
            <div className="pt-2">
              <p className="font-semibold text-white">Branch Office:</p>
              <p>Digha Link Road, Near Patliputra Junction, Patna 800012</p>
              <p className="text-secondary-container mt-0.5">+91 94312 34567</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-white/10 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-fixed-dim/70">
          <p>© {new Date().getFullYear()} Realic Property Consultant. All rights reserved. Equal Housing Opportunity.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Regulatory Disclosures
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
