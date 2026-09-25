import React from 'react';

export const TrustPillarsSection: React.FC = () => {
  return (
    <section className="bg-surface py-section-gap-sm md:py-section-gap-lg">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-gutter divide-y md:divide-y-0 md:divide-x divide-border-subtle">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-on-secondary-fixed-variant"
                style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
              Verification First
            </h3>
            <p className="font-body-md text-body-md text-text-medium-emphasis">
              Every property is physically inspected and verified for absolute transparency before listing.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-on-secondary-fixed-variant"
                style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}
              >
                support_agent
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
              Expert Guidance
            </h3>
            <p className="font-body-md text-body-md text-text-medium-emphasis">
              Professional, SaaS-enabled agents dedicated to navigating your high-stakes decisions.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-on-secondary-fixed-variant"
                style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}
              >
                gavel
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
              Legal Transparency
            </h3>
            <p className="font-body-md text-body-md text-text-medium-emphasis">
              Clear, upfront documentation and pricing. No hidden fees, just straightforward partnership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
