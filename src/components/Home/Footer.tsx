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
  industries?: any[];
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'refund') => void;
  openConsultationModal: () => void;
  onGoHome: () => void;
  onSelectDynamicPage?: (slug: string) => void;
  onNavSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  contactInfo,
  services,
  industries,
  onOpenLegalModal,
  onGoHome,
  onNavSection,
}) => {
  return (
    <footer id="main-footer" className="bg-[#FFFFFF] text-[#6B7280] text-xs border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">

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
              <a href="https://www.linkedin.com/company/cypher-swift-digital-marketing-and-branding-with-lumora-s/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#5B8EE2] hover:bg-[#F2F6FC] transition-colors border border-[#E5E7EB]">
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
          <div className="space-y-4 lg:col-span-2">
            <h4 className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Solutions
            </h4>
            <div className="max-h-[135px] overflow-y-auto md:overflow-hidden md:hover:overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 md:[&::-webkit-scrollbar-thumb]:bg-gray-100 md:hover:[&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full transition-all duration-300 touch-pan-y">
              <ul className="grid grid-cols-1 gap-y-2.5 text-[#6B7280] font-normal">
                {(services && services.length > 0 ? services : [
                  { title: 'Social Media Marketing', slug: 'social-media-marketing', id: 'social-media-marketing' },
                  { title: 'Search Engine Optimization (SEO)', slug: 'seo-growth-engine', id: 'seo-growth-engine' },
                  { title: 'Performance Marketing', slug: 'performance-marketing', id: 'performance-marketing' },
                  { title: 'Lead Generation', slug: 'lead-generation', id: 'lead-generation' },
                  { title: 'Retargeting Marketing', slug: 'retargeting-marketing', id: 'retargeting-marketing' },
                  { title: 'AI Marketing Automation', slug: 'ai-marketing-automation', id: 'ai-marketing-automation' },
                ]).map((item, i) => (
                  <li key={i} className="w-full">
                    <button 
                      onClick={() => onNavSection?.(item.slug || item.id?.toString() || `service-${i}`)}
                      className="hover:text-[#5B8EE2] transition-colors text-left whitespace-nowrap truncate w-full block"
                      title={item.title.split(' - ')[0]}
                    >
                      {item.title.split(' - ')[0]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-4">
            <h4 className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Industries
            </h4>
            <div className="max-h-[135px] overflow-y-auto md:overflow-hidden md:hover:overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 md:[&::-webkit-scrollbar-thumb]:bg-gray-100 md:hover:[&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full transition-all duration-300 touch-pan-y">
              <ul className="grid grid-cols-1 gap-y-2.5 text-[#6B7280] font-normal">
                {(industries && industries.length > 0 ? industries : [
                  { name: 'SaaS', id: 'i4' },
                  { name: 'Manufacturing', id: 'i5' },
                  { name: 'Healthcare', id: 'i1' },
                  { name: 'Fintech', id: 'i3' },
                  { name: 'Real Estate', id: 'i2' },
                  { name: 'E-commerce', id: 'i6' }
                ]).map((ind: any, i: number) => (
                  <li key={i} className="w-full">
                    <button 
                      onClick={() => onNavSection?.(`industry-card-${ind.id}`)} 
                      className="hover:text-[#5B8EE2] transition-colors text-left whitespace-nowrap truncate w-full block"
                      title={ind.name}
                    >
                      {ind.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Contact Us
            </h4>
            <div className="space-y-3 text-[#6B7280] font-normal">
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#5B8EE2] shrink-0" />
                <a href={`mailto:${contactInfo?.email || 'contact@lumora.ai'}`} className="hover:text-[#5B8EE2] transition-colors break-all">
                  {contactInfo?.email || 'contact@lumora.ai'}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#5B8EE2] shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href={`https://wa.me/${(contactInfo?.whatsapp || contactInfo?.phone || '919998887766').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#5B8EE2] transition-colors">
                  {contactInfo?.whatsapp || contactInfo?.phone || '+91 999 888 7766'}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5B8EE2] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{contactInfo?.address || 'Innovation Tower, Tech Park Boulevard'}</span>
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
