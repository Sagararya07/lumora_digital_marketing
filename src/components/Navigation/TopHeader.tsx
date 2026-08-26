import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import {
  Menu,
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { DynamicPage, ServiceItem, SiteContent } from '../../types';
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
  siteContent?: SiteContent;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  onOpenMobileNav,
  openConsultationModal,
  dynamicPages,
  services,
  onSelectDynamicPage,
  onGoHome,
  onNavSection,
  activeDynamicSlug,
  siteContent,
}) => {
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);

  const digitalMarketingRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (digitalMarketingRef.current && !digitalMarketingRef.current.contains(e.target as Node)) {
        setDigitalMarketingOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const mainHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMainMouseEnter = () => {
    if (mainHoverTimeout.current) clearTimeout(mainHoverTimeout.current);
    setDigitalMarketingOpen(true);
  };

  const handleMainMouseLeave = () => {
    if (mainHoverTimeout.current) clearTimeout(mainHoverTimeout.current);
    mainHoverTimeout.current = setTimeout(() => {
      setDigitalMarketingOpen(false);
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


          {/* Lumora Logo (Default Clicking Returns to Home) */}
          <button
            onClick={onGoHome}
            className="relative flex items-center justify-center shrink-0 text-left focus:outline-none group py-2 px-2 mt-1 h-16 w-32"
            title="Lumora Home"
          >
            {/* Animated Glow Effect always blinking */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full blur-xl opacity-100 animate-pulse pointer-events-none scale-[1.3]"></div>
            
            <div className="relative z-10 scale-[1.3] sm:scale-[1.5] transition-transform duration-500 group-hover:scale-[1.4] sm:group-hover:scale-[1.6] pointer-events-none">
              <div className="animate-pulse-scale">
                <LumoraLogo size="lg" />
              </div>
            </div>
          </button>
        </div>

        {/* Center Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-10 font-['Plus_Jakarta_Sans',sans-serif] text-sm font-bold text-[#111827]">

          <div 
            className="relative" 
            ref={digitalMarketingRef}
            onMouseEnter={handleMainMouseEnter}
            onMouseLeave={handleMainMouseLeave}
          >
            <button
              onClick={() => { setDigitalMarketingOpen(!digitalMarketingOpen); }}
              className="flex items-center gap-1.5 py-2 text-[#5B8EE2] hover:text-[#4676C2] transition-colors"
            >
              <span>Lumora's Digital Marketing & Branding</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${digitalMarketingOpen ? 'rotate-180' : ''}`} />
            </button>

            {digitalMarketingOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[900px] max-w-[95vw] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 p-6">
                {/* Scrollable container — shows 3 rows, scrolls for more */}
                <div
                  className="overflow-y-auto pr-1"
                  style={{
                    maxHeight: '168px', /* ~3 rows × 48px item height + 2 × 12px gap */
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#cbd5e1 transparent',
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
                    {(services || [])
                      .filter((s: any) => s.position === 'Header' || s.position === 'Both' || !s.position)
                      .map((item, i) => {
                      const IconComponent = (LucideIcons as any)[item.iconName || 'CheckCircle'] || LucideIcons.CheckCircle;
                      
                      return (
                      <button
                        key={item.id || i}
                        onClick={() => {
                          if (window.location.pathname !== '/') {
                            onGoHome();
                            setTimeout(() => {
                              onNavSection?.(item.slug || item.id || '');
                            }, 300);
                          } else {
                            onNavSection?.(item.slug || item.id || '');
                          }
                          setDigitalMarketingOpen(false);
                        }}
                        className="text-left text-sm font-medium text-slate-600 hover:text-[#5B8EE2] transition-colors flex items-center gap-3 group p-2 -ml-2 rounded-xl hover:bg-slate-50"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm flex items-center justify-center shrink-0 transition-all border border-transparent group-hover:border-[#5B8EE2]/20">
                          <IconComponent className="w-4 h-4 text-slate-500 group-hover:text-[#5B8EE2] transition-colors" />
                        </div>
                        <span className="truncate">{item.title}</span>
                      </button>
                    )})}
                  </div>
                </div>
              </div>
            )}
          </div>

        </nav>

        {/* Right Action CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {siteContent?.navigationVisibility?.showConsultation !== false && (
            <button
              onClick={openConsultationModal}
              className="px-3 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-[10px] sm:text-xs font-bold tracking-wide shadow-lg shadow-blue-500/25 flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          )}

          {/* Top Right Menu Icon Button (Opens Left Drawer) */}
          <button
            id="right-top-menu-icon-btn"
            onClick={onOpenMobileNav}
            className="p-2.5 sm:p-3 min-w-[44px] min-h-[44px] rounded-full bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#5B8EE2] hover:bg-[#F2F6FC] text-slate-700 hover:text-[#5B8EE2] transition-all flex items-center justify-center group cursor-pointer"
            title="Open Menu Drawer"
            aria-label="Open Navigation Menu Drawer"
          >
            <Menu className="w-5 h-5 text-[#5B8EE2] group-hover:scale-110 transition-transform" />
          </button>
        </div>

      </div>
    </header>
  );
};
