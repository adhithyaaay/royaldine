import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Flame, MessageCircle, Eye, Utensils, X, Sparkles, Filter } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { getDishEnquiryUrl } from '../data/restaurantData';

interface MenuProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenQrMenu: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onSelectDish, onOpenQrMenu }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;

      // Dietary match
      const dietaryMatch =
        vegFilter === 'all' ||
        (vegFilter === 'veg' && item.isVeg) ||
        (vegFilter === 'non-veg' && !item.isVeg);

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.tag && item.tag.toLowerCase().includes(query));

      return categoryMatch && dietaryMatch && searchMatch;
    });
  }, [activeCategory, vegFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-dark-900 relative">
      {/* Decorative Gold Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Utensils className="w-3.5 h-3.5" />
            Digital Menu
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
            Curated <span className="text-gold-gradient font-serif italic">Multi-Cuisine</span> Offerings
          </h2>
          <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-normal">
            Prepared fresh to order using halal cuts, royal heritage masalas, and charcoal grills. Tap any item for detailed ingredients or instant WhatsApp enquiry.
          </p>
        </div>

        {/* Controls Bar: Search & Dietary Toggles */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-gold-500/20 shadow-xl">
          
          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/80" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, alfaham, biryani..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs sm:text-sm text-cream placeholder-cream-muted/50 focus:outline-none focus:border-gold-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-muted hover:text-cream"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Filters */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-start md:justify-end">
            <span className="text-xs text-cream-muted font-medium flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5 text-gold-400" />
              Diet:
            </span>

            <button
              onClick={() => setVegFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                vegFilter === 'all'
                  ? 'bg-gold-500 text-dark-950 font-bold shadow-sm'
                  : 'bg-dark-950 text-cream-muted hover:text-cream border border-white/5'
              }`}
            >
              All Items
            </button>

            <button
              onClick={() => setVegFilter('non-veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                vegFilter === 'non-veg'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/50 font-bold'
                  : 'bg-dark-950 text-cream-muted hover:text-cream border border-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Non-Veg
            </button>

            <button
              onClick={() => setVegFilter('veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                vegFilter === 'veg'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 font-bold'
                  : 'bg-dark-950 text-cream-muted hover:text-cream border border-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Pure Veg
            </button>
          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold-gradient text-dark-950 font-bold shadow-gold-sm scale-[1.02]'
                    : 'glass-panel text-cream-muted hover:text-cream hover:border-gold-500/40'
                }`}
              >
                <span>{cat.shortName}</span>
                {cat.id === 'grills' && <Flame className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>

        {/* Results Counter & QR link */}
        <div className="flex items-center justify-between text-xs text-cream-muted mb-6 px-1">
          <p>
            Showing <strong className="text-gold-400 font-semibold">{filteredItems.length}</strong> dish
            {filteredItems.length === 1 ? '' : 'es'}
          </p>

          <button
            onClick={onOpenQrMenu}
            className="text-gold-400 hover:text-gold-300 underline underline-offset-4 flex items-center gap-1 font-medium"
          >
            Switch to Table QR Mobile View →
          </button>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((dish) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group glass-panel rounded-2xl overflow-hidden gold-border-glow flex flex-col justify-between hover:-translate-y-1 transition-all"
                >
                  <div>
                    {/* Food Photo Container */}
                    <div className="relative h-52 overflow-hidden bg-dark-950">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                      {/* Veg / Non-Veg Tag */}
                      <div className="absolute top-3 left-3 bg-dark-900/90 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 flex items-center gap-1.5 shadow-sm">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                        />
                        <span className="text-[10px] font-medium text-cream uppercase tracking-wider">
                          {dish.isVeg ? 'Veg' : 'Non-Veg'}
                        </span>
                      </div>

                      {/* Tag Badge */}
                      {dish.tag && (
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-gold-gradient text-dark-950 text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          {dish.tag}
                        </div>
                      )}

                      {/* Price Pill */}
                      {dish.price && (
                        <div className="absolute bottom-3 left-3 bg-dark-950/90 border border-gold-500/40 px-2.5 py-1 rounded-lg backdrop-blur-md">
                          <span className="font-serif text-lg font-bold text-gold-400">
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

                    {/* Content Section */}
                    <div className="p-5">
                      <h3 className="font-serif text-xl font-bold text-cream mb-2 group-hover:text-gold-300 transition-colors">
                        {dish.name}
                      </h3>
                      <p className="text-xs text-cream-muted line-clamp-2 leading-relaxed mb-4">
                        {dish.description}
                      </p>

                      {/* Spice and Serves Tag */}
                      <div className="flex items-center gap-3 text-[11px] text-cream-muted/80">
                        {dish.spiceLevel && (
                          <span className="flex items-center gap-1 text-amber-400/90">
                            <Flame className="w-3 h-3" />
                            {dish.spiceLevel === 1 ? 'Mild' : dish.spiceLevel === 2 ? 'Medium' : 'Spicy'}
                          </span>
                        )}
                        {dish.serves && <span>• {dish.serves}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="flex-1 py-2 px-3 rounded-xl border border-gold-500/30 text-cream text-xs font-medium hover:border-gold-400 hover:bg-gold-500/10 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-gold-400" />
                      Quick Details
                    </button>

                    <a
                      href={getDishEnquiryUrl(dish.name, dish.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </a>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-2xl border border-white/10 max-w-md mx-auto">
            <Utensils className="w-12 h-12 text-gold-500/40 mx-auto mb-3" />
            <h4 className="font-serif text-xl font-bold text-cream mb-1">No Dishes Found</h4>
            <p className="text-xs text-cream-muted mb-4">
              Try adjusting your search query or switching dietary filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setVegFilter('all');
              }}
              className="px-4 py-2 rounded-lg bg-gold-500 text-dark-950 font-semibold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
