import { SiteContent, DynamicPage } from '../types';

export const initialSiteContent: SiteContent = {
  hero: {
    badgeText: 'Local | National and Global Reach',
    headlineMain: 'Grow Your Business with Local, National & Global',
    headlineHighlight: 'Digital Marketing',
    subheadline: 'Drive qualified leads, increase brand visibility, and scale your global presence with data-driven digital marketing strategies tailored for modern growth.',
    ctaPrimaryText: 'Get Free Consultation',
    ctaSecondaryText: 'Talk to an Expert',
    statNumber: '+342%',
    statLabel: 'Avg. Pipeline Revenue Growth',
    statBadgeText: 'Verified Agency Partner'
  },
  whatIs: {
    title: 'What is Digital Marketing?',
    subtitle: 'The Engine of Modern Global Business Scaling',
    descriptionParagraph1: 'Digital marketing is the targeted, data-backed strategy of promoting products, services, and brands through electronic channels like search engines, social media, paid advertising networks, and email workflows.',
    descriptionParagraph2: 'At Lumora, we transcend standard advertising. We combine algorithmic audience targeting, AI-enhanced campaign optimization, and creative brand storytelling to convert international digital attention into scalable pipeline revenue.',
    keyPillars: [
      {
        title: 'Precision Data Analytics',
        desc: 'Track every dollar spent down to individual user acquisition touchpoints with full conversion attribution.',
        icon: 'BarChart3'
      },
      {
        title: 'Rapid Execution Speed',
        desc: 'Deploy agile multi-channel campaigns in hours, optimizing live ad performance using active behavioral data.',
        icon: 'Zap'
      },
      {
        title: 'Omnichannel Scalability',
        desc: 'Connect search, social, display, and retargeting into a seamless funnel that nurtures leads 24/7 globally.',
        icon: 'Globe2'
      }
    ]
  },
  whyChoose: {
    title: 'Why Choose Lumora?',
    subtitle: 'Built for High-Growth Enterprises, SMEs & Ambitious Brands',
    points: [
      {
        id: 'p1',
        title: '10+ Years Industry Experience',
        description: 'Deep domain expertise navigating search engine algorithm updates and international ad market dynamics.',
        icon: 'Award'
      },
      {
        id: 'p2',
        title: 'Certified Growth Experts',
        description: 'Certified Google Premier Partners, Meta Business Partners, and HubSpot accredited strategists.',
        icon: 'ShieldCheck'
      },
      {
        id: 'p3',
        title: 'ROI-Focused Strategy',
        description: 'We measure success in qualified leads, lowered Customer Acquisition Cost (CAC), and bottom-line revenue.',
        icon: 'TrendingUp'
      },
      {
        id: 'p4',
        title: 'AI-Powered Optimization',
        description: 'Automated real-time bidding, AI creative testing, and predictive customer journey mapping.',
        icon: 'Cpu'
      },
      {
        id: 'p5',
        title: '100% Transparent Reporting',
        description: 'Real-time client dashboard with instant campaign metrics, lead logs, and spent budget breakdown.',
        icon: 'PieChart'
      },
      {
        id: 'p6',
        title: 'Dedicated Account Manager',
        description: 'A single, responsive point of contact overseeing strategy execution and weekly alignment calls.',
        icon: 'UserCheck'
      }
    ]
  },
  services: [
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      shortDescription: 'Build brand authority, engage target demographics, and turn social channels into lead engines on Meta, LinkedIn, and X.',
      fullDescription: 'Our Social Media Marketing service drives organic community engagement paired with high-conversion paid social campaigns across Facebook, Instagram, LinkedIn, YouTube, and X. We handle content creation, short-form video reels, influencer partnerships, and audience retargeting.',
      iconName: 'Share2',
      features: ['Custom Visual & Video Content', 'Community Management 24/7', 'LinkedIn Executive Thought Leadership', 'Audience Retargeting Pixel Funnels'],
      deliverables: ['Monthly Content Calendar', '1080p Video Reels & Motion Graphics', 'Bi-weekly Performance Analytics', 'Paid Social Ad Management'],
      recommendedFor: 'B2B & B2C brands looking for viral brand equity and direct consumer lead capture.',
      badge: 'High Conversion'
    },
    {
      id: 'search-engine-optimization',
      title: 'Search Engine Optimization (SEO)',
      shortDescription: 'Dominate Google organic search results with technical SEO, keyword architecture, and authority backlink building.',
      fullDescription: 'Our international SEO strategy drives sustainable high-intent organic traffic. We conduct deep site audits, resolve technical indexation barriers, produce authoritative long-form content, and build white-hat niche backlink profiles that outperform competitors.',
      iconName: 'Search',
      features: ['Technical Core Web Vitals Audits', 'International & Multi-Regional SEO', 'High-Domain Backlink Acquisition', 'Schema & Structured Data Markup'],
      deliverables: ['Custom Keyword Matrix', 'On-Page Content Optimization', 'Monthly Keyword Rank Tracking', 'Link Building Acquisition Reports'],
      recommendedFor: 'Businesses aiming to build long-term organic acquisition funnels with zero per-click ad cost.',
      badge: 'Organic Scale'
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      shortDescription: 'Data-driven paid ads on Google Ads, Bing, and Programmatic Display engineered for strict Target CPA and ROAS.',
      fullDescription: 'Maximize every advertising dollar. Our performance marketing unit creates hyper-targeted Search, Shopping, and Display campaigns that capture high-intent buyers right when they are ready to transact.',
      iconName: 'Target',
      features: ['Google Search & PPC Management', 'Programmatic Native & Display', 'AI Keyword Bidding Rules', 'Negative Keyword Shielding'],
      deliverables: ['High-Converting Landing Pages', 'Ad Copy Variant Testing', 'Live Conversion Attribution', 'ROAS & CPA Dashboards'],
      recommendedFor: 'E-commerce stores and lead-gen businesses needing immediate predictable pipeline growth.',
      badge: 'Max ROAS'
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      shortDescription: 'Capture pre-qualified B2B and B2C sales inquiries directly into your CRM with multi-step interactive lead funnels.',
      fullDescription: 'Turn anonymous website visitors into sales-ready leads. We construct high-converting lead magnets, interactive quiz funnels, calendar booking integrations, and automated lead verification systems.',
      iconName: 'UserPlus',
      features: ['Interactive Quiz & Assessment Funnels', 'Instant SMS & Email Lead Notifications', 'CRM Synchronization (HubSpot, Salesforce)', 'Pre-Qualification Screening Forms'],
      deliverables: ['Custom Multi-step Lead Funnel', 'A/B Testing Framework', 'Verified Sales-Ready Leads', 'Automated Lead Nurturing Email Sequence'],
      recommendedFor: 'High-ticket service providers, IT firms, Real Estate agencies, and B2B SaaS companies.',
      badge: 'Top Choice'
    },
    {
      id: 'retargeting-marketing',
      title: 'Retargeting Marketing',
      shortDescription: 'Re-engage 98% of lost website traffic across display, social, and search networks with dynamic personalized offers.',
      fullDescription: 'Most visitors leave without converting on their first touch. Our multi-platform retargeting campaigns stay top-of-mind, displaying tailored ads based on exact user behavior and product pages viewed.',
      iconName: 'RotateCcw',
      features: ['Dynamic Product Retargeting', 'Sequential Ad Storytelling', 'Cross-Device Tracking Pixels', 'Custom Audience Exclusion Rules'],
      deliverables: ['Custom Retargeting Ad Creatives', 'Frequency Cap Controls', 'Abandoned Cart Recovery Funnels', 'Cost-per-Acquisition Audits'],
      recommendedFor: 'Brands looking to maximize conversion rates from existing marketing spend.',
      badge: 'High Conversion'
    },
    {
      id: 'paid-advertising-campaigns',
      title: 'Paid Advertising Campaigns',
      shortDescription: 'End-to-end paid campaign strategy spanning video ads, native networks, and international media placements.',
      fullDescription: 'Scale across global borders with localized ad creatives, multi-currency budget strategies, and high-impact YouTube video campaigns that command attention and drive buyer action.',
      iconName: 'Megaphone',
      features: ['YouTube Video Ad Production', 'Native Sponsored Content Placements', 'Multi-Language Ad Translation', 'Geofencing & Hyper-Local Targeting'],
      deliverables: ['Omnichannel Campaign Setup', 'Localized Ad Creatives', 'Cross-Channel Attribution Model', 'Weekly Executive Summaries'],
      recommendedFor: 'Enterprises expanding into new national or international geographical territories.',
      badge: 'Global Scale'
    },
    {
      id: 'target-audience-reach',
      title: 'Target Audience Reach',
      shortDescription: 'Identify, segment, and infiltrate high-value niche consumer demographics with behavioral intelligence.',
      fullDescription: 'Stop wasting ad budget on generic impressions. We analyze buyer personas, purchase intent indicators, and competitor audiences to laser-target customer profiles most likely to buy.',
      iconName: 'Crosshair',
      features: ['In-Depth Buyer Persona Mapping', 'Psychographic & Behavioral Targeting', 'Competitor Audience Interception', 'Lookalike Audience Modeling'],
      deliverables: ['Target Market Analysis Report', 'Custom Audience Segment Exports', 'Funnel Alignment Matrix', 'Audience Penetration Metrics'],
      recommendedFor: 'Niche brands and specialized product offerings aiming for high relevance.',
      badge: 'Precision'
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing',
      shortDescription: 'Amplify brand trust through authentic creator partnerships, sponsored unboxings, and viral social campaigns.',
      fullDescription: 'Connect with respected industry voices and high-engagement creators in tech, lifestyle, finance, and B2B sectors. We manage outreach, contract negotiation, content guidelines, and ROI tracking.',
      iconName: 'Users',
      features: ['Vetted Influencer Matching', 'Contract & Rights Management', 'Campaign Strategy & Briefing', 'Trackable Promo Code Attribution'],
      deliverables: ['Influencer Roster Selection', 'Co-Branded Content Approval', 'Post-Campaign Engagement Analytics', 'Usage Rights Licensing'],
      recommendedFor: 'Consumer brands, mobile apps, and lifestyle products seeking instant social validation.',
      badge: 'Viral Authority'
    }
  ],
  whoShouldUse: [
    {
      id: 'w1',
      title: 'Startups & Emerging Tech',
      description: 'Rapidly establish product-market validation, generate early adopter signups, and scale investor pitch traction.',
      iconName: 'Rocket',
      benefits: ['Low CAC User Acquisition', 'Product Launch Buzz', 'Investor Ready Metrics']
    },
    {
      id: 'w2',
      title: 'Healthcare & Medical Practice',
      description: 'Attract patient consultations, build trusted provider reputations, and rank high on local map packs.',
      iconName: 'HeartPulse',
      benefits: ['HIPAA Compliant Funnels', 'High-Intent Patient Leads', 'Local Map Domination']
    },
    {
      id: 'w3',
      title: 'Real Estate & Property Developers',
      description: 'Generate high-net-worth investor inquiries, luxury property buyer leads, and pre-construction bookings.',
      iconName: 'Building2',
      benefits: ['Virtual Tour Ad Campaigns', 'HNWI Buyer Targeting', 'Direct Broker Inquiries']
    },
    {
      id: 'w4',
      title: 'E-commerce & Retail Brands',
      description: 'Scale direct-to-consumer sales with Google Shopping feeds, TikTok shop strategy, and automated email flows.',
      iconName: 'ShoppingBag',
      benefits: ['High Shopping ROAS', 'Abandoned Cart Recovery', 'Repeat Order Retention']
    },
    {
      id: 'w5',
      title: 'IT & Software Companies (SaaS)',
      description: 'Drive demo bookings, free trial signups, and enterprise software contract pipelines with LinkedIn B2B ads.',
      iconName: 'Laptop',
      benefits: ['SQL Lead Generation', 'Demo Booking Engine', 'Whitepaper Gated Downloads']
    },
    {
      id: 'w6',
      title: 'Manufacturing & B2B Enterprises',
      description: 'Expand distributor networks, secure global bulk order RFQs, and position engineering capabilities.',
      iconName: 'Factory',
      benefits: ['International RFQ Inquiries', 'Supply Chain Visibility', 'Trade Show Amplification']
    }
  ],
  achievements: [
    {
      id: 'case-1',
      clientName: 'Apex Cloud Solutions',
      industry: 'B2B SaaS & Cloud Security',
      location: 'United States & Europe',
      metrics: [
        { label: 'Pipeline Leads', value: '4,820+', change: '+280%' },
        { label: 'Cost Per Lead (CPL)', value: '$34.20', change: '-48%' },
        { label: 'ARR Impact', value: '$2.4M', change: '+310%' }
      ],
      challenge: 'Apex Cloud was struggling with high Google Ads CPC ($45+) and low demo booking conversion rates from organic search.',
      solution: 'Implemented a multi-touch LinkedIn B2B retargeting strategy combined with high-intent Google Search exact-match campaigns and interactive ROI calculators.',
      results: 'Generated 4,820+ qualified enterprise demo requests over 6 months while slashing CPL by 48%.',
      testimonial: {
        quote: 'Lumora transformed our pipeline within 90 days. They are by far the most data-driven marketing partner we have worked with.',
        author: 'Marcus Vance',
        role: 'VP of Marketing, Apex Cloud'
      }
    },
    {
      id: 'case-2',
      clientName: 'LuxeLiving Realty',
      industry: 'Luxury Real Estate',
      location: 'Dubai & UK',
      metrics: [
        { label: 'Properties Sold', value: '$48M+', change: '+190%' },
        { label: 'HNWI Buyers Reach', value: '1.2M', change: '+450%' },
        { label: 'Average ROAS', value: '14.2x', change: '+220%' }
      ],
      challenge: 'Targeting ultra-high-net-worth international investors interested in pre-launch luxury Dubai villas.',
      solution: 'Engineered multi-language Meta video campaigns targeting luxury lifestyle interests paired with instant WhatsApp lead screening.',
      results: 'Closed 32 luxury villa bookings within 4 months with an unprecedented 14.2x return on ad spend.',
      testimonial: {
        quote: 'Their ability to locate international buyers who actually convert on multi-million dollar properties is unmatched.',
        author: 'Elena Rostova',
        role: 'Managing Director, LuxeLiving'
      }
    }
  ],
  process: [
    {
      stepNumber: 1,
      title: 'Requirement & Competitor Analysis',
      description: 'We audit your existing digital footprint, study competitor ad strategies, and identify market opportunities.',
      duration: 'Week 1',
      iconName: 'Search',
      keyOutputs: ['Full SEO & PPC Audit', 'Competitor Keyword Matrix', 'Target Persona Profiles']
    },
    {
      stepNumber: 2,
      title: 'Strategy & Funnel Planning',
      description: 'We build a customized omnichannel marketing blueprint detailing channel budgets, KPI benchmarks, and messaging.',
      duration: 'Week 1 - 2',
      iconName: 'Compass',
      keyOutputs: ['Media Spend Allocation', 'Funnel Architecture Map', 'A/B Testing Hypothesis']
    },
    {
      stepNumber: 3,
      title: 'Campaign Setup & Ad Creation',
      description: 'Our design and copy team crafts high-converting creatives, video assets, landing pages, and tracking pixels.',
      duration: 'Week 2',
      iconName: 'Palette',
      keyOutputs: ['Custom Landing Pages', 'Ad Copies & Motion Reels', 'Conversion Attribution Pixels']
    },
    {
      stepNumber: 4,
      title: 'Multi-Channel Campaign Launch',
      description: 'Campaigns go live across search, social, and programmatic networks under active real-time bidding supervision.',
      duration: 'Week 3 Onward',
      iconName: 'Rocket',
      keyOutputs: ['Live Google/Meta/LinkedIn Ads', 'Instant Lead Routing', 'Live Client Dashboard']
    },
    {
      stepNumber: 5,
      title: 'AI Optimization & Scaling',
      description: 'We continuously test ad variants, trim non-performing keywords, and reallocate budget to top-converting angles.',
      duration: 'Ongoing',
      iconName: 'TrendingUp',
      keyOutputs: ['Weekly Ad Refresh', 'CPA Reduction', 'Scalable Budget Expansion']
    }
  ],
  industries: [
    { id: 'i1', name: 'Healthcare', description: 'Patient acquisition, clinic marketing, and HIPAA-compliant funnels.', iconName: 'HeartPulse', caseStudyHighlight: '240% increase in patient bookings' },
    { id: 'i2', name: 'Real Estate', description: 'HNWI lead acquisition, project launches, and agent branding.', iconName: 'Building2', caseStudyHighlight: '$48M in property transactions' },
    { id: 'i3', name: 'E-commerce', description: 'D2C sales growth, Google Shopping, and retargeting flows.', iconName: 'ShoppingBag', caseStudyHighlight: '8.4x average e-commerce ROAS' },
    { id: 'i4', name: 'B2B & IT SaaS', description: 'SQL lead generation, demo scheduling, and LinkedIn campaigns.', iconName: 'Laptop', caseStudyHighlight: '4,800+ enterprise demo leads' },
    { id: 'i5', name: 'Manufacturing', description: 'International RFQ inquiries and supply chain buyer reach.', iconName: 'Factory', caseStudyHighlight: 'Export contracts across 18 countries' },
    { id: 'i6', name: 'Education & EdTech', description: 'Student enrollment campaigns and course signups.', iconName: 'GraduationCap', caseStudyHighlight: '12,000+ new student signups' }
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'How quickly can Lumora launch our digital marketing campaign?',
      answer: 'After our initial strategy call and alignment, campaign setup, landing page build, and creative assets typically take 5 to 7 business days before official launch.',
      category: 'General'
    },
    {
      id: 'faq-2',
      question: 'Do you handle local, national, and international campaigns?',
      answer: 'Yes! We run hyper-local map pack SEO campaigns for local businesses as well as multi-region, multi-currency international ad campaigns across North America, Europe, Middle East, and Asia-Pacific.',
      category: 'General'
    },
    {
      id: 'faq-3',
      question: 'How do you track leads and measure return on investment (ROI)?',
      answer: 'We install custom conversion tracking pixels, Google Tag Manager event triggers, and call tracking metrics. Every lead captured is logged in real-time on your client dashboard and forwarded to your CRM.',
      category: 'Results'
    },
    {
      id: 'faq-4',
      question: 'Can we edit pages, create custom landing pages, or replicate pages?',
      answer: 'Absolutely. Lumora includes a full dynamic Admin Panel and SEO Replicator where you can edit content, duplicate pages for different locations, set custom slugs, manage meta tags, and preview live SEO scores.',
      category: 'Process'
    }
  ],
  contactInfo: {
    phone: '+91 999 888 7766',
    whatsapp: '+91 999 888 7766',
    email: 'contact@lumora.ai',
    address: 'Lumora Global HQ, Innovation Tower, Tech Park Boulevard',
    workingHours: 'Mon - Sat: 9:00 AM - 8:00 PM IST / Global 24/7 Support'
  }
};

export const initialDynamicPages: DynamicPage[] = [
  {
    id: 'page-lead-generation',
    slug: 'lead-generation',
    title: 'Lead Generation Services - High Converting B2B & B2C Funnels',
    pageType: 'service',
    seo: {
      metaTitle: 'Lead Generation Agency | Scale Qualified Sales Leads | Lumora',
      metaDescription: 'Generate pre-qualified B2B and B2C sales inquiries with Lumora’s high-converting lead funnels, targeted ads, and automated CRM routing.',
      keywords: 'lead generation agency, b2b leads, qualified sales leads, lead funnel agency',
      canonicalUrl: 'https://lumora.ai/lead-generation',
      ogTitle: 'Lead Generation Agency - Scale Your Qualified Inquiries',
      ogDescription: 'Turn anonymous traffic into sales-ready leads with custom funnels.',
      ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      twitterCard: 'summary_large_image',
      schemaType: 'Service',
      schemaData: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Lead Generation Services",
        "provider": {
          "@type": "Organization",
          "name": "Lumora"
        },
        "description": "High-converting sales lead generation for businesses worldwide."
      }, null, 2),
      robotsDirective: 'index, follow'
    },
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: [
      {
        id: 'sec-1',
        type: 'hero',
        title: 'Accelerate Business Growth with Precision Lead Generation',
        content: 'Stop chasing cold leads. We design multi-step interactive lead funnels and targeted ad campaigns that attract buyers actively looking for your solutions.',
        bullets: ['Verified Sales-Ready Leads', 'Instant CRM & Email Routing', 'A/B Tested Funnel Conversion']
      },
      {
        id: 'sec-2',
        type: 'text-media',
        title: 'Why Our Lead Generation Engine Outperforms Standard Ads',
        content: 'Most marketing campaigns fail because they drive traffic to static homepages. Lumora builds hyper-segmented landing pages with built-in qualification quizzes, instant scheduling, and real-time lead verification.',
        bullets: ['Pre-Qualification Questionnaires', 'Automated SMS & Email Follow-ups', 'Direct Integration with Salesforce & HubSpot']
      }
    ]
  }
];
