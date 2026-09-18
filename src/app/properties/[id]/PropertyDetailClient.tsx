'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Property, PROPERTIES } from '@/data/properties';
import { REVIEWS } from '@/data/reviews';
import { toast } from 'sonner';

interface Props {
  property: Property;
}

export default function PropertyDetailClient({ property }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loanTenureYears, setLoanTenureYears] = useState(20);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryDate, setInquiryDate] = useState('');
  const [inquiryType, setInquiryType] = useState('In-Person Site Visit');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Loan calculations
  const downPayment = (property.price * downPaymentPercent) / 100;
  const principal = property.price - downPayment;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenureYears * 12;
  const monthlyEmi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) {
      toast.error('Please provide your name and contact phone number');
      return;
    }
    setInquirySubmitted(true);
    toast.success(
      `Private viewing request submitted! Senior advisor ${property.agent.name} will contact you shortly.`
    );
  };

  // Similar properties
  const similarProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.city === property.city || p.propertyType === property.propertyType)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-surface-pure border-b border-border-subtle py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-text-medium-emphasis flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-primary transition-colors">
              Properties
            </Link>
            <span>/</span>
            <Link
              href={`/properties?city=${property.city}`}
              className="hover:text-primary transition-colors font-medium"
            >
              {property.city}
            </Link>
            <span>/</span>
            <span className="text-primary font-bold truncate max-w-xs sm:max-w-sm">
              {property.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success('Listing link copied to clipboard!');
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle text-xs font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined text-sm">share</span>
              Share
            </button>
            <button
              onClick={() => toast.success('Property PDF brochure downloaded')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle text-xs font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Title Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20">
                {property.propertyType}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-green-50 text-green-700 border border-green-200 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                Verified RERA: {property.reraId}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-primary/10 text-primary">
                {property.status}
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold font-montserrat text-primary tracking-tight">
              {property.title}
            </h1>
            <p className="text-sm md:text-base text-text-medium-emphasis mt-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-secondary">
                location_on
              </span>
              {property.address}
            </p>
          </div>

          {/* Pricing Header */}
          <div className="bg-surface-pure p-5 rounded-2xl border border-border-subtle shadow-ambient text-left md:text-right flex-shrink-0">
            <span className="text-xs text-text-medium-emphasis block">Valuation Price</span>
            <div className="text-3xl md:text-4xl font-extrabold text-secondary font-montserrat mt-0.5">
              {property.priceDisplay}
            </div>
            {property.priceUsd && (
              <span className="text-xs font-semibold text-text-medium-emphasis">
                Approx. {property.priceUsd} • {property.maintenancePerMonth}
              </span>
            )}
          </div>
        </div>

        {/* High-Resolution Media Gallery */}
        <div className="mb-12">
          {/* Main Large Image */}
          <div className="relative h-[340px] sm:h-[460px] md:h-[560px] rounded-3xl overflow-hidden bg-slate-100 shadow-ambient border border-border-subtle">
            <img
              src={property.images[activeImageIndex]}
              alt={`${property.title} view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* Gallery index badge */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
              Photo {activeImageIndex + 1} of {property.images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-24 h-18 sm:w-32 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-secondary shadow-md scale-105'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 cols): Specs, Overview, Amenities, Neighborhood, EMI */}
          <div className="lg:col-span-8 space-y-10">
            {/* Key Specifications Grid */}
            <div className="bg-surface-pure p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-ambient">
              <h2 className="text-xl font-bold font-montserrat text-primary mb-6">
                Property Overview & Key Specs
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {property.overviewStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl bg-surface-container-low border border-border-subtle/60"
                  >
                    <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                      {stat.icon}
                    </span>
                    <span className="text-[11px] font-semibold text-text-medium-emphasis block">
                      {stat.label}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-primary font-montserrat mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Extra Spec Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border-subtle text-xs">
                <div className="flex justify-between py-2 border-b border-border-subtle/50">
                  <span className="text-text-medium-emphasis">Facing Orientation:</span>
                  <span className="font-bold text-primary">{property.facing}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border-subtle/50">
                  <span className="text-text-medium-emphasis">Furnishing Status:</span>
                  <span className="font-bold text-primary">{property.furnishing}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border-subtle/50">
                  <span className="text-text-medium-emphasis">Reserved Parking:</span>
                  <span className="font-bold text-primary">{property.parking}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border-subtle/50">
                  <span className="text-text-medium-emphasis">Floor Allocation:</span>
                  <span className="font-bold text-primary">{property.floor}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border-subtle/50">
                  <span className="text-text-medium-emphasis">Possession Timeline:</span>
                  <span className="font-bold text-primary">{property.possessionDate}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border-subtle/50">
                  <span className="text-text-medium-emphasis">RERA Registration:</span>
                  <span className="font-bold text-green-700">{property.reraId}</span>
                </div>
              </div>
            </div>

            {/* Architectural Description */}
            <div className="bg-surface-pure p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-ambient">
              <h2 className="text-xl font-bold font-montserrat text-primary mb-4">
                Architectural Description
              </h2>
              <p className="text-sm md:text-base text-text-medium-emphasis leading-relaxed">
                {property.description}
              </p>

              {/* Signature Features Pills */}
              <div className="mt-6 pt-6 border-t border-border-subtle">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                  Signature Architectural Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3.5 py-1.5 rounded-xl bg-surface-container-low border border-border-subtle text-xs font-semibold text-primary flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-xs text-green-600">check_circle</span>
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-surface-pure p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-ambient">
              <h2 className="text-xl font-bold font-montserrat text-primary mb-6">
                Curated Amenities & Lifestyle
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity.name}
                    className="p-4 rounded-2xl bg-surface hover:bg-secondary/5 border border-border-subtle transition-colors flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                      <span className="material-symbols-outlined text-2xl">{amenity.icon}</span>
                    </div>
                    <span className="text-xs font-bold text-primary">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhood & Connectivity Insights */}
            <div className="bg-surface-pure p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-ambient">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold font-montserrat text-primary">
                    Neighborhood & Transit Hubs
                  </h2>
                  <p className="text-xs text-text-medium-emphasis mt-1">
                    Commute distances vetted via GIS mapping from {property.locality}.
                  </p>
                </div>
                <span className="material-symbols-outlined text-2xl text-secondary">
                  share_location
                </span>
              </div>

              <div className="space-y-3">
                {property.neighborhoodInsights.map((insight) => (
                  <div
                    key={insight.title}
                    className="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle/70 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-surface-pure flex items-center justify-center text-secondary shadow-xs">
                        <span className="material-symbols-outlined text-lg">
                          {insight.type === 'Airport'
                            ? 'flight'
                            : insight.type === 'Metro'
                            ? 'train'
                            : insight.type === 'Tech Park'
                            ? 'business'
                            : insight.type === 'School'
                            ? 'school'
                            : insight.type === 'Hospital'
                            ? 'local_hospital'
                            : 'storefront'}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary block">{insight.title}</span>
                        <span className="text-[10px] text-text-medium-emphasis uppercase tracking-wider font-semibold">
                          {insight.type}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-secondary">{insight.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive EMI Calculator for this Property */}
            <div className="bg-surface-pure p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-ambient">
              <h2 className="text-xl font-bold font-montserrat text-primary mb-2">
                Estimated Monthly Mortgage (EMI)
              </h2>
              <p className="text-xs text-text-medium-emphasis mb-6">
                Configure your financing plan for {property.priceDisplay} with competitive institutional lending rates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {/* Down payment */}
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Down Payment: {downPaymentPercent}%
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-secondary"
                  />
                  <span className="text-xs text-text-medium-emphasis mt-1 block">
                    ₹{((property.price * downPaymentPercent) / 10000000).toFixed(2)} Cr
                  </span>
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Tenure: {loanTenureYears} Years
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={loanTenureYears}
                    onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                    className="w-full accent-secondary"
                  />
                  <span className="text-xs text-text-medium-emphasis mt-1 block">
                    {totalMonths} Monthly Installments
                  </span>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min={7}
                    max={12}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-secondary"
                  />
                  <span className="text-xs text-text-medium-emphasis mt-1 block">
                    Institutional Benchmark
                  </span>
                </div>
              </div>

              {/* Calculated Output Box */}
              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-secondary block">
                    Estimated Monthly EMI
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-primary font-montserrat">
                    ₹{monthlyEmi.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-text-medium-emphasis">/ month</span>
                  </span>
                </div>
                <button
                  onClick={() => toast.success('Mortgage advisor contacted for pre-approval rates')}
                  className="px-5 py-2.5 bg-secondary text-white text-xs font-bold rounded-xl hover:bg-secondary/90 transition-colors"
                >
                  Check Bank Eligibility
                </button>
              </div>
            </div>

            {/* Verified Client Experiences (from stitch property_details_with_client_reviews) */}
            <div className="bg-surface-pure p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-ambient">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold font-montserrat text-primary">
                    Client Experiences & Review Dossier
                  </h2>
                  <p className="text-xs text-text-medium-emphasis mt-1">
                    Verified feedback from buyers who acquired residences in this development corridor.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-200">
                  4.95 / 5.0 Rating
                </span>
              </div>

              <div className="space-y-4">
                {REVIEWS.slice(0, 2).map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-surface border border-border-subtle/80 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <span className="text-xs font-bold text-primary block">{rev.author}</span>
                          <span className="text-[10px] text-text-medium-emphasis">{rev.role}</span>
                        </div>
                      </div>
                      <div className="flex text-amber-400 text-xs">
                        {'★'.repeat(rev.rating)}
                      </div>
                    </div>
                    <p className="text-xs text-text-medium-emphasis leading-relaxed pt-1">
                      "{rev.content}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Schedule Private Tour & Advisor Contact Card (Sticky) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-pure p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-ambient-lg sticky top-24">
              <div className="flex items-center gap-3 pb-6 border-b border-border-subtle">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-border-subtle shadow-xs"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                    Exclusive Listing Advisor
                  </span>
                  <h3 className="text-base font-bold text-primary font-montserrat">
                    {property.agent.name}
                  </h3>
                  <p className="text-xs text-text-medium-emphasis">{property.agent.role}</p>
                </div>
              </div>

              {/* Instant Contact CTA Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-surface-container-low hover:bg-secondary/10 text-primary hover:text-secondary rounded-xl text-xs font-bold border border-border-subtle transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">phone</span>
                  Call Advisor
                </a>
                <a
                  href={`https://wa.me/919431098765?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                    property.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] rounded-xl text-xs font-bold border border-[#25D366]/30 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  WhatsApp
                </a>
              </div>

              {/* Private Showing Request Form */}
              <div className="mt-6 pt-6 border-t border-border-subtle">
                <h4 className="text-sm font-bold text-primary font-montserrat mb-1">
                  Schedule Private Viewing
                </h4>
                <p className="text-xs text-text-medium-emphasis mb-4">
                  Request an exclusive private walkthrough or live video tour.
                </p>

                {inquirySubmitted ? (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-center space-y-2">
                    <span className="material-symbols-outlined text-3xl text-green-600">check_circle</span>
                    <h5 className="text-xs font-bold text-green-800">Viewing Request Confirmed</h5>
                    <p className="text-[11px] text-green-700">
                      Our concierge will coordinate with you via phone/WhatsApp within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-surface border border-border-subtle focus:border-secondary outline-none h-10"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (+91 ...)"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-surface border border-border-subtle focus:border-secondary outline-none h-10"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-surface border border-border-subtle focus:border-secondary outline-none h-10"
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-surface border border-border-subtle focus:border-secondary outline-none h-10"
                      />
                    </div>
                    <div>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-surface border border-border-subtle focus:border-secondary outline-none h-10"
                      >
                        <option>In-Person Site Visit</option>
                        <option>Live High-Res Video Walkthrough</option>
                        <option>Title & Legal Diligence Consultation</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-accent-orange hover:bg-[#d44d1c] text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer mt-2"
                    >
                      Confirm Showing Request
                    </button>
                  </form>
                )}
              </div>

              {/* RERA Title Safety Assurance */}
              <div className="mt-6 pt-4 border-t border-border-subtle flex items-start gap-2.5 text-xs text-text-medium-emphasis">
                <span className="material-symbols-outlined text-green-600 text-lg flex-shrink-0">
                  security
                </span>
                <p className="text-[11px] leading-tight">
                  <strong className="text-primary">Realic Title Guarantee:</strong> Every property on our platform has zero legal disputes and complete title encumbrance certificates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Curated Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border-subtle">
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-6">
              Similar Curated Residences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-surface-pure rounded-2xl border border-border-subtle overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all flex flex-col group"
                >
                  <div className="relative h-48 w-full bg-slate-100">
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-primary/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {prop.city}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-surface-pure/95 px-2.5 py-1 rounded-lg text-xs font-bold text-primary">
                      {prop.priceDisplay}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <Link href={`/properties/${prop.slug}`} className="hover:text-secondary">
                        <h4 className="font-bold text-sm text-primary font-montserrat truncate">
                          {prop.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-text-medium-emphasis mt-1">{prop.location}</p>
                    </div>
                    <div className="pt-3 mt-2 border-t border-border-subtle flex items-center justify-between text-xs">
                      <span>{prop.bedrooms} BHK • {prop.sqft.toLocaleString()} sqft</span>
                      <Link
                        href={`/properties/${prop.slug}`}
                        className="text-secondary font-bold hover:underline"
                      >
                        View &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
