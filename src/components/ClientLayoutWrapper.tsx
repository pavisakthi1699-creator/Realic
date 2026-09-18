'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = Boolean(pathname?.startsWith('/admin'));

  if (isAdmin) {
    // Admin panel is self-contained with its own executive dashboard and controls.
    // Public website navbar and footer are completely excluded.
    return <main className="min-h-screen flex flex-col">{children}</main>;
  }

  const isHome = pathname === '/';

  return (
    <>
      <Navbar />
      <main className={`flex-grow ${isHome ? '' : 'pt-16'}`}>{children}</main>
      <Footer />
    </>
  );
}
