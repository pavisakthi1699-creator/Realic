import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LEADERSHIP } from '@/data/team';

export const metadata: Metadata = {
  title: 'About Us | Institutional Advisory & Luxury Real Estate',
  description:
    'Discover the Realic story. Founded to bring private banking precision, legal title guarantee, and boutique white-glove advisory to luxury properties across Patna and Bangalore.',
  openGraph: {
    title: 'About Realic Property Consultant | Institutional Real Estate Advisory',
    description:
      'Private banking precision meets local real estate intelligence. Meet our senior counsel and learn our 3 pillars of diligence.',
    url: 'https://realicproperty.com/about',
  },
};

export default function AboutPage() {
  const milestones = [
    { value: '₹1,200+ Cr', label: 'Cumulative Portfolio Transacted' },
    { value: '480+', label: 'Luxury Residences Handed Over' },
    { value: '99.4%', label: 'Client Trust & Recommendation Rate' },
    { value: '0', label: 'Title Disputes In Company History' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary-container block mb-3">
              Institutional Heritage & Advisory
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-montserrat tracking-tight leading-tight">
              Boutique Expertise. <br />
              <span className="text-secondary-container">Mathematical Rigor.</span>
            </h1>
            <p className="text-primary-fixed-dim text-base md:text-lg mt-6 leading-relaxed">
              Realic Property Consultant was founded on the fundamental principle that acquiring or disposing of high-stakes real estate demands the fiduciary standards of a private bank and the forensic precision of a premier law firm.
            </p>
          </div>
        </div>

        {/* Ambient decorative blur */}
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-surface-pure border-b border-border-subtle px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {milestones.map((m) => (
            <div key={m.label} className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-montserrat text-primary">
                {m.value}
              </div>
              <p className="text-xs text-text-medium-emphasis mt-1 font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Realic Story */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              The Realic Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-primary tracking-tight">
              Elevating Real Estate Transactions Above Market Ambiguity
            </h2>
            <p className="text-sm md:text-base text-text-medium-emphasis leading-relaxed">
              For decades, high-net-worth individuals, tech executives, and diaspora families navigating property acquisitions across India have wrestled with inconsistent market pricing, incomplete title searches, and fragmented brokerage representations.
            </p>
            <p className="text-sm md:text-base text-text-medium-emphasis leading-relaxed">
              Realic was conceived as the antidote: an integrated consultancy where every single property is subject to our proprietary <strong>Three-Tier Legal Audit</strong> before being offered to clients. We pair this with institutional escrow protocols and dedicated senior advisors.
            </p>
            <div className="pt-2">
              <Link
                href="/properties"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-secondary text-white text-xs font-bold rounded-xl hover:bg-secondary/90 transition-colors shadow-sm"
              >
                Browse Our Curated Estates
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-ambient border border-border-subtle">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Realic Property Consultant Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-surface-pure/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg">
                <p className="text-xs font-bold text-primary">Uncompromising Quality & Standards</p>
                <p className="text-[11px] text-text-medium-emphasis mt-0.5">
                  Every transaction backed by RERA regulatory compliance and independent title certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="py-16 bg-surface-container-low border-y border-border-subtle px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Our Operating Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-primary tracking-tight mt-1">
              Three Pillars of Distinction
            </h2>
            <p className="text-text-medium-emphasis text-sm mt-2">
              How our practice delivers an experience fundamentally different from typical brokerages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-pure p-8 rounded-3xl border border-border-subtle shadow-ambient space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-primary">Boutique Expertise</h3>
              <p className="text-xs sm:text-sm text-text-medium-emphasis leading-relaxed">
                You work exclusively with veteran partners boasting 10+ years in private portfolio advisory. No passing your requirements down to junior tele-callers.
              </p>
            </div>

            <div className="bg-surface-pure p-8 rounded-3xl border border-border-subtle shadow-ambient space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-primary">Data-Driven Insights</h3>
              <p className="text-xs sm:text-sm text-text-medium-emphasis leading-relaxed">
                Every property recommendation is substantiated by registered land registry comps, future infrastructure capital expenditure, and projected appreciation vectors.
              </p>
            </div>

            <div className="bg-surface-pure p-8 rounded-3xl border border-border-subtle shadow-ambient space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-primary">White-Glove Service</h3>
              <p className="text-xs sm:text-sm text-text-medium-emphasis leading-relaxed">
                From luxury airport transfers to remote POA execution for NRI clients, our concierge attends to every nuance of your acquisition journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Senior Counsel */}
      <section id="leadership" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Executive Stewardship
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-primary tracking-tight mt-1">
            Leadership & Senior Counsel
          </h2>
          <p className="text-text-medium-emphasis text-sm mt-2">
            Meet the senior fiduciaries guiding Realic acquisitions across key corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERSHIP.map((leader) => (
            <div
              key={leader.id}
              className="bg-surface-pure rounded-2xl border border-border-subtle overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all flex flex-col group"
            >
              <div className="h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base font-bold text-primary font-montserrat">{leader.name}</h3>
                  <p className="text-xs text-secondary font-semibold mt-0.5">{leader.role}</p>
                  <p className="text-xs text-text-medium-emphasis leading-relaxed mt-2.5">
                    {leader.bio}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-medium-emphasis font-medium">
                  <span>{leader.specialty}</span>
                  <span className="font-bold text-primary">{leader.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
