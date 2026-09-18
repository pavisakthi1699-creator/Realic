'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROPERTIES, Property } from '@/data/properties';
import { toast } from 'sonner';

export type { Property };

export const CuratedEstatesSection: React.FC = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Digha & Marine Drive' | 'Atal Path & Bailey Rd' | 'Danapur'>('All');

  const toggleFavorite = (id: string, title: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !favorites[id];
    setFavorites((prev) => ({ ...prev, [id]: nextState }));
    if (nextState) {
      toast.success(`Saved "${title}" to your shortlisted estates`);
    } else {
      toast.info(`Removed "${title}" from shortlist`);
    }
  };

  const filtered = PROPERTIES.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Digha & Marine Drive') {
      return p.locality === 'Digha' || p.locality === 'Marine Drive';
    }
    if (activeFilter === 'Atal Path & Bailey Rd') {
      return p.locality === 'Atal Path' || p.locality === 'Bailey Road';
    }
    if (activeFilter === 'Danapur') {
      return p.locality === 'Danapur';
    }
    return true;
  });

  return (
    <section className="py-16 md:py-24 bg-surface max-w-7xl mx-auto px-4 md:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-2">
            <span className="material-symbols-outlined text-sm">stars</span>
            Portfolio Exclusives
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-outfit tracking-tight">
            Curated Estates
          </h2>
          <p className="text-text-medium-emphasis text-sm md:text-base mt-1.5 max-w-xl">
            Every residence is physically audited, RERA-validated, and priced at verified market valuation.
          </p>
        </div>

        {/* Filters & Currency Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-surface-pure border border-border-subtle p-1 rounded-xl flex items-center shadow-xs">
            {(['All', 'Digha & Marine Drive', 'Atal Path & Bailey Rd', 'Danapur'] as const).map((corridor) => (
              <button
                key={corridor}
                onClick={() => setActiveFilter(corridor)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFilter === corridor
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {corridor}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
            className="px-3 py-1.5 rounded-xl border border-border-subtle bg-surface-pure text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 shadow-xs"
          >
            <span className="material-symbols-outlined text-sm">currency_exchange</span>
            {currency}
          </button>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.slice(0, 6).map((property: Property) => {
          const isFav = !!favorites[property.id];
          const displayPrice = currency === 'INR' ? property.priceDisplay : (property.priceUsd || property.priceDisplay);

          return (
            <div
              key={property.id}
              className="bg-surface-pure rounded-2xl border border-border-subtle overflow-hidden shadow-ambient hover:shadow-ambient-lg card-hover-elevate flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                  <span className="bg-primary/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-jakarta">
                    {property.status}
                  </span>
                  <span className="bg-secondary/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full font-jakarta">
                    {property.city}
                  </span>
                </div>

                {/* Heart Favorite */}
                <button
                  onClick={(e) => toggleFavorite(property.id, property.title, e)}
                  aria-label="Save property"
                  className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer shadow-sm ${
                    isFav
                      ? 'bg-red-500 text-white'
                      : 'bg-black/30 hover:bg-black/50 text-white'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[19px] ${
                      isFav ? 'fill-current' : ''
                    }`}
                  >
                    favorite
                  </span>
                </button>

                {/* Price pill */}
                <div className="absolute bottom-3.5 left-3.5 bg-surface-pure/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/40 shadow-md">
                  <span className="text-base font-extrabold text-primary font-outfit">
                    {displayPrice}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <Link
                    href={`/properties/${property.slug}`}
                    className="group-hover:text-secondary transition-colors"
                  >
                    <h3 className="font-outfit font-bold text-lg text-primary line-clamp-1">
                      {property.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-text-medium-emphasis flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[15px] text-outline">
                      location_on
                    </span>
                    {property.location}
                  </p>

                  {/* Specs row */}
                  <div className="grid grid-cols-3 gap-2 py-4 my-3 border-y border-border-subtle/80 text-xs text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-secondary">
                        bed
                      </span>
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-secondary">
                        bathtub
                      </span>
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-secondary">
                        straighten
                      </span>
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-200">
                    RERA Compliant
                  </span>
                  <Link
                    href={`/properties/${property.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-secondary hover:text-primary transition-colors"
                  >
                    View Details
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explore All CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-sm rounded-xl hover:bg-secondary transition-all shadow-md active:scale-95"
        >
          <span>Explore All Properties & Map View</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
};
