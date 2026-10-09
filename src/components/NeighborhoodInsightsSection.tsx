'use client';

import React from 'react';
import Link from 'next/link';

export const NeighborhoodInsightsSection: React.FC = () => {
  return (
    <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-sm md:py-section-gap-lg">
      <div className="mb-8 md:mb-12">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
          Neighborhood Insights
        </h2>
        <p className="font-body-md text-body-md text-text-medium-emphasis">
          Explore detailed insights into top localities to find your perfect fit.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-gutter h-auto md:h-[500px]">
        {/* Large Feature Block: AIIMS-Digha Corridor & Marine Drive */}
        <Link
          href="/properties?q=Digha"
          className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group cursor-pointer shadow-sm block min-h-[300px] md:min-h-full"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[300px] md:min-h-full"
            alt="Winsome Icon high-rise landmark towers on AIIMS-Digha elevated corridor in Patna"
            src="/images/projects/winsome-icon/day-elevation-glass-tower.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-headline-md text-headline-md text-on-primary mb-1">
              AIIMS-Digha &amp; Marine Drive
            </h3>
            <p className="font-body-md text-body-md text-on-primary/90">
              Patna's Riverfront Skyline &amp; Iconic 18-Storey High-Rises
            </p>
          </div>
        </Link>

        {/* Secondary Block 1: Atal Path 100-Ft Expressway */}
        <Link
          href="/properties?q=Atal"
          className="rounded-xl overflow-hidden relative group cursor-pointer shadow-sm block min-h-[200px]"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[200px]"
            alt="Durga Lifestyle residential tower on 100-Ft Atal Path corridor in Patna"
            src="/images/projects/durga-lifestyle/full-tower-elevation-atal-path.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">
              Atal Path Expressway
            </h3>
            <p className="font-body-sm text-on-primary/90">Presidential Gated Residences</p>
          </div>
        </Link>

        {/* Secondary Block 2: Bailey Road & Saguna More */}
        <Link
          href="/properties?q=Bailey"
          className="rounded-xl overflow-hidden relative group cursor-pointer shadow-sm block min-h-[200px]"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[200px]"
            alt="Venus Capital Heights 16-acre royal estate on Bailey Road corridor in Patna"
            src="/images/projects/venus-capital-heights/palatial-tower-facade-elevation.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">
              Bailey Road &amp; Saguna More
            </h3>
            <p className="font-body-sm text-on-primary/90">16-Acre Township &amp; Royal Enclaves</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
