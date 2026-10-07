import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  Layers,
  Play,
  TrendingUp,
  LucideIcon,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  Search,
  Calendar,
  Layers,
  Play,
  TrendingUp,
};

export const MethodologySection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#f5f1e8] text-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={t.methodology.eyebrow}
          title={t.methodology.title}
          subtitle={t.methodology.subtitle}
        />

        {/* 5-Step Sequential Process Flow */}
        <div className="mt-14 relative">
          {/* Horizontal Connecting Line on Large Screens */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 -translate-y-1/2 z-0 opacity-40 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {t.methodology.steps.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || Search;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-sand-border shadow-card-soft hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Node Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-extrabold text-gold-500 font-cinzel">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-sand text-navy-950 group-hover:bg-navy-950 group-hover:text-gold-400 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                        <IconComponent size={22} />
                      </div>
                    </div>

                    {/* Stage Title */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-gold-500" />
                      <h3 className="text-lg sm:text-xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Stage Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-6 pt-3 border-t border-sand-muted flex items-center gap-1.5 text-[11px] font-bold text-gold-600 uppercase tracking-wider">
                    <CheckCircle2 size={13} className="text-gold-500" />
                    <span>{isRTL ? `المرحلة ${step.number}` : `Phase ${step.number}`}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
