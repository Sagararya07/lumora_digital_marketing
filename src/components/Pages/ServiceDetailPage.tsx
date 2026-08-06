import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { SiteContent, ServiceItem } from '../../types';

interface ServiceDetailPageProps {
  siteContent: SiteContent;
  onOpenLegalModal: (content: any) => void;
  onOpenConsultationModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  siteContent, 
  onOpenLegalModal,
  onOpenConsultationModal
}) => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = siteContent.services.find(s => s.slug === slug || s.id.toString() === slug);
    if (found) {
      setService(found);
    }
  }, [slug, siteContent.services]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] font-['Inter',sans-serif]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Service Not Found</h1>
          <Link to="/" className="text-[#5B8EE2] hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#F8FAFC]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5B8EE2]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 text-[#5B8EE2] font-semibold text-sm tracking-widest uppercase mb-4">
                <Link to="/" className="hover:text-blue-700 transition-colors">Solutions</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-400">{service.title}</span>
              </div>
              
              {service.badge && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase">
                  {service.badge}
                </span>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-[#6B7280] leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button 
                  onClick={onOpenConsultationModal}
                  className="bg-gradient-to-r from-[#5B8EE2] to-[#4676C2] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" /> Start Your Campaign
                </button>
              </div>
            </div>

            {/* Image Content */}
            {service.imageUrl && (
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500" />
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl relative z-10 border border-slate-100/50"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content & Details */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Rich Text Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#111827] mb-8 font-['Plus_Jakarta_Sans',sans-serif]">Strategy & Execution</h2>
              <div className="prose prose-lg prose-blue max-w-none text-[#4B5563]">
                <p className="whitespace-pre-line leading-loose text-lg">{service.fullDescription}</p>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-1 space-y-12">
              {/* Features */}
              {service.features && service.features.length > 0 && (
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-bold text-[#111827] mb-6">Key Capabilities</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#5B8EE2] flex-shrink-0" />
                        <span className="text-[#4B5563] font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deliverables */}
              {service.deliverables && service.deliverables.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-6 border-b border-slate-200 pb-4">What You Get</h3>
                  <ul className="space-y-4">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-400" />
                        <span className="text-[#4B5563]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommended For */}
              {service.recommendedFor && (
                <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-8 rounded-3xl text-white">
                  <h3 className="text-lg font-bold text-blue-200 mb-2 uppercase tracking-wide">Best Fit For</h3>
                  <p className="text-lg leading-relaxed">{service.recommendedFor}</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Ready to Dominate <span className="text-[#5B8EE2]">{service.title}</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Book a free strategy session with our growth experts and see exactly how we can scale your revenue.
          </p>
          <button
            onClick={onOpenConsultationModal}
            className="bg-white text-[#111827] px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-3 transform hover:-translate-y-1"
          >
            Claim Your Free Audit <ArrowLeft className="w-6 h-6 rotate-180" />
          </button>
        </div>
      </section>

    </div>
  );
};
