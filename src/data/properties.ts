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
      "/images/projects/durga-77-featured.jpg",
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
