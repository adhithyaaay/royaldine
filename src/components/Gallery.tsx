import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_DATA } from '../data/galleryData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'ambience' | 'grill'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = GALLERY_DATA.filter((item) => {
    return activeTab === 'all' || item.category === activeTab;
  });

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev! + 1) % filteredPhotos.length));
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev! - 1 + filteredPhotos.length) % filteredPhotos.length));
  };

  return (
    <section id="gallery" className="py-24 bg-dark-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            Visual Glimpse
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
            Ambience & <span className="text-gold-gradient font-serif italic">Culinary Moments</span>
          </h2>
          <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-normal">
            Take a visual tour through our bustling charcoal grills, warm family dining rooms, and beautifully plated dishes in Kasaragod.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'food', label: 'Signature Dishes' },
            { id: 'ambience', label: 'Dining Ambience' },
            { id: 'grill', label: 'Live Charcoal Grills' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gold-gradient text-dark-950 font-bold shadow-gold-sm'
                  : 'glass-panel text-cream-muted hover:text-cream border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer gold-border-glow shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="self-end p-2 rounded-full bg-dark-950/80 text-gold-400 border border-gold-500/30">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-400 font-bold block mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-cream leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-cream-muted line-clamp-1 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Default Subtle Caption */}
              <div className="absolute bottom-3 left-4 right-4 group-hover:opacity-0 transition-opacity">
                <p className="font-serif text-sm font-semibold text-cream truncate">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-dark-850/80 text-cream hover:text-gold-400 border border-white/10 z-50 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-850/80 text-cream hover:text-gold-400 border border-white/10 z-50 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-850/80 text-cream hover:text-gold-400 border border-white/10 z-50 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image & Caption */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              <motion.img
                key={filteredPhotos[selectedPhotoIndex].id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={filteredPhotos[selectedPhotoIndex].imageUrl}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain border border-gold-500/30 shadow-2xl"
              />

              <div className="text-center mt-4">
                <span className="text-[10px] tracking-widest uppercase text-gold-400 font-bold block">
                  {filteredPhotos[selectedPhotoIndex].category.toUpperCase()} • {selectedPhotoIndex + 1} of {filteredPhotos.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mt-1">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs text-cream-muted max-w-md mx-auto mt-1">
                  {filteredPhotos[selectedPhotoIndex].description}
                </p>
              </div>
            </div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
