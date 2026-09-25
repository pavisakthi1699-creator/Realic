'use client';

import React, { useState } from 'react';
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
      <section className="bg-slate-50 text-slate-900 py-16 md:py-24 px-4 md:px-8 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-black text-xs font-bold mb-4 border border-neutral-200">
              <span className="material-symbols-outlined text-sm">flash_on</span>
              Zero Commission • No Public Showings • 24hr Offer
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight leading-tight text-black">
              Sell Your Property, <span className="text-black underline decoration-neutral-300">Seamlessly.</span>
            </h1>

            <p className="text-neutral-600 text-base md:text-lg mt-4 leading-relaxed">
              Skip traditional broker delays, intrusive showings, and closing uncertainty. Receive a data-backed valuation and guaranteed liquidity on your timeline.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Value Pillars from Stitch Template */}
      <section className="py-12 bg-white border-b border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">visibility_off</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-black font-montserrat">No Showings</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                No cleaning, staging, or having dozens of strangers walk through your private family home on weekends.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">calendar_month</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-black font-montserrat">
                Pick Your Closing Date
              </h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Close in as fast as 14 days or take up to 90 days. Align settlement seamlessly with your next home purchase.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-black font-montserrat">Certainty of Sale</h3>
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
                className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">calculate</span>
                Calculate Data-Backed Valuation
              </button>
            </form>
          </div>

          {/* Valuation Output Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 text-black p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-black">
                Market Valuation Range
              </span>
              <div className="mt-2 mb-4">
                {estimatedValue ? (
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-montserrat text-black">
                      ₹{(estimatedValue / 10000000).toFixed(2)} Cr
                    </div>
                    <span className="text-xs text-neutral-500 block mt-1">
                      Estimated Range: ₹{((estimatedValue * 0.95) / 10000000).toFixed(2)} Cr – ₹
                      {((estimatedValue * 1.08) / 10000000).toFixed(2)} Cr
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold text-neutral-800 font-montserrat">
                      Configure details to estimate
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Fill out your property specifications on the left to receive an immediate benchmark.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-black">check</span>
                  Includes recent land index registry comps
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-black">check</span>
                  Zero obligations or mandatory listing contracts
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-black">check</span>
                  Direct escrow liquidation available
                </div>
              </div>

              <button
                onClick={() => {
                  const formEl = document.getElementById('seller-request-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors text-center block cursor-pointer"
              >
                Request Official Binding Offer &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Realic vs Traditional Agent */}
      <section className="py-16 bg-white border-y border-neutral-200 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              The Realic Advantage
            </span>
            <h2 className="text-3xl font-extrabold font-montserrat text-black mt-1">
              Realic Direct vs. Traditional Real Estate Broker
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Compare the certainty, timeline, and cost breakdown of selling your property.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="py-3 px-4 font-bold text-neutral-600">Feature</th>
                  <th className="py-3 px-4 font-bold text-black bg-neutral-100 rounded-t-xl">
                    Realic Private Sale
                  </th>
                  <th className="py-3 px-4 font-bold text-neutral-600">Traditional Broker</th>
                </tr>
              </thead>
              <tbody className="divide-y border-neutral-200">
                <tr>
                  <td className="py-4 px-4 font-semibold text-black">Time to Firm Offer</td>
                  <td className="py-4 px-4 font-bold text-black bg-neutral-50">
                    Within 24 Hours
                  </td>
                  <td className="py-4 px-4 text-neutral-600">45 to 120 Days (Average)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-black">Open Houses & Showings</td>
                  <td className="py-4 px-4 font-bold text-black bg-neutral-50">
                    0 Showings (1 Private Inspection)
                  </td>
                  <td className="py-4 px-4 text-neutral-600">15 – 30+ Disruptive Visits</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-black">Brokerage Commission</td>
                  <td className="py-4 px-4 font-bold text-black bg-neutral-50">
                    0% Commission
                  </td>
                  <td className="py-4 px-4 text-neutral-600">2% to 3% + GST</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-black">Closing Date Timeline</td>
                  <td className="py-4 px-4 font-bold text-black bg-neutral-50">
                    Chosen by Owner (14 to 90 days)
                  </td>
                  <td className="py-4 px-4 text-neutral-600">Dictated by Buyer Loan Approvals</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-black">Repair & Staging Cost</td>
                  <td className="py-4 px-4 font-bold text-black bg-neutral-50">
                    Sold In As-Is Condition
                  </td>
                  <td className="py-4 px-4 text-neutral-600">₹2 – ₹5 Lakhs in staging/painting</td>
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
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-black">check_circle</span>
              <h3 className="text-lg font-bold text-black">Application Received</h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto">
                Thank you, {fullName}. Our acquisitions team is conducting the preliminary registry title review. We will phone you at {phone} within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Rajesh Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 94310 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Desired Closing Timeline
                  </label>
                  <select
                    value={targetClosingDays}
                    onChange={(e) => setTargetClosingDays(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  >
                    <option>Expedited (Within 14 Days)</option>
                    <option>Standard (30 Days)</option>
                    <option>Flexible (60-90 Days)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Full Property Address & Landmarks
                </label>
                <textarea
                  value={fullAddress}
                  onChange={(e) => setFullAddress(e.target.value)}
                  placeholder="Street, Tower/Apartment number, Road, Patna or Bangalore..."
                  rows={3}
                  className="w-full p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none text-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer mt-2"
              >
                Submit Property for Cash Evaluation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold font-montserrat text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-neutral-600 mt-1">
              Everything you need to know about selling to Realic.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm text-black flex items-center justify-between hover:text-neutral-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-lg text-neutral-400">
                    {openFaq === idx ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
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
