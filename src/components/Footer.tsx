import React from 'react';
import { ArrowUp, Mail, Phone, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-gold-500/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-500/40 flex items-center justify-center shadow-gold-sm">
                <span className="font-cinzel font-bold text-gold-400 text-lg">AK</span>
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-white tracking-wide block">
                  {t.footer.brand}
                </span>
                <span className="text-xs text-gold-400/90 font-medium">
                  {t.footer.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {t.footer.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-gold-500/30 text-xs text-gold-400 font-bold">
              <Building2 size={14} className="text-gold-400" />
              <span>{t.contact.info.brandGroup}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2">
              {t.nav.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-xs sm:text-sm text-slate-300 hover:text-gold-300 transition-colors text-start"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Connect Shortcuts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-gold-300 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Mail size={13} />
                  </div>
                  <span>{t.contact.info.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.contact.info.phone}`}
                  className="inline-flex items-center gap-2.5 hover:text-gold-300 transition-colors"
                  dir="ltr"
                >
                  <div className="w-7 h-7 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Phone size={13} />
                  </div>
                  <span>{t.contact.info.displayPhone}</span>
                </a>
              </li>
              <li className="text-slate-400 pt-1">
                <span className="text-[11px] block">{isRTL ? "المقر:" : "Location:"}</span>
                <span className="text-white font-medium">{t.contact.info.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.rights}</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 hover:text-white hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
            aria-label="Back to top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
