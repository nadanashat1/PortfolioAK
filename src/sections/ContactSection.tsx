import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowUpRight,
  ArrowUpLeft,
  Sparkles,
  Building2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    scope: 'establishment',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mgaoaklz', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          scope: formData.scope,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          scope: 'establishment',
          message: '',
        });
      } else {
        setIsSubmitting(false);
        alert(
          isRTL
            ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'
            : 'Something went wrong. Please try again.'
        );
      }
    } catch {
      setIsSubmitting(false);
      alert(
        isRTL
          ? 'تعذّر الإرسال. يرجى التحقق من الاتصال بالإنترنت والمحاولة مرة أخرى.'
          : 'Submission failed. Please check your connection and try again.'
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden hero-bg-grid">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Channels & Strong Brand CTA */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase border border-gold-500/30 bg-gold-500/10 text-gold-400">
                <Sparkles size={13} className="text-gold-400" />
                <span>{t.contact.eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t.contact.title}
              </h2>

              <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href={`mailto:${t.contact.info.email}`}
                className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-navy-900/80 border border-gold-500/20 hover:border-gold-400 hover:bg-navy-900 transition-all duration-300 group shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">
                      {t.contact.emailLabel}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                      {t.contact.info.email}
                    </span>
                  </div>
                </div>
                <span className="text-gold-500/60 group-hover:text-gold-400 transition-colors">
                  {isRTL ? <ArrowUpLeft size={18} /> : <ArrowUpRight size={18} />}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${t.contact.info.phone}`}
                className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-navy-900/80 border border-gold-500/20 hover:border-gold-400 hover:bg-navy-900 transition-all duration-300 group shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">
                      {t.contact.phoneLabel}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-gold-300 transition-colors" dir="ltr">
                      {t.contact.info.displayPhone}
                    </span>
                  </div>
                </div>
                <span className="text-gold-500/60 group-hover:text-gold-400 transition-colors">
                  {isRTL ? <ArrowUpLeft size={18} /> : <ArrowUpRight size={18} />}
                </span>
              </a>

           

              {/* Location */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-navy-900/50 border border-white/5">
                <div className="w-11 h-11 rounded-xl bg-white/5 text-gold-400 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    {t.contact.locationLabel}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {t.contact.info.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${t.contact.info.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-gold-sm"
              >
                <Phone size={14} />
                <span>{t.contact.ctaCall}</span>
              </a>

              <a
                href={`mailto:${t.contact.info.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/40 text-gold-300 font-bold text-xs uppercase tracking-wider hover:bg-white/5 hover:text-white transition-all"
              >
                <Mail size={14} />
                <span>{t.contact.ctaEmail}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Executive Consultation Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white text-navy-950 p-7 sm:p-9 rounded-3xl shadow-2xl border border-gold-500/30"
          >
            <div className="mb-6 border-b border-sand-border pb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {isRTL
                  ? "يرجى ملء البيانات التالية لبدء التواصل ومناقشة متطلبات مؤسستكم بدقة."
                  : "Please provide the details below to schedule your business consultation session."}
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#faf6ed] border border-gold-500/30 text-center space-y-4 my-6"
              >
                <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-navy-950">
                  {t.contact.formSuccessTitle}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                  {t.contact.formSuccessMsg}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-navy-950 text-gold-400 font-bold text-xs uppercase tracking-wider hover:bg-gold-500 hover:text-navy-950 transition-colors cursor-pointer"
                >
                  {isRTL ? "إرسال استفسار آخر" : "Submit Another Inquiry"}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1.5 uppercase tracking-wide">
                      {t.contact.formName} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={isRTL ? "الاسم الكامل" : "e.g. John Doe"}
                      className="w-full px-4 py-3 rounded-xl border border-sand-border bg-sand focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm text-slate-800 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1.5 uppercase tracking-wide">
                      {t.contact.formEmail} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={isRTL ? "example@company.com" : "name@company.com"}
                      className="w-full px-4 py-3 rounded-xl border border-sand-border bg-sand focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm text-slate-800 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1.5 uppercase tracking-wide">
                      {t.contact.formCompany}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={isRTL ? "اسم الكيان أو المؤسسة" : "Company / Enterprise Name"}
                      className="w-full px-4 py-3 rounded-xl border border-sand-border bg-sand focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm text-slate-800 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1.5 uppercase tracking-wide">
                      {t.contact.formPhone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={isRTL ? "01xxxxxxxxx" : "+20 xxxxxxxxxx"}
                      className="w-full px-4 py-3 rounded-xl border border-sand-border bg-sand focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm text-slate-800 transition-all"
                    />
                  </div>
                </div>

                {/* Scope Selection (16 services) */}
                <div>
                  <label className="block text-xs font-bold text-navy-950 mb-1.5 uppercase tracking-wide">
                    {t.contact.formScope}
                  </label>
                  <select
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand-border bg-sand focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm text-slate-800 transition-all"
                  >
                    {t.contact.formScopeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-navy-950 mb-1.5 uppercase tracking-wide">
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      isRTL
                        ? "يرجى كتابة نبذة عن المشروع أو التحدي الإداري والتشغيلي المطلوب معالجته..."
                        : "Describe your organization's goals, restructuring requirements, or project scope..."
                    }
                    className="w-full px-4 py-3 rounded-xl border border-sand-border bg-sand focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm text-slate-800 resize-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider bg-navy-950 text-gold-400 hover:bg-gold-500 hover:text-navy-950 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t.contact.formSubmitting}</span>
                  ) : (
                    <>
                      <span>{t.contact.formSubmit}</span>
                      <Send size={16} className={isRTL ? 'rotate-180' : ''} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
