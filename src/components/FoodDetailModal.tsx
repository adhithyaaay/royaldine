import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Flame, Users, Check, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { getDishEnquiryUrl } from '../data/restaurantData';

interface FoodDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({ dish, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-dark-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-dark-950/80 text-cream hover:text-gold-400 hover:bg-dark-950 transition-all border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Dish Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />

            {/* Badges on Image */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <div className="bg-dark-950/90 backdrop-blur-md p-1.5 rounded-md border border-white/15 flex items-center gap-1.5 px-2.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                  }`}
                />
                <span className="text-[11px] font-medium text-cream">
                  {dish.isVeg ? 'Pure Veg' : 'Non-Veg'}
                </span>
              </div>

              {dish.tag && (
                <div className="px-3 py-1 rounded-md bg-gold-gradient text-dark-950 text-xs font-bold uppercase tracking-wider shadow-gold-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {dish.tag}
                </div>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-1">
                  {dish.name}
                </h3>
                <span className="text-xs uppercase tracking-wider text-gold-400 font-medium">
                  Royal Dine Kasaragod Selection
                </span>
              </div>

              {/* Price */}
              <div className="text-left sm:text-right">
                {dish.price ? (
                  <div>
                    <span className="font-serif text-3xl font-bold text-gold-400">
                      {dish.price}
                    </span>
                    {dish.priceNote && (
                      <p className="text-xs text-cream-muted">{dish.priceNote}</p>
                    )}
                  </div>
                ) : (
                  <span className="text-xs text-gold-400/80 font-medium italic">
                    Seasonal / Market Price
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-cream-muted leading-relaxed mb-6 font-normal">
              {dish.description}
            </p>

            {/* Info Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {dish.spiceLevel && (
                <div className="p-3 rounded-xl bg-dark-850 border border-white/5 flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <div>
                    <p className="text-[10px] uppercase text-cream-muted">Spice Level</p>
                    <p className="text-xs font-semibold text-cream">
                      {dish.spiceLevel === 1
                        ? 'Mild & Gentle'
                        : dish.spiceLevel === 2
                        ? 'Medium Spiced'
                        : 'Fiery & Robust'}
                    </p>
                  </div>
                </div>
              )}

              {dish.serves && (
                <div className="p-3 rounded-xl bg-dark-850 border border-white/5 flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-gold-400" />
                  <div>
                    <p className="text-[10px] uppercase text-cream-muted">Portion Size</p>
                    <p className="text-xs font-semibold text-cream">{dish.serves}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Key Ingredients */}
            {dish.ingredients && dish.ingredients.length > 0 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">
                  Key Flavours & Ingredients
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {dish.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-2.5 py-1 rounded-lg bg-dark-800 text-cream-muted text-xs border border-white/5 flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-gold-400" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={getDishEnquiryUrl(dish.name, dish.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Order / Enquire on WhatsApp
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-6 rounded-xl border border-white/10 text-cream-muted hover:text-cream hover:bg-white/5 text-xs font-semibold transition-all"
              >
                Back To Menu
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
