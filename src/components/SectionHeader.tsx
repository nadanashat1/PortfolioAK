import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
}) => {
  const alignmentClasses = {
    left: 'text-start items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-end items-end',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignmentClasses}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase border border-gold-500/30 bg-gold-500/10 text-gold-600">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`w-16 h-1 mt-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};
