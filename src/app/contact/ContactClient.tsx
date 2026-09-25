'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ContactClient() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      toast.error('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Inquiry submitted! Our senior property advisors will connect with you shortly.');
    }, 600);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <div className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-sm md:py-section-gap-lg flex flex-col gap-12">
        {/* Hero Section */}
        <section className="max-w-3xl">
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-text-high-emphasis mb-4">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-text-medium-emphasis">
            Boutique Support for Discerning Clients. Our dedicated property experts are ready to assist with your real estate inquiries.
          </p>
        </section>

        {/* Bento Grid Contact Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-surface-pure rounded-xl p-8 border border-border-subtle custom-shadow transition-shadow hover:shadow-lg">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-surface-container-low border border-border-subtle text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-headline-md text-primary">Inquiry Sent Successfully</h3>
                <p className="text-text-medium-emphasis font-body-md max-w-md mx-auto">
                  Thank you, <span className="font-bold text-primary">{fullName}</span>. Your message has been received by our Bangalore Headquarters Advisory team. We will contact you at <span className="font-semibold text-primary">{email}</span> within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFullName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="mt-4 px-6 py-2.5 bg-primary text-on-primary font-label-bold text-sm rounded-lg hover:bg-primary-container transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-text-high-emphasis" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      className="bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 h-[48px] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors w-full font-body-md text-body-md placeholder:text-text-medium-emphasis text-text-high-emphasis"
                      id="fullName"
                      placeholder="John Doe"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-text-high-emphasis" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 h-[48px] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors w-full font-body-md text-body-md placeholder:text-text-medium-emphasis text-text-high-emphasis"
                      id="email"
                      placeholder="john@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-text-high-emphasis" htmlFor="subject">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      className="appearance-none bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 h-[48px] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors w-full font-body-md text-body-md text-text-high-emphasis cursor-pointer"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    >
                      <option disabled value="">Select a topic</option>
                      <option value="buy">Buying a Property</option>
                      <option value="sell">Selling a Property</option>
                      <option value="support">General Support</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-medium-emphasis">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-text-high-emphasis" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors w-full font-body-md text-body-md placeholder:text-text-medium-emphasis resize-y text-text-high-emphasis"
                    id="message"
                    placeholder="How can we assist you today?"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button
                  className="bg-primary-container hover:bg-primary text-on-primary font-label-bold text-label-bold px-8 py-3 rounded-lg h-[48px] transition-colors flex items-center gap-2 group cursor-pointer disabled:opacity-70"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Map */}
          <div className="lg:col-span-5 flex flex-col gap-gutter">
            {/* Contact Info Card */}
            <div className="bg-surface-pure rounded-xl p-8 border border-border-subtle custom-shadow flex flex-col gap-8 flex-grow">
              <h2 className="font-headline-md text-headline-md text-primary mb-2">Headquarters</h2>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-border-subtle">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-bold text-label-bold text-text-high-emphasis mb-1">Bangalore Office</span>
                  <span className="font-body-md text-body-md text-text-medium-emphasis leading-relaxed">
                    Level 4, Prestige Tech Park<br />
                    Marathahalli Outer Ring Road<br />
                    Bangalore, Karnataka 560103
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-border-subtle">
                  <span className="material-symbols-outlined text-primary">phone_in_talk</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-bold text-label-bold text-text-high-emphasis mb-1">Phone</span>
                  <a href="tel:+918045678900" className="font-body-md text-body-md text-text-medium-emphasis hover:text-secondary transition-colors">
                    +91 80 4567 8900
                  </a>
                  <span className="font-label-sm text-label-sm text-text-medium-emphasis mt-1">Mon-Fri, 9am - 6pm IST</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-border-subtle">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-bold text-label-bold text-text-high-emphasis mb-1">Email Support</span>
                  <a className="font-body-md text-body-md text-text-medium-emphasis hover:text-secondary transition-colors" href="mailto:support@realic.in">
                    support@realic.in
                  </a>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="h-64 rounded-xl overflow-hidden border border-border-subtle custom-shadow relative bg-surface-container-low group">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="A clean, minimalist digital map of Bangalore showing the Marathahalli Outer Ring Road area."
                src="/images/contact-map.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 bg-surface-pure/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border-subtle shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
                <span className="font-label-bold text-xs text-primary">Prestige Tech Park, ORR</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
