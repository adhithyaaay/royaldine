import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Calendar, MapPin, Clock, Star, ChevronDown, Sparkles } from 'lucide-react';
import { RESTAURANT } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop"
          alt="Royal Dine Signature Charcoal Grilled Feast in Kasaragod"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Luxury multi-layer dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-950/80 to-dark-950/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-950/60 to-dark-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
      </div>

      {/* Decorative Gold Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500/10 pointer-events-none blur-sm" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-gold-500/5 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Official Brand Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-4 group"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 shadow-gold-lg mx-auto hover:scale-105 transition-transform duration-500">
            <img
              src="/logo.png"
              alt="Royal Dine Restaurant Logo - Taste Beyond Ordinary"
              className="w-full h-full object-contain rounded-full bg-dark-950"
            />
          </div>
        </motion.div>

        {/* Top Verified Location & Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-850/80 border border-gold-500/30 backdrop-blur-md mb-6 shadow-gold-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-xs uppercase tracking-widest text-gold-300 font-medium">
            Kasaragod's Premier Multi-Cuisine Dining
          </span>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1 text-gold-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            <span>4.2 ★</span>
            <span className="text-cream-muted font-normal text-[11px]">(1,200+ reviews)</span>
          </div>
        </motion.div>

        {/* Animated Brand Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream leading-[1.1] mb-6"
        >
          Where Royalty Meets <br />
          <span className="text-gold-gradient font-serif italic font-normal">
            Authentic Arabian & Indian
          </span>{' '}
          Flavours
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream-muted text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-10"
        >
          Experience our legendary charcoal-grilled <strong className="text-cream font-medium">Pepper Alfaham</strong>, slow-cooked <strong className="text-cream font-medium">Dum Biryanis</strong>, and rich Kashmiri gravies served with royal Kasaragod hospitality.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gold-gradient text-dark-950 font-bold text-sm tracking-wider uppercase shadow-gold-md hover:shadow-gold-lg hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            <Utensils className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Explore Digital Menu
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-panel text-cream font-semibold text-sm tracking-wider uppercase border border-gold-500/40 hover:bg-gold-500/10 hover:border-gold-400 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            Reserve A Table
          </button>
        </motion.div>

        {/* Highlight Quick Stats & Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl pt-6 border-t border-white/10"
        >
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">Location</p>
              <p className="text-xs text-cream font-medium line-clamp-1">{RESTAURANT.shortAddress}</p>
              <p className="text-[10px] text-cream-muted">Chandragiri Rd, Kasaragod</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">Opening Hours</p>
              <p className="text-xs text-cream font-medium">Daily: 12:00 PM – 11:00 PM</p>
              <p className="text-[10px] text-emerald-400 font-medium">Open 7 Days for Lunch & Dinner</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
              <span className="text-lg">🔥</span>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">Culinary Craft</p>
              <p className="text-xs text-cream font-medium">Charcoal Alfaham & Biryani</p>
              <p className="text-[10px] text-cream-muted">100% Halal Multi-Cuisine</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 hidden md:block"
        >
          <a href="#highlights" className="text-gold-500/60 hover:text-gold-400 transition-colors" aria-label="Scroll to highlights">
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
