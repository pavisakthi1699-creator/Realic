'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function BuilderClient() {
  // Corridor Benchmarks Database for Demand & Price Intelligence
  const corridorBenchmarks: Record<
    string,
    {
      demandScore: number;
      demandRating: string;
      benchmarkRange: string;
      avgPrice: number;
      sweetSpot: string;
      topBuyers: string[];
      velocityRatio: string;
      avgSellout: string;
    }
  > = {
    'Patna - Bailey Road / Saguna': {
      demandScore: 96,
      demandRating: 'Extremely High (Supply Deficit)',
      benchmarkRange: '₹7,800 – ₹9,600 / sq.ft.',
      avgPrice: 8700,
      sweetSpot: '3 & 4 BHK Luxury Residences (1,650 – 2,400 sq.ft.)',
      topBuyers: ['Doctors & Hospital Promoters (38%)', 'Government & Judiciary (34%)', 'NRI Diaspora (28%)'],
      velocityRatio: '3.4x Demand to Supply',
      avgSellout: '8 to 11 Months',
    },
    'Patna - Digha / Marine Drive': {
      demandScore: 98,
      demandRating: 'Peak Luxury Demand (Prime Waterfront)',
      benchmarkRange: '₹9,500 – ₹13,500 / sq.ft.',
      avgPrice: 11200,
      sweetSpot: 'Waterfront Penthouses & Duplex Terraces',
      topBuyers: ['Industrialists & HNIs (45%)', 'Medical Specialists (30%)', 'Delhi/Mumbai Transplants (25%)'],
      velocityRatio: '4.1x Demand to Supply',
      avgSellout: '6 to 9 Months',
    },
    'Patna - Bihta / Airport Express': {
      demandScore: 89,
      demandRating: 'High Growth Investment Corridor',
      benchmarkRange: '₹4,800 – ₹6,800 / sq.ft.',
      avgPrice: 5800,
      sweetSpot: 'Plotted Townships & 2/3 BHK Gated Units',
      topBuyers: ['Long-Term Wealth Investors (52%)', 'IIT/NIT Tech Faculty (26%)', 'Logistics Entrepreneurs (22%)'],
      velocityRatio: '2.8x Demand to Supply',
      avgSellout: '10 to 14 Months',
    },
    'Patna - Atal Path (100-Ft Expressway)': {
      demandScore: 97,
      demandRating: 'Elite Presidential Corridor',
      benchmarkRange: '₹8,500 – ₹11,200 / sq.ft.',
      avgPrice: 9800,
      sweetSpot: '3 & 4 BHK Single-Tower Residences (2,100 – 2,600 sq.ft.)',
      topBuyers: ['Senior Bureaucrats & Judges (42%)', 'Doctors & Surgeons (35%)', 'HNI Business Families (23%)'],
      velocityRatio: '3.8x Demand to Supply',
      avgSellout: '7 to 10 Months',
    },
    'Patna - Danapur Station & Cantonment': {
      demandScore: 92,
      demandRating: 'Rapid Absorption Transit Hub',
      benchmarkRange: '₹6,200 – ₹8,400 / sq.ft.',
      avgPrice: 7200,
      sweetSpot: '2 & 3 BHK Modern High-Rise Communities',
      topBuyers: ['Defence Officers (40%)', 'Railway Executives (32%)', 'Corporate Professionals (28%)'],
      velocityRatio: '3.2x Demand to Supply',
      avgSellout: '9 to 12 Months',
    },
    'Patna - AIIMS-Digha Elevated Corridor': {
      demandScore: 95,
      demandRating: 'High-Rise Architectural Landmark Belt',
      benchmarkRange: '₹7,500 – ₹10,200 / sq.ft.',
      avgPrice: 8800,
      sweetSpot: '18-Storey High-Rise Towers & Commercial Plazas',
      topBuyers: ['Medical Specialists & AIIMS Faculty (45%)', 'NRI Diaspora (35%)', 'Investors (20%)'],
      velocityRatio: '3.5x Demand to Supply',
      avgSellout: '8 to 11 Months',
    },
  };

  // Demand & Price Survey Simulator State
  const [selectedSurveyCorridor, setSelectedSurveyCorridor] = useState<string>('Patna - Bailey Road / Saguna');
  const [surveyTypology, setSurveyTypology] = useState<string>('3 BHK Luxury Residences');
  const [surveyPriceExpectation, setSurveyPriceExpectation] = useState<number>(8800);
  const [surveyStage, setSurveyStage] = useState<string>('Pre-Sanction / Planning Phase');

  // Survey Dossier Lead Form State
  const [surveyName, setSurveyName] = useState('');
  const [surveyFirm, setSurveyFirm] = useState('');
  const [surveyPhone, setSurveyPhone] = useState('');
  const [surveyEmail, setSurveyEmail] = useState('');
  const [surveyPlotScale, setSurveyPlotScale] = useState('');
  const [surveyKeyNeed, setSurveyKeyNeed] = useState('High-Speed Pre-Launch Absorption');
  const [surveySubmitting, setSurveySubmitting] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  // Feasibility Calculator State
  const [landAreaKatha, setLandAreaKatha] = useState(15);
  const [corridor, setCorridor] = useState('Patna - Bailey Road / Saguna');
  const [farRatio, setFarRatio] = useState(2.5);
  const [projectType, setProjectType] = useState('Luxury High-Rise Residential');
  const [baseSqftRate, setBaseSqftRate] = useState(8500);
  const [jvModel, setJvModel] = useState('Area Sharing (45% Landowner : 55% Builder)');
  const [feasibilityResult, setFeasibilityResult] = useState<{
    saleableSqft: number;
    gdvCrores: number;
    landownerShareCrores: number;
    builderShareCrores: number;
    absorptionMonths: number;
  } | null>(null);

  // General Proposal Submission State
  const [partnerType, setPartnerType] = useState<'Developer / Builder' | 'Landowner' | 'Investor / Fund'>('Developer / Builder');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [locationCorridor, setLocationCorridor] = useState('');
  const [plotSize, setPlotSize] = useState('');
  const [mandateScope, setMandateScope] = useState('Exclusive Sole-Selling Mandate');
  const [proposalNotes, setProposalNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active Corridor Benchmark Data
  const activeBenchmark = corridorBenchmarks[selectedSurveyCorridor] || corridorBenchmarks['Patna - Bailey Road / Saguna'];

  // Price Expectation Assessment Logic
  const priceDeltaPercent = Math.round(((surveyPriceExpectation - activeBenchmark.avgPrice) / activeBenchmark.avgPrice) * 100);

  let priceVerdict = {
    badge: 'Optimal Market Alignment',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: `Your ₹${surveyPriceExpectation.toLocaleString()}/sq.ft. target matches the corridor median (${activeBenchmark.benchmarkRange}). Projected 70%+ pre-launch absorption within 6 months.`,
    velocity: 'Fast (6-9 Months to Sellout)',
  };

  if (priceDeltaPercent > 12) {
    priceVerdict = {
      badge: 'Premium Luxury Positioning',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: `Your ₹${surveyPriceExpectation.toLocaleString()}/sq.ft. target is ${priceDeltaPercent}% above the corridor average. Requires signature architectural elevations, luxury amenities, and targeted HNI/NRI syndication.`,
      velocity: 'Targeted Niche (10-14 Months)',
    };
  } else if (priceDeltaPercent < -10) {
    priceVerdict = {
      badge: 'High-Velocity Value Sweet Spot',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: `Your ₹${surveyPriceExpectation.toLocaleString()}/sq.ft. target is below prevailing supply. Expect rapid oversubscription and potential for phased 8-12% price escalation.`,
      velocity: 'Rapid Sellout (4-6 Months)',
    };
  }

  // Handle Feasibility Calculation
  const handleCalculateFeasibility = (e: React.FormEvent) => {
    e.preventDefault();
    const landSqft = landAreaKatha * 1361;
    const saleableSqft = Math.round(landSqft * farRatio * 1.25);
    const totalGdv = (saleableSqft * baseSqftRate) / 10000000;

    let landownerRatio = 0.45;
    if (jvModel.includes('50:50')) landownerRatio = 0.5;
    if (jvModel.includes('40%')) landownerRatio = 0.4;
    if (jvModel.includes('Sole-Selling')) landownerRatio = 0.0;

    const landownerShare = landownerRatio > 0 ? totalGdv * landownerRatio : 0;
    const builderShare = totalGdv - landownerShare;
    const estMonths = Math.max(6, Math.round(saleableSqft / 15000));

    setFeasibilityResult({
      saleableSqft,
      gdvCrores: Math.round(totalGdv * 10) / 10,
      landownerShareCrores: Math.round(landownerShare * 10) / 10,
      builderShareCrores: Math.round(builderShare * 10) / 10,
      absorptionMonths: estMonths,
    });
    toast.success('Project feasibility and GDV forecast calculated!');
  };

  // Handle Demand Survey Submission
  const handleSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveyName || !surveyPhone) {
      toast.error('Please provide your name and phone number.');
      return;
    }

    try {
      setSurveySubmitting(true);
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Builder JV Mandate',
          name: surveyName,
          phone: surveyPhone,
          email: surveyEmail,
          propertyTitle: `Demand & Price Survey: ${selectedSurveyCorridor} (${surveyTypology})`,
          notes: `Firm: ${surveyFirm} | Corridor: ${selectedSurveyCorridor} | Typology: ${surveyTypology} | Price Expectation: ₹${surveyPriceExpectation}/sq.ft. | Scale: ${surveyPlotScale} | Stage: ${surveyStage} | Need: ${surveyKeyNeed}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSurveySubmitted(true);
        toast.success('Demand Survey submitted! Our Managing Partner will share your personalized Corridor Absorption Dossier.');
      } else {
        toast.error(data.error || 'Failed to submit survey.');
      }
    } catch {
      toast.error('Network error submitting survey.');
    } finally {
      setSurveySubmitting(false);
    }
  };

  // Submit General Proposal
  const handleSubmitProposal = async (e: React.FormEvent) => {
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
          type: 'Builder JV Mandate',
          name: fullName,
          phone,
          email,
          propertyTitle: `${mandateScope} • ${partnerType} (${companyName || 'Independent'})`,
          notes: `Corridor: ${locationCorridor} | Land: ${plotSize} | Scope: ${mandateScope} | Notes: ${proposalNotes}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        toast.success('Strategic developer proposal submitted! Our Managing Partner will reach out within 24 hours.');
      } else {
        toast.error(data.error || 'Failed to submit proposal.');
      }
    } catch {
      toast.error('Network error submitting your proposal.');
    } finally {
      setSubmitting(false);
    }
  };

  const caseStudies = [
    {
      title: 'The Sovereign Heights Township',
      type: 'Joint Development Agreement (JDA)',
      location: 'Bailey Road, Patna',
      size: '2.8 Acres • 220 Units',
      gdv: '₹ 145 Cr GDV',
      result: '100% Sold Out in 9 Months',
      role: 'Sole-Selling Partner & RERA Legal Structuring',
      image: '/images/projects/satvika-rajpati-enclave/full-front-elevation.jpg',
    },
    {
      title: 'Winsome Icon 18-Storey Landmark Towers',
      type: 'Sole-Selling Exclusive Mandate',
      location: 'AIIMS-Digha Elevated Corridor, Patna',
      size: '4 Towers • 18 Storeys • 3 & 4 BHK',
      gdv: '₹ 220 Cr GDV',
      result: 'Highest Absorption Velocity in Corridor',
      role: 'Branding, Experience Lounge & NRI Syndication',
      image: '/images/projects/winsome-icon/day-elevation-glass-tower.jpg',
    },
    {
      title: 'Durga Lifestyle Presidential Residences',
      type: 'Sole Developer Sales Mandate',
      location: '100-Ft Atal Path Expressway, Patna',
      size: '32 Bespoke Presidential Residences',
      gdv: '₹ 95 Cr GDV',
      result: '78% Pre-Sales at Structural Milestone',
      role: 'Private Client Wealth Liaison & Retail Structuring',
      image: '/images/projects/durga-lifestyle/full-tower-elevation-atal-path.jpg',
    },
    {
      title: 'Venus Capital Heights Integrated Township',
      type: 'Master Development Advisory & Offtake',
      location: 'Bailey Road & AIIMS Corridor, Patna',
      size: '16-Acre Township • Ar. Hafeez Contractor',
      gdv: '₹ 650 Cr GDV',
      result: 'Patna Benchmark Absorption & Institutional Due Diligence',
      role: 'Township Positioning & Corporate NRI Alliances',
      image: '/images/projects/venus-capital-heights/palatial-tower-facade-elevation.jpg',
    },
  ];

  const faqs = [
    {
      q: 'What is a Realic Sole-Selling Mandate for Real Estate Developers?',
      a: 'Under a Sole-Selling Mandate, Realic acts as the complete, outsourced marketing and sales arm of the developer. We design the project brand identity, set up the experience center, run high-converting digital performance funnels, and mobilize our private network of 5,000+ verified HNI and NRI buyers to achieve high absorption speed.',
    },
    {
      q: 'How does Realic structure Joint Development Agreements (JDA) between landowners and builders?',
      a: 'We conduct forensic 30-year land title vetting, municipal FAR zoning verification, and economic feasibility modeling. We structure clear area-sharing or revenue-sharing agreements with bank escrow security, transparent construction milestone schedules, and dispute-resolution covenants to protect both landowner and developer.',
    },
    {
      q: 'How does Realic evaluate buyer demand and corridor price expectations?',
      a: 'Our research desk tracks registered deed comps, buyer enquiries, absorption timelines, and corridor infrastructure catalysts (e.g. Metro lines, Marine Drive frontage, elevated corridors). We conduct localized surveys to forecast exact unit configuration demand (e.g. 3BHK vs 4BHK) and benchmark price elasticity before project launch.',
    },
    {
      q: 'Do you help developers raise pre-launch capital or fractional institutional equity?',
      a: 'Yes. For Grade-A projects with clean titles and RERA approvals, Realic syndicates private placement capital, structured debt, and bulk inventory offtake through family offices and angel investor syndicates across Patna, Delhi, Mumbai, and North America.',
    },
    {
      q: 'What marketing overhead does the builder need to provide?',
      a: 'Depending on the mandate tier, Realic co-funds or operates turnkey marketing campaigns, high-end 3D architectural CGI renders, immersive VR walk-throughs, and luxury on-site experience sales lounges with performance-linked remuneration.',
    },
    {
      q: 'Can Realic help regularize stalled or sluggish projects?',
      a: 'Yes. Our turnaround advisory conducts brand repositioning, unit reconfiguration, pricing recalibration, and digital go-to-market resets that revive buyer velocity for underperforming inventory.',
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Banner */}
      <section className="bg-slate-50 text-slate-900 py-16 md:py-24 px-4 md:px-8 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-black text-xs font-bold border border-neutral-200">
                <span className="material-symbols-outlined text-sm text-black">corporate_fare</span>
                Developer Advisory • Demand &amp; Price Surveys • Sole-Selling Mandates
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-montserrat tracking-tight leading-tight text-black">
                Strategic Advisory for <span className="underline decoration-neutral-300">Grade-A Developers.</span>
              </h1>

              <p className="text-neutral-600 text-base md:text-lg max-w-xl leading-relaxed">
                Unlock peak Gross Development Value (GDV), assess true buyer demand, and eliminate unsold inventory. We partner with landowners and visionary builders across Patna prime luxury corridors for turnkey sole-selling, JDA structuring, and capital syndication.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('demand-survey');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">poll</span>
                  Take Corridor Demand &amp; Price Survey
                </button>

                <a
                  href="tel:+919102599969"
                  className="px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm rounded-xl border border-neutral-300 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  Direct Desk: +91 91025 99969
                </a>
              </div>

              {/* Metrics */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">₹ 850 Cr+</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Cumulative Mandate GDV</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">3x Faster</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Absorption Velocity</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black">5,000+</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Verified HNI &amp; NRI Buyers</div>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <img
                  src="/images/projects/winsome-icon/day-elevation-glass-tower.jpg"
                  alt="Winsome Icon 18-Storey Landmark"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-wider self-start mb-2">
                    Exclusive Sole Mandate
                  </span>
                  <p className="text-sm font-bold font-montserrat">Winsome Icon 18-Storey Landmark Towers</p>
                  <p className="text-xs text-neutral-300">AIIMS-Digha Elevated Corridor, Patna • ₹ 220 Cr GDV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Developer Collaboration */}
      <section className="py-12 bg-white border-b border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">High-Speed Absorption</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Clear 70%+ of inventory within 180 days through targeted digital campaigns and private wealth desks.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">query_stats</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">Corridor Demand Audits</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Granular surveys tracking real buyer unit preferences, budget bands, and price elasticity per corridor.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">public</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">Global NRI Investor Desk</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Direct roadshows and digital syndication across Dubai, Singapore, and Silicon Valley tech diaspora.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-2xl">account_balance</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-black font-montserrat">RERA Escrow Structuring</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Complete compliance governance, designated banking escrow setups, and quarterly RERA audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Builder Market Demand & Price Expectation Survey */}
      <section id="demand-survey" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200 mb-3">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            Realic Market Intelligence • 2026 Micro-Market Study
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-black">
            Corridor Demand &amp; Price Expectation Survey
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
            Test your project location, planned typology, and price expectations against real-time buyer absorption velocity and transacted corridor registries across Patna prime growth corridors.
          </p>
        </div>

        {/* Survey Simulator & Intelligence Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
              <h3 className="text-base font-bold text-black font-montserrat flex items-center gap-2">
                <span className="material-symbols-outlined text-black">tune</span>
                Configure Your Project Parameters
              </h3>
              <span className="text-[11px] text-neutral-500 font-medium">Live Algorithmic Assessment</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Select Project Corridor / Micro-Market
                </label>
                <select
                  value={selectedSurveyCorridor}
                  onChange={(e) => {
                    const corr = e.target.value;
                    setSelectedSurveyCorridor(corr);
                    const b = corridorBenchmarks[corr];
                    if (b) setSelectedSurveyCorridor(corr);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-semibold focus:border-black outline-none h-11 text-black"
                >
                  {Object.keys(corridorBenchmarks).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Planned Asset Typology
                  </label>
                  <select
                    value={surveyTypology}
                    onChange={(e) => setSurveyTypology(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium focus:border-black outline-none h-11 text-black"
                  >
                    <option>3 BHK Luxury Residences</option>
                    <option>4 BHK Sky Penthouses &amp; Duplexes</option>
                    <option>Commercial High-Street Retail / Office</option>
                    <option>Independent Gated Villas &amp; Plots</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Current Development Stage
                  </label>
                  <select
                    value={surveyStage}
                    onChange={(e) => setSurveyStage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium focus:border-black outline-none h-11 text-black"
                  >
                    <option>Pre-Sanction / Planning Phase</option>
                    <option>Sanction Approved / Ready to Break Ground</option>
                    <option>Under Construction (Structural Stage)</option>
                    <option>Ready / Stalled Inventory to Liquidate</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-neutral-700">
                    Your Planned Price Expectation (₹ per Sq.Ft.)
                  </label>
                  <span className="text-xs font-extrabold font-montserrat text-black bg-neutral-100 px-2 py-0.5 rounded">
                    ₹{surveyPriceExpectation.toLocaleString()} / sq.ft.
                  </span>
                </div>
                <input
                  type="range"
                  min={4000}
                  max={20000}
                  step={100}
                  value={surveyPriceExpectation}
                  onChange={(e) => setSurveyPriceExpectation(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>₹4,000/sq.ft.</span>
                  <span>Corridor Benchmark: {activeBenchmark.benchmarkRange}</span>
                  <span>₹20,000/sq.ft.</span>
                </div>
              </div>
            </div>

            {/* Quick Summary Strip */}
            <div className="mt-6 pt-5 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[10px] text-neutral-500 font-semibold block uppercase">Demand Heat</span>
                <span className="text-sm font-extrabold text-black font-montserrat">
                  {activeBenchmark.demandScore}/100
                </span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[10px] text-neutral-500 font-semibold block uppercase">Supply/Demand</span>
                <span className="text-sm font-extrabold text-emerald-600 font-montserrat">
                  {activeBenchmark.velocityRatio}
                </span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[10px] text-neutral-500 font-semibold block uppercase">Corridor Median</span>
                <span className="text-sm font-extrabold text-black font-montserrat">
                  ₹{activeBenchmark.avgPrice.toLocaleString()}
                </span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[10px] text-neutral-500 font-semibold block uppercase">Avg. Sellout</span>
                <span className="text-sm font-extrabold text-black font-montserrat">
                  {activeBenchmark.avgSellout}
                </span>
              </div>
            </div>
          </div>

          {/* Intelligence Output Card */}
          <div className="lg:col-span-5 bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-xl space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Realic Corridor Intelligence Assessment
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <h4 className="text-lg font-bold font-montserrat text-white mt-1">
                {selectedSurveyCorridor}
              </h4>
            </div>

            {/* Verdict Badge */}
            <div className={`p-4 rounded-2xl border ${priceVerdict.badgeColor} bg-white text-black`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold font-montserrat tracking-tight uppercase">
                  {priceVerdict.badge}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black text-white">
                  {priceVerdict.velocity}
                </span>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed mt-1">
                {priceVerdict.description}
              </p>
            </div>

            {/* Specific Corridor Demand Specs */}
            <div className="space-y-3 text-xs border-t border-neutral-800 pt-4">
              <div>
                <span className="text-neutral-400 block mb-0.5">Highest Absorption Typology:</span>
                <span className="font-semibold text-white">{activeBenchmark.sweetSpot}</span>
              </div>

              <div>
                <span className="text-neutral-400 block mb-1">Primary Buyer Personas Looking in this Corridor:</span>
                <ul className="space-y-1">
                  {activeBenchmark.topBuyers.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-neutral-200 text-[11px]">
                      <span className="material-symbols-outlined text-xs text-amber-400">person_check</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800">
              <button
                onClick={() => {
                  const el = document.getElementById('survey-lead-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-4 bg-white hover:bg-neutral-100 text-black font-bold text-xs rounded-xl shadow-xs transition-colors text-center block cursor-pointer"
              >
                Submit Project Survey &amp; Get Detailed Corridor Dossier &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Survey Participation Form */}
        <div id="survey-lead-form" className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Developer Market Intelligence Registry
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black mt-1">
              Participate in the Realic Developer Demand Survey
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Share your project specifications under strict NDA. Receive a complimentary, localized Corridor Absorption &amp; Pricing Feasibility Report curated by Realic Advisory.
            </p>
          </div>

          {surveySubmitted ? (
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-black">check_circle</span>
              <h4 className="text-lg font-bold text-black">Survey Response Registered</h4>
              <p className="text-xs text-neutral-600 max-w-md mx-auto">
                Thank you, {surveyName}. Our market intelligence desk has logged your project details for {selectedSurveyCorridor}. We will phone you at {surveyPhone} within 24 hours with your customized absorption dossier.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSurveySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={surveyName}
                    onChange={(e) => setSurveyName(e.target.value)}
                    placeholder="e.g. Anand Vardhan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Developer Firm / Land Entity
                  </label>
                  <input
                    type="text"
                    value={surveyFirm}
                    onChange={(e) => setSurveyFirm(e.target.value)}
                    placeholder="e.g. Apex Infratech Projects"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    value={surveyPhone}
                    onChange={(e) => setSurveyPhone(e.target.value)}
                    placeholder="+91 91025 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={surveyEmail}
                    onChange={(e) => setSurveyEmail(e.target.value)}
                    placeholder="builder@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Land / Project Scale
                  </label>
                  <input
                    type="text"
                    value={surveyPlotScale}
                    onChange={(e) => setSurveyPlotScale(e.target.value)}
                    placeholder="e.g. 15 Katha or 2 Acres"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Primary Strategic Objective You Want Realic to Solve
                </label>
                <select
                  value={surveyKeyNeed}
                  onChange={(e) => setSurveyKeyNeed(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                >
                  <option>High-Speed Pre-Launch Absorption (Sole-Selling)</option>
                  <option>Joint Development Agreement (JDA) Structuring &amp; Land Monetization</option>
                  <option>Price Realization Optimization (Benchmarking &amp; Specification Tuning)</option>
                  <option>Reviving Slow / Stalled Inventory</option>
                  <option>Pre-Sales Capital Offtake &amp; HNI Syndication</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={surveySubmitting}
                className="w-full py-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">send</span>
                {surveySubmitting ? 'Registering Survey...' : 'Submit Survey & Request Corridor Demand Dossier'}
              </button>
            </form>
          )}
        </div>

        {/* Corridor Benchmarking Matrix Table */}
        <div className="mt-14 overflow-x-auto">
          <div className="text-left mb-4">
            <h4 className="text-base font-bold font-montserrat text-black">
              2026 Prime Corridor Demand &amp; Price Benchmark Matrix
            </h4>
            <p className="text-xs text-neutral-500">
              Aggregated from over 400+ transactions and active buyer demand registry queries.
            </p>
          </div>

          <table className="w-full text-left border-collapse text-xs bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
            <thead>
              <tr className="bg-neutral-100 text-neutral-700 font-bold uppercase text-[10px] tracking-wider border-b border-neutral-200">
                <th className="py-3.5 px-4">Corridor / Location</th>
                <th className="py-3.5 px-4">Demand Index</th>
                <th className="py-3.5 px-4">Transacted Price Range</th>
                <th className="py-3.5 px-4">Sweet-Spot Typology</th>
                <th className="py-3.5 px-4">Absorption Speed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-800">
              {Object.entries(corridorBenchmarks).map(([name, data]) => (
                <tr key={name} className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-black">{name}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {data.demandScore}/100
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold">{data.benchmarkRange}</td>
                  <td className="py-3.5 px-4 text-neutral-600">{data.sweetSpot}</td>
                  <td className="py-3.5 px-4 font-semibold text-black">{data.avgSellout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3 Developer Partnership Models */}
      <section className="py-16 md:py-24 bg-white border-y border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Strategic Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1">
              Developer Partnership Models
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mt-2">
              Flexible collaboration structures built for land monetization, accelerated sales, and capital security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model 1: Sole-Selling */}
            <div className="p-8 rounded-3xl bg-surface-pure border border-border-subtle shadow-ambient flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black mb-5">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                  Turnkey Sales Engine
                </span>
                <h3 className="text-xl font-bold font-montserrat text-primary mt-1 mb-3">
                  Exclusive Sole-Selling Mandate
                </h3>
                <p className="text-xs text-text-medium-emphasis leading-relaxed mb-6">
                  You build, Realic sells. We take 100% accountability for branding, digital ad funnels, sales lounges, site sales teams, and customer closing.
                </p>

                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-border-subtle pt-4">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    Zero unsold inventory liability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    Dedicated sales lounge and VR walkthrough setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    Performance-linked incentive compensation
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setMandateScope('Exclusive Sole-Selling Mandate');
                  const el = document.getElementById('developer-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center"
              >
                Enquire for Sole-Selling Mandate &rarr;
              </button>
            </div>

            {/* Model 2: JDA */}
            <div className="p-8 rounded-3xl bg-surface-pure border-2 border-primary shadow-ambient-lg relative flex flex-col justify-between">
              <span className="absolute -top-3 left-8 px-3 py-1 bg-black text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-sm">
                Most Popular for Landowners
              </span>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black mb-5 mt-2">
                  <span className="material-symbols-outlined text-2xl">handshake</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                  Landowner &amp; Builder Synergy
                </span>
                <h3 className="text-xl font-bold font-montserrat text-primary mt-1 mb-3">
                  Joint Development Agreement (JDA)
                </h3>
                <p className="text-xs text-text-medium-emphasis leading-relaxed mb-6">
                  Landowners contribute clear land, Grade-A builders fund construction, and Realic oversees legal vetting, escrow security, and area/revenue distribution.
                </p>

                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-border-subtle pt-4">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    Zero construction financial risk for landowner
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    Bank-guaranteed security deposits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    2.5x to 4x higher returns compared to outright land sale
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setMandateScope('Joint Development Agreement (JDA)');
                  const el = document.getElementById('developer-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center"
              >
                Structure a JDA Agreement &rarr;
              </button>
            </div>

            {/* Model 3: DM Model */}
            <div className="p-8 rounded-3xl bg-surface-pure border border-border-subtle shadow-ambient flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black mb-5">
                  <span className="material-symbols-outlined text-2xl">domain_add</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                  Institutional Advisory
                </span>
                <h3 className="text-xl font-bold font-montserrat text-primary mt-1 mb-3">
                  Development Management (DM)
                </h3>
                <p className="text-xs text-text-medium-emphasis leading-relaxed mb-6">
                  Institutional project supervision for high-net-worth families and funds holding large land banks. Realic manages master planning, procurement, and execution for a fee.
                </p>

                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-border-subtle pt-4">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    Landowner retains 100% equity upside
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    Institutional procurement cost advantages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-black">check</span>
                    RERA-audited project governance
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setMandateScope('Development Management (DM)');
                  const el = document.getElementById('developer-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center"
              >
                Explore DM Structuring &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feasibility & GDV Calculator */}
      <section id="jv-feasibility" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-surface-pure p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-ambient">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Corridor Economic Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1 mb-2">
              JDA &amp; Gross Development Value (GDV) Calculator
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mb-8">
              Simulate total saleable square footage, projected market value, and revenue-sharing splits.
            </p>

            <form onSubmit={handleCalculateFeasibility} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Land Area (in Katha)
                  </label>
                  <input
                    type="number"
                    value={landAreaKatha}
                    onChange={(e) => setLandAreaKatha(Number(e.target.value))}
                    min={2}
                    max={200}
                    step={1}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                    required
                  />
                  <span className="text-[10px] text-neutral-400 mt-1 block">
                    ~{(landAreaKatha * 1361).toLocaleString()} sq.ft. plot area
                  </span>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Prime Growth Corridor
                  </label>
                  <select
                    value={corridor}
                    onChange={(e) => {
                      setCorridor(e.target.value);
                      if (e.target.value.includes('Atal Path')) setBaseSqftRate(9800);
                      else setBaseSqftRate(8500);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>Patna - Bailey Road / Saguna</option>
                    <option>Patna - Digha / Marine Drive</option>
                    <option>Patna - Bihta / Airport Express</option>
                    <option>Patna - Atal Path (100-Ft Expressway)</option>
                    <option>Patna - Danapur Station &amp; Cantonment</option>
                    <option>Patna - AIIMS-Digha Elevated Corridor</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Permissible FAR
                  </label>
                  <select
                    value={farRatio}
                    onChange={(e) => setFarRatio(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option value={2.0}>2.0 FAR (Standard)</option>
                    <option value={2.5}>2.5 FAR (High-Density)</option>
                    <option value={3.0}>3.0 FAR (Transit Oriented)</option>
                    <option value={3.5}>3.5 FAR (Commercial)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Benchmark Rate (₹/Sq.Ft.)
                  </label>
                  <input
                    type="number"
                    value={baseSqftRate}
                    onChange={(e) => setBaseSqftRate(Number(e.target.value))}
                    min={4000}
                    max={25000}
                    step={250}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Asset Typology
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => {
                      setProjectType(e.target.value);
                      if (e.target.value.includes('Commercial')) setBaseSqftRate((prev) => Math.max(prev, 12000));
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>Luxury High-Rise Residential</option>
                    <option>Boutique Penthouses &amp; Villas</option>
                    <option>High-Street Commercial Retail</option>
                    <option>Mixed-Use Integrated Township</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Proposed JDA Model
                  </label>
                  <select
                    value={jvModel}
                    onChange={(e) => setJvModel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>Area Sharing (45% Landowner : 55% Builder)</option>
                    <option>Area Sharing (50% Landowner : 50% Builder)</option>
                    <option>Revenue Sharing (40% Landowner : 60% Builder)</option>
                    <option>Sole-Selling Exclusive Mandate</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">calculate</span>
                Simulate GDV &amp; Absorption Feasibility
              </button>
            </form>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 text-black p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-black">
                Projected Gross Development Value (GDV)
              </span>

              <div className="mt-2 mb-4">
                {feasibilityResult ? (
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-montserrat text-black">
                      ₹ {feasibilityResult.gdvCrores.toFixed(1)} Crores
                    </div>
                    <span className="text-xs text-neutral-500 block mt-1">
                      Projected GDV across {feasibilityResult.saleableSqft.toLocaleString()} sq.ft. saleable area
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold text-neutral-800 font-montserrat">
                      Configure parameters above
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Input your land dimensions and FAR to calculate real-world project monetization figures.
                    </p>
                  </div>
                )}
              </div>

              {feasibilityResult && (
                <div className="space-y-3 border-t border-neutral-200 pt-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Total Marketable Built-up:</span>
                    <span className="font-bold text-black">
                      {feasibilityResult.saleableSqft.toLocaleString()} Sq.Ft.
                    </span>
                  </div>
                  {feasibilityResult.landownerShareCrores > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Projected Landowner Realization:</span>
                      <span className="font-bold text-emerald-600">
                        ₹ {feasibilityResult.landownerShareCrores.toFixed(1)} Cr
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Projected Developer Revenue:</span>
                    <span className="font-bold text-black">
                      ₹ {feasibilityResult.builderShareCrores.toFixed(1)} Cr
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Realic Absorption Target:</span>
                    <span className="font-bold text-black">
                      {feasibilityResult.absorptionMonths} Months to 100% Exit
                    </span>
                  </div>
                </div>
              )}

              <div className="border-t border-neutral-200 mt-4 pt-4 space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-black">check</span>
                  Includes RERA compliant master escrow recommendations
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-black">check</span>
                  Zero upfront consultancy retainer required
                </div>
              </div>

              <button
                onClick={() => {
                  const formEl = document.getElementById('developer-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors text-center block cursor-pointer"
              >
                Request Full Confidential Corridor Dossier &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mandates & Case Studies */}
      <section className="py-16 bg-white border-y border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Proven Execution Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-black mt-1">
              Featured Developer Partnerships
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Realic sole-selling and JDA mandates that achieved benchmark pricing and record-speed sellouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-black border border-white/50">
                      {item.type}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-neutral-500 block mb-1">
                      {item.size}
                    </span>
                    <h3 className="font-bold text-sm text-black font-montserrat mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 flex items-center gap-1 mb-3">
                      <span className="material-symbols-outlined text-[13px]">location_on</span>
                      {item.location}
                    </p>

                    <div className="border-t border-neutral-200/60 pt-2.5 space-y-1.5 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Mandate GDV:</span>
                        <span className="font-bold text-black">{item.gdv}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Performance:</span>
                        <span className="font-bold text-emerald-600">{item.result}</span>
                      </div>
                      <p className="text-[10px] text-neutral-500 pt-1 leading-tight">
                        Role: {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Proposal Form */}
      <section id="developer-form" className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-surface-pure p-8 sm:p-12 rounded-3xl border border-border-subtle shadow-ambient">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Direct Executive Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-primary mt-1">
              Submit a Project or Land Parcel for Partnership
            </h2>
            <p className="text-xs sm:text-sm text-text-medium-emphasis mt-2">
              All submissions are reviewed directly by our Managing Partner under strict non-disclosure terms.
            </p>
          </div>

          {/* Partner Persona Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-neutral-100 rounded-2xl border border-neutral-200">
              {(['Developer / Builder', 'Landowner', 'Investor / Fund'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setPartnerType(type)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    partnerType === type
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-black">check_circle</span>
              <h3 className="text-lg font-bold text-black">Developer Proposal Received</h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto">
                Thank you, {fullName}. Our Executive Advisory Desk is analyzing your project details against recent corridor land registries. We will connect with you at {phone} within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitProposal} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. R. K. Singhania"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Developer Firm / Land Entity
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Sovereign Realty Projects LLP"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 91025 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Corridor / Location
                  </label>
                  <input
                    type="text"
                    value={locationCorridor}
                    onChange={(e) => setLocationCorridor(e.target.value)}
                    placeholder="e.g. Bailey Road, Whitefield..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Land / Project Scale
                  </label>
                  <input
                    type="text"
                    value={plotSize}
                    onChange={(e) => setPlotSize(e.target.value)}
                    placeholder="e.g. 20 Katha or 2 Acres"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Preferred Collaboration
                  </label>
                  <select
                    value={mandateScope}
                    onChange={(e) => setMandateScope(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none h-11 text-black"
                  >
                    <option>Exclusive Sole-Selling Mandate</option>
                    <option>Joint Development Agreement (JDA)</option>
                    <option>Development Management (DM)</option>
                    <option>Capital &amp; Inventory Offtake</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Project Highlights, Current Sanction Status &amp; Objectives
                </label>
                <textarea
                  value={proposalNotes}
                  onChange={(e) => setProposalNotes(e.target.value)}
                  placeholder="Outline current development status, number of planned units, RERA status, and key partnership goals..."
                  rows={3}
                  className="w-full p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs focus:border-black outline-none text-black"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:flex-1 py-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? 'Submitting Proposal...' : 'Submit Confidential Partnership Dossier'}
                </button>
                <a
                  href="tel:+919102599969"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  Direct Desk: +91 91025 99969
                </a>
              </div>
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
              Key operational, pricing, and legal questions on partnering with Realic Advisory.
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
