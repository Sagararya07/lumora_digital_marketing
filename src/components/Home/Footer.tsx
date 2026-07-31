import React from 'react';
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
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegalModal,
  onGoHome,
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
              <a href="#" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#2563EB] hover:bg-blue-50 transition-colors border border-[#E5E7EB]">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#2563EB] hover:bg-blue-50 transition-colors border border-[#E5E7EB]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#2563EB] hover:bg-blue-50 transition-colors border border-[#E5E7EB]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-[#F8FAFC] text-[#6B7280] hover:text-[#2563EB] hover:bg-blue-50 transition-colors border border-[#E5E7EB]">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-[#111827] font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-[#6B7280] font-normal">
              <li><a href="#services-section" className="hover:text-[#2563EB] transition-colors">Growth Strategy</a></li>
              <li><a href="#services-section" className="hover:text-[#2563EB] transition-colors">Demand Generation</a></li>
              <li><a href="#services-section" className="hover:text-[#2563EB] transition-colors">Performance Marketing</a></li>
              <li><a href="#services-section" className="hover:text-[#2563EB] transition-colors">AI Marketing Automation</a></li>
              <li><a href="#services-section" className="hover:text-[#2563EB] transition-colors">SEO Growth Engine</a></li>
              <li><a href="#services-section" className="hover:text-[#2563EB] transition-colors">Digital Experience</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-4">
            <h4 className="text-[#111827] font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Industries
            </h4>
            <ul className="space-y-2.5 text-[#6B7280] font-normal">
              <li><a href="#industries-section" className="hover:text-[#2563EB] transition-colors">SaaS</a></li>
              <li><a href="#industries-section" className="hover:text-[#2563EB] transition-colors">Manufacturing</a></li>
              <li><a href="#industries-section" className="hover:text-[#2563EB] transition-colors">Healthcare</a></li>
              <li><a href="#industries-section" className="hover:text-[#2563EB] transition-colors">Fintech</a></li>
              <li><a href="#industries-section" className="hover:text-[#2563EB] transition-colors">Real Estate</a></li>
              <li><a href="#industries-section" className="hover:text-[#2563EB] transition-colors">E-commerce</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-[#111827] font-extrabold uppercase tracking-wider text-xs font-['Plus_Jakarta_Sans',sans-serif]">
              Contact Us
            </h4>
            <div className="space-y-3 text-[#6B7280] font-normal">
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <a href="mailto:hello@lumora.com" className="hover:text-[#2563EB] transition-colors">
                  hello@lumora.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <a href="tel:+919876543210" className="hover:text-[#2563EB] transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                <span>Bangalore, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#6B7280] text-xs font-normal">
          <p>© {new Date().getFullYear()} Lumora. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-[#2563EB] transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => onOpenLegalModal('terms')} className="hover:text-[#2563EB] transition-colors">
              Terms of Service
            </button>
            <span>|</span>
            <button onClick={() => onOpenLegalModal('terms')} className="hover:text-[#2563EB] transition-colors">
              Careers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
