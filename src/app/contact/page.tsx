import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Support & Advisory | Patna & Bangalore Suites',
  description:
    'Contact Realic Property Consultant. Schedule private showings, request legal title due diligence, or visit our executive suites in Bailey Road, Patna and Whitefield, Bangalore.',
  openGraph: {
    title: 'Contact Realic Property Consultant | Private Client Advisory',
    description:
      'Connect with senior partners in Patna and Bangalore for discreet luxury acquisitions and verified sales.',
    url: 'https://realicproperty.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
