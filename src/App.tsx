import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { AboutSection } from './sections/AboutSection';
import { MethodologySection } from './sections/MethodologySection';
import { ProjectsSection } from './sections/ProjectsSection';
import { PhilosophySection } from './sections/PhilosophySection';
import { AcademicsSection } from './sections/AcademicsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3] text-slate-900 selection:bg-gold-500 selection:text-navy-950 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {/* 1. Hero / Value Proposition */}
        <HeroSection />

        {/* 2. Services (16 Services + Modal) */}
        <ServicesSection />

        {/* 3. About (About Consultant) */}
        <AboutSection />

        {/* 4. Methodology (5 Stages) */}
        <MethodologySection />

        {/* 5. Selected Business Case Studies (10 Case Studies + Modal) */}
        <ProjectsSection />

        {/* 6. Philosophy (Work Philosophy & 6 Pillars) */}
        <PhilosophySection />

        {/* 7. Academic Qualifications (Degrees & Specialized Certifications) */}
        <AcademicsSection />

        {/* 8. Contact (Direct channels & Consultation form) */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
