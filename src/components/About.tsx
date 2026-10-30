import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, HeartHandshake } from 'lucide-react';
import { RESTAURANT } from '../data/restaurantData';

interface AboutProps {
  onOpenReservation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenReservation }) => {
  const features = [
    'Authentic Charcoal Grills & Pepper Alfaham Specialists',
    'Rich Northern Indian, Kashmiri & Mughlai Gravies',
    'Fragrant Dum Biryanis prepared with pure spices',
    'Air-conditioned Family Dining Rooms & Party Arrangements',
    'Hygienic Takeaway, Quick Parcel & Table Reservations',
    'Centrally located on Chandragiri Road with easy parking'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Main Image */}
            <div className="relative rounded-2xl overflow-hidden gold-border-glow shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop"
                alt="Royal Dine Family Dining Hall in Kasaragod"
                className="w-full h-[440px] object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-gold-500/30">
                <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">Atmosphere & Hospitality</p>
                <p className="text-sm font-serif font-bold text-cream">Spacious AC Family Dining on Chandragiri Road</p>
              </div>
            </div>

            {/* Overlapping Floating Secondary Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col items-center justify-center p-5 rounded-2xl glass-panel-gold border border-gold-400/50 shadow-gold-md z-20">
              <span className="text-2xl font-serif font-bold text-gold-400">4.2 ★</span>
              <span className="text-[10px] uppercase tracking-wider text-cream-muted font-medium">Google Rating</span>
              <span className="text-[9px] text-gold-500">1,200+ Reviews</span>
            </div>

            {/* Subtle background golden border box */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-gold-500/20 -z-0 pointer-events-none" />
          </motion.div>

          {/* Right Column: Narrative & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              About Royal Dine
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight mb-6">
              A Symphony of Spices & <br />
              <span className="text-gold-gradient font-serif italic">Exceptional Dining</span> in Kasaragod
            </h2>

            <p className="text-cream-muted text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Located conveniently near the Old Press Club Junction on Chandragiri Road, <strong className="text-cream font-medium">Royal Dine</strong> is one of Kasaragod’s most celebrated multi-cuisine destinations. We take profound pride in blending time-honored Arabian charcoal grill techniques with authentic Kerala spices and Northern culinary traditions.
            </p>

            <p className="text-cream-muted text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Whether you are pulling in from the highway for a quick parcel of juicy Pepper Alfaham with fresh kuboos, or settling down in our spacious air-conditioned dining suites with family for fragrant Dum Biryani and hand-stretched Butter Garlic Naan, every dish is crafted to leave an indelible impression.
            </p>

            {/* Key Verified Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-cream-muted">{feat}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-xl bg-gold-gradient text-dark-950 font-bold text-xs tracking-wider uppercase shadow-gold-sm hover:scale-105 transition-all"
              >
                Book Table For Family
              </button>

              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="px-5 py-3 rounded-xl glass-panel border border-gold-500/30 text-cream text-xs font-semibold hover:border-gold-400 transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                Call +91 94972 26333
              </a>

              <a
                href={RESTAURANT.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold-400 hover:text-gold-300 font-medium underline underline-offset-4 flex items-center gap-1 ml-auto"
              >
                <MapPin className="w-3.5 h-3.5" />
                View On Google Maps
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
