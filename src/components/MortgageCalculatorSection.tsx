'use client';

import React, { useState } from 'react';

export const MortgageCalculatorSection: React.FC = () => {
  // Indian real estate values: Home price e.g. 50 Lakhs (5,000,000)
  const [homePrice, setHomePrice] = useState<number>(5000000);
  const [downPayment, setDownPayment] = useState<number>(1000000);
  const [loanTerm, setLoanTerm] = useState<number>(30); // 30, 15, or 10
  const interestRate = 8.5; // Indian Home Loan annual interest rate % (approx 8.5%)

  // Calculated values
  const downPaymentPercent = homePrice > 0 ? Math.round((downPayment / homePrice) * 100) : 0;
  const principal = Math.max(0, homePrice - downPayment);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPrincipalAndInterest =
    principal > 0 && monthlyRate > 0
      ? Math.round(
          (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        )
      : 0;

  // Approximate monthly property tax / maintenance in India
  const monthlyTaxes = Math.round((homePrice * 0.003) / 12);
  const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyTaxes;

  // Donut chart calculations
  const circumference = 439.8;
  const piRatio = totalMonthlyPayment > 0 ? monthlyPrincipalAndInterest / totalMonthlyPayment : 0.88;
  const taxRatio = totalMonthlyPayment > 0 ? monthlyTaxes / totalMonthlyPayment : 0.12;

  const piStrokeDash = circumference * piRatio;
  const taxStrokeDash = circumference * taxRatio;

  const handleHomePriceChange = (val: number) => {
    setHomePrice(val);
    if (downPayment > val) {
      setDownPayment(val);
    }
  };

  const handleDownPaymentChange = (val: number) => {
    setDownPayment(Math.min(val, homePrice));
  };

  const handlePercentChange = (pct: number) => {
    const validPct = Math.min(100, Math.max(0, pct));
    setDownPayment(Math.round((homePrice * validPct) / 100));
  };

  return (
    <section id="calculator" className="bg-surface py-section-gap-sm md:py-section-gap-lg">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Plan Your Future Home
          </h2>
          <p className="font-body-lg text-body-lg text-text-medium-emphasis">
            Estimate your monthly commitments with our interactive tool.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Loan Parameters Card */}
          <div className="lg:col-span-7 bg-surface-pure rounded-xl border border-border-subtle p-6 md:p-8 shadow-ambient space-y-8">
            <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">tune</span>
              Loan Parameters
            </h3>

            <div className="space-y-8">
              {/* Home Price Input & Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">
                    Home Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-bold">
                      ₹
                    </span>
                    <input
                      className="pl-7 pr-3 py-2 bg-surface border border-border-subtle rounded font-body-md text-body-md text-primary w-36 text-right focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-semibold"
                      type="text"
                      value={homePrice.toLocaleString('en-IN')}
                      onChange={(e) => {
                        const num = Number(e.target.value.replace(/[^0-9]/g, ''));
                        handleHomePriceChange(num);
                      }}
                    />
                  </div>
                </div>
                <input
                  className="w-full accent-primary cursor-pointer"
                  max={30000000}
                  min={1000000}
                  step={100000}
                  type="range"
                  value={homePrice}
                  onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                />
              </div>

              {/* Down Payment */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">
                    Down Payment
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-bold">
                        ₹
                      </span>
                      <input
                        className="pl-7 pr-3 py-2 bg-surface border border-border-subtle rounded font-body-md text-body-md text-primary w-36 text-right focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-semibold"
                        type="text"
                        value={downPayment.toLocaleString('en-IN')}
                        onChange={(e) => {
                          const num = Number(e.target.value.replace(/[^0-9]/g, ''));
                          handleDownPaymentChange(num);
                        }}
                      />
                    </div>
                    <div className="relative">
                      <input
                        className="pl-3 pr-7 py-2 bg-surface border border-border-subtle rounded font-body-md text-body-md text-primary w-20 text-right focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-semibold"
                        type="text"
                        value={downPaymentPercent}
                        onChange={(e) => {
                          const num = Number(e.target.value.replace(/[^0-9]/g, ''));
                          handlePercentChange(num);
                        }}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-bold">
                        %
                      </span>
                    </div>
                  </div>
                </div>
                <input
                  className="w-full accent-primary cursor-pointer"
                  max={homePrice}
                  min={0}
                  step={50000}
                  type="range"
                  value={downPayment}
                  onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                />
              </div>

              {/* Loan Term */}
              <div className="space-y-4">
                <label className="font-label-bold text-label-bold text-on-surface-variant block">
                  Loan Term
                </label>
                <div className="flex gap-4">
                  {[30, 15, 10].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setLoanTerm(term)}
                      className={`flex-1 py-3 rounded font-label-bold text-label-bold cursor-pointer transition-colors ${
                        loanTerm === term
                          ? 'border border-secondary bg-secondary-fixed text-on-secondary-container'
                          : 'border border-border-subtle bg-surface-pure text-on-surface-variant hover:bg-surface-container-low'
                      }`}
                    >
                      {term} Years
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 bg-primary text-on-primary rounded-xl p-6 md:p-8 flex flex-col relative overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="font-headline-sm text-headline-sm text-primary-fixed-dim mb-2">
                Estimated Monthly Payment
              </h3>
              <div className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary mb-8 tracking-tighter">
                ₹{totalMonthlyPayment.toLocaleString('en-IN')}
              </div>

              <div className="flex-grow flex items-center justify-center mb-8 relative">
                <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 160 160">
                  {/* Background track */}
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="transparent"
                    stroke="#002349"
                    strokeWidth="16"
                  />
                  {/* Principal & Interest Arc */}
                  <circle
                    cx="80"
                    cy="80"
                    fill="transparent"
                    r="70"
                    stroke="#0c5db6"
                    strokeDasharray={`${piStrokeDash} ${circumference}`}
                    strokeDashoffset="0"
                    strokeWidth="16"
                  />
                  {/* Property Taxes Arc */}
                  <circle
                    cx="80"
                    cy="80"
                    fill="transparent"
                    r="70"
                    stroke="#66a1fe"
                    strokeDasharray={`${taxStrokeDash} ${circumference}`}
                    strokeDashoffset={`-${piStrokeDash}`}
                    strokeWidth="16"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">
                    account_balance
                  </span>
                </div>
              </div>

              <div className="space-y-4 mt-auto border-t border-primary-fixed-dim/20 pt-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                    <span className="font-body-md text-primary-fixed-dim">Principal &amp; Interest</span>
                  </div>
                  <span className="font-label-bold">₹{monthlyPrincipalAndInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
                    <span className="font-body-md text-primary-fixed-dim">Property Taxes &amp; Maint.</span>
                  </div>
                  <span className="font-label-bold">₹{monthlyTaxes.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
