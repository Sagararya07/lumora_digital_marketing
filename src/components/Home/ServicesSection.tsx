import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import {
  TrendingUp, Users, Target, Bot, Globe, Search, ArrowRight, Sparkles,
  Share2, Megaphone, Repeat, CheckCircle2, Package, Link as LinkIcon,
} from 'lucide-react';
import { ServiceItem } from '../../types';
import { getFallbackServiceDetails } from '../../data/serviceDetails';

interface ServicesProps {
  services?: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
  openConsultationModal: () => void;
}

const mockSolutions = [
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Build a powerful brand presence across Instagram, LinkedIn, Facebook, X, and YouTube with high-converting content.',
    fullDescription: 'Transform your social presence into a powerful growth engine. We create scroll-stopping content and engage with your audience to build brand loyalty and drive conversions. Our data-backed approach identifies the exact content formats, posting cadences, and audience segments that maximise organic reach and paid amplification across every platform.',
    icon: 'Share2',
    gradient: 'from-blue-500 to-indigo-600',
    tag: '01 / SOCIAL MEDIA',
    image: '/images/services/social_media_marketing_1785498376145.png',
    features: ['Platform-specific content strategy', 'Community management & engagement', 'Influencer collaborations', 'Trend analysis & viral content creation', 'Social listening & brand monitoring'],
    deliverables: ['Monthly content calendars', 'Custom branded graphics & reels', 'Weekly performance reports', 'Audience growth metrics'],
  },
  {
    id: 'seo-growth-engine',
    title: 'Search Engine Optimization (SEO)',
    shortDescription: 'Dominate Google search results with technical SEO, content strategy, and high-authority link building.',
    fullDescription: 'Climb the search rankings and dominate your niche. Our technical and content-driven SEO strategies ensure your website captures high-intent traffic directly from search engines. From deep keyword mapping to authority link building, every action is measured against organic traffic growth and revenue impact.',
    icon: 'Search',
    gradient: 'from-orange-500 to-amber-600',
    tag: '02 / SEO',
    image: '/images/services/seo_marketing_1785498386235.png',
    features: ['Comprehensive site audits', 'High-intent keyword research', 'On-page technical optimization', 'High-authority backlink building', 'Local SEO & Google Business Profile'],
    deliverables: ['Detailed SEO audit report', 'Content gap analysis', 'Monthly ranking & traffic reports', 'Technical error resolution logs'],
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    shortDescription: 'AI-optimized ad campaigns across Google, Meta, and LinkedIn laser-focused on ROI, sales, and conversions.',
    fullDescription: 'Maximize your return on ad spend with precision-targeted campaigns. We leverage data and AI to deliver the right message to the right audience at the perfect time. Every dollar is tracked back to real revenue — not vanity metrics — with live dashboards you can access 24/7.',
    icon: 'Target',
    gradient: 'from-pink-500 to-rose-600',
    tag: '03 / PAID ADS',
    image: '/images/services/performance_marketing_1785498399389.png',
    features: ['Omnichannel campaigns (Google, Meta, LinkedIn)', 'A/B testing of ad copy & creatives', 'Advanced audience targeting', 'Conversion Rate Optimization (CRO)', 'Real-time bid adjustments'],
    deliverables: ['Custom ad creatives & copywriting', 'Campaign setup & structuring', 'Weekly ROI & ROAS reports', 'Pixel setup & conversion tracking'],
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'Predictable multi-channel B2B & B2C acquisition funnels that generate qualified, sales-ready inquiries.',
    fullDescription: 'Stop chasing cold leads. We build intelligent, automated funnels that attract, educate, and convert high-quality prospects into ready-to-buy clients. From cold outreach to nurture sequences, every touchpoint is engineered to lower your Customer Acquisition Cost and shorten your sales cycle.',
    icon: 'Users',
    gradient: 'from-emerald-500 to-teal-600',
    tag: '04 / ACQUISITION',
    image: '/images/services/lead_generation_1785498418027.png',
    features: ['Multi-channel acquisition funnels', 'B2B cold outreach campaigns', 'Lead magnet creation', 'Automated follow-up sequences', 'Account-Based Marketing (ABM)'],
    deliverables: ['Qualified sales appointments', 'Verified lead lists', 'Automated email sequences', 'High-converting landing pages'],
  },
  {
    id: 'retargeting-marketing',
    title: 'Retargeting Marketing',
    shortDescription: 'Re-engage dropped website visitors across display networks and social feeds to boost conversion rates.',
    fullDescription: "Don't let your traffic slip away. We strategically re-engage past visitors across the web, reminding them of what they left behind and turning bounced traffic into loyal customers. Behavioral segmentation ensures the right creative reaches the right person at exactly the right moment in their decision journey.",
    icon: 'Repeat',
    gradient: 'from-amber-500 to-orange-500',
    tag: '05 / RETARGETING',
    image: '/images/services/retargeting_marketing_1785498428208.png',
    features: ['Cross-platform tracking pixels', 'Dynamic product ads', 'Abandoned cart recovery sequences', 'Behavioral segmentation', 'Frequency capping & ad fatigue management'],
    deliverables: ['Retargeting campaign blueprints', 'Dynamic ad creatives', 'Audience segmentation lists', 'ROAS tracking dashboards'],
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation',
    shortDescription: 'Smart CRM workflows, automated lead nurturing, and AI chatbots to convert visitors faster.',
    fullDescription: 'Automate your growth. We implement cutting-edge AI and automation tools to streamline your marketing, nurture leads instantly, and close deals faster. Our intelligent systems work around the clock — scoring leads, personalising outreach, and triggering actions the moment a prospect shows intent.',
    icon: 'Bot',
    gradient: 'from-cyan-500 to-blue-600',
    tag: '06 / AUTOMATION',
    image: '/images/services/ai_marketing_1785498439194.png',
    features: ['Smart CRM integration', 'AI-powered chatbots', 'Automated lead scoring', 'Personalized email workflows', 'Data enrichment & predictive analytics'],
    deliverables: ['Fully mapped customer journeys', 'Custom Chatbot deployment', 'Automated sequence templates', 'Monthly workflow optimization'],
  }
];

export const ServicesSection: React.FC<ServicesProps> = ({
  services = [],
  onSelectService,
  openConsultationModal,
}) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const displayItems = services.length >= 6 ? services : mockSolutions;
  const currentItems = displayItems.slice(0, visibleCount);

  useEffect(() => {
    const handleNavToService = (e: CustomEvent) => {
      const targetId = e.detail;
      const index = displayItems.findIndex((item, idx) => {
        const fallback = mockSolutions[idx % mockSolutions.length];
        return (item.slug || item.id || fallback.id) === targetId;
      });
      if (index >= visibleCount) {
        setVisibleCount(displayItems.length);
      }
    };
    window.addEventListener('navToService', handleNavToService as EventListener);
    return () => window.removeEventListener('navToService', handleNavToService as EventListener);
  }, [displayItems, visibleCount]);

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5B8EE2] bg-[#F2F6FC]/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-blue-200 shadow-sm inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-pulse" /> OUR DIGITAL MARKETING SERVICES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
            AI-Powered Solutions for Every{' '}
            <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
              Stage of Growth
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] font-medium max-w-2xl mx-auto leading-relaxed">
            From strategy to execution, we build intelligent systems that deliver measurable, scalable, and predictable revenue results.
          </p>
        </div>

        {/* Zig-Zag Alternating Layout */}
        <div className="space-y-20 sm:space-y-28">
          {currentItems.map((item, idx) => {
            const fallback = mockSolutions[idx % mockSolutions.length];
            const title = item.title || fallback.title;
            const shortDesc = item.shortDescription || fallback.shortDescription;
            const fullDesc = (item as any).fullDescription || fallback.fullDescription;
            const image = (item as any).imageUrl || (item as any).image_url || (item as any).image || fallback.image;
            const features = (item.features?.length ? item.features : fallback.features) || [];
            const deliverables = (item.deliverables?.length ? item.deliverables : fallback.deliverables) || [];
            const iconName = (item as any).iconName || fallback.icon || 'CheckCircle';
            const gradient = fallback.gradient;
            const tag = `${String(idx + 1).padStart(2, '0')} / ${title.split(' ')[0].toUpperCase()}`;
            const isEven = idx % 2 === 0;

            const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.CheckCircle;

            return (
              <div
                key={item.id || idx}
                id={item.slug || item.id || fallback.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center scroll-mt-24`}
              >
                {/* ── Image Panel ── */}
                <div className="w-full lg:w-[48%] relative group shrink-0">
                  {/* Glow blob behind image */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${gradient} opacity-10 rounded-[2.5rem] blur-2xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.10)] border border-slate-100">
                    <img
                      src={image}
                      alt={title}
                      className="w-full aspect-video object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                    {/* Icon Badge pinned to bottom-left of image */}
                    <div className={`absolute bottom-4 left-4 flex items-center gap-2.5 bg-gradient-to-br ${gradient} text-white px-4 py-2.5 rounded-2xl shadow-lg backdrop-blur-sm`}>
                      <IconComponent className="w-5 h-5 text-white shrink-0" />
                      <span className="text-xs font-extrabold tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                        {tag}
                      </span>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className={`absolute -bottom-5 ${isEven ? '-right-5' : '-left-5'} w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl -z-10 opacity-20`} />
                </div>

                {/* ── Content Panel ── */}
                <div className="w-full lg:w-[52%] flex flex-col justify-center space-y-6">

                  {/* Icon + Tag row */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                      {tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                    {title}
                  </h3>

                  {/* Short tagline */}
                  <p className="text-base font-semibold text-[#374151] leading-relaxed border-l-4 border-[#5B8EE2]/40 pl-4 italic">
                    {shortDesc}
                  </p>

                  {/* Full Description */}
                  <p className="text-base text-[#6B7280] leading-relaxed">
                    {fullDesc}
                  </p>

                  {/* Features & Deliverables grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    {/* What We Do */}
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#5B8EE2] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                        What We Do
                      </p>
                      <ul className="space-y-2">
                        {features.slice(0, 5).map((f, fi) => (
                          <li key={fi} className="flex items-start gap-2 text-sm text-[#374151]">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What You Get */}
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#D6A67B] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                        What You Get
                      </p>
                      <ul className="space-y-2">
                        {deliverables.slice(0, 4).map((d, di) => (
                          <li key={di} className="flex items-start gap-2 text-sm text-[#374151]">
                            <Package className="w-4 h-4 text-[#D6A67B] shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => {
                        const baseSlug = (item as any).slug || fallback.id;
                        const defaultData = getFallbackServiceDetails(baseSlug, item.title || fallback.title);
                        onSelectService({
                          ...item,
                          slug: baseSlug,
                          features: item.features?.length ? item.features : defaultData.features,
                          deliverables: item.deliverables?.length ? item.deliverables : defaultData.deliverables,
                          recommendedFor: item.recommendedFor || defaultData.recommendedFor,
                          fullDescription: (item as any).fullDescription || defaultData.fullDescription,
                        });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white text-xs font-extrabold tracking-wide uppercase shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 font-['Plus_Jakarta_Sans',sans-serif]"
                    >
                      Full Strategy & Details
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={openConsultationModal}
                      className="inline-flex items-center gap-2 text-[#5B8EE2] font-bold text-xs tracking-wide uppercase hover:text-[#4676C2] transition-colors"
                    >
                      Get a Consultation
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More / View Less */}
        <div className="mt-20 flex justify-center">
          {visibleCount < displayItems.length ? (
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white font-bold text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(236,72,153,0.5)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                VIEW MORE <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ) : displayItems.length > 4 ? (
            <button
              onClick={() => {
                setVisibleCount(4);
                document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white font-bold text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(91,142,226,0.5)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                VIEW LESS <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              </span>
            </button>
          ) : null}
        </div>

      </div>
    </section>
  );
};
