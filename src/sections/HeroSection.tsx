import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ArrowUpLeft, Award, Sparkles, CheckCircle2, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy-950 text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden hero-bg-grid flex flex-col justify-between"
    >
      {/* Luxury Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-navy-800/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left on LTR, Right on RTL) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-start"
          >
            {/* Top Eyebrow Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/40 bg-navy-900/90 text-gold-300 text-xs font-semibold tracking-wider uppercase shadow-gold-sm"
            >
              <Sparkles size={13} className="text-gold-400 animate-pulse" />
              <span>{t.hero.eyebrow}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.18] text-white"
            >
              {t.hero.headingLine1}{' '}
              <span className="font-serif italic font-normal gold-gradient-text">
                {t.hero.headingHighlight}
              </span>{' '}
              <br className="hidden sm:inline" />
              {t.hero.headingLine2}
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {t.hero.subtext}
            </motion.p>

            {/* Large Brand Statement Callout */}
            <motion.div
              variants={itemVariants}
              className="p-4 sm:p-5 rounded-2xl bg-navy-900/80 border border-gold-500/30 text-gold-300 font-bold text-sm sm:text-base flex items-center gap-3 shadow-md max-w-2xl"
            >
              <div className="w-8 h-8 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                <Compass size={18} />
              </div>
              <p className="leading-snug">
                "{t.hero.mainStatement}"
              </p>
            </motion.div>

            {/* Service Keywords / Hero Category Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              {t.hero.keywords.map((keyword, kIdx) => (
                <span
                  key={kIdx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-gold-500/20 text-slate-300 text-xs font-medium hover:border-gold-500/50 hover:text-gold-300 transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 bg-[length:200%_auto] hover:bg-right text-navy-950 shadow-gold-md hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                {isRTL ? <ArrowUpLeft size={16} /> : <ArrowUpRight size={16} />}
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide border border-gold-500/40 text-gold-300 hover:text-white hover:bg-white/5 hover:border-gold-400 transition-all duration-300 cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Portrait Composition (Right on LTR, Left on RTL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-gold-500/30 -rotate-1 pointer-events-none transition-transform duration-500 hover:rotate-0" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-gold-500/20 to-transparent blur-sm pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 bg-navy-900 shadow-2xl aspect-[3/4] group">
                <img
                  src="/portrait.PNG"
                  alt={isRTL ? "مستشار إدارة الأعمال والموارد البشرية - أسماء خالد" : "Business Management & HR Consultant - Asmaa Khaled"}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('/portrait.PNG')) {
                      target.src = '/dist/portrait.PNG';
                    }
                  }}
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />

                {/* Name & Title Plate */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/85 backdrop-blur-md border border-gold-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg">
                        {isRTL ? "أسماء خالد" : "Asmaa Khaled"}
                      </h3>
                      <p className="text-gold-400 text-xs font-medium">
                        {t.hero.eyebrow}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                      <Award size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Executive Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`absolute -top-4 sm:-top-5 ${
                  isRTL ? '-left-4 sm:-left-6' : '-right-4 sm:-right-6'
                } z-20 px-3.5 py-2.5 rounded-xl bg-navy-900/95 backdrop-blur-md border border-gold-500/40 shadow-xl flex items-center gap-2.5 max-w-[220px]`}
              >
                <div className="w-7 h-7 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gold-400 uppercase tracking-wider leading-tight">
                    {t.hero.badgeTitle}
                  </p>
                  <p className="text-[9px] text-slate-300 leading-tight">
                    {t.hero.badgeSubtitle}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip at Bottom of Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gold-500/20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          {t.hero.stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-900/40 border border-gold-500/10 hover:border-gold-500/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gold-400 font-cinzel">
                {stat.value}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                  {stat.label}
                </span>
                {stat.sublabel && (
                  <span className="text-[11px] text-slate-400">
                    {stat.sublabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden md:flex justify-center pt-6">
        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors group focus:outline-none cursor-pointer"
          aria-label="Scroll to Services Section"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 group-hover:text-gold-400">
            {isRTL ? "اكتشف خدماتنا" : "Scroll to Services"}
          </span>
          <ArrowDown size={14} className="animate-bounce text-gold-500" />
        </button>
      </div>
    </section>
  );
};
