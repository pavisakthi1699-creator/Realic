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
    'Premier real estate consultancy in Patna, Bangalore and top luxury corridors. Verified penthouses, contemporary villas, instant cash offers, and 100% legal title diligence.',
  keywords: [
    'Realic Property Consultant',
    'Real Estate Patna',
    'Luxury Apartments Bangalore',
    'Properties in Patna',
    'Penthouses Bailey Road Patna',
    'Villas in Bangalore',
    'Whitefield Luxury Homes',
    'Sell Property Fast',
    'Instant Cash Offer Real Estate',
    'RERA Verified Real Estate',
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
      'Verified luxury estates, penthouses, and modern villas in Patna & Bangalore with complete legal title audit and seamless closing.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Realic Property Consultant Luxury Residences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Realic Property Consultant | High-End Real Estate',
    description:
      'Curated luxury residences in Patna & Bangalore with verified legal title diligence.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80'],
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
      'Premier real estate consultancy providing verified luxury properties, legal title audits, and instant sale valuations in Patna and Bangalore.',
    telephone: '+91 94310 98765',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Bailey Heights, Near Saguna More, Bailey Road',
        addressLocality: 'Patna',
        addressRegion: 'Bihar',
        postalCode: '801503',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Tower 4, Prestige Lakeside Habitat, Varthur Main Rd',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560087',
        addressCountry: 'IN',
      },
    ],
    priceRange: '₹1.1 Cr - ₹15.0 Cr',
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
