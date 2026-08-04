import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { DynamicPage, ServiceItem } from '../../types';
import { LumoraLogo } from '../common/LumoraLogo';

interface TopHeaderProps {
  onOpenMobileNav: () => void;
  openConsultationModal: () => void;
  dynamicPages: DynamicPage[];
  services?: ServiceItem[];
  onSelectDynamicPage: (slug: string) => void;
  onGoHome: () => void;
  onNavSection?: (section: string) => void;
  activeDynamicSlug: string | null;
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  onOpenMobileNav,
  openConsultationModal,
  dynamicPages,
  onSelectDynamicPage,
  onGoHome,
  onNavSection,
}) => {
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<'solutions' | 'resources' | null>(null);
  const digitalMarketingRef = useRef<HTMLDivElement>(null);

  // 6 Core Services for Resources sub-menu
  const coreServices = [
    { id: 'social-media-marketing', slug: 'social-media-marketing', title: 'Social Media Marketing' },
    { id: 'seo-growth-engine', slug: 'seo-growth-engine', title: 'Search Engine Optimization (SEO)' },
    { id: 'performance-marketing', slug: 'performance-marketing', title: 'Performance Marketing' },
    { id: 'lead-generation', slug: 'lead-generation', title: 'Lead Generation' },
    { id: 'retargeting-marketing', slug: 'retargeting-marketing', title: 'Retargeting Marketing' },
    { id: 'ai-marketing-automation', slug: 'ai-marketing-automation', title: 'AI Marketing Automation' }
  ];

  const resourceItems = coreServices.map(coreService => {
    // Check if a dynamic page exists for this slug
    const dynamicPage = dynamicPages.find(p => p.slug === coreService.slug && p.isPublished);
    return dynamicPage || coreService;
  });

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (digitalMarketingRef.current && !digitalMarketingRef.current.contains(e.target as Node)) {
        setDigitalMarketingOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      onGoHome();
    } else if (onNavSection) {
      onNavSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="top-horizontal-header"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-colors shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-6">

        {/* Left Side: Top Left Menu Icon Button & Lumora Logo */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Top Left Menu Icon Button (Opens Left Drawer) */}
          <button
            id="left-top-menu-icon-btn"
            onClick={onOpenMobileNav}
            className="p-2.5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#5B8EE2] hover:bg-[#F2F6FC] text-slate-700 hover:text-[#5B8EE2] transition-all flex items-center gap-2 group cursor-pointer"
            title="Open Menu Drawer"
            aria-label="Open Navigation Menu Drawer"
          >
            <Menu className="w-5 h-5 text-[#5B8EE2] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block text-xs font-extrabold text-[#111827] group-hover:text-[#5B8EE2]">
              Menu
            </span>
          </button>

          {/* Lumora Logo (Default Clicking Returns to Home) */}
          <button
            onClick={onGoHome}
            className="flex items-center shrink-0 text-left focus:outline-none hover:opacity-90 transition-opacity"
            title="Lumora Home"
          >
            <LumoraLogo size="md" />
          </button>
        </div>

        {/* Center Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-10 font-['Plus_Jakarta_Sans',sans-serif] text-sm font-bold text-[#111827]">

          <div className="relative" ref={digitalMarketingRef}>
            <button
              onClick={() => { setDigitalMarketingOpen(!digitalMarketingOpen); setActiveSubMenu(null); }}
              className="flex items-center gap-1.5 py-2 text-slate-800 hover:text-[#5B8EE2] transition-colors"
            >
              <span>Digital Marketing</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${digitalMarketingOpen ? 'rotate-180 text-[#5B8EE2]' : ''}`} />
            </button>

            {digitalMarketingOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">

                {/* Solutions Accordion */}
                <div className="border-b border-slate-100 last:border-0">
                  <button
                    onClick={() => setActiveSubMenu(activeSubMenu === 'solutions' ? null : 'solutions')}
                    className="w-full text-left px-5 py-4 text-sm font-semibold text-slate-800 hover:text-[#5B8EE2] hover:bg-slate-50 transition-colors flex items-center justify-between"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubMenu === 'solutions' ? 'rotate-180 text-[#5B8EE2]' : 'text-slate-400'}`} />
                  </button>

                  {activeSubMenu === 'solutions' && (
                    <div className="bg-slate-50/50 py-2 px-3 border-t border-slate-100">
                      {[
                        { name: 'Social Media Marketing', id: 'services-section' },
                        { name: 'Search Engine Optimization (SEO)', id: 'services-section' },
                        { name: 'Performance Marketing', id: 'services-section' },
                        { name: 'Lead Generation', id: 'services-section' },
                        { name: 'Retargeting Marketing', id: 'services-section' },
                        { name: 'AI Marketing Automation', id: 'services-section' },
                      ].map((item, i) => (
                        <button
                          key={i}
                          onClick={() => { handleNavClick(item.id); setDigitalMarketingOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-[#5B8EE2] hover:bg-white rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resources Accordion */}
                <div>
                  <button
                    onClick={() => setActiveSubMenu(activeSubMenu === 'resources' ? null : 'resources')}
                    className="w-full text-left px-5 py-4 text-sm font-semibold text-slate-800 hover:text-[#5B8EE2] hover:bg-slate-50 transition-colors flex items-center justify-between"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubMenu === 'resources' ? 'rotate-180 text-[#5B8EE2]' : 'text-slate-400'}`} />
                  </button>

                  {activeSubMenu === 'resources' && (
                    <div className="bg-slate-50/50 py-2 px-3 border-t border-slate-100">
                      {resourceItems.map((page) => (
                        <button
                          key={page.id}
                          onClick={() => {
                            onSelectDynamicPage(page.slug);
                            setDigitalMarketingOpen(false);
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-[#5B8EE2] hover:bg-white rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span className="truncate">{page.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#5B8EE2] transition-opacity" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

        </nav>

        {/* Right Action CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openConsultationModal}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-bold tracking-wide shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif]"
          >
            <span>Get a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
