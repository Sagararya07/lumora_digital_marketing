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
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Filter ONLY Lead Generation Services for Resources sub-menu
  const leadGenPages = dynamicPages.filter(
    (p) => p.isPublished && (p.slug.includes('lead-generation') || p.title.toLowerCase().includes('lead generation'))
  );

  const resourceItems = leadGenPages.length > 0 ? leadGenPages : [
    { id: 'lead-gen-default', slug: 'lead-generation-services', title: 'Lead Generation Services' }
  ];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
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
            className="p-2.5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB] hover:bg-blue-50 text-slate-700 hover:text-[#2563EB] transition-all flex items-center gap-2 group cursor-pointer"
            title="Open Menu Drawer"
            aria-label="Open Navigation Menu Drawer"
          >
            <Menu className="w-5 h-5 text-[#2563EB] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block text-xs font-extrabold text-[#111827] group-hover:text-[#2563EB]">
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

        {/* Center Desktop Navigation Menu: ONLY Solutions & Resources */}
        <nav className="hidden lg:flex items-center gap-10 font-['Plus_Jakarta_Sans',sans-serif] text-sm font-bold text-[#111827]">
          
          {/* 1. Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-1.5 py-2 text-slate-800 hover:text-[#2563EB] transition-colors"
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#2563EB]' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden py-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-4 py-1.5 border-b border-slate-100 mb-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Solutions</p>
                </div>
                {[
                  { name: 'Growth Strategy', id: 'services-section' },
                  { name: 'Demand Generation', id: 'services-section' },
                  { name: 'Performance Marketing', id: 'services-section' },
                  { name: 'AI Marketing Automation', id: 'services-section' },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => { handleNavClick(item.id); setSolutionsOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. Resources Dropdown: ONLY Lead Generation Services */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center gap-1.5 py-2 text-slate-800 hover:text-[#2563EB] transition-colors"
            >
              <span>Resources</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${resourcesOpen ? 'rotate-180 text-[#2563EB]' : ''}`} />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-4 py-1.5 border-b border-slate-100 mb-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Resources</p>
                </div>
                {resourceItems.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => {
                      onSelectDynamicPage(page.slug);
                      setResourcesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs font-semibold text-[#2563EB] hover:bg-blue-50 transition-colors flex items-center justify-between"
                  >
                    <span className="truncate font-extrabold">Lead Generation Services</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
                  </button>
                ))}
              </div>
            )}
          </div>

        </nav>

        {/* Right Action CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openConsultationModal}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-xs font-bold tracking-wide shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif]"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
