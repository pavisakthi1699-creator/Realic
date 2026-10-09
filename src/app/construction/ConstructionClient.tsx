'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ConstructionClient() {
  // Construction Estimator State
  const [builtUpSqft, setBuiltUpSqft] = useState(3200);
  const [structureType, setStructureType] = useState('Luxury Independent Villa');
  const [specPackage, setSpecPackage] = useState<'Classic' | 'Elite' | 'Imperial'>('Elite');
  const [numFloors, setNumFloors] = useState('G + 2 Floors');
  const [calculatedQuote, setCalculatedQuote] = useState<{
    civilCost: number;
    finishingCost: number;
    totalCost: number;
    months: number;
  } | null>(null);

  // Lead Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Patna');
  const [plotLocation, setPlotLocation] = useState('');
  const [plotDimension, setPlotDimension] = useState('');
  const [sanctionStatus, setSanctionStatus] = useState('Need Realic to handle approvals');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Rates per sqft
  const rates = {
    Classic: { rate: 1850, civilRatio: 0.58, monthsPer1000: 2.8 },
    Elite: { rate: 2350, civilRatio: 0.55, monthsPer1000: 3.2 },
    Imperial: { rate: 2950, civilRatio: 0.52, monthsPer1000: 3.6 },
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const config = rates[specPackage];
    let mult = 1.0;
    if (structureType.includes('Stilt + 4')) mult = 1.08;
    if (structureType.includes('Commercial')) mult = 1.12;

    const total = builtUpSqft * config.rate * mult;
    const civil = Math.round(total * config.civilRatio);
    const finishing = total - civil;
    const estMonths = Math.max(7, Math.round((builtUpSqft / 1000) * 2.5 + 4));

    setCalculatedQuote({
      civilCost: civil,
      finishingCost: finishing,
      totalCost: Math.round(total),
      months: estMonths,
    });
    toast.success('Construction BOQ and timeline estimate updated!');
  };

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
          type: 'Turnkey Construction',
          name: fullName,
          phone,
          email,
          propertyTitle: `${structureType} (${builtUpSqft} sq.ft.) in ${city}`,
          notes: `Plot: ${plotLocation} (${plotDimension}) | Package: ${specPackage} | Sanction: ${sanctionStatus} | Notes: ${notes}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        toast.success('Construction survey scheduled! Our Lead Civil Engineer will contact you within 24 hours.');
      } else {
        toast.error(data.error || 'Failed to submit inquiry.');
      }
    } catch {
      toast.error('Network error submitting your inquiry.');
    } finally {
      setSubmitting(false);
    }
  };

  const projects = [
    {
      title: 'Winsome Icon 18-Storey High-Rise Landmark',
      type: 'Iconic High-Rise Structural Engineering (B+G+18)',
      location: 'AIIMS-Digha Elevated Corridor, Patna',
      sqft: '1,685 – 2,245 sq.ft. Units',
      status: 'Under Construction (RCC Superstructure)',
      duration: '18-Storey Monolithic Frame',
      steel: 'Tata Tiscon Fe 550D + M35 Self-Compacting RMC',
      image: '/images/projects/winsome-icon/day-elevation-glass-tower.jpg',
    },
    {
      title: 'Durga Lifestyle Boutique Residences',
      type: 'Presidential Single Tower (B+G+9)',
      location: '100-Ft Atal Path Expressway, Patna',
      sqft: '2,185 – 2,560 sq.ft.',
      status: 'Under Construction',
      duration: 'Superstructure In Progress',
      steel: 'Seismic Zone IV Ductile Detailing & Waterproofed Double Basement',
      image: '/images/projects/durga-lifestyle/full-tower-elevation-atal-path.jpg',
    },
    {
      title: 'Venus Capital Heights Integrated Estate',
      type: '16-Acre Royal Township Infrastructure',
      location: 'Bailey Road & AIIMS Corridor, Patna',
      sqft: '70,000 sq.ft. Club Royale & Multiple Towers',
      status: 'Active Phased Execution',
      duration: 'Master-Planned Delivery',
      steel: 'Ar. Hafeez Contractor Benchmark & High-Grade Rebar',
      image: '/images/projects/venus-capital-heights/palatial-tower-facade-elevation.jpg',
    },
    {
      title: 'Satvika Rajpati Enclave Gated Residences',
      type: 'Earthquake-Resistant G+5 Community',
      location: 'Mithila Colony, Danapur, Patna',
      sqft: '1,220 – 1,765 sq.ft.',
      status: 'Roof Slab Stage',
      duration: 'Ahead of Schedule',
      steel: 'Earthquake-Resistant RCC Frame & Ambuja Cement',
      image: '/images/projects/satvika-rajpati-enclave/full-front-elevation.jpg',
    },
  ];

  const faqs = [
    {
      q: 'Does Realic handle municipal sanction approvals and architectural drawings?',
      a: 'Yes. We offer end-to-end approval management including soil bearing capacity tests (SBC), structural PhD vetting, architectural blueprints, and municipal sanction filing with Patna Municipal Corporation, PRDA, and BIDA Bihar.',
    },
    {
      q: 'How does Realic protect clients from steel and cement price inflation?',
      a: 'We execute a legally binding Fixed Price Turnkey Contract. Once the BOQ and specifications are locked, Realic absorbs all commodity price escalations in steel, cement, sand, and labor until the keys are handed over.',
    },
    {
      q: 'How can I monitor my construction site remotely?',
      a: 'Every Realic construction site is outfitted with dual high-definition 360° pan-tilt-zoom CCTV cameras. Clients receive dedicated mobile app credentials to view live 24/7 video feeds, time-lapse archives, and daily progress logs from anywhere in the world.',
    },
    {
      q: 'What quality testing is performed during the construction cycle?',
      a: 'We conduct 380 discrete quality checks: concrete cube compressive strength tests (at 7, 14, and 28 days), non-destructive rebound hammer tests, water ponding leakage tests on all slabs for 72 hours, and structural steel tensile verification.',
    },
    {
      q: 'What is the penalty if Realic delays project handover?',
      a: 'Our agreements include an explicit Delay Liquidation Clause: if handover is delayed beyond the agreed grace buffer due to non-force-majeure causes, Realic pays ₹25,000 per month directly to the client.',
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
                <span className="material-symbols-outlined text-sm text-black">engineering</span>
                Civil Engineering Excellence • IS 456 Seismic Zone IV Compliant
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-montserrat tracking-tight leading-tight text-black">
                Turnkey Construction, <span className="underline decoration-neutral-300">Engineered to Last.</span>
              </h1>

              <p className="text-neutral-600 text-base md:text-lg max-w-xl leading-relaxed">
                Build your bespoke luxury villa, multi-storey residence, or commercial landmark with zero stress. From architectural sanction to turnkey key handover with live CCTV app tracking.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('construction-estimator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">calculate</span>
                  Calculate Construction Cost
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('survey-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm rounded-xl border border-neutral-300 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">domain_verification</span>
                  Schedule Free Soil &amp; Plot Survey
                </button>
              </div>

              {/* Metrics */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">350,000+</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Sq.Ft. Built &amp; Handed Over</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">Zero</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Cost Escalation Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">24/7 CCTV</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Live Site App Streaming</div>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <img
                  src="/images/projects/winsome-icon/day-elevation-glass-tower.jpg"
                  alt="Winsome Icon High-Rise Structural Construction"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-wider self-start mb-2">
                    High-Rise Structural Engineering: Patna
                  </span>
                  <p className="text-sm font-bold font-montserrat">Winsome Icon 18-Storey Landmark Towers</p>
                  <p className="text-xs text-neutral-300">AIIMS-Digha Elevated Corridor • Fe 550D Monolithic RCC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Engineering Pillars */}
      <section className="py-12 bg-white border-b border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">videocam</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">Live CCTV App Tracking</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Stream real-time high-definition cameras on your phone anytime, from anywhere in the world.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">shield</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">Fixed Price Protection</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Shielded against cement &amp; steel price spikes. Zero cost escalations once contract is signed.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">biotech</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">380-Point Quality Audits</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Digital cube test logs, slump inspections, and non-destructive rebound tests at every slab.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">history_edu</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">Municipal Sanctions</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                End-to-end BIDA, PMC, and BBMP municipal approvals, soil testing, and certified structural vetting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Construction Estimator */}
      <section id="construction-estimator" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-surface-pure p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-ambient">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Algorithmic Civil BOQ Forecaster
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1 mb-2">
              Estimate Your Turnkey Construction Cost
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mb-8">
              Configure your built-up area and specification grade to calculate foundation-to-key estimates.
            </p>

            <form onSubmit={handleCalculate} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Structure Typology
                  </label>
                  <select
                    value={structureType}
                    onChange={(e) => setStructureType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>Luxury Independent Villa</option>
                    <option>Duplex Villa Residence</option>
                    <option>Stilt + 4 Residential Tower</option>
                    <option>Commercial Complex / Office</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Total Built-up Area (Sq Ft)
                  </label>
                  <input
                    type="number"
                    value={builtUpSqft}
                    onChange={(e) => setBuiltUpSqft(Number(e.target.value))}
                    min={1000}
                    max={50000}
                    step={100}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Floor Count
                  </label>
                  <select
                    value={numFloors}
                    onChange={(e) => setNumFloors(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>G + 1 Floor</option>
                    <option>G + 2 Floors</option>
                    <option>G + 3 Floors</option>
                    <option>Stilt + 4 Floors</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Construction Specification Tier
                  </label>
                  <select
                    value={specPackage}
                    onChange={(e) => setSpecPackage(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option value="Classic">Classic Standard (₹1,850/sq.ft. • Fe 550D • Jaquar)</option>
                    <option value="Elite">Elite Luxury (₹2,350/sq.ft. • UltraTech • Kohler • Marble)</option>
                    <option value="Imperial">Imperial Sovereign (₹2,950/sq.ft. • Zone V • Grohe • VRV)</option>
                  </select>
                </div>
              </div>

              {/* Package Details Box */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-1.5">
                <span className="font-bold text-black uppercase tracking-wider text-[10px]">
                  Included in {specPackage} Package:
                </span>
                {specPackage === 'Classic' && (
                  <p className="text-neutral-600 leading-relaxed">
                    Tata Tiscon Fe 550D rebar, UltraTech PPC cement, First-class red clay bricks, Jaquar bath fittings, Kajaria vitrified floor tiles, Asian Paints Apex exterior, 1-year seepage warranty.
                  </p>
                )}
                {specPackage === 'Elite' && (
                  <p className="text-neutral-600 leading-relaxed">
                    Tata Tiscon 550D rebar, ACC Gold / UltraTech Super concrete, Wirecut red bricks / AAC blocks, Kohler sanitaryware, Italian marble living area, German UPVC double glazed windows, 5-year structural warranty.
                  </p>
                )}
                {specPackage === 'Imperial' && (
                  <p className="text-neutral-600 leading-relaxed">
                    Earthquake Zone V ductile detailing, M30 ready-mix concrete with automated batching, Grohe &amp; Duravit fittings, Full Italian Statuario/Bottochino marble, VRV air-conditioning pre-ducting, Home automation conduits, 10-year comprehensive warranty.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">calculate</span>
                Calculate Construction Budget &amp; Milestones
              </button>
            </form>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 text-black p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-black">
                Estimated Project Cost Breakdown
              </span>

              <div className="mt-2 mb-4">
                {calculatedQuote ? (
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-montserrat text-black">
                      ₹{(calculatedQuote.totalCost / 10000000).toFixed(2)} Cr
                    </div>
                    <span className="text-xs text-neutral-500 block mt-1">
                      Total Turnkey Cost for {builtUpSqft} sq.ft. ({specPackage} Package)
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold text-neutral-800 font-montserrat">
                      Configure details to estimate
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Provide your built-up area and specifications to view immediate BOQ costs and timelines.
                    </p>
                  </div>
                )}
              </div>

              {calculatedQuote && (
                <div className="space-y-3 border-t border-neutral-200 pt-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Civil &amp; Structural Shell:</span>
                    <span className="font-bold text-black">
                      ₹{(calculatedQuote.civilCost / 100000).toFixed(1)} Lakhs
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Premium Architectural Finishing:</span>
                    <span className="font-bold text-black">
                      ₹{(calculatedQuote.finishingCost / 100000).toFixed(1)} Lakhs
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Estimated Project Duration:</span>
                    <span className="font-bold text-emerald-600">
                      {calculatedQuote.months} Calendar Months
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Live CCTV App Setup:</span>
                    <span className="font-bold text-black">Included Free</span>
                  </div>
                </div>
              )}

              <div className="border-t border-neutral-200 mt-4 pt-4 space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-black">check</span>
                  Tied to stage-by-stage escrow milestone disbursements
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-black">check</span>
                  Delay compensation clause in contract
                </div>
              </div>

              <button
                onClick={() => {
                  const formEl = document.getElementById('survey-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors text-center block cursor-pointer"
              >
                Request On-Site Structural Soil Survey &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-white border-y border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Structural Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black mt-1">
              Featured Construction Projects
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Explore our ongoing and recently delivered residential and commercial landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-black border border-white/50">
                      {proj.status}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-neutral-500 block mb-1">
                      {proj.type}
                    </span>
                    <h3 className="font-bold text-sm text-black font-montserrat mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-neutral-600 flex items-center gap-1 mb-3">
                      <span className="material-symbols-outlined text-[13px]">location_on</span>
                      {proj.location}
                    </p>

                    <div className="border-t border-neutral-200/60 pt-2.5 space-y-1 text-[11px] text-neutral-500">
                      <div className="flex justify-between">
                        <span>Built-Up Area:</span>
                        <span className="font-bold text-black">{proj.sqft}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Handover Time:</span>
                        <span className="font-bold text-black">{proj.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Structural Rebar:</span>
                        <span className="font-bold text-neutral-800">{proj.steel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Stage Construction Milestone Pipeline */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Milestone Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1">
            Turnkey Construction Lifecycle
          </h2>
          <p className="text-xs sm:text-sm text-text-medium-emphasis mt-2">
            Disbursements are released strictly as engineering milestones are certified on-site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            {
              phase: 'Stage 01',
              title: 'Sanctions & Soil',
              desc: 'Soil bearing test, architectural elevations, municipal sanction approvals and site clearance.',
              icon: 'draw',
            },
            {
              phase: 'Stage 02',
              title: 'Foundation & Plinth',
              desc: 'Deep excavation, anti-termite chemical soil injection, footings, and plinth beam casting.',
              icon: 'foundation',
            },
            {
              phase: 'Stage 03',
              title: 'RCC Superstructure',
              desc: 'Columns, beams, and roof slabs cast with automated RMC and Tata Tiscon Fe 550D rebar.',
              icon: 'apartment',
            },
            {
              phase: 'Stage 04',
              title: 'Masonry & Conduiting',
              desc: 'Wirecut brickwork, concealed CPVC plumbing, fire-retardant wiring, and dual-coat plaster.',
              icon: 'construction',
            },
            {
              phase: 'Stage 05',
              title: 'Finishing & Handover',
              desc: 'Waterproofing pond testing, Italian marble laying, glazing, painting, and final keys handover.',
              icon: 'key',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-pure border border-border-subtle shadow-ambient flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-neutral-400 font-mono">
                    {item.phase}
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

      {/* Brand Standards */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-6">
            Structural Material &amp; Engineering Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
            {[
              'TATA TISCON 550D',
              'ULTRATECH SUPER',
              'ACC GOLD',
              'JINDAL PANTHER',
              'SUPREME CPVC',
              'SCHNEIDER ELECTRIC',
              'FENESTA UPVC',
              'ASIAN PAINTS APEX',
            ].map((brand) => (
              <span
                key={brand}
                className="font-montserrat font-extrabold text-xs sm:text-sm tracking-widest text-neutral-700 hover:text-black transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Book Site Survey Form */}
      <section id="survey-form" className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-surface-pure p-8 sm:p-12 rounded-3xl border border-border-subtle shadow-ambient">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Site Survey &amp; Engineering Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1">
              Book a Structural Soil &amp; Plot Survey
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mt-2">
              Our Senior Civil Engineer will visit your plot in Patna to evaluate soil, road frontage, and municipal FAR potential.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-black">check_circle</span>
              <h3 className="text-lg font-bold text-black">Survey Request Received</h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto">
                Thank you, {fullName}. Our Lead Project Engineer will review your plot coordinates and phone you at {phone} within 24 hours to schedule the on-site survey.
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
                    placeholder="e.g. Er. Devendra Sinha"
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
                    placeholder="+91 94310 ..."
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
                    City / Metro
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  >
                    <option value="Patna">Patna, Bihar</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Municipal Sanction
                  </label>
                  <select
                    value={sanctionStatus}
                    onChange={(e) => setSanctionStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  >
                    <option>Need Realic to handle approvals</option>
                    <option>Sanction Already Approved</option>
                    <option>Applied / In Process</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Plot Locality &amp; Landmark
                  </label>
                  <input
                    type="text"
                    value={plotLocation}
                    onChange={(e) => setPlotLocation(e.target.value)}
                    placeholder="e.g. Saguna More, Bailey Road, Whitefield..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Plot Dimension / Area
                  </label>
                  <input
                    type="text"
                    value={plotDimension}
                    onChange={(e) => setPlotDimension(e.target.value)}
                    placeholder="e.g. 2.5 Katha or 40 x 60 ft"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Specific Construction Objectives or Requirements
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Basement requirements, lift installation, duplex double-height living room, target start date..."
                  rows={3}
                  className="w-full p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none text-black"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer mt-2 disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Request On-Site Structural Plot Survey'}
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
              Key details regarding Realic Turnkey Structural Construction contracts and engineering guarantees.
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
