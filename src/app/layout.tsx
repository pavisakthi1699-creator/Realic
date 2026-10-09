import type { Metadata, Viewport } from 'next';
import './globals.css';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import { Toaster } from 'sonner';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://realicproperty.com'),
  title: {
    default: 'Realic Property Consultant | High-End Real Estate & Advisory',
    template: '%s | Realic Property Consultant',
  },
  description:
    'Premier real estate consultancy in Patna and top Bihar luxury corridors. Verified penthouses, contemporary high-rises, developer sole mandates, and 100% legal title diligence.',
  keywords: [
    'Realic Property Consultant',
    'Real Estate Patna',
    'Luxury Apartments Patna',
    'Properties in Patna',
    'Penthouses Bailey Road Patna',
    'Atal Path Luxury Residences',
    'AIIMS Digha Elevated Corridor',
    'Ganga Marine Drive Flats',
    'Danapur Gated Communities',
    'RERA Verified Real Estate Bihar',
  ],
  authors: [{ name: 'Realic Property Consultant' }],
  creator: 'Realic Advisory Group',
  publisher: 'Realic OmniHome Private Limited',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://realicproperty.com',
    siteName: 'Realic Property Consultant',
    title: 'Realic Property Consultant | High-End Real Estate & Advisory',
    description:
      'Verified luxury estates, penthouses, and modern high-rises in Patna with complete legal title audit and seamless closing.',
    images: [
      {
        url: '/images/projects/winsome-icon/day-elevation-glass-tower.jpg',
        width: 1200,
        height: 630,
        alt: 'Realic Property Consultant Luxury Residences Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Realic Property Consultant | High-End Real Estate',
    description:
      'Curated luxury residences in Patna with verified legal title diligence.',
    images: ['/images/projects/winsome-icon/day-elevation-glass-tower.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Realic Property Consultant',
    url: 'https://realicproperty.com',
    logo: 'https://realicproperty.com/logo.png',
    description:
      'Premier real estate consultancy providing verified luxury properties, legal title audits, and developer partnerships in Patna, Bihar.',
    telephone: '+91 91025 99969',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bailey Road Corridor, Near Saguna More & Atal Path Link',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      postalCode: '800001',
      addressCountry: 'IN',
    },
    priceRange: '₹60 L - ₹15.0 Cr',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="bg-surface-pure text-on-surface antialiased min-h-screen flex flex-col font-inter selection:bg-secondary selection:text-white">
        <Toaster position="top-right" richColors />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
