const fs = require('fs');

const generateSections = (titlePrefix) => [
  {
    id: 'sec-overview',
    type: 'overview',
    title: 'Turning Awareness Into Qualified Demand For Your Business.',
    content: 'In competitive global markets, growth is no longer driven by isolated marketing campaigns—it requires a structured, full-funnel demand generation engine. Cypher Swift delivers Demand Generation services that help organizations consistently attract, engage, convert, and retain high-intent prospects across digital channels. We work with B2B enterprises, B2C brands, SaaS companies, startups, and global service providers to build demand systems that align marketing, sales, and revenue operations.',
    mediaUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    bullets: []
  },
  {
    id: 'sec-services',
    type: 'services-grid',
    title: titlePrefix + ' Solutions & Services',
    content: 'Explore our specialized products designed for exponential business growth.',
    cards: [
      {
        id: 'card-1',
        title: 'Audience Analytics & Deep Insights',
        description: 'Comprehensive tracking of audience demographics, engagement rates, and growth vectors.',
        iconName: 'BarChart3',
        linkUrl: '#'
      },
      {
        id: 'card-2',
        title: 'Precision Audience Targeting',
        description: 'Laser-focused ad targeting strategies to ensure maximum return on ad spend.',
        iconName: 'Target',
        linkUrl: '#'
      },
      {
        id: 'card-3',
        title: 'Viral Content Creation Studio',
        description: 'High-quality graphic and video production that captures attention and drives shares.',
        iconName: 'Sparkles',
        linkUrl: '#'
      },
      {
        id: 'card-4',
        title: 'Strategic Campaign Roadmaps',
        description: 'Long-term planning software tailored for multi-channel digital marketing execution.',
        iconName: 'Route',
        linkUrl: '#'
      },
      {
        id: 'card-5',
        title: 'Automated CRM Sync & Nurturing',
        description: 'Seamlessly capture leads and sync them directly into your sales nurturing workflows.',
        iconName: 'Workflow',
        linkUrl: '#'
      }
    ]
  },
  {
    id: 'sec-case-study',
    type: 'case-study',
    title: 'Client Success & Transformation',
    content: 'How we helped scale a global enterprise.',
    caseStudies: [
      {
        id: 'cs-1',
        title: 'Global Brand Awareness Campaign',
        bgImageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop',
        description: 'We helped a multinational e-commerce brand increase their digital footprint across social platforms. By leveraging data-driven insights and localized content, the campaign achieved a 300% increase in organic reach and doubled their social engagement within the first quarter.',
        points: [
          { id: 'p1', title: 'Audience Research', iconName: 'Search' },
          { id: 'p2', title: 'Content Localization', iconName: 'Globe' },
          { id: 'p3', title: 'Influencer Partnerships', iconName: 'Users' },
          { id: 'p4', title: 'Viral Video Strategy', iconName: 'Video' },
          { id: 'p5', title: 'Engagement Tracking', iconName: 'Activity' },
          { id: 'p6', title: 'Sentiment Analysis', iconName: 'Heart' },
          { id: 'p7', title: 'Quarterly Reports', iconName: 'FileText' }
        ]
      },
      {
        id: 'cs-2',
        title: 'B2B Lead Generation Engine',
        bgImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        description: 'For a fast-growing SaaS company, we built an automated lead generation funnel. By targeting decision-makers on LinkedIn with high-value whitepapers and optimizing the landing page conversion rate, we reduced their Customer Acquisition Cost (CAC) by 45%.',
        points: [
          { id: 'p1', title: 'Target Profile Setup', iconName: 'Target' },
          { id: 'p2', title: 'Whitepaper Creation', iconName: 'FileText' },
          { id: 'p3', title: 'LinkedIn Outreach', iconName: 'Linkedin' },
          { id: 'p4', title: 'Funnel Optimization', iconName: 'Filter' },
          { id: 'p5', title: 'CRM Integration', iconName: 'Database' },
          { id: 'p6', title: 'Conversion Tracking', iconName: 'MousePointerClick' }
        ]
      },
      {
        id: 'cs-3',
        title: 'Omnichannel Sales Boost',
        bgImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        description: 'A national retail chain approached us to unify their online and offline sales. We deployed synchronized social media retargeting, local SEO, and geofencing campaigns that resulted in a 60% boost in foot traffic and a 40% increase in online sales during the holiday season.',
        points: [
          { id: 'p1', title: 'Local SEO Audit', iconName: 'MapPin' },
          { id: 'p2', title: 'Geofencing Ads', iconName: 'Smartphone' },
          { id: 'p3', title: 'Retargeting Pixels', iconName: 'Eye' },
          { id: 'p4', title: 'Inventory Sync', iconName: 'RefreshCw' },
          { id: 'p5', title: 'Cross-Platform ROI', iconName: 'TrendingUp' },
          { id: 'p6', title: 'Post-Sale Nurturing', iconName: 'Mail' }
        ]
      }
    ]
  }
];

const newPages = [
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
      schemaData: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Lead Generation Services","provider":{"@type":"Organization","name":"Lumora"},"description":"High-converting sales lead generation for businesses worldwide."}),
      robotsDirective: 'index, follow'
    },
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: generateSections('Lead Generation')
  },
  {
    id: 'page-social-media',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing - Build Brand Authority',
    pageType: 'service',
    seo: {
      metaTitle: 'Social Media Marketing Agency | Lumora',
      metaDescription: 'Drive organic community engagement and high-conversion paid social campaigns across Facebook, Instagram, LinkedIn, YouTube, and X.',
      keywords: 'social media marketing, paid social, organic social, influencer marketing',
      canonicalUrl: 'https://lumora.ai/social-media-marketing',
      ogTitle: 'Social Media Marketing Agency - Build Brand Authority',
      ogDescription: 'Drive organic community engagement and high-conversion paid social campaigns.',
      ogImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200',
      twitterCard: 'summary_large_image',
      schemaType: 'Service',
      schemaData: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Social Media Marketing","provider":{"@type":"Organization","name":"Lumora"},"description":"High-conversion social media marketing and brand authority."}),
      robotsDirective: 'index, follow'
    },
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: generateSections('Social Media')
  },
  {
    id: 'page-seo',
    slug: 'seo-growth-engine',
    title: 'Search Engine Optimization (SEO) - Dominate Organic Search',
    pageType: 'service',
    seo: {
      metaTitle: 'SEO Agency | Dominate Organic Search | Lumora',
      metaDescription: 'Dominate Google search results with technical SEO, content strategy, and high-authority link building that drives organic traffic.',
      keywords: 'seo agency, search engine optimization, technical seo, link building',
      canonicalUrl: 'https://lumora.ai/seo-growth-engine',
      ogTitle: 'SEO Agency - Dominate Organic Search',
      ogDescription: 'Dominate Google search results with technical SEO and content strategy.',
      ogImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200',
      twitterCard: 'summary_large_image',
      schemaType: 'Service',
      schemaData: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Search Engine Optimization","provider":{"@type":"Organization","name":"Lumora"},"description":"Technical SEO, content strategy, and high-authority link building."}),
      robotsDirective: 'index, follow'
    },
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: generateSections('SEO')
  },
  {
    id: 'page-performance-marketing',
    slug: 'performance-marketing',
    title: 'Performance Marketing - AI-Optimized Ad Campaigns',
    pageType: 'service',
    seo: {
      metaTitle: 'Performance Marketing Agency | Lumora',
      metaDescription: 'AI-optimized ad campaigns across Google, Meta, and LinkedIn laser-focused on ROI, sales, and conversions.',
      keywords: 'performance marketing, google ads, paid ads, roas',
      canonicalUrl: 'https://lumora.ai/performance-marketing',
      ogTitle: 'Performance Marketing Agency - Maximize ROI',
      ogDescription: 'AI-optimized ad campaigns across Google, Meta, and LinkedIn.',
      ogImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
      twitterCard: 'summary_large_image',
      schemaType: 'Service',
      schemaData: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Performance Marketing","provider":{"@type":"Organization","name":"Lumora"},"description":"AI-optimized ad campaigns laser-focused on ROI and conversions."}),
      robotsDirective: 'index, follow'
    },
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: generateSections('Performance Marketing')
  },
  {
    id: 'page-retargeting-marketing',
    slug: 'retargeting-marketing',
    title: 'Retargeting Marketing - Re-engage Lost Visitors',
    pageType: 'service',
    seo: {
      metaTitle: 'Retargeting Marketing Agency | Lumora',
      metaDescription: 'Re-engage dropped website visitors across display networks and social feeds to boost conversion rates.',
      keywords: 'retargeting marketing, remarketing, display ads, abandoned cart',
      canonicalUrl: 'https://lumora.ai/retargeting-marketing',
      ogTitle: 'Retargeting Marketing Agency - Boost Conversions',
      ogDescription: 'Re-engage dropped website visitors across display networks and social feeds.',
      ogImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200',
      twitterCard: 'summary_large_image',
      schemaType: 'Service',
      schemaData: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Retargeting Marketing","provider":{"@type":"Organization","name":"Lumora"},"description":"Re-engage dropped website visitors across display networks to boost conversion rates."}),
      robotsDirective: 'index, follow'
    },
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: generateSections('Retargeting')
  },
  {
    id: 'page-ai-marketing-automation',
    slug: 'ai-marketing-automation',
    title: 'AI Marketing Automation - Smart Workflows & Nurturing',
    pageType: 'service',
    seo: {
      metaTitle: 'AI Marketing Automation Agency | Lumora',
      metaDescription: 'Smart CRM workflows, automated lead nurturing, and AI chatbots to convert visitors faster.',
      keywords: 'ai marketing automation, crm workflows, chatbots, automated nurturing',
      canonicalUrl: 'https://lumora.ai/ai-marketing-automation',
      ogTitle: 'AI Marketing Automation Agency - Convert Faster',
      ogDescription: 'Smart CRM workflows, automated lead nurturing, and AI chatbots.',
      ogImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200',
      twitterCard: 'summary_large_image',
      schemaType: 'Service',
      schemaData: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"AI Marketing Automation","provider":{"@type":"Organization","name":"Lumora"},"description":"Smart CRM workflows, automated lead nurturing, and AI chatbots."}),
      robotsDirective: 'index, follow'
    },
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: generateSections('AI Automation')
  }
];

let code = fs.readFileSync('src/data/initialData.ts', 'utf8');

// replace the initialDynamicPages array
code = code.replace(/export const initialDynamicPages: DynamicPage\[\] = \[[\s\S]*?\];/g, 'export const initialDynamicPages: DynamicPage[] = ' + JSON.stringify(newPages, null, 2) + ';');

fs.writeFileSync('src/data/initialData.ts', code);
