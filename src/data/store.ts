import fs from 'fs';
import path from 'path';
import { Property, PROPERTIES } from './properties';
import { BlogArticle, INITIAL_BLOGS } from './blogs';

export interface Inquiry {
  id: string;
  type: 'Showing' | 'Instant Offer' | 'General Consultation' | 'Interior Design' | 'Turnkey Construction' | 'Builder JV Mandate';
  name: string;
  phone: string;
  email?: string;
  propertyTitle?: string;
  date?: string;
  notes?: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Closed';
  createdAt: string;
}

interface DatabaseSchema {
  properties: Property[];
  blogs: BlogArticle[];
  inquiries: Inquiry[];
}

const DB_FILE = path.join(process.cwd(), 'src', 'data', 'db.json');

// In-Memory Database Cache to eliminate repeated disk I/O
let memoryDb: DatabaseSchema | null = null;

function initializeDb(): DatabaseSchema {
  if (memoryDb) {
    return memoryDb;
  }

  if (fs.existsSync(DB_FILE)) {
    try {
      const data = fs.readFileSync(DB_FILE, 'utf-8');
      memoryDb = JSON.parse(data);
      return memoryDb!;
    } catch (e) {
      console.error('Error reading db.json, reinitializing from defaults', e);
    }
  }

  const initialData: DatabaseSchema = {
    properties: PROPERTIES,
    blogs: INITIAL_BLOGS,
    inquiries: [
      {
        id: 'inq-1',
        type: 'Showing',
        name: 'Dr. Anand Kishore',
        phone: '+91 94310 88221',
        email: 'anand.kishore@gmail.com',
        propertyTitle: '3 BHK Luxury Sky Penthouse on Bailey Road',
        date: '2026-09-20',
        notes: 'Interested in Sunday afternoon in-person walkthrough and RERA document review.',
        status: 'New',
        createdAt: '2026-09-17 14:30',
      },
      {
        id: 'inq-2',
        type: 'Instant Offer',
        name: 'Suresh Singhania',
        phone: '+91 98450 77123',
        email: 'suresh@singhania.com',
        propertyTitle: 'Waterfront Villa at Bellandur Lake',
        notes: 'Looking for 30-day closing valuation for ancestral home in Patna Patliputra.',
        status: 'Contacted',
        createdAt: '2026-09-16 11:15',
      },
    ],
  };

  memoryDb = initialData;
  saveDb(initialData);
  return memoryDb;
}

function saveDb(data: DatabaseSchema) {
  memoryDb = data;
  try {
    fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving db.json', e);
  }
}

// Properties Methods
export function getAllProperties(): Property[] {
  const db = initializeDb();
  return db.properties;
}

export function getPropertyByIdOrSlug(idOrSlug: string): Property | undefined {
  const db = initializeDb();
  return db.properties.find((p) => p.slug === idOrSlug || p.id === idOrSlug);
}

export function createProperty(newProp: Omit<Property, 'id' | 'slug'>): Property {
  const db = initializeDb();
  const slug = newProp.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const id = `prop-${Date.now()}`;

  const property: Property = {
    ...newProp,
    id,
    slug: `${slug}-${Math.floor(100 + Math.random() * 900)}`,
  };

  db.properties.unshift(property);
  saveDb(db);
  return property;
}

export function updateProperty(id: string, updates: Partial<Property>): Property | null {
  const db = initializeDb();
  const idx = db.properties.findIndex((p) => p.id === id || p.slug === id);
  if (idx === -1) return null;

  db.properties[idx] = {
    ...db.properties[idx],
    ...updates,
  };
  saveDb(db);
  return db.properties[idx];
}

export function deleteProperty(id: string): boolean {
  const db = initializeDb();
  const initialLen = db.properties.length;
  db.properties = db.properties.filter((p) => p.id !== id && p.slug !== id);
  if (db.properties.length !== initialLen) {
    saveDb(db);
    return true;
  }
  return false;
}

// Blogs Methods
export function getAllBlogs(): BlogArticle[] {
  const db = initializeDb();
  return db.blogs;
}

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  const db = initializeDb();
  return db.blogs.find((b) => b.slug === slug || b.id === slug);
}

export function createBlog(newBlog: Omit<BlogArticle, 'id' | 'slug' | 'publishedAt'>): BlogArticle {
  const db = initializeDb();
  const slug = newBlog.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const id = `blog-${Date.now()}`;

  const article: BlogArticle = {
    ...newBlog,
    id,
    slug: `${slug}-${Math.floor(100 + Math.random() * 900)}`,
    publishedAt: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  };

  db.blogs.unshift(article);
  saveDb(db);
  return article;
}

export function updateBlog(id: string, updates: Partial<BlogArticle>): BlogArticle | null {
  const db = initializeDb();
  const idx = db.blogs.findIndex((b) => b.id === id || b.slug === id);
  if (idx === -1) return null;

  db.blogs[idx] = {
    ...db.blogs[idx],
    ...updates,
  };
  saveDb(db);
  return db.blogs[idx];
}

export function deleteBlog(id: string): boolean {
  const db = initializeDb();
  const initialLen = db.blogs.length;
  db.blogs = db.blogs.filter((b) => b.id !== id && b.slug !== id);
  if (db.blogs.length !== initialLen) {
    saveDb(db);
    return true;
  }
  return false;
}

// Inquiries Methods
export function getAllInquiries(): Inquiry[] {
  const db = initializeDb();
  return db.inquiries;
}

export function createInquiry(newInq: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry {
  const db = initializeDb();
  const inquiry: Inquiry = {
    ...newInq,
    id: `inq-${Date.now()}`,
    status: 'New',
    createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
  };
  db.inquiries.unshift(inquiry);
  saveDb(db);
  return inquiry;
}

export function updateInquiryStatus(id: string, status: Inquiry['status']): boolean {
  const db = initializeDb();
  const inq = db.inquiries.find((i) => i.id === id);
  if (inq) {
    inq.status = status;
    saveDb(db);
    return true;
  }
  return false;
}
