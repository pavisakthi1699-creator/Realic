'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Property } from '@/data/properties';
import { BlogArticle } from '@/data/blogs';
import { Inquiry } from '@/data/store';

export default function AdminDashboardPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [blogs, setBlogs] = useState<BlogArticle[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [propsRes, blogsRes, inqRes] = await Promise.all([
          fetch('/api/properties').then((r) => r.json()),
          fetch('/api/blogs').then((r) => r.json()),
          fetch('/api/inquiries').then((r) => r.json()),
        ]);
        if (propsRes.success) setProperties(propsRes.data);
        if (blogsRes.success) setBlogs(blogsRes.data);
        if (inqRes.success) setInquiries(inqRes.data);
      } catch (err) {
        console.error('Failed to load dashboard data', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const totalValuationCr = (
    properties.reduce((acc, p) => acc + (p.price || 0), 0) / 10000000
  ).toFixed(2);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner (White Theme) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
              System Live • Cloud Database Connected
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-slate-950 tracking-tight">
            Executive Operations Desk
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Publish, edit, and audit luxury residences, editorial market reports, and private client leads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/properties"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">add_circle</span>
            Manage Properties
          </Link>
          <Link
            href="/admin/blogs"
            className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">post_add</span>
            Create Article
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid (White Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Properties */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Active Residences</span>
            <span className="p-2 rounded-lg bg-blue-50 text-secondary">
              <span className="material-symbols-outlined text-xl">apartment</span>
            </span>
          </div>
          <div className="text-3xl font-extrabold font-montserrat text-slate-950">
            {loading ? '...' : properties.length}
          </div>
          <p className="text-xs text-slate-500 mt-1">Patna & Bangalore Luxury Corridors</p>
        </div>

        {/* Portfolio Valuation */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Portfolio Valuation</span>
            <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
              <span className="material-symbols-outlined text-xl">account_balance</span>
            </span>
          </div>
          <div className="text-3xl font-extrabold font-montserrat text-slate-950">
            ₹{loading ? '...' : totalValuationCr} Cr
          </div>
          <p className="text-xs text-slate-500 mt-1">Total active inventory value</p>
        </div>

        {/* Published Blogs */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Published Articles</span>
            <span className="p-2 rounded-lg bg-amber-50 text-[#B8860B]">
              <span className="material-symbols-outlined text-xl">article</span>
            </span>
          </div>
          <div className="text-3xl font-extrabold font-montserrat text-slate-950">
            {loading ? '...' : blogs.length}
          </div>
          <p className="text-xs text-slate-500 mt-1">Market trends & legal guidance</p>
        </div>

        {/* Inquiries */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Lead Inquiries</span>
            <span className="p-2 rounded-lg bg-purple-50 text-purple-600">
              <span className="material-symbols-outlined text-xl">mark_email_unread</span>
            </span>
          </div>
          <div className="text-3xl font-extrabold font-montserrat text-slate-950">
            {loading ? '...' : inquiries.length}
          </div>
          <p className="text-xs text-slate-500 mt-1">Showing & valuation requests</p>
        </div>
      </div>

      {/* 2-Column Split: Recent Properties & Recent Inquiries (White Theme) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Properties Snapshot (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-bold font-montserrat text-slate-950">
                  Active Property Portfolio
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Recently added or updated listings</p>
              </div>
              <Link
                href="/admin/properties"
                className="text-xs font-bold text-secondary hover:underline"
              >
                View all ({properties.length}) &rarr;
              </Link>
            </div>

            <div className="space-y-3">
              {properties.slice(0, 4).map((prop) => (
                <div
                  key={prop.id}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-14 h-12 rounded-xl object-cover flex-shrink-0 border border-slate-200"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">{prop.title}</h4>
                      <p className="text-[11px] text-slate-500 truncate">
                        {prop.city} • {prop.locality}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs font-bold text-slate-900 block font-montserrat">
                      {prop.priceDisplay}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {prop.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
            <span>Showing recent 4 records</span>
            <Link href="/admin/properties" className="font-semibold text-secondary hover:underline">
              Open Inventory Manager &rarr;
            </Link>
          </div>
        </div>

        {/* Lead Inquiries Queue (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-bold font-montserrat text-slate-950">
                  Recent Inbound Leads
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">VIP Showings & instant cash offers</p>
              </div>
              <Link
                href="/admin/inquiries"
                className="text-xs font-bold text-secondary hover:underline"
              >
                View all ({inquiries.length}) &rarr;
              </Link>
            </div>

            <div className="space-y-3">
              {inquiries.slice(0, 4).map((inq) => (
                <div
                  key={inq.id}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{inq.name}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        inq.status === 'New'
                          ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : inq.status === 'Contacted'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : inq.status === 'Qualified'
                          ? 'bg-[#D4AF37]/15 text-[#9E7A0C] border-[#D4AF37]/30'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 truncate font-mono">{inq.phone}</p>
                  <p className="text-[10px] text-slate-500 truncate">
                    Interest: {inq.propertyTitle || 'General Diligence'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
            <span>Showing recent 4 inquiries</span>
            <Link href="/admin/inquiries" className="font-semibold text-secondary hover:underline">
              Open Leads Queue &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
