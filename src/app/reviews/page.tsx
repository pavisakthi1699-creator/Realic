import React from 'react';
import type { Metadata } from 'next';
import ReviewsClient from './ReviewsClient';

export const metadata: Metadata = {
  title: 'Client Reviews & Endorsements | Realic Property Consultant',
  description:
    'Read verified client feedback from high-net-worth buyers, property sellers, and NRI investors in Patna. Rated 4.95/5 across 480+ luxury transactions.',
  openGraph: {
    title: 'Client Reviews & Testimonials | Realic Property Consultant',
    description:
      'Rated 4.95/5 across 480+ luxury transactions. Read verified feedback on legal title audit, instant valuation, and white-glove closing.',
    url: 'https://realicproperty.com/reviews',
  },
};

export default function ReviewsPage() {
  const jsonLdReviews = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Realic Property Consultant',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      reviewCount: '482',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReviews) }}
      />
      <ReviewsClient />
    </>
  );
}
