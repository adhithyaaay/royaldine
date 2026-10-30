import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { ArrowLeft, Search, QrCode as QrIcon, Download, Phone, MessageCircle, Flame, Check, Sparkles, X } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { RESTAURANT, createWhatsAppUrl } from '../data/restaurantData';
import { MenuItem } from '../types';

interface QrMenuPageProps {
  onBackToHome: () => void;
  onSelectDish: (dish: MenuItem) => void;
}

export const QrMenuPage: React.FC<QrMenuPageProps> = ({ onBackToHome, onSelectDish }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [showQrGenerator, setShowQrGenerator] = useState<boolean>(false);
  const qrCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate QR code pointing to this menu
  useEffect(() => {
    if (showQrGenerator && qrCanvasRef.current) {
      const currentUrl = window.location.href.split('#')[0] + '#qrmenu';
      QRCode.toCanvas(
        qrCanvasRef.current,
        currentUrl,
        {
          width: 240,
          margin: 2,
          color: {
            dark: '#0b0c10',
            light: '#ffffff',
          },
        },
        (error) => {
          if (error) console.error('QR code generation error:', error);
        }
      );
    }
  }, [showQrGenerator]);

  const downloadQrCode = () => {
    if (!qrCanvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'royal-dine-table-menu-qr.png';
    link.href = qrCanvasRef.current.toDataURL('image/png');
    link.click();
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchVeg = !vegOnly || item.isVeg;
    const query = searchQuery.toLowerCase().trim();
    const matchQuery =
      query === '' ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);
    return matchCat && matchVeg && matchQuery;
  });

  const getTableOrderWhatsAppUrl = (dish: MenuItem) => {
    const message = `Hello Royal Dine Kasaragod! I am viewing your digital menu and would like to order: *${dish.name}* (${dish.price || 'Regular'}).`;
    return createWhatsAppUrl(message);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-cream pb-24 font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-dark-900/95 backdrop-blur-md border-b border-gold-500/20 px-4 py-3 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-lg bg-dark-850 border border-white/10 hover:border-gold-500/40 text-cream-muted hover:text-cream transition-colors"
              aria-label="Back to main website"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Royal Dine Restaurant Logo"
                className="w-10 h-10 rounded-full object-contain border border-gold-500/40 shadow-gold-sm"
              />
              <div>
                <h1 className="font-serif text-lg font-bold tracking-wide text-cream leading-none">
                  ROYAL DINE
                </h1>
                <span className="text-[10px] text-gold-400 uppercase tracking-widest font-semibold block">
                  Taste Beyond Ordinary
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowQrGenerator(true)}
              className="px-2.5 py-1.5 rounded-lg border border-gold-500/30 text-gold-400 text-xs flex items-center gap-1 hover:bg-gold-500/10 transition-colors"
              title="Generate / Download Table QR Code"
            >
              <QrIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Print QR</span>
            </button>

            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="p-2 rounded-lg bg-gold-gradient text-dark-950 font-bold"
              title="Call Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-2xl mx-auto px-4 pt-4">

        {/* Live Search & Veg Toggle */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search table menu..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-dark-900 border border-white/10 text-xs sm:text-sm text-cream focus:outline-none focus:border-gold-500"
            />
          </div>

          <button
            onClick={() => setVegOnly(!vegOnly)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 ${
              vegOnly
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-dark-900 border border-white/10 text-cream-muted'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Veg Only
          </button>
        </div>

        {/* Horizontal Category Carousel */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-gold-500 text-dark-950 font-bold'
                    : 'bg-dark-900 text-cream-muted border border-white/5'
                }`}
              >
                {cat.shortName}
              </button>
            );
          })}
        </div>

        {/* Item List optimized for mobile table browsing */}
        <div className="space-y-3">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="p-3.5 rounded-xl bg-dark-900 border border-white/10 hover:border-gold-500/30 transition-all flex items-center gap-3.5"
            >
              {/* Dish Thumbnail */}
              <div
                onClick={() => onSelectDish(dish)}
                className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-dark-850 cursor-pointer"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-1 left-1 bg-dark-950/80 p-0.5 rounded">
                  <span
                    className={`block w-2 h-2 rounded-full ${
                      dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                    }`}
                  />
                </div>
              </div>

              {/* Dish Meta */}
              <div className="flex-1 min-w-0" onClick={() => onSelectDish(dish)}>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-cream truncate">
                    {dish.name}
                  </h3>
                  {dish.price && (
                    <span className="font-serif font-bold text-sm text-gold-400 shrink-0">
                      {dish.price}
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-cream-muted line-clamp-1 leading-normal my-1">
                  {dish.description}
                </p>

                <div className="flex items-center gap-2 text-[10px] text-gold-500/80">
                  {dish.spiceLevel && (
                    <span className="flex items-center gap-0.5">
                      <Flame className="w-2.5 h-2.5" />
                      {dish.spiceLevel === 1 ? 'Mild' : dish.spiceLevel === 2 ? 'Medium' : 'Spicy'}
                    </span>
                  )}
                  {dish.priceNote && <span>• {dish.priceNote}</span>}
                </div>
              </div>

              {/* Direct Order Button */}
              <a
                href={getTableOrderWhatsAppUrl(dish)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shrink-0"
                title="Order via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-dark-900 rounded-xl border border-white/5">
              <p className="text-xs text-cream-muted">No dishes matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 p-4 rounded-xl bg-dark-900/60 border border-white/5 text-center text-xs text-cream-muted">
          <p className="font-serif font-bold text-cream mb-1">Royal Dine Table Service</p>
          <p className="text-[11px]">
            Near Old Press Club Junction, Chandragiri Road, Kasaragod.
          </p>
          <p className="text-[10px] text-gold-400 mt-1">
            Need urgent assistance? Call our service staff at +91 94972 26333
          </p>
        </div>

      </div>

      {/* QR Code Modal for Owner / Table Display */}
      {showQrGenerator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-sm bg-dark-900 border border-gold-500/40 rounded-2xl p-6 text-center shadow-2xl">
            <button
              onClick={() => setShowQrGenerator(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full text-cream-muted hover:text-cream"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src="/logo.png"
              alt="Royal Dine Restaurant Logo"
              className="w-16 h-16 rounded-full object-contain mx-auto mb-3 border-2 border-gold-500/50 shadow-gold-md"
            />

            <h3 className="font-serif text-xl font-bold text-cream mb-1">
              Table QR Code
            </h3>
            <p className="text-xs text-cream-muted mb-4">
              Print or place this code on dining tables in Royal Dine Kasaragod for instant contactless digital menu browsing.
            </p>

            <div className="bg-white p-3 rounded-xl inline-block mb-5 shadow-inner">
              <canvas ref={qrCanvasRef} className="mx-auto" />
            </div>

            <button
              onClick={downloadQrCode}
              className="w-full py-2.5 rounded-xl bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-sm hover:scale-[1.02] transition-all"
            >
              <Download className="w-4 h-4" />
              Download Printable PNG
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
