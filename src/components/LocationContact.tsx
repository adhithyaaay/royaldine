import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Copy, Check } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { RESTAURANT, getGeneralEnquiryUrl } from '../data/restaurantData';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-dark-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Navigation className="w-3.5 h-3.5" />
            Visit & Contact
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
            Find Us on <span className="text-gold-gradient font-serif italic">Chandragiri Road</span>
          </h2>
          <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-normal">
            Conveniently situated in Kasaragod town near Old Press Club Junction. Ample parking, warm AC dining halls, and fast parcel counters.
          </p>
        </div>

        {/* Grid: Map Embed + Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel gold-border-glow shadow-2xl flex flex-col justify-between min-h-[420px]"
          >
            {/* Embedded Google Map */}
            <div className="w-full h-80 sm:h-96 relative bg-dark-900">
              <iframe
                title="Royal Dine Kasaragod Location Map"
                src="https://maps.google.com/maps?q=Royal+Dine+Near+Old+Press+Club+Junction+Chandragiri+Road+Kasaragod+Kerala+671121&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Map Action Bar */}
            <div className="p-5 bg-dark-900/90 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-serif text-base font-bold text-cream">
                  Royal Dine Restaurant
                </p>
                <p className="text-xs text-cream-muted">
                  Near Old Press Club Junction, Kasaragod
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyAddress}
                  className="px-3 py-2 rounded-lg bg-dark-800 border border-white/10 text-xs text-cream-muted hover:text-cream flex items-center gap-1.5 transition-colors"
                  title="Copy address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gold-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={RESTAURANT.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-gold-sm hover:scale-105 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact & Hours Details */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            {/* Address Card */}
            <div className="p-6 rounded-2xl glass-panel gold-border-glow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-cream mb-1">
                    Complete Address
                  </h4>
                  <p className="text-xs text-cream-muted leading-relaxed font-normal">
                    {RESTAURANT.address}
                  </p>
                  <span className="inline-block mt-2 text-[11px] text-gold-400/90 font-medium">
                    Landmark: {RESTAURANT.landmark}
                  </span>
                </div>
              </div>
            </div>

            {/* Phone & Direct WhatsApp */}
            <div className="p-6 rounded-2xl glass-panel gold-border-glow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-bold text-cream mb-1">
                    Phone & WhatsApp
                  </h4>
                  <p className="text-xs text-cream-muted mb-3">
                    Call for takeaway, delivery orders or reservations:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${RESTAURANT.phoneRaw}`}
                      className="px-3.5 py-2 rounded-lg bg-dark-850 border border-gold-500/30 text-cream text-xs font-semibold hover:border-gold-400 flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-400" />
                      {RESTAURANT.phone}
                    </a>
                    <a
                      href={getGeneralEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Hours */}
            <div className="p-6 rounded-2xl glass-panel gold-border-glow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif text-lg font-bold text-cream">
                      Operating Hours
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider">
                      {RESTAURANT.status}
                    </span>
                  </div>
                  
                  <div className="mt-2 space-y-1.5 text-xs text-cream-muted">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span>Daily Hours:</span>
                      <strong className="text-cream">{RESTAURANT.hours}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span>Lunch Service:</span>
                      <span className="text-cream">{RESTAURANT.lunchHours}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Dinner & Grills:</span>
                      <span className="text-cream">{RESTAURANT.dinnerHours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Link */}
            <div className="p-4 rounded-xl bg-dark-900 border border-white/5 flex items-center justify-between">
              <span className="text-xs text-cream-muted">Follow our daily culinary specials:</span>
              <div className="flex items-center gap-3">
                <a
                  href={RESTAURANT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-medium"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>{RESTAURANT.instagramHandle}</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
