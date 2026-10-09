import React from 'react';
import type { Metadata } from 'next';
import InteriorClient from './InteriorClient';

export const metadata: Metadata = {
  title: 'Bespoke Luxury Interiors & Turnkey Fit-Outs | Realic Living',
  description:
    'Haute couture interior architecture, German-engineered modular cabinetry, and Italian marble finishes with a guaranteed 45-day handover and 10-year warranty in Patna and Bihar luxury residences.',
  openGraph: {
    title: 'Bespoke Luxury Interiors | Realic Property Consultant',
    description:
      'Turnkey luxury residential & commercial fit-outs. Experience photorealistic 3D blueprints, precision factory millwork, and zero-headache delivery.',
    url: 'https://realicproperty.com/interior',
    images: [
      {
        url: '/images/projects/durga-lifestyle/living-dining-4bhk.jpg',
        width: 1200,
        height: 630,
        alt: 'Realic Luxury Interior Architecture Patna',
      },
    ],
  },
};

export default function InteriorPage() {
  return <InteriorClient />;
}
