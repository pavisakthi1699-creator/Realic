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
    "tagline": "Uncompromising presidential living exclusively reserved for 32 families",
    "price": 23500000,
    "priceDisplay": "₹2.35 Cr",
    "priceUsd": "$282,000",
    "location": "100-Ft Wide Atal Path, Patna, Bihar",
    "city": "Patna",
    "locality": "Atal Path",
    "address": "Sector 4, 100-Ft Atal Path Expressway Corridor, Patna 800001",
    "coordinates": {
      "lat": 25.6185,
      "lng": 85.116
    },
    "bedrooms": 4,
    "bathrooms": 4,
    "balconies": 3,
    "sqft": 3150,
    "carpetAreaSqft": 2480,
    "propertyType": "Penthouse",
    "status": "Under Construction",
    "possessionDate": "September 2026",
    "facing": "East",
    "reraId": "BRERAP00045-1/11/R-1588/2023",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Reserved Stilt Bays",
    "floor": "7th of 9 Floors",
    "maintenancePerMonth": "₹7,500/mo",
    "description": "Durga Lifestyle represents the epitome of presidential serenity on Patna's premier 100-ft-wide Atal Path. Conceived as a private single-tower boutique haven (B+G+9), it offers an elite collection of only 32 palatial homes, guaranteeing absolute peace and discretion. Featuring grand double-height entrance reception, imported Italian marble lobbies, bespoke biometric elevator access directly to your private foyer, terrace infinity relaxation deck, and world-class health facilities.",
    "images": [
      "/images/projects/durga-lifestyle-page-2.jpg",
      "/images/projects/durga-lifestyle-page-4.jpg",
      "/images/projects/durga-lifestyle-page-5.jpg",
      "/images/projects/durga-lifestyle-page-1.jpg",
      "/images/projects/durga-lifestyle-page-3.jpg",
      "/images/projects/durga-lifestyle-page-6.jpg"
    ],
    "features": [
      "Ultra-Exclusive: Strictly 32 Families Only",
      "Prime 100-Ft Atal Path Frontage",
      "Private Biometric Foyer Elevators",
      "B+G+9 Boutique Low-Density Architectural Icon",
      "BRERA Registered: BRERAP00045-1/11/R-1588/2023",
      "Italian Statuario Marble Finished Lobbies"
    ],
    "amenities": [
      {
        "name": "Double-Height Reception",
        "icon": "meeting_room"
      },
      {
        "name": "Terrace Infinity Pool",
        "icon": "pool"
      },
      {
        "name": "Private Gymnasium & Spa",
        "icon": "fitness_center"
      },
      {
        "name": "Italian Marble Salons",
        "icon": "diamond"
      },
      {
        "name": "Biometric Smart Access",
        "icon": "fingerprint"
      },
      {
        "name": "EV Vehicle Charging",
        "icon": "ev_station"
      },
      {
        "name": "24/7 Concierge & Security",
        "icon": "shield"
      },
      {
        "name": "100% Full DG Backup",
        "icon": "bolt"
      }
    ],
    "overviewStats": [
      {
        "label": "Total Residences",
        "value": "32 Exclusive Homes",
        "icon": "domain"
      },
      {
        "label": "Configuration",
        "value": "3 & 4 BHK Presidential",
        "icon": "bed"
      },
      {
        "label": "Super Built-up",
        "value": "2,250 - 3,450 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Expressway",
        "value": "100-Ft Atal Path",
        "icon": "navigation"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Atal Path Expressway",
        "distance": "0 min (Direct access)",
        "type": "Metro"
      },
      {
        "title": "East Boring Canal Road",
        "distance": "3 mins (1.2 km)",
        "type": "Shopping"
      },
      {
        "title": "Gandhi Maidan & Maurya Center",
        "distance": "8 mins (3.8 km)",
        "type": "Shopping"
      },
      {
        "title": "Patna Central Junction",
        "distance": "10 mins (4.5 km)",
        "type": "Metro"
      },
      {
        "title": "Paras HMRI Hospital",
        "distance": "8 mins (3.2 km)",
        "type": "Hospital"
      },
      {
        "title": "Loyola High School",
        "distance": "6 mins (2.4 km)",
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
      "/images/projects/winsome-pearlz-page-5.jpg",
      "/images/projects/winsome-pearlz-page-2.jpg",
      "/images/projects/winsome-pearlz-page-3.jpg",
      "/images/projects/winsome-pearlz-page-4.jpg",
      "/images/projects/winsome-pearlz-page-6.jpg",
      "/images/projects/winsome-pearlz-page-1.jpg"
    ],
    "features": [
      "Dedicated Servant Room & Washroom in 4 BHK",
      "Strategically Located at Pillar 263 Digha Link Rd",
      "Podium Infinity Pool & Rooftop Yoga Deck",
      "Carpet Area Verified: 1,151 - 1,575 sq.ft",
      "RERA Approved: BRERAP14015-2/12/R-1554/2023",
      "2-Level Automated Basement Parking"
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
    "title": "Durga 77 - Signature Urban Residences on Bailey-Atal Corridor",
    "subtitle": "Contemporary Architectural Elegance along Patna's Central Growth Axis",
    "tagline": "Sophisticated design, expansive sunlit balconies, and uncompromised privacy",
    "price": 18500000,
    "priceDisplay": "₹1.85 Cr",
    "priceUsd": "$222,000",
    "location": "Atal Path / Bailey Road Corridor, Patna, Bihar",
    "city": "Patna",
    "locality": "Bailey Road",
    "address": "Near Atal Path Flyover, Bailey Road Growth Corridor, Patna 800014",
    "coordinates": {
      "lat": 25.612,
      "lng": 85.098
    },
    "bedrooms": 3,
    "bathrooms": 3,
    "balconies": 3,
    "sqft": 2850,
    "carpetAreaSqft": 2150,
    "propertyType": "Luxury Apartment",
    "status": "Newly Launched",
    "possessionDate": "June 2027",
    "facing": "East",
    "reraId": "BRERAP00045-2/14/R-1640/2024",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Bays",
    "floor": "10th of 16 Floors",
    "maintenancePerMonth": "₹5,900/mo",
    "description": "Durga 77 brings signature modern aesthetics to Patna's most dynamic corridor connecting Atal Path and Bailey Road. Engineered by Durga Projects, this prestigious development boasts striking glass façades, vast sun-drenched balconies, and intelligent space planning. Ranging from 1,950 to 2,850 sq.ft, each residence provides seamless airflow, acoustic insulation, and access to a panoramic rooftop clubhouse, infinity plunge pool, and lush manicured gardens.",
    "images": [
      "/images/projects/durga-77-page-2.jpg",
      "/images/projects/durga-77-page-6.jpg",
      "/images/projects/durga-77-page-5.jpg",
      "/images/projects/durga-77-page-1.jpg",
      "/images/projects/durga-77-page-3.jpg",
      "/images/projects/durga-77-page-4.jpg"
    ],
    "features": [
      "Strategic Bailey Road & Atal Path Interchange",
      "Floor-to-Ceiling Acoustic Glazed Balconies",
      "Rooftop Infinity Plunge Pool & Sky Club",
      "Smart Digital Access & Automated Security",
      "BRERA Approved: BRERAP00045-2/14/R-1640/2024",
      "2 Covered Reserved Parkings"
    ],
    "amenities": [
      {
        "name": "Rooftop Sky Club",
        "icon": "deck"
      },
      {
        "name": "Infinity Plunge Pool",
        "icon": "pool"
      },
      {
        "name": "Fitness Studio",
        "icon": "fitness_center"
      },
      {
        "name": "Senior Citizen Pavilion",
        "icon": "elderly"
      },
      {
        "name": "Designer Landscaped Gardens",
        "icon": "park"
      },
      {
        "name": "Children Play Area",
        "icon": "child_care"
      },
      {
        "name": "Multi-Tier Automated Security",
        "icon": "security"
      },
      {
        "name": "100% DG Power Backup",
        "icon": "bolt"
      }
    ],
    "overviewStats": [
      {
        "label": "Total Area",
        "value": "1,950 - 2,850 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Carpet Area",
        "value": "1,480 - 2,150 sq.ft",
        "icon": "aspect_ratio"
      },
      {
        "label": "Growth Corridor",
        "value": "Bailey Rd / Atal Path",
        "icon": "alt_route"
      },
      {
        "label": "Configuration",
        "value": "3 & 4 BHK Signature",
        "icon": "bed"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Bailey Road Prime Corridor",
        "distance": "2 mins (800 m)",
        "type": "Tech Park"
      },
      {
        "title": "Atal Path Expressway Junction",
        "distance": "2 mins (900 m)",
        "type": "Metro"
      },
      {
        "title": "Paras HMRI Super-Specialty Hospital",
        "distance": "7 mins (3.0 km)",
        "type": "Hospital"
      },
      {
        "title": "Patna International Airport",
        "distance": "12 mins (5.2 km)",
        "type": "Airport"
      },
      {
        "title": "City Centre Mall Patna",
        "distance": "8 mins (3.4 km)",
        "type": "Shopping"
      },
      {
        "title": "Delhi Public School Patna",
        "distance": "10 mins (4.0 km)",
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
    "id": "prestige-lakeside-habitat",
    "slug": "prestige-lakeside-habitat",
    "title": "3 BHK Luxury Apartment in Prestige Lakeside Habitats",
    "subtitle": "Overlooking Varthur Lake with Panoramic Skyline Views",
    "tagline": "Curated by Realic Institutional Advisory",
    "price": 18500000,
    "priceDisplay": "₹1.85 Cr",
    "priceUsd": "$225,000",
    "location": "Whitefield, Bangalore",
    "city": "Bangalore",
    "locality": "Whitefield",
    "address": "Tower 4, Prestige Lakeside Habitat, Varthur Main Rd, Bangalore, Karnataka 560087",
    "coordinates": {
      "lat": 12.956,
      "lng": 77.741
    },
    "bedrooms": 3,
    "bathrooms": 3,
    "balconies": 2,
    "sqft": 2145,
    "carpetAreaSqft": 1680,
    "propertyType": "Luxury Apartment",
    "status": "Ready to Move",
    "possessionDate": "Immediate",
    "facing": "North-East",
    "reraId": "PRM/KA/RERA/1251/446/PR/170915/000176",
    "furnishing": "Semi-Furnished",
    "parking": "2 Covered Reserved Bays",
    "floor": "18th of 28 Floors",
    "maintenancePerMonth": "₹7,200/mo",
    "description": "Experience unmatched modern serenity in this impeccably planned 3 BHK luxury residence situated in prestigious Lakeside Habitat. Featuring floor-to-ceiling soundproof acoustic glass windows framing pristine lake horizons, premium Italian marble flooring across living salons, and custom German modular kitchen fittings with integrated premium appliances. Uncompromised privacy with only 2 residences per elevator lobby.",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Varthur Lake Frontage",
      "Italian Statuario Marble",
      "Smart Home Automation",
      "EV Charging Point in Basement",
      "Acoustic Double-Glazed Windows",
      "100% DG Power Backup"
    ],
    "amenities": [
      {
        "name": "Concierge Security",
        "icon": "verified_user"
      },
      {
        "name": "Fitness Gym",
        "icon": "fitness_center"
      },
      {
        "name": "Clubhouse",
        "icon": "deck"
      },
      {
        "name": "Power Backup",
        "icon": "bolt"
      }
    ],
    "overviewStats": [
      {
        "label": "Super Area",
        "value": "2145 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Carpet Area",
        "value": "1680 sq.ft",
        "icon": "square_foot"
      },
      {
        "label": "Bedrooms",
        "value": "3 BHK",
        "icon": "bed"
      },
      {
        "label": "Floor Level",
        "value": "18th of 28 Floors",
        "icon": "apartment"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Airport Transit",
        "distance": "8.5 km (20 mins)",
        "type": "Airport"
      },
      {
        "title": "Metro Station",
        "distance": "1.2 km (4 mins)",
        "type": "Metro"
      },
      {
        "title": "Specialty Hospital",
        "distance": "2.5 km (6 mins)",
        "type": "Hospital"
      }
    ],
    "agent": {
      "name": "Rahul Sharma",
      "role": "Senior Property Advisor - Whitefield Cluster",
      "phone": "+91 98450 12345",
      "email": "rahul.sharma@realicconsultant.com",
      "rating": 4.95,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "bailey-road-luxury-penthouse",
    "slug": "bailey-road-luxury-penthouse",
    "title": "3 BHK Luxury Sky Penthouse on Bailey Road",
    "subtitle": "Exclusive High-Floor Haven in Patna Prime Corridor",
    "tagline": "The pinnacle of private luxury in Bihar most coveted residential boulevard",
    "price": 25000000,
    "priceDisplay": "₹2.50 Cr",
    "priceUsd": "$305,000",
    "location": "Bailey Road, Patna, Bihar",
    "city": "Patna",
    "locality": "Bailey Road",
    "address": "Bailey Heights, Near Saguna More, Bailey Road, Patna, Bihar 801503",
    "coordinates": {
      "lat": 25.6127,
      "lng": 85.0743
    },
    "bedrooms": 3,
    "bathrooms": 3,
    "balconies": 3,
    "sqft": 2800,
    "carpetAreaSqft": 2250,
    "propertyType": "Penthouse",
    "status": "Ready to Move",
    "possessionDate": "Ready for Fit-out",
    "facing": "North-East",
    "reraId": "BR-RERA-2024-9182",
    "furnishing": "Fully Furnished",
    "parking": "2 Covered Bays",
    "floor": "14th Floor (Top Penthouse)",
    "maintenancePerMonth": "₹5,500/mo",
    "description": "Commanding the top tier of Bailey Road premier tower, this 3 BHK penthouse provides rare double-height ceilings, private 400 sq ft wrap-around sky terrace with unobstructed sunset vistas, automated climate controls, and legal verification through Realic three-tier compliance audit.",
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private 400 sq ft Sky Deck",
      "Double Height Living Lounge",
      "Smart Fingerprint Locks",
      "Clean 100% Clear Legal Title",
      "High-Speed OTIS Elevators"
    ],
    "amenities": [
      {
        "name": "Sky Club Lounge",
        "icon": "deck"
      },
      {
        "name": "Gym & Yoga Studio",
        "icon": "fitness_center"
      },
      {
        "name": "Covered Car Parking",
        "icon": "local_parking"
      },
      {
        "name": "24/7 Armed Guard Security",
        "icon": "security"
      },
      {
        "name": "Rainwater Harvesting",
        "icon": "water_drop"
      }
    ],
    "overviewStats": [
      {
        "label": "Super Area",
        "value": "2,800 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Carpet Area",
        "value": "2,250 sq.ft",
        "icon": "square_foot"
      },
      {
        "label": "Configuration",
        "value": "3 BHK + Sky Terrace",
        "icon": "bed"
      },
      {
        "label": "Floor Level",
        "value": "Penthouse Level",
        "icon": "apartment"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Saguna More Junction",
        "distance": "600 m (3 mins)",
        "type": "Metro"
      },
      {
        "title": "Patna Airport (JPNI)",
        "distance": "8.2 km (18 mins)",
        "type": "Airport"
      },
      {
        "title": "Paras HMRI Hospital",
        "distance": "4.5 km (10 mins)",
        "type": "Hospital"
      },
      {
        "title": "DPS Danapur",
        "distance": "3.0 km (7 mins)",
        "type": "School"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Patna Luxury Advisory",
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
    "id": "danapur-ultra-luxury-villa",
    "slug": "danapur-ultra-luxury-villa",
    "title": "4 BHK Ultra Luxury Contemporary Villa in Danapur",
    "subtitle": "Private Gated Compound with Heated Pool & Zen Garden",
    "tagline": "Architectural masterpiece crafted for multi-generational elegance",
    "price": 42000000,
    "priceDisplay": "₹4.20 Cr",
    "priceUsd": "$510,000",
    "location": "Danapur Cantonment Road, Patna, Bihar",
    "city": "Patna",
    "locality": "Danapur",
    "address": "Estate 7, The Imperial Enclave, Danapur Khagaul Rd, Patna 801105",
    "coordinates": {
      "lat": 25.6315,
      "lng": 85.0411
    },
    "bedrooms": 4,
    "bathrooms": 5,
    "balconies": 4,
    "sqft": 4200,
    "carpetAreaSqft": 3650,
    "propertyType": "Villa",
    "status": "Ready to Move",
    "possessionDate": "Immediate",
    "facing": "East",
    "reraId": "BR-RERA-2024-4411",
    "furnishing": "Semi-Furnished",
    "parking": "3 Car Driveway & Garage",
    "floor": "G + 2 Independent Floors",
    "maintenancePerMonth": "₹8,000/mo",
    "description": "A sprawling custom-designed modernist villa surrounded by private manicured grounds. Featuring an expansive central light atrium, imported teakwood finishings, private home theater room, rooftop solar array, and private swimming pool with outdoor cabana seating.",
    "images": [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Swimming Pool",
      "G+2 Independent Structure",
      "Solar Power Grid (10kW)",
      "Home Theater Room",
      "CCTV Perimeter Security"
    ],
    "amenities": [
      {
        "name": "Private Pool",
        "icon": "pool"
      },
      {
        "name": "Landscaped Lawn",
        "icon": "park"
      },
      {
        "name": "Home Theater",
        "icon": "movie"
      },
      {
        "name": "3-Car Garage",
        "icon": "garage"
      },
      {
        "name": "Servant Quarters",
        "icon": "badge"
      }
    ],
    "overviewStats": [
      {
        "label": "Built-up Area",
        "value": "4,200 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Plot Size",
        "value": "5,500 sq.ft",
        "icon": "landscape"
      },
      {
        "label": "Configuration",
        "value": "4 BHK + Home Theater",
        "icon": "bed"
      },
      {
        "label": "Structure",
        "value": "G + 2 Villa",
        "icon": "villa"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Danapur Railway Station",
        "distance": "2.5 km (6 mins)",
        "type": "Metro"
      },
      {
        "title": "AIIMS Patna",
        "distance": "5.8 km (12 mins)",
        "type": "Hospital"
      },
      {
        "title": "St. Michael High School",
        "distance": "6.5 km (15 mins)",
        "type": "School"
      },
      {
        "title": "Patna Airport",
        "distance": "9.5 km (20 mins)",
        "type": "Airport"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Patna Luxury Advisory",
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
    "id": "boring-road-executive-residence",
    "slug": "boring-road-executive-residence",
    "title": "3 BHK Modern High-Rise in Boring Road",
    "subtitle": "Central Patna Elite Commercial & Educational Hub",
    "tagline": "Unsurpassed urban connectivity with high rental yields",
    "price": 18000000,
    "priceDisplay": "₹1.80 Cr",
    "priceUsd": "$220,000",
    "location": "Boring Road, Patna, Bihar",
    "city": "Patna",
    "locality": "Boring Road",
    "address": "Chanakya Royale, Boring Canal Rd, Patna 800001",
    "coordinates": {
      "lat": 25.6174,
      "lng": 85.1215
    },
    "bedrooms": 3,
    "bathrooms": 3,
    "balconies": 2,
    "sqft": 2100,
    "carpetAreaSqft": 1650,
    "propertyType": "Luxury Apartment",
    "status": "Ready to Move",
    "possessionDate": "Ready",
    "facing": "North",
    "reraId": "BR-RERA-2024-1029",
    "furnishing": "Semi-Furnished",
    "parking": "1 Reserved Stilt Parking",
    "floor": "8th of 12 Floors",
    "maintenancePerMonth": "₹4,200/mo",
    "description": "Situated in the vibrant cultural heart of Boring Road, this residence balances quiet interior comfort with immediate walking access to premier educational institutions, upscale dining, and major healthcare hubs.",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Prime Boring Road Address",
      "High-Speed Internet Pre-cabling",
      "24/7 Water & Power Backup",
      "Intercom & Video Door Phone"
    ],
    "amenities": [
      {
        "name": "Fitness Gym",
        "icon": "fitness_center"
      },
      {
        "name": "Community Hall",
        "icon": "groups"
      },
      {
        "name": "CCTV Surveillance",
        "icon": "videocam"
      },
      {
        "name": "Power Backup",
        "icon": "bolt"
      }
    ],
    "overviewStats": [
      {
        "label": "Super Area",
        "value": "2,100 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Carpet Area",
        "value": "1,650 sq.ft",
        "icon": "square_foot"
      },
      {
        "label": "Configuration",
        "value": "3 BHK + 3 Bath",
        "icon": "bed"
      },
      {
        "label": "Floor Level",
        "value": "8th of 12 Floors",
        "icon": "apartment"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Boring Road Crossing",
        "distance": "200 m (1 min)",
        "type": "Shopping"
      },
      {
        "title": "Patna Women College",
        "distance": "1.2 km (4 mins)",
        "type": "School"
      },
      {
        "title": "Ruban Memorial Hospital",
        "distance": "1.5 km (5 mins)",
        "type": "Hospital"
      },
      {
        "title": "Patna Junction Railway",
        "distance": "3.8 km (12 mins)",
        "type": "Metro"
      }
    ],
    "agent": {
      "name": "Ritu Raj",
      "role": "Associate Consultant - Patna Central",
      "phone": "+91 94312 34567",
      "email": "ritu.raj@realicconsultant.com",
      "rating": 4.89,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": false
  },
  {
    "id": "bellandur-waterfront-villa",
    "slug": "bellandur-waterfront-villa",
    "title": "Modernist Waterfront Villa at Bellandur Lake",
    "subtitle": "Private Infinity Edge Residence in Prime Tech Hub",
    "tagline": "Where architectural purity meets quiet waterside luxury",
    "price": 52000000,
    "priceDisplay": "₹5.20 Cr",
    "priceUsd": "$630,000",
    "location": "Bellandur, Outer Ring Road, Bangalore",
    "city": "Bangalore",
    "locality": "Bellandur",
    "address": "Villa 12, Lakeside Estates, Bellandur, Bangalore 560103",
    "coordinates": {
      "lat": 12.9298,
      "lng": 77.6749
    },
    "bedrooms": 4,
    "bathrooms": 5,
    "balconies": 3,
    "sqft": 4800,
    "carpetAreaSqft": 3950,
    "propertyType": "Villa",
    "status": "Ready to Move",
    "possessionDate": "Ready",
    "facing": "North-East",
    "reraId": "PRM/KA/RERA/1251/310/PR/180222/001450",
    "furnishing": "Fully Furnished",
    "parking": "3 Covered Spaces",
    "floor": "Triplex Villa",
    "maintenancePerMonth": "₹11,000/mo",
    "description": "Immerse in waterfront serenity minutes from Bangalore major ORR tech campuses. Features double cantilevered terraces, heated private infinity pool, temperature-controlled wine cellar, and integrated smart-home automation.",
    "images": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lakefront Infinity Pool",
      "Smart Creston Home Automation",
      "Solar Heated Water Grid",
      "Zero Carbon Design Rating"
    ],
    "amenities": [
      {
        "name": "Private Pool",
        "icon": "pool"
      },
      {
        "name": "Clubhouse Access",
        "icon": "deck"
      },
      {
        "name": "24/7 Concierge",
        "icon": "support_agent"
      },
      {
        "name": "Tennis Court",
        "icon": "sports_tennis"
      }
    ],
    "overviewStats": [
      {
        "label": "Super Area",
        "value": "4,800 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Plot Area",
        "value": "6,200 sq.ft",
        "icon": "landscape"
      },
      {
        "label": "Configuration",
        "value": "4 BHK + Maid Room",
        "icon": "bed"
      },
      {
        "label": "Structure",
        "value": "Triplex Villa",
        "icon": "villa"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "EcoWorld Tech Park",
        "distance": "1.2 km (4 mins)",
        "type": "Tech Park"
      },
      {
        "title": "Manipal Hospital Varthur",
        "distance": "3.1 km (8 mins)",
        "type": "Hospital"
      },
      {
        "title": "Outer Ring Road Metro",
        "distance": "1.5 km (5 mins)",
        "type": "Metro"
      },
      {
        "title": "Greenwood High School",
        "distance": "5.2 km (14 mins)",
        "type": "School"
      }
    ],
    "agent": {
      "name": "Julian Mercer",
      "role": "Executive Vice President - Luxury Portfolio",
      "phone": "+91 98451 88990",
      "email": "julian.mercer@realicconsultant.com",
      "rating": 4.97,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "indiranagar-glass-pavilion",
    "slug": "indiranagar-glass-pavilion",
    "title": "The Glass Pavilion & Sky Villa in Indiranagar",
    "subtitle": "Signature Monolithic Architecture in Bangalore Heart",
    "tagline": "Bold lines, private elevator access, and rooftop terrace",
    "price": 32500000,
    "priceDisplay": "₹3.25 Cr",
    "priceUsd": "$395,000",
    "location": "100 Feet Road, Indiranagar, Bangalore",
    "city": "Bangalore",
    "locality": "Indiranagar",
    "address": "Pavilion 4, Defense Colony, Indiranagar, Bangalore 560038",
    "coordinates": {
      "lat": 12.9784,
      "lng": 77.6408
    },
    "bedrooms": 4,
    "bathrooms": 4,
    "balconies": 3,
    "sqft": 3450,
    "carpetAreaSqft": 2850,
    "propertyType": "Penthouse",
    "status": "Ready to Move",
    "possessionDate": "Ready",
    "facing": "East",
    "reraId": "PRM/KA/RERA/1251/308/PR/190510/002231",
    "furnishing": "Fully Furnished",
    "parking": "2 Covered Bays",
    "floor": "Top Floor with Terrace",
    "maintenancePerMonth": "₹9,500/mo",
    "description": "A true collector piece of modern architecture in Bangalore trendiest lifestyle precinct. Direct private elevator keycard access opens directly into an expansive open-concept gallery with floor-to-ceiling glass and skyline perspectives.",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Direct Private Keycard Elevator",
      "Floor-to-Ceiling Thermal Glass",
      "Imported Poliform Kitchen",
      "Dedicated Wine Cellar"
    ],
    "amenities": [
      {
        "name": "Sky Lounge Deck",
        "icon": "deck"
      },
      {
        "name": "Infinity Spa",
        "icon": "hot_tub"
      },
      {
        "name": "24/7 Valet & Concierge",
        "icon": "local_taxi"
      },
      {
        "name": "Biometric Access",
        "icon": "fingerprint"
      }
    ],
    "overviewStats": [
      {
        "label": "Super Area",
        "value": "3,450 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Carpet Area",
        "value": "2,850 sq.ft",
        "icon": "square_foot"
      },
      {
        "label": "Configuration",
        "value": "4 BHK Sky Villa",
        "icon": "bed"
      },
      {
        "label": "Floor Level",
        "value": "Penthouse with Terrace",
        "icon": "apartment"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "100 Feet Road Boutiques",
        "distance": "100 m (1 min)",
        "type": "Shopping"
      },
      {
        "title": "Indiranagar Metro Station",
        "distance": "800 m (3 mins)",
        "type": "Metro"
      },
      {
        "title": "Manipal Hospital Old Airport Rd",
        "distance": "2.5 km (7 mins)",
        "type": "Hospital"
      },
      {
        "title": "National Public School (NPS)",
        "distance": "1.8 km (5 mins)",
        "type": "School"
      }
    ],
    "agent": {
      "name": "Sarah Lin",
      "role": "Principal Partner - Institutional Transactions",
      "phone": "+91 98452 77112",
      "email": "sarah.lin@realicconsultant.com",
      "rating": 4.96,
      "verified": true,
      "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
    },
    "verified": true,
    "featured": true
  },
  {
    "id": "patliputra-palatial-bungalow",
    "slug": "patliputra-palatial-bungalow",
    "title": "5 BHK Palatial Heritage Estate in Patliputra Colony",
    "subtitle": "Timeless Grandeur with Lush Private Orchards",
    "tagline": "Patna most distinguished aristocratic residential address",
    "price": 68000000,
    "priceDisplay": "₹6.80 Cr",
    "priceUsd": "$825,000",
    "location": "Patliputra Colony, Patna, Bihar",
    "city": "Patna",
    "locality": "Patliputra Colony",
    "address": "Plot 42, Road No 10, Patliputra Colony, Patna 800013",
    "coordinates": {
      "lat": 25.6322,
      "lng": 85.1095
    },
    "bedrooms": 5,
    "bathrooms": 6,
    "balconies": 5,
    "sqft": 5600,
    "carpetAreaSqft": 4800,
    "propertyType": "Independent House",
    "status": "Ready to Move",
    "possessionDate": "Immediate",
    "facing": "North-East",
    "reraId": "BR-RERA-2024-3320",
    "furnishing": "Fully Furnished",
    "parking": "4 Covered Car Garage",
    "floor": "G + 2 Independent Bungalow",
    "maintenancePerMonth": "Self Managed",
    "description": "An exceptional opportunity to acquire a grand independent estate in prime Patliputra Colony. Boasting manicured lawns, grand colonnaded entryway, separate staff quarters, high-security boundary wall, and heritage architectural finishes updated with modern MEP infrastructure.",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Prime Patliputra Road 10",
      "Private 8,000 sq ft Land Parcel",
      "Separate 2-Room Staff Quarters",
      "4-Car Enclosed Garage"
    ],
    "amenities": [
      {
        "name": "Private Garden",
        "icon": "park"
      },
      {
        "name": "Private Gym Room",
        "icon": "fitness_center"
      },
      {
        "name": "Solar Energy Setup",
        "icon": "solar_power"
      },
      {
        "name": "Guard House",
        "icon": "security"
      }
    ],
    "overviewStats": [
      {
        "label": "Built-up Area",
        "value": "5,600 sq.ft",
        "icon": "straighten"
      },
      {
        "label": "Plot Area",
        "value": "8,000 sq.ft",
        "icon": "landscape"
      },
      {
        "label": "Configuration",
        "value": "5 BHK + Staff Quarters",
        "icon": "bed"
      },
      {
        "label": "Floors",
        "value": "G + 2 Bungalow",
        "icon": "villa"
      }
    ],
    "neighborhoodInsights": [
      {
        "title": "Patliputra Roundabout",
        "distance": "400 m (2 mins)",
        "type": "Shopping"
      },
      {
        "title": "Kurji Holy Family Hospital",
        "distance": "1.2 km (4 mins)",
        "type": "Hospital"
      },
      {
        "title": "Loyola High School",
        "distance": "1.5 km (5 mins)",
        "type": "School"
      },
      {
        "title": "Patna Airport",
        "distance": "6.2 km (14 mins)",
        "type": "Airport"
      }
    ],
    "agent": {
      "name": "Amit Vikram",
      "role": "Director - Patna Luxury Advisory",
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
