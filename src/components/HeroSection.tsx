'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Buy' | 'Sell'>('Buy');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
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

  return (
    <section className="relative min-h-[850px] lg:min-h-[921px] flex items-center bg-surface-pure hero-clip pb-16 overflow-hidden">
      {/* Background Architectural Luxury Villa with Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-right lg:bg-center w-full h-full opacity-60 lg:opacity-75 transition-opacity duration-700"
          style={{
            backgroundImage: `url('/images/hero-villa.jpg')`,
            backgroundPosition: 'right 20% center',
          }}
        />
        {/* Clean left-to-right fade gradient matching design template */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-pure via-surface-pure/90 lg:via-surface-pure/75 to-transparent" />
      </div>

      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        <div className="lg:col-span-8 space-y-8">
          {/* Main Title with enlarged impactful size and line break */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[90px] font-black text-text-high-emphasis leading-[1.03] tracking-tight font-montserrat">
            Your Vision of Home,<br />
            Realized.
          </h1>

          <p className="font-body-lg text-body-lg md:text-xl text-text-medium-emphasis max-w-2xl leading-relaxed">
            Experience unparalleled real estate consultancy. We blend data-driven insights with boutique service to guide your high-stakes property decisions.
          </p>

          {/* Interactive Search Console Card */}
          <div className="bg-surface-pure rounded-xl p-6 shadow-ambient border border-border-subtle max-w-3xl mt-8">
            {/* Tabs: Buy / Sell */}
            <div className="flex gap-6 border-b border-border-subtle mb-6 pb-2 font-label-bold text-label-bold text-on-surface-variant">
              {(['Buy', 'Sell'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer pb-2 px-2 transition-colors -mb-[9px] ${
                    activeTab === tab
                      ? 'text-primary-container border-b-2 border-primary-container font-bold'
                      : 'hover:text-primary-container'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input and Terracotta CTA Button */}
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by city, neighborhood, or zip code"
                  className="w-full h-14 pl-12 pr-4 rounded-lg border border-border-subtle focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-body-md text-body-md bg-surface-pure text-primary placeholder:text-neutral-400"
                />
              </div>
              <button
                type="submit"
                className="bg-[#ea5c27] hover:bg-[#d64f1d] text-white font-label-bold text-label-bold h-14 px-8 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
              >
                <span>Search Portfolio</span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
