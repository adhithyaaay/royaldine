import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, Heart, QrCode } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { RESTAURANT } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenQrMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenQrMenu }) => {
  return (
    <footer className="bg-dark-950 text-cream border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Golden Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full p-0.5 border border-gold-500/50 bg-dark-900 shadow-gold-sm">
                <img
                  src="/logo.png"
                  alt="Royal Dine Restaurant Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-cream block leading-tight">
                  ROYAL DINE
                </span>
                <span className="text-[10px] tracking-widest text-gold-400 uppercase font-semibold block">
                  Taste Beyond Ordinary
                </span>
              </div>
            </div>

            <p className="text-xs text-cream-muted leading-relaxed mb-6 font-normal">
              {RESTAURANT.description}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 border border-gold-500/20 text-gold-400 hover:border-gold-400 hover:bg-gold-500/10 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT.googleMapsShortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 border border-gold-500/20 text-gold-400 hover:border-gold-400 hover:bg-gold-500/10 flex items-center justify-center transition-colors"
                title="Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQrMenu}
                className="w-9 h-9 rounded-xl bg-dark-900 border border-gold-500/20 text-gold-400 hover:border-gold-400 hover:bg-gold-500/10 flex items-center justify-center transition-colors"
                title="Table QR Code"
              >
                <QrCode className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-cream mb-4 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-muted">
              <li>
                <a href="#home" className="hover:text-gold-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  About Royal Dine
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-400 transition-colors">
                  Digital Menu
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-gold-400 transition-colors">
                  Chef's Specials
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-gold-400 transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Cuisines */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-cream mb-4 uppercase tracking-wider text-xs">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs text-cream-muted">
              <li>• Charcoal Grilled Classic & Pepper Alfaham</li>
              <li>• Royal Chicken & Mutton Dum Biryani</li>
              <li>• Kashmiri Mutton Rogan Josh & Curries</li>
              <li>• Butter Garlic Naan & Clay Tandoor</li>
              <li>• Dragon Chicken & Wok Specialties</li>
              <li>• Royal Special Faloodas & Chilled Mojitos</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-cream mb-4 uppercase tracking-wider text-xs">
              Visit Royal Dine
            </h4>
            
            <div className="space-y-3 text-xs text-cream-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${RESTAURANT.phoneRaw}`} className="hover:text-gold-400">
                  {RESTAURANT.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Daily: {RESTAURANT.hours}</span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 rounded-xl bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-[1.02] transition-all"
              >
                Reserve A Table
              </button>
            </div>
          </div>

        </div>

        {/* Demo Disclaimer Banner */}
        <div className="py-4 my-6 rounded-xl bg-dark-900 border border-white/5 text-center px-4">
          <p className="text-[11px] text-cream-muted/70 leading-relaxed">
            <strong className="text-gold-400 font-semibold">Demonstration Showcase:</strong> Designed & engineered for <strong>Royal Dine Kasaragod</strong>. Verified data based on Google Maps and regional listings. Does not process real financial transactions online.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-cream-muted/60 pt-2 gap-3">
          <p>© {new Date().getFullYear()} Royal Dine Restaurant. All Rights Reserved. Kasaragod, Kerala.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Royal Dine
          </p>
        </div>

      </div>
    </footer>
  );
};
