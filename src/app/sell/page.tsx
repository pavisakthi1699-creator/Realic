import React from 'react';
import type { Metadata } from 'next';
import SellClient from './SellClient';

export const metadata: Metadata = {
  title: 'Sell Your Property Seamlessly | Instant Cash Offer & Valuation',
  description:
    'Sell your luxury apartment, penthouse, or villa in Patna or Bangalore without public showings or staging. Receive a data-backed valuation and closing certainty within 24 hours.',
  openGraph: {
    title: 'Sell Your Property Fast | Realic Property Consultant',
    description:
      'Zero showings, zero broker commissions, and guaranteed liquidity on your preferred timeline.',
    url: 'https://realicproperty.com/sell',
  },
};

export default function SellPage() {
  return <SellClient />;
}
