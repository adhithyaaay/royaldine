import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Phone, User, MessageCircle, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT, getReservationWhatsAppUrl } from '../data/restaurantData';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 4,
    seatingArea: 'Family AC Cabin',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f5e7bf', '#2a9d8f', '#ffffff']
      });
    } catch (err) {
      // Ignore if confetti fails
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetForm}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl bg-dark-900 border border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={resetForm}
            className="absolute top-4 right-4 p-2 rounded-full bg-dark-950/80 text-cream-muted hover:text-gold-400 border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full p-0.5 border border-gold-500/50 bg-dark-950 mx-auto mb-3 shadow-gold-sm">
                  <img
                    src="/logo.png"
                    alt="Royal Dine Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-1">
                  Table Reservation
                </h3>
                <p className="text-xs text-cream-muted">
                  Royal Dine • Chandragiri Road, Kasaragod
                </p>
              </div>

              {/* Demo Notice Alert */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-6 flex items-start gap-2.5 text-xs text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                <p>
                  <strong>Demonstration Form:</strong> Submitting simulates your booking. You can also immediately send your reservation details to Royal Dine staff directly via WhatsApp.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-cream-muted uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammed Farooq"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs sm:text-sm text-cream focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cream-muted uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 94972 26333"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs sm:text-sm text-cream focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Date, Time, Guests */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-cream-muted uppercase tracking-wider mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-2.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-cream focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-cream-muted uppercase tracking-wider mb-1">
                      Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-2.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-cream focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-cream-muted uppercase tracking-wider mb-1">
                      Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full px-2.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-cream focus:outline-none focus:border-gold-400"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs font-semibold text-cream-muted uppercase tracking-wider mb-1">
                    Seating Area Preference
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs sm:text-sm text-cream focus:outline-none focus:border-gold-400"
                  >
                    <option value="Family AC Cabin">Family AC Cabin (Private & Quiet)</option>
                    <option value="Main Dining Hall">Main Dining Hall</option>
                    <option value="Party / Group Table">Large Party / Group Table</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-cream-muted uppercase tracking-wider mb-1">
                    Special Requests / Dietary Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="e.g. Birthday celebration, High chair for child, Extra spicy alfaham..."
                    className="w-full px-3 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs sm:text-sm text-cream focus:outline-none focus:border-gold-400"
                  />
                </div>

                {/* Submit & WhatsApp buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-[1.02] transition-all"
                  >
                    Confirm Table Request
                  </button>

                  <a
                    href={getReservationWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-cream mb-2">
                Booking Request Recorded!
              </h4>
              <p className="text-xs sm:text-sm text-cream-muted max-w-md mx-auto mb-6">
                Thank you, <strong className="text-cream">{formData.name}</strong>. Your enquiry for{' '}
                <strong className="text-cream">{formData.guests} guests</strong> on{' '}
                <strong className="text-cream">{formData.date} at {formData.time}</strong> ({formData.seatingArea}) has been logged in this demo.
              </p>

              {/* Direct WhatsApp Confirmation Trigger */}
              <div className="p-4 rounded-xl glass-panel border border-gold-500/30 mb-6 text-left">
                <p className="text-xs text-gold-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Instant Confirmation Recommended:
                </p>
                <p className="text-xs text-cream-muted mb-3">
                  Send this pre-filled message directly to Royal Dine's official WhatsApp to guarantee table availability immediately:
                </p>
                <a
                  href={getReservationWhatsAppUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Confirmation To Restaurant Now
                </a>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-xl border border-white/10 text-cream-muted hover:text-cream text-xs font-semibold"
              >
                Done / Close Window
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
