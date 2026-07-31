export interface LeadSubmission {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  servicesRequired: string[];
  budget: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  sourcePage?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  recommendedFor: string;
  badge?: string;
}

export interface WhoShouldUseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface AchievementItem {
  id: string;
  clientName: string;
  industry: string;
  location: string;
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  challenge: string;
  solution: string;
  results: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  iconName: string;
  keyOutputs: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  caseStudyHighlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing' | 'Process' | 'Results';
}

export interface TestimonialItem {
  id: string;
  name: string;
  company?: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface HeroContent {
  badgeText: string;
  headlineMain: string;
  headlineHighlight: string;
  subheadline: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  statNumber: string;
  statLabel: string;
  statBadgeText: string;
}

export interface WhatIsDigitalContent {
  title: string;
  subtitle: string;
  descriptionParagraph1: string;
  descriptionParagraph2: string;
  keyPillars: { title: string; desc: string; icon: string }[];
}

export interface WhyChooseContent {
  title: string;
  subtitle: string;
  points: { id: string; title: string; description: string; icon: string }[];
}

export interface SiteContent {
  hero: HeroContent;
  whatIs: WhatIsDigitalContent;
  whyChoose: WhyChooseContent;
  services: ServiceItem[];
  whoShouldUse: WhoShouldUseItem[];
  achievements: AchievementItem[];
  process: ProcessStep[];
  industries: IndustryItem[];
  faqs: FAQItem[];
  testimonials?: TestimonialItem[];
  contactInfo: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    workingHours: string;
  };
  socialLinks?: {
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
  siteMeta?: {
    siteName: string;
    siteTagline: string;
    footerTagline: string;
    consultationHeading: string;
    consultationSubheading: string;
  };
}

export interface SEOMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  schemaType: 'Organization' | 'LocalBusiness' | 'Service' | 'FAQPage';
  schemaData: string; // JSON string
  robotsDirective: string;
}

export interface DynamicPageSection {
  id: string;
  type: 'hero' | 'text-media' | 'services' | 'lead-form' | 'faq' | 'case-study' | 'custom-html';
  title: string;
  content: string;
  mediaUrl?: string;
  bullets?: string[];
}

export interface DynamicPage {
  id: string;
  slug: string; // e.g., 'lead-generation', 'seo-agency-dubai'
  title: string;
  pageType: 'service' | 'landing' | 'location' | 'custom';
  cityName?: string;
  countryName?: string;
  seo: SEOMetadata;
  headerCss?: string;
  sections: DynamicPageSection[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  replicatedFromId?: string;
}

export interface AIContentRequest {
  promptType: 'meta_description' | 'headline' | 'ad_copy' | 'faq_generation' | 'case_study';
  topic: string;
  targetAudience?: string;
  city?: string;
}
