'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROPERTIES, Property } from '@/data/properties';
import { toast } from 'sonner';

export type { Property };

export const CuratedEstatesSection: React.FC = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

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

  return (
    <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-sm md:py-section-gap-lg">
      <div className="flex justify-between items-end mb-8 md:mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Curated Estates</h2>
          <p className="font-body-md text-body-md text-text-medium-emphasis">
            Handpicked, verified homes ready for your arrival.
          </p>
        </div>
        <Link
          className="hidden md:flex items-center gap-1 font-label-bold text-secondary hover:text-primary transition-colors"
          href="/properties"
        >
          View All Collection{' '}
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            arrow_forward
          </span>
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {PROPERTIES.slice(0, 3).map((property: Property) => {
          const isFav = !!favorites[property.id];

          return (
            <div
              key={property.id}
              className="bg-surface-pure border border-border-subtle rounded-lg overflow-hidden group hover:shadow-ambient transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={property.title}
                  src={property.images[0]}
                />
                {/* Verified Badge */}
                <div className="absolute top-4 left-4 bg-surface-pure/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 border border-border-subtle shadow-sm">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="font-label-sm text-label-sm text-primary">Verified</span>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 bg-surface-pure px-2 py-1 rounded shadow-sm">
                  <span className="font-label-sm text-label-sm text-text-high-emphasis">
                    {property.status || 'Ready to Move'}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    {property.priceDisplay?.includes('₹') ? property.priceDisplay : `₹${property.priceDisplay}`}
                  </h3>
                  <button
                    onClick={(e) => toggleFavorite(property.id, property.title, e)}
                    aria-label="Save property"
                    className="text-outline hover:text-error transition-colors cursor-pointer"
                  >
                    <span
                      className={`material-symbols-outlined ${
                        isFav ? 'text-error fill-current' : ''
                      }`}
                    >
                      {isFav ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>
                </div>

                <p className="font-body-md text-body-md text-text-high-emphasis mb-1 font-semibold line-clamp-1">
                  {property.title}
                </p>
                <p className="font-body-sm text-text-medium-emphasis mb-4 line-clamp-1">
                  {property.location}
                </p>

                {/* Specs */}
                <div className="flex gap-4 border-t border-border-subtle pt-4 mt-auto mb-6">
                  <div className="flex items-center gap-1 text-text-medium-emphasis">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      bed
                    </span>
                    <span className="font-label-sm text-label-sm">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-medium-emphasis">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      bathtub
                    </span>
                    <span className="font-label-sm text-label-sm">{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-medium-emphasis">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      square_foot
                    </span>
                    <span className="font-label-sm text-label-sm">
                      {property.sqft.toLocaleString()} sqft
                    </span>
                  </div>
                </div>

                {/* View Details Button */}
                <Link
                  href={`/properties/${property.slug}`}
                  className="w-full py-2.5 border border-primary text-primary font-label-bold rounded hover:bg-primary hover:text-on-primary transition-colors text-center block"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile view all link */}
      <Link
        href="/properties"
        className="md:hidden mt-8 w-full py-3 border border-border-subtle rounded text-primary font-label-bold flex items-center justify-center gap-2 hover:bg-surface transition-colors"
      >
        View All Collection{' '}
        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
          arrow_forward
        </span>
      </Link>
    </section>
  );
};
