import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, UtensilsCrossed, Calendar, QrCode, Clock, MapPin } from 'lucide-react';
import { RESTAURANT } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenQrMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenQrMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-dark-950/80 via-dark-950/40 to-transparent py-5'
        }`}
      >
        {/* Top Info Bar on desktop when not scrolled */}
        {!isScrolled && (
          <div className="hidden lg:block border-b border-white/5 pb-2 mb-2">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-cream-muted">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  {RESTAURANT.shortAddress}, {RESTAURANT.city}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-500" />
                  {RESTAURANT.hours} (Lunch & Dinner)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-500" />
                  {RESTAURANT.phone}
                </a>
                <span className="text-white/20">|</span>
                <span className="text-gold-400 font-medium">★ 4.2 / 5.0 (1,200+ Reviews)</span>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full p-0.5 border border-gold-500/50 bg-dark-900 shadow-gold-sm group-hover:border-gold-400 transition-all">
              <img
                src="/logo.png"
                alt="Royal Dine Restaurant Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-cream group-hover:text-gold-400 transition-colors block leading-tight">
                ROYAL DINE
              </span>
              <span className="text-[10px] tracking-widest text-gold-400 uppercase font-semibold block">
                Taste Beyond Ordinary
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-cream-muted hover:text-gold-400 transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQrMenu}
              className="px-3 py-2 rounded-lg border border-gold-500/30 text-gold-400 text-xs font-medium hover:bg-gold-500/10 transition-all flex items-center gap-1.5"
              title="Table QR Digital Menu"
            >
              <QrCode className="w-4 h-4" />
              <span>Table QR</span>
            </button>

            <button
              onClick={onOpenReservation}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-dark-950 font-semibold text-xs tracking-wider uppercase shadow-gold-sm hover:shadow-gold-md hover:scale-[1.02] transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQrMenu}
              className="p-2 rounded-lg border border-gold-500/30 text-gold-400"
              aria-label="Table QR Menu"
            >
              <QrCode className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-cream hover:text-gold-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-dark-950/95 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn">
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Royal Dine Logo"
                  className="w-11 h-11 rounded-full object-contain border border-gold-500/50 shadow-gold-sm"
                />
                <div>
                  <span className="font-serif text-xl font-bold tracking-wider text-cream">
                    ROYAL DINE
                  </span>
                  <span className="text-[10px] tracking-widest text-gold-400 uppercase font-semibold block">
                    Taste Beyond Ordinary
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-white/10 text-cream"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-cream-muted hover:text-gold-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQrMenu();
              }}
              className="w-full py-3 rounded-xl border border-gold-500/40 text-gold-400 font-medium text-sm flex items-center justify-center gap-2 bg-dark-850"
            >
              <QrCode className="w-4 h-4" />
              View Table QR Menu
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 rounded-xl bg-gold-gradient text-dark-950 font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-gold-sm"
            >
              <Calendar className="w-4 h-4" />
              Reserve A Table
            </button>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-cream-muted">
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-gold-400"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                {RESTAURANT.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
