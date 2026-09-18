'use client';

import React, { useState, useEffect } from 'react';
import { Inquiry } from '@/data/store';
import { toast } from 'sonner';

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch inquiries
  async function fetchInquiries() {
    try {
      setLoading(true);
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      if (data.success) {
        setInquiries(data.data);
      }
    } catch (err) {
      console.error('Failed to load inquiries', err);
      toast.error('Failed to load leads');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInquiries();
  }, []);

  // Update Status
  async function updateStatus(id: string, newStatus: Inquiry['status']) {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Lead status updated to ${newStatus}`);
        setInquiries((prev) =>
          prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
        );
      } else {
        toast.error(data.message || 'Failed to update status');
      }
    } catch (err) {
      toast.error('Network error updating status');
    }
  }

  // Filter inquiries
  const filtered = inquiries.filter((inq) => {
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      (inq.email && inq.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (inq.propertyTitle && inq.propertyTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const countNew = inquiries.filter((i) => i.status === 'New').length;
  const countContacted = inquiries.filter((i) => i.status === 'Contacted').length;
  const countQualified = inquiries.filter((i) => i.status === 'Qualified').length;
  const countClosed = inquiries.filter((i) => i.status === 'Closed').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl lg:text-3xl font-bold font-montserrat tracking-tight text-slate-900">
              Client Inquiries & Acquisition Pipeline
            </h1>
            <span className="px-2.5 py-1 text-xs font-semibold bg-[#D4AF37]/15 text-[#E6CA65] rounded-full border border-[#D4AF37]/30">
              {inquiries.length} Total Leads
            </span>
          </div>
          <p className="text-sm text-slate-600 mt-1">
            Real-time pipeline of VIP showings, seller instant valuation submissions, and advisory requests.
          </p>
        </div>

        <button
          onClick={fetchInquiries}
          className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-[16px]">refresh</span>
          <span>Refresh Pipeline</span>
        </button>
      </div>

      {/* KPI Status Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => setStatusFilter('New')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            statusFilter === 'New'
              ? 'bg-white shadow-sm border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
              : 'bg-white shadow-sm border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">New Leads</span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          </div>
          <p className="text-2xl lg:text-3xl font-bold font-montserrat text-slate-900 mt-2">{countNew}</p>
          <p className="text-[11px] text-slate-500 mt-1">Awaiting initial concierge touchpoint</p>
        </div>

        <div
          onClick={() => setStatusFilter('Contacted')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            statusFilter === 'Contacted'
              ? 'bg-white shadow-sm border-blue-500 shadow-lg shadow-blue-500/10'
              : 'bg-white shadow-sm border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Contacted</span>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
          </div>
          <p className="text-2xl lg:text-3xl font-bold font-montserrat text-slate-900 mt-2">{countContacted}</p>
          <p className="text-[11px] text-slate-500 mt-1">Consultation or site visit scheduling in progress</p>
        </div>

        <div
          onClick={() => setStatusFilter('Qualified')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            statusFilter === 'Qualified'
              ? 'bg-white shadow-sm border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
              : 'bg-white shadow-sm border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#E6CA65] font-bold uppercase tracking-wider">Qualified</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
          </div>
          <p className="text-2xl lg:text-3xl font-bold font-montserrat text-slate-900 mt-2">{countQualified}</p>
          <p className="text-[11px] text-slate-500 mt-1">Budget verified, legal search or token pending</p>
        </div>

        <div
          onClick={() => setStatusFilter('Closed')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            statusFilter === 'Closed'
              ? 'bg-white shadow-sm border-emerald-500 shadow-lg shadow-emerald-500/10'
              : 'bg-white shadow-sm border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Closed</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          </div>
          <p className="text-2xl lg:text-3xl font-bold font-montserrat text-slate-900 mt-2">{countClosed}</p>
          <p className="text-[11px] text-slate-500 mt-1">Registry executed or offer accepted</p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600 text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search by client name, phone number, property..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white shadow-sm border border-slate-200 text-slate-900 text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs text-slate-600 font-medium whitespace-nowrap">Filter:</span>
          {['All', 'New', 'Contacted', 'Qualified', 'Closed'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                statusFilter === st
                  ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-md shadow-[#D4AF37]/20'
                  : 'bg-white shadow-sm text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Inquiries Table */}
      <div className="rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-16 text-center">
            <div className="inline-block w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs text-slate-600 mt-3">Loading lead pipeline...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-16 text-center">
            <span className="material-symbols-outlined text-4xl text-slate-600 mb-2">inbox</span>
            <p className="text-sm font-semibold text-slate-900">No inquiries found</p>
            <p className="text-xs text-slate-600 mt-1">Try resetting the status filter or search query.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[10px]">
                  <th className="py-3.5 px-4">Client Details</th>
                  <th className="py-3.5 px-4">Inquiry Type</th>
                  <th className="py-3.5 px-4">Interest / Property</th>
                  <th className="py-3.5 px-4">Client Notes</th>
                  <th className="py-3.5 px-4">Received</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Update Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filtered.map((inq) => {
                  const whatsappClean = inq.phone.replace(/[^0-9]/g, '');
                  return (
                    <tr key={inq.id} className="hover:bg-slate-50 transition-colors group">
                      {/* Client */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 flex items-center justify-center text-slate-900 font-bold font-montserrat text-xs flex-shrink-0">
                            {inq.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{inq.name}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <a
                                href={`tel:${inq.phone}`}
                                className="text-slate-600 hover:text-[#E6CA65] flex items-center gap-1 font-mono text-[11px]"
                              >
                                <span className="material-symbols-outlined text-[13px]">call</span>
                                {inq.phone}
                              </a>
                              {whatsappClean && (
                                <a
                                  href={`https://wa.me/${whatsappClean}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-emerald-400 hover:text-emerald-300 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20"
                                >
                                  WhatsApp
                                </a>
                              )}
                            </div>
                            {inq.email && (
                              <p className="text-[10px] text-slate-500 mt-0.5">{inq.email}</p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Inquiry Type */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${
                            inq.type === 'Showing'
                              ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                              : inq.type === 'Instant Offer'
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                              : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                          }`}
                        >
                          {inq.type}
                        </span>
                      </td>

                      {/* Property */}
                      <td className="py-3.5 px-4">
                        <p className="text-slate-800 font-medium line-clamp-1 max-w-xs">
                          {inq.propertyTitle || 'General Portfolio Diligence'}
                        </p>
                      </td>

                      {/* Notes */}
                      <td className="py-3.5 px-4">
                        <p className="text-slate-600 line-clamp-2 text-[11px] max-w-xs">
                          {inq.notes || '—'}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-500 text-[11px]">
                        {inq.createdAt}
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                            inq.status === 'New'
                              ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                              : inq.status === 'Contacted'
                              ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                              : inq.status === 'Qualified'
                              ? 'bg-[#D4AF37]/15 text-[#E6CA65] border-[#D4AF37]/30'
                              : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              inq.status === 'New'
                                ? 'bg-amber-400'
                                : inq.status === 'Contacted'
                                ? 'bg-blue-400'
                                : inq.status === 'Qualified'
                                ? 'bg-[#D4AF37]'
                                : 'bg-emerald-400'
                            }`}
                          ></span>
                          {inq.status}
                        </span>
                      </td>

                      {/* Update Action */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <select
                          value={inq.status}
                          onChange={(e) => updateStatus(inq.id, e.target.value as Inquiry['status'])}
                          className="px-2.5 py-1 rounded-lg bg-white shadow-sm border border-slate-200 text-slate-900 text-[11px] focus:outline-none focus:border-[#D4AF37]"
                        >
                          <option value="New">Mark New</option>
                          <option value="Contacted">Mark Contacted</option>
                          <option value="Qualified">Mark Qualified</option>
                          <option value="Closed">Mark Closed</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
