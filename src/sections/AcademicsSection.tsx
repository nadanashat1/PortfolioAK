import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Bookmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';

export const AcademicsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="academics" className="py-20 lg:py-28 bg-[#faf8f3] text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={t.academics.eyebrow}
          title={t.academics.title}
          subtitle={t.academics.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Higher University Degrees */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-sand-border pb-4 mb-2">
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center shadow-sm">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                {t.academics.degreesTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.academics.degrees.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-sand-border shadow-card-soft hover:shadow-card-hover hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-bold text-gold-700 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/20 mb-3">
                      {item.status || "Degree"}
                    </span>

                    <h4 className="text-xl font-extrabold text-navy-950 mb-1.5">
                      {item.degree}
                    </h4>

                    <p className="text-sm font-semibold text-gold-600 leading-snug">
                      {item.field}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-sand-muted">
                    <div className="h-1 w-8 bg-gold-500/40 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Specialized Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-sand-border pb-4 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center shadow-sm">
                <Award size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                {t.academics.certificationsTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {t.academics.certifications.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-sand-border shadow-card-soft hover:shadow-card-hover hover:border-gold-500/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-sand text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bookmark size={20} />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-navy-950 leading-snug mb-1.5">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
