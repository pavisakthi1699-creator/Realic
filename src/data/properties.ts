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
  floorPlans?: {
    title: string;
    type?: string;
    description: string;
    image: string;
    specs: string;
  }[];
  amenityShowcase?: {
    title: string;
    category: string;
    description?: string;
    image: string;
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
    id: 'whitefield-azure',
    slug: 'whitefield-azure-3bhk',
    title: 'Azure Skyline Residence',
    subtitle: '3 BHK Apartment • 1,450 sq.ft.',
    tagline: 'Premium east-facing unit on the 14th floor with high natural light and modular kitchen',
    price: 12500000,
    priceDisplay: '₹ 1.25 Cr',
    priceUsd: '$150,000',
    location: 'Whitefield, Bangalore',
    city: 'Bangalore',
    locality: 'Whitefield',
    address: 'ITPL Main Road, Whitefield, Bangalore 560066',
    coordinates: {
      lat: 12.9698,
      lng: 77.75,
    },
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    sqft: 1450,
    carpetAreaSqft: 1180,
    propertyType: 'Luxury Apartment',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    facing: 'East',
    reraId: 'PRM/KA/RERA/1251/446/PR/190823/002819',
    furnishing: 'Semi-Furnished',
    parking: '1 Covered Car Bay',
    floor: '14th of 24 Floors',
    maintenancePerMonth: '₹4,200/mo',
    description: 'Premium east-facing unit on the 14th floor. High natural light, modern modular kitchen included. Situated in the heart of Whitefield with seamless connectivity to ITPL and upcoming metro lines.',
    images: [
      '/images/search-prop-1.jpg',
      '/images/search-prop-2.jpg',
    ],
    features: [
      'Ready to Move',
      'Eco-Certified',
      'East Facing Unit on 14th Floor',
      'Modern Modular Kitchen Included',
      'Swimming Pool & Clubhouse',
    ],
    amenities: [
      { name: 'Modular Kitchen', icon: 'countertops' },
      { name: 'Swimming Pool', icon: 'pool' },
      { name: 'Gymnasium', icon: 'fitness_center' },
      { name: 'Power Backup', icon: 'bolt' },
    ],
    overviewStats: [
      { label: 'Floor', value: '14th of 24', icon: 'apartment' },
      { label: 'Facing', value: 'East', icon: 'explore' },
      { label: 'Carpet Area', value: '1,180 sq.ft.', icon: 'square_foot' },
      { label: 'Possession', value: 'Ready to Move', icon: 'key' },
    ],
    neighborhoodInsights: [
      { title: 'ITPL Tech Park', distance: '1.2 km', type: 'Tech Park' },
      { title: 'Whitefield Metro Station', distance: '800 m', type: 'Metro' },
      { title: 'Manipal Hospital', distance: '2.5 km', type: 'Hospital' },
    ],
    agent: {
      name: 'Eleanor Vance',
      role: 'Managing Partner',
      phone: '+91 80 4567 8900',
      email: 'support@realic.in',
      rating: 4.9,
      verified: true,
      image: '/images/team-eleanor.jpg',
    },
    verified: true,
    featured: true,
  },
  {
    id: 'indiranagar-penthouse',
    slug: 'indiranagar-penthouse-4bhk',
    title: 'The Indiranagar Crown Penthouse',
    subtitle: '4 BHK Penthouse • 2,200 sq.ft.',
    tagline: 'Exclusive double-height sky residence with private terrace deck in prime Indiranagar',
    price: 21000000,
    priceDisplay: '₹ 2.10 Cr',
    priceUsd: '$255,000',
    location: 'Indiranagar, Bangalore',
    city: 'Bangalore',
    locality: 'Indiranagar',
    address: '100 Feet Road, Defense Colony, Indiranagar, Bangalore 560038',
    coordinates: {
      lat: 12.9784,
      lng: 77.6408,
    },
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    sqft: 2200,
    carpetAreaSqft: 1850,
    propertyType: 'Penthouse',
    status: 'Under Construction',
    possessionDate: 'December 2025',
    facing: 'North-East',
    reraId: 'PRM/KA/RERA/1251/310/PR/201215/003712',
    furnishing: 'Semi-Furnished',
    parking: '2 Covered Car Bays',
    floor: 'Top Floor (18th)',
    maintenancePerMonth: '₹7,500/mo',
    description: 'A modern kitchen and dining area in a luxury penthouse in Bangalore. Sleek white marble countertops, dark navy cabinetry, and minimalist pendant lighting. The space feels open, clean, and highly sophisticated, bathed in soft, natural daylight.',
    images: [
      '/images/search-prop-2.jpg',
      '/images/search-prop-1.jpg',
    ],
    features: [
      'Under Construction - Possession Dec 2025',
      'Private Terrace Lounge',
      'Double Height Ceiling',
      'Italian Marble Flooring',
      'Prime 100ft Road Proximity',
    ],
    amenities: [
      { name: 'Sky Lounge', icon: 'deck' },
      { name: 'Private Lift', icon: 'elevator' },
      { name: 'Infinity Pool', icon: 'pool' },
      { name: 'Concierge', icon: 'room_service' },
    ],
    overviewStats: [
      { label: 'Floor', value: 'Top Floor (18th)', icon: 'apartment' },
      { label: 'Facing', value: 'North-East', icon: 'explore' },
      { label: 'Carpet Area', value: '1,850 sq.ft.', icon: 'square_foot' },
      { label: 'Possession', value: 'Dec 2025', icon: 'calendar_month' },
    ],
    neighborhoodInsights: [
      { title: 'Indiranagar Metro Station', distance: '600 m', type: 'Metro' },
      { title: '100 Feet Road Retail Hub', distance: '200 m', type: 'Shopping' },
      { title: 'Indiranagar Club', distance: '900 m', type: 'Tech Park' },
    ],
    agent: {
      name: 'Julian Mercer',
      role: 'Director of Strategy',
      phone: '+91 80 4567 8900',
      email: 'support@realic.in',
      rating: 4.9,
      verified: true,
      image: '/images/team-julian.jpg',
    },
    verified: true,
    featured: true,
  },
  {
    "id": "winsome-icon",
    "slug": "winsome-icon",
    "title": "Winsome Icon - 18-Storey Landmark on AIIMS-Digha Elevated Corridor",
    "subtitle": "Patna's Tallest Iconic Towers with Panoramic Ganga River & Marine Drive Vistas",
    "tagline": "The pinnacle of architectural grandeur with rooftop infinity pool & 3-tier luxury",
    "price": 14500000,
    "priceDisplay": "₹1.45 Cr",
    "priceUsd": "$175,000",
    "location": "AIIMS-Digha Elevated Corridor (Pillar 242), Patna, Bihar",
    "city": "Patna",
    "locality": "Digha",
    "address": "Pillar No. 242, AIIMS-Digha Elevated Flyover, Near JP Setu, Patna 800011",
    "coordinates": {
      "lat": 25.642,
      "lng": 85.092
    },
    "bedrooms": 4,
    "bathrooms": 4,
    "balconies": 3,
    "sqft": 2650,
    "carpetAreaSqft": 1980,
    "propertyType": "Luxury Apartment",
    "status": "Under Construction",
    "possessionDate": "December 2026",
    "facing": "North-East",
    "reraId": "BRERAP60002-5/98/R-1605/2023",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Basement Bays",
    "floor": "14th of 18 Floors",
    "maintenancePerMonth": "₹5,800/mo",
    "description": "Winsome Icon stands as the undisputed tallest architectural marvel in a 5-km radius across Patna, rising 18 storeys high along the AIIMS-Digha Elevated Corridor near JP Setu and Ganga Marine Drive. Designed for visionary living, it features four distinct towers: Tower A (commercial boutique hubs), Tower B (exclusive executive suites), and Towers C & D (palatial 3 & 4 BHK residences). Residents enjoy a double-height grand entrance lobby, rooftop infinity swimming pool with Ganga river horizons, cricket pitch with net, world-class club house, and 3-tier smart security.",
    "images": [
      "/images/projects/winsome-icon-page-5.jpg",
      "/images/projects/winsome-icon-page-2.jpg",
      "/images/projects/winsome-icon-page-3.jpg",
      "/images/projects/winsome-icon-page-4.jpg",
      "/images/projects/winsome-icon-page-6.jpg",
      "/images/projects/winsome-icon-page-1.jpg"
    ],
    "features": [
      "18-Storey Tallest Tower in 5-km Radius",
      "Direct AIIMS-Digha Elevated Ramp Access",
      "Ganga River & Marine Drive Skyline Views",
      "Rooftop Infinity Pool & Cricket Practice Net",
      "BRERA Approved: BRERAP60002-5/98/R-1605/2023",
      "Double-Height Air Conditioned Grand Lobby"
    ],
    "amenities": [
      {
        "name": "Double-Height Lobby",
        "icon": "meeting_room"
      },
      {
        "name": "Infinity Pool",
        "icon": "pool"
      },
      {
        "name": "Cricket Practice Net",
        "icon": "sports_cricket"
      },
      {
        "name": "Club House & Gym",
        "icon": "fitness_center"
      },
      {
        "name": "Party Lounge",
        "icon": "celebration"
      },
      {
        "name": "EV Fast Charging",
        "icon": "ev_station"
      },
      {
        "name": "3-Tier Smart Security",
        "icon": "security"
      },
      {
        "name": "High-Speed Elevators",
        "icon": "elevator"
      }
    ],
    "overviewStats": [
      {
        "label": "Tower Scale",
        "value": "18 Storeys (Tallest)",
        "icon": "apartment"
      },
      {
        "label": "Configuration",
        "value": "3 & 4 BHK Luxury",
        "icon": "bed"
      },
      {
        "label": "Super Built-up",
        "value": "1,680 - 2,890 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Elevated Corridor",
        "value": "Pillar No. 242",
        "icon": "location_on"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "AIIMS-Digha Elevated Corridor",
        "distance": "0 min (Direct ramp access)",
        "type": "Tech Park"
      },
      {
        "title": "JP Setu & Ganga Marine Drive",
        "distance": "3 mins (1.2 km)",
        "type": "Airport"
      },
      {
        "title": "Patliputra Junction Railway Station",
        "distance": "7 mins (2.8 km)",
        "type": "Metro"
      },
      {
        "title": "AIIMS Patna Medical Center",
        "distance": "12 mins (6.0 km)",
        "type": "Hospital"
      },
      {
        "title": "Patna International Airport",
        "distance": "18 mins (8.5 km)",
        "type": "Airport"
      },
      {
        "title": "St. Michael High School",
        "distance": "5 mins (2.1 km)",
        "type": "School"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "durga-lifestyle",
    "slug": "durga-lifestyle",
    "title": "Durga Lifestyle - 32 Bespoke Presidential Residences on 100-Ft Atal Path",
    "subtitle": "Patna's Most Coveted Single-Tower Presidential Address on Atal Path",
    "tagline": "32 Vaastu compliant residences, 11-ft clear ceilings & bespoke panoramic vistas",
    "price": 23500000,
    "priceDisplay": "₹2.35 Cr",
    "priceUsd": "$282,000",
    "location": "100-Ft Atal Path Expressway Corridor, Patna, Bihar",
    "city": "Patna",
    "locality": "Atal Path Expressway",
    "address": "100-Ft Atal Path Expressway Corridor, near Digha-Rajiv Nagar Link, Patna 800001",
    "coordinates": {
      "lat": 25.6185,
      "lng": 85.116
    },
    "bedrooms": 4,
    "bathrooms": 4,
    "balconies": 4,
    "sqft": 3550,
    "carpetAreaSqft": 2078,
    "propertyType": "Luxury Apartment",
    "status": "Under Construction",
    "possessionDate": "December 2026",
    "facing": "North-East",
    "reraId": "BRERAP00045-1/11/R-1588/2023",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Reserved Stilt & Basement Bays",
    "floor": "7th of 9 Floors (B+G+9 Boutique Tower)",
    "maintenancePerMonth": "₹6,800/mo",
    "description": "Durga Lifestyle represents an exclusive sanctuary of presidential living on Patna's premier 100-ft-wide Atal Path Expressway. Designed as a distinguished B+G+9 single boutique tower, the project hosts strictly 32 ultra-spacious residences—ensuring utmost privacy with only four bespoke apartments per floor. Each residence features expansive 11-foot clear ceiling heights, 8-foot grand entrance doorways, private planter boxes, and panoramic views spanning the Ganges, Turf Club, and Atal Path. Ground and mezzanine levels accommodate high-end luxury retail stores, while the 1st floor social zone and rooftop terrace offer an infinity-edge swimming pool, wellness gymnasium, indoor games salon, children's day crèche, rooftop barbecue pavilion, and multi-sport court.",
    "images": [
      "/images/projects/durga-lifestyle/aerial-view.jpg",
      "/images/projects/durga-lifestyle/facade-elevation.jpg",
      "/images/projects/durga-lifestyle/tower-river-breeze.jpg",
      "/images/projects/durga-lifestyle/entrance-street-view.jpg",
      "/images/projects/durga-lifestyle/drop-off-portico.jpg",
      "/images/projects/durga-lifestyle/panoramic-balcony-view.jpg",
      "/images/projects/durga-lifestyle/street-balcony-view.jpg",
      "/images/projects/durga-lifestyle/griha-pravesh-foyer.jpg",
      "/images/projects/durga-lifestyle/double-height-reception.jpg",
      "/images/projects/durga-lifestyle/living-dining-4bhk.jpg",
      "/images/projects/durga-lifestyle/master-bedroom-4bhk.jpg",
      "/images/projects/durga-lifestyle/second-bedroom-4bhk.jpg",
      "/images/projects/durga-lifestyle/kids-bedroom-4bhk.jpg",
      "/images/projects/durga-lifestyle/third-bedroom-4bhk.jpg",
      "/images/projects/durga-lifestyle/living-dining-3bhk.jpg",
      "/images/projects/durga-lifestyle/master-bedroom-3bhk.jpg",
      "/images/projects/durga-lifestyle/kitchen-luxury.jpg",
      "/images/projects/durga-lifestyle/toilet-designer-tiles.jpg",
      "/images/projects/durga-lifestyle/cityscape-balcony-8th.jpg",
      "/images/projects/durga-lifestyle/entrance-driveway-plaza.jpg"
    ],
    "features": [
      "Ultra-Exclusive: Strictly 32 Families Only (B+G+9)",
      "Low Density: Only 4 Residences Per Floor",
      "11-Ft Clear Ceiling Height with 8-Ft Grand Doors",
      "Direct 100-Ft Atal Path Expressway Frontage",
      "Bespoke Ganga River & Turf Club Panoramic Balconies",
      "Double-Height Ground Commercial Retail Boulevard",
      "Rooftop BBQ Pavilion, Pergola & Reflexology Deck",
      "BRERA Registered: BRERAP00045-1/11/R-1588/2023"
    ],
    "amenities": [
      { "name": "Swimming Pool & Sundeck", "icon": "pool" },
      { "name": "Fitness Gymnasium", "icon": "fitness_center" },
      { "name": "Rooftop BBQ Pavilion", "icon": "outdoor_grill" },
      { "name": "Indoor Games Salon", "icon": "sports_esports" },
      { "name": "Multipurpose Sports Court", "icon": "sports_basketball" },
      { "name": "Children's Adventure Play", "icon": "toys" },
      { "name": "Children's Crèche", "icon": "child_friendly" },
      { "name": "Celebratory Community Hall", "icon": "celebration" },
      { "name": "Double-Height Reception", "icon": "meeting_room" },
      { "name": "24/7 Smart CCTV Security", "icon": "shield" },
      { "name": "High-Speed Dual Elevators", "icon": "elevator" },
      { "name": "100% Full Generator Backup", "icon": "bolt" }
    ],
    "overviewStats": [
      { "label": "Total Residences", "value": "32 Exclusive Homes", "icon": "domain" },
      { "label": "Configuration", "value": "3 & 4 BHK + Servant", "icon": "bed" },
      { "label": "Super Built-up", "value": "2,439 - 3,550 sq.ft", "icon": "straighten" },
      { "label": "Clear Ceiling", "value": "11-Ft Volume", "icon": "height" }
    ],
    "amenityShowcase": [
      {
        "title": "Swimming Pool & Sundeck",
        "category": "Aquatics",
        "image": "/images/projects/durga-lifestyle/swimming-pool.jpg"
      },
      {
        "title": "State-of-the-Art Fitness Gymnasium",
        "category": "Fitness",
        "image": "/images/projects/durga-lifestyle/gymnasium.jpg"
      },
      {
        "title": "Rooftop BBQ Pavilion & Pergola Deck",
        "category": "Sky Lounge",
        "image": "/images/projects/durga-lifestyle/rooftop-bbq.jpg"
      },
      {
        "title": "Rooftop Star Gazing Deck & Planters",
        "category": "Leisure",
        "image": "/images/projects/durga-lifestyle/rooftop-seating.jpg"
      },
      {
        "title": "Indoor Games Room (Billiards & Table Tennis)",
        "category": "Entertainment",
        "image": "/images/projects/durga-lifestyle/indoor-games.jpg"
      },
      {
        "title": "Multipurpose Basketball & Badminton Court",
        "category": "Sports",
        "image": "/images/projects/durga-lifestyle/sports-court.jpg"
      },
      {
        "title": "Children's Adventure Play Area & Sand Bed",
        "category": "Kids",
        "image": "/images/projects/durga-lifestyle/kids-play-area.jpg"
      },
      {
        "title": "Children's Zone & Day Crèche",
        "category": "Child Care",
        "image": "/images/projects/durga-lifestyle/creche-kids-zone.jpg"
      },
      {
        "title": "Celebratory Community Hall",
        "category": "Community",
        "image": "/images/projects/durga-lifestyle/community-hall.jpg"
      },
      {
        "title": "Senior Citizens Relaxation Plaza",
        "category": "Wellness",
        "image": "/images/projects/durga-lifestyle/senior-citizens-corner.jpg"
      },
      {
        "title": "Entrance Driveway Plaza & Water Cascades",
        "category": "Architecture",
        "image": "/images/projects/durga-lifestyle/entrance-driveway-plaza.jpg"
      },
      {
        "title": "Double-Height Luxury Retail Boulevard",
        "category": "Retail",
        "image": "/images/projects/durga-lifestyle/luxury-retail-boulevard.jpg"
      }
    ],
    "floorPlans": [
      {
        "title": "Typical Floor Plan (3rd to 9th Floor)",
        "specs": "3 & 4 BHK • 4 Units per Floor • 2,439 - 3,550 sq.ft",
        "description": "Low-density architectural floor plate featuring 4 residences per floor, dual high-speed elevators, wide corridors, and 11-ft ceiling heights.",
        "image": "/images/projects/durga-lifestyle/floorplan-typical-3to9.jpg"
      },
      {
        "title": "2nd Floor Plan with Private OTS Terraces",
        "specs": "Flats 2A, 2B, 2C, 2D • Up to 811 sq.ft Open Terraces",
        "description": "Exclusive 2nd floor residences with expansive open-to-sky (OTS) private terraces ranging from 310 sq.ft to 811 sq.ft.",
        "image": "/images/projects/durga-lifestyle/floorplan-2nd-terrace.jpg"
      },
      {
        "title": "Clubhouse, Pool & Rooftop Deck Blueprint",
        "specs": "1st Floor Social Zone & Rooftop Pergola Deck",
        "description": "Comprehensive layout of the 1st floor swimming pool, gymnasium, crèche, and gaming zone plus rooftop BBQ pavilion and reflexology path.",
        "image": "/images/projects/durga-lifestyle/floorplan-rooftop-1stfloor.jpg"
      },
      {
        "title": "Master Site Plan & Landscape Circulation",
        "specs": "100-Ft Atal Path Access • Entry Plaza & Water Features",
        "description": "Overall site planning with dedicated residential drop-off, commercial retail plaza, 5-ft barbed security wall, and peripheral greens.",
        "image": "/images/projects/durga-lifestyle/floorplan-master-site.jpg"
      },
      {
        "title": "Basement Parking & Circulation Plan",
        "specs": "54+ Reserved Stilt & Basement Bays • 5.5m Driveway",
        "description": "Basement vehicular circulation with 5.5m wide driveways, dual ramp access, driver waiting facilities, and MEP services.",
        "image": "/images/projects/durga-lifestyle/floorplan-basement-parking.jpg"
      },
      {
        "title": "4BHK Presidential Unit Plans (Flats A & B)",
        "specs": "4B+4T & 4B+4T+P • 2,977 - 3,550 sq.ft Saleable",
        "description": "Detailed unit layouts for Flat 3-9A (1,773 sq.ft carpet) and Flat 3-9B (2,078 sq.ft carpet) with private foyer, servant entry, and powder room.",
        "image": "/images/projects/durga-lifestyle/floorplan-unit-4bhk.jpg"
      },
      {
        "title": "3BHK Luxury Unit Plans (Flats C & D)",
        "specs": "3B+3T & 3B+3T+P • 2,439 - 2,544 sq.ft Saleable",
        "description": "Detailed unit layouts for Flat 3-9C (1,360 sq.ft carpet) and Flat 3-9D (1,552 sq.ft carpet) with large balconies and walk-in dresser.",
        "image": "/images/projects/durga-lifestyle/floorplan-unit-3bhk.jpg"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "100-Ft Atal Path Expressway",
        "distance": "0 min (Direct frontage)",
        "type": "Metro"
      },
      {
        "title": "Patliputra Marine Drive & Ganga River",
        "distance": "3 mins (1.1 km)",
        "type": "Airport"
      },
      {
        "title": "East Boring Canal Road",
        "distance": "4 mins (1.5 km)",
        "type": "Shopping"
      },
      {
        "title": "Patna Central Junction",
        "distance": "9 mins (4.2 km)",
        "type": "Metro"
      },
      {
        "title": "Paras HMRI Hospital",
        "distance": "7 mins (3.0 km)",
        "type": "Hospital"
      },
      {
        "title": "Loyola High School & St. Michael's",
        "distance": "5 mins (2.1 km)",
        "type": "School"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "winsome-pearlz",
    "slug": "winsome-pearlz",
    "title": "Winsome Pearlz - Elegant 3 & 4 BHK + Servant Residences",
    "subtitle": "Modern High-Rise Sanctuary near Patliputra Station & Marine Drive",
    "tagline": "Ultra-modern architecture crafted for refined multi-generational living",
    "price": 12800000,
    "priceDisplay": "₹1.28 Cr",
    "priceUsd": "$155,000",
    "location": "Pillar No. 263, Digha Link Road, Danapur, Patna, Bihar",
    "city": "Patna",
    "locality": "Danapur",
    "address": "Pillar No. 263, West of Patliputra Station, Digha Link Road, Patna 800012",
    "coordinates": {
      "lat": 25.6375,
      "lng": 85.088
    },
    "bedrooms": 4,
    "bathrooms": 4,
    "balconies": 3,
    "sqft": 2437,
    "carpetAreaSqft": 1575,
    "propertyType": "Luxury Apartment",
    "status": "Under Construction",
    "possessionDate": "June 2026",
    "facing": "North-East",
    "reraId": "BRERAP14015-2/12/R-1554/2023",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Bays",
    "floor": "9th of 14 Floors",
    "maintenancePerMonth": "₹5,200/mo",
    "description": "Winsome Pearlz delivers an impeccable blend of aesthetic elegance and pragmatic luxury, situated at Pillar No. 263 just west of Patliputra Station along Digha Link Road. Offering thoughtfully masterplanned 3 BHK (1,793 sq.ft) and 4 BHK + Servant (2,437 sq.ft) suites, every home boasts abundant natural illumination and cross-ventilation. Residents experience high-caliber amenities including a podium infinity pool, open yoga pavilion, landscaped gardens, cafeteria, and fast EV charging.",
    "images": [
      "/images/projects/winsome-pearlz/tower-elevation.jpg",
      "/images/projects/winsome-pearlz/tower-night-view.jpg",
      "/images/projects/winsome-pearlz/infinity-swimming-pool.jpg",
      "/images/projects/winsome-pearlz/grand-entrance-lobby.jpg",
      "/images/projects/winsome-pearlz/aerial-campus-overview.jpg",
      "/images/projects/winsome-pearlz/rooftop-skyline-terrace.jpg",
      "/images/projects/winsome-pearlz/rooftop-cafeteria.jpg",
      "/images/projects/winsome-pearlz/rooftop-gymnasium.jpg",
      "/images/projects/winsome-pearlz/green-garden-gazebo.jpg",
      "/images/projects/winsome-pearlz/kids-play-garden.jpg",
      "/images/projects/winsome-pearlz/yoga-meditation-deck.jpg",
      "/images/projects/winsome-pearlz/bedroom-interior.jpg",
      "/images/projects/winsome-pearlz/ev-charging-station.jpg",
      "/images/projects/winsome-pearlz/isometric-4bhk-cut.jpg",
      "/images/projects/winsome-pearlz/isometric-3bhk-unit1.jpg",
      "/images/projects/winsome-pearlz/isometric-3bhk-unit2.jpg"
    ],
    "features": [
      "Only 3 Residences per Floor (B+G+14 Storey Single Tower)",
      "Dedicated Servant Room & Washroom in 4.5 BHK",
      "Pillar No. 263 Frontage with 6.0m Two-Way Driveways",
      "Rooftop Infinity Swimming Pool & Sun Deck",
      "BRERA Approved: BRERAP14015-2/12/R-1554/2023",
      "Dedicated EV Charging Stations & 2-Level Parking"
    ],
    "amenities": [
      {
        "name": "Infinity Pool",
        "icon": "pool"
      },
      {
        "name": "Rooftop Yoga Deck",
        "icon": "self_improvement"
      },
      {
        "name": "Gymnasium",
        "icon": "fitness_center"
      },
      {
        "name": "Podium Green Garden",
        "icon": "park"
      },
      {
        "name": "Cafeteria & Lounge",
        "icon": "local_cafe"
      },
      {
        "name": "EV Charging Station",
        "icon": "ev_station"
      },
      {
        "name": "Intercom & Smart CCTV",
        "icon": "videocam"
      },
      {
        "name": "Children Play Zone",
        "icon": "child_care"
      }
    ],
    "amenityShowcase": [
      {
        "title": "Infinity Swimming Pool & Sun Deck",
        "category": "Aquatics",
        "image": "/images/projects/winsome-pearlz/infinity-swimming-pool.jpg"
      },
      {
        "title": "Double-Height Grand Entrance Lobby",
        "category": "Arrival",
        "image": "/images/projects/winsome-pearlz/grand-entrance-lobby.jpg"
      },
      {
        "title": "Rooftop Skyline Open-Air Gymnasium",
        "category": "Fitness",
        "image": "/images/projects/winsome-pearlz/rooftop-gymnasium.jpg"
      },
      {
        "title": "Sky Cafeteria & Sunset Deck",
        "category": "Social",
        "image": "/images/projects/winsome-pearlz/rooftop-cafeteria.jpg"
      },
      {
        "title": "Rooftop Yoga & Meditation Pavilion",
        "category": "Wellness",
        "image": "/images/projects/winsome-pearlz/yoga-meditation-deck.jpg"
      },
      {
        "title": "Landscaped Green Garden & Gazebo",
        "category": "Nature",
        "image": "/images/projects/winsome-pearlz/green-garden-gazebo.jpg"
      },
      {
        "title": "Dedicated Children's Play Zone",
        "category": "Recreation",
        "image": "/images/projects/winsome-pearlz/kids-play-garden.jpg"
      },
      {
        "title": "Fast EV Charging Station",
        "category": "Eco Tech",
        "image": "/images/projects/winsome-pearlz/ev-charging-station.jpg"
      },
      {
        "title": "Rooftop Skyline Panorama Terrace",
        "category": "Skyline",
        "image": "/images/projects/winsome-pearlz/rooftop-skyline-terrace.jpg"
      },
      {
        "title": "Evening Illuminated Tower Architecture",
        "category": "Architecture",
        "image": "/images/projects/winsome-pearlz/tower-night-view.jpg"
      }
    ],
    "floorPlans": [
      {
        "title": "Typical Floor Plan (1st to 14th Floor)",
        "specs": "3 & 4.5 BHK • 3 Units per Floor • B + G + 14 Floors",
        "description": "Spacious low-density floor plate featuring 3 luxury residences per floor, dual high-speed elevators, wide lobby, and fire escape staircase.",
        "image": "/images/projects/winsome-pearlz/floorplan-typical-7and12.jpg"
      },
      {
        "title": "Unit 101, 102 & 103 Dimensional Floor Plan",
        "specs": "CAD Dimensions • Carpet & Balcony Detailed Measurements",
        "description": "Accurate architectural dimensions for 3 BHK Unit 101/102 (1,793 sq.ft) and 4.5 BHK Unit 103 (2,437 sq.ft) with room-by-room measurements.",
        "image": "/images/projects/winsome-pearlz/floorplan-unit-details.jpg"
      },
      {
        "title": "Master Ground Site & Circulation Plan",
        "specs": "Pillar 263 Access • 6.0m Driveway • Guard Kiosk",
        "description": "Complete ground site layout with 6.0-meter peripheral two-way driveways, dedicated transformer yard, ramp down to basement parking, and entrance fountain.",
        "image": "/images/projects/winsome-pearlz/floorplan-master-site.jpg"
      },
      {
        "title": "Rooftop Terrace & Sky Amenities Blueprint",
        "specs": "Terrace Level • Pool, Gym, Gazebo & Walkways",
        "description": "Comprehensive rooftop blueprint detailing the infinity pool with filtration plant, pergola gym, open cafeteria, and yoga deck.",
        "image": "/images/projects/winsome-pearlz/floorplan-rooftop-terrace.jpg"
      },
      {
        "title": "4.5 BHK Presidential Suite (3D Cut View)",
        "specs": "Flat 103 • 4 Bed + 4 Bath + Servant • 2,437 sq.ft Saleable",
        "description": "3D cut view of Unit 103 showing master bedroom suite, 3 wide balconies, dedicated servant quarter with attached bath, and formal living room.",
        "image": "/images/projects/winsome-pearlz/isometric-4bhk-cut.jpg"
      },
      {
        "title": "3 BHK Luxury Residence - Unit 101 (3D Cut View)",
        "specs": "Flat 101 • 3 Bed + 3 Bath • 1,793 sq.ft Saleable",
        "description": "Isometric 3D layout of Flat 101 showcasing open kitchen, spacious dining lounge, master bedroom with private balcony, and optimal cross-ventilation.",
        "image": "/images/projects/winsome-pearlz/isometric-3bhk-unit1.jpg"
      },
      {
        "title": "3 BHK Luxury Residence - Unit 102 (3D Cut View)",
        "specs": "Flat 102 • 3 Bed + 3 Bath • 1,793 sq.ft Saleable",
        "description": "Isometric 3D layout of Flat 102 featuring expansive living salon, dual master suites, vastu-compliant puja corner, and modern utility balcony.",
        "image": "/images/projects/winsome-pearlz/isometric-3bhk-unit2.jpg"
      },
      {
        "title": "Regional Strategic Connectivity Map",
        "specs": "GIS Location • Digha Link Rd & Marine Drive Access",
        "description": "Connectivity blueprint highlighting direct access to Patliputra Junction, JP Ganga Path (Marine Drive), AIIMS Elevated Corridor, and JP Setu.",
        "image": "/images/projects/winsome-pearlz/marine-drive-connectivity-map.jpg"
      }
    ],
    "overviewStats": [
      {
        "label": "Carpet Area",
        "value": "1,151 - 1,575 sq.ft",
        "icon": "aspect_ratio"
      },
      {
        "label": "Saleable Area",
        "value": "1,793 - 2,437 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Configuration",
        "value": "3 & 4 BHK + Servant",
        "icon": "bed"
      },
      {
        "label": "Location Mark",
        "value": "Pillar No. 263",
        "icon": "pin_drop"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Patliputra Junction Station",
        "distance": "4 mins (1.5 km)",
        "type": "Metro"
      },
      {
        "title": "Digha-Danapur Marine Drive",
        "distance": "5 mins (2.0 km)",
        "type": "Airport"
      },
      {
        "title": "DPS Patna & St. Karen's",
        "distance": "10 mins (4.2 km)",
        "type": "School"
      },
      {
        "title": "AIIMS Patna",
        "distance": "12 mins (5.5 km)",
        "type": "Hospital"
      },
      {
        "title": "Patna Airport",
        "distance": "16 mins (7.8 km)",
        "type": "Airport"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "winsome-elite",
    "slug": "winsome-elite",
    "title": "Winsome Elite - Premium High-Rise Living with 20-Ft Wide Avenues",
    "subtitle": "Sophisticated 3 & 4 BHK Residences with Grand Gateway Architecture",
    "tagline": "Exclusive gated haven featuring expansive driveways and sky amenities",
    "price": 14800000,
    "priceDisplay": "₹1.48 Cr",
    "priceUsd": "$178,000",
    "location": "Pillar No. 226, Digha Link Road, Danapur, Patna, Bihar",
    "city": "Patna",
    "locality": "Danapur",
    "address": "Pillar No. 226, West of Patliputra Station, Digha Link Road, Patna 800012",
    "coordinates": {
      "lat": 25.635,
      "lng": 85.091
    },
    "bedrooms": 4,
    "bathrooms": 4,
    "balconies": 3,
    "sqft": 2791,
    "carpetAreaSqft": 1518,
    "propertyType": "Luxury Apartment",
    "status": "Under Construction",
    "possessionDate": "March 2027",
    "facing": "North",
    "reraId": "BRERAP14015-1/10/R-1520/2023",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Bays",
    "floor": "8th of 15 Floors",
    "maintenancePerMonth": "₹5,600/mo",
    "description": "Winsome Elite sets a new benchmark for gated high-rise sophistication in West Patna. Situated at Pillar No. 226 along Digha Link Road, this landmark project stands out with generous 20-ft-wide internal concrete driveways, an imposing royal entrance gateway, and high-specification architectural finishes. Residences range from spacious 3 BHK homes (2,061 - 2,096 sq.ft) to grand 4 BHK residences (2,660 - 2,791 sq.ft), complemented by refuge floor safety zones and a vibrant clubhouse.",
    "images": [
      "/images/projects/winsome-elite-page-3.jpg",
      "/images/projects/winsome-elite-page-2.jpg",
      "/images/projects/winsome-elite-page-1.jpg",
      "/images/projects/winsome-elite-page-4.jpg",
      "/images/projects/winsome-elite-page-5.jpg",
      "/images/projects/winsome-elite-page-6.jpg"
    ],
    "features": [
      "20-Ft Wide Internal Driveways & Grand Gateway",
      "Spacious 3 & 4 BHK Layouts up to 2,791 sq.ft",
      "Dedicated Refuge Safety Floors",
      "Prime Pillar 226 Corridor Connectivity",
      "100% Vastu-Compliant Floor Plans",
      "Landscaped Central Courtyard"
    ],
    "amenities": [
      {
        "name": "Grand Security Gateway",
        "icon": "door_front"
      },
      {
        "name": "Clubhouse & Hall",
        "icon": "deck"
      },
      {
        "name": "Fitness Center",
        "icon": "fitness_center"
      },
      {
        "name": "Indoor Games Lounge",
        "icon": "sports_esports"
      },
      {
        "name": "Jogging & Walking Track",
        "icon": "directions_walk"
      },
      {
        "name": "High-Speed Elevators",
        "icon": "elevator"
      },
      {
        "name": "Multi-Tier DG Backup",
        "icon": "power"
      },
      {
        "name": "Landscaped Courtyard",
        "icon": "nature"
      }
    ],
    "overviewStats": [
      {
        "label": "Saleable Area",
        "value": "2,061 - 2,791 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Carpet Area",
        "value": "1,094 - 1,518 sq.ft",
        "icon": "aspect_ratio"
      },
      {
        "label": "Driveways",
        "value": "20-Ft Wide Concrete",
        "icon": "alt_route"
      },
      {
        "label": "Location Mark",
        "value": "Pillar No. 226",
        "icon": "pin_drop"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Patliputra Railway Station",
        "distance": "3 mins (1.1 km)",
        "type": "Metro"
      },
      {
        "title": "Atal Path / Digha Junction",
        "distance": "6 mins (2.5 km)",
        "type": "Metro"
      },
      {
        "title": "Bailey Road & Rupaspur Flyover",
        "distance": "8 mins (3.2 km)",
        "type": "Tech Park"
      },
      {
        "title": "Ruban Memorial Hospital",
        "distance": "10 mins (4.5 km)",
        "type": "Hospital"
      },
      {
        "title": "Don Bosco Academy",
        "distance": "7 mins (2.8 km)",
        "type": "School"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "winsome-hari-pearlz",
    "slug": "winsome-hari-pearlz",
    "title": "Winsome Hari Pearlz - Riverside Luxury & High-Street Retail",
    "subtitle": "Mixed-Use Masterpiece with 10 Ground Commercial Shops & Luxury Suites",
    "tagline": "Waterfront luxury living seamlessly integrated with boutique shopping arcade",
    "price": 16200000,
    "priceDisplay": "₹1.62 Cr",
    "priceUsd": "$195,000",
    "location": "Near Marine Drive & JP Ganga Path, Patna, Bihar",
    "city": "Patna",
    "locality": "Digha",
    "address": "JP Ganga Path / Marine Drive Corridor, Digha Ghat Road, Patna 800011",
    "coordinates": {
      "lat": 25.645,
      "lng": 85.0965
    },
    "bedrooms": 4,
    "bathrooms": 4,
    "balconies": 4,
    "sqft": 3539,
    "carpetAreaSqft": 2350,
    "propertyType": "Luxury Apartment",
    "status": "Newly Launched",
    "possessionDate": "December 2027",
    "facing": "North-East",
    "reraId": "BRERAP14015-3/15/R-1622/2024",
    "furnishing": "Semi-Furnished",
    "parking": "2 Automated Basement Bays",
    "floor": "6th of 12 Floors",
    "maintenancePerMonth": "₹6,100/mo",
    "description": "Winsome Hari Pearlz commands an extraordinary position along the burgeoning JP Ganga Path / Marine Drive corridor. Conceived as a prestigious mixed-use destination, the development features a boutique ground-floor shopping arcade with 10 high-visibility commercial retail spaces, capped by expansive 3 and 4 BHK luxury residences extending up to 3,539 sq.ft. Residents enjoy panoramic river vistas, riverside promenades, and seamless urban connectivity.",
    "images": [
      "/images/projects/winsome-hari-pearlz-page-2.jpg",
      "/images/projects/winsome-hari-pearlz-page-5.jpg",
      "/images/projects/winsome-hari-pearlz-page-1.jpg",
      "/images/projects/winsome-hari-pearlz-page-3.jpg",
      "/images/projects/winsome-hari-pearlz-page-4.jpg",
      "/images/projects/winsome-hari-pearlz-page-6.jpg"
    ],
    "features": [
      "Ground Floor High-Street Arcade (10 Retail Shops)",
      "Ganga Marine Drive & Riverfront Panorama",
      "Ultra-Spacious 3 & 4 BHK Suites up to 3,539 sq.ft",
      "Automated Multi-Level Basement Parking",
      "RERA Approved: BRERAP14015-3/15/R-1622/2024",
      "Riverside Walking & Jogging Access"
    ],
    "amenities": [
      {
        "name": "Commercial Retail Arcade",
        "icon": "storefront"
      },
      {
        "name": "Riverside Promenade Deck",
        "icon": "water"
      },
      {
        "name": "Rooftop Sky Lounge",
        "icon": "deck"
      },
      {
        "name": "Modern Fitness Studio",
        "icon": "fitness_center"
      },
      {
        "name": "Automated Parking",
        "icon": "local_parking"
      },
      {
        "name": "High-Speed Service & Passenger Lifts",
        "icon": "elevator"
      },
      {
        "name": "24/7 Security & CCTV",
        "icon": "security"
      },
      {
        "name": "100% Power Backup",
        "icon": "bolt"
      }
    ],
    "overviewStats": [
      {
        "label": "Total Area",
        "value": "1,899 - 3,539 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Commercial Arcade",
        "value": "10 Ground Shops",
        "icon": "store"
      },
      {
        "label": "Development Type",
        "value": "Mixed-Use Luxury",
        "icon": "apartment"
      },
      {
        "label": "Waterfront",
        "value": "JP Ganga Path",
        "icon": "water"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Ganga Marine Drive (JP Ganga Path)",
        "distance": "1 min (300 m)",
        "type": "Tech Park"
      },
      {
        "title": "Digha Ghat Promenade",
        "distance": "4 mins (1.5 km)",
        "type": "Shopping"
      },
      {
        "title": "Patliputra Junction",
        "distance": "8 mins (3.5 km)",
        "type": "Metro"
      },
      {
        "title": "East Boring Canal Road",
        "distance": "14 mins (6.0 km)",
        "type": "Shopping"
      },
      {
        "title": "Kurji Holy Family Hospital",
        "distance": "7 mins (3.0 km)",
        "type": "Hospital"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "durga-77",
    "slug": "durga-77",
    "title": "Durga 77 - Signature Urban Residences on Digha-Atal Corridor",
    "subtitle": "Iconic Terracotta Architecture with Vertical Balcony Gardens & Resort Living",
    "tagline": "4BHK bespoke presidential residences, rooftop sky lounge & 32+ world-class amenities",
    "price": 18500000,
    "priceDisplay": "₹1.85 Cr",
    "priceUsd": "$222,000",
    "location": "Digha Polson Road, Atal Path Corridor, Patna, Bihar",
    "city": "Patna",
    "locality": "Digha Polson Road",
    "address": "Digha Polson Road, off Atal Path Expressway & Marine Drive, Patna 800011",
    "coordinates": {
      "lat": 25.632,
      "lng": 85.105
    },
    "bedrooms": 4,
    "bathrooms": 4,
    "balconies": 4,
    "sqft": 2850,
    "carpetAreaSqft": 2150,
    "propertyType": "Luxury Apartment",
    "status": "Newly Launched",
    "possessionDate": "June 2027",
    "facing": "North-East",
    "reraId": "BRERAP00045-2/14/R-1640/2024",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Reserved Bays",
    "floor": "10th of 16 Floors",
    "maintenancePerMonth": "₹5,900/mo",
    "description": "Durga 77 stands as an architectural triumph by Durga Projects along Patna's coveted Digha Polson Road, moments from the Atal Path Expressway and Patliputra Marine Drive on the Ganges. Showcasing an iconic terracotta-hued facade intertwined with hanging balcony gardens, this twin-tower landmark redefines high-end living in Bihar. Each bespoke 4BHK residence features expansive acoustic glass balconies, 4 baths, powder toilet, and dedicated staff quarters. Residents enjoy unmatched privileges: a resort-grade swimming pool with wooden sundeck and cabana, rooftop sky lounge and barbecue pavilion, private mini theatre, high-tech fitness studio, indoor multi-sports arena (badminton & basketball), spiritual Shiva temple, lush zen gardens, EV buggies, and comprehensive 3-tier digital security.",
    "images": [
      "/images/projects/durga-77/img77.jpg",
      "/images/projects/durga-77/img94.jpg",
      "/images/projects/durga-77/img2059.jpg",
      "/images/projects/durga-77/img36.jpg",
      "/images/projects/durga-77/img340.jpg",
      "/images/projects/durga-77/img184.jpg",
      "/images/projects/durga-77/img196.jpg",
      "/images/projects/durga-77/img177.jpg",
      "/images/projects/durga-77/img346.jpg",
      "/images/projects/durga-77/img341.jpg",
      "/images/projects/durga-77/img178.jpg",
      "/images/projects/durga-77/img183.jpg",
      "/images/projects/durga-77/img195.jpg",
      "/images/projects/durga-77/img347.jpg",
      "/images/projects/durga-77/img171.jpg",
      "/images/projects/durga-77/img1891.jpg",
      "/images/projects/durga-77/img1892.jpg",
      "/images/projects/durga-77/img2032.jpg",
      "/images/projects/durga-77/img2031.jpg",
      "/images/projects/durga-77/img382.jpg",
      "/images/projects/durga-77/img119.jpg",
      "/images/projects/durga-77/img2384.jpg"
    ],
    "features": [
      "Iconic Terracotta Facade with Vertical Balcony Gardens",
      "Bespoke 4BHK + 4T + Powder Room + Staff Quarters",
      "Resort Swimming Pool & Sun Deck with Cabana Canopy",
      "Rooftop Sunset Sky Lounge & BBQ Pavilion",
      "Private Mini Theatre & Audiovisual Screening Room",
      "Indoor Multi-Sport Arena (Badminton & Basketball)",
      "Executive Library & Co-Working Business Lounge",
      "Landscaped Spiritual Temple & Meditation Pavilion",
      "Direct Connectivity: Digha Polson Rd, Atal Path & Marine Drive",
      "BRERA Approved: BRERAP00045-2/14/R-1640/2024"
    ],
    "amenities": [
      {
        "name": "Resort Swimming Pool",
        "icon": "pool"
      },
      {
        "name": "Rooftop Sky Lounge",
        "icon": "deck"
      },
      {
        "name": "Private Mini Theatre",
        "icon": "theaters"
      },
      {
        "name": "Indoor Sports Arena",
        "icon": "sports_basketball"
      },
      {
        "name": "Executive Fitness Studio",
        "icon": "fitness_center"
      },
      {
        "name": "Rooftop Yoga Pergola",
        "icon": "self_improvement"
      },
      {
        "name": "Indoor Games Salon",
        "icon": "sports_esports"
      },
      {
        "name": "Kids Adventure Park",
        "icon": "child_care"
      },
      {
        "name": "Grand Banquet Hall",
        "icon": "celebration"
      },
      {
        "name": "Business Library",
        "icon": "menu_book"
      },
      {
        "name": "Spiritual Shiva Temple",
        "icon": "temple_hindu"
      },
      {
        "name": "EV Golf Buggy Shuttles",
        "icon": "electric_car"
      },
      {
        "name": "Zen Stepped Gardens",
        "icon": "park"
      },
      {
        "name": "Turf Cricket Pitch",
        "icon": "sports_cricket"
      },
      {
        "name": "24/7 Gated Security",
        "icon": "security"
      },
      {
        "name": "100% Power Backup",
        "icon": "bolt"
      }
    ],
    "floorPlans": [
      {
        "title": "Master Typical Floor Plan (4BHK)",
        "type": "Typical Residential Floor",
        "description": "Architectural master layout featuring Flats A1, A2, A3, B1, B2, B3 with 4 Bedrooms, 4 Bathrooms, Powder Toilet, and Staff Quarters with expansive verandas.",
        "image": "/images/projects/durga-77/img2384.jpg",
        "specs": "4 BHK • 2,850 sq.ft • Balcony Gardens"
      },
      {
        "title": "Podium Sky Garden Level",
        "type": "Podium / Garden Tier",
        "description": "Exclusive terrace residences integrated with private landscaped sky gardens, water features, and open-air decks.",
        "image": "/images/projects/durga-77/img390.jpg",
        "specs": "Podium Tier • Landscaped Sky Gardens"
      },
      {
        "title": "Terrace & Recreation Deck Plan",
        "type": "Recreation Floor",
        "description": "Dedicated lifestyle floor plan highlighting the multi-activity zones, soft-floor children's court, and perimeter planters.",
        "image": "/images/projects/durga-77/img1616.jpg",
        "specs": "Recreation Deck • Community Greens"
      },
      {
        "title": "Master Site Layout & Campus Circulation",
        "type": "Master Campus Plan",
        "description": "Comprehensive site master plan delineating the grand entry boulevard, perimeter driveways, outdoor sports courts, swimming pool, and dedicated parking bays.",
        "image": "/images/projects/durga-77/img119.jpg",
        "specs": "Twin Towers • Master Circulation • Gated Campus"
      },
      {
        "title": "Strategic GIS Connectivity & Corridor Map",
        "type": "Location & Infrastructure",
        "description": "Official infrastructure map detailing direct proximity to Digha Polson Road, Atal Path Expressway, and Patliputra Marine Drive on the Ganges.",
        "image": "/images/projects/durga-77/img382.jpg",
        "specs": "Digha Polson Rd • Atal Path • Marine Drive"
      }
    ],
    "amenityShowcase": [
      {
        "title": "Cardio & Fitness Gymnasium",
        "category": "Wellness & Health",
        "description": "State-of-the-art cardiovascular and strength training equipment overlooking landscaped greens.",
        "image": "/images/projects/durga-77/img2237.jpg"
      },
      {
        "title": "Covered Swimming Pool & Sundeck",
        "category": "Aquatics",
        "description": "Weather-protected lap pool with granite steps, safety rails, and poolside relaxation deck.",
        "image": "/images/projects/durga-77/img2247.jpg"
      },
      {
        "title": "All-Weather Box Cricket Arena",
        "category": "Sports",
        "description": "High-enclosure net cricket practice pitch with floodlights and synthetic turf.",
        "image": "/images/projects/durga-77/img2258.jpg"
      },
      {
        "title": "Children's Adventure Playground",
        "category": "Kids & Family",
        "description": "Multi-play fortress with slides, swings, and soft green safety surroundings.",
        "image": "/images/projects/durga-77/img2248.jpg"
      },
      {
        "title": "Stepped Amphitheater & Zen Garden",
        "category": "Landscape",
        "description": "Terraced granite seating with lush floral arrangements for open-air gatherings.",
        "image": "/images/projects/durga-77/img2249.jpg"
      },
      {
        "title": "Resident Clubhouse Reception",
        "category": "Community",
        "description": "Grand modern clubhouse lobby providing access to concierge and indoor leisure lounges.",
        "image": "/images/projects/durga-77/img2254.jpg"
      },
      {
        "title": "EV Buggy Mobility Shuttles",
        "category": "Convenience",
        "description": "Zero-emission electric golf carts for effortless internal campus transit.",
        "image": "/images/projects/durga-77/img2259.jpg"
      },
      {
        "title": "Badminton & Multi-Sport Court",
        "category": "Sports",
        "description": "Fenced sports court with anti-skid synthetic surface for competitive play.",
        "image": "/images/projects/durga-77/img2235.jpg"
      },
      {
        "title": "Aerobics & Yoga Hall",
        "category": "Wellness",
        "description": "Mirrored studio with timber flooring and wellness equipment for mindful living.",
        "image": "/images/projects/durga-77/img2232.jpg"
      },
      {
        "title": "Landscaped Central Park & Promenade",
        "category": "Nature",
        "description": "Manicured central park with paved walking paths, lamp posts, and lush trees.",
        "image": "/images/projects/durga-77/img2236.jpg"
      },
      {
        "title": "Grand Entrance Portico & Canopy",
        "category": "Architecture",
        "description": "Timber-paneled entrance portico and double-height arrival pavilion.",
        "image": "/images/projects/durga-77/img2256.jpg"
      },
      {
        "title": "24/7 Gated Security & Perimeter Guard",
        "category": "Security",
        "description": "Ornate security gates with boom barriers and round-the-clock surveillance control.",
        "image": "/images/projects/durga-77/img2233.jpg"
      }
    ],
    "overviewStats": [
      {
        "label": "Total Area",
        "value": "2,850 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Carpet Area",
        "value": "2,150 sq.ft",
        "icon": "aspect_ratio"
      },
      {
        "label": "Growth Corridor",
        "value": "Digha Polson / Atal Path",
        "icon": "alt_route"
      },
      {
        "label": "Configuration",
        "value": "4 BHK + 4T + Servant",
        "icon": "bed"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Atal Path Expressway Junction",
        "distance": "2 mins (800 m)",
        "type": "Metro"
      },
      {
        "title": "Patliputra Marine Drive (Ganga Riverfront)",
        "distance": "3 mins (1.2 km)",
        "type": "Tech Park"
      },
      {
        "title": "Digha Bridge Halt / Railway Junction",
        "distance": "4 mins (1.8 km)",
        "type": "Metro"
      },
      {
        "title": "St. Michael's High School / DPS",
        "distance": "6 mins (2.4 km)",
        "type": "School"
      },
      {
        "title": "Ruban Memorial Super-Specialty Hospital",
        "distance": "7 mins (3.1 km)",
        "type": "Hospital"
      },
      {
        "title": "Patna International Airport",
        "distance": "14 mins (6.8 km)",
        "type": "Airport"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "venus-capital-heights",
    "slug": "venus-capital-heights",
    "title": "Venus Capital Heights - G+14 Luxury Landmark in Danapur",
    "subtitle": "High-Rise Grandeur with Resort-Inspired Amenities near AIIMS Patna",
    "tagline": "Architectural magnificence with sprawling clubhouse and panoramic skyline views",
    "price": 11800000,
    "priceDisplay": "₹1.18 Cr",
    "priceUsd": "$142,000",
    "location": "Mauza Sandalpur, Danapur / AIIMS Road, Patna, Bihar",
    "city": "Patna",
    "locality": "Danapur",
    "address": "Mauza Sandalpur, Near AIIMS Patna, Danapur, Patna 801503",
    "coordinates": {
      "lat": 25.594,
      "lng": 85.045
    },
    "bedrooms": 3,
    "bathrooms": 3,
    "balconies": 3,
    "sqft": 2150,
    "carpetAreaSqft": 1620,
    "propertyType": "Luxury Apartment",
    "status": "Under Construction",
    "possessionDate": "March 2027",
    "facing": "East",
    "reraId": "BRERAP182028070325300130E00",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Bays",
    "floor": "11th of 14 Floors",
    "maintenancePerMonth": "₹4,800/mo",
    "description": "Venus Capital Heights by Venus Star Construction is a premier high-rise township in Danapur, Patna. Spanning multiple towers rising G+14 storeys, this landmark development redefines modern suburban luxury with vast open landscaped greens, resort-style swimming pool, fully equipped gymnasium, jogging tracks, multi-tier automated security, and rapid access to AIIMS Patna and Danapur Station.",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "G+14 High-Rise Towers with Panoramic Views",
      "Near AIIMS Patna & Danapur Junction",
      "Resort-Inspired Swimming Pool & Club",
      "BRERA Approved: BRERAP182028070325300130E00",
      "Promoter: Venus Star Construction Pvt Ltd",
      "2 Covered Reserved Parking Bays"
    ],
    "amenities": [
      {
        "name": "Swimming Pool",
        "icon": "pool"
      },
      {
        "name": "Grand Clubhouse",
        "icon": "deck"
      },
      {
        "name": "Gymnasium",
        "icon": "fitness_center"
      },
      {
        "name": "Landscaped Gardens",
        "icon": "park"
      },
      {
        "name": "Jogging Track",
        "icon": "directions_walk"
      },
      {
        "name": "EV Fast Charging",
        "icon": "ev_station"
      },
      {
        "name": "24/7 Security & CCTV",
        "icon": "security"
      },
      {
        "name": "100% DG Power Backup",
        "icon": "bolt"
      }
    ],
    "overviewStats": [
      {
        "label": "Tower Scale",
        "value": "G + 14 Floors",
        "icon": "apartment"
      },
      {
        "label": "Developer",
        "value": "Venus Star Construction",
        "icon": "domain"
      },
      {
        "label": "Configuration",
        "value": "2, 3 & 4 BHK",
        "icon": "bed"
      },
      {
        "label": "Super Built-up",
        "value": "1,550 - 2,450 sq.ft",
        "icon": "straighten"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "AIIMS Patna Medical Center",
        "distance": "4 mins (1.8 km)",
        "type": "Hospital"
      },
      {
        "title": "Danapur Railway Station",
        "distance": "6 mins (2.5 km)",
        "type": "Metro"
      },
      {
        "title": "Patna International Airport",
        "distance": "15 mins (7.2 km)",
        "type": "Airport"
      },
      {
        "title": "St. Karen's Secondary School",
        "distance": "7 mins (3.0 km)",
        "type": "School"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "satvika-rajpati-enclave",
    "slug": "satvika-rajpati-enclave",
    "title": "Satvika Rajpati Enclave - Elite Gated Residences in Sikandarpur",
    "subtitle": "Boutique Urban Living Crafted by Renowned Satvika Group",
    "tagline": "Contemporary architecture, lush green surroundings, and supreme tranquility",
    "price": 11200000,
    "priceDisplay": "₹1.12 Cr",
    "priceUsd": "$135,000",
    "location": "Sikandarpur, Danapur, Patna, Bihar",
    "city": "Patna",
    "locality": "Danapur",
    "address": "Sikandarpur Main Road, Danapur, Patna 801503",
    "coordinates": {
      "lat": 25.601,
      "lng": 85.038
    },
    "bedrooms": 3,
    "bathrooms": 3,
    "balconies": 2,
    "sqft": 1950,
    "carpetAreaSqft": 1480,
    "propertyType": "Luxury Apartment",
    "status": "Under Construction",
    "possessionDate": "February 2028",
    "facing": "North-East",
    "reraId": "BRERAP198828070526260231E00",
    "furnishing": "Semi-Furnished",
    "parking": "1 Covered Reserved Bay",
    "floor": "5th of 8 Floors",
    "maintenancePerMonth": "₹4,200/mo",
    "description": "Satvika Rajpati Enclave by Satvika Group brings signature craftsmanship and contemporary community living to Sikandarpur, Danapur. Designed with generous setbacks, Vastu-compliant layout orientations, and abundant natural airflow, this residential sanctuary features landscaped podium courtyards, children's play zones, rooftop gazebo lounge, and seamless arterial access to Patna's core expressways.",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Developed by Renowned Satvika Group",
      "Prime Sikandarpur Danapur Growth Corridor",
      "100% Vastu-Compliant Spacious Suites",
      "BRERA Registered: BRERAP198828070526260231E00",
      "Landscaped Courtyard & Rooftop Gazebo",
      "Dedicated Covered Reserved Parking"
    ],
    "amenities": [
      {
        "name": "Rooftop Gazebo & Deck",
        "icon": "deck"
      },
      {
        "name": "Fitness Center",
        "icon": "fitness_center"
      },
      {
        "name": "Children Play Park",
        "icon": "child_care"
      },
      {
        "name": "Community Banquet Hall",
        "icon": "groups"
      },
      {
        "name": "Smart Intercom & CCTV",
        "icon": "videocam"
      },
      {
        "name": "High-Speed Elevators",
        "icon": "elevator"
      },
      {
        "name": "24/7 Power Backup",
        "icon": "bolt"
      },
      {
        "name": "Rainwater Harvesting",
        "icon": "water_drop"
      }
    ],
    "overviewStats": [
      {
        "label": "Developer",
        "value": "Satvika Group",
        "icon": "domain"
      },
      {
        "label": "Configuration",
        "value": "3 & 4 BHK Enclave",
        "icon": "bed"
      },
      {
        "label": "Super Built-up",
        "value": "1,650 - 2,350 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Locality",
        "value": "Sikandarpur, Danapur",
        "icon": "pin_drop"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Danapur Railway Junction",
        "distance": "5 mins (2.2 km)",
        "type": "Metro"
      },
      {
        "title": "Saguna More Commercial Hub",
        "distance": "8 mins (3.5 km)",
        "type": "Shopping"
      },
      {
        "title": "AIIMS Patna",
        "distance": "9 mins (4.0 km)",
        "type": "Hospital"
      },
      {
        "title": "Patna International Airport",
        "distance": "16 mins (8.0 km)",
        "type": "Airport"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "kb-double-side-boulevard",
    "slug": "kb-double-side-boulevard",
    "title": "KB Double-Side Boulevard - Premium Dual-Frontage Residences",
    "subtitle": "Distinctive Corner Landmark with Dual 40-Ft Wide Boulevard Frontage",
    "tagline": "Supreme cross-ventilation, expansive double-road access, and upscale modern living",
    "price": 12200000,
    "priceDisplay": "₹1.22 Cr",
    "priceUsd": "$148,000",
    "location": "Danapur-Khagaul Double Boulevard Road, Patna, Bihar",
    "city": "Patna",
    "locality": "Danapur",
    "address": "Main Double-Side Arterial Road, Danapur-Khagaul Corridor, Patna 801105",
    "coordinates": {
      "lat": 25.615,
      "lng": 85.052
    },
    "bedrooms": 3,
    "bathrooms": 3,
    "balconies": 3,
    "sqft": 2280,
    "carpetAreaSqft": 1690,
    "propertyType": "Luxury Apartment",
    "status": "Under Construction",
    "possessionDate": "November 2026",
    "facing": "North-East",
    "reraId": "BRERAP00112-2/18/R-1480/2023",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Bays",
    "floor": "7th of 12 Floors",
    "maintenancePerMonth": "₹4,600/mo",
    "description": "KB Double-Side Boulevard occupies a prized dual-frontage corner parcel on the Danapur-Khagaul corridor. Featuring wide 40-foot double-sided avenue access, the development guarantees panoramic open vistas, superior natural cross-ventilation, and effortless vehicle ingress and egress. Comprising thoughtfully designed 3 & 4 BHK residences with private balconies, rooftop recreational facilities, and comprehensive 3-tier security.",
    "images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Dual 40-Ft Wide Double-Side Avenue Frontage",
      "Unobstructed Corner Cross-Ventilation",
      "Strategic Danapur-Khagaul Arterial Link",
      "BRERA Approved: BRERAP00112-2/18/R-1480/2023",
      "Dedicated Dual Basement Parking"
    ],
    "amenities": [
      {
        "name": "Dual Boulevard Access",
        "icon": "alt_route"
      },
      {
        "name": "Rooftop Sky Terrace",
        "icon": "deck"
      },
      {
        "name": "Fitness Gymnasium",
        "icon": "fitness_center"
      },
      {
        "name": "Landscaped Podium",
        "icon": "park"
      },
      {
        "name": "EV Charging Infrastructure",
        "icon": "ev_station"
      },
      {
        "name": "High-Speed Elevators",
        "icon": "elevator"
      },
      {
        "name": "24/7 Security & Access Control",
        "icon": "security"
      },
      {
        "name": "100% DG Power Backup",
        "icon": "bolt"
      }
    ],
    "overviewStats": [
      {
        "label": "Frontage",
        "value": "Double 40-Ft Road",
        "icon": "traffic"
      },
      {
        "label": "Configuration",
        "value": "3 & 4 BHK Corner",
        "icon": "bed"
      },
      {
        "label": "Super Built-up",
        "value": "1,750 - 2,550 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Corridor",
        "value": "Danapur-Khagaul",
        "icon": "pin_drop"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Danapur Railway Station",
        "distance": "4 mins (1.6 km)",
        "type": "Metro"
      },
      {
        "title": "Saguna More Junction",
        "distance": "6 mins (2.8 km)",
        "type": "Shopping"
      },
      {
        "title": "Paras HMRI Hospital",
        "distance": "10 mins (4.8 km)",
        "type": "Hospital"
      },
      {
        "title": "Patna Airport",
        "distance": "14 mins (6.5 km)",
        "type": "Airport"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Realic Patna Portfolio",
      "phone": "+91 94310 98765",
      "email": "amit.vikram@realicconsultant.com",
      "rating": 4.98,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  }
];
