'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Buy' | 'Sell'>('Buy');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'Sell') {
      router.push('/sell');
      return;
    }
    const params = new URLSearchParams();
    if (searchQuery.trim()) {
      params.set('q', searchQuery.trim());
    }
    router.push(`/properties?${params.toString()}`);
  };

  const popularSearches = [
    { label: 'AIIMS-Digha Corridor', href: '/properties?q=Digha' },
    { label: 'Atal Path Expressway', href: '/properties?q=Atal' },
    { label: 'Bailey Road', href: '/properties?q=Bailey' },
    { label: 'Danapur AIIMS', href: '/properties?q=Danapur' },
    { label: 'Ganga Marine Drive', href: '/properties?q=Marine' },
  ];

  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[780px] flex items-center overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
      {/* Full-Bleed Architectural Banner Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="High-end luxury modern villa with sleek architectural design"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic gradient overlay: top dark fade for navbar, left dark fade for text, right subtle dark fade to avoid image clash */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-slate-950/85"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Copy & Spacious Multi-Tab Search Box */}
          <div className="lg:col-span-7 flex flex-col gap-6 z-10">

            {/* Display Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-outfit text-white tracking-tight leading-[1.06] drop-shadow-md">
              Your Vision of Home, <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">
                Realized.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm font-light font-jakarta">
              Experience unmatched real estate consultancy in Patna. We blend data-driven market insights with boutique white-glove advisory to guide your high-stakes property decisions.
            </p>

            {/* Multi-Tab Luxury Search Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl mt-2 text-slate-900 card-hover-elevate">
              {/* Tabs: Buy / Sell */}
              <div className="flex gap-8 border-b border-slate-200 mb-6 pb-3">
                {(['Buy', 'Sell'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm sm:text-base font-bold pb-2 px-1 -mb-[13px] cursor-pointer transition-all ${
                      activeTab === tab
                        ? 'text-secondary border-b-2 border-secondary font-extrabold'
                        : 'text-slate-600 hover:text-slate-900 font-semibold'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Input Form with ample width */}
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow relative min-w-0">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    search
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by city, neighborhood, or project (e.g. Patna, Whitefield)..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-sm sm:text-base text-slate-900 transition-colors h-14 shadow-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent-orange text-white h-14 px-8 rounded-2xl font-bold text-sm sm:text-base shadow-md hover:bg-[#d44d1c] transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer active:scale-95 whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-lg">search</span>
                  Search Portfolio
                </button>
              </form>

              {/* Popular Corridor Tags */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-600 font-medium">Quick search:</span>
                {popularSearches.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-secondary/10 hover:text-secondary text-slate-700 font-semibold transition-colors border border-slate-200 shadow-xs"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Verified Luxury Showcase Card */}
          <div className="lg:col-span-5 relative hidden md:block">
            {/* Ambient subtle glow behind card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 to-secondary/20 rounded-3xl blur-2xl opacity-60"></div>

            {/* Elevated Glassmorphism Container with smooth floating animation */}
            <div className="relative rounded-3xl p-3 sm:p-3.5 bg-slate-900/60 backdrop-blur-xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group animate-float">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-h-[480px] rounded-2xl overflow-hidden">
                <img
                  src="/images/projects/winsome-icon-page-5.jpg"
                  alt="Winsome Icon - 18-Storey Ultra-Luxury Landmark on AIIMS-Digha Elevated Corridor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Clean vignette on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

                {/* Top status badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center">
                  <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/25 shadow-md flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-jakarta">
                      Flagship Landmark
                    </span>
                  </div>
                  <div className="bg-[#D4AF37] text-slate-950 px-2.5 py-1 rounded-full shadow-md text-xs font-extrabold flex items-center gap-1 font-jakarta">
                    <span className="material-symbols-outlined text-sm">hotel_class</span>
                    <span>Exclusive</span>
                  </div>
                </div>

                {/* Floating Property Spec Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl text-white">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-0.5 font-jakarta">
                        Patna • AIIMS-Digha Elevated Corridor
                      </span>
                      <h3 className="text-base font-bold font-outfit text-white line-clamp-1">
                        Winsome Icon
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 font-jakarta">
                        3 & 4 BHK • 18-Storey Landmark • RERA Approved
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-base sm:text-lg font-extrabold text-[#F3E5AB] font-outfit block">
                        ₹1.45 Cr
                      </span>
                      <Link
                        href="/properties/winsome-icon"
                        className="mt-1 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:brightness-110 px-3 py-1.5 rounded-lg inline-flex items-center gap-1 transition-all shadow-sm active:scale-95 font-jakarta"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Trust Chip */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#D4AF37]">gavel</span>
                  <span className="font-semibold text-slate-200">100% Legal Title Diligence</span>
                </div>
                <span className="text-slate-400 font-medium">Patna Prime Portfolio</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
