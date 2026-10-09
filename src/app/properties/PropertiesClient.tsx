'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { PROPERTIES, Property } from '@/data/properties';
import PropertyMap from '@/components/PropertyMap';
import { toast } from 'sonner';

export default function PropertiesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCity = searchParams?.get('city') || 'All';
  const initialType = searchParams?.get('type') || 'All';

  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedBhk, setSelectedBhk] = useState<number | 'All'>('All');
  const [priceFilterActive, setPriceFilterActive] = useState<boolean>(false);
  const [activePropertyId, setActivePropertyId] = useState<string | null>('winsome-icon');
  const [shortlisted, setShortlisted] = useState<Record<string, boolean>>({});
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showBhkDropdown, setShowBhkDropdown] = useState(false);
  const [mobileViewMode, setMobileViewMode] = useState<'list' | 'map'>('list');

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

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (selectedCity !== 'All' && p.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }
      if (selectedType !== 'All' && !p.propertyType.toLowerCase().includes(selectedType.toLowerCase())) {
        return false;
      }
      if (selectedBhk !== 'All' && p.bedrooms !== selectedBhk) {
        return false;
      }
      if (priceFilterActive && (p.price < 5000000 || p.price > 15000000)) {
        return false;
      }
      return true;
    });
  }, [selectedCity, selectedType, selectedBhk, priceFilterActive]);

  const activeProperty = useMemo(() => {
    if (!activePropertyId) return filteredProperties[0] || null;
    return PROPERTIES.find((p) => p.id === activePropertyId) || null;
  }, [activePropertyId, filteredProperties]);

  const handleMarkerSelect = (prop: Property) => {
    setActivePropertyId(prop.id);
    const element = document.getElementById(`property-${prop.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleCardClick = (prop: Property) => {
    setActivePropertyId(prop.id);
    router.push(`/properties/${prop.slug || prop.id}`);
  };

  return (
    <div className="flex-1 flex overflow-hidden w-full h-full bg-surface relative">
      {/* Left Panel: Listings */}
      <section
        className={`w-full lg:w-[45%] flex flex-col bg-surface border-r border-border-subtle shrink-0 h-full ${
          mobileViewMode === 'list' ? 'flex' : 'hidden lg:flex'
        }`}
      >
        {/* Filters Bar */}
        <div className="p-6 border-b border-border-subtle bg-surface-pure shrink-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-headline-md text-headline-md text-primary">
              {selectedCity === 'All'
                ? 'All Verified Estates'
                : `Properties in ${selectedCity}`}
            </h1>
            <span className="text-text-medium-emphasis text-sm">
              {filteredProperties.length} verified results
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar items-center">
            {/* Reset / All Filters */}
            <button
              onClick={() => {
                setSelectedCity('All');
                setSelectedType('All');
                setSelectedBhk('All');
                setPriceFilterActive(false);
                toast.info('Filters reset to default view');
              }}
              className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-full bg-surface-bright hover:bg-surface-variant transition-colors whitespace-nowrap cursor-pointer text-xs font-bold"
            >
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Reset</span>
            </button>

            {/* City Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCityDropdown(!showCityDropdown);
                  setShowTypeDropdown(false);
                  setShowBhkDropdown(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 border rounded-full whitespace-nowrap cursor-pointer transition-colors text-xs font-bold ${
                  selectedCity !== 'All'
                    ? 'border-secondary-container bg-secondary-fixed-dim/20 text-on-secondary-container'
                    : 'border-border-subtle bg-surface-bright hover:bg-surface-variant text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                <span>{selectedCity === 'All' ? 'City: All' : selectedCity}</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>

              {showCityDropdown && (
                <div className="absolute top-full mt-2 left-0 w-44 bg-white border border-border-subtle rounded-xl shadow-xl z-30 py-2">
                  {['All', 'Patna'].map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCityDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs hover:bg-surface text-primary font-medium flex items-center justify-between cursor-pointer"
                    >
                      {city === 'All' ? 'All Cities' : city}
                      {selectedCity === city && (
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Pill */}
            {priceFilterActive ? (
              <button
                onClick={() => setPriceFilterActive(false)}
                className="flex items-center gap-2 px-4 py-2 border border-secondary-container bg-secondary-fixed-dim/20 text-on-secondary-container rounded-full whitespace-nowrap cursor-pointer text-xs font-bold"
              >
                <span>Price: 50L - 1.5Cr</span>
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setPriceFilterActive(true);
                  toast.success('Filtered by Price: 50L - 1.5Cr');
                }}
                className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-full bg-surface-bright hover:bg-surface-variant transition-colors whitespace-nowrap cursor-pointer text-xs font-bold text-on-surface-variant"
              >
                <span>Price: 50L - 1.5Cr</span>
                <span className="material-symbols-outlined text-[16px]">add</span>
              </button>
            )}

            {/* Property Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowTypeDropdown(!showTypeDropdown);
                  setShowCityDropdown(false);
                  setShowBhkDropdown(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 border rounded-full whitespace-nowrap cursor-pointer transition-colors text-xs font-bold ${
                  selectedType !== 'All'
                    ? 'border-secondary-container bg-secondary-fixed-dim/20 text-on-secondary-container'
                    : 'border-border-subtle bg-surface-bright hover:bg-surface-variant text-on-surface'
                }`}
              >
                <span>
                  {selectedType === 'All' ? 'Property Type' : selectedType}
                </span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>

              {showTypeDropdown && (
                <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-border-subtle rounded-xl shadow-xl z-30 py-2">
                  {['All', 'Apartment', 'Penthouse', 'Villa'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setShowTypeDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs hover:bg-surface text-primary font-medium flex items-center justify-between cursor-pointer"
                    >
                      {type}
                      {selectedType === type && (
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* BHK Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowBhkDropdown(!showBhkDropdown);
                  setShowCityDropdown(false);
                  setShowTypeDropdown(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 border rounded-full whitespace-nowrap cursor-pointer transition-colors text-xs font-bold ${
                  selectedBhk !== 'All'
                    ? 'border-secondary-container bg-secondary-fixed-dim/20 text-on-secondary-container'
                    : 'border-border-subtle bg-surface-bright hover:bg-surface-variant text-on-surface'
                }`}
              >
                <span>
                  {selectedBhk === 'All' ? 'BHK' : `${selectedBhk} BHK`}
                </span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>

              {showBhkDropdown && (
                <div className="absolute top-full mt-2 left-0 w-40 bg-white border border-border-subtle rounded-xl shadow-xl z-30 py-2">
                  {(['All', 2, 3, 4, 5] as const).map((bhk) => (
                    <button
                      key={bhk}
                      onClick={() => {
                        setSelectedBhk(bhk);
                        setShowBhkDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs hover:bg-surface text-primary font-medium flex items-center justify-between cursor-pointer"
                    >
                      {bhk === 'All' ? 'All BHKs' : `${bhk} BHK`}
                      {selectedBhk === bhk && (
                        <span className="material-symbols-outlined text-secondary text-base">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Property Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-background">
          {filteredProperties.length === 0 ? (
            <div className="py-16 text-center">
              <span className="material-symbols-outlined text-4xl text-neutral-400 mb-2">apartment</span>
              <h3 className="text-lg font-bold text-primary">No properties matched your criteria</h3>
              <p className="text-sm text-text-medium-emphasis mt-1">
                Try resetting your filters or expanding your price range.
              </p>
              <button
                onClick={() => {
                  setSelectedCity('All');
                  setSelectedType('All');
                  setSelectedBhk('All');
                  setPriceFilterActive(false);
                }}
                className="mt-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredProperties.map((prop, idx) => {
              const isSelected = activePropertyId === prop.id;
              const isFav = shortlisted[prop.id];

              return (
                <article
                  key={prop.id}
                  id={`property-${prop.id}`}
                  onClick={() => handleCardClick(prop)}
                  onMouseEnter={() => {
                    setActivePropertyId(prop.id);
                  }}
                  className={`bg-surface-pure rounded-2xl border transition-all overflow-hidden flex flex-col sm:flex-row group cursor-pointer ${
                    isSelected
                      ? 'border-secondary shadow-[0_15px_30px_-5px_rgba(12,93,182,0.18)] ring-2 ring-secondary/50'
                      : 'border-border-subtle shadow-[0_10px_25px_-5px_rgba(0,35,73,0.06)] hover:shadow-[0_15px_30px_-5px_rgba(0,35,73,0.12)] hover:border-secondary/60'
                  }`}
                >
                  {/* Property Image Container */}
                  <div className="relative w-full sm:w-[40%] h-48 sm:h-auto shrink-0 bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={prop.title}
                      src={prop.images[0] || '/images/projects/winsome-icon/day-elevation-glass-tower.jpg'}
                    />
                    {prop.verified && (
                      <div className="absolute top-3 left-3 bg-secondary text-on-secondary px-2 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">verified</span> Verified
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-inverse-surface/80 text-inverse-on-surface px-2 py-1 rounded text-xs font-bold flex items-center gap-1 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-[14px]">photo_library</span>{' '}
                      {prop.images.length || (idx % 2 === 0 ? 12 : 8)}
                    </div>
                  </div>

                  {/* Property Card Body */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                          {prop.priceDisplay}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => toggleFavorite(prop.id, prop.title, e)}
                          className={`p-1 transition-colors cursor-pointer ${
                            isFav ? 'text-error' : 'text-outline hover:text-secondary-container'
                          }`}
                          aria-label="Add to favorites"
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0" }}
                          >
                            favorite
                          </span>
                        </button>
                      </div>

                      <p className="font-label-bold text-on-surface-variant mb-1">
                        {prop.bedrooms} BHK {prop.propertyType} • {prop.sqft.toLocaleString('en-IN')} sq.ft.
                      </p>

                      <p className="text-sm text-text-medium-emphasis flex items-center gap-1 mb-3">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>{' '}
                        {prop.locality || prop.location}, {prop.city}
                      </p>

                      {/* Highlight Description Box */}
                      {prop.tagline ? (
                        <div className="bg-surface-bright border border-surface-container-high rounded-xl p-2.5 mb-3 text-xs text-on-surface-variant line-clamp-2">
                          <span className="material-symbols-outlined text-[14px] inline-block align-text-bottom mr-1 text-secondary">
                            auto_awesome
                          </span>{' '}
                          {prop.tagline}
                        </div>
                      ) : prop.features && prop.features.length > 0 ? (
                        <div className="bg-surface-bright border border-surface-container-high rounded-xl p-2.5 mb-3 text-xs text-on-surface-variant line-clamp-2">
                          <span className="material-symbols-outlined text-[14px] inline-block align-text-bottom mr-1 text-secondary">
                            auto_awesome
                          </span>{' '}
                          {prop.features.slice(0, 2).join(' • ')}
                        </div>
                      ) : null}
                    </div>

                    <div className="pt-2 border-t border-border-subtle/60 flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="bg-surface-variant text-on-surface px-2 py-1 rounded font-medium">
                          {prop.status}
                        </span>
                        {prop.possessionDate && (
                          <span className="text-text-medium-emphasis">
                            Possession {prop.possessionDate}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-bold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Property Details
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                        <span className="text-[11px] text-text-medium-emphasis">
                          Click to open
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* Embedded Left Panel Footer to keep map full height */}
        <footer className="bg-primary text-on-primary font-label-sm text-label-sm w-full py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0 border-t border-primary/20">
          <Link href="/" className="shrink-0">
            <img
              alt="Realic Property Consultant"
              className="h-7 w-auto object-contain brightness-0 invert"
              src="/images/footer-logo.png"
            />
          </Link>
          <span className="text-xs text-on-primary-container">
            © 2024 Realic Property Consultant. All rights reserved.
          </span>
          <nav className="flex gap-4 text-xs text-on-primary-container">
            <Link className="hover:text-secondary-container transition-colors" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-secondary-container transition-colors" href="/terms">
              Terms of Service
            </Link>
          </nav>
        </footer>
      </section>

      {/* Right Panel: Interactive Live Geographic Map */}
      <section
        className={`w-full lg:w-[55%] relative bg-surface-container-highest h-full overflow-hidden select-none ${
          mobileViewMode === 'map' ? 'block' : 'hidden lg:block'
        }`}
      >
        <PropertyMap
          properties={filteredProperties}
          activePropertyId={activePropertyId}
          onSelectProperty={handleMarkerSelect}
          className="w-full h-full"
        />

        {/* Active Selected Property Floating Card Preview on Map */}
        {activeProperty && (
          <div
            className="absolute bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 z-[400] bg-white rounded-2xl shadow-2xl border border-border-subtle p-3 animate-in slide-in-from-bottom-3 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-32 w-full rounded-xl overflow-hidden mb-2 bg-surface-container">
              <img
                src={activeProperty.images[0] || '/images/projects/winsome-icon/day-elevation-glass-tower.jpg'}
                alt={activeProperty.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                <span className="material-symbols-outlined text-[12px]">verified</span> Verified
              </span>
              <button
                type="button"
                onClick={() => setActivePropertyId(null)}
                className="absolute top-2 right-2 bg-black/60 hover:bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs cursor-pointer transition-colors"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-base font-bold text-primary">
                  {activeProperty.priceDisplay}
                </span>
                <span className="text-xs text-text-medium-emphasis font-medium">
                  {activeProperty.bedrooms} BHK • {activeProperty.sqft} sq.ft.
                </span>
              </div>

              <p className="font-label-bold text-xs text-primary truncate">
                {activeProperty.title}
              </p>

              <p className="text-xs text-text-medium-emphasis flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-secondary">location_on</span>
                {activeProperty.locality || activeProperty.location}, {activeProperty.city}
              </p>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => router.push(`/properties/${activeProperty.slug || activeProperty.id}`)}
                  className="flex-1 py-2 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                >
                  Open Property Details
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Mobile Floating View Mode Switcher (List vs Map) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[500] flex items-center bg-primary text-white rounded-full shadow-2xl p-1 border border-white/20 backdrop-blur-md">
        <button
          onClick={() => setMobileViewMode('list')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
            mobileViewMode === 'list'
              ? 'bg-secondary text-white shadow-md'
              : 'text-neutral-300 hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined text-sm">view_list</span>
          <span>List</span>
        </button>
        <button
          onClick={() => setMobileViewMode('map')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
            mobileViewMode === 'map'
              ? 'bg-secondary text-white shadow-md'
              : 'text-neutral-300 hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined text-sm">map</span>
          <span>Map</span>
        </button>
      </div>
    </div>
  );
}
