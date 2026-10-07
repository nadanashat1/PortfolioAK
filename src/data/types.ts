export type Language = 'en' | 'ar';

export interface NavLink {
  id: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface HeroContent {
  eyebrow: string;
  headingLine1: string;
  headingHighlight: string;
  headingLine2: string;
  subtext: string;
  mainStatement: string;
  ctaPrimary: string;
  ctaSecondary: string;
  badgeTitle: string;
  badgeSubtitle: string;
  keywords: string[];
  stats: StatItem[];
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  pillars: {
    title: string;
    description: string;
    iconName: string;
  }[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MethodologyContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: MethodologyStep[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  cta: string;
  details: string[];
  category: string;
  iconName: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  intro: string;
  viewService: string;
  closeModal: string;
  modalDetailsTitle: string;
  items: ServiceItem[];
}

export interface CaseStudyItem {
  id: string;
  number: string;
  company: string;
  title: string;
  category: string;
  categoryKey: string;
  shortSummary: string;
  description: string;
  contributions: string[];
  impact: string[];
}

export interface CaseStudiesContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  allFilter: string;
  viewCaseStudy: string;
  closeModal: string;
  modalDescriptionTitle: string;
  modalContributionsTitle: string;
  modalImpactTitle: string;
  categories: { key: string; label: string }[];
  items: CaseStudyItem[];
}

export interface PhilosophyPillar {
  title: string;
  subtitle: string;
}

export interface PhilosophyCard {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export interface PhilosophyContent {
  eyebrow: string;
  title: string;
  mainBelief: string;
  systemHeading: string;
  systemPillars: string[];
  goalStatement: string;
  equation: {
    step1: string;
    step2: string;
    step3: string;
  };
  cards: PhilosophyCard[];
}

export interface DegreeItem {
  degree: string;
  field: string;
  institution?: string;
  year?: string;
  status?: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  description?: string;
}

export interface AcademicsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  degreesTitle: string;
  certificationsTitle: string;
  degrees: DegreeItem[];
  certifications: CertificationItem[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  displayPhone: string;
  brandGroup: string;
  location: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  brandTitle: string;
  brandGroup: string;
  emailLabel: string;
  phoneLabel: string;
  groupLabel: string;
  locationLabel: string;
  ctaCall: string;
  ctaEmail: string;
  formTitle: string;
  formName: string;
  formEmail: string;
  formCompany: string;
  formPhone: string;
  formScope: string;
  formScopeOptions: { value: string; label: string }[];
  formMessage: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccessTitle: string;
  formSuccessMsg: string;
  info: ContactInfo;
}

export interface SiteContent {
  nav: {
    brand: string;
    tagline: string;
    links: NavLink[];
    connectBtn: string;
  };
  hero: HeroContent;
  services: ServicesContent;
  about: AboutContent;
  methodology: MethodologyContent;
  caseStudies: CaseStudiesContent;
  philosophy: PhilosophyContent;
  academics: AcademicsContent;
  contact: ContactContent;
  footer: {
    brand: string;
    tagline: string;
    description: string;
    navTitle: string;
    contactTitle: string;
    rights: string;
    backToTop: string;
  };
}
