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
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
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
              <span className="material-symbols-outlined text-secondary text-2xl">bolt</span>
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
                  className="w-full px-3 py-2.5 rounded border border-border-subtle bg-surface text-primary focus:border-secondary outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded border border-border-subtle bg-surface text-primary focus:border-secondary outline-none text-sm"
                >
                  <option value="Apartment">Apartment / Flat</option>
                  <option value="Villa">Independent Villa</option>
                  <option value="Plot">Residential Plot</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-on-primary font-bold rounded shadow hover:bg-primary-container transition-colors text-sm cursor-pointer"
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
              className="w-full px-3 py-2.5 rounded border border-border-subtle bg-surface text-primary focus:border-secondary outline-none text-sm"
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
              className="w-full px-3 py-2.5 rounded border border-border-subtle bg-surface text-primary focus:border-secondary outline-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-secondary text-white font-bold rounded shadow hover:bg-secondary/90 transition-colors text-sm cursor-pointer"
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
      <div className="bg-surface-pure rounded-xl border border-border-subtle shadow-2xl max-w-2xl w-full overflow-hidden relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-surface-pure/80 backdrop-blur rounded-full text-primary hover:bg-surface transition-colors p-2 shadow-md"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="relative h-72">
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-primary text-white font-bold px-3 py-1 rounded">
            {property.status}
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary">{property.title}</h2>
              <p className="text-sm text-text-medium-emphasis flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-base">location_on</span>
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-primary">{property.priceDisplay}</div>
              <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded border border-green-200">
                Verified Listing
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border-subtle text-center">
            <div>
              <p className="text-xs text-text-medium-emphasis">Bedrooms</p>
              <p className="text-lg font-bold text-primary">{property.bedrooms} Beds</p>
            </div>
            <div>
              <p className="text-xs text-text-medium-emphasis">Bathrooms</p>
              <p className="text-lg font-bold text-primary">{property.bathrooms} Baths</p>
            </div>
            <div>
              <p className="text-xs text-text-medium-emphasis">Area</p>
              <p className="text-lg font-bold text-primary">{property.sqft.toLocaleString()} sqft</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wide">Overview</h4>
            <p className="text-body-md text-text-medium-emphasis">{property.description}</p>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-primary text-white font-bold rounded hover:bg-primary-container transition-colors text-sm cursor-pointer"
            >
              Schedule Private Viewing
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-border-subtle text-primary font-bold rounded hover:bg-surface transition-colors text-sm cursor-pointer"
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
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-primary font-montserrat">
              Inquiry Received!
            </h3>
            <p className="text-sm text-text-medium-emphasis max-w-xs mx-auto">
              Our Senior Property Advisor will connect with you on {phone} within 15 minutes.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#B89628]">
                <span className="material-symbols-outlined text-xl">real_estate_agent</span>
              </span>
              <div>
                <h3 className="text-xl font-bold text-primary font-montserrat">
                  Priority Client Advisory
                </h3>
                <p className="text-xs text-text-medium-emphasis">
                  Schedule a private showing or get customized portfolio listings
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rajesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface focus:outline-none focus:border-secondary text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface focus:outline-none focus:border-secondary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Preferred Region
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface focus:outline-none focus:border-secondary text-sm"
                  >
                    <option value="Patna">Patna (Bailey Rd, Danapur, etc.)</option>
                    <option value="Bangalore">Bangalore (Whitefield, Bellandur, etc.)</option>
                    <option value="Both">Both Corridors</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="rajesh@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface focus:outline-none focus:border-secondary text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">
                  Requirement / Message
                </label>
                <textarea
                  rows={2}
                  placeholder="Looking for a 3 BHK Sky Penthouse or Villa in Patna..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface focus:outline-none focus:border-secondary text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#B89628] text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
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
