import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustPillarsSection } from './components/TrustPillarsSection';
import { CuratedEstatesSection, Property } from './components/CuratedEstatesSection';
import { MortgageCalculatorSection } from './components/MortgageCalculatorSection';
import { NeighborhoodInsightsSection } from './components/NeighborhoodInsightsSection';
import { Footer } from './components/Footer';
import { InstantOfferModal, SignInModal, PropertyDetailModal } from './components/Modals';

export default function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isInstantOfferOpen, setIsInstantOfferOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [searchNotification, setSearchNotification] = useState<string | null>(null);

  const handleSearch = (query: string, tab: string) => {
    const message = query.trim()
      ? `Searching ${tab} properties matching "${query}"...`
      : `Showing top ${tab} properties...`;
    setSearchNotification(message);
    setTimeout(() => setSearchNotification(null), 3000);
  };

  const handleNeighborhoodSelect = (name: string) => {
    setSearchNotification(`Showing luxury estates in ${name}`);
    setTimeout(() => setSearchNotification(null), 3000);
  };

  return (
    <div className="bg-surface-pure text-on-surface font-body-md antialiased min-h-screen flex flex-col selection:bg-secondary selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenSignIn={() => setIsSignInOpen(true)}
        onOpenInstantOffer={() => setIsInstantOfferOpen(true)}
      />

      {/* Toast Notification */}
      {searchNotification && (
        <div className="fixed top-20 right-6 z-50 bg-primary text-white text-sm font-semibold px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 border border-primary-fixed-dim/30 animate-in slide-in-from-right duration-300">
          <span className="material-symbols-outlined text-secondary-container">search</span>
          {searchNotification}
        </div>
      )}

      {/* Main Canvas */}
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection onSearch={handleSearch} />

        {/* Three Pillars of Trust */}
        <TrustPillarsSection />

        {/* Curated Estates */}
        <CuratedEstatesSection onSelectProperty={(prop) => setSelectedProperty(prop)} />

        {/* Loan / Mortgage Calculator */}
        <MortgageCalculatorSection />

        {/* Neighborhood Insights */}
        <NeighborhoodInsightsSection onSelectNeighborhood={handleNeighborhoodSelect} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <InstantOfferModal isOpen={isInstantOfferOpen} onClose={() => setIsInstantOfferOpen(false)} />
      <PropertyDetailModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </div>
  );
}
