import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  TrendingUp,
  Target,
  Network,
  Users,
  Settings,
  BarChart3,
  Store,
  GraduationCap,
  PieChart,
  Globe,
  Cpu,
  Share2,
  Megaphone,
  Sparkles,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  LucideIcon
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceItem } from '../data/types';
import { ServiceDetailModal } from '../components/ServiceDetailModal';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  TrendingUp,
  Target,
  Network,
  Users,
  Settings,
  BarChart3,
  Store,
  GraduationCap,
  PieChart,
  Globe,
  Cpu,
  Share2,
  Megaphone,
  Sparkles,
  Briefcase,
};

export const ServicesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f5f1e8] text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.intro}
        />

        {/* 16 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {t.services.items.map((service) => {
            const IconComponent = iconMap[service.iconName] || Briefcase;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl border border-sand-border shadow-card-soft hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div>
                  {/* Top Header: Number, Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded-md border border-gold-500/20 font-mono tracking-wider">
                        {service.number}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-sand px-2 py-0.5 rounded border border-sand-border">
                        {service.category}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-sand text-navy-900 group-hover:bg-navy-950 group-hover:text-gold-400 flex items-center justify-center transition-all duration-300 flex-shrink-0">
                      <IconComponent size={19} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-2.5 group-hover:text-gold-600 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom CTA to open modal */}
                <div className="mt-5 pt-3.5 border-t border-sand-muted flex items-center justify-between">
                  <span className="text-xs font-bold text-gold-600 group-hover:text-gold-700 transition-colors">
                    {t.services.viewService}
                  </span>
                  <div className="text-gold-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    {isRTL ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
