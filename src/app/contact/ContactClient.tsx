'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ContactClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityInterest, setCityInterest] = useState('Patna');
  const [subject, setSubject] = useState('Acquisition / Buying Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error('Please provide your name and phone number');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Inquiry submitted! A senior advisor will contact you within 2 hours.');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 md:py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary-container block mb-2">
              Private Client Concierge
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-montserrat tracking-tight">
              Connect with Senior Advisory
            </h1>
            <p className="text-primary-fixed-dim text-sm md:text-base mt-3 leading-relaxed">
              Whether you are acquiring an exclusive residence, disposing of an estate, or seeking independent legal title diligence, our partners are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Consultation Form */}
          <div className="lg:col-span-7 bg-surface-pure p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-ambient">
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-2">
              Send a Message
            </h2>
            <p className="text-xs text-text-medium-emphasis mb-6">
              Inquiries are kept strictly confidential under institutional attorney-client privilege.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
                <span className="material-symbols-outlined text-4xl text-green-600">check_circle</span>
                <h3 className="text-lg font-bold text-green-800">Message Received</h3>
                <p className="text-xs text-green-700 max-w-md mx-auto">
                  Thank you, {name}. Your inquiry has been routed to our Senior Advisory Desk. We will call you at {phone} promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-secondary text-white text-xs font-bold rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-on-surface-variant block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none h-11"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-on-surface-variant block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 94310 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none h-11"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-on-surface-variant block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none h-11"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-on-surface-variant block mb-1">
                      Target Corridor / City
                    </label>
                    <select
                      value={cityInterest}
                      onChange={(e) => setCityInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                    >
                      <option value="Patna">Patna (Bailey Rd, Danapur, Patliputra)</option>
                      <option value="Bangalore">Bangalore (Whitefield, Bellandur, Indiranagar)</option>
                      <option value="Both">Multi-City Portfolio Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface text-xs font-medium focus:border-secondary outline-none h-11"
                  >
                    <option>Acquisition / Buying Inquiry</option>
                    <option>Instant Property Sale & Cash Valuation</option>
                    <option>RERA Compliance & Title Lineage Verification</option>
                    <option>NRI Diaspora Investment Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface-variant block mb-1">
                    Your Requirements & Timeline
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Provide specific parameters, target budget, preferred neighborhoods, or property details..."
                    className="w-full p-3.5 rounded-xl border border-border-subtle bg-surface text-xs focus:border-secondary outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  {isSubmitting ? 'Transmitting Request...' : 'Transmit Confidential Inquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Office Suites & Direct Reach */}
          <div className="lg:col-span-5 space-y-6">
            {/* Patna Suite */}
            <div className="bg-surface-pure p-6 rounded-3xl border border-border-subtle shadow-ambient">
              <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">location_city</span>
                Patna Advisory Headquarters
              </div>
              <h3 className="text-lg font-bold font-montserrat text-primary">
                Bailey Heights Executive Suite
              </h3>
              <p className="text-xs text-text-medium-emphasis mt-1 leading-relaxed">
                4th Floor, Bailey Heights, Near Saguna More, Bailey Road, Patna, Bihar 801503
              </p>
              <div className="mt-4 pt-4 border-t border-border-subtle space-y-2 text-xs">
                <p className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-secondary">phone</span>
                  +91 94310 98765 / +91 94312 34567
                </p>
                <p className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                  patna@realicconsultant.com
                </p>
              </div>
            </div>

            {/* Bangalore Suite */}
            <div className="bg-surface-pure p-6 rounded-3xl border border-border-subtle shadow-ambient">
              <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">apartment</span>
                Bangalore Technology Corridor
              </div>
              <h3 className="text-lg font-bold font-montserrat text-primary">
                Whitefield Private Client Lounge
              </h3>
              <p className="text-xs text-text-medium-emphasis mt-1 leading-relaxed">
                Tower 4, Prestige Lakeside Habitat, Varthur Main Rd, Bangalore, Karnataka 560087
              </p>
              <div className="mt-4 pt-4 border-t border-border-subtle space-y-2 text-xs">
                <p className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-secondary">phone</span>
                  +91 98450 12345 / +91 98451 88990
                </p>
                <p className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                  bangalore@realicconsultant.com
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-surface-container-low p-5 rounded-2xl border border-border-subtle/80 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-primary block">Advisory Hours</span>
                <span className="text-text-medium-emphasis">Monday – Saturday: 9:30 AM – 7:30 PM IST</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-bold text-[11px] border border-green-200">
                Desk Active
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
