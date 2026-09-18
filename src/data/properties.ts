export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  price: number; // in INR
  priceDisplay: string;
  priceUsd?: string;
  location: string;
  city: 'Patna' | 'Bangalore' | 'Mumbai' | 'Delhi NCR';
  locality: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  sqft: number;
  carpetAreaSqft: number;
  propertyType: 'Penthouse' | 'Villa' | 'Luxury Apartment' | 'Gated Community' | 'Independent House';
  status: 'Ready to Move' | 'Under Construction' | 'Newly Launched';
  possessionDate: string;
  facing: 'North-East' | 'East' | 'North' | 'South-East';
  reraId: string;
  furnishing: 'Fully Furnished' | 'Semi-Furnished' | 'Bare Shell';
  parking: string;
  floor: string;
  maintenancePerMonth: string;
  description: string;
  images: string[];
  features: string[];
  amenities: {
    name: string;
    icon: string;
  }[];
  overviewStats: {
    label: string;
    value: string;
    icon: string;
  }[];
  neighborhoodInsights: {
    title: string;
    distance: string;
    type: 'Airport' | 'Metro' | 'Tech Park' | 'School' | 'Hospital' | 'Shopping';
  }[];
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    rating: number;
    verified: boolean;
    image: string;
  };
  verified: boolean;
  featured: boolean;
}

export const PROPERTIES: Property[] = [
  {
    id: 'prestige-lakeside-habitat',
    slug: 'prestige-lakeside-habitat',
    title: '3 BHK Luxury Apartment in Prestige Lakeside Habitat',
    subtitle: 'Overlooking Varthur Lake with Panoramic Skyline Views',
    tagline: 'Refined contemporary living in the Silicon corridor of Bangalore',
    price: 18500000,
    priceDisplay: '₹1.85 Cr',
    priceUsd: '$225,000',
    location: 'Varthur, Whitefield, Bangalore',
    city: 'Bangalore',
    locality: 'Whitefield',
    address: 'Tower 4, Prestige Lakeside Habitat, Varthur Main Rd, Bangalore, Karnataka 560087',
    coordinates: {
      lat: 12.9567,
      lng: 77.7412,
    },
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    sqft: 2145,
    carpetAreaSqft: 1680,
    propertyType: 'Luxury Apartment',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    facing: 'North-East',
    reraId: 'PRM/KA/RERA/1251/446/PR/170915/000176',
    furnishing: 'Semi-Furnished',
    parking: '2 Covered Reserved Bays',
    floor: '18th of 28 Floors',
    maintenancePerMonth: '₹7,200/mo',
    description:
      'Experience unmatched modern serenity in this impeccably planned 3 BHK luxury residence situated in prestigious Lakeside Habitat. Featuring floor-to-ceiling soundproof acoustic glass windows framing pristine lake horizons, premium Italian marble flooring across living salons, and custom German modular kitchen fittings with integrated premium appliances. Uncompromised privacy with only 2 residences per elevator lobby.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    ],
    features: [
      'Varthur Lake Frontage',
      'Italian Statuario Marble',
      'Smart Home Automation',
      'EV Charging Point in Basement',
      'Acoustic Double-Glazed Windows',
      '100% DG Power Backup',
    ],
    amenities: [
      { name: 'Olympic-Sized Pool', icon: 'pool' },
      { name: 'State-of-art Gym', icon: 'fitness_center' },
      { name: 'Multi-court Clubhouse', icon: 'sports_tennis' },
      { name: 'Private Concierge', icon: 'room_service' },
      { name: '24/7 Biometric Security', icon: 'verified_user' },
      { name: 'Rooftop Lounge', icon: 'deck' },
      { name: 'Lush Landscaped Gardens', icon: 'park' },
      { name: 'Children Play Haven', icon: 'toys' },
    ],
    overviewStats: [
      { label: 'Super Area', value: '2,145 sq.ft', icon: 'straighten' },
      { label: 'Carpet Area', value: '1,680 sq.ft', icon: 'square_foot' },
      { label: 'Configuration', value: '3 BHK + 3 Bath', icon: 'bed' },
      { label: 'Floor Level', value: '18th of 28', icon: 'apartment' },
    ],
    neighborhoodInsights: [
      { title: 'Columbia Asia Hospital', distance: '1.8 km (6 mins)', type: 'Hospital' },
      { title: 'The International School Bangalore (TISB)', distance: '4.2 km (12 mins)', type: 'School' },
      { title: 'ITPB Tech Corridor', distance: '5.1 km (15 mins)', type: 'Tech Park' },
      { title: 'Upcoming Kadugodi Metro Station', distance: '3.4 km (9 mins)', type: 'Metro' },
      { title: 'Kempegowda International Airport', distance: '38 km (45 mins)', type: 'Airport' },
    ],
    agent: {
      name: 'Rahul Sharma',
      role: 'Senior Property Advisor - Whitefield Cluster',
      phone: '+91 98450 12345',
      email: 'rahul.sharma@realicconsultant.com',
      rating: 4.95,
      verified: true,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    verified: true,
    featured: true,
  },
  {
    id: 'bailey-road-luxury-penthouse',
    slug: 'bailey-road-luxury-penthouse',
    title: '3 BHK Luxury Sky Penthouse on Bailey Road',
    subtitle: 'Exclusive High-Floor Haven in Patna Prime Corridor',
    tagline: 'The pinnacle of private luxury in Bihar most coveted residential boulevard',
    price: 25000000,
    priceDisplay: '₹2.50 Cr',
    priceUsd: '$305,000',
    location: 'Bailey Road, Patna, Bihar',
    city: 'Patna',
    locality: 'Bailey Road',
    address: 'Bailey Heights, Near Saguna More, Bailey Road, Patna, Bihar 801503',
    coordinates: {
      lat: 25.6127,
      lng: 85.0743,
    },
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    sqft: 2800,
    carpetAreaSqft: 2250,
    propertyType: 'Penthouse',
    status: 'Ready to Move',
    possessionDate: 'Ready for Fit-out',
    facing: 'North-East',
    reraId: 'BR-RERA-2024-9182',
    furnishing: 'Fully Furnished',
    parking: '2 Covered Bays',
    floor: '14th Floor (Top Penthouse)',
    maintenancePerMonth: '₹5,500/mo',
    description:
      'Commanding the top tier of Bailey Road premier tower, this 3 BHK penthouse provides rare double-height ceilings, private 400 sq ft wrap-around sky terrace with unobstructed sunset vistas, automated climate controls, and legal verification through Realic three-tier compliance audit.',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    features: [
      'Private 400 sq ft Sky Deck',
      'Double Height Living Lounge',
      'Smart Fingerprint Locks',
      'Clean 100% Clear Legal Title',
      'High-Speed OTIS Elevators',
    ],
    amenities: [
      { name: 'Sky Club Lounge', icon: 'deck' },
      { name: 'Gym & Yoga Studio', icon: 'fitness_center' },
      { name: 'Covered Car Parking', icon: 'local_parking' },
      { name: '24/7 Armed Guard Security', icon: 'security' },
      { name: 'Rainwater Harvesting', icon: 'water_drop' },
    ],
    overviewStats: [
      { label: 'Super Area', value: '2,800 sq.ft', icon: 'straighten' },
      { label: 'Carpet Area', value: '2,250 sq.ft', icon: 'square_foot' },
      { label: 'Configuration', value: '3 BHK + Sky Terrace', icon: 'bed' },
      { label: 'Floor Level', value: 'Penthouse Level', icon: 'apartment' },
    ],
    neighborhoodInsights: [
      { title: 'Saguna More Junction', distance: '600 m (3 mins)', type: 'Metro' },
      { title: 'Patna Airport (JPNI)', distance: '8.2 km (18 mins)', type: 'Airport' },
      { title: 'Paras HMRI Hospital', distance: '4.5 km (10 mins)', type: 'Hospital' },
      { title: 'DPS Danapur', distance: '3.0 km (7 mins)', type: 'School' },
    ],
    agent: {
      name: 'Amit Vikram',
      role: 'Director - Patna Luxury Advisory',
      phone: '+91 94310 98765',
      email: 'amit.vikram@realicconsultant.com',
      rating: 4.98,
      verified: true,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    verified: true,
    featured: true,
  },
  {
    id: 'danapur-ultra-luxury-villa',
    slug: 'danapur-ultra-luxury-villa',
    title: '4 BHK Ultra Luxury Contemporary Villa in Danapur',
    subtitle: 'Private Gated Compound with Heated Pool & Zen Garden',
    tagline: 'Architectural masterpiece crafted for multi-generational elegance',
    price: 42000000,
    priceDisplay: '₹4.20 Cr',
    priceUsd: '$510,000',
    location: 'Danapur Cantonment Road, Patna, Bihar',
    city: 'Patna',
    locality: 'Danapur',
    address: 'Estate 7, The Imperial Enclave, Danapur Khagaul Rd, Patna 801105',
    coordinates: {
      lat: 25.6315,
      lng: 85.0411,
    },
    bedrooms: 4,
    bathrooms: 5,
    balconies: 4,
    sqft: 4200,
    carpetAreaSqft: 3650,
    propertyType: 'Villa',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    facing: 'East',
    reraId: 'BR-RERA-2024-4411',
    furnishing: 'Semi-Furnished',
    parking: '3 Car Driveway & Garage',
    floor: 'G + 2 Independent Floors',
    maintenancePerMonth: '₹8,000/mo',
    description:
      'A sprawling custom-designed modernist villa surrounded by private manicured grounds. Featuring an expansive central light atrium, imported teakwood finishings, private home theater room, rooftop solar array, and private swimming pool with outdoor cabana seating.',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    features: [
      'Private Swimming Pool',
      'G+2 Independent Structure',
      'Solar Power Grid (10kW)',
      'Home Theater Room',
      'CCTV Perimeter Security',
    ],
    amenities: [
      { name: 'Private Pool', icon: 'pool' },
      { name: 'Landscaped Lawn', icon: 'park' },
      { name: 'Home Theater', icon: 'movie' },
      { name: '3-Car Garage', icon: 'garage' },
      { name: 'Servant Quarters', icon: 'badge' },
    ],
    overviewStats: [
      { label: 'Built-up Area', value: '4,200 sq.ft', icon: 'straighten' },
      { label: 'Plot Size', value: '5,500 sq.ft', icon: 'landscape' },
      { label: 'Configuration', value: '4 BHK + Home Theater', icon: 'bed' },
      { label: 'Structure', value: 'G + 2 Villa', icon: 'villa' },
    ],
    neighborhoodInsights: [
      { title: 'Danapur Railway Station', distance: '2.5 km (6 mins)', type: 'Metro' },
      { title: 'AIIMS Patna', distance: '5.8 km (12 mins)', type: 'Hospital' },
      { title: 'St. Michael High School', distance: '6.5 km (15 mins)', type: 'School' },
      { title: 'Patna Airport', distance: '9.5 km (20 mins)', type: 'Airport' },
    ],
    agent: {
      name: 'Amit Vikram',
      role: 'Director - Patna Luxury Advisory',
      phone: '+91 94310 98765',
      email: 'amit.vikram@realicconsultant.com',
      rating: 4.98,
      verified: true,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    verified: true,
    featured: true,
  },
  {
    id: 'boring-road-executive-residence',
    slug: 'boring-road-executive-residence',
    title: '3 BHK Modern High-Rise in Boring Road',
    subtitle: 'Central Patna Elite Commercial & Educational Hub',
    tagline: 'Unsurpassed urban connectivity with high rental yields',
    price: 18000000,
    priceDisplay: '₹1.80 Cr',
    priceUsd: '$220,000',
    location: 'Boring Road, Patna, Bihar',
    city: 'Patna',
    locality: 'Boring Road',
    address: 'Chanakya Royale, Boring Canal Rd, Patna 800001',
    coordinates: {
      lat: 25.6174,
      lng: 85.1215,
    },
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    sqft: 2100,
    carpetAreaSqft: 1650,
    propertyType: 'Luxury Apartment',
    status: 'Ready to Move',
    possessionDate: 'Ready',
    facing: 'North',
    reraId: 'BR-RERA-2024-1029',
    furnishing: 'Semi-Furnished',
    parking: '1 Reserved Stilt Parking',
    floor: '8th of 12 Floors',
    maintenancePerMonth: '₹4,200/mo',
    description:
      'Situated in the vibrant cultural heart of Boring Road, this residence balances quiet interior comfort with immediate walking access to premier educational institutions, upscale dining, and major healthcare hubs.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    ],
    features: [
      'Prime Boring Road Address',
      'High-Speed Internet Pre-cabling',
      '24/7 Water & Power Backup',
      'Intercom & Video Door Phone',
    ],
    amenities: [
      { name: 'Fitness Gym', icon: 'fitness_center' },
      { name: 'Community Hall', icon: 'groups' },
      { name: 'CCTV Surveillance', icon: 'videocam' },
      { name: 'Power Backup', icon: 'bolt' },
    ],
    overviewStats: [
      { label: 'Super Area', value: '2,100 sq.ft', icon: 'straighten' },
      { label: 'Carpet Area', value: '1,650 sq.ft', icon: 'square_foot' },
      { label: 'Configuration', value: '3 BHK + 3 Bath', icon: 'bed' },
      { label: 'Floor Level', value: '8th of 12 Floors', icon: 'apartment' },
    ],
    neighborhoodInsights: [
      { title: 'Boring Road Crossing', distance: '200 m (1 min)', type: 'Shopping' },
      { title: 'Patna Women College', distance: '1.2 km (4 mins)', type: 'School' },
      { title: 'Ruban Memorial Hospital', distance: '1.5 km (5 mins)', type: 'Hospital' },
      { title: 'Patna Junction Railway', distance: '3.8 km (12 mins)', type: 'Metro' },
    ],
    agent: {
      name: 'Ritu Raj',
      role: 'Associate Consultant - Patna Central',
      phone: '+91 94312 34567',
      email: 'ritu.raj@realicconsultant.com',
      rating: 4.89,
      verified: true,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
    verified: true,
    featured: false,
  },
  {
    id: 'bellandur-waterfront-villa',
    slug: 'bellandur-waterfront-villa',
    title: 'Modernist Waterfront Villa at Bellandur Lake',
    subtitle: 'Private Infinity Edge Residence in Prime Tech Hub',
    tagline: 'Where architectural purity meets quiet waterside luxury',
    price: 52000000,
    priceDisplay: '₹5.20 Cr',
    priceUsd: '$630,000',
    location: 'Bellandur, Outer Ring Road, Bangalore',
    city: 'Bangalore',
    locality: 'Bellandur',
    address: 'Villa 12, Lakeside Estates, Bellandur, Bangalore 560103',
    coordinates: {
      lat: 12.9298,
      lng: 77.6749,
    },
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    sqft: 4800,
    carpetAreaSqft: 3950,
    propertyType: 'Villa',
    status: 'Ready to Move',
    possessionDate: 'Ready',
    facing: 'North-East',
    reraId: 'PRM/KA/RERA/1251/310/PR/180222/001450',
    furnishing: 'Fully Furnished',
    parking: '3 Covered Spaces',
    floor: 'Triplex Villa',
    maintenancePerMonth: '₹11,000/mo',
    description:
      'Immerse in waterfront serenity minutes from Bangalore major ORR tech campuses. Features double cantilevered terraces, heated private infinity pool, temperature-controlled wine cellar, and integrated smart-home automation.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    features: [
      'Lakefront Infinity Pool',
      'Smart Creston Home Automation',
      'Solar Heated Water Grid',
      'Zero Carbon Design Rating',
    ],
    amenities: [
      { name: 'Private Pool', icon: 'pool' },
      { name: 'Clubhouse Access', icon: 'deck' },
      { name: '24/7 Concierge', icon: 'support_agent' },
      { name: 'Tennis Court', icon: 'sports_tennis' },
    ],
    overviewStats: [
      { label: 'Super Area', value: '4,800 sq.ft', icon: 'straighten' },
      { label: 'Plot Area', value: '6,200 sq.ft', icon: 'landscape' },
      { label: 'Configuration', value: '4 BHK + Maid Room', icon: 'bed' },
      { label: 'Structure', value: 'Triplex Villa', icon: 'villa' },
    ],
    neighborhoodInsights: [
      { title: 'EcoWorld Tech Park', distance: '1.2 km (4 mins)', type: 'Tech Park' },
      { title: 'Manipal Hospital Varthur', distance: '3.1 km (8 mins)', type: 'Hospital' },
      { title: 'Outer Ring Road Metro', distance: '1.5 km (5 mins)', type: 'Metro' },
      { title: 'Greenwood High School', distance: '5.2 km (14 mins)', type: 'School' },
    ],
    agent: {
      name: 'Julian Mercer',
      role: 'Executive Vice President - Luxury Portfolio',
      phone: '+91 98451 88990',
      email: 'julian.mercer@realicconsultant.com',
      rating: 4.97,
      verified: true,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    verified: true,
    featured: true,
  },
  {
    id: 'indiranagar-glass-pavilion',
    slug: 'indiranagar-glass-pavilion',
    title: 'The Glass Pavilion & Sky Villa in Indiranagar',
    subtitle: 'Signature Monolithic Architecture in Bangalore Heart',
    tagline: 'Bold lines, private elevator access, and rooftop terrace',
    price: 32500000,
    priceDisplay: '₹3.25 Cr',
    priceUsd: '$395,000',
    location: '100 Feet Road, Indiranagar, Bangalore',
    city: 'Bangalore',
    locality: 'Indiranagar',
    address: 'Pavilion 4, Defense Colony, Indiranagar, Bangalore 560038',
    coordinates: {
      lat: 12.9784,
      lng: 77.6408,
    },
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    sqft: 3450,
    carpetAreaSqft: 2850,
    propertyType: 'Penthouse',
    status: 'Ready to Move',
    possessionDate: 'Ready',
    facing: 'East',
    reraId: 'PRM/KA/RERA/1251/308/PR/190510/002231',
    furnishing: 'Fully Furnished',
    parking: '2 Covered Bays',
    floor: 'Top Floor with Terrace',
    maintenancePerMonth: '₹9,500/mo',
    description:
      'A true collector piece of modern architecture in Bangalore trendiest lifestyle precinct. Direct private elevator keycard access opens directly into an expansive open-concept gallery with floor-to-ceiling glass and skyline perspectives.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    ],
    features: [
      'Direct Private Keycard Elevator',
      'Floor-to-Ceiling Thermal Glass',
      'Imported Poliform Kitchen',
      'Dedicated Wine Cellar',
    ],
    amenities: [
      { name: 'Sky Lounge Deck', icon: 'deck' },
      { name: 'Infinity Spa', icon: 'hot_tub' },
      { name: '24/7 Valet & Concierge', icon: 'local_taxi' },
      { name: 'Biometric Access', icon: 'fingerprint' },
    ],
    overviewStats: [
      { label: 'Super Area', value: '3,450 sq.ft', icon: 'straighten' },
      { label: 'Carpet Area', value: '2,850 sq.ft', icon: 'square_foot' },
      { label: 'Configuration', value: '4 BHK Sky Villa', icon: 'bed' },
      { label: 'Floor Level', value: 'Penthouse with Terrace', icon: 'apartment' },
    ],
    neighborhoodInsights: [
      { title: '100 Feet Road Boutiques', distance: '100 m (1 min)', type: 'Shopping' },
      { title: 'Indiranagar Metro Station', distance: '800 m (3 mins)', type: 'Metro' },
      { title: 'Manipal Hospital Old Airport Rd', distance: '2.5 km (7 mins)', type: 'Hospital' },
      { title: 'National Public School (NPS)', distance: '1.8 km (5 mins)', type: 'School' },
    ],
    agent: {
      name: 'Sarah Lin',
      role: 'Principal Partner - Institutional Transactions',
      phone: '+91 98452 77112',
      email: 'sarah.lin@realicconsultant.com',
      rating: 4.96,
      verified: true,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
    verified: true,
    featured: true,
  },
  {
    id: 'patliputra-palatial-bungalow',
    slug: 'patliputra-palatial-bungalow',
    title: '5 BHK Palatial Heritage Estate in Patliputra Colony',
    subtitle: 'Timeless Grandeur with Lush Private Orchards',
    tagline: 'Patna most distinguished aristocratic residential address',
    price: 68000000,
    priceDisplay: '₹6.80 Cr',
    priceUsd: '$825,000',
    location: 'Patliputra Colony, Patna, Bihar',
    city: 'Patna',
    locality: 'Patliputra Colony',
    address: 'Plot 42, Road No 10, Patliputra Colony, Patna 800013',
    coordinates: {
      lat: 25.6322,
      lng: 85.1095,
    },
    bedrooms: 5,
    bathrooms: 6,
    balconies: 5,
    sqft: 5600,
    carpetAreaSqft: 4800,
    propertyType: 'Independent House',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    facing: 'North-East',
    reraId: 'BR-RERA-2024-3320',
    furnishing: 'Fully Furnished',
    parking: '4 Covered Car Garage',
    floor: 'G + 2 Independent Bungalow',
    maintenancePerMonth: 'Self Managed',
    description:
      'An exceptional opportunity to acquire a grand independent estate in prime Patliputra Colony. Boasting manicured lawns, grand colonnaded entryway, separate staff quarters, high-security boundary wall, and heritage architectural finishes updated with modern MEP infrastructure.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    ],
    features: [
      'Prime Patliputra Road 10',
      'Private 8,000 sq ft Land Parcel',
      'Separate 2-Room Staff Quarters',
      '4-Car Enclosed Garage',
    ],
    amenities: [
      { name: 'Private Garden', icon: 'park' },
      { name: 'Private Gym Room', icon: 'fitness_center' },
      { name: 'Solar Energy Setup', icon: 'solar_power' },
      { name: 'Guard House', icon: 'security' },
    ],
    overviewStats: [
      { label: 'Built-up Area', value: '5,600 sq.ft', icon: 'straighten' },
      { label: 'Plot Area', value: '8,000 sq.ft', icon: 'landscape' },
      { label: 'Configuration', value: '5 BHK + Staff Quarters', icon: 'bed' },
      { label: 'Floors', value: 'G + 2 Bungalow', icon: 'villa' },
    ],
    neighborhoodInsights: [
      { title: 'Patliputra Roundabout', distance: '400 m (2 mins)', type: 'Shopping' },
      { title: 'Kurji Holy Family Hospital', distance: '1.2 km (4 mins)', type: 'Hospital' },
      { title: 'Loyola High School', distance: '1.5 km (5 mins)', type: 'School' },
      { title: 'Patna Airport', distance: '6.2 km (14 mins)', type: 'Airport' },
    ],
    agent: {
      name: 'Amit Vikram',
      role: 'Director - Patna Luxury Advisory',
      phone: '+91 94310 98765',
      email: 'amit.vikram@realicconsultant.com',
      rating: 4.98,
      verified: true,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    verified: true,
    featured: true,
  },
];
