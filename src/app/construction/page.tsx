import React from 'react';
import type { Metadata } from 'next';
import ConstructionClient from './ConstructionClient';

export const metadata: Metadata = {
  title: 'Turnkey Civil & Structural Construction | Realic Engineering',
  description:
    'Institutional-grade residential and commercial construction in Patna and Bihar growth corridors. Built to IS 456 Seismic Zone IV standards with live CCTV app tracking and zero cost escalation.',
  openGraph: {
    title: 'Turnkey Construction & Civil Engineering | Realic Property Consultant',
    description:
      'From architectural blueprint and municipal sanction to turnkey handover. Realic delivers luxury high-rises, gated communities, and bespoke residences with guaranteed timelines.',
    url: 'https://realicproperty.com/construction',
    images: [
      {
        url: '/images/projects/winsome-icon/day-elevation-glass-tower.jpg',
        width: 1200,
        height: 630,
        alt: 'Realic Turnkey Structural Construction Patna',
      },
    ],
  },
};

export default function ConstructionPage() {
  return <ConstructionClient />;
}
