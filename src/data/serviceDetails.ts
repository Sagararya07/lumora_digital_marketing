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
    shortDescription: 'Engineer mathematically rigorous, global campaigns across major networks to scale your international ad spend profitably and aggressively.',
    fullDescription: 'Problem: Global brands often lose massive amounts of capital by deploying generic, unoptimized campaigns across diverse international markets, resulting in low ROI and wasted spend.\n\nSolution: We replace guesswork with data science. We build highly tuned, multi-region growth engines that obsess over hard metrics like CPA and ROAS, ensuring every dollar is aligned with your bottom line.\n\nAction: Deploy aggressive, predictable scaling strategies and dominate your global market with absolute mathematical certainty.',
    features: ['Global Omnichannel Targeting', 'High-Tempo International A/B Testing', 'Borderless Attribution Tracking', 'Multi-Market LTV/CAC Optimization', 'Aggressive Global Budget Scaling'],
    deliverables: ['Global Tracking & Attribution Setup', 'Culturally-Adapted Creative Assets', 'Real-time Global Analytics Dashboard', 'Weekly International Scaling Reports'],
    recommendedFor: 'E-commerce brands, SaaS companies, and high-ticket service providers looking for immediate, scalable revenue across international markets.',
    badge: 'Performance',
    image: '/images/services/performance_marketing_1785498399389.png'
  },
  'paid-advertising-campaigns': {
    shortDescription: 'We deploy mathematically rigorous, cross-border ad strategies across Google, Meta, and LinkedIn to scale your global ad spend profitably.',
    fullDescription: 'Problem: Businesses expanding internationally burn through ad budgets on poorly localized campaigns, fragmented tracking, and guesswork — leading to spiraling CPAs and zero visibility into true global ROAS.\n\nSolution: We architect precision-engineered, multi-market paid advertising systems. From geo-specific search intent capture to culturally-adapted creative, every campaign is built for borderless scale with pixel-perfect attribution.\n\nAction: Stop bleeding budget on underperforming ads and start driving predictable, profitable revenue across every key international market.',
    features: ['Global Search Intent Capture (Google Ads)', 'Culturally-Adapted Creative (Meta)', 'Cross-Border B2B Targeting (LinkedIn)', 'Multi-Market A/B Testing', 'AI-Powered Global Bid Optimization'],
    deliverables: ['International Account Forensic Audits', 'Region-Specific Ad Creatives', 'Multi-Market Campaign Monitoring', 'Unified Global ROAS Dashboards'],
    recommendedFor: 'Businesses looking for immediate, measurable return on ad spend through highly optimized paid channels across international markets.',
    badge: 'Paid Ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200'
  },
  'enterprise-demand-generation': {
    shortDescription: 'Architect globally scalable revenue pipelines that capture, educate, and convert elite international B2B prospects.',
    fullDescription: 'Problem: Global enterprises struggle to capture high-value market share because traditional marketing fails to penetrate complex, international B2B buying committees, leading to fragmented pipelines and wasted spend.\n\nSolution: We engineer globally scalable, multi-touch demand generation systems. By leveraging predictive data and Account-Based Marketing (ABM), we unify your international outreach and establish your brand as the undisputed global category leader.\n\nAction: Dominate your market worldwide and consistently fill your pipeline with elite, sales-ready enterprise accounts.',
    features: ['Global ABM Strategy Design', 'Cross-Border Content Syndication', 'International Buying Committee Nurturing', 'Multi-Region Brand Authority', 'Global Predictive Lead Scoring'],
    deliverables: ['Worldwide TAM & Audience Mapping', 'Localized Global ABM Campaigns', 'Multi-Region Nurture Sequences', 'Unified Global Pipeline Reporting'],
    recommendedFor: 'Enterprise B2B companies, complex SaaS products, and high-ticket service providers requiring sophisticated, multi-stakeholder sales cycles.',
    badge: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200'
  },
  'lead-generation': {
    shortDescription: 'Architect high-velocity, borderless acquisition funnels that consistently generate qualified, sales-ready inquiries globally.',
    fullDescription: 'Problem: Scaling businesses often waste significant capital on fragmented, localized lead generation efforts that yield low-quality prospects and unpredictable sales cycles.\n\nSolution: We build intelligent, globally scalable acquisition engines. By leveraging advanced data enrichment, multi-region outreach, and predictive scoring, we eliminate the friction of borderless customer acquisition.\n\nAction: Stop chasing cold leads and start filling your calendar with high-converting, international sales appointments on autopilot.',
    features: ['Borderless Acquisition Funnels', 'Multi-Region B2B Outreach', 'Culturally-Nuanced Lead Magnets', 'AI-Driven Follow-Up Sequences', 'Global Data Enrichment'],
    deliverables: ['High-Intent Sales Appointments', 'Verified International Lead Lists', 'Localized Conversion Landing Pages', 'Global CRM Pipeline Integration', 'Multi-Lingual Email Sequences'],
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
