import React, { useState } from 'react';
import { MessageCircle, X, Utensils, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { RESTAURANT, createWhatsAppUrl } from '../data/restaurantData';

interface FloatingWhatsAppProps {
  onOpenReservation: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenReservation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Order Food / Takeaway',
      desc: 'Ask for today’s Alfaham & Biryani specials',
      icon: Utensils,
      url: createWhatsAppUrl('Hello Royal Dine Kasaragod! I would like to place a food order / takeaway for pickup.'),
    },
    {
      title: 'Table Reservation',
      desc: 'Reserve a table for your family or friends',
      icon: Calendar,
      action: () => {
        setIsOpen(false);
        onOpenReservation();
      },
    },
    {
      title: 'Location & Directions',
      desc: 'Chandragiri Road, near Old Press Club Junction',
      icon: MapPin,
      url: RESTAURANT.googleMapsDirectionsUrl,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Pop-up Quick Menu */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-dark-900 border border-gold-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Royal Dine"
                className="w-9 h-9 rounded-full object-contain border border-gold-500/40 shadow-sm"
              />
              <div>
                <p className="font-serif font-bold text-sm text-cream leading-none">
                  Royal Dine Support
                </p>
                <span className="text-[10px] text-emerald-400 font-medium">Online • +91 94972 26333</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-cream-muted hover:text-cream"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-cream-muted mb-3 font-normal">
            Welcome to Royal Dine Kasaragod. How can we assist you today?
          </p>

          <div className="space-y-2">
            {quickOptions.map((opt) => {
              const Icon = opt.icon;
              if (opt.action) {
                return (
                  <button
                    key={opt.title}
                    onClick={opt.action}
                    className="w-full text-left p-2.5 rounded-xl bg-dark-950 hover:bg-dark-850 border border-white/5 hover:border-gold-500/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-cream group-hover:text-gold-300">
                          {opt.title}
                        </p>
                        <p className="text-[10px] text-cream-muted">{opt.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-cream-muted group-hover:text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                );
              }

              return (
                <a
                  key={opt.title}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left p-2.5 rounded-xl bg-dark-950 hover:bg-dark-850 border border-white/5 hover:border-gold-500/40 transition-all flex items-center justify-between group block"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-cream group-hover:text-gold-300">
                        {opt.title}
                      </p>
                      <p className="text-[10px] text-cream-muted">{opt.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-cream-muted group-hover:text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              );
            })}
          </div>

          <a
            href={createWhatsAppUrl('Hello Royal Dine Kasaragod! I have a question regarding your restaurant.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm block text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 inline mr-1" />
            Open Direct WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-900/60 hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-emerald-400/40"
        aria-label="WhatsApp quick contact"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500" />
        </span>
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};
