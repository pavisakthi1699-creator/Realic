import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROPERTIES } from '@/data/properties';
import PropertyDetailClient from './PropertyDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    id: property.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = PROPERTIES.find((p) => p.slug === id || p.id === id);

  if (!property) {
    return {
      title: 'Property Not Found | Realic Property Consultant',
    };
  }

  return {
    title: `${property.title} - ${property.city}`,
    description: `${property.subtitle}. Located in ${property.location}. Price: ${property.priceDisplay}. RERA ID: ${property.reraId}. ${property.description.slice(0, 140)}...`,
    openGraph: {
      title: `${property.title} | Realic Luxury Residences`,
      description: `${property.subtitle} - ${property.priceDisplay}. Verified RERA Listing in ${property.city}.`,
      url: `https://realicproperty.com/properties/${property.slug}`,
      images: [
        {
          url: property.images[0],
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: property.title,
      description: `${property.subtitle} • ${property.priceDisplay}`,
      images: [property.images[0]],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params;
  const property = PROPERTIES.find((p) => p.slug === id || p.id === id);

  if (!property) {
    notFound();
  }

  const jsonLdProperty = {
    '@context': 'https://schema.org',
    '@type': property.propertyType === 'Villa' ? 'SingleFamilyResidence' : 'Apartment',
    name: property.title,
    description: property.description,
    image: property.images,
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.sqft,
      unitCode: 'FTK',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.coordinates.lat,
      longitude: property.coordinates.lng,
    },
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProperty) }}
      />
      <PropertyDetailClient property={property} />
    </>
  );
}
