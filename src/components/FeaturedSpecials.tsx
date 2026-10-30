import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MessageCircle, Eye, Star } from 'lucide-react';
import { MenuItem } from '../types';
import { getDishEnquiryUrl } from '../data/restaurantData';

interface FeaturedSpecialsProps {
  items: MenuItem[];
  onSelectDish: (dish: MenuItem) => void;
}

export const FeaturedSpecials: React.FC<FeaturedSpecialsProps> = ({ items, onSelectDish }) => {
  const specials = items.filter((item) => item.isSpecial).slice(0, 4);

  return (
    <section id="specials" className="py-24 bg-dark-950 relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 text-gold-400" />
            Chef's Signatures
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
            Celebrated Dishes of <span className="text-gold-gradient font-serif italic">Royal Dine</span>
          </h2>
          <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-normal">
            Every dish here has earned a passionate following across Kasaragod. From our fiery pepper-marinated chicken to our fragrant saffron biryani, taste what makes us distinct.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group glass-panel rounded-2xl overflow-hidden gold-border-glow flex flex-col justify-between hover:-translate-y-1.5 transition-all"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-750"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 left-3 bg-dark-900/90 backdrop-blur-sm p-1.5 rounded-md border border-white/10 flex items-center justify-center">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                      title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    />
                  </div>

                  {/* Tag Badge */}
                  {dish.tag && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gold-gradient text-dark-950 text-[10px] font-bold tracking-wider uppercase shadow-gold-sm">
                      {dish.tag}
                    </div>
                  )}

                  {/* Verified Price Overlay */}
                  {dish.price && (
                    <div className="absolute bottom-3 left-3 bg-dark-950/90 border border-gold-500/40 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      <span className="font-serif text-base font-bold text-gold-400">
                        {dish.price}
                      </span>
                      {dish.priceNote && (
                        <span className="text-[10px] text-cream-muted ml-1 font-sans">
                          {dish.priceNote}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-gold-400 mb-1.5">
                    <Star className="w-3.5 h-3.5 fill-gold-400" />
                    <span className="text-xs font-semibold">House Specialty</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-cream mb-2 group-hover:text-gold-300 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-cream-muted line-clamp-2 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onSelectDish(dish)}
                  className="flex-1 py-2 px-3 rounded-lg border border-gold-500/30 text-cream text-xs font-medium hover:border-gold-400 hover:bg-gold-500/10 transition-all flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-gold-400" />
                  View Details
                </button>

                <a
                  href={getDishEnquiryUrl(dish.name, dish.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-600/90 text-white hover:bg-emerald-500 transition-colors shadow-sm"
                  title="Enquire / Order on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Prompt */}
        <div className="text-center mt-12">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-8 transition-colors"
          >
            Explore Complete Multi-Cuisine Menu & Pricing →
          </a>
        </div>

      </div>
    </section>
  );
};
