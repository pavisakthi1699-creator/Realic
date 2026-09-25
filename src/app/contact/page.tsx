import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Support | Realic Property Consultant',
  description:
    'Boutique Support for Discerning Clients. Our dedicated property experts are ready to assist with your real estate inquiries across Bangalore and premier corridors.',
  openGraph: {
    title: 'Contact Support | Realic Property Consultant',
    description:
      'Boutique Support for Discerning Clients. Our dedicated property experts are ready to assist with your real estate inquiries.',
    url: 'https://realicproperty.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
