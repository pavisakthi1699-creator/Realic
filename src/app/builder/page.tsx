import React from 'react';
import type { Metadata } from 'next';
import BuilderClient from './BuilderClient';

export const metadata: Metadata = {
  title: 'Builder & Developer Advisory | Joint Development & Sole-Selling | Realic',
  description:
    'Institutional partner for real estate developers and landowners in Patna and Bihar growth corridors. Accelerate absorption with sole-selling mandates, JV/JDA structuring, and Gross Development Value (GDV) optimization.',
  openGraph: {
    title: 'Developer Advisory & Joint Development Mandates | Realic',
    description:
      'Partner with Realic for exclusive project sole-selling, JDA structuring, and high-velocity HNI investor syndication with 100% RERA compliance.',
    url: 'https://realicproperty.com/builder',
    images: [
      {
        url: '/images/projects/venus-capital-heights/palatial-tower-facade-elevation.jpg',
        width: 1200,
        height: 630,
        alt: 'Realic Developer & Builder Advisory Patna',
      },
    ],
  },
};

export default function BuilderPage() {
  return <BuilderClient />;
}
