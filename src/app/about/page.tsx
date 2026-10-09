import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Realic Property Consultant',
  description:
    'Defining the Modern Standard for Luxury Real Estate. Realic Property Consultant delivers discrete, high-touch property consulting for discerning clients.',
  openGraph: {
    title: 'About Us | Realic Property Consultant',
    description:
      'Defining the Modern Standard for Luxury Real Estate with boutique expertise and data-driven insights.',
    url: 'https://realicproperty.com/about',
  },
};

export default function AboutPage() {
  const leadership = [
    {
      name: 'Eleanor Vance',
      role: 'Managing Partner',
      bio: "Visionary leader driving Realic's strategic growth and client acquisition.",
      image: '/images/team-eleanor.jpg',
    },
    {
      name: 'Julian Mercer',
      role: 'Director of Strategy',
      bio: 'Expert in macroeconomic analysis and high-value portfolio diversification.',
      image: '/images/team-julian.jpg',
    },
    {
      name: 'Sarah Lin',
      role: 'Principal Consultant',
      bio: 'Specializes in off-market acquisitions and bespoke residential transitions.',
      image: '/images/team-sarah.jpg',
    },
    {
      name: 'Marcus Thorne',
      role: 'Head of Commercial',
      bio: 'Leads institutional-grade commercial transactions and leasing strategy.',
      image: '/images/team-marcus.jpg',
    },
  ];

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-6">
              <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary">
                Defining the Modern Standard for Luxury Real Estate
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Realic Property Consultant delivers discrete, high-touch property consulting for discerning clients. We navigate high-stakes transactions with precision and unmatched market intelligence.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden custom-shadow">
              <img
                alt="Venus Capital Heights 16-Acre Integrated Township Patna"
                className="w-full h-[500px] object-cover"
                src="/images/projects/venus-capital-heights/master-township-aerial-view.jpg"
              />
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="bg-surface-pure py-section-gap-lg border-y border-border-subtle">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center max-w-3xl mx-auto mb-section-gap-sm">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Realic Story</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Founded in 2018, Realic Property Consultant emerged from a simple realization: the luxury real estate market required a more analytical, transparent, and refined approach. We discarded the traditional brokerage model in favor of a consultancy framework, ensuring every client receives tailored, data-backed guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Value 1 */}
              <div className="bg-surface p-8 rounded-lg border border-border-subtle custom-shadow hover:shadow-[0_15px_35px_-5px_rgba(0,35,73,0.12)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  domain
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Boutique Expertise</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We intentionally limit our active client roster to guarantee dedicated attention and exhaustive market analysis for every transaction.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-surface p-8 rounded-lg border border-border-subtle custom-shadow hover:shadow-[0_15px_35px_-5px_rgba(0,35,73,0.12)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  query_stats
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Data-Driven Insights</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our proprietary valuation models leverage macroeconomic indicators and micro-market trends to secure optimal pricing strategies.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-surface p-8 rounded-lg border border-border-subtle custom-shadow hover:shadow-[0_15px_35px_-5px_rgba(0,35,73,0.12)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  handshake
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">White-Glove Service</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  From initial consultation to final signature, we manage every detail discretely, ensuring a seamless and elevated experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-lg">
          <div className="bg-primary-container text-on-primary rounded-xl p-12 flex flex-col md:flex-row justify-around items-center gap-8 custom-shadow">
            <div className="text-center">
              <p className="font-display-hero-mobile text-display-hero-mobile text-secondary-container mb-2">
                ₹2,400 Cr+
              </p>
              <p className="font-label-bold text-label-bold text-on-primary-container uppercase tracking-wider">
                Portfolio Value Managed
              </p>
            </div>
            <div className="hidden md:block w-px h-24 bg-on-primary-fixed-variant"></div>
            <div className="text-center">
              <p className="font-display-hero-mobile text-display-hero-mobile text-secondary-container mb-2">
                20+
              </p>
              <p className="font-label-bold text-label-bold text-on-primary-container uppercase tracking-wider">
                Years Combined Experience
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-lg">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-section-gap-sm">
            Leadership &amp; Senior Counsel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {leadership.map((member) => (
              <div key={member.name} className="group">
                <div className="rounded-lg overflow-hidden mb-4 custom-shadow aspect-[3/4]">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={member.image}
                  />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">{member.name}</h3>
                <p className="font-label-bold text-label-bold text-secondary mb-2">{member.role}</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic CTA Section */}
        <section className="bg-surface-pure py-section-gap-lg border-t border-border-subtle text-center px-margin-mobile">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Ready to elevate your portfolio?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Schedule a private consultation with our senior advisory team to discuss your real estate objectives.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-tertiary-container text-on-tertiary px-8 py-4 rounded font-label-bold text-lg transition-colors hover:bg-tertiary shadow-md"
            >
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
