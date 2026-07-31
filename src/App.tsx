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

import { DynamicPageViewer } from './components/DynamicPage/DynamicPageViewer';
import { AdminDashboard } from './components/Admin/AdminDashboard';

import { initialSiteContent, initialDynamicPages } from './data/initialData';
import { SiteContent, DynamicPage, ServiceItem, AchievementItem } from './types';
import { useTheme } from './hooks/useTheme';

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
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<AchievementItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);

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
        setDynamicPages(data.pages);
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
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isAdminRoute = location.pathname.startsWith('/admin');
  const activeDynamicSlug = location.pathname === '/' || location.pathname === '/admin' ? null : location.pathname.slice(1);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Inter',sans-serif] selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      
      {/* 1. Left Navigation Menu Drawer (Clickable Icon opens menu) */}
      {!isAdminRoute && (
        <LeftSidebar
          currentTab={location.pathname === '/' ? 'home' : (activeDynamicSlug || 'admin')}
          setCurrentTab={handleNavTabClick}
          openConsultationModal={() => setIsConsultationModalOpen(true)}
          isOpenMobile={isOpenMobileNav}
          setIsOpenMobile={setIsOpenMobileNav}
          dynamicPages={dynamicPages}
          onSelectDynamicPage={handleSelectDynamicPage}
          activeDynamicSlug={activeDynamicSlug}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}

      <div className="flex flex-col min-h-screen transition-all">
        
        {/* 2. Top Horizontal Header (Dynamic Pages dropdown + Lead Generation page link) */}
        {!isAdminRoute && (
          <TopHeader
            onOpenMobileNav={() => setIsOpenMobileNav(true)}
            openConsultationModal={() => setIsConsultationModalOpen(true)}
            dynamicPages={dynamicPages}
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
              <AdminDashboard
                onExitAdmin={() => navigate('/')}
                siteContent={siteContent}
                onUpdateSiteContent={(updated) => setSiteContent(updated)}
                dynamicPages={dynamicPages}
                onRefreshPages={fetchDynamicPages}
                onRefreshContent={fetchSiteContent}
              />
            } />
            
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

            <Route path="/" element={
              <div>
                {/* Section 1: Hero Section */}
                <HeroSection
                  content={siteContent.hero}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                  onNavigateToServices={() => scrollToSection('services-section')}
                />

                {/* Trusted Brand Logos Bar */}
                <TrustedLogosBar />

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
                  services={siteContent.services}
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
                  onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)}
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

                {/* Section 11: Footer */}
                <Footer
                  contactInfo={siteContent.contactInfo}
                  socialLinks={siteContent.socialLinks}
                  footerTagline={siteContent.siteMeta?.footerTagline}
                  services={siteContent.services}
                  onOpenLegalModal={(type) => setLegalModalType(type)}
                  openConsultationModal={() => setIsConsultationModalOpen(true)}
                  onGoHome={handleGoHome}
                  onSelectDynamicPage={handleSelectDynamicPage}
                />
              </div>
            } />
          </Routes>
        </main>

      </div>

      {/* Global Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        sourcePage={activeDynamicSlug ? `Page: /${activeDynamicSlug}` : 'Header / Hero Button'}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        openConsultationModal={() => setIsConsultationModalOpen(true)}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        openConsultationModal={() => setIsConsultationModalOpen(true)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

// Helper component for dynamic page route
function DynamicPageWrapper({ dynamicPages, onGoHome, siteContent, setIsConsultationModalOpen, onOpenLegalModal, onSelectDynamicPage }: {
  dynamicPages: DynamicPage[];
  onGoHome: () => void;
  siteContent: SiteContent;
  setIsConsultationModalOpen: (open: boolean) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'refund') => void;
  onSelectDynamicPage: (slug: string) => void;
}) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const page = dynamicPages.find((p) => p.slug === slug);

  React.useEffect(() => {
    if (!page) {
      navigate('/', { replace: true });
    }
  }, [page, navigate]);

  if (!page) {
    return null;
  }

  return (
    <>
      <DynamicPageViewer
        page={page}
        onGoHome={onGoHome}
        openConsultationModal={() => setIsConsultationModalOpen(true)}
        contactInfo={siteContent.contactInfo}
        consultationHeading={siteContent.siteMeta?.consultationHeading}
        consultationSubheading={siteContent.siteMeta?.consultationSubheading}
      />
      <Footer
        contactInfo={siteContent.contactInfo}
        socialLinks={siteContent.socialLinks}
        footerTagline={siteContent.siteMeta?.footerTagline}
        services={siteContent.services}
        onOpenLegalModal={onOpenLegalModal}
        openConsultationModal={() => setIsConsultationModalOpen(true)}
        onGoHome={onGoHome}
        onSelectDynamicPage={onSelectDynamicPage}
      />
    </>
  );
}

export default App;
