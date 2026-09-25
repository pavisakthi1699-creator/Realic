import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { TrustPillarsSection } from '@/components/TrustPillarsSection';
import { CuratedEstatesSection } from '@/components/CuratedEstatesSection';
import { MortgageCalculatorSection } from '@/components/MortgageCalculatorSection';
import { NeighborhoodInsightsSection } from '@/components/NeighborhoodInsightsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Asymmetrical Split with Copy & High-Fidelity Imagery) */}
      <HeroSection />

      {/* 2. Three Pillars of Trust Section */}
      <TrustPillarsSection />

      {/* 3. Curated Estates Section */}
      <CuratedEstatesSection />

      {/* 4. Plan Your Future Home (Loan Parameters & Estimated Monthly Payment) */}
      <MortgageCalculatorSection />

      {/* 5. Neighborhood Insights Bento Grid (South Delhi, Bandra West, Whitefield) */}
      <NeighborhoodInsightsSection />
    </div>
  );
}
