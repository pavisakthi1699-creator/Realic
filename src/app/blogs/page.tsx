import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import BlogsClient from './BlogsClient';

export const metadata: Metadata = {
  title: 'Real Estate Research, Market Trends & Legal Diligence | Realic Property Consultant',
  description:
    'Authoritative market intelligence, Patna luxury real estate boom analysis, RERA legal due diligence frameworks, and high-end property investment strategies.',
  openGraph: {
    title: 'Real Estate Market Intelligence & Legal Diligence | Realic Property Consultant',
    description:
      'Read in-depth market reports, infrastructure corridor analyses, and institutional title due diligence guides from Realic property advisors.',
    url: 'https://realicproperty.com/blogs',
  },
};

export default function BlogsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center p-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-semibold text-neutral-600">
              Loading market intelligence journal...
            </p>
          </div>
        </div>
      }
    >
      <BlogsClient />
    </Suspense>
  );
}
