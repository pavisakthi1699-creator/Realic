'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Login Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check stored auth session
  useEffect(() => {
    const session = localStorage.getItem('realic_admin_session');
    if (session === 'active') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const navItems = [
    { label: 'Overview', href: '/admin', icon: 'dashboard' },
    { label: 'Properties Manager', href: '/admin/properties', icon: 'real_estate_agent' },
    { label: 'Blog & Articles CMS', href: '/admin/blogs', icon: 'article' },
    { label: 'Lead Inquiries', href: '/admin/inquiries', icon: 'contact_phone' },
  ];

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const cleanEmail = email.trim().toLowerCase();
      const cleanPass = password.trim();

      const validEmails = ['admin@realicconsultant.com', 'admin', 'pavid@realic.com'];
      const validPasswords = ['Realic@2026', 'admin123', 'admin@2026'];

      if (validEmails.includes(cleanEmail) && validPasswords.includes(cleanPass)) {
        localStorage.setItem('realic_admin_session', 'active');
        localStorage.setItem('realic_admin_user', cleanEmail);
        setIsAuthenticated(true);
        toast.success('Welcome back, Executive Administrator');
      } else {
        setLoginError('Invalid credentials. Please verify your email and security key.');
        toast.error('Authentication failed');
      }
      setIsSubmitting(false);
    }, 300);
  }

  function handleLogout() {
    localStorage.removeItem('realic_admin_session');
    localStorage.removeItem('realic_admin_user');
    setIsAuthenticated(false);
    toast.info('Signed out of executive console');
  }

  // Loading Session Check
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // LOGIN SCREEN (White Theme)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F1F5F9] text-slate-900 flex flex-col justify-center items-center p-4 relative overflow-hidden">
        {/* Login Container */}
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 sm:p-10 relative z-10">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-3">
              <img
                src="/images/realic-logo.png"
                alt="Realic Property Consultant"
                style={{ height: '46px', width: 'auto' }}
                className="h-11 w-auto mx-auto object-contain"
              />
            </Link>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#9E7A0C] text-[10px] font-bold tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              Restricted Operations Desk
            </div>
            <h1 className="text-xl font-bold font-montserrat text-slate-900">
              Executive Portal Authentication
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Sign in with institutional credentials to manage inventory and editorial content.
            </p>
          </div>

          {/* Error Banner */}
          {loginError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700">
              <span className="material-symbols-outlined text-red-500 text-base flex-shrink-0">
                error
              </span>
              <span>{loginError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Administrator Email / ID
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                  person
                </span>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@realicconsultant.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Security Passkey
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                  lock
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#B89628] text-slate-950 text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">vpn_key</span>
                  <span>Sign In to Executive Desk</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[14px]">arrow_back</span>
              <span>Return to Public Marketplace</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN CONSOLE (White Theme)
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col md:flex-row antialiased">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 shadow-xs">
        {/* Top Left Branding with Official Gold Logo */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <img
              src="/images/realic-logo.png"
              alt="Realic Logo"
              style={{ height: '42px', width: 'auto' }}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-[#D4AF37]/15 text-[#9E7A0C] border border-[#D4AF37]/30 px-2 py-0.5 rounded">
            Admin
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1.5 flex-grow">
          {navItems.map((item) => {
            const isActive =
              item.href === '/admin'
                ? pathname === '/admin'
                : Boolean(pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-md shadow-[#D4AF37]/20'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Sidebar: Return to Live Site & User Session */}
        <div className="p-4 border-t border-slate-200 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 text-xs font-bold border border-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">open_in_new</span>
            Open Live Marketplace
          </Link>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#9E7A0C] font-bold text-xs flex-shrink-0">
                AD
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-slate-900 block truncate">Administrator</span>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Session
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header: Clean title without redundant right-side logo */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
          <div className="flex items-center gap-3">
            <h2 className="text-xs sm:text-sm font-bold font-montserrat text-slate-900 uppercase tracking-wider">
              Operations & Advisory Desk
            </h2>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span className="hidden sm:inline">Back to Client Portal</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-50 border border-red-200 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">logout</span>
              <span>Sign Out</span>
            </button>
          </div>
        </header>

        {/* Page Canvas */}
        <main className="p-6 md:p-8 flex-grow">{children}</main>
      </div>
    </div>
  );
}
