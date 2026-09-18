'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PROPERTIES, Property } from '@/data/properties';
import { toast } from 'sonner';

export default function PropertiesClient() {
  const searchParams = useSearchParams();
  const initialCity = searchParams?.get('city') || 'All';
  const initialQuery = searchParams?.get('q') || '';
  const initialType = searchParams?.get('type') || 'All';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedBhk, setSelectedBhk] = useState<number | 'All'>('All');
  const [maxPrice, setMaxPrice] = useState<number>(75000000); // 7.5 Cr
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'area'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [activePropertyId, setActivePropertyId] = useState<string>(PROPERTIES[0]?.id || '');
  const [shortlisted, setShortlisted] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, title: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !shortlisted[id];
    setShortlisted((prev) => ({ ...prev, [id]: nextState }));
    if (nextState) {
      toast.success(`Saved "${title}" to your shortlist`);
    } else {
      toast.info(`Removed from shortlist`);
    }
  };

  // Filter properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchLoc = p.location.toLowerCase().includes(q);
        const matchLocality = p.locality.toLowerCase().includes(q);
        const matchCity = p.city.toLowerCase().includes(q);
        if (!matchTitle && !matchLoc && !matchLocality && !matchCity) return false;
      }

      // City / Corridor filter
      if (selectedCity !== 'All') {
        const sc = selectedCity.toLowerCase();
        const matches =
          p.locality.toLowerCase().includes(sc) ||
          p.location.toLowerCase().includes(sc) ||
          p.address.toLowerCase().includes(sc);
        if (!matches) return false;
      }

      // Type filter
      if (selectedType !== 'All' && !p.propertyType.toLowerCase().includes(selectedType.toLowerCase())) {
        return false;
      }

      // BHK filter
      if (selectedBhk !== 'All' && p.bedrooms !== selectedBhk) {
        return false;
      }

      // Max price filter
      if (p.price > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'area') return b.sqft - a.sqft;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCity, selectedType, selectedBhk, maxPrice, sortBy]);

  const activeProperty = useMemo(() => {
    return PROPERTIES.find((p) => p.id === activePropertyId) || filteredProperties[0] || PROPERTIES[0];
  }, [activePropertyId, filteredProperties]);

  return (
    <div className="min-h-screen bg-surface">
      {/* Header Bar */}
      <div className="bg-surface-pure border-b border-border-subtle py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-text-medium-emphasis mb-1">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-primary font-semibold">Properties</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-primary font-montserrat tracking-tight">
                Verified Residences & Curated Estates
              </h1>
              <p className="text-xs md:text-sm text-text-medium-emphasis mt-1">
                Showing {filteredProperties.length} verified Realic projects in Patna with complete title audit.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <div className="bg-surface-container-low p-1 rounded-xl flex items-center border border-border-subtle">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'grid'
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">grid_view</span>
                  Grid View
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'map'
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">map</span>
                  Map View
                </button>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mt-6 pt-6 border-t border-border-subtle/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search Input */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-base">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search location or title..."
                className="w-full pl-9 pr-3 py-2 bg-surface text-xs rounded-lg border border-border-subtle focus:border-secondary outline-none h-10"
              />
            </div>

            {/* Corridor Select */}
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 bg-surface text-xs rounded-lg border border-border-subtle focus:border-secondary outline-none font-medium h-10"
              >
                <option value="All">All Prime Corridors</option>
                <option value="Digha">AIIMS-Digha & Marine Drive</option>
                <option value="Atal Path">100-Ft Atal Path</option>
                <option value="Bailey Road">Bailey Road Corridor</option>
                <option value="Danapur">Danapur & Khagaul</option>
              </select>
            </div>

            {/* Property Type Select */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 bg-surface text-xs rounded-lg border border-border-subtle focus:border-secondary outline-none font-medium h-10"
              >
                <option value="All">All Property Types</option>
                <option value="Penthouse">Sky Penthouse</option>
                <option value="Villa">Contemporary Villa</option>
                <option value="Luxury Apartment">Luxury Apartment</option>
                <option value="Independent House">Heritage Bungalow</option>
              </select>
            </div>

            {/* Bedrooms Select */}
            <div>
              <select
                value={selectedBhk === 'All' ? 'All' : String(selectedBhk)}
                onChange={(e) => setSelectedBhk(e.target.value === 'All' ? 'All' : Number(e.target.value))}
                className="w-full px-3 py-2 bg-surface text-xs rounded-lg border border-border-subtle focus:border-secondary outline-none font-medium h-10"
              >
                <option value="All">All Bedrooms (BHK)</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>

            {/* Sort Select */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 bg-surface text-xs rounded-lg border border-border-subtle focus:border-secondary outline-none font-medium h-10"
              >
                <option value="featured">Sort: Curated Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="area">Area: Largest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {viewMode === 'grid' ? (
          /* Grid View Layout */
          <div>
            {filteredProperties.length === 0 ? (
              <div className="bg-surface-pure rounded-2xl border border-border-subtle p-12 text-center max-w-md mx-auto">
                <span className="material-symbols-outlined text-4xl text-outline mb-2">
                  search_off
                </span>
                <h3 className="text-lg font-bold text-primary">No properties matched your criteria</h3>
                <p className="text-xs text-text-medium-emphasis mt-1">
                  Try adjusting your filters, searching for a different city or clearing the search text.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCity('All');
                    setSelectedType('All');
                    setSelectedBhk('All');
                  }}
                  className="mt-4 px-4 py-2 bg-secondary text-white text-xs font-bold rounded-lg"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((prop) => {
                  const isFav = !!shortlisted[prop.id];

                  return (
                    <div
                      key={prop.id}
                      className="bg-surface-pure rounded-2xl border border-border-subtle overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all flex flex-col group"
                    >
                      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                        <img
                          src={prop.images[0]}
                          alt={prop.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                            {prop.status}
                          </span>
                          <span className="bg-secondary/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {prop.city}
                          </span>
                        </div>

                        <button
                          onClick={(e) => toggleFavorite(prop.id, prop.title, e)}
                          aria-label="Save property"
                          className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer ${
                            isFav ? 'bg-red-500 text-white' : 'bg-black/40 hover:bg-black/60 text-white'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[17px]">favorite</span>
                        </button>

                        <div className="absolute bottom-3 left-3 bg-surface-pure/95 backdrop-blur-md px-3 py-1 rounded-lg border border-white/40 shadow-sm">
                          <span className="text-sm font-extrabold text-primary font-montserrat">
                            {prop.priceDisplay}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 flex flex-col flex-grow justify-between">
                        <div>
                          <Link href={`/properties/${prop.slug}`} className="hover:text-secondary transition-colors">
                            <h3 className="font-bold text-base text-primary font-montserrat line-clamp-1">
                              {prop.title}
                            </h3>
                          </Link>
                          <p className="text-xs text-text-medium-emphasis flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[14px] text-outline">
                              location_on
                            </span>
                            {prop.location}
                          </p>

                          <div className="grid grid-cols-3 gap-2 py-3 my-2 border-y border-border-subtle/80 text-xs text-on-surface-variant">
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm text-secondary">
                                bed
                              </span>
                              <span>{prop.bedrooms} Beds</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm text-secondary">
                                bathtub
                              </span>
                              <span>{prop.bathrooms} Baths</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm text-secondary">
                                straighten
                              </span>
                              <span>{prop.sqft.toLocaleString()} sqft</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                            {prop.reraId}
                          </span>
                          <Link
                            href={`/properties/${prop.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-secondary hover:text-primary transition-colors"
                          >
                            Explore
                            <span className="material-symbols-outlined text-xs">arrow_forward</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Interactive Map View Layout (as featured in property_search_premium_map_view) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[750px]">
            {/* Left Column: Properties List */}
            <div className="lg:col-span-5 h-full overflow-y-auto pr-2 space-y-4">
              {filteredProperties.map((prop) => {
                const isSelected = prop.id === activeProperty.id;

                return (
                  <div
                    key={prop.id}
                    onClick={() => setActivePropertyId(prop.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex gap-4 ${
                      isSelected
                        ? 'bg-surface-pure border-secondary shadow-md ring-2 ring-secondary/20'
                        : 'bg-surface-pure border-border-subtle hover:border-secondary/50 shadow-xs'
                    }`}
                  >
                    <div className="w-28 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 relative">
                      <img
                        src={prop.images[0]}
                        alt={prop.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-1 left-1 bg-primary/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        {prop.city}
                      </span>
                    </div>

                    <div className="flex flex-col justify-between flex-grow min-w-0">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-extrabold text-secondary font-montserrat">
                            {prop.priceDisplay}
                          </span>
                          <span className="text-[10px] text-green-700 font-semibold bg-green-50 px-1.5 py-0.2 rounded border border-green-200">
                            Verified
                          </span>
                        </div>
                        <h4 className="font-bold text-xs text-primary font-montserrat truncate mt-0.5">
                          {prop.title}
                        </h4>
                        <p className="text-[11px] text-text-medium-emphasis truncate mt-0.5">
                          {prop.locality}, {prop.city}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-2 border-t border-border-subtle/50">
                        <span>{prop.bedrooms} BHK • {prop.sqft.toLocaleString()} sqft</span>
                        <Link
                          href={`/properties/${prop.slug}`}
                          className="text-xs font-bold text-secondary hover:underline flex items-center gap-0.5"
                        >
                          Details &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Interactive Map Canvas */}
            <div className="lg:col-span-7 h-full bg-slate-900 rounded-2xl overflow-hidden relative border border-border-subtle shadow-ambient flex flex-col">
              {/* Map Canvas Background (Simulated Architectural Map) */}
              <div className="absolute inset-0 bg-[#0f172a] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-90"></div>

              {/* Top Map Status */}
              <div className="relative z-10 p-4 bg-primary/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold">Interactive Geographic Index</span>
                  <span className="text-white/60">({filteredProperties.length} active pins)</span>
                </div>
                <span className="text-[11px] text-primary-fixed-dim hidden sm:inline">
                  Click on pins to preview estate dossier
                </span>
              </div>

              {/* Map Pins Simulation Canvas */}
              <div className="relative flex-grow flex items-center justify-center p-8">
                {/* SVG Roads & River Backdrop */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 100 Q 250 200 450 150 T 800 350" fill="none" stroke="#38bdf8" strokeWidth="4" />
                  <path d="M 100 450 Q 300 300 600 400 T 900 200" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="6,6" />
                  <path d="M 200 50 Q 400 400 700 600" fill="none" stroke="#64748b" strokeWidth="2" />
                </svg>

                {/* Simulated Pins for each property */}
                <div className="relative w-full h-full">
                  {filteredProperties.map((prop, idx) => {
                    const isSelected = prop.id === activeProperty.id;
                    // Distribute pins visually across the map area
                    const positions = [
                      { top: '35%', left: '42%' },
                      { top: '55%', left: '68%' },
                      { top: '25%', left: '22%' },
                      { top: '65%', left: '32%' },
                      { top: '40%', left: '78%' },
                      { top: '75%', left: '55%' },
                    ];
                    const pos = positions[idx % positions.length];

                    return (
                      <button
                        key={prop.id}
                        onClick={() => setActivePropertyId(prop.id)}
                        style={{ top: pos.top, left: pos.left }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 cursor-pointer ${
                          isSelected ? 'scale-110 z-30' : 'hover:scale-105'
                        }`}
                      >
                        <div
                          className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 transition-all border ${
                            isSelected
                              ? 'bg-accent-orange text-white border-white ring-4 ring-accent-orange/40'
                              : 'bg-white text-primary border-slate-300 hover:bg-secondary hover:text-white'
                          }`}
                        >
                          <span className="material-symbols-outlined text-xs">
                            {prop.propertyType === 'Villa' ? 'villa' : 'apartment'}
                          </span>
                          <span>{prop.priceDisplay}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Property Popup on Map */}
                <div className="absolute bottom-6 left-6 right-6 z-30 bg-surface-pure/95 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl p-4 flex flex-col sm:flex-row items-center gap-4 animate-in slide-in-from-bottom-2">
                  <img
                    src={activeProperty.images[0]}
                    alt={activeProperty.title}
                    className="w-full sm:w-36 h-24 rounded-xl object-cover"
                  />
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                        {activeProperty.city}
                      </span>
                      <span className="text-xs font-bold text-primary">
                        {activeProperty.priceDisplay}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-primary font-montserrat mt-1 truncate">
                      {activeProperty.title}
                    </h4>
                    <p className="text-xs text-text-medium-emphasis truncate">
                      {activeProperty.address}
                    </p>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      {activeProperty.bedrooms} Beds • {activeProperty.bathrooms} Baths • {activeProperty.sqft.toLocaleString()} sq.ft
                    </p>
                  </div>
                  <Link
                    href={`/properties/${activeProperty.slug}`}
                    className="w-full sm:w-auto px-5 py-2.5 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-xl transition-colors whitespace-nowrap text-center"
                  >
                    View Full Dossier
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
