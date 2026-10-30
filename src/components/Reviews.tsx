import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, ExternalLink, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { RESTAURANT } from '../data/restaurantData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Verified Customer Praise
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
            Loved by Diners Across <span className="text-gold-gradient font-serif italic">Kasaragod</span>
          </h2>
          <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-normal">
            Real experiences from food lovers, families, and travelers who dine with us on Chandragiri Road.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 mt-6 p-3 px-6 rounded-2xl glass-panel border border-gold-500/30 shadow-gold-sm">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl font-bold text-gold-400">4.2</span>
              <div className="flex text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? 'fill-gold-400 text-gold-400' : 'fill-gold-400/30 text-gold-400/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-xs text-cream-muted font-medium">
              Over <strong className="text-cream">1,200+ Verified Ratings</strong> on Google & Justdial
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl gold-border-glow flex flex-col justify-between"
            >
              <div>
                {/* Author & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-sm ${
                        rev.avatarBg || 'bg-amber-600'
                      }`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-cream leading-tight">
                        {rev.author}
                      </h4>
                      <span className="text-[11px] text-cream-muted">{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex text-gold-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-cream-muted leading-relaxed italic mb-4 font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewed Dish Tag */}
              {rev.dish && (
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gold-400/90 font-medium">
                  <ThumbsUp className="w-3 h-3 text-gold-400" />
                  <span>Recommended: {rev.dish}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Google Maps External Review CTA */}
        <div className="text-center mt-12">
          <a
            href={RESTAURANT.googleMapsShortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gold-500/40 text-gold-400 hover:text-dark-950 hover:bg-gold-500 text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
          >
            <span>Read More Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
