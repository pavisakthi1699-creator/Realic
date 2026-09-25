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
    return <div className="min-h-screen flex flex-col">{children}</div>;
  }

  const isProperties = pathname === '/properties';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className={isProperties ? 'h-screen pt-16 overflow-hidden flex flex-col' : 'flex-grow pt-16'}>
        {children}
      </div>
      {!isProperties && <Footer />}
    </div>
  );
}
