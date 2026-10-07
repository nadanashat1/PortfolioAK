import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Briefcase, Mail } from 'lucide-react';
import { ServiceItem } from '../data/types';
import { useLanguage } from '../context/LanguageContext';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onContactClick?: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onContactClick,
}) => {
  const { isRTL, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleRequestService = () => {
    onClose();
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto border border-gold-500/30 z-10 my-auto text-navy-950"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          {/* Header Banner */}
          <div className="sticky top-0 z-20 bg-navy-950 text-white px-6 py-5 sm:px-8 sm:py-6 border-b border-gold-500/20 flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/20">
                  {service.number}
                </span>
                <span className="text-xs text-gold-300 font-semibold uppercase tracking-wider">
                  {service.category}
                </span>
              </div>
              <h3 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {service.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label={t.services.closeModal}
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-sand">
            {/* Overview Card */}
            <div className="bg-white p-6 rounded-xl border border-sand-border shadow-card-soft">
              <span className="text-xs font-bold uppercase text-gold-600 mb-2 tracking-wider block">
                {isRTL ? "نبذة عن الخدمة" : "Service Overview"}
              </span>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {service.shortDescription}
              </p>
            </div>

            {/* Detailed Scope of Service */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-sand-border shadow-card-soft space-y-5">
              <div className="flex items-center gap-3 text-navy-900 border-b border-sand-muted pb-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-600 flex items-center justify-center">
                  <Briefcase size={18} />
                </div>
                <h4 className="font-bold text-base sm:text-lg text-navy-950">
                  {t.services.modalDetailsTitle}
                </h4>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {service.details.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#faf8f3] border border-sand-border text-sm text-slate-800 leading-relaxed"
                  >
                    <div className="mt-0.5 flex-shrink-0 text-gold-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Callout */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-6 rounded-xl border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-dark-card">
              <div>
                <h5 className="font-bold text-base text-gold-300 mb-1">
                  {isRTL ? "هل تحتاج هذه الخدمة لشركتك أو مشروعك؟" : "Need this service for your business?"}
                </h5>
                <p className="text-xs sm:text-sm text-slate-300">
                  {isRTL
                    ? "تواصل معنا مباشرة لتحديد المتطلبات وجدولة جلسة استشارية متخصصة."
                    : "Contact us directly to discuss requirements and schedule a dedicated consultation."}
                </p>
              </div>

              <button
                onClick={handleRequestService}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 text-xs sm:text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all flex-shrink-0 shadow-gold-sm"
              >
                <Mail size={15} />
                <span>{isRTL ? "طلب استشارة" : "Inquire Now"}</span>
                {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
              </button>
            </div>
          </div>

          {/* Footer Close Button */}
          <div className="px-6 py-4 bg-white border-t border-sand-border flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-navy-900 text-white font-medium text-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-sm"
            >
              {t.services.closeModal}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
