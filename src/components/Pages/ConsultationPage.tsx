import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Sparkles, 
  MessageSquare, 
  Calendar, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { SiteContent } from '../../types';
import { DetailedConsultationForm } from './DetailedConsultationForm';

interface ConsultationPageProps {
  siteContent: SiteContent;
  onGoHome: () => void;
  openConsultationModal?: (source: string) => void;
}

export const ConsultationPage: React.FC<ConsultationPageProps> = ({
  siteContent,
  onGoHome,
}) => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  return (
    <div className="min-h-screen bg-white text-[#111827] font-['Inter',sans-serif]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-8 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-[#E5E7EB]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] pointer-events-none bg-[#729EE6]/20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px] pointer-events-none bg-purple-500/20" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Calendar className="w-3.5 h-3.5 text-[#5B8EE2] animate-pulse" />
              <span>{serviceParam ? 'SERVICE REQUEST' : 'STRATEGY CONSULTATION BOOKING'}</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
            {serviceParam ? (
              <>
                Request for{' '}
                <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                  {serviceParam}
                </span>
              </>
            ) : (
              <>
                Book Your Free 1-on-1 Growth Strategy Session with{' '}
                <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                  Lumora Experts
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-normal">
            {serviceParam
              ? `Fill out the form below to request our ${serviceParam} service. Our team will get back to you within 24 hours.`
              : 'Discover how our data-backed PPC, SEO, and AI funnel automation can scale your pipeline revenue. No sales pitch—just actionable growth roadmap insights.'}
          </p>
        </div>
      </section>

      {/* 3. Main Embedded Detailed Form */}
      <div className="px-4 relative z-20">
        <DetailedConsultationForm 
          sourcePage={serviceParam ? `Service Request: ${serviceParam}` : 'Dedicated Consultation Page'}
        />
      </div>

      {/* 2. What Happens On The Call & Direct Contact Info Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Full Funnel Audit', desc: 'We analyze your current ad accounts, website conversion rates, and competitor positioning.' },
              { num: '02', title: 'Custom Growth Roadmap', desc: 'We deliver a 90-day action plan detailing channel spend, keyword targets, and expected CAC.' },
              { num: '03', title: 'ROI Revenue Forecast', desc: 'Clear projection of monthly qualified lead volume and expected pipeline return.' },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-[#F2F6FC] border border-blue-100 text-[#5B8EE2] font-extrabold text-xs flex items-center justify-center mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                  {step.num}
                </div>
                <h3 className="text-lg font-extrabold text-[#111827] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">{step.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
