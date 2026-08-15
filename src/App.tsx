// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { LeftSidebar } from './components/Navigation/LeftSidebar';
import { TopHeader } from './components/Navigation/TopHeader';
import { HeroSection } from './components/Home/HeroSection';
import { TrustedLogosBar } from './components/Home/TrustedLogosBar';
import { WhatIsDigitalMarketing } from './components/Home/WhatIsDigitalMarketing';
import { WhoShouldUseSection } from './components/Home/WhoShouldUseSection';
import { ServicesSection } from './components/Home/ServicesSection';
import { WhyChooseUs } from './components/Home/WhyChooseUs';
import { StatsBar } from './components/Home/StatsBar';
import { AchievementsSection } from './components/Home/AchievementsSection';
import { ProcessSection } from './components/Home/ProcessSection';
import { IndustriesSection } from './components/Home/IndustriesSection';
import { FAQSection } from './components/Home/FAQSection';
import { TestimonialsSection } from './components/Home/TestimonialsSection';
import { ConsultationSection } from './components/Home/ConsultationSection';
import { Footer } from './components/Home/Footer';

import { ConsultationModal } from './components/Modals/ConsultationModal';
import { ServiceDetailModal } from './components/Modals/ServiceDetailModal';
import { CaseStudyModal } from './components/Modals/CaseStudyModal';
import { LegalModal } from './components/Modals/LegalModal';

import { ConsultationPage } from './components/Pages/ConsultationPage';
import { DynamicPageViewer } from './components/DynamicPage/DynamicPageViewer';
import { AdminDashboard } from './components/Admin/AdminDashboard';

import { AboutPage } from './components/Pages/AboutPage';
import { PortfolioPage } from './components/Pages/PortfolioPage';
import { RndPage } from './components/Pages/RndPage';

import { initialSiteContent, initialDynamicPages } from './data/initialData';
import { SiteContent, DynamicPage, ServiceItem, AchievementItem, CaseStudyItem } from './types';
import { useTheme } from './hooks/useTheme';
import { getFallbackServiceDetails } from './data/serviceDetails';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', background: '#fee2e2', color: '#991b1b', fontFamily: 'monospace', height: '100vh', width: '100vw', zIndex: 9999, position: 'fixed' }}>
          <h2>Something went wrong in the application.</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.toString()}</pre>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const [isOpenMobileNav, setIsOpenMobileNav] = useState<boolean>(false);

  // Content & Pages State
  const [siteContent, setSiteContent] = useState<SiteContent>(initialSiteContent);
  const [dynamicPages, setDynamicPages] = useState<DynamicPage[]>(initialDynamicPages);

  // Modal States
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const handleSelectCaseStudy = (item: any) => {
    if (item.clientName) {
      setSelectedCaseStudy({
        id: item.id,
        title: item.clientName,
        category: item.industry,
        description: item.results || item.challenge || 'Details coming soon.',
        image_url: item.image_url || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        is_active: true
      });
    } else {
      setSelectedCaseStudy(item);
    }
  };

  useEffect(() => {
    fetchSiteContent();
    fetchDynamicPages();
  }, []);

  const fetchSiteContent = async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      if (res.ok && data.data) {
        setSiteContent(data.data);
      }
    } catch (err) {
      console.error('Failed to load site content from server:', err);
    }
  };

  const fetchDynamicPages = async () => {
    try {
      const res = await fetch('/api/pages');
      const data = await res.json();
      if (res.ok && data.pages) {
        const mergedPages = [...initialDynamicPages];
        data.pages.forEach((dbPage: DynamicPage) => {
          const idx = mergedPages.findIndex(p => p.slug === dbPage.slug);
          if (idx >= 0) {
            mergedPages[idx] = dbPage;
          } else {
            mergedPages.push(dbPage);
          }
        });
        setDynamicPages(mergedPages);
      }
    } catch (err) {
      console.error('Failed to load dynamic pages from server:', err);
    }
  };

  const handleSelectDynamicPage = (slug: string) => {
    navigate(`/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavTabClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.dispatchEvent(new CustomEvent('navToService', { detail: sectionId }));
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const isAdminRoute = location.pathname.startsWith('/admin');
  const activeDynamicSlug = location.pathname === '/' || location.pathname === '/admin' ? null : location.pathname.slice(1);

  const dynamicServices = dynamicPages
    .filter(dp => dp.isPublished && !dp.slug?.includes('/'))
    .map(dp => {
      const fallback = getFallbackServiceDetails(dp.slug, dp.title);

      return {
        id: String(dp.id),
        slug: dp.slug,
        title: dp.title,
        shortDescription: dp.seo?.metaDescription || dp.overviewContent || fallback.shortDescription,
        fullDescription: dp.overviewContent || fallback.fullDescription,
        iconName: dp.heroBadge || 'Target',
        features: (dp.serviceFeatures && dp.serviceFeatures.length > 0 && dp.serviceFeatures[0] !== '') ? dp.serviceFeatures : fallback.features,
        deliverables: (dp.serviceDeliverables && dp.serviceDeliverables.length > 0 && dp.serviceDeliverables[0] !== '') ? dp.serviceDeliverables : fallback.deliverables,
        recommendedFor: dp.serviceRecommendedFor || fallback.recommendedFor,
        badge: dp.heroBadge || fallback.badge,
        image: dp.heroImage || fallback.image
      };
    });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Inter',sans-serif] selection:bg-[#5B8EE2] selection:text-white transition-colors duration-300">
      
      {/* 1. Left Navigation Menu Drawer */}
      {!isAdminRoute && (
        <LeftSidebar
          currentTab={location.pathname === '/' ? 'home' : (activeDynamicSlug || 'admin')}
          setCurrentTab={handleNavTabClick}
          openConsultationModal={() => setIsConsultationModalOpen(true)}
          isOpenMobile={isOpenMobileNav}
          setIsOpenMobile={setIsOpenMobileNav}
          dynamicPages={dynamicPages}
          services={dynamicServices}
          onSelectDynamicPage={handleSelectDynamicPage}
          activeDynamicSlug={activeDynamicSlug}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}

      <div className="flex flex-col min-h-screen transition-all">
        
        {/* 2. Top Horizontal Header */}
        {!isAdminRoute && (
          <TopHeader
            onOpenMobileNav={() => setIsOpenMobileNav(true)}
            openConsultationModal={() => setIsConsultationModalOpen(true)}
            dynamicPages={dynamicPages}
            services={dynamicServices}
            onSelectDynamicPage={handleSelectDynamicPage}
            onGoHome={handleGoHome}
            onNavSection={handleNavTabClick}
            activeDynamicSlug={activeDynamicSlug}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        )}

        {/* View Switcher via React Router */}
        <main className="flex-1">
          <Routes>
            <Route path="/admin/*" element={
              <ErrorBoundary>
                <AdminDashboard
                  onExitAdmin={() => navigate('/')}
                  siteContent={siteContent}
                  onUpdateSiteContent={(updated) => setSiteContent(updated)}
                  dynamicPages={dynamicPages}
                  onRefreshPages={fetchDynamicPages}
                  onRefreshContent={fetchSiteContent}
                />
              </ErrorBoundary>
            } />

            {/* Dedicated Full Pages for Menu Drawer Options */}
            <Route path="/about" element={
              <AboutPage
                siteContent={siteContent}
                onGoHome={handleGoHome}
                openConsultationModal={() => setIsConsultationModalOpen(true)}
              />
            } />

            <Route path="/portfolio" element={
              <PortfolioPage
                siteContent={siteContent}
                onGoHome={handleGoHome}
                openConsultationModal={() => setIsConsultationModalOpen(true)}
                onSelectCaseStudy={handleSelectCaseStudy}
              />
            } />

            <Route path="/rnd" element={
              <RndPage
                siteContent={siteContent}
                onGoHome={handleGoHome}
                openConsultationModal={() => setIsConsultationModalOpen(true)}
              />
            } />

            <Route path="/get-a-consultation" element={
              <ConsultationPage
                siteContent={siteContent}
                onGoHome={handleGoHome}
              />
            } />

            <Route path="/consultation" element={
              <ConsultationPage
                siteContent={siteContent}
                onGoHome={handleGoHome}
              />
            } />
            

            {/* Dynamic CMS Page Renderer */}
            <Route path="/:slug" element={
              <DynamicPageWrapper 
                dynamicPages={dynamicPages} 
                onGoHome={handleGoHome}
                siteContent={siteContent}
                setIsConsultationModalOpen={setIsConsultationModalOpen}
                onOpenLegalModal={(type) => setLegalModalType(type)}
                onSelectDynamicPage={handleSelectDynamicPage}
              />
            } />
            <Route path="/:slug/:subslug" element={
              <DynamicPageWrapper 
                dynamicPages={dynamicPages} 
                onGoHome={handleGoHome}
                siteContent={siteContent}
                setIsConsultationModalOpen={setIsConsultationModalOpen}
                onOpenLegalModal={(type) => setLegalModalType(type)}
                onSelectDynamicPage={handleSelectDynamicPage}
              />
            } />

            {/* Home Page */}
            <Route path="/" element={
              <div>
                {/* Section 1: Hero Section */}
                <HeroSection
                  content={siteContent.hero}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                  onNavigateToServices={() => scrollToSection('services-section')}
                />

                {/* Trusted Brand Logos Bar */}
                <TrustedLogosBar trustedLogos={siteContent.trustedLogos} />

                {/* Section 2: What is Digital Marketing? */}
                <WhatIsDigitalMarketing
                  content={siteContent.whatIs}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                />

                {/* Section 3: Who Should Use Digital Marketing? */}
                <WhoShouldUseSection
                  items={siteContent.whoShouldUse}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                />

                {/* Section 4: Our Digital Marketing Services */}
                <ServicesSection
                  services={dynamicServices}
                  onSelectService={(svc) => setSelectedService(svc)}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                />

                {/* Section 5: Why Choose Lumora? */}
                <WhyChooseUs
                  content={siteContent.whyChoose}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                />

                {/* Global Key Stats */}
                <StatsBar />

                {/* Section 6: Recent Achievements & Case Studies */}
                <AchievementsSection
                  achievements={siteContent.achievements}
                  caseStudiesList={siteContent.caseStudiesList}
                  onSelectCaseStudy={handleSelectCaseStudy}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                />

                {/* Section 7: Our Process */}
                <ProcessSection
                  steps={siteContent.process}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                />

                {/* Section 8: Industries We Serve */}
                <IndustriesSection
                  industries={siteContent.industries}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                />

                {/* Client Testimonials */}
                <TestimonialsSection
                  testimonials={siteContent.testimonials || []}
                />

                {/* Section 9: FAQ Module */}
                <FAQSection
                  faqs={siteContent.faqs}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                />

                {/* Section 10: Consultation Section Form */}
                <ConsultationSection
                  contactInfo={siteContent.contactInfo}
                  heading="What Are Your Business Requirements?"
                  subheading="Book a free consultation with our digital marketing experts and discover the best strategy to grow your business."
                  sourcePage="Home Page Section"
                />
              </div>
            } />
          </Routes>
        </main>

        {!isAdminRoute && (
          <Footer
            contactInfo={siteContent.contactInfo}
            services={dynamicServices}
            industries={siteContent.industries}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
            onOpenLegalModal={(type) => setLegalModalType(type)}
            dynamicPages={dynamicPages}
            onSelectDynamicPage={handleSelectDynamicPage}
            onGoHome={handleGoHome}
            onNavSection={handleNavTabClick}
          />
        )}
      </div>

      {/* Interactive Global Modals */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        openConsultationModal={() => {
          setSelectedService(null);
          setIsConsultationModalOpen(true);
        }}
        onReadMore={(slug) => handleSelectDynamicPage(slug)}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        openConsultationModal={() => {
          setSelectedCaseStudy(null);
          setIsConsultationModalOpen(true);
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

const DynamicPageWrapper: React.FC<{
  dynamicPages: DynamicPage[];
  onGoHome: () => void;
  siteContent: SiteContent;
  setIsConsultationModalOpen: (open: boolean) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'refund') => void;
  onSelectDynamicPage: (slug: string) => void;
}> = ({
  dynamicPages,
  onGoHome,
  siteContent,
  setIsConsultationModalOpen,
  onOpenLegalModal,
  onSelectDynamicPage,
}) => {
  const { slug, subslug } = useParams<{ slug: string; subslug?: string }>();
  const fullSlug = subslug ? `${slug}/${subslug}` : slug;
  const page = dynamicPages.find((p) => p.slug === fullSlug);

  if (!page) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-[#F8FAFC]">
        <h1 className="text-4xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">Page Not Found (404)</h1>
        <p className="text-[#6B7280] mt-2 text-sm font-normal">The page &quot;/{fullSlug}&quot; does not exist or has been unpublished.</p>
        <button
          onClick={onGoHome}
          className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white font-extrabold text-xs shadow-lg shadow-blue-500/20"
        >
          Return to Agency Homepage
        </button>
      </div>
    );
  }

  return (
    <div>
      <DynamicPageViewer
        page={page}
        onGoHome={onGoHome}
        openConsultationModal={() => setIsConsultationModalOpen(true)}
        contactInfo={siteContent.contactInfo}
        consultationHeading={siteContent.siteMeta?.consultationHeading}
        consultationSubheading={siteContent.siteMeta?.consultationSubheading}
      />
    </div>
  );
};

export default App;
