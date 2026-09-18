'use client';

import React, { useState } from 'react';

export const MortgageCalculatorSection: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(500000);
  const [downPayment, setDownPayment] = useState<number>(100000);
  const [loanTerm, setLoanTerm] = useState<number>(30); // 30, 15, or 10
  const interestRate = 6.85; // Annual interest rate %

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

  const monthlyTaxes = Math.round((homePrice * 0.0084) / 12);
  const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyTaxes;

  // Donut chart calculations (Circumference ~ 439.8)
  const circumference = 439.8;
  const taxRatio = totalMonthlyPayment > 0 ? monthlyTaxes / totalMonthlyPayment : 0;
  const piRatio = 1 - taxRatio;

  const piDashOffset = circumference * (1 - piRatio);
  const taxDashOffset = circumference * (1 - taxRatio);

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
    <section className="bg-surface py-section-gap-sm md:py-section-gap-lg">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Plan Your Future Home</h2>
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
                  <label className="font-label-bold text-label-bold text-on-surface-variant">Home Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-bold">
                      $
                    </span>
                    <input
                      type="text"
                      value={homePrice.toLocaleString()}
                      onChange={(e) => {
                        const num = Number(e.target.value.replace(/[^0-9]/g, ''));
                        handleHomePriceChange(num);
                      }}
                      className="pl-7 pr-3 py-2 bg-surface border border-border-subtle rounded font-body-md text-body-md text-primary w-36 text-right focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-bold"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={2000000}
                  step={10000}
                  value={homePrice}
                  onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer h-2 bg-border-subtle rounded-lg appearance-none"
                />
              </div>

              {/* Down Payment Input & Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">Down Payment</label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-bold">
                        $
                      </span>
                      <input
                        type="text"
                        value={downPayment.toLocaleString()}
                        onChange={(e) => {
                          const num = Number(e.target.value.replace(/[^0-9]/g, ''));
                          handleDownPaymentChange(num);
                        }}
                        className="pl-7 pr-3 py-2 bg-surface border border-border-subtle rounded font-body-md text-body-md text-primary w-32 text-right focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-bold"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={downPaymentPercent}
                        onChange={(e) => handlePercentChange(Number(e.target.value))}
                        className="pl-3 pr-7 py-2 bg-surface border border-border-subtle rounded font-body-md text-body-md text-primary w-20 text-right focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-bold"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-bold">
                        %
                      </span>
                    </div>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={homePrice}
                  step={5000}
                  value={downPayment}
                  onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer h-2 bg-border-subtle rounded-lg appearance-none"
                />
              </div>

              {/* Loan Term Selection */}
              <div className="space-y-4">
                <label className="font-label-bold text-label-bold text-on-surface-variant block">Loan Term</label>
                <div className="flex gap-4">
                  {[30, 15, 10].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setLoanTerm(term)}
                      className={`flex-1 py-3 rounded font-label-bold text-label-bold cursor-pointer transition-colors ${
                        loanTerm === term
                          ? 'border border-secondary bg-secondary-fixed text-on-secondary-container font-bold shadow-sm'
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
          <div className="lg:col-span-5 bg-primary text-on-primary rounded-xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-ambient">
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="font-headline-sm text-headline-sm text-primary-fixed-dim mb-2">
                Estimated Monthly Payment
              </h3>
              <div className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary mb-8 tracking-tighter">
                ${totalMonthlyPayment.toLocaleString()}
              </div>

              <div className="flex-grow flex items-center justify-center mb-8 relative my-4">
                <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 160 160">
                  {/* Background Circle */}
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
                    r="70"
                    fill="transparent"
                    stroke="#0c5db6"
                    strokeWidth="16"
                    strokeDasharray={circumference}
                    strokeDashoffset={piDashOffset}
                    className="transition-all duration-500"
                  />
                  {/* Property Taxes Arc */}
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="transparent"
                    stroke="#66a1fe"
                    strokeWidth="16"
                    strokeDasharray={circumference}
                    strokeDashoffset={taxDashOffset}
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">
                    account_balance
                  </span>
                  <span className="text-[11px] text-primary-fixed-dim mt-1">{loanTerm} yr @ {interestRate}%</span>
                </div>
              </div>

              <div className="space-y-4 mt-auto border-t border-primary-fixed-dim/20 pt-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary inline-block"></span>
                    <span className="font-body-md text-primary-fixed-dim">Principal & Interest</span>
                  </div>
                  <span className="font-label-bold text-white">${monthlyPrincipalAndInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary-container inline-block"></span>
                    <span className="font-body-md text-primary-fixed-dim">Property Taxes</span>
                  </div>
                  <span className="font-label-bold text-white">${monthlyTaxes.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
