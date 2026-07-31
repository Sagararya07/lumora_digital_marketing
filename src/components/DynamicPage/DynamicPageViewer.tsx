import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  MapPin,
  Target,
  ArrowRight
} from 'lucide-react';
import { DynamicPage } from '../../types';
import { ConsultationSection } from '../Home/ConsultationSection';
import { useViewMore } from '../../hooks/useViewMore';
import { ViewMoreButton } from '../common/ViewMoreButton';

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
}

export const DynamicPageViewer: React.FC<DynamicPageViewerProps> = ({
  page,
  onGoHome,
  openConsultationModal,
  contactInfo,
  consultationHeading,
  consultationSubheading,
}) => {
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

  const { visibleItems: visibleSections, expanded, toggle, hiddenCount, shouldShowButton } = useViewMore(page.sections, 1, { initialRows: 3 });

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
      
      {/* Top Breadcrumb & SEO Bar */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] py-3 px-4 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-['Plus_Jakarta_Sans',sans-serif]">
          <button
            onClick={onGoHome}
            className="flex items-center gap-1.5 text-[#6B7280] hover:text-[#2563EB] font-bold transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#2563EB] group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Lumora Main Home</span>
          </button>

          <div className="flex items-center gap-3 text-[11px] text-[#6B7280]">
            <span className="hidden sm:flex items-center gap-1 font-mono text-[#2563EB] font-semibold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              <Code2 className="w-3.5 h-3.5" /> /{page.slug}
            </span>
            {page.cityName && (
              <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full text-slate-700 font-bold border border-slate-200">
                <MapPin className="w-3 h-3 text-rose-500" /> 
                {page.cityName}, {page.countryName || 'Global'}
              </span>
            )}
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-extrabold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Live Published Page
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Hero Section - 100% Premium Light Theme */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-8 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-[#E5E7EB]">
        
        {/* Background Mesh Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] pointer-events-none bg-blue-500/20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px] pointer-events-none bg-purple-500/20" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
            <span>{page.cityName ? `${page.cityName} Growth Strategy` : 'Specialized Resource Page'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.15] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            {leadingTitle ? `${leadingTitle} ` : ''}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
              {highlightTitle}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-normal">
            {replacePlaceholders(page.seo?.metaDescription || '')}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openConsultationModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all hover:scale-105 w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif]"
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
      </section>

      {/* Page Rendered Section Blocks */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-10">
        {visibleSections.map((sec, idx) => {
          const gradient = sectionGradients[idx % sectionGradients.length];

          const secTitle = replacePlaceholders(sec.title);
          const secWords = secTitle.trim().split(' ');
          let leadingSec = '';
          let highlightSec = secTitle;
          if (secWords.length > 1) {
            highlightSec = secWords.pop() || '';
            leadingSec = secWords.join(' ');
          }

          return (
            <div
              key={sec.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-2xl hover:-translate-y-1 hover:border-[#2563EB] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Gradient Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}`} />
              
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-white`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight group-hover:text-[#2563EB] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                    {leadingSec ? `${leadingSec} ` : ''}
                    <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                      {highlightSec}
                    </span>
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed font-normal mb-8">
                  {replacePlaceholders(sec.content)}
                </p>

                {sec.bullets && sec.bullets.length > 0 && (
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4 flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                      <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" /> Key Deliverables & Strategy Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sec.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
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

        {shouldShowButton && (
          <ViewMoreButton
            expanded={expanded}
            onToggle={toggle}
            hiddenCount={hiddenCount}
            label="View More Sections"
          />
        )}
      </section>

      {/* Embedded Lead Consultation Form */}
      <div className="border-t border-[#E5E7EB]">
        <ConsultationSection
          contactInfo={contactInfo}
          heading={consultationHeading}
          subheading={consultationSubheading}
          sourcePage={`Dynamic Page: /${page.slug}`}
        />
      </div>

    </div>
  );
};
