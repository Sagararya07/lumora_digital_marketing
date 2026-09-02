// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  MapPin,
  Target,
  ArrowRight,
  BarChart3,
  Route,
  Workflow,
  X
} from 'lucide-react';
import * as Icons from 'lucide-react';
import { DynamicPage } from '../../types';
import { ConsultationSection } from '../Home/ConsultationSection';
import { ProcessSection } from '../Home/ProcessSection';
import { FAQSection } from '../Home/FAQSection';
import { useViewMore } from '../../hooks/useViewMore';
import { ViewMoreButton } from '../common/ViewMoreButton';
import { ParticleMorph } from './ParticleMorph';

interface DynamicPageViewerProps {
  page: DynamicPage;
  onGoHome: () => void;
  openConsultationModal: () => void;
  contactInfo: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    workingHours: string;
  };
  consultationHeading?: string;
  consultationSubheading?: string;
  dynamicPages?: DynamicPage[];
}

export const DynamicPageViewer: React.FC<DynamicPageViewerProps> = ({
  page,
  onGoHome,
  openConsultationModal,
  contactInfo,
  consultationHeading,
  consultationSubheading,
  dynamicPages,
}) => {
  const navigate = useNavigate();
  const [activeModalStudy, setActiveModalStudy] = useState<any>(null);
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);

  // Trigger intersection observer on mount/update for this page's reveals
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, [page.slug]);

  // Reset scroll position to top when navigating between dynamic pages
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [page.slug]);

  // Variable replacer function for city/country placeholders
  const replacePlaceholders = (text: string) => {
    let result = text || '';
    if (page.cityName) {
      result = result.replace(/\{city\}/gi, page.cityName);
    } else {
      result = result.replace(/\{city\}/gi, 'Your Region');
    }

    if (page.countryName) {
      result = result.replace(/\{country\}/gi, page.countryName);
    } else {
      result = result.replace(/\{country\}/gi, 'Global');
    }
    return result;
  };

  const sectionGradients = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-pink-600',
  ];

  const visibleSections = (page.sections || []).filter(sec => sec.isActive !== false);

  // Format Page Hero Title with Gradient Text
  const pageTitle = replacePlaceholders(page.title);
  const titleWords = pageTitle.trim().split(' ');
  let leadingTitle = '';
  let highlightTitle = pageTitle;
  if (titleWords.length > 1) {
    highlightTitle = titleWords.pop() || '';
    leadingTitle = titleWords.join(' ');
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] pb-0">
      


      {/* Dynamic Hero Section - Conditionally Rendered */}
      {!visibleSections.some(sec => sec.type === 'icon-hero') && (
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-8 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-[#E5E7EB]">
        
        {/* Background Mesh Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] pointer-events-none bg-[#729EE6]/20 z-0" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px] pointer-events-none bg-purple-500/20 z-0" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[55%] space-y-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2F6FC] border border-blue-200 text-[#5B8EE2] text-xs font-extrabold uppercase tracking-widest shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-pulse" />
              <span>{page.cityName ? `${page.cityName} Growth Strategy` : 'Specialized Resource Page'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.15] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              {leadingTitle ? `${leadingTitle} ` : ''}
              <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                {highlightTitle}
              </span>
            </h1>

            {(page.seo?.metaDescription || page.overviewContent) && (
              <p className="text-base sm:text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {replacePlaceholders(page.seo?.metaDescription || page.overviewContent || '')}
              </p>
            )}

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={openConsultationModal}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all hover:scale-105 w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif]"
              >
                <span>Get Lead Generation Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onGoHome}
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] text-sm font-extrabold transition-all shadow-xs w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif]"
              >
                Explore Agency Home
              </button>
            </div>
          </div>

          {/* Right 3D Canvas Area */}
          <div className="w-full lg:w-[45%] h-[400px] lg:h-[500px] relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/60 bg-gradient-to-br from-blue-50/50 via-white/40 to-purple-50/50 backdrop-blur-xl group">
            <ParticleMorph imageUrl={page.heroImage} theme={page.slug} />
            
            {/* Inner glow/shadow for premium feel */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem] pointer-events-none z-10" />
          </div>

        </div>
      </section>
      )}

      {/* Page Rendered Section Blocks */}
      <div className="w-full pb-20">
        {visibleSections.map((sec, idx) => {
          const secTitle = replacePlaceholders(sec.title);
          const secWords = secTitle.trim().split(' ');
          let leadingSec = '';
          let highlightSec = secTitle;
          if (secWords.length > 1) {
            highlightSec = secWords.pop() || '';
            leadingSec = secWords.join(' ');
          }

          if (sec.type === 'icon-hero') {
            return (
              <section key={sec.id} className="relative overflow-hidden pt-16 pb-12 sm:pt-36 sm:pb-24 px-4 sm:px-8 bg-gradient-to-br from-[#5B8EE2]/5 via-[#D6A67B]/5 to-[#EC4899]/5 border-b border-[#E5E7EB]">
                {/* Background Mesh Orbs */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-50 blur-[120px] pointer-events-none bg-[#5B8EE2]/20 z-0" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-40 blur-[120px] pointer-events-none bg-[#EC4899]/20 z-0" />
                <div className="absolute top-[20%] left-[40%] w-[400px] h-[400px] rounded-full opacity-30 blur-[100px] pointer-events-none bg-[#D6A67B]/20 z-0" />
                
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5B8EE2]/30 to-transparent" />
                <div className="flex flex-col items-center gap-6 relative z-10 max-w-4xl mx-auto text-center">
                  {(sec.mediaUrl || sec.iconName) && (
                    <div className="w-24 h-24 mb-2 flex items-center justify-center bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-4 border border-slate-100 transform hover:scale-110 transition-transform duration-300">
                      {(() => {
                        const IconComponent = sec.iconName ? (Icons as any)[sec.iconName] : null;
                        if (IconComponent) {
                          return <IconComponent className="w-12 h-12 text-[#5B8EE2] drop-shadow-sm" />;
                        }
                        if (sec.mediaUrl) {
                          return <img src={sec.mediaUrl} alt={secTitle} className="w-full h-full object-contain drop-shadow-sm" />;
                        }
                        return null;
                      })()}
                    </div>
                  )}
                  <h1 className="text-3xl sm:text-5xl font-black text-[#111827] leading-tight tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                    {secTitle}
                  </h1>
                  <p className="text-[#4B5563] text-lg sm:text-xl leading-relaxed font-medium max-w-3xl">
                    {replacePlaceholders(sec.content)}
                  </p>
                </div>
              </section>
            );
          }

          if (sec.type === 'process') {
            const mappedSteps = sec.cards?.map((card: any, i: number) => ({
              num: (i + 1).toString(),
              title: card.title,
              desc: card.description,
              imageUrl: card.iconUrl || card.mediaUrl,
            }));
            return (
              <div key={sec.id}>
                <ProcessSection steps={mappedSteps} openConsultationModal={openConsultationModal} />
              </div>
            );
          }

          if (sec.type === 'faq') {
            const mappedFaqs = sec.cards?.map((card, i) => ({
              id: card.id || `faq-${i}`,
              question: card.title || '',
              answer: card.description || '',
              category: 'General' as const,
            })) || [];
            
            if (mappedFaqs.length === 0) return null;

            return (
              <div key={sec.id}>
                <FAQSection faqs={mappedFaqs} openConsultationModal={openConsultationModal} />
              </div>
            );
          }

          if (sec.type === 'text-media' || sec.type === 'overview') {
            return (
              <section key={sec.id} className="relative max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-28 overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 pointer-events-none" />
                <div className="absolute top-1/2 -right-32 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none" />

                <div className="flex flex-col items-center gap-8 relative z-10 max-w-4xl mx-auto text-center">
                  <div className="w-full space-y-8">
                    <div className="inline-flex items-center justify-center gap-3">
                       <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden sm:block" />
                       <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] font-extrabold text-lg tracking-widest uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                         Overview
                       </div>
                       <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden sm:block" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0f172a] leading-[1.15] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                      {leadingSec ? `${leadingSec} ` : ''}
                      <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                        {highlightSec}
                      </span>
                    </h2>
                    <div>
                      <p className="text-[#4B5563] text-lg sm:text-xl leading-relaxed font-medium">
                        {replacePlaceholders(sec.content)}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (sec.type === 'services-grid' || sec.type === 'services') {
            return (
              <section key={sec.id} className="bg-slate-50 border-y border-[#E5E7EB] py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                  
                  {/* Top Section: Title & Content */}
                  <div className="mb-12 lg:mb-16 max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
                      {secTitle}
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6" />
                    <p className="text-[#4B5563] text-lg leading-relaxed">
                      {replacePlaceholders(sec.content)}
                    </p>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    
                    {/* Left Panel: Large Image */}
                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-[#E5E7EB] group">
                      <img 
                        src={sec.mediaUrl || "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"} 
                        alt={secTitle} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026]/40 to-transparent"></div>
                    </div>

                    {/* Right Panel: Horizontal Cards List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                      {sec.cards?.map((card) => (
                        <div 
                          key={card.id} 
                          className={`group bg-white rounded-xl sm:rounded-2xl border border-[#E5E7EB] p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-6 ${card.linkUrl ? 'cursor-pointer hover:border-blue-200' : ''}`}
                          onClick={() => {
                            if (card.linkUrl) {
                              navigate(`/${card.linkUrl}`);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }}
                        >
                          
                          {/* Square Icon Container */}
                          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                            {(() => {
                              const IconComponent = card.iconName ? (Icons as any)[card.iconName] : null;
                              if (IconComponent) {
                                return <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#5B8EE2] drop-shadow-sm" />;
                              }
                              if (card.iconUrl) {
                                return <img src={card.iconUrl} alt="icon" className="w-full h-full object-contain drop-shadow-sm" />;
                              }
                              return null;
                            })()}
                          </div>
                          
                          {/* Title Only */}
                          <div className="flex-1">
                             <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] leading-snug tracking-tight group-hover:text-[#5B8EE2] transition-colors m-0">
                               {card.title}
                             </h3>
                          </div>
                          
                        </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </section>
            );
          }

          if (sec.type === 'how-we-do-it') {
            const pageName = pageTitle.split(' -')[0] || pageTitle;
            const dynamicTitle = `How we do ${pageName}`;

            // Auto-detect the best, most meaningful image for this specific page
            let bestImage = page.heroImage;
            if (!bestImage) {
              const secWithMedia = page.sections.find((s: any) => s.mediaUrl && s.type !== 'how-we-do-it');
              if (secWithMedia) bestImage = secWithMedia.mediaUrl;
            }
            
            // If the Unsplash image is 404ing (like the old generic ones), replace it with a known working generic business photo.
            if (bestImage && bestImage.includes('1432888117247')) {
              bestImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200";
            }
            
            const finalImage = bestImage || "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200";
            
            return (
              <section key={sec.id} className="w-full bg-slate-50 border-y border-[#E5E7EB] flex flex-col md:flex-row min-h-[600px]">
                {/* Left Side */}
                <div className="w-full md:w-[55%] lg:w-[60%] p-8 sm:p-12 lg:p-20 relative z-10 flex flex-col justify-center">
                  
                  {/* Decorative Dots Pattern */}
                  <div className="hidden lg:grid grid-cols-5 gap-2 w-16 absolute left-6 top-24 opacity-30">
                     {Array.from({length: 25}).map((_, i) => (
                       <div key={i} className="w-1.5 h-1.5 bg-[#5B8EE2] rounded-full" />
                     ))}
                  </div>

                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 lg:ml-12" />
                  <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] leading-[1.15] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-6 lg:ml-12">
                    {dynamicTitle}
                  </h2>
                  <p className="text-[#4B5563] text-lg sm:text-xl leading-relaxed font-medium mb-8 max-w-2xl lg:ml-12">
                    {replacePlaceholders(sec.content)}
                  </p>
                  
                  <div className="mb-12 lg:ml-12">
                    <button 
                      onClick={openConsultationModal}
                      className="group inline-flex items-center gap-2 bg-[#0B1026] hover:bg-blue-700 text-white px-8 py-3.5 text-sm font-bold tracking-widest transition-all rounded-full uppercase shadow-lg shadow-blue-900/20"
                    >
                      Request for Service
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                  
                  {/* Grid of cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-12">
                    {sec.cards?.map((card, cardIdx) => (
                      <div key={card.id || cardIdx} className="bg-white p-6 min-h-[140px] flex flex-col justify-center group hover:-translate-y-1 transition-all duration-500 border border-slate-200 hover:border-transparent hover:bg-gradient-to-br hover:from-[#5B8EE2]/10 hover:via-[#D6A67B]/10 hover:to-[#EC4899]/10 cursor-pointer shadow-sm hover:shadow-lg rounded-2xl relative overflow-hidden z-10">
                        <div className="w-6 h-1 bg-gradient-to-r from-[#5B8EE2] to-[#EC4899] mb-4 opacity-80 rounded-full group-hover:w-12 transition-all duration-500" />
                        <h4 className="text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg leading-snug group-hover:text-[#5B8EE2] transition-colors duration-300">
                          {card.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col md:block relative min-h-[400px] md:min-h-full">
                  <div className="relative w-full h-[300px] md:absolute md:inset-0 md:h-full">
                    <img 
                      src={finalImage} 
                      alt={secTitle} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60" />
                  </div>
                  {/* Themed overlay box */}
                  <div className="w-full relative md:absolute md:bottom-0 md:right-0 md:left-[-5%] lg:left-[-10%] md:w-[105%] lg:w-[110%] bg-gradient-to-br from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] p-8 sm:p-12 shadow-2xl md:rounded-tl-3xl lg:rounded-tl-3xl border border-white/20">
                    <div className="relative z-10 text-white">
                      <div className="grid grid-cols-5 gap-2 w-16 mb-6 opacity-40">
                         {Array.from({length: 20}).map((_, i) => (
                           <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                         ))}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-['Plus_Jakarta_Sans',sans-serif] font-medium italic mb-2">
                        Great Strategy is
                      </h3>
                      <h2 className="text-4xl sm:text-5xl font-black font-['Plus_Jakarta_Sans',sans-serif] tracking-tight uppercase drop-shadow-md">
                        GOOD BUSINESS
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (sec.type === 'scrollable-cards') {
            return (
              <section key={sec.id} className="bg-white py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto relative z-10">
                  
                  {/* Title with lines */}
                  <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="w-8 sm:w-16 h-px bg-slate-300 rounded-full" />
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                      {secTitle}
                    </h2>
                    <span className="w-8 sm:w-16 h-px bg-slate-300 rounded-full" />
                  </div>

                  {/* Scrollable Container */}
                  <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0">
                    {sec.cards?.map((card) => (
                      <div key={card.id} className="w-[280px] sm:w-[300px] shrink-0 snap-center bg-white rounded-3xl border border-[#E5E7EB] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                        
                        {/* Icon */}
                        <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center mb-6">
                          {(() => {
                            const IconComponent = card.iconName ? (Icons as any)[card.iconName] : null;
                            if (IconComponent) {
                              return <IconComponent className="w-12 h-12 text-[#5B8EE2] drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />;
                            }
                            if (card.iconUrl) {
                              return <img src={card.iconUrl} alt={card.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />;
                            }
                            return <div className="w-12 h-12 rounded-xl bg-slate-100 animate-pulse" />;
                          })()}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] mb-3 leading-tight">
                          {card.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-[#6B7280] text-sm leading-relaxed flex-1 font-medium">
                          {card.description}
                        </p>

                        {/* Link */}
                        <div className="mt-6 pt-6 border-t border-slate-100 w-full flex justify-center">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              if (card.linkUrl) {
                                const isExternal = card.linkUrl.startsWith('http');
                                const isPageExists = dynamicPages ? dynamicPages.some(p => p.slug === card.linkUrl) : true;
                                
                                if (isExternal) {
                                  window.open(card.linkUrl, '_blank');
                                } else if (isPageExists || !dynamicPages) {
                                  navigate(`/${card.linkUrl}`);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                  if (openConsultationModal) openConsultationModal();
                                }
                              } else {
                                if (openConsultationModal) openConsultationModal();
                              }
                            }}
                            className="inline-flex items-center gap-1.5 text-[#5B8EE2] text-sm font-extrabold hover:text-blue-700 transition-colors cursor-pointer"
                          >
                            Learn More <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        
                      </div>
                    ))}
                  </div>
                  
                </div>
              </section>
            );
          }

          if (sec.type === 'case-study') {
            return (
              <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-24">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-16">
                  {secTitle}
                </h2>
                
                {sec.caseStudies && (() => {
                  const visibleStudies = showAllCaseStudies ? sec.caseStudies : sec.caseStudies.slice(0, 2);
                  return (
                    <>
                      {visibleStudies.map((study, studyIdx) => {
                        const isEven = studyIdx % 2 === 0;
                        const fallbackImages = [
                          '1557838923-2985c318be48',
                          '1460925895917-afdab827c52f',
                          '1551288049-bebda4e38f71',
                          '1432888117247-2b0e6dfa0698'
                        ];
                        const imgUrl = study.bgImageUrl || `https://images.unsplash.com/photo-${fallbackImages[studyIdx % fallbackImages.length]}?q=80&w=1200&auto=format&fit=crop`;
                        
                        return (
                          <div key={study.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            {/* Points Grid Panel */}
                            <div className="flex-1 w-full p-6 sm:p-10 rounded-[2.5rem] border border-[#E5E7EB] shadow-inner relative overflow-hidden group min-h-[300px]">
                              <img src={imgUrl} alt="background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                              <div className="absolute inset-0 bg-slate-900/30 transition-all duration-300 group-hover:bg-slate-900/40"></div>
                              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {study.points.map((pt, ptIdx) => (
                                  <div 
                                    key={pt.id} 
                                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${ptIdx === 0 ? 'border-blue-400 shadow-blue-100 ring-1 ring-blue-400/50' : 'border-white/50 hover:border-blue-200'}`}
                                  >
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${ptIdx === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md' : 'bg-slate-100 text-slate-500'}`}>
                                      {(() => {
                                        const PointIcon = pt.iconName ? (Icons as any)[pt.iconName] : CheckCircle2;
                                        return <PointIcon className="w-5 h-5" />;
                                      })()}
                                    </div>
                                    <span className="text-sm font-semibold text-slate-800 leading-snug">{pt.title}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Details Panel */}
                            <div className="flex-1 space-y-6">
                              <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                                {study.title}
                              </h3>
                              <p className="text-[#4B5563] text-lg leading-relaxed">
                                {study.description}
                              </p>
                              <button
                                onClick={() => setActiveModalStudy({ ...study, imgUrl })}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-sm font-extrabold gap-2 transition-all hover:scale-105 shadow-xl shadow-blue-500/25 font-['Plus_Jakarta_Sans',sans-serif]"
                              >
                                <span>Read More</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      
                      {sec.caseStudies.length > 2 && (
                        <div className="flex justify-center mt-12">
                          <button
                            onClick={() => setShowAllCaseStudies(!showAllCaseStudies)}
                            className="px-8 py-3 rounded-full border border-[#5B8EE2]/30 bg-[#F2F6FC]/50 hover:bg-[#5B8EE2] hover:text-white text-[#5B8EE2] text-sm font-extrabold flex items-center justify-center gap-2 transition-all group/btn shadow-xs font-['Plus_Jakarta_Sans',sans-serif]"
                          >
                            <span>{showAllCaseStudies ? 'View Less' : 'View More Case Studies'}</span>
                            <ArrowRight className={`w-4 h-4 text-[#5B8EE2] group-hover/btn:text-white transition-transform ${showAllCaseStudies ? '-rotate-90' : 'rotate-90'}`} />
                          </button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </section>
            );
          }

          // Fallback legacy renderer
          const gradient = sectionGradients[idx % sectionGradients.length];

          return (
            <div
              key={sec.id}
              className="max-w-5xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-2xl hover:-translate-y-1 hover:border-[#5B8EE2] transition-all duration-300 group relative overflow-hidden mb-10"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}`} />
              
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-white`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                    {leadingSec ? `${leadingSec} ` : ''}
                    <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                      {highlightSec}
                    </span>
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed font-normal mb-8">
                  {replacePlaceholders(sec.content)}
                </p>

                {sec.bullets && sec.bullets.length > 0 && (
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#5B8EE2] mb-4 flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                      <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2]" /> Key Deliverables & Strategy Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sec.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full bg-[#F2F6FC] text-[#5B8EE2] flex items-center justify-center shrink-0 border border-blue-100`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8EE2]" />
                          </div>
                          <span className="text-sm font-semibold text-[#111827] leading-snug">{replacePlaceholders(b)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Embedded Lead Consultation Form */}
      <div className="border-t border-[#E5E7EB]">
        <ConsultationSection
          contactInfo={contactInfo}
          heading={consultationHeading}
          subheading={consultationSubheading}
          sourcePage={`Dynamic Page: /${page.slug}`}
        />
      </div>

      {/* Case Study Read More Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-900/60 transition-opacity">
          <div className="relative w-full max-w-5xl h-[85vh] sm:h-[80vh] bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-blue-900/20">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Left/Top Image (Fixed) */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative shrink-0 bg-[#F8FAFC] flex items-center justify-center p-4">
              <img src={activeModalStudy.imgUrl} alt={activeModalStudy.title} className="w-full h-full object-contain" />
            </div>

            {/* Right/Bottom Content (Scrollable) */}
            <div className="w-full md:w-1/2 h-[calc(100%-16rem)] md:h-full overflow-y-auto p-8 sm:p-12 pb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2F6FC] border border-blue-100 text-[#5B8EE2] text-xs font-extrabold uppercase tracking-widest mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Case Study</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-6 tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                {activeModalStudy.title}
              </h3>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-10">
                {activeModalStudy.description}
              </p>

              {/* Extended Details (simulated) */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                    Strategic Initiatives
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeModalStudy.points.map((pt: any) => (
                      <div key={pt.id} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#5B8EE2] mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-slate-800 leading-snug">{pt.title}</span>
                          <p className="text-xs text-slate-500 mt-1">Targeted delivery and implementation of {pt.title.toLowerCase()}.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <h4 className="text-lg font-bold text-slate-800 mb-2 font-['Plus_Jakarta_Sans',sans-serif]">Results & Impact</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    By implementing the strategic initiatives outlined above, the campaign significantly out-performed initial KPIs. Our team was able to orchestrate a data-driven approach that connected {activeModalStudy.title.toLowerCase()} directly to the core business objectives, generating sustainable pipeline and measurable brand equity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
