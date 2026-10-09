export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  transactionType: 'Buyer' | 'Seller' | 'NRI Investor';
  propertyTitle?: string;
  headline: string;
  content: string;
  verifiedTransaction: boolean;
  tags: string[];
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Amit Sharma',
    role: 'Managing Director, TechVentures',
    location: 'Bailey Road, Patna',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'August 14, 2026',
    transactionType: 'Buyer',
    propertyTitle: 'Winsome Icon - 4 BHK Sky Residence on AIIMS-Digha Corridor',
    headline: 'Flawless legal verification and white-glove closing',
    content:
      'Buying an upscale property while managing business travel seemed daunting until we engaged Realic. Their legal team discovered an unresolved encumbrance on an earlier property we liked and saved us from a costly mistake, then guided us to our dream residence at Winsome Icon. Absolute integrity.',
    verifiedTransaction: true,
    tags: ['Legal Audit', 'AIIMS-Digha', 'Prompt Closing'],
  },
  {
    id: 'rev-2',
    author: 'Priya R.',
    role: 'Principal Architect & Design Consultant',
    location: 'Patna, Bihar',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'July 29, 2026',
    transactionType: 'Buyer',
    propertyTitle: '3 BHK Luxury Sky Penthouse on Bailey Road',
    headline: 'Unrivaled curated portfolio in Patna',
    content:
      'Most local brokers in Patna deal in opaque listings and outdated photos. Realic feels like an international private wealth advisory firm. Every floor plan, RERA certificate, and architectural specification was verified before our first site visit.',
    verifiedTransaction: true,
    tags: ['Patna Luxury', 'Architectural Clarity', 'RERA Compliant'],
  },
  {
    id: 'rev-3',
    author: 'Karthik Iyer',
    role: 'VP Product, Global SaaS',
    location: 'San Jose, CA / Patna',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'June 18, 2026',
    transactionType: 'NRI Investor',
    propertyTitle: 'Winsome Hari Pearlz - Riverfront Residence at JP Ganga Path',
    headline: 'Seamless remote transaction from Silicon Valley',
    content:
      'As an NRI living in California, purchasing high-value real estate back home in Patna usually comes with immense paperwork hurdles. Realic managed the entire digital escrow, legal POA verification, and developer liaison without me having to take a flight.',
    verifiedTransaction: true,
    tags: ['NRI Advisory', 'Digital Escrow', 'Ganga Marine Drive'],
  },
  {
    id: 'rev-4',
    author: 'Rajesh & Sunita Choudhary',
    role: 'Property Owners & Investors',
    location: 'Patna, Bihar',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'May 11, 2026',
    transactionType: 'Seller',
    propertyTitle: 'Heritage Estate in Patliputra Colony',
    headline: 'Sold our ancestral home in 21 days at target valuation',
    content:
      'Realic Instant Offer and Private Client Advisory team brought vetted institutional buyers directly to us. We avoided public open houses, tire-kickers, and endless bargaining. The money was wired securely on the agreed closing date.',
    verifiedTransaction: true,
    tags: ['Instant Offer', 'Zero Showings', 'Clean Title'],
  },
  {
    id: 'rev-5',
    author: 'Meera Deshmukh',
    role: 'Partner, Corporate Law',
    location: 'Patna, Bihar',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'April 22, 2026',
    transactionType: 'Buyer',
    propertyTitle: 'Durga Lifestyle - Presidential Residence on Atal Path',
    headline: 'Professionalism rarely witnessed in real estate',
    content:
      'Being a corporate lawyer myself, I scrutinized Realic title deed checks and title search reports with a fine-tooth comb. Their 3-tier legal verification protocol is legitimately rigorous. Highest recommendation.',
    verifiedTransaction: true,
    tags: ['Atal Path', 'Rigorous Diligence', 'VIP Service'],
  },
];
