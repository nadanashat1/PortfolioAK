import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';

export const PhilosophySection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#f5f1e8] text-navy-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-950/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={t.philosophy.eyebrow}
          title={t.philosophy.title}
        />

        {/* Core Belief Hero Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-navy-950 text-white p-8 sm:p-10 rounded-3xl border border-gold-500/30 shadow-2xl mb-12 relative overflow-hidden hero-bg-grid"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
              <Compass size={24} />
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
              "{t.philosophy.mainBelief}"
            </p>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-4">
                {t.philosophy.systemHeading}
              </span>

              {/* 6 System Pillars Strip */}
              <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4">
                {t.philosophy.systemPillars.map((pillar, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-4 py-2 rounded-xl bg-white/10 border border-gold-500/30 text-white text-xs sm:text-sm font-bold shadow-sm hover:border-gold-400 hover:bg-gold-500/20 transition-all"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            {/* Growth Equation */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs text-slate-300 block mb-3 font-medium">
                {t.philosophy.goalStatement}
              </span>

              <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-850 border border-gold-500/40 text-gold-300 font-bold text-sm sm:text-base shadow-gold-sm">
                <span>{t.philosophy.equation.step1}</span>
                <span className="text-gold-500">{isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}</span>
                <span>{t.philosophy.equation.step2}</span>
                <span className="text-gold-500">{isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}</span>
                <span className="text-white">{t.philosophy.equation.step3}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Supporting Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.philosophy.cards.map((card, idx) => {
            const isFirst = idx === 0;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-7 sm:p-9 rounded-3xl border border-sand-border shadow-card-soft hover:shadow-card-hover hover:border-gold-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 text-gold-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
                    {isFirst ? <Layers size={22} /> : <ShieldCheck size={22} />}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gold-600 uppercase tracking-widest block">
                      {isRTL ? `المبدأ الاستشاري 0${idx + 1}` : `Consulting Principle 0${idx + 1}`}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                      {card.title}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-sand-muted">
                  {card.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-gold-500 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
