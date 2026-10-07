import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'methodology', 'projects', 'philosophy', 'academics', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/90 backdrop-blur-md py-3 border-b border-gold-500/20 shadow-xl shadow-navy-950/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand / Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group text-start focus:outline-none flex-shrink-0"
            aria-label="Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500/40 flex items-center justify-center shadow-gold-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-gold-400">
              <span className="font-cinzel font-bold text-gold-400 text-base">AK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-gold-300 transition-colors leading-tight">
                {t.nav.brand}
              </span>
              <span className="text-[10px] sm:text-[11px] text-gold-400/80 font-medium tracking-normal leading-tight mt-0.5">
                {t.nav.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {t.nav.links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 relative ${
                    isActive
                      ? 'text-gold-400 font-bold bg-navy-900/60 border border-gold-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions (Language Switcher & CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 shadow-gold-sm hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 flex-shrink-0"
            >
              <span>{t.nav.connectBtn}</span>
              {isRTL ? <ArrowUpLeft size={14} /> : <ArrowUpRight size={14} />}
            </button>
          </div>

          {/* Mobile Actions: Language Switcher & Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-2.5">
            <LanguageSwitcher isMobile={false} />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-900/80 border border-gold-500/30 text-gold-400 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {t.nav.links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-start text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-gold-500/60">
                      {isRTL ? '←' : '→'}
                    </span>
                  </button>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 shadow-gold-sm"
                >
                  <span>{t.nav.connectBtn}</span>
                  {isRTL ? <ArrowUpLeft size={16} /> : <ArrowUpRight size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
