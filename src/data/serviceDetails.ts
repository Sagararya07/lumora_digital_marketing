export const fallbackServiceDetails: Record<string, {
  shortDescription: string;
  fullDescription: string;
  features: string[];
  deliverables: string[];
  recommendedFor: string;
  badge?: string;
  image?: string;
}> = {
  'social-media-marketing': {
    shortDescription: 'Build a powerful brand presence across Instagram, LinkedIn, Facebook, X, and YouTube with high-converting content.',
    fullDescription: 'Transform your social presence into a powerful growth engine. We create scroll-stopping content and engage with your audience to build brand loyalty and drive conversions.',
    features: ['Platform-specific content strategy', 'Community management & engagement', 'Influencer collaborations', 'Trend analysis & viral content creation', 'Social listening & brand monitoring'],
    deliverables: ['Monthly content calendars', 'Custom branded graphics & reels', 'Weekly performance reports', 'Audience growth metrics', 'Engagement rate optimization'],
    recommendedFor: 'B2C brands, E-commerce stores, and lifestyle businesses looking to build a loyal community and increase brand awareness.',
    badge: 'Social Media',
    image: '/images/services/social_media_marketing_1785498376145.png'
  },
  'seo-growth-engine': {
    shortDescription: 'Dominate Google search results with technical SEO, content strategy, and high-authority link building.',
    fullDescription: 'Climb the search rankings and dominate your niche. Our technical and content-driven SEO strategies ensure your website captures high-intent traffic directly from search engines.',
    features: ['Comprehensive site audits', 'High-intent keyword research', 'On-page technical optimization', 'High-authority backlink building', 'Local SEO & Google Business Profile management'],
    deliverables: ['Detailed SEO audit report', 'Content gap analysis', 'Monthly ranking & traffic reports', 'Optimized blog posts & landing pages', 'Technical error resolution logs'],
    recommendedFor: 'B2B companies, local service providers, and content-driven sites aiming for long-term organic visibility and sustainable traffic.',
    badge: 'SEO',
    image: '/images/services/seo_marketing_1785498386235.png'
  },
  'performance-marketing': {
    shortDescription: 'We engineer mathematically rigorous campaigns across Google, Meta, and LinkedIn to scale your ad spend profitably and aggressively.',
    fullDescription: 'Traditional marketing hopes for results; we guarantee accountability. We align every marketing dollar directly with your bottom line, obsessing over hard metrics like CPA and ROAS to build highly tuned growth engines.',
    features: ['Omnichannel precision targeting', 'High-tempo A/B testing', 'Pixel-perfect attribution tracking', 'Ruthless LTV/CAC optimization', 'Aggressive budget scaling'],
    deliverables: ['Advanced tracking & attribution setup', 'High-converting creative assets', 'Real-time live analytics dashboard', 'Weekly tactical scaling reports'],
    recommendedFor: 'E-commerce brands, SaaS companies, and high-ticket service providers looking for immediate, scalable revenue.',
    badge: 'Performance',
    image: '/images/services/performance_marketing_1785498399389.png'
  },
  'paid-advertising-campaigns': {
    shortDescription: 'We don\'t guess. We use a mathematically rigorous execution plan to scale your ad spend profitably.',
    fullDescription: 'Stop wasting budget on bleeding campaigns. We architect the exact ad sequence needed to push prospects from a cold click to a closed sale across Google, Meta, and LinkedIn.',
    features: ['Search Intent Capture (Google Ads)', 'Scroll-Stopping Creative (Meta)', 'Precision B2B Targeting (LinkedIn)', 'Continuous A/B Testing', 'Smart Bidding & AI Optimization'],
    deliverables: ['Deep historical data audits', 'High-converting ad creatives', 'Daily campaign monitoring & adjustments', 'Weekly ROAS & performance dashboards'],
    recommendedFor: 'Businesses looking for immediate, measurable return on ad spend through highly optimized paid channels.',
    badge: 'Paid Ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200'
  },
  'enterprise-demand-generation': {
    shortDescription: 'Architect high-velocity revenue pipelines that capture, educate, and convert elite B2B prospects at scale.',
    fullDescription: 'Stop relying on unpredictable referrals and outbound spam. We build sophisticated, multi-touch demand generation engines that position your brand as the undisputed category leader and fill your pipeline with high-value, sales-ready accounts.',
    features: ['Account-Based Marketing (ABM) Frameworks', 'High-Value Content Syndication', 'Elite B2B Prospect Nurturing', 'Omnichannel Brand Authority', 'Predictive Lead Scoring Models'],
    deliverables: ['Total Addressable Market (TAM) mapping', 'Custom ABM campaign execution', 'Multi-touch prospect nurture sequences', 'Executive-level pipeline reporting'],
    recommendedFor: 'Enterprise B2B companies, complex SaaS products, and high-ticket service providers requiring sophisticated, multi-stakeholder sales cycles.',
    badge: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200'
  },
  'lead-generation': {
    shortDescription: 'Predictable multi-channel B2B & B2C acquisition funnels that generate qualified, sales-ready inquiries.',
    fullDescription: 'Stop chasing cold leads. We build intelligent, automated funnels that attract, educate, and convert high-quality prospects into ready-to-buy clients.',
    features: ['Multi-channel acquisition funnels', 'B2B cold outreach campaigns', 'Lead magnet creation', 'Automated follow-up sequences', 'Account-Based Marketing (ABM)'],
    deliverables: ['Qualified sales appointments', 'Verified lead lists', 'Automated email sequences', 'High-converting landing pages', 'CRM integration & setup'],
    recommendedFor: 'B2B service providers, agencies, and enterprise software companies needing a predictable pipeline of qualified prospects.',
    badge: 'Acquisition',
    image: '/images/services/lead_generation_1785498418027.png'
  },
  'retargeting-marketing': {
    shortDescription: 'Re-engage dropped website visitors across display networks and social feeds to boost conversion rates.',
    fullDescription: 'Don\'t let your traffic slip away. We strategically re-engage past visitors across the web, reminding them of what they left behind and turning bounced traffic into loyal customers.',
    features: ['Cross-platform tracking pixels', 'Dynamic product ads', 'Abandoned cart recovery sequences', 'Behavioral segmentation', 'Frequency capping & ad fatigue management'],
    deliverables: ['Retargeting campaign blueprints', 'Dynamic ad creatives', 'Audience segmentation lists', 'Conversion lift reports', 'ROAS tracking dashboards'],
    recommendedFor: 'E-commerce retailers and SaaS businesses wanting to recapture lost traffic and maximize the lifetime value of every visitor.',
    badge: 'Retargeting',
    image: '/images/services/retargeting_marketing_1785498428208.png'
  },
  'ai-marketing-automation': {
    shortDescription: 'Smart CRM workflows, automated lead nurturing, and AI chatbots to convert visitors faster.',
    fullDescription: 'Automate your growth. We implement cutting-edge AI and automation tools to streamline your marketing, nurture leads instantly, and close deals faster.',
    features: ['Smart CRM integration', 'AI-powered chatbots', 'Automated lead scoring', 'Personalized email workflows', 'Data enrichment & predictive analytics'],
    deliverables: ['Fully mapped customer journeys', 'Custom Chatbot deployment', 'Automated sequence templates', 'Integration architecture diagrams', 'Monthly workflow optimization'],
    recommendedFor: 'Scaling businesses, sales teams, and marketing departments looking to save time and convert leads 24/7 without manual effort.',
    badge: 'Automation',
    image: '/images/services/ai_marketing_1785498439194.png'
  },
  'marketing-diagnosis-audit': {
    shortDescription: 'Uncover hidden revenue leaks and forensic bottlenecks across your entire digital ecosystem.',
    fullDescription: 'Stop guessing why your campaigns aren\'t scaling. We conduct a mathematically rigorous, forensic audit of your ad accounts, funnels, and tracking infrastructure to identify precise friction points. We then deliver a surgical roadmap to plug revenue leaks and unlock immediate growth.',
    features: ['Paid Media Forensic Audits', 'Conversion Funnel Analysis', 'Technical SEO Tracking', 'Competitor Movement Tracking', 'Attribution & Analytics Health Check'],
    deliverables: ['Executive Strategy Briefing', 'Algorithmic Diagnostics', 'Actionable Fix Roadmap', 'Monthly Advisory Call'],
    recommendedFor: 'Companies with in-house teams or multiple agency partners wanting an objective, data-driven second opinion.',
    badge: 'Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200'
  }
};

export function getFallbackServiceDetails(slug: string, title?: string) {
  if (fallbackServiceDetails[slug]) {
    return fallbackServiceDetails[slug];
  }
  
  const searchString = `${slug} ${title || ''}`.toLowerCase();
  
  if (searchString.includes('seo') || searchString.includes('search engine')) {
    return fallbackServiceDetails['seo-growth-engine'];
  }
  if (searchString.includes('social') || searchString.includes('media')) {
    return fallbackServiceDetails['social-media-marketing'];
  }
  if (searchString.includes('performance') || searchString.includes('ads') || searchString.includes('paid')) {
    return fallbackServiceDetails['performance-marketing'];
  }
  if (searchString.includes('demand') || searchString.includes('enterprise')) {
    return fallbackServiceDetails['enterprise-demand-generation'];
  }
  if (searchString.includes('lead') || searchString.includes('acquisition') || searchString.includes('funnel')) {
    return fallbackServiceDetails['lead-generation'];
  }
  if (searchString.includes('retargeting') || searchString.includes('remarketing')) {
    return fallbackServiceDetails['retargeting-marketing'];
  }
  if (searchString.includes('ai') || searchString.includes('automation') || searchString.includes('bot')) {
    return fallbackServiceDetails['ai-marketing-automation'];
  }
  if (searchString.includes('audit') || searchString.includes('diagnosis')) {
    return fallbackServiceDetails['marketing-diagnosis-audit'];
  }
  
  // Generic fallback if absolutely nothing matches
  return {
    shortDescription: 'Comprehensive digital marketing solutions driven by AI.',
    fullDescription: 'We provide end-to-end digital marketing services tailored to your specific business needs, ensuring measurable and scalable growth.',
    features: ['Custom Strategy Development', 'Data-Driven Execution', 'Continuous Optimization', 'Transparent Reporting', 'Dedicated Account Management'],
    deliverables: ['Initial Strategy Blueprint', 'Execution Roadmap', 'Monthly Performance Reviews', 'Access to Analytics Dashboard'],
    recommendedFor: 'Businesses of all sizes looking for a dedicated partner to accelerate their digital growth.',
    badge: 'Service',
    image: ''
  };
}
