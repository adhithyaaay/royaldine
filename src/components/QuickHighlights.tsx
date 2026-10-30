import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Award, Users, ShieldCheck } from 'lucide-react';

export const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Flame,
      title: 'Charcoal Alfaham Mastery',
      subtitle: 'Arabian Specialty',
      description: 'Marinated in traditional herbs and slow-roasted over hardwood charcoal embers for unparalleled juiciness and smoky flavor.'
    },
    {
      icon: Award,
      title: 'Dum Biryani Perfection',
      subtitle: 'Slow-Cooked Heritage',
      description: 'Aromatic long-grain basmati layered with tender spiced meat and pure desi ghee, sealed and steamed in classical handis.'
    },
    {
      icon: Users,
      title: 'Air-Conditioned Family Dining',
      subtitle: 'Spacious & Comfortable',
      description: 'Dedicated family suites and quiet cabins designed for relaxed multi-generational dinners, birthdays, and celebrations.'
    },
    {
      icon: ShieldCheck,
      title: '100% Halal & Fresh Daily',
      subtitle: 'Quality Assured',
      description: 'Strict adherence to premium hygiene, fresh local produce, finest whole spices, and authentic culinary craftsmanship.'
    }
  ];

  return (
    <section id="highlights" className="relative py-16 bg-dark-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative p-6 rounded-2xl glass-panel gold-border-glow hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] tracking-wider uppercase text-gold-400 font-semibold block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-xl font-bold text-cream mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
