import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', isMobile = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full p-1 border border-gold-500/30 bg-navy-900/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-gold-400 ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="flex items-center px-1.5 text-gold-400 opacity-70">
        <Globe size={14} />
      </div>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-gold-500 text-navy-950 shadow-gold-sm font-bold'
            : 'text-slate-300 hover:text-gold-300'
        } ${isMobile ? 'text-sm py-1.5 px-4' : ''}`}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-slate-600 text-xs select-none">|</span>
      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 font-cairo ${
          language === 'ar'
            ? 'bg-gold-500 text-navy-950 shadow-gold-sm font-bold'
            : 'text-slate-300 hover:text-gold-300'
        } ${isMobile ? 'text-sm py-1.5 px-4' : ''}`}
        aria-pressed={language === 'ar'}
        aria-label="التحويل للغة العربية"
      >
        عربي
      </button>
    </div>
  );
};
