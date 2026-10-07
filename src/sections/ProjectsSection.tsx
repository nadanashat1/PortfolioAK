import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Building2, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { CaseStudyItem } from '../data/types';
import { CaseStudyModal } from '../components/CaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<CaseStudyItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? t.caseStudies.items
    : t.caseStudies.items.filter((item) => item.categoryKey === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#faf8f3] text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={t.caseStudies.eyebrow}
          title={t.caseStudies.title}
          subtitle={t.caseStudies.subtitle}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {t.caseStudies.categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-navy-950 text-gold-400 shadow-md scale-105 border border-gold-500/40'
                    : 'bg-white text-slate-600 hover:text-navy-950 border border-sand-border hover:border-gold-500/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                className="bg-white rounded-2xl border border-sand-border p-7 shadow-card-soft hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Top: Number & Company Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded border border-gold-500/20">
                      {project.number}
                    </span>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950 text-gold-300 text-xs font-bold">
                      <Building2 size={13} className="text-gold-400" />
                      <span>{project.company}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors mb-2.5 leading-snug">
                    {project.title}
                  </h3>

                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-700 bg-gold-500/10 px-2.5 py-0.5 rounded-md mb-4 border border-gold-500/20">
                    <Tag size={11} className="text-gold-600" />
                    <span>{project.category}</span>
                  </div>

                  {/* Short Summary */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                    {project.shortSummary}
                  </p>
                </div>

                {/* Bottom Trigger to Open Modal */}
                <div className="pt-4 border-t border-sand-muted">
                  <div className="w-full inline-flex items-center justify-between py-2 px-3 rounded-lg text-xs sm:text-sm font-bold text-navy-950 group-hover:text-gold-600 group-hover:bg-gold-500/10 transition-all duration-300">
                    <span>{t.caseStudies.viewCaseStudy}</span>
                    <span className="text-gold-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
