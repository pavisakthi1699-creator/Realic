'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function SellClient() {
  // Valuation Tool State
  const [city, setCity] = useState('Patna');
  const [locality, setLocality] = useState('Bailey Road');
  const [propertyType, setPropertyType] = useState('Penthouse');
  const [areaSqft, setAreaSqft] = useState(2400);
  const [bedrooms, setBedrooms] = useState(3);
  const [propertyAge, setPropertyAge] = useState('0-3 Years (New)');
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  // Seller Lead Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [targetClosingDays, setTargetClosingDays] = useState('30 Days');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const calculateValuation = (e: React.FormEvent) => {
    e.preventDefault();
    // Benchmark pricing logic based on city & type
    let ratePerSqft = city === 'Patna' ? 8500 : 12500;
    if (propertyType === 'Penthouse') ratePerSqft *= 1.25;
    if (propertyType === 'Villa') ratePerSqft *= 1.35;
    if (propertyAge.includes('New')) ratePerSqft *= 1.1;

    const baseVal = areaSqft * ratePerSqft;
    setEstimatedValue(Math.round(baseVal));
    toast.success('Instant data-backed valuation estimate calculated!');
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      toast.error('Please provide your name and phone number');
      return;
    }
    setFormSubmitted(true);
    toast.success('Property evaluation dossier requested! An acquisition manager will reach out within 24 hours.');
  };

  const faqs = [
    {
      q: 'How does Realic Instant Cash Offer work?',
      a: 'We evaluate your property using localized transaction registry data, recent corridor benchmarks, and architectural specifications. Within 24 hours, our acquisitions desk issues a firm purchase proposal with zero financing contingencies.',
    },
    {
      q: 'Do I need to stage my home or host open houses?',
      a: 'Never. Unlike traditional brokers who require weekend showings and intrusive walkthroughs, Realic purchases directly or matches with vetted institutional family offices with a single discrete inspection.',
    },
    {
      q: 'Can I choose my own closing date?',
      a: 'Yes. You retain 100% control over the closing date, anywhere from an expedited 14-day settlement to a flexible 90-day transition timeline.',
    },
    {
      q: 'What fees or commissions does Realic charge sellers?',
      a: 'When selling directly to Realic or our private investment desk, you pay 0% traditional broker commission and zero staging overhead.',
    },
    {
      q: 'How are titles verified during the sale?',
      a: 'Our in-house legal counsel handles the entire 30-year title search, municipal tax clearance, and encumbrance certificate retrieval at zero hassle to you.',
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-secondary-container text-xs font-bold mb-4 border border-white/10">
              <span className="material-symbols-outlined text-sm">flash_on</span>
              Zero Commission • No Public Showings • 24hr Offer
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight leading-tight">
              Sell Your Property, <span className="text-secondary-container">Seamlessly.</span>
            </h1>

            <p className="text-primary-fixed-dim text-base md:text-lg mt-4 leading-relaxed">
              Skip traditional broker delays, intrusive showings, and closing uncertainty. Receive a data-backed valuation and guaranteed liquidity on your timeline.
            </p>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* 3 Value Pillars from Stitch Template */}
      <section className="py-12 bg-surface-pure border-b border-border-subtle px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">visibility_off</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-primary font-montserrat">No Showings</h3>
              <p className="text-xs text-text-medium-emphasis mt-1 leading-relaxed">
                No cleaning, staging, or having dozens of strangers walk through your private family home on weekends.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">calendar_month</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-primary font-montserrat">
                Pick Your Closing Date
              </h3>
              <p className="text-xs text-text-medium-emphasis mt-1 leading-relaxed">
                Close in as fast as 14 days or take up to 90 days. Align settlement seamlessly with your next home purchase.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-primary font-montserrat">Certainty of Sale</h3>
              <p className="text-xs text-text-medium-emphasis mt-1 leading-relaxed">
                Backed by institutional escrow and verified capital reserves. Zero risk of buyer loan cancellation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Valuation Estimator Tool */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-surface-pure p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-ambient">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Algorithmic Pricing Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1 mb-2">
              Estimate Your Property Market Value
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mb-8">
              Based on historical land registries and real transactions across Patna and Bangalore.
            </p>

            <form onSubmit={calculateValuation} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Select Metro / City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option value="Patna">Patna, Bihar</option>
                    <option value="Bangalore">Bangalore, Karnataka</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Neighborhood / Locality
                  </label>
                  <input
                    type="text"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    placeholder="e.g. Bailey Road, Whitefield, Boring Rd"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>Penthouse</option>
                    <option>Villa</option>
                    <option>Luxury Apartment</option>
                    <option>Independent Bungalow</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Super Built-up Area (Sq Ft)
                  </label>
                  <input
                    type="number"
                    value={areaSqft}
                    onChange={(e) => setAreaSqft(Number(e.target.value))}
                    min={500}
                    max={20000}
                    step={50}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Bedrooms (BHK)
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option value={2}>2 BHK</option>
                    <option value={3}>3 BHK</option>
                    <option value={4}>4 BHK</option>
                    <option value={5}>5+ BHK</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-on-surface-variant block mb-1">
                  Property Age & Condition
                </label>
                <select
                  value={propertyAge}
                  onChange={(e) => setPropertyAge(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                >
                  <option>0-3 Years (Brand New / Pristine)</option>
                  <option>3-8 Years (Well Maintained)</option>
                  <option>8-15 Years (Requires Cosmetic Updates)</option>
                  <option>15+ Years (Ancestral / Renovation Required)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-secondary hover:bg-secondary/90 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">calculate</span>
                Calculate Data-Backed Valuation
              </button>
            </form>
          </div>

          {/* Valuation Output Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-ambient-lg">
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-container">
                Market Valuation Range
              </span>
              <div className="mt-2 mb-4">
                {estimatedValue ? (
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-montserrat text-white">
                      ₹{(estimatedValue / 10000000).toFixed(2)} Cr
                    </div>
                    <span className="text-xs text-primary-fixed-dim block mt-1">
                      Estimated Range: ₹{((estimatedValue * 0.95) / 10000000).toFixed(2)} Cr – ₹
                      {((estimatedValue * 1.08) / 10000000).toFixed(2)} Cr
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold text-white/80 font-montserrat">
                      Configure details to estimate
                    </div>
                    <p className="text-xs text-primary-fixed-dim mt-1">
                      Fill out your property specifications on the left to receive an immediate benchmark.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-primary-fixed-dim">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-green-400">check</span>
                  Includes recent land index registry comps
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-green-400">check</span>
                  Zero obligations or mandatory listing contracts
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-green-400">check</span>
                  Direct escrow liquidation available
                </div>
              </div>

              <button
                onClick={() => {
                  const formEl = document.getElementById('seller-request-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 py-3 px-4 bg-accent-orange hover:bg-[#d44d1c] text-white font-bold text-xs rounded-xl shadow transition-colors text-center block"
              >
                Request Official Binding Offer &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Realic vs Traditional Agent */}
      <section className="py-16 bg-surface-pure border-y border-border-subtle px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              The Realic Advantage
            </span>
            <h2 className="text-3xl font-extrabold font-montserrat text-primary mt-1">
              Realic Direct vs. Traditional Real Estate Broker
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mt-1">
              Compare the certainty, timeline, and cost breakdown of selling your property.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-border-subtle">
                  <th className="py-3 px-4 font-bold text-text-medium-emphasis">Feature</th>
                  <th className="py-3 px-4 font-bold text-secondary bg-secondary/5 rounded-t-xl">
                    Realic Private Sale
                  </th>
                  <th className="py-3 px-4 font-bold text-on-surface-variant">Traditional Broker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr>
                  <td className="py-4 px-4 font-semibold text-primary">Time to Firm Offer</td>
                  <td className="py-4 px-4 font-bold text-green-700 bg-secondary/5">
                    Within 24 Hours
                  </td>
                  <td className="py-4 px-4 text-text-medium-emphasis">45 to 120 Days (Average)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-primary">Open Houses & Showings</td>
                  <td className="py-4 px-4 font-bold text-green-700 bg-secondary/5">
                    0 Showings (1 Private Inspection)
                  </td>
                  <td className="py-4 px-4 text-text-medium-emphasis">15 – 30+ Disruptive Visits</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-primary">Brokerage Commission</td>
                  <td className="py-4 px-4 font-bold text-green-700 bg-secondary/5">
                    0% Commission
                  </td>
                  <td className="py-4 px-4 text-text-medium-emphasis">2% to 3% + GST</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-primary">Closing Date Timeline</td>
                  <td className="py-4 px-4 font-bold text-green-700 bg-secondary/5">
                    Chosen by Owner (14 to 90 days)
                  </td>
                  <td className="py-4 px-4 text-text-medium-emphasis">Dictated by Buyer Loan Approvals</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-primary">Repair & Staging Cost</td>
                  <td className="py-4 px-4 font-bold text-green-700 bg-secondary/5">
                    Sold In As-Is Condition
                  </td>
                  <td className="py-4 px-4 text-text-medium-emphasis">₹2 – ₹5 Lakhs in staging/painting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Official Binding Offer Submission Form */}
      <section id="seller-request-form" className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-surface-pure p-8 sm:p-12 rounded-3xl border border-border-subtle shadow-ambient">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary">
              Submit Your Property for Instant Cash Review
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mt-2">
              Our acquisitions desk will review your submission and contact you within 24 hours with a formal proposal.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-green-600">check_circle</span>
              <h3 className="text-lg font-bold text-green-800">Application Received</h3>
              <p className="text-xs text-green-700 max-w-md mx-auto">
                Thank you, {fullName}. Our acquisitions team is conducting the preliminary registry title review. We will phone you at {phone} within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Rajesh Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none h-11"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 94310 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none h-11"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Desired Closing Timeline
                  </label>
                  <select
                    value={targetClosingDays}
                    onChange={(e) => setTargetClosingDays(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none h-11"
                  >
                    <option>Expedited (Within 14 Days)</option>
                    <option>Standard (30 Days)</option>
                    <option>Flexible (60-90 Days)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-on-surface-variant block mb-1">
                  Full Property Address & Landmarks
                </label>
                <textarea
                  value={fullAddress}
                  onChange={(e) => setFullAddress(e.target.value)}
                  placeholder="Street, Tower/Apartment number, Road, Patna or Bangalore..."
                  rows={3}
                  className="w-full p-3 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent-orange hover:bg-[#d44d1c] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer mt-2"
              >
                Submit Property for Cash Evaluation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-surface-container-low border-t border-border-subtle px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold font-montserrat text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-text-medium-emphasis mt-1">
              Everything you need to know about selling to Realic.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-pure rounded-2xl border border-border-subtle overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm text-primary flex items-center justify-between hover:text-secondary transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-lg text-outline">
                    {openFaq === idx ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-text-medium-emphasis leading-relaxed border-t border-border-subtle/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
