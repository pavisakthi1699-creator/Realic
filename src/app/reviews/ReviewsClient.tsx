'use client';

import React, { useState, useMemo } from 'react';
import { REVIEWS, Review } from '@/data/reviews';
import { toast } from 'sonner';

export default function ReviewsClient() {
  const [activeType, setActiveType] = useState<'All' | 'Buyer' | 'Seller' | 'NRI Investor'>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Submit Review Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [role, setRole] = useState('');
  const [propertyTitle, setPropertyTitle] = useState('');
  const [rating, setRating] = useState(5);
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');

  const allTags = useMemo(() => {
    const set = new Set<string>();
    REVIEWS.forEach((r) => r.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const filteredReviews = useMemo(() => {
    return REVIEWS.filter((r) => {
      if (activeType !== 'All' && r.transactionType !== activeType) return false;
      if (selectedTag !== 'All' && !r.tags.includes(selectedTag)) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          r.author.toLowerCase().includes(q) ||
          r.content.toLowerCase().includes(q) ||
          r.headline.toLowerCase().includes(q) ||
          (r.propertyTitle && r.propertyTitle.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [activeType, selectedTag, searchQuery]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !headline.trim() || !content.trim()) {
      toast.error('Please complete all required fields');
      return;
    }
    toast.success('Thank you! Your verified client review has been submitted for moderation.');
    setIsModalOpen(false);
    setAuthorName('');
    setRole('');
    setPropertyTitle('');
    setHeadline('');
    setContent('');
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header Banner */}
      <section className="bg-slate-50 text-slate-900 py-16 md:py-20 px-4 md:px-8 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-black block mb-2">
              Verified Client Dossier
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-montserrat tracking-tight text-black">
              Community Reviews & Endorsements
            </h1>
            <p className="text-neutral-600 text-sm md:text-base mt-3 leading-relaxed">
              Read verified testimonials from property owners, homebuyers, and global NRI investors who completed transactions with Realic.
            </p>
          </div>
        </div>
      </section>

      {/* Aggregate Rating Metrics Card */}
      <section className="py-10 bg-white border-b border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-left">
              <div className="text-5xl font-extrabold font-montserrat text-black">
                4.95
              </div>
              <div className="flex text-black text-lg mt-1 justify-center sm:justify-start">
                ★★★★★
              </div>
              <span className="text-xs text-neutral-500 mt-0.5 block">
                Based on 480+ verified transactions
              </span>
            </div>

            <div className="h-12 w-px bg-neutral-200 hidden sm:block"></div>

            {/* Score Breakdowns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-black block">99.8%</span>
                <span className="text-neutral-500">Title Accuracy</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-black block">24 Hours</span>
                <span className="text-neutral-500">Instant Valuation</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-black block">100%</span>
                <span className="text-neutral-500">RERA Compliance</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-black block">0 Disputes</span>
                <span className="text-neutral-500">Settlement Safety</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">rate_review</span>
            Write a Verified Review
          </button>
        </div>
      </section>

      {/* Filter & Review Cards Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {(['All', 'Buyer', 'Seller', 'NRI Investor'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeType === type
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-black'
                }`}
              >
                {type === 'All' ? 'All Reviews' : `${type}s`}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-base">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, location, or tag..."
              className="w-full pl-9 pr-3 py-2 bg-white text-xs rounded-xl border border-neutral-200 focus:border-black outline-none h-10 shadow-xs text-black"
            />
          </div>
        </div>

        {/* Tag pills */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <span className="text-xs text-neutral-500 font-medium">Topic Tags:</span>
          <button
            onClick={() => setSelectedTag('All')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              selectedTag === 'All'
                ? 'bg-black text-white'
                : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            All Topics
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                selectedTag === tag
                  ? 'bg-black text-white'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review: Review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-2xl object-cover border border-neutral-200"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-black font-montserrat">
                        {review.author}
                      </h3>
                      {review.verifiedTransaction && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 text-black border border-neutral-200 inline-flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">verified</span>
                          Verified {review.transactionType}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-500">
                      {review.role} • {review.location}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between">
                  <div className="flex text-black text-sm">
                    {'★'.repeat(review.rating)}
                  </div>
                  <span className="text-[11px] text-neutral-500 mt-0.5">
                    {review.date}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                {review.propertyTitle && (
                  <div className="text-xs font-semibold text-black mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">home</span>
                    Transaction: {review.propertyTitle}
                  </div>
                )}
                <h4 className="font-bold text-base text-black font-montserrat mt-1">
                  "{review.headline}"
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">
                  {review.content}
                </p>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-neutral-200 flex-wrap">
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-neutral-100 text-[11px] font-medium text-neutral-800 border border-neutral-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black transition-colors p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-xl font-bold font-montserrat text-black mb-1">
              Submit Your Client Experience
            </h3>
            <p className="text-xs text-neutral-600 mb-6">
              Your feedback is audited against your transaction registry and displayed to prospective buyers and sellers.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Dr. Rajesh Verma"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:border-black outline-none h-10 text-black"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Designation / Role
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Director, TechVentures / Property Owner"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:border-black outline-none h-10 text-black"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Property Transacted
                </label>
                <input
                  type="text"
                  value={propertyTitle}
                  onChange={(e) => setPropertyTitle(e.target.value)}
                  placeholder="e.g. Penthouse on Bailey Road, Patna"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:border-black outline-none h-10 text-black"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Rating (1 to 5 Stars)
                </label>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:border-black outline-none h-10 text-black"
                >
                  <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                  <option value={4}>★★★★☆ (4 Stars - Highly Satisfied)</option>
                  <option value={3}>★★★☆☆ (3 Stars - Satisfactory)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  placeholder="e.g. Flawless title verification and swift closing"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:border-black outline-none h-10 text-black"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Detailed Experience
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  placeholder="Describe the transaction process, legal due diligence, and advisory support..."
                  className="w-full p-3 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:border-black outline-none text-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Submit Review For Verification
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
