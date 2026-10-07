import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, SiteContent } from '../data/types';
import { content } from '../data/content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: SiteContent;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ak_portfolio_lang') as Language;
    if (saved === 'en' || saved === 'ar') return saved;
    return 'ar'; // Default to Arabic as primary source of truth or switchable
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('ak_portfolio_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    if (isRTL) {
      document.title = 'مستشار إدارة الأعمال والموارد البشرية | أسماء خالد — راشد جروب';
      document.body.classList.add('font-cairo');
      document.body.classList.remove('font-sans');
    } else {
      document.title = 'Business Management & HR Consultant | Asmaa Khaled — Rashed Group';
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-cairo');
    }
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: content[language],
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
