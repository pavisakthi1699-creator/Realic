import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { TrustPillarsSection } from '@/components/TrustPillarsSection';
import { CuratedEstatesSection } from '@/components/CuratedEstatesSection';
import { MortgageCalculatorSection } from '@/components/MortgageCalculatorSection';
import { NeighborhoodInsightsSection } from '@/components/NeighborhoodInsightsSection';
import { REVIEWS } from '@/data/reviews';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero with live multi-tab search */}
      <HeroSection />

      {/* 2. Three Pillars of Trust */}
      <TrustPillarsSection />

      {/* 3. Curated Estates Catalog */}
      <CuratedEstatesSection />

      {/* 4. Patna Growth Corridors Showcase */}
      <section className="py-16 bg-surface-container-low border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Regional Hubs
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-outfit tracking-tight mt-1">
                Browse Prime Corridors
              </h2>
              <p className="text-text-medium-emphasis text-sm mt-1">
                Explore hand-vetted, RERA-approved developments across Patna's highest-growth infrastructure axes.
              </p>
            </div>
            <Link
              href="/properties"
              className="text-sm font-bold text-secondary hover:text-primary flex items-center gap-1 transition-colors"
            >
              View all 9 projects
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: AIIMS-Digha Elevated Corridor */}
            <Link
              href="/properties?q=Digha"
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-ambient transition-all"
            >
              <img
                src="/images/projects/winsome-icon-page-5.jpg"
                alt="AIIMS-Digha Elevated Corridor, Patna"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary-container">
                  Patna • Pillar 242
                </span>
                <h3 className="text-xl font-bold text-white font-outfit">AIIMS-Digha Corridor</h3>
                <p className="text-xs text-white/80 mt-1">
                  Winsome Icon & Pearlz • 18-Storey High-Rise
                </p>
              </div>
            </Link>

            {/* Card 2: 100-Ft Atal Path Expressway */}
            <Link
              href="/properties?q=Atal"
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-ambient transition-all"
            >
              <img
                src="/images/projects/durga-lifestyle-page-2.jpg"
                alt="100-Ft Atal Path Expressway, Patna"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary-container">
                  Patna • 100-Ft Expressway
                </span>
                <h3 className="text-xl font-bold text-white font-outfit">Atal Path Expressway</h3>
                <p className="text-xs text-white/80 mt-1">
                  Durga Lifestyle • 32 Exclusive Presidential Homes
                </p>
              </div>
            </Link>

            {/* Card 3: Danapur / AIIMS Corridor */}
            <Link
              href="/properties?q=Danapur"
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-ambient transition-all"
            >
              <img
                src="/images/projects/winsome-elite-page-3.jpg"
                alt="Danapur / AIIMS Corridor, Patna"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary-container">
                  Patna • Danapur
                </span>
                <h3 className="text-xl font-bold text-white font-outfit">Danapur Growth Axis</h3>
                <p className="text-xs text-white/80 mt-1">
                  Venus Capital & KB Boulevard • 20-Ft Driveways
                </p>
              </div>
            </Link>

            {/* Card 4: JP Ganga Path / Marine Drive */}
            <Link
              href="/properties?q=Marine"
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-ambient transition-all"
            >
              <img
                src="/images/projects/winsome-hari-pearlz-page-2.jpg"
                alt="JP Ganga Path / Marine Drive, Patna"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary-container">
                  Patna • Riverfront
                </span>
                <h3 className="text-xl font-bold text-white font-outfit">Ganga Marine Drive</h3>
                <p className="text-xs text-white/80 mt-1">
                  Winsome Hari Pearlz • Riverside Luxury & Retail
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Sell Your Home Instant Valuation Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-secondary-container text-xs font-semibold mb-3">
              <span className="material-symbols-outlined text-sm">flash_on</span>
              No Open Houses • Zero Showings
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat tracking-tight text-white">
              Planning to Sell Your Property?
            </h2>
            <p className="text-primary-fixed-dim text-base mt-2 leading-relaxed">
              Receive a data-backed valuation and direct institutional offer within 24 hours. Choose your closing date with guaranteed liquidity.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link
              href="/sell"
              className="px-8 py-4 bg-accent-orange text-white font-bold text-sm rounded-xl hover:bg-[#d44d1c] transition-all text-center shadow-lg active:scale-95"
            >
              Get Instant Valuation Offer
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-all text-center"
            >
              Talk to Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Mortgage & Loan Calculator */}
      <MortgageCalculatorSection />

      {/* 7. Neighborhood Insights */}
      <NeighborhoodInsightsSection />

      {/* 8. Client Testimonials Spotlight */}
      <section className="py-20 bg-surface border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Reputation & Trust
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-montserrat tracking-tight mt-1">
              Endorsed by Discerning Clients
            </h2>
            <p className="text-text-medium-emphasis text-sm mt-2">
              Over 480+ verified high-value transactions conducted with transparent escrow and institutional diligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-surface-pure p-6 rounded-2xl border border-border-subtle shadow-ambient flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                      Verified {review.transactionType}
                    </span>
                  </div>
                  <h4 className="font-bold text-primary text-base font-montserrat">
                    "{review.headline}"
                  </h4>
                  <p className="text-text-medium-emphasis text-xs leading-relaxed mt-2 line-clamp-4">
                    {review.content}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-border-subtle flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-bold text-primary text-xs">{review.author}</h5>
                    <p className="text-[11px] text-text-medium-emphasis">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-primary transition-colors"
            >
              Read all verified reviews & submit feedback
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
