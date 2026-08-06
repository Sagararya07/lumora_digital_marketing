import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, Home, Info, FolderDot, Zap, MessageSquare } from 'lucide-react';
import { LumoraLogo } from '../common/LumoraLogo';
import { DynamicPage } from '../../types';
import { ChevronDown } from 'lucide-react';

interface LeftSidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openConsultationModal: () => void;
  isOpenMobile: boolean;
  setIsOpenMobile: (open: boolean) => void;
  activeDynamicSlug: string | null;
  dynamicPages?: DynamicPage[];
  onSelectDynamicPage?: (slug: string) => void;
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  currentTab,
  setCurrentTab,
  openConsultationModal,
  isOpenMobile,
  setIsOpenMobile,
  activeDynamicSlug,
  dynamicPages,
}) => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', path: '/', label: 'Home', icon: Home },
    { id: 'about', path: '/about', label: 'About', icon: Info },
    { id: 'portfolio', path: '/portfolio', label: 'Portfolio', icon: FolderDot },
    { id: 'rnd', path: '/rnd', label: 'Rnd', icon: Zap },
    { id: 'get-a-consultation', path: '/get-a-consultation', label: 'Get a Consultation', icon: MessageSquare },
  ];

  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<'solutions' | 'resources' | null>(null);

  const coreServices = [
    { id: 'social-media-marketing', slug: 'social-media-marketing', title: 'Social Media Marketing' },
    { id: 'seo-growth-engine', slug: 'seo-growth-engine', title: 'Search Engine Optimization (SEO)' },
    { id: 'performance-marketing', slug: 'performance-marketing', title: 'Performance Marketing' },
    { id: 'lead-generation', slug: 'lead-generation', title: 'Lead Generation' },
    { id: 'retargeting-marketing', slug: 'retargeting-marketing', title: 'Retargeting Marketing' },
    { id: 'ai-marketing-automation', slug: 'ai-marketing-automation', title: 'AI Marketing Automation' }
  ];

  const resourceItems = dynamicPages && dynamicPages.length > 0 
    ? dynamicPages.filter(p => p.isPublished)
    : coreServices;

  const handleNavClick = (item: { id: string; path: string }) => {
    if (item.path === '/') {
      navigate('/');
    } else {
      navigate(item.path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpenMobile(false);
  };

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity cursor-pointer"
          onClick={() => setIsOpenMobile(false)}
        />
      )}

      {/* Side Menu Drawer Container */}
      <aside
        id="left-sidebar-navigation"
        className={`fixed top-0 left-0 bottom-0 w-[260px] sm:w-[280px] z-50 bg-white text-[#111827] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out border-r border-[#E5E7EB] ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header with Logo & Close Button */}
        <div className="px-6 py-6 border-b border-[#E5E7EB] flex items-center justify-between">
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpenMobile(false);
            }}
            className="flex items-center gap-2 focus:outline-none"
          >
            <LumoraLogo size="sm" />
          </button>
          
          <button
            onClick={() => setIsOpenMobile(false)}
            className="p-2 text-slate-500 hover:text-[#111827] rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close Navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Nav Items */}
        <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar space-y-1.5">
          <div className="px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">
            Navigation Drawer
          </div>
          
          {navItems.map((item, index) => {
            const isActive = activeDynamicSlug === item.id || (activeDynamicSlug === null && item.id === 'home');
            const ItemIcon = item.icon;
            
            return (
              <React.Fragment key={item.id}>
                {index === 1 && (
                  <div className="w-full text-left bg-white rounded-2xl font-['Plus_Jakarta_Sans',sans-serif]">
                    <button
                      onClick={() => { setDigitalMarketingOpen(!digitalMarketingOpen); setActiveSubMenu(null); }}
                      className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm font-extrabold transition-all flex items-center justify-between ${
                        activeDynamicSlug && activeDynamicSlug !== 'admin'
                          ? 'text-[#5B8EE2] bg-[#F2F6FC] border border-blue-200 shadow-xs'
                          : 'text-[#111827] hover:text-[#5B8EE2] hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Zap className={`w-4 h-4 ${activeDynamicSlug && activeDynamicSlug !== 'admin' ? 'text-[#5B8EE2]' : 'text-slate-400'}`} />
                        <span>Digital Marketing</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${digitalMarketingOpen ? 'rotate-180 text-[#5B8EE2]' : 'opacity-50'}`} />
                    </button>
                    {digitalMarketingOpen && (
                      <div className="mt-1 pl-4 space-y-1 bg-slate-50 rounded-xl p-2 animate-in fade-in slide-in-from-top-2">
                        <div className="flex flex-col border border-slate-200 rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() => setActiveSubMenu(activeSubMenu === 'solutions' ? null : 'solutions')}
                            className="text-left px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between border-b border-slate-100"
                          >
                            <span>Solutions</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeSubMenu === 'solutions' ? 'rotate-180' : ''}`} />
                          </button>
                          {activeSubMenu === 'solutions' && (
                            <div className="flex flex-col bg-slate-50">
                              {resourceItems.map((rItem, i) => (
                                <button
                                  key={`sol-${rItem.id || i}`}
                                  onClick={() => handleNavClick({ id: rItem.slug || rItem.id?.toString() || '', path: `/${rItem.slug || rItem.id}` })}
                                  className="text-left px-6 py-2.5 text-xs font-medium text-slate-600 hover:text-[#5B8EE2] truncate"
                                >
                                  {rItem.title.split('-')[0].trim()}
                                </button>
                              ))}
                            </div>
                          )}
                          <button
                            onClick={() => setActiveSubMenu(activeSubMenu === 'resources' ? null : 'resources')}
                            className="text-left px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                          >
                            <span>Resources</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeSubMenu === 'resources' ? 'rotate-180' : ''}`} />
                          </button>
                          {activeSubMenu === 'resources' && (
                            <div className="flex flex-col bg-slate-50 border-t border-slate-100">
                              {resourceItems.map((rItem, i) => (
                                <button
                                  key={`res-${rItem.id || i}`}
                                  onClick={() => handleNavClick({ id: rItem.slug || rItem.id?.toString() || '', path: `/${rItem.slug || rItem.id}` })}
                                  className="text-left px-6 py-2.5 text-xs font-medium text-slate-600 hover:text-[#5B8EE2] truncate"
                                >
                                  {rItem.title.split('-')[0].trim()}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <button
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm font-extrabold transition-all flex items-center justify-between font-['Plus_Jakarta_Sans',sans-serif] ${
                    isActive
                      ? 'text-[#5B8EE2] bg-[#F2F6FC] border border-blue-200 shadow-xs'
                      : 'text-[#111827] hover:text-[#5B8EE2] hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ItemIcon className={`w-4 h-4 ${isActive ? 'text-[#5B8EE2]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-[#E5E7EB] bg-[#F8FAFC]">
          <button
            onClick={() => {
              setIsOpenMobile(false);
              navigate('/get-a-consultation');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full py-4 px-4 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 transition-all font-['Plus_Jakarta_Sans',sans-serif]"
          >
            <span>Book a Strategy Call</span>
          </button>
        </div>
      </aside>
    </>
  );
};
