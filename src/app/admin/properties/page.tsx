'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Property } from '@/data/properties';
import { toast } from 'sonner';

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPropertyId, setEditingPropertyId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    price: 25000000,
    priceDisplay: '₹2.50 Cr',
    priceUsd: '$300,000',
    city: 'Patna' as 'Patna' | 'Bangalore',
    locality: '',
    address: '',
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    sqft: 2400,
    carpetAreaSqft: 1900,
    propertyType: 'Luxury Apartment' as Property['propertyType'],
    status: 'Ready to Move' as Property['status'],
    possessionDate: 'Immediate',
    facing: 'North-East' as Property['facing'],
    reraId: 'BR-RERA-2024-001',
    furnishing: 'Semi-Furnished' as Property['furnishing'],
    parking: '2 Covered Bays',
    floor: '12th Floor',
    maintenancePerMonth: '₹5,000/mo',
    description: '',
    imageUrl1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageUrl2: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    features: 'Italian Marble, 100% Power Backup, Private Terrace',
    agentName: 'Amit Vikram',
    agentRole: 'Director - Patna Advisory',
    agentPhone: '+91 94310 98765',
    agentEmail: 'amit.vikram@realicconsultant.com',
    verified: true,
    featured: true,
  });

  // Fetch properties from API
  async function fetchProperties() {
    try {
      setLoading(true);
      const res = await fetch('/api/properties');
      const data = await res.json();
      if (data.success) {
        setProperties(data.data);
      }
    } catch (e) {
      toast.error('Failed to load properties');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  const openCreateModal = () => {
    setEditingPropertyId(null);
    setFormData({
      title: '',
      subtitle: '',
      price: 25000000,
      priceDisplay: '₹2.50 Cr',
      priceUsd: '$300,000',
      city: 'Patna',
      locality: 'Bailey Road',
      address: 'Bailey Heights, Saguna More, Bailey Road, Patna 801503',
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      sqft: 2400,
      carpetAreaSqft: 1900,
      propertyType: 'Luxury Apartment',
      status: 'Ready to Move',
      possessionDate: 'Immediate',
      facing: 'North-East',
      reraId: 'BR-RERA-2024-001',
      furnishing: 'Semi-Furnished',
      parking: '2 Covered Bays',
      floor: '12th Floor',
      maintenancePerMonth: '₹5,000/mo',
      description: 'Exclusive luxury residence with floor-to-ceiling panoramic glass, imported finishes, and 100% legal title compliance.',
      imageUrl1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      imageUrl2: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      features: 'Italian Marble, 100% Power Backup, Private Terrace',
      agentName: 'Amit Vikram',
      agentRole: 'Director - Patna Advisory',
      agentPhone: '+91 94310 98765',
      agentEmail: 'amit.vikram@realicconsultant.com',
      verified: true,
      featured: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (prop: Property) => {
    setEditingPropertyId(prop.id);
    setFormData({
      title: prop.title,
      subtitle: prop.subtitle,
      price: prop.price,
      priceDisplay: prop.priceDisplay,
      priceUsd: prop.priceUsd || '',
      city: prop.city as any,
      locality: prop.locality,
      address: prop.address,
      bedrooms: prop.bedrooms,
      bathrooms: prop.bathrooms,
      balconies: prop.balconies,
      sqft: prop.sqft,
      carpetAreaSqft: prop.carpetAreaSqft,
      propertyType: prop.propertyType,
      status: prop.status,
      possessionDate: prop.possessionDate,
      facing: prop.facing,
      reraId: prop.reraId,
      furnishing: prop.furnishing,
      parking: prop.parking,
      floor: prop.floor,
      maintenancePerMonth: prop.maintenancePerMonth,
      description: prop.description,
      imageUrl1: prop.images[0] || '',
      imageUrl2: prop.images[1] || '',
      features: prop.features.join(', '),
      agentName: prop.agent.name,
      agentRole: prop.agent.role,
      agentPhone: prop.agent.phone,
      agentEmail: prop.agent.email,
      verified: prop.verified,
      featured: prop.featured,
    });
    setIsModalOpen(true);
  };

  const handleSaveProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: any = {
        title: formData.title,
        subtitle: formData.subtitle || `${formData.bedrooms} BHK in ${formData.locality}, ${formData.city}`,
        tagline: 'Curated by Realic Institutional Advisory',
        price: Number(formData.price),
        priceDisplay: formData.priceDisplay,
        priceUsd: formData.priceUsd,
        location: `${formData.locality}, ${formData.city}`,
        city: formData.city,
        locality: formData.locality,
        address: formData.address,
        coordinates: {
          lat: formData.city === 'Patna' ? 25.612 : 12.956,
          lng: formData.city === 'Patna' ? 85.074 : 77.741,
        },
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        balconies: Number(formData.balconies),
        sqft: Number(formData.sqft),
        carpetAreaSqft: Number(formData.carpetAreaSqft),
        propertyType: formData.propertyType,
        status: formData.status,
        possessionDate: formData.possessionDate,
        facing: formData.facing,
        reraId: formData.reraId,
        furnishing: formData.furnishing,
        parking: formData.parking,
        floor: formData.floor,
        maintenancePerMonth: formData.maintenancePerMonth,
        description: formData.description,
        images: [formData.imageUrl1, formData.imageUrl2].filter(Boolean),
        features: formData.features.split(',').map((f) => f.trim()).filter(Boolean),
        amenities: [
          { name: 'Concierge Security', icon: 'verified_user' },
          { name: 'Fitness Gym', icon: 'fitness_center' },
          { name: 'Clubhouse', icon: 'deck' },
          { name: 'Power Backup', icon: 'bolt' },
        ],
        overviewStats: [
          { label: 'Super Area', value: `${formData.sqft} sq.ft`, icon: 'straighten' },
          { label: 'Carpet Area', value: `${formData.carpetAreaSqft} sq.ft`, icon: 'square_foot' },
          { label: 'Bedrooms', value: `${formData.bedrooms} BHK`, icon: 'bed' },
          { label: 'Floor Level', value: formData.floor, icon: 'apartment' },
        ],
        neighborhoodInsights: [
          { title: 'Airport Transit', distance: '8.5 km (20 mins)', type: 'Airport' },
          { title: 'Metro Station', distance: '1.2 km (4 mins)', type: 'Metro' },
          { title: 'Specialty Hospital', distance: '2.5 km (6 mins)', type: 'Hospital' },
        ],
        agent: {
          name: formData.agentName,
          role: formData.agentRole,
          phone: formData.agentPhone,
          email: formData.agentEmail,
          rating: 4.95,
          verified: true,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        },
        verified: formData.verified,
        featured: formData.featured,
      };

      if (editingPropertyId) {
        // Update existing property
        const res = await fetch(`/api/properties/${editingPropertyId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
          toast.success('Property updated successfully!');
          fetchProperties();
          setIsModalOpen(false);
        } else {
          toast.error(data.error || 'Failed to update property');
        }
      } else {
        // Create new property
        const res = await fetch('/api/properties', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
          toast.success('Property created and published to live marketplace!');
          fetchProperties();
          setIsModalOpen(false);
        } else {
          toast.error(data.error || 'Failed to create property');
        }
      }
    } catch (e: any) {
      toast.error(e.message || 'Error saving property');
    }
  };

  const handleDeleteProperty = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/properties/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        toast.success(`Deleted property: ${title}`);
        setProperties((prev) => prev.filter((p) => p.id !== id && p.slug !== id));
      } else {
        toast.error(data.error || 'Failed to delete');
      }
    } catch (e) {
      toast.error('Error deleting property');
    }
  };

  const filteredProperties = properties.filter((p) => {
    if (selectedCity !== 'All' && p.city.toLowerCase() !== selectedCity.toLowerCase()) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.reraId.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-slate-900 tracking-tight">
            Property Portfolio Manager
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Create, update, and manage all luxury listings live on the Realic marketplace.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-5 py-3 bg-secondary hover:bg-secondary/90 text-slate-900 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-base">add_circle</span>
          Upload New Property
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, location, RERA ID..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 text-xs rounded-xl border border-slate-200 text-slate-900 focus:border-secondary outline-none h-10"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-600 font-medium">City:</span>
          {(['All', 'Patna', 'Bangalore'] as const).map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedCity === city
                  ? 'bg-secondary text-white'
                  : 'bg-slate-50 text-slate-600 hover:text-white border border-slate-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-600 text-xs">Loading property catalog...</div>
        ) : filteredProperties.length === 0 ? (
          <div className="p-12 text-center text-slate-600 text-xs">
            No properties found matching your criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3.5 px-4">Property</th>
                  <th className="py-3.5 px-4">Location</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4">Specs</th>
                  <th className="py-3.5 px-4">RERA Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredProperties.map((prop) => (
                  <tr key={prop.id} className="hover:bg-slate-50/50 transition-colors">
                    {/* Thumbnail & Title */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={prop.images[0]}
                          alt={prop.title}
                          className="w-16 h-12 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="min-w-0 max-w-xs">
                          <Link
                            href={`/properties/${prop.slug}`}
                            target="_blank"
                            className="font-bold text-white hover:text-secondary truncate block"
                          >
                            {prop.title}
                          </Link>
                          <span className="text-[10px] text-slate-600 block">{prop.propertyType}</span>
                        </div>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-slate-200 block">{prop.locality}</span>
                      <span className="text-[10px] text-slate-600">{prop.city}</span>
                    </td>

                    {/* Price */}
                    <td className="py-3.5 px-4 font-bold text-amber-400 font-montserrat text-sm">
                      {prop.priceDisplay}
                    </td>

                    {/* Specs */}
                    <td className="py-3.5 px-4 text-slate-700">
                      <span>{prop.bedrooms} BHK • {prop.sqft.toLocaleString()} sqft</span>
                      <span className="text-[10px] text-slate-600 block">{prop.status}</span>
                    </td>

                    {/* RERA */}
                    <td className="py-3.5 px-4">
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        {prop.reraId}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/properties/${prop.slug}`}
                          target="_blank"
                          title="View Live Listing"
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-800 text-slate-700 hover:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </Link>
                        <button
                          onClick={() => openEditModal(prop)}
                          title="Edit Property"
                          className="p-1.5 rounded-lg bg-secondary/15 hover:bg-secondary text-secondary hover:text-white transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteProperty(prop.id, prop.title)}
                          title="Delete Property"
                          className="p-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500 text-rose-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Upload & Edit Property Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-xl font-bold font-montserrat text-white">
                {editingPropertyId ? 'Edit Property Listing' : 'Upload New Luxury Residence'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-600 hover:text-slate-700 hover:text-slate-900 p-1"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveProperty} className="space-y-4 mt-5 text-xs">
              {/* Row 1: Title & City */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-slate-700 font-bold mb-1">Property Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. 4 BHK Ultra Luxury Contemporary Villa"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Metro / City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                  >
                    <option value="Patna">Patna, Bihar</option>
                    <option value="Bangalore">Bangalore, Karnataka</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Price & Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Price (INR Number)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Price Display Tag</label>
                  <input
                    type="text"
                    value={formData.priceDisplay}
                    onChange={(e) => setFormData({ ...formData, priceDisplay: e.target.value })}
                    placeholder="e.g. ₹2.50 Cr"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Price USD (Approx)</label>
                  <input
                    type="text"
                    value={formData.priceUsd}
                    onChange={(e) => setFormData({ ...formData, priceUsd: e.target.value })}
                    placeholder="e.g. $300,000"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Locality & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Locality / Corridor</label>
                  <input
                    type="text"
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    placeholder="e.g. Bailey Road / Whitefield"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Full Physical Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Tower, Street, Pin Code..."
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
              </div>

              {/* Row 4: Specs (BHK, Baths, Area) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Bedrooms (BHK)</label>
                  <input
                    type="number"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Bathrooms</label>
                  <input
                    type="number"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Super Area (Sqft)</label>
                  <input
                    type="number"
                    value={formData.sqft}
                    onChange={(e) => setFormData({ ...formData, sqft: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Carpet Area (Sqft)</label>
                  <input
                    type="number"
                    value={formData.carpetAreaSqft}
                    onChange={(e) => setFormData({ ...formData, carpetAreaSqft: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
              </div>

              {/* Row 5: Type, Status, Facing, RERA */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                  >
                    <option>Penthouse</option>
                    <option>Villa</option>
                    <option>Luxury Apartment</option>
                    <option>Independent House</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                  >
                    <option>Ready to Move</option>
                    <option>Under Construction</option>
                    <option>Newly Launched</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Orientation / Facing</label>
                  <select
                    value={formData.facing}
                    onChange={(e) => setFormData({ ...formData, facing: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                  >
                    <option>North-East</option>
                    <option>East</option>
                    <option>North</option>
                    <option>South-East</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">RERA Number</label>
                  <input
                    type="text"
                    value={formData.reraId}
                    onChange={(e) => setFormData({ ...formData, reraId: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
              </div>

              {/* Row 6: Image URLs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Primary Cover Image URL</label>
                  <input
                    type="url"
                    value={formData.imageUrl1}
                    onChange={(e) => setFormData({ ...formData, imageUrl1: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Interior Photo 2 URL</label>
                  <input
                    type="url"
                    value={formData.imageUrl2}
                    onChange={(e) => setFormData({ ...formData, imageUrl2: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">Architectural Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                  required
                />
              </div>

              {/* Features CSV */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">Key Features (Comma separated)</label>
                <input
                  type="text"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-secondary outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-50 hover:bg-slate-800 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-secondary hover:bg-secondary/90 text-slate-900 font-bold rounded-xl shadow-md"
                >
                  {editingPropertyId ? 'Save Changes' : 'Publish Property'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
