import React, { useState } from 'react';
import { Property } from '@/data/properties';

interface InstantOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstantOfferModal: React.FC<InstantOfferModalProps> = ({ isOpen, onClose }) => {
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAddress('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface-pure rounded-xl border border-border-subtle shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-outline hover:text-primary transition-colors p-1"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-neutral-100 text-black rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-primary">Offer Request Sent!</h3>
            <p className="text-sm text-text-medium-emphasis">
              Our valuation team is evaluating your property. You will receive an offer estimate within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-black text-2xl">bolt</span>
              <h3 className="text-2xl font-bold text-primary">Get Instant Cash Offer</h3>
            </div>
            <p className="text-sm text-text-medium-emphasis mb-6">
              Sell your home without listings or open houses. Get a competitive cash offer within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Property Address
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 104 Park Avenue, Indiranagar"
                  className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-black focus:border-black outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-black focus:border-black outline-none text-sm"
                >
                  <option value="Apartment">Apartment / Flat</option>
                  <option value="Villa">Independent Villa</option>
                  <option value="Plot">Residential Plot</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-black hover:bg-neutral-800 text-white font-bold rounded-xl shadow-xs transition-colors text-sm cursor-pointer"
              >
                Submit for Instant Valuation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface-pure rounded-xl border border-border-subtle shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-outline hover:text-primary transition-colors p-1"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h3 className="text-2xl font-bold text-primary mb-1">Welcome Back</h3>
        <p className="text-sm text-text-medium-emphasis mb-6">
          Sign in to save favorite estates and track property offers.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-black focus:border-black outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-black focus:border-black outline-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black hover:bg-neutral-800 text-white font-bold rounded-xl shadow-xs transition-colors text-sm cursor-pointer"
          >
            Sign In to Account
          </button>
        </form>
      </div>
    </div>
  );
};

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-xl border border-neutral-200 shadow-2xl max-w-2xl w-full overflow-hidden relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur rounded-full text-black hover:bg-neutral-100 transition-colors p-2 shadow-md"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="relative h-72">
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-black text-white font-bold px-3 py-1 rounded">
            {property.status}
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-black">{property.title}</h2>
              <p className="text-sm text-neutral-600 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-base">location_on</span>
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-black">{property.priceDisplay}</div>
              <span className="text-xs text-neutral-800 font-semibold bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                Verified Listing
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y border-neutral-200 text-center">
            <div>
              <p className="text-xs text-neutral-500">Bedrooms</p>
              <p className="text-lg font-bold text-black">{property.bedrooms} Beds</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500">Bathrooms</p>
              <p className="text-lg font-bold text-black">{property.bathrooms} Baths</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500">Area</p>
              <p className="text-lg font-bold text-black">{property.sqft.toLocaleString()} sqft</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2 text-sm uppercase tracking-wide">Overview</h4>
            <p className="text-body-md text-neutral-600">{property.description}</p>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-black hover:bg-neutral-800 text-white font-bold rounded-xl transition-colors text-sm cursor-pointer shadow-xs"
            >
              Schedule Private Viewing
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-neutral-300 text-black font-bold rounded-xl hover:bg-neutral-100 transition-colors text-sm cursor-pointer shadow-xs"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EnquiryModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Patna');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'General Consultation',
          name,
          phone,
          email,
          propertyTitle: `Inquiry for ${city}`,
          notes: message || `Client inquired from website header for ${city} properties.`,
        }),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface-pure rounded-2xl border border-border-subtle shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-outline hover:text-primary transition-colors p-1"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-neutral-100 text-black rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-black font-montserrat">
              Inquiry Received!
            </h3>
            <p className="text-sm text-neutral-600 max-w-xs mx-auto">
              Our Senior Property Advisor will connect with you on {phone} within 15 minutes.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-lg bg-neutral-100 text-black border border-neutral-200">
                <span className="material-symbols-outlined text-xl">real_estate_agent</span>
              </span>
              <div>
                <h3 className="text-xl font-bold text-black font-montserrat">
                  Priority Client Advisory
                </h3>
                <p className="text-xs text-neutral-600">
                  Schedule a private showing or get customized portfolio listings
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rajesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-black text-sm text-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-black text-sm text-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wider">
                    Preferred Region
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-black text-sm text-black"
                  >
                    <option value="Patna">Patna (All Corridors)</option>
                    <option value="Bailey Road">Patna - Bailey Road / Saguna More</option>
                    <option value="Atal Path">Patna - Atal Path Expressway</option>
                    <option value="AIIMS-Digha">Patna - AIIMS-Digha Corridor</option>
                    <option value="Marine Drive">Patna - Ganga Marine Drive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="rajesh@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-black text-sm text-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wider">
                  Requirement / Message
                </label>
                <textarea
                  rows={2}
                  placeholder="Looking for a 3 BHK Sky Penthouse or Villa in Patna..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-black text-sm text-black"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {submitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">send</span>
                      <span>Request Immediate Callback</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
