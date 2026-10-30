import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickHighlights } from './components/QuickHighlights';
import { About } from './components/About';
import { FeaturedSpecials } from './components/FeaturedSpecials';
import { Menu } from './components/Menu';
import { QrMenuPage } from './components/QrMenuPage';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ReservationModal } from './components/ReservationModal';
import { FoodDetailModal } from './components/FoodDetailModal';
import { MenuItem } from './types';
import { MENU_ITEMS } from './data/menuData';

export function App() {
  const [viewMode, setViewMode] = useState<'home' | 'qrmenu'>('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Check URL hash on load or change (e.g. #qrmenu)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#qrmenu') {
        setViewMode('qrmenu');
      } else {
        setViewMode('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openQrMenu = () => {
    window.location.hash = 'qrmenu';
    setViewMode('qrmenu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    window.location.hash = '';
    setViewMode('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in dedicated QR Table Menu view mode
  if (viewMode === 'qrmenu') {
    return (
      <>
        <QrMenuPage
          onBackToHome={backToHome}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />
        <FoodDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      </>
    );
  }

  // Full Luxury Restaurant Website
  return (
    <div className="min-h-screen bg-dark-900 text-cream selection:bg-gold-500 selection:text-dark-950 font-sans">
      {/* Navigation */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenQrMenu={openQrMenu}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <QuickHighlights />
        <About onOpenReservation={() => setIsReservationOpen(true)} />
        <FeaturedSpecials
          items={MENU_ITEMS}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />
        <Menu
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenQrMenu={openQrMenu}
        />
        <Gallery />
        <Reviews />
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenQrMenu={openQrMenu}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <FoodDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
}

export default App;
