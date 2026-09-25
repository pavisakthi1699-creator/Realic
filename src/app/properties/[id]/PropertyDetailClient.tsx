'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Property, PROPERTIES } from '@/data/properties';
import { REVIEWS } from '@/data/reviews';
import { toast } from 'sonner';
import PropertyMap from '@/components/PropertyMap';

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

  // Floor plans and gallery modal state
  const [activeFloorPlanIndex, setActiveFloorPlanIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenTitle, setFullscreenTitle] = useState<string>('');
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // Auto-scroll featured image carousel
  useEffect(() => {
    if (property.images.length <= 1 || isCarouselHovered) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % property.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [property.images.length, isCarouselHovered]);

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
        <div className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-neutral-900 text-white">
                {property.propertyType}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-900 border border-neutral-300 flex items-center gap-1 font-mono">
                <span className="material-symbols-outlined text-sm">verified</span>
                Verified RERA: {property.reraId}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200">
                {property.status}
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold font-montserrat text-neutral-900 tracking-tight">
              {property.title}
            </h1>
            <p className="text-sm md:text-base text-neutral-500 mt-1.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-neutral-700">
                location_on
              </span>
              {property.address}
            </p>
          </div>

          {/* Pricing Header */}
          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm text-left md:text-right flex-shrink-0">
            <span className="text-xs text-neutral-500 block font-medium">Valuation Price</span>
            <div className="text-3xl md:text-4xl font-extrabold text-neutral-900 font-montserrat mt-0.5">
              {property.priceDisplay}
            </div>
            {property.priceUsd && (
              <span className="text-xs font-semibold text-neutral-500">
                Approx. {property.priceUsd} • {property.maintenancePerMonth}
              </span>
            )}
          </div>
        </div>

        {/* High-Resolution Media Gallery with Auto-Scroll */}
        <div className="mb-12">
          {/* Main Large Image */}
          <div
            className="relative h-[340px] sm:h-[460px] md:h-[560px] rounded-3xl overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200 group"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <img
              src={property.images[activeImageIndex]}
              alt={`${property.title} view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700 cursor-pointer"
              onClick={() => {
                setFullscreenImage(property.images[activeImageIndex]);
                setFullscreenTitle(`${property.title} - View ${activeImageIndex + 1}`);
              }}
            />

            {/* Prev / Next Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) =>
                      prev === 0 ? property.images.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) =>
                      prev === property.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </>
            )}

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              {/* Slide Progress Indicators */}
              <div className="flex items-center gap-1.5 bg-neutral-900/70 backdrop-blur-md px-3 py-1.5 rounded-full pointer-events-auto">
                {property.images.slice(0, 10).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'w-6 bg-white'
                        : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
                {property.images.length > 10 && (
                  <span className="text-[10px] text-white/75 ml-1 font-mono">
                    +{property.images.length - 10}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => {
                    setFullscreenImage(property.images[activeImageIndex]);
                    setFullscreenTitle(`${property.title} - View ${activeImageIndex + 1}`);
                  }}
                  className="bg-neutral-900/80 hover:bg-neutral-900 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">fullscreen</span>
                  Enlarge
                </button>
                <div className="bg-neutral-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                  Photo {activeImageIndex + 1} of {property.images.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 cols): Specs, Overview, Amenities, Neighborhood, EMI */}
          <div className="lg:col-span-8 space-y-10">
            {/* Key Specifications Grid */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold font-montserrat text-neutral-900 mb-6">
                Property Overview & Key Specs
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {property.overviewStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80"
                  >
                    <span className="material-symbols-outlined text-neutral-900 text-2xl mb-1">
                      {stat.icon}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-500 block">
                      {stat.label}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-neutral-900 font-montserrat mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Extra Spec Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-100 text-xs">
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-500">Facing Orientation:</span>
                  <span className="font-bold text-neutral-900">{property.facing}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-500">Furnishing Status:</span>
                  <span className="font-bold text-neutral-900">{property.furnishing}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-500">Reserved Parking:</span>
                  <span className="font-bold text-neutral-900">{property.parking}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-500">Floor Allocation:</span>
                  <span className="font-bold text-neutral-900">{property.floor}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-500">Possession Timeline:</span>
                  <span className="font-bold text-neutral-900">{property.possessionDate}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-500">RERA Registration:</span>
                  <span className="font-bold text-neutral-900 font-mono">{property.reraId}</span>
                </div>
              </div>
            </div>

            {/* Architectural Description */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold font-montserrat text-neutral-900 mb-4">
                Architectural Description
              </h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                {property.description}
              </p>

              {/* Signature Features Pills */}
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                  Signature Architectural Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3.5 py-1.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-xs text-neutral-900">check_circle</span>
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold font-montserrat text-neutral-900 mb-6">
                Curated Amenities & Lifestyle
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity.name}
                    className="p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-2.5 shadow-xs group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-2xl">{amenity.icon}</span>
                    </div>
                    <span className="text-xs font-bold text-neutral-900">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* On-Site Amenities Photographic Showcase - Image with Text Only */}
            {property.amenityShowcase && property.amenityShowcase.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        Brochure Documentation
                      </span>
                      <span className="text-xs text-neutral-500 font-medium">
                        32+ Project Facilities
                      </span>
                    </div>
                    <h2 className="text-xl font-bold font-montserrat text-neutral-900">
                      On-Site Amenities Photographic Showcase
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {property.amenityShowcase.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setFullscreenImage(item.image);
                        setFullscreenTitle(item.title);
                      }}
                      className="group border border-neutral-200 rounded-2xl overflow-hidden bg-neutral-50 hover:border-neutral-900 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col"
                    >
                      <div className="relative h-36 sm:h-44 overflow-hidden bg-neutral-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-neutral-900/85 backdrop-blur-md text-[9px] font-semibold text-white">
                          {item.category}
                        </span>
                        <div className="absolute inset-0 bg-neutral-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-lg bg-neutral-900/80 p-1.5 rounded-full backdrop-blur-sm">
                            zoom_in
                          </span>
                        </div>
                      </div>
                      <div className="p-3 bg-white flex-1 flex items-center">
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-900 font-montserrat group-hover:text-black leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architectural Layouts & Floor Blueprints */}
            {property.floorPlans && property.floorPlans.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider">
                      Technical Layouts
                    </span>
                    <h2 className="text-xl font-bold font-montserrat text-neutral-900 mt-1.5">
                      Architectural Floor Plans & Master Site Layout
                    </h2>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">
                    {property.floorPlans.length} Architectural Drawings
                  </span>
                </div>

                {/* Plan Switcher Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-neutral-200">
                  {property.floorPlans.map((plan, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFloorPlanIndex(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        activeFloorPlanIndex === idx
                          ? 'bg-neutral-900 text-white shadow-xs'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                      }`}
                    >
                      {plan.title}
                    </button>
                  ))}
                </div>

                {/* Selected Floor Plan Display */}
                {property.floorPlans[activeFloorPlanIndex] && (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-neutral-900 font-montserrat">
                            {property.floorPlans[activeFloorPlanIndex].title}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-white border border-neutral-300 text-[11px] font-bold text-neutral-800">
                            {property.floorPlans[activeFloorPlanIndex].specs}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                          {property.floorPlans[activeFloorPlanIndex].description}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setFullscreenImage(property.floorPlans![activeFloorPlanIndex].image);
                          setFullscreenTitle(property.floorPlans![activeFloorPlanIndex].title);
                        }}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold whitespace-nowrap transition-colors self-start sm:self-auto cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">fullscreen</span>
                        Enlarge Blueprint
                      </button>
                    </div>

                    <div
                      onClick={() => {
                        setFullscreenImage(property.floorPlans![activeFloorPlanIndex].image);
                        setFullscreenTitle(property.floorPlans![activeFloorPlanIndex].title);
                      }}
                      className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 p-3 sm:p-6 cursor-zoom-in group"
                    >
                      <img
                        src={property.floorPlans[activeFloorPlanIndex].image}
                        alt={property.floorPlans[activeFloorPlanIndex].title}
                        className="w-full h-auto max-h-[640px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-neutral-900/80 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">zoom_in</span>
                        Click to Zoom Blueprint
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Neighborhood & Connectivity Insights */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold font-montserrat text-neutral-900">
                    Neighborhood & Transit Hubs
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    Commute distances vetted via GIS mapping from {property.locality}.
                  </p>
                </div>
                <span className="material-symbols-outlined text-2xl text-neutral-900">
                  share_location
                </span>
              </div>

              {/* Interactive GIS Location & Connectivity Map */}
              <div className="h-72 sm:h-84 w-full rounded-2xl overflow-hidden border border-neutral-200 mb-6 relative shadow-xs">
                <PropertyMap
                  properties={[property]}
                  activePropertyId={property.id}
                  singlePropertyMode={true}
                  className="w-full h-full"
                />
              </div>

              <div className="space-y-3">
                {property.neighborhoodInsights.map((insight) => (
                  <div
                    key={insight.title}
                    className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-xs">
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
                        <span className="text-xs font-bold text-neutral-900 block">{insight.title}</span>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                          {insight.type}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-900">{insight.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive EMI Calculator for this Property */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold font-montserrat text-neutral-900 mb-2">
                Estimated Monthly Mortgage (EMI)
              </h2>
              <p className="text-xs text-neutral-500 mb-6">
                Configure your financing plan for {property.priceDisplay} with competitive institutional lending rates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {/* Down payment */}
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Down Payment: {downPaymentPercent}%
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-neutral-900"
                  />
                  <span className="text-xs text-neutral-500 mt-1 block">
                    ₹{((property.price * downPaymentPercent) / 10000000).toFixed(2)} Cr
                  </span>
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Tenure: {loanTenureYears} Years
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={loanTenureYears}
                    onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                    className="w-full accent-neutral-900"
                  />
                  <span className="text-xs text-neutral-500 mt-1 block">
                    {totalMonths} Monthly Installments
                  </span>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min={7}
                    max={12}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-neutral-900"
                  />
                  <span className="text-xs text-neutral-500 mt-1 block">
                    Institutional Benchmark
                  </span>
                </div>
              </div>

              {/* Calculated Output Box */}
              <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-neutral-600 block">
                    Estimated Monthly EMI
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-montserrat">
                    ₹{monthlyEmi.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-neutral-500">/ month</span>
                  </span>
                </div>
                <button
                  onClick={() => toast.success('Mortgage advisor contacted for pre-approval rates')}
                  className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Check Bank Eligibility
                </button>
              </div>
            </div>

            {/* Verified Client Experiences */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold font-montserrat text-neutral-900">
                    Client Experiences & Review Dossier
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    Verified feedback from buyers who acquired residences in this development corridor.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold border border-neutral-200 font-mono">
                  4.95 / 5.0 Rating
                </span>
              </div>

              <div className="space-y-4">
                {REVIEWS.slice(0, 2).map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                        />
                        <div>
                          <span className="text-xs font-bold text-neutral-900 block">{rev.author}</span>
                          <span className="text-[10px] text-neutral-500">{rev.role}</span>
                        </div>
                      </div>
                      <div className="flex text-neutral-900 text-xs">
                        {'★'.repeat(rev.rating)}
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                      "{rev.content}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Schedule Private Tour & Advisor Contact Card (Sticky) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-md sticky top-24">
              <div className="flex items-center gap-3 pb-6 border-b border-neutral-200">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-neutral-200 shadow-xs"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Exclusive Listing Advisor
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 font-montserrat">
                    {property.agent.name}
                  </h3>
                  <p className="text-xs text-neutral-500">{property.agent.role}</p>
                </div>
              </div>

              {/* Instant Contact CTA Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-xl text-xs font-bold border border-neutral-200 transition-colors"
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
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold border border-neutral-900 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  WhatsApp
                </a>
              </div>

              {/* Private Showing Request Form */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="text-sm font-bold text-neutral-900 font-montserrat mb-1">
                  Schedule Private Viewing
                </h4>
                <p className="text-xs text-neutral-500 mb-4">
                  Request an exclusive private walkthrough or live video tour.
                </p>

                {inquirySubmitted ? (
                  <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-300 text-center space-y-2">
                    <span className="material-symbols-outlined text-3xl text-neutral-900">check_circle</span>
                    <h5 className="text-xs font-bold text-neutral-900">Viewing Request Confirmed</h5>
                    <p className="text-[11px] text-neutral-600">
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
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none h-10 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (+91 ...)"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none h-10 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none h-10 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none h-10 transition-all text-neutral-700"
                      />
                    </div>
                    <div>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none h-10 transition-all text-neutral-700 cursor-pointer"
                      >
                        <option>In-Person Site Visit</option>
                        <option>Live High-Res Video Walkthrough</option>
                        <option>Title & Legal Diligence Consultation</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer mt-2"
                    >
                      Confirm Showing Request
                    </button>
                  </form>
                )}
              </div>

              {/* RERA Title Safety Assurance */}
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-start gap-2.5 text-xs text-neutral-600">
                <span className="material-symbols-outlined text-neutral-900 text-lg flex-shrink-0">
                  security
                </span>
                <p className="text-[11px] leading-tight">
                  <strong className="text-neutral-900">Realic Title Guarantee:</strong> Every property on our platform has zero legal disputes and complete title encumbrance certificates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Curated Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl font-bold font-montserrat text-neutral-900 mb-6">
              Similar Curated Residences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col group"
                >
                  <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-neutral-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {prop.city}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-xs font-bold text-neutral-900 border border-neutral-200">
                      {prop.priceDisplay}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <Link href={`/properties/${prop.slug}`} className="hover:text-neutral-600">
                        <h4 className="font-bold text-sm text-neutral-900 font-montserrat truncate">
                          {prop.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-neutral-500 mt-1">{prop.location}</p>
                    </div>
                    <div className="pt-3 mt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <span className="text-neutral-600">{prop.bedrooms} BHK • {prop.sqft.toLocaleString()} sqft</span>
                      <Link
                        href={`/properties/${prop.slug}`}
                        className="text-neutral-900 font-bold hover:underline"
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

      {/* Fullscreen Lightbox Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="w-full max-w-6xl flex items-center justify-between text-white mb-3 px-2">
            <span className="text-sm sm:text-base font-bold font-montserrat truncate">
              {fullscreenTitle || property.title}
            </span>
            <button
              type="button"
              onClick={() => setFullscreenImage(null)}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close fullscreen"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div
            className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullscreenImage}
              alt={fullscreenTitle || 'Detail view'}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl bg-white/5"
            />
          </div>
        </div>
      )}
    </div>
  );
}
