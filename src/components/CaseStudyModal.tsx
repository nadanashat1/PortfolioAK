import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Target, ArrowRight, ArrowLeft, Building2 } from 'lucide-react';
import { CaseStudyItem } from '../data/types';
import { useLanguage } from '../context/LanguageContext';

interface CaseStudyModalProps {
  project: CaseStudyItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { isRTL, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto border border-gold-500/30 z-10 my-auto text-navy-950"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Header Banner */}
          <div className="sticky top-0 z-20 bg-navy-950 text-white px-6 py-5 sm:px-8 sm:py-6 border-b border-gold-500/20 flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/20">
                  {project.number}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gold-300 font-bold bg-navy-900 px-3 py-0.5 rounded-full border border-gold-500/30">
                  <Building2 size={13} className="text-gold-400" />
                  <span>{project.company}</span>
                </span>
                <span className="text-xs text-slate-300">
                  {project.category}
                </span>
              </div>
              <h3 id="case-study-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label={t.caseStudies.closeModal}
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 bg-sand">
            {/* Project Overview & Description */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-sand-border shadow-card-soft space-y-3">
              <h4 className="text-xs font-bold uppercase text-gold-600 tracking-wider flex items-center gap-2">
                <Target size={16} />
                <span>{t.caseStudies.modalDescriptionTitle}</span>
              </h4>
              <div className="text-slate-700 leading-relaxed text-base whitespace-pre-line">
                {project.description}
              </div>
            </div>

            {/* Key Contributions Section */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-sand-border shadow-card-soft space-y-4">
              <div className="flex items-center gap-3 text-navy-900 border-b border-sand-muted pb-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-600 flex items-center justify-center">
                  <CheckCircle2 size={18} />
                </div>
                <h5 className="font-bold text-base sm:text-lg text-navy-950">
                  {t.caseStudies.modalContributionsTitle}
                </h5>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {project.contributions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#faf8f3] border border-sand-border text-sm text-slate-800 leading-relaxed"
                  >
                    <div className="mt-0.5 flex-shrink-0 text-gold-500">
                      {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Impact & Key Results */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-6 sm:p-7 rounded-xl border border-gold-500/30 shadow-dark-card space-y-4">
              <div className="flex items-center gap-3 border-b border-gold-500/20 pb-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <h5 className="font-bold text-base sm:text-lg text-gold-300">
                  {t.caseStudies.modalImpactTitle}
                </h5>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {project.impact.map((item, index) => (
                  <li
                    key={index}
                    className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm text-slate-200 leading-relaxed flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex-shrink-0 text-gold-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Close Button */}
          <div className="px-6 py-4 bg-white border-t border-sand-border flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-navy-900 text-white font-medium text-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-sm"
            >
              {t.caseStudies.closeModal}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
