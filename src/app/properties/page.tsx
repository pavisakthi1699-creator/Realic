import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import PropertiesClient from './PropertiesClient';

export const metadata: Metadata = {
  title: 'Realic Property Consultant - Search',
  description:
    'Search verified luxury residences, sky penthouses, and gated modern villas in Bangalore and premier corridors. Filter by BHK, price, and neighborhood with interactive map search.',
  openGraph: {
    title: 'Realic Property Consultant - Search',
    description:
      'Search verified luxury residences, sky penthouses, and gated modern villas in Bangalore with interactive map view and full legal verification.',
    url: 'https://realicproperty.com/properties',
  },
};

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center p-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-semibold text-text-medium-emphasis">
              Loading verified properties...
            </p>
          </div>
        </div>
      }
    >
      <PropertiesClient />
    </Suspense>
  );
}
