import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  ArrowRight,
  ChevronDown,
  ChevronRight,
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
  services,
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

  const resourceItems = dynamicPages.length > 0 
    ? dynamicPages.filter(p => p.isPublished)
    : coreServices;

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (digitalMarketingRef.current && !digitalMarketingRef.current.contains(e.target as Node)) {
        setDigitalMarketingOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: 'solutions' | 'resources') => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    if (activeSubMenu && activeSubMenu !== menu) {
      hoverTimeout.current = setTimeout(() => {
        setActiveSubMenu(menu);
      }, 200);
    } else {
      setActiveSubMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 200);
  };

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
              <div className="absolute top-full left-0 mt-3 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">

                {/* Solutions Flyout */}
                <div 
                  className="relative border-b border-slate-100 last:border-0"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActiveSubMenu(activeSubMenu === 'solutions' ? null : 'solutions')}
                    className="w-full text-left px-5 py-4 text-sm font-semibold text-slate-800 hover:text-[#5B8EE2] hover:bg-slate-50 transition-colors flex items-center justify-between rounded-t-2xl"
                  >
                    <span>Solutions</span>
                    <ChevronRight className={`w-4 h-4 transition-colors duration-200 ${activeSubMenu === 'solutions' ? 'text-[#5B8EE2]' : 'text-slate-400'}`} />
                  </button>

                  {activeSubMenu === 'solutions' && (
                    <div className="absolute top-0 left-full ml-1 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 px-3 animate-in fade-in slide-in-from-left-2 z-50 max-h-[60vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
                      {resourceItems.map((item, i) => (
                        <button
                          key={item.id || i}
                          onClick={() => {
                            handleNavClick(item.slug || item.id?.toString() || `service-${i}`);
                            setDigitalMarketingOpen(false);
                            setActiveSubMenu(null);
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-[#5B8EE2] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span className="truncate">{item.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#5B8EE2] transition-opacity shrink-0" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resources Flyout */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActiveSubMenu(activeSubMenu === 'resources' ? null : 'resources')}
                    className="w-full text-left px-5 py-4 text-sm font-semibold text-slate-800 hover:text-[#5B8EE2] hover:bg-slate-50 transition-colors flex items-center justify-between rounded-b-2xl"
                  >
                    <span>Resources</span>
                    <ChevronRight className={`w-4 h-4 transition-colors duration-200 ${activeSubMenu === 'resources' ? 'text-[#5B8EE2]' : 'text-slate-400'}`} />
                  </button>

                  {activeSubMenu === 'resources' && (
                    <div className="absolute top-0 left-full ml-1 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 px-3 animate-in fade-in slide-in-from-left-2 z-50 max-h-[60vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
                      {resourceItems.map((page) => (
                        <Link
                          key={page.id}
                          to={'isPublished' in page ? `/${page.slug}` : `/solutions/${page.slug}`}
                          onClick={() => {
                            setDigitalMarketingOpen(false);
                            setActiveSubMenu(null);
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-[#5B8EE2] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span className="truncate">{page.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#5B8EE2] transition-opacity shrink-0" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

        </nav>

        {/* Right Action CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={openConsultationModal}
            className="px-3 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-[10px] sm:text-xs font-bold tracking-wide shadow-lg shadow-blue-500/25 flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif]"
          >
            <span>Get a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
