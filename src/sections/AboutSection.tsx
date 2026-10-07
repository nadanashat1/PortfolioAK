import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Network,
  Building2,
  Settings,
  GraduationCap,
  Sparkles,
  Award,
  LucideIcon
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  Network,
  Building2,
  Settings,
};

export const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#faf8f3] text-navy-950 relative overflow-hidden">
      {/* Decorative Ambient Lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-950/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Executive Narrative & Academic Harmony */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-sand-border shadow-card-soft space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-700 border border-gold-500/20 text-xs font-bold tracking-wider uppercase">
                <Sparkles size={14} className="text-gold-600" />
                <span>{isRTL ? "الرؤية والخبرة التنفيذية" : "Executive Vision & Leadership"}</span>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                {t.about.paragraphs.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="mt-6 p-5 rounded-2xl bg-[#faf6ed] border border-gold-500/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-700 flex items-center justify-center flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950 mb-1">
                    {isRTL ? "معادلة النجاح الاستشاري" : "The Strategic Consulting Formula"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isRTL
                      ? "الدمج بين الرؤية الأكاديمية العميقة والتنفيذ العملي المباشر لتحويل الخطط إلى نتائج ملموسة ومستدامة."
                      : "Synthesizing deep academic rigor with hands-on executive execution to convert blueprints into measurable, sustainable results."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 5 Core Capability Pillars */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/30 shadow-dark-card mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isRTL ? "محاور الخبرة المتخصصة" : "Core Specialized Domains"}
                  </h4>
                  <p className="text-xs text-gold-400">
                    {isRTL ? "منظومة متكاملة لحلول الأعمال" : "Holistic Business Architecture"}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded border border-gold-500/20">
                05
              </span>
            </div>

            <div className="space-y-3.5">
              {t.about.pillars.map((pillar, idx) => {
                const IconComponent = iconMap[pillar.iconName] || TrendingUp;

                return (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-sand-border shadow-card-soft hover:shadow-card-hover hover:border-gold-500/40 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-sand text-navy-950 group-hover:bg-navy-950 group-hover:text-gold-400 flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                      <IconComponent size={20} />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-base font-bold text-navy-950 mb-1 group-hover:text-gold-600 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
