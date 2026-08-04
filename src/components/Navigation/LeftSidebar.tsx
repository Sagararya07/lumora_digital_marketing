import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, Home, Info, FolderDot, Zap, MessageSquare } from 'lucide-react';
import { LumoraLogo } from '../common/LumoraLogo';
import { DynamicPage } from '../../types';

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
}) => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', path: '/', label: 'Home', icon: Home },
    { id: 'about', path: '/about', label: 'About', icon: Info },
    { id: 'portfolio', path: '/portfolio', label: 'Portfolio', icon: FolderDot },
    { id: 'rnd', path: '/rnd', label: 'Rnd', icon: Zap },
    { id: 'get-a-consultation', path: '/get-a-consultation', label: 'Get a Consultation', icon: MessageSquare },
  ];

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
          
          {navItems.map((item) => {
            const isActive = activeDynamicSlug === item.id || (activeDynamicSlug === null && item.id === 'home');
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
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
            className="w-full py-4 px-4 rounded-full bg-gradient-to-r from-[#5B8EE2] to-[#D6A67B] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 transition-all font-['Plus_Jakarta_Sans',sans-serif]"
          >
            <span>Book a Strategy Call</span>
          </button>
        </div>
      </aside>
    </>
  );
};
