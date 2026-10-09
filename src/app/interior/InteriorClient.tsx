'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function InteriorClient() {
  // Estimator Form State
  const [propertyType, setPropertyType] = useState('3 BHK Luxury');
  const [scope, setScope] = useState('Full Turnkey Interiors');
  const [styleTheme, setStyleTheme] = useState('Contemporary Italian');
  const [materialTier, setMaterialTier] = useState('Imperial German & Quartz');
  const [areaSqft, setAreaSqft] = useState(1850);
  const [estimatedBudget, setEstimatedBudget] = useState<{ min: number; max: number } | null>(null);

  // Consultation Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Patna');
  const [projectLocation, setProjectLocation] = useState('');
  const [possessionTimeline, setPossessionTimeline] = useState('Immediate / Ready to start');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Gallery Filter State
  const [activeTab, setActiveTab] = useState<'All' | 'Living' | 'Kitchen' | 'Master' | 'Penthouse'>('All');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculate dynamic budget
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    let baseRate = 1200; // per sqft base for 2bhk
    if (propertyType.includes('3 BHK')) baseRate = 1450;
    if (propertyType.includes('4 BHK')) baseRate = 1750;
    if (propertyType.includes('Penthouse')) baseRate = 2200;
    if (propertyType.includes('Villa')) baseRate = 2500;

    // Scope multiplier
    let scopeMult = 1.0;
    if (scope === 'Modular Kitchen & Wardrobes') scopeMult = 0.55;
    if (scope === 'Living & Entertainment Lounge') scopeMult = 0.45;
    if (scope === 'Master Suite Sanctuary') scopeMult = 0.4;

    // Material tier multiplier
    let tierMult = 1.0;
    if (materialTier.includes('Imperial')) tierMult = 1.35;
    if (materialTier.includes('Sovereign')) tierMult = 1.75;

    const baseCost = areaSqft * baseRate * scopeMult * tierMult;
    const minVal = Math.round((baseCost * 0.92) / 100000) * 100000;
    const maxVal = Math.round((baseCost * 1.1) / 100000) * 100000;

    setEstimatedBudget({ min: minVal, max: maxVal });
    toast.success('Interior estimate calculated successfully!');
  };

  // Submit Consultation Form
  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      toast.error('Please enter your full name and phone number.');
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Interior Design',
          name: fullName,
          phone,
          email,
          propertyTitle: `${propertyType} • ${scope} in ${city}`,
          notes: `Location: ${projectLocation} | Timeline: ${possessionTimeline} | Style: ${styleTheme} | Tier: ${materialTier} | Notes: ${additionalNotes}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        toast.success('Design consultation booked! Our Senior Architect will contact you within 24 hours.');
      } else {
        toast.error(data.error || 'Failed to submit inquiry.');
      }
    } catch {
      toast.error('Network error submitting your inquiry.');
    } finally {
      setSubmitting(false);
    }
  };

  // Interior Portfolio Items
  const portfolioItems = [
    {
      id: 'living-1',
      category: 'Living',
      title: 'Venus Capital Heights Grand Living & Dining Suite',
      location: 'Bailey Road Corridor, Patna',
      image: '/images/projects/venus-capital-heights/master-living-dining-suite.jpg',
      specs: 'Italian Statuario Marble • Double-Height Vistas • Recessed Linear Diffusers',
    },
    {
      id: 'kitchen-1',
      category: 'Kitchen',
      title: 'Durga Lifestyle Presidential Living & Dining',
      location: '100-Ft Atal Path Expressway, Patna',
      image: '/images/projects/durga-lifestyle/living-dining-4bhk.jpg',
      specs: 'Seamless Open Modular Kitchenette • Quartz Countertops • Fluted Wood Paneling',
    },
    {
      id: 'master-1',
      category: 'Master',
      title: 'Satvika Rajpati Enclave Luxury Master Suite',
      location: 'Danapur-Mithila Colony, Patna',
      image: '/images/projects/satvika-rajpati-enclave/luxury-master-bedroom.jpg',
      specs: 'Smoked Oak Veneer • King Suite Accent Wall • Acoustic Glazing',
    },
    {
      id: 'penthouse-1',
      category: 'Penthouse',
      title: 'Winsome Hari Pearlz Rooftop Sky Lounge & Bar',
      location: 'JP Ganga Marine Drive, Patna',
      image: '/images/projects/winsome-hari-pearlz/rooftop-sky-lounge.jpg',
      specs: 'Ganga River Horizons • Weather-Proof Decking • Custom Banquette Lounge',
    },
    {
      id: 'living-2',
      category: 'Living',
      title: 'Winsome Elite Royal Living & Dining Salon',
      location: 'Danapur Station Road, Patna',
      image: '/images/projects/winsome-elite/living-dining-lounge.jpg',
      specs: 'Premium Vitrified Tiles • Grand French Windows • Concealed Ambient LED',
    },
    {
      id: 'kitchen-2',
      category: 'Kitchen',
      title: 'Winsome Icon Executive Dining & Banquet Salon',
      location: 'AIIMS-Digha Elevated Corridor, Patna',
      image: '/images/projects/winsome-icon/executive-dining-salon.jpg',
      specs: 'Bespoke 10-Seater Dining • Motorized Blinds • Acoustic Paneling',
    },
  ];

  const filteredPortfolio =
    activeTab === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  const faqs = [
    {
      q: 'How does the Realic 45-Day Handover Guarantee work?',
      a: 'Once the 3D blueprints and material selections are signed off, our factory pre-engineers all modular joinery and cabinetry with German CNC machinery. On-site installation takes only 14-20 days. If we exceed the promised 45-day handover date, Realic pays you ₹5,000 per day in rent compensation.',
    },
    {
      q: 'Do you work with custom designs or only pre-set packages?',
      a: 'Every single Realic interior project is 100% custom-tailored to the client’s lifestyle, spatial architecture, and Vastu/aesthetic preferences. We offer turnkey execution covering false ceiling, electrical rewiring, Italian marble polishing, custom millwork, smart automation, and curated soft furnishings.',
    },
    {
      q: 'What is covered under the Realic 10-Year Warranty?',
      a: 'We provide an institutional 10-Year Warranty certificate covering all factory cabinetry, anti-termite marine-grade ply, hinges, hydraulic lift-ups, sliding door mechanisms, and drawer runners sourced from Blum and Hafele.',
    },
    {
      q: 'Can I view a photorealistic 3D VR model before manufacturing begins?',
      a: 'Yes. Before a single sheet of wood is cut, you will experience an immersive 360° Virtual Reality walkthrough of your home showing exact colors, textures, lighting temperatures, and furniture dimensions.',
    },
    {
      q: 'How are payments structured throughout the interior project?',
      a: 'We use a milestone escrow schedule: 10% on design confirmation & VR approval, 40% on factory production commencement, 40% upon material dispatch to site, and the final 10% only after your thorough 154-point quality inspection and satisfactory handover.',
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="bg-slate-50 text-slate-900 py-16 md:py-24 px-4 md:px-8 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-black text-xs font-bold border border-neutral-200">
                <span className="material-symbols-outlined text-sm text-black">architecture</span>
                Turnkey Luxury Interior Architecture • 45-Day Delivery Guarantee
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-montserrat tracking-tight leading-tight text-black">
                Bespoke Interiors for <span className="underline decoration-neutral-300">Modern Living.</span>
              </h1>

              <p className="text-neutral-600 text-base md:text-lg max-w-xl leading-relaxed">
                Elevate your luxury apartment, penthouse, or villa with institutional design precision. From photorealistic 3D VR walkthroughs to precision German cabinetry and Italian marble curation.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('interior-estimator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">calculate</span>
                  Calculate Interior Budget
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('consultation-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm rounded-xl border border-neutral-300 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  Book 3D Design Session
                </button>
              </div>

              {/* Metrics Bar */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">120+</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Turnkey Residences Delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">45 Days</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Guaranteed Handover</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">10 Years</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Institutional Warranty</div>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <img
                  src="/images/projects/durga-lifestyle/living-dining-4bhk.jpg"
                  alt="Durga Lifestyle Luxury Presidential Interior"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-wider self-start mb-2">
                    Turnkey Handover: Atal Path
                  </span>
                  <p className="text-sm font-bold font-montserrat">Durga Lifestyle Presidential Salon Fit-Out</p>
                  <p className="text-xs text-neutral-300">100-Ft Atal Path Expressway, Patna • Delivered in 45 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-12 bg-white border-b border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">timer</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">45-Day Handover</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Factory-built CNC precision avoids on-site dust. Delay compensation guaranteed in writing.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">10-Year Warranty</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Institutional warranty certificate covering all modular joinery, runners, and anti-termite ply.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">view_in_ar</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">3D VR Walkthrough</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Experience full photorealistic 360° virtual reality blueprints before production begins.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">receipt_long</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">Zero Cost Surprises</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Transparent itemized bill of quantities with fixed pricing and zero mid-work escalation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Interior Budget & Style Estimator */}
      <section id="interior-estimator" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Estimator Configuration */}
          <div className="lg:col-span-7 bg-surface-pure p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-ambient">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Algorithmic Fit-Out Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1 mb-2">
              Configure Your Turnkey Interior Estimate
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mb-8">
              Select your residence scale, architectural styling, and hardware grade to forecast exact costs.
            </p>

            <form onSubmit={handleCalculate} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Residence Configuration
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>2 BHK Luxury Apartment</option>
                    <option>3 BHK Luxury</option>
                    <option>4 BHK Royal Residence</option>
                    <option>Sky Penthouse Duplex</option>
                    <option>Grand Independent Villa</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Total Super Built-up Area (Sq Ft)
                  </label>
                  <input
                    type="number"
                    value={areaSqft}
                    onChange={(e) => setAreaSqft(Number(e.target.value))}
                    min={800}
                    max={15000}
                    step={50}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Scope of Work
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>Full Turnkey Interiors</option>
                    <option>Modular Kitchen & Wardrobes</option>
                    <option>Living & Entertainment Lounge</option>
                    <option>Master Suite Sanctuary</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Design & Architectural Theme
                  </label>
                  <select
                    value={styleTheme}
                    onChange={(e) => setStyleTheme(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>Contemporary Italian</option>
                    <option>Warm Scandinavian Woodcraft</option>
                    <option>Neo-Classical Gilded Elegance</option>
                    <option>Modern Minimalist Luxury</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-on-surface-variant block mb-1">
                  Material & Hardware Specification
                </label>
                <select
                  value={materialTier}
                  onChange={(e) => setMaterialTier(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                >
                  <option>Executive Standard (Hafele soft-close, Century Ply, Royale Paint)</option>
                  <option>Imperial German & Quartz (Blum Austria, Silestone, Fluted glass)</option>
                  <option>Sovereign Italian Bespoke (Statuario Marble, Veneer millwork, Smart IoT)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">calculate</span>
                Calculate Dynamic Fit-Out Forecast
              </button>
            </form>
          </div>

          {/* Forecast Output Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 text-black p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-black">
                Estimated Turnkey Investment
              </span>

              <div className="mt-2 mb-4">
                {estimatedBudget ? (
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-montserrat text-black">
                      ₹{(estimatedBudget.min / 100000).toFixed(1)}L – ₹{(estimatedBudget.max / 100000).toFixed(1)}L
                    </div>
                    <span className="text-xs text-neutral-500 block mt-1">
                      Based on {areaSqft} sq.ft. • {propertyType} • {styleTheme}
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold text-neutral-800 font-montserrat">
                      Configure parameters above
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Select your apartment area and preferences to view real-time factory quotation benchmarks.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Handover Timeline:</span>
                  <span className="font-bold text-black">45 Calendar Days Guaranteed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Hardware Warranty:</span>
                  <span className="font-bold text-black">10 Years (Blum / Hafele Certified)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Pre-Manufacturing 3D VR:</span>
                  <span className="font-bold text-emerald-600">Included Complimentary</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Dedicated Site Engineer:</span>
                  <span className="font-bold text-black">Assigned Full-Time</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const formEl = document.getElementById('consultation-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors text-center block cursor-pointer"
              >
                Lock This Quote &amp; Book 3D Walkthrough &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Portfolio Showcase */}
      <section className="py-16 bg-white border-y border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Craftsmanship In Action
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black mt-1">
                Curated Interior Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Explore signature bespoke spaces delivered across Patna premier luxury residences and penthouses.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
              {(['All', 'Living', 'Kitchen', 'Master', 'Penthouse'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-black text-white shadow-xs'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {tab === 'All' ? 'All Spaces' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-black border border-white/50">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-black font-montserrat mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-2.5">
                    {item.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Stage Precision Execution Workflow */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Factory-Built Precision
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1">
            The Realic 5-Stage Interior Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-text-medium-emphasis mt-2">
            Engineered to remove chaos, eliminate dust on-site, and enforce German quality benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {[
            {
              step: '01',
              title: 'Lifestyle Audit',
              desc: 'Detailed spatial profiling, storage audit, and architectural laser measurement on-site.',
              icon: 'straighten',
            },
            {
              step: '02',
              title: '3D VR Blueprints',
              desc: 'Photorealistic VR walkthrough with interactive material and finish approvals.',
              icon: 'vrpano',
            },
            {
              step: '03',
              title: 'German CNC Millwork',
              desc: 'Precision laser cutting at our centralized climate-controlled modular plant.',
              icon: 'precision_manufacturing',
            },
            {
              step: '04',
              title: '14-Day Assembly',
              desc: 'Rapid on-site installation by certified master joiners with zero dust pollution.',
              icon: 'handyman',
            },
            {
              step: '05',
              title: '154-Point Handover',
              desc: 'Exhaustive acoustic and alignment audit, deep cleaning, and 10-Yr warranty delivery.',
              icon: 'workspace_premium',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-pure border border-border-subtle shadow-ambient relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-neutral-400 font-mono tracking-wider">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                </div>
                <h3 className="font-bold text-sm text-primary font-montserrat mb-2">{item.title}</h3>
                <p className="text-xs text-text-medium-emphasis leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand & Material Partners Marquee */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-6">
            Institutional Material &amp; Hardware Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
            {['BLUM AUSTRIA', 'HÄFELE GERMANY', 'SAINT-GOBAIN', 'CAESARSTONE', 'KOHLER', 'GROHE', 'ASIAN PAINTS ROYALE', 'GREENLAM'].map(
              (brand) => (
                <span
                  key={brand}
                  className="font-montserrat font-extrabold text-xs sm:text-sm tracking-widest text-neutral-700 hover:text-black transition-colors"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Book 3D Consultation Form */}
      <section id="consultation-form" className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-surface-pure p-8 sm:p-12 rounded-3xl border border-border-subtle shadow-ambient">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Personalized Architectural Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1">
              Book a Private 3D Interior Design Session
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mt-2">
              Meet our Senior Design Principal at your site or our Patna Headquarters Experience Center.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-black">check_circle</span>
              <h3 className="text-lg font-bold text-black">Design Consultation Confirmed</h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto">
                Thank you, {fullName}. Our Principal Interior Architect has received your project briefing. We will call you at {phone} within 24 hours to schedule the 3D VR design walkthrough.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitLead} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Vikramaditya Rathore"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98450 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                    City / Corridor
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  >
                    <option value="Patna">Patna, Bihar</option>
                    <option value="Other">Other Metro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Possession Timeline
                  </label>
                  <select
                    value={possessionTimeline}
                    onChange={(e) => setPossessionTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  >
                    <option>Immediate / Ready to start</option>
                    <option>Within 30-60 Days</option>
                    <option>Under Construction (3-6 Months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Property Name &amp; Locality
                </label>
                <input
                  type="text"
                  value={projectLocation}
                  onChange={(e) => setProjectLocation(e.target.value)}
                  placeholder="e.g. Prestige Lakeside Habitat, Bailey Road Penthouse..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Design Preferences or Special Requirements
                </label>
                <textarea
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Tell us about your aesthetic goals, preferred materials, home office or walk-in closet needs..."
                  rows={3}
                  className="w-full p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none text-black"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer mt-2 disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Request Private 3D Design Session'}
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
              Everything you need to know about Realic Bespoke Interior Architecture.
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
