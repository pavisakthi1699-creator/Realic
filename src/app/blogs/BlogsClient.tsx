'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogArticle } from '@/data/blogs';

export default function BlogsClient() {
  const [blogs, setBlogs] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
        }
      } catch (err) {
        console.error('Failed to load blogs', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const categories = [
    'All',
    'Market Trends',
    'Legal & RERA',
    'Patna Corridors',
    'Luxury Living',
    'NRI Advisory',
  ];

  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogs.find((b) => b.featured) || blogs[0];
  const gridBlogs = featuredBlog
    ? filteredBlogs.filter((b) => b.id !== featuredBlog.id)
    : filteredBlogs;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Editorial Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#9E7A0C] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              Research & Advisory Intelligence
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat tracking-tight text-slate-950 leading-[1.15]">
              The Realic <span className="text-[#B8860B]">Quarterly Journal</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              In-depth market intelligence, RERA title audit frameworks, corridor price indices, and wealth advisory reports for Patna and Bangalore luxury real estate.
            </p>
          </div>

          {/* Search & Categories Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-md shadow-[#D4AF37]/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                search
              </span>
              <input
                type="text"
                placeholder="Search market reports, RERA, corridors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="py-24 text-center">
            <div className="inline-block w-10 h-10 border-3 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-semibold text-slate-500 mt-4">Curating market research publications...</p>
          </div>
        ) : (
          <>
            {/* Featured Article Hero (When on 'All' or no filter) */}
            {selectedCategory === 'All' && !searchQuery && featuredBlog && (
              <div className="mb-14">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl group hover:border-[#D4AF37]/60 hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[380px] overflow-hidden bg-slate-100">
                      <img
                        src={featuredBlog.coverImage}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-slate-950 font-bold text-[11px] tracking-wider uppercase shadow-md">
                          Cover Story
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                          <span className="text-[#B8860B] font-bold uppercase tracking-wider">{featuredBlog.category}</span>
                          <span>•</span>
                          <span>{featuredBlog.readTime}</span>
                          <span>•</span>
                          <span>{featuredBlog.publishedAt}</span>
                        </div>

                        <Link href={`/blogs/${featuredBlog.slug}`}>
                          <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-slate-950 group-hover:text-[#B8860B] transition-colors leading-snug">
                            {featuredBlog.title}
                          </h2>
                        </Link>

                        <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                          {featuredBlog.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {featuredBlog.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] text-slate-600 font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={featuredBlog.author.avatar}
                            alt={featuredBlog.author.name}
                            className="w-10 h-10 rounded-full object-cover border border-slate-200"
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-900">{featuredBlog.author.name}</p>
                            <p className="text-[10px] text-slate-500">{featuredBlog.author.role}</p>
                          </div>
                        </div>

                        <Link
                          href={`/blogs/${featuredBlog.slug}`}
                          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#D4AF37] text-white hover:text-slate-950 font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
                        >
                          <span>Read Report</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold font-montserrat text-slate-900">
                {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Intelligence`}
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Showing {filteredBlogs.length} articles
              </span>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="p-16 rounded-3xl bg-slate-50 border border-slate-200 text-center">
                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">menu_book</span>
                <p className="text-base font-semibold text-slate-900">No publications match your criteria</p>
                <p className="text-xs text-slate-500 mt-1">Try resetting the category filter or searching for another term.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-[#D4AF37] text-slate-950 text-xs font-bold uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory === 'All' && !searchQuery ? gridBlogs : filteredBlogs).map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <Link href={`/blogs/${article.slug}`} className="block relative h-52 overflow-hidden bg-slate-100">
                        <img
                          src={article.coverImage}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#9E7A0C] border border-slate-200 shadow-xs">
                            {article.category}
                          </span>
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2.5 font-medium">
                          <span>{article.publishedAt}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>

                        <Link href={`/blogs/${article.slug}`}>
                          <h4 className="text-lg font-bold font-montserrat text-slate-950 group-hover:text-[#B8860B] transition-colors leading-snug line-clamp-2">
                            {article.title}
                          </h4>
                        </Link>

                        <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Author & Read More */}
                    <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/70">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        />
                        <span className="text-xs text-slate-700 font-semibold">{article.author.name}</span>
                      </div>

                      <Link
                        href={`/blogs/${article.slug}`}
                        className="text-xs font-bold text-[#B8860B] hover:text-[#9E7A0C] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Newsletter / Institutional Advisory Briefing */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#9E7A0C] text-xs font-bold uppercase tracking-wider mb-4">
            Private Investor Briefing
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-slate-950">
            Receive Our Monthly Patna & Bangalore Intelligence
          </h3>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
            Get exclusive early access to pre-launch sky penthouses, infrastructure growth updates, and 30-year title diligence reports directly in your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to Realic Institutional Briefings.');
            }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-slate-950 text-xs font-bold uppercase tracking-wider hover:shadow-md transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-slate-500 mt-3">
            Zero spam. Strictly confidential institutional research.
          </p>
        </div>
      </section>
    </div>
  );
}
