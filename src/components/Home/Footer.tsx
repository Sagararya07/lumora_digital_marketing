import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { LumoraLogo } from '../common/LumoraLogo';

interface FooterProps {
  contactInfo?: any;
  socialLinks?: any;
  footerTagline?: string;
  services?: any[];
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'refund') => void;
  openConsultationModal: () => void;
  onGoHome: () => void;
  onSelectDynamicPage?: (slug: string) => void;
  onNavSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  services,
  onOpenLegalModal,
  onGoHome,
  onNavSection,
}) => {
  return (
    <footer id="main-footer" className="bg-[#FFFFFF] text-[#6B7280] text-xs border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Column 1: Lumora Logo & About */}
          <div className="lg:col-span-2 space-y-5">
            <button onClick={onGoHome} className="focus:outline-none text-left">
              <LumoraLogo size="lg" />
            </button>

            <p className="text-[#6B7280] leading-relaxed max-w-sm font-normal text-xs sm:text-sm">
              Lumora is an AI-first growth company that helps businesses attract, convert and retain more customers through intelligent marketing systems.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#5B8EE2] hover:bg-[#F2F6FC] transition-colors border border-[#E5E7EB]">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#5B8EE2] hover:bg-[#F2F6FC] transition-colors border border-[#E5E7EB]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#5B8EE2] hover:bg-[#F2F6FC] transition-colors border border-[#E5E7EB]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#5B8EE2] hover:bg-[#F2F6FC] transition-colors border border-[#E5E7EB]">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-[#6B7280] font-normal">
              {(services && services.length > 0 ? services : [
                { title: 'Social Media Marketing', slug: 'social-media-marketing', id: 'social-media-marketing' },
                { title: 'Search Engine Optimization (SEO)', slug: 'seo-growth-engine', id: 'seo-growth-engine' },
                { title: 'Performance Marketing', slug: 'performance-marketing', id: 'performance-marketing' },
                { title: 'Lead Generation', slug: 'lead-generation', id: 'lead-generation' },
                { title: 'Retargeting Marketing', slug: 'retargeting-marketing', id: 'retargeting-marketing' },
                { title: 'AI Marketing Automation', slug: 'ai-marketing-automation', id: 'ai-marketing-automation' },
              ]).map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => onNavSection?.(item.id?.toString() || item.slug || `service-${i}`)}
                    className="hover:text-[#5B8EE2] transition-colors text-left"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-4">
            <h4 className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Industries
            </h4>
            <ul className="space-y-2.5 text-[#6B7280] font-normal">
              <li><button onClick={() => onNavSection?.('industries-section')} className="hover:text-[#5B8EE2] transition-colors">SaaS</button></li>
              <li><button onClick={() => onNavSection?.('industries-section')} className="hover:text-[#5B8EE2] transition-colors">Manufacturing</button></li>
              <li><button onClick={() => onNavSection?.('industries-section')} className="hover:text-[#5B8EE2] transition-colors">Healthcare</button></li>
              <li><button onClick={() => onNavSection?.('industries-section')} className="hover:text-[#5B8EE2] transition-colors">Fintech</button></li>
              <li><button onClick={() => onNavSection?.('industries-section')} className="hover:text-[#5B8EE2] transition-colors">Real Estate</button></li>
              <li><button onClick={() => onNavSection?.('industries-section')} className="hover:text-[#5B8EE2] transition-colors">E-commerce</button></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Contact Us
            </h4>
            <div className="space-y-3 text-[#6B7280] font-normal">
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#5B8EE2]" />
                <a href="mailto:cypherswiftinfotech@gmail.com" className="hover:text-[#5B8EE2] transition-colors">
                  cypherswiftinfotech@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#5B8EE2]" />
                <a href="tel:+917204468429" className="hover:text-[#5B8EE2] transition-colors">
                  +91 72044 68429
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#5B8EE2]" />
                <span>Bangalore, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#6B7280] text-xs font-normal">
          <p>© {new Date().getFullYear()} <a href="https://www.cypherswift.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B8EE2] transition-colors">CypherSwift</a>. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-[#5B8EE2] transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => onOpenLegalModal('terms')} className="hover:text-[#5B8EE2] transition-colors">
              Terms of Service
            </button>
            <span>|</span>
            <button onClick={() => onOpenLegalModal('terms')} className="hover:text-[#5B8EE2] transition-colors">
              Careers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
