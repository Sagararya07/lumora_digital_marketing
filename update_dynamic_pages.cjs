const fs = require('fs');

const pagesData = [
  {
    id: "page-lead-generation",
    slug: "lead-generation",
    title: "Lead Generation Services - High Converting B2B & B2C Funnels",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Turning Awareness Into Qualified Demand For Your Business.",
        content: "In competitive global markets, growth is no longer driven by isolated marketing campaigns—it requires a structured, full-funnel lead generation engine. Cypher Swift delivers Lead Generation services that help organizations consistently attract, engage, convert, and retain high-intent prospects across digital channels. We work with B2B enterprises, B2C brands, SaaS companies, startups, and global service providers to build demand systems that align marketing, sales, and revenue operations.",
        mediaUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "Lead Generation Solutions & Services",
        content: "Explore our specialized lead generation products designed for exponential business growth.",
        cards: [
          { id: "card-1", title: "B2B Appointment Setting", description: "Securing highly qualified meetings with key decision-makers.", iconName: "Target" },
          { id: "card-2", title: "Inbound Funnel Optimization", description: "Maximizing the conversion rates of your existing website traffic.", iconName: "BarChart3" },
          { id: "card-3", title: "Account-Based Marketing", description: "Hyper-targeted campaigns for high-value enterprise clients.", iconName: "Briefcase" },
          { id: "card-4", title: "Cold Email Outreach", description: "Automated, personalized email sequences that get replies.", iconName: "Mail" },
          { id: "card-5", title: "Lead Scoring & CRM Sync", description: "Seamlessly routing warm leads directly to your sales team.", iconName: "Workflow" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "How we helped scale a global enterprise.",
        caseStudies: [
          {
            id: "cs-1",
            title: "SaaS Enterprise Lead Surge",
            bgImageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
            description: "By implementing a comprehensive B2B lead generation funnel, we increased qualified demos by 250% in 3 months for a leading enterprise SaaS provider.",
            points: [
              { id: "p1", title: "Funnel Mapping", iconName: "Map" },
              { id: "p2", title: "Target Identification", iconName: "Target" },
              { id: "p3", title: "Lead Capture Setup", iconName: "MousePointerClick" },
              { id: "p4", title: "CRM Integration", iconName: "Database" },
              { id: "p5", title: "Automated Nurturing", iconName: "Workflow" },
              { id: "p6", title: "ROI Tracking", iconName: "BarChart3" }
            ]
          },
          {
            id: "cs-2",
            title: "Real Estate Investor Acquisition",
            bgImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
            description: "We built an aggressive local lead generation campaign that decreased the Cost Per Lead (CPL) by 40% while doubling the closing rate for a commercial real estate firm.",
            points: [
              { id: "p1", title: "Local Targeting", iconName: "MapPin" },
              { id: "p2", title: "High-Intent Ads", iconName: "TrendingUp" },
              { id: "p3", title: "Landing Page A/B Testing", iconName: "Sparkles" },
              { id: "p4", title: "Speed-to-Lead Automation", iconName: "Zap" },
              { id: "p5", title: "Sales Handoff", iconName: "Users" },
              { id: "p6", title: "Performance Scaling", iconName: "Activity" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "page-social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing - Build Brand Authority",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Igniting Brand Conversations and Community Growth.",
        content: "Social Media is the pulse of modern consumer behavior. Cypher Swift provides elite Social Media Marketing services that transform passive scrollers into active brand advocates. From crafting viral TikTok strategies to building B2B thought leadership on LinkedIn, our data-backed approach ensures your social presence drives measurable engagement, brand loyalty, and direct revenue.",
        mediaUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "Social Media Marketing Services",
        content: "Complete solutions to dominate your industry's social landscape.",
        cards: [
          { id: "card-1", title: "Content Strategy & Creation", description: "High-end graphics, Reels, and TikToks that demand attention.", iconName: "Sparkles" },
          { id: "card-2", title: "Community Management", description: "Active engagement, responding to comments, and building a loyal following.", iconName: "Users" },
          { id: "card-3", title: "Paid Social Amplification", description: "Strategic ad spend to boost your best-performing organic content.", iconName: "TrendingUp" },
          { id: "card-4", title: "Influencer Collaborations", description: "Partnering with industry voices to expand your brand's reach.", iconName: "Star" },
          { id: "card-5", title: "Social Listening & Analytics", description: "Tracking brand sentiment and competitor moves in real-time.", iconName: "BarChart3" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "Real results from our social media campaigns.",
        caseStudies: [
          {
            id: "cs-1",
            title: "E-Commerce Lifestyle Brand Explosion",
            bgImageUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1200",
            description: "By revamping their Instagram and TikTok presence with UGC (User Generated Content) and interactive stories, we grew their following by 150k in 6 months and increased direct social sales by 400%.",
            points: [
              { id: "p1", title: "UGC Campaigns", iconName: "Users" },
              { id: "p2", title: "Viral Reel Strategy", iconName: "Video" },
              { id: "p3", title: "Hashtag Optimization", iconName: "Hash" },
              { id: "p4", title: "Community Building", iconName: "Heart" },
              { id: "p5", title: "Social Commerce", iconName: "ShoppingBag" },
              { id: "p6", title: "Monthly Analytics", iconName: "BarChart3" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "page-seo",
    slug: "seo",
    title: "Search Engine Optimization (SEO) - Dominate Organic Search",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Securing the Top Spot When Customers Search.",
        content: "Organic search visibility is the most sustainable source of long-term revenue. Cypher Swift's SEO experts utilize technical precision, authoritative backlink building, and semantic content strategies to push your brand to the top of Google. We don't just chase traffic; we target high-intent keywords that bring buyers directly to your digital doorstep.",
        mediaUrl: "https://images.unsplash.com/photo-1432888117247-2b0e6dfa0698?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "Comprehensive SEO Strategies",
        content: "Data-driven techniques to conquer search engine rankings.",
        cards: [
          { id: "card-1", title: "Technical SEO Audits", description: "Fixing site speed, crawl errors, and indexability issues.", iconName: "Code" },
          { id: "card-2", title: "On-Page Optimization", description: "Structuring content, headers, and metadata for maximum relevance.", iconName: "FileText" },
          { id: "card-3", title: "High-Authority Link Building", description: "Acquiring powerful backlinks from trusted industry domains.", iconName: "Link" },
          { id: "card-4", title: "Local SEO & GMB Profiles", description: "Dominating the map pack for local service businesses.", iconName: "MapPin" },
          { id: "card-5", title: "SEO Content Creation", description: "Publishing semantic, helpful content that Google loves.", iconName: "PenTool" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "Achieving Page 1 dominance.",
        caseStudies: [
          {
            id: "cs-1",
            title: "National Retailer Traffic Boom",
            bgImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
            description: "Through a massive technical cleanup and targeted long-tail keyword strategy, we increased organic non-branded traffic by 310%, leading to a massive spike in online revenue.",
            points: [
              { id: "p1", title: "Technical Audit", iconName: "Search" },
              { id: "p2", title: "Keyword Mapping", iconName: "Map" },
              { id: "p3", title: "Content Pruning", iconName: "Scissors" },
              { id: "p4", title: "Link Outreach", iconName: "Link" },
              { id: "p5", title: "Core Web Vitals", iconName: "Activity" },
              { id: "p6", title: "SERP Tracking", iconName: "BarChart3" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "page-performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing - AI-Optimized ROI Campaigns",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Data-Driven Campaigns Where Every Dollar Counts.",
        content: "Performance marketing is about measurable, scalable results. Cypher Swift deploys aggressive, omnichannel performance campaigns driven by AI algorithms and rigorous A/B testing. We focus strictly on KPIs—CPA, ROAS, and LTV—ensuring your marketing budget acts as a precise investment vehicle for immediate revenue growth.",
        mediaUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "Performance Marketing Strategies",
        content: "Unlocking unprecedented ROI with programmatic precision.",
        cards: [
          { id: "card-1", title: "Programmatic Advertising", description: "Real-time automated bidding across global ad exchanges.", iconName: "Cpu" },
          { id: "card-2", title: "Conversion Rate Optimization", description: "Continuous multivariate testing of landing pages and funnels.", iconName: "MousePointerClick" },
          { id: "card-3", title: "Cross-Channel Attribution", description: "Understanding the exact touchpoints that drive a sale.", iconName: "GitMerge" },
          { id: "card-4", title: "Dynamic Creative Optimization", description: "AI-generated ad variants tailored to the individual user.", iconName: "Sparkles" },
          { id: "card-5", title: "Affiliate & Partner Marketing", description: "Leveraging third-party networks for cost-effective acquisition.", iconName: "Users" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "Scaling revenue with mathematical precision.",
        caseStudies: [
          {
            id: "cs-1",
            title: "FinTech App User Acquisition",
            bgImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
            description: "By implementing a strict CPA-focused programmatic campaign, we scaled a new FinTech app to 100,000 active users within 4 months while reducing the cost-per-install by 65%.",
            points: [
              { id: "p1", title: "Algorithm Training", iconName: "Cpu" },
              { id: "p2", title: "A/B Testing", iconName: "SplitSquareHorizontal" },
              { id: "p3", title: "Attribution Modeling", iconName: "GitMerge" },
              { id: "p4", title: "LTV Analysis", iconName: "BarChart3" },
              { id: "p5", title: "Budget Scaling", iconName: "TrendingUp" },
              { id: "p6", title: "Fraud Prevention", iconName: "ShieldCheck" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "page-retargeting-marketing",
    slug: "retargeting-marketing",
    title: "Retargeting Marketing - Re-engage & Convert Lost Visitors",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Don't Let High-Intent Visitors Slip Away.",
        content: "Over 97% of visitors leave a website without taking action. Cypher Swift's Retargeting Marketing services ensure your brand stays top-of-mind. We use advanced tracking pixels and dynamic ad formats to re-engage bounced traffic across social networks, search engines, and partner sites, guiding them back to your funnel to complete their purchase or inquiry.",
        mediaUrl: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "Advanced Retargeting Solutions",
        content: "Recapture lost revenue with persistent, tailored messaging.",
        cards: [
          { id: "card-1", title: "Dynamic Product Ads", description: "Showing users the exact products they viewed but didn't buy.", iconName: "ShoppingBag" },
          { id: "card-2", title: "Cross-Device Tracking", description: "Reaching users seamlessly across mobile, tablet, and desktop.", iconName: "MonitorSmartphone" },
          { id: "card-3", title: "Cart Abandonment Campaigns", description: "High-urgency ads designed to close the sale immediately.", iconName: "ShoppingCart" },
          { id: "card-4", title: "Video Sequence Retargeting", description: "Moving users down the funnel with a planned series of video ads.", iconName: "Video" },
          { id: "card-5", title: "Custom CRM Audiences", description: "Uploading email lists to retarget existing or lapsed customers.", iconName: "Database" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "Bringing buyers back to the checkout line.",
        caseStudies: [
          {
            id: "cs-1",
            title: "Luxury Apparel Cart Recovery",
            bgImageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200",
            description: "We implemented a dynamic 3-step retargeting sequence across Facebook and Google Display for a luxury clothing brand, recovering $450k in abandoned cart revenue in a single quarter.",
            points: [
              { id: "p1", title: "Pixel Configuration", iconName: "Code" },
              { id: "p2", title: "Dynamic Feeds", iconName: "Database" },
              { id: "p3", title: "Urgency Copywriting", iconName: "PenTool" },
              { id: "p4", title: "Frequency Capping", iconName: "Clock" },
              { id: "p5", title: "Offer Testing", iconName: "Sparkles" },
              { id: "p6", title: "ROAS Tracking", iconName: "TrendingUp" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "page-ai-marketing-automation",
    slug: "ai-marketing-automation",
    title: "AI Marketing Automation - Smart Workflows & Nurturing",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Scaling Your Sales with Artificial Intelligence.",
        content: "Manual lead nurturing is slow and prone to errors. Cypher Swift integrates cutting-edge AI Marketing Automation tools that streamline your entire customer journey. From intelligent chatbots that qualify leads 24/7 to predictive email sequencing and automated CRM updates, we build smart infrastructures that allow your team to focus on closing, not chasing.",
        mediaUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "Intelligent Automation Services",
        content: "Eliminate repetitive tasks and hyper-personalize customer interactions.",
        cards: [
          { id: "card-1", title: "Predictive Lead Scoring", description: "AI algorithms that rank leads based on their likelihood to close.", iconName: "Target" },
          { id: "card-2", title: "Conversational AI Chatbots", description: "Smart bots that answer FAQs and book meetings automatically.", iconName: "MessageSquare" },
          { id: "card-3", title: "Automated Email Journeys", description: "Drip campaigns that adapt based on user behavior and triggers.", iconName: "Mail" },
          { id: "card-4", title: "CRM Architecture", description: "Structuring HubSpot/Salesforce for maximum automation efficiency.", iconName: "Database" },
          { id: "card-5", title: "Omnichannel Sync", description: "Ensuring marketing data flows perfectly into sales pipelines.", iconName: "Workflow" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "Working smarter, not harder.",
        caseStudies: [
          {
            id: "cs-1",
            title: "B2B Tech Company Pipeline Automation",
            bgImageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
            description: "By deploying a customized HubSpot AI workflow and an intelligent qualification bot, we reduced their sales cycle length by 35% and saved the sales team 20 hours per week in manual entry.",
            points: [
              { id: "p1", title: "Workflow Mapping", iconName: "Map" },
              { id: "p2", title: "Bot Scripting", iconName: "Code" },
              { id: "p3", title: "CRM Integration", iconName: "Database" },
              { id: "p4", title: "Behavioral Triggers", iconName: "Zap" },
              { id: "p5", title: "Sales Alignment", iconName: "Users" },
              { id: "p6", title: "Optimization", iconName: "Activity" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "page-paid-advertising-campaigns",
    slug: "paid-advertising-campaigns",
    title: "Paid Advertising Campaigns Services",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Instant Visibility. Immediate Revenue.",
        content: "When you need fast, scalable results, nothing beats precision Paid Advertising. Cypher Swift manages high-budget PPC campaigns across Google Ads, Microsoft Ads, and premium display networks. We focus on rigorous keyword research, compelling ad copy, and relentless bid optimization to guarantee that you acquire customers at the lowest possible cost.",
        mediaUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "PPC & Display Solutions",
        content: "Maximize your ad spend with data-driven paid search strategies.",
        cards: [
          { id: "card-1", title: "Search Engine Marketing (SEM)", description: "Capturing high-intent searches on Google and Bing.", iconName: "Search" },
          { id: "card-2", title: "Display Network Campaigns", description: "Building brand awareness with visually striking banner ads.", iconName: "Image" },
          { id: "card-3", title: "Video Ads (YouTube)", description: "Engaging pre-roll and mid-roll video campaigns.", iconName: "Video" },
          { id: "card-4", title: "Shopping Ads (E-commerce)", description: "Showcasing your product inventory directly in search results.", iconName: "ShoppingBag" },
          { id: "card-5", title: "A/B Copy Testing", description: "Continuously refining ad headlines and descriptions for higher CTR.", iconName: "PenTool" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "Dominating the paid search landscape.",
        caseStudies: [
          {
            id: "cs-1",
            title: "Legal Firm Lead Generation",
            bgImageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200",
            description: "In a highly competitive market, we restructured a personal injury law firm's Google Ads account, implementing negative keyword lists and bid modifiers to decrease their Cost Per Acquisition by 55%.",
            points: [
              { id: "p1", title: "Keyword Audit", iconName: "Search" },
              { id: "p2", title: "Negative Keywords", iconName: "MinusCircle" },
              { id: "p3", title: "Ad Copy Writing", iconName: "PenTool" },
              { id: "p4", title: "Landing Pages", iconName: "Layout" },
              { id: "p5", title: "Call Tracking", iconName: "Phone" },
              { id: "p6", title: "Bid Adjustments", iconName: "TrendingUp" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "page-target-audience-reach",
    slug: "target-audience-reach",
    title: "Target Audience Reach Services",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Connecting Your Brand with the People Who Matter.",
        content: "Marketing is useless if it's not seen by the right eyes. Cypher Swift's Target Audience Reach Services utilize advanced demographic, psychographic, and behavioral profiling to put your brand directly in front of your ideal customers. We leverage big data to eliminate wasted impressions and ensure your message resonates with those most likely to convert.",
        mediaUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "Audience Profiling & Penetration",
        content: "Scientifically identifying and acquiring your perfect customer.",
        cards: [
          { id: "card-1", title: "Buyer Persona Development", description: "Creating detailed profiles of your ideal target customers.", iconName: "UserCheck" },
          { id: "card-2", title: "Lookalike Audiences", description: "Finding new users who share traits with your best existing clients.", iconName: "Users" },
          { id: "card-3", title: "Geo-Fencing & Hyper-Local", description: "Targeting users within specific physical boundaries.", iconName: "MapPin" },
          { id: "card-4", title: "Behavioral Targeting", description: "Serving ads based on a user's browsing history and interests.", iconName: "Target" },
          { id: "card-5", title: "B2B Firmographic Targeting", description: "Reaching decision-makers based on company size, revenue, and job title.", iconName: "Briefcase" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "Hitting the bullseye on customer acquisition.",
        caseStudies: [
          {
            id: "cs-1",
            title: "Niche Software Market Penetration",
            bgImageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
            description: "By utilizing highly specific LinkedIn firmographic targeting and AI-built lookalike audiences, we successfully introduced a niche software product to 500+ C-level executives in the manufacturing sector.",
            points: [
              { id: "p1", title: "Persona Mapping", iconName: "UserCheck" },
              { id: "p2", title: "Data Harvesting", iconName: "Database" },
              { id: "p3", title: "List Segmentation", iconName: "List" },
              { id: "p4", title: "Custom Messaging", iconName: "MessageSquare" },
              { id: "p5", title: "Omnichannel Delivery", iconName: "Globe" },
              { id: "p6", title: "Conversion Analysis", iconName: "BarChart3" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "page-influencer-marketing",
    slug: "influencer-marketing",
    title: "Influencer Marketing Services",
    pageType: "service",
    isPublished: true,
    sections: [
      {
        id: "sec-overview",
        type: "overview",
        title: "Borrowing Trust to Accelerate Brand Growth.",
        content: "Consumers trust recommendations from people they admire. Cypher Swift manages end-to-end Influencer Marketing campaigns, connecting your brand with vetted macro and micro-influencers whose audiences align perfectly with your target market. We handle the outreach, negotiation, content guidelines, and ROI tracking to ensure authentic partnerships that drive massive sales.",
        mediaUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800",
        bullets: []
      },
      {
        id: "sec-services",
        type: "services-grid",
        title: "End-to-End Influencer Management",
        content: "Strategic partnerships that create authentic brand champions.",
        cards: [
          { id: "card-1", title: "Influencer Vetting & Sourcing", description: "Finding creators with high engagement and authentic followings.", iconName: "Search" },
          { id: "card-2", title: "Contract Negotiation", description: "Managing deliverables, usage rights, and payment structures.", iconName: "FileText" },
          { id: "card-3", title: "Campaign Strategy & Briefs", description: "Providing creative direction while maintaining creator authenticity.", iconName: "Map" },
          { id: "card-4", title: "UGC Whitelisting", description: "Running paid ads through the influencer's social handles.", iconName: "TrendingUp" },
          { id: "card-5", title: "Affiliate & Promo Tracking", description: "Measuring direct sales generated by each specific creator.", iconName: "BarChart3" }
        ]
      },
      {
        id: "sec-case-study",
        type: "case-study",
        title: "Client Success & Transformation",
        content: "Going viral with the right partnerships.",
        caseStudies: [
          {
            id: "cs-1",
            title: "Beauty Brand Product Launch",
            bgImageUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200",
            description: "We orchestrated a synchronized launch featuring 50 micro-influencers on TikTok and Instagram. The campaign generated 4.5 million organic impressions and sold out the initial product run in just 72 hours.",
            points: [
              { id: "p1", title: "Creator Scouting", iconName: "Search" },
              { id: "p2", title: "Product Seeding", iconName: "Package" },
              { id: "p3", title: "Brief Creation", iconName: "PenTool" },
              { id: "p4", title: "Content Review", iconName: "Eye" },
              { id: "p5", title: "Launch Coordination", iconName: "Clock" },
              { id: "p6", title: "Sales Attribution", iconName: "DollarSign" }
            ]
          }
        ]
      }
    ]
  }
];

const dataPath = './src/data/initialData.ts';
let content = fs.readFileSync(dataPath, 'utf8');

// Replace the initialDynamicPages array
const regex = /export const initialDynamicPages: DynamicPage\[\] = \[[\s\S]*?\];/;
const replacement = 'export const initialDynamicPages: DynamicPage[] = ' + JSON.stringify(pagesData, null, 2) + ';';

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(dataPath, content);
  console.log('Successfully updated initialData.ts');
} else {
  console.log('Could not find initialDynamicPages array.');
}
