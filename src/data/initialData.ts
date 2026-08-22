// @ts-nocheck
import { SiteContent, DynamicPage } from '../types';

export const initialSiteContent: SiteContent = {
  "hero": {
    "badgeText": "Local | National and Global Reach",
    "headlineMain": "Grow Your Business with Local, National & Global",
    "headlineHighlight": "Digital Marketing",
    "subheadline": "Drive qualified leads, increase brand visibility, and scale your global presence with data-driven digital marketing strategies tailored for modern growth.",
    "ctaPrimaryText": "Explore Services",
    "ctaSecondaryText": "Talk to an Expert",
    "statNumber": "+342%",
    "statLabel": "Avg. Pipeline Revenue Growth",
    "statBadgeText": "Verified Agency Partner"
  },
  "whatIs": {
    "title": "What is Digital Marketing?",
    "subtitle": "The Engine of Modern Global Business Scaling",
    "descriptionParagraph1": "Digital marketing is the targeted, data-backed strategy of promoting products, services, and brands through electronic channels like search engines, social media, paid advertising networks, and email workflows.",
    "descriptionParagraph2": "At Lumora, we transcend standard advertising. We combine algorithmic audience targeting, AI-enhanced campaign optimization, and creative brand storytelling to convert international digital attention into scalable pipeline revenue.",
    "keyPillars": [
      {
        "title": "Precision Data Analytics",
        "desc": "Track every dollar spent down to individual user acquisition touchpoints with full conversion attribution.",
        "icon": "BarChart3"
      },
      {
        "title": "Rapid Execution Speed",
        "desc": "Deploy agile multi-channel campaigns in hours, optimizing live ad performance using active behavioral data.",
        "icon": "Zap"
      },
      {
        "title": "Omnichannel Scalability",
        "desc": "Connect search, social, display, and retargeting into a seamless funnel that nurtures leads 24/7 globally.",
        "icon": "Globe2"
      }
    ]
  },
  "whyChoose": {
    "title": "Why Choose Lumora?",
    "subtitle": "Built for High-Growth Enterprises, SMEs & Ambitious Brands",
    "points": [
      {
        "id": "p1",
        "title": "10+ Years Industry Experience",
        "description": "Deep domain expertise navigating search engine algorithm updates and international ad market dynamics.",
        "icon": "Award"
      },
      {
        "id": "p2",
        "title": "Certified Growth Experts",
        "description": "Certified Google Premier Partners, Meta Business Partners, and HubSpot accredited strategists.",
        "icon": "ShieldCheck"
      },
      {
        "id": "p3",
        "title": "ROI-Focused Strategy",
        "description": "We measure success in qualified leads, lowered Customer Acquisition Cost (CAC), and bottom-line revenue.",
        "icon": "TrendingUp"
      },
      {
        "id": "p4",
        "title": "AI-Powered Optimization",
        "description": "Automated real-time bidding, AI creative testing, and predictive customer journey mapping.",
        "icon": "Cpu"
      },
      {
        "id": "p5",
        "title": "100% Transparent Reporting",
        "description": "Real-time client dashboard with instant campaign metrics, lead logs, and spent budget breakdown.",
        "icon": "PieChart"
      },
      {
        "id": "p6",
        "title": "Dedicated Account Manager",
        "description": "A single, responsive point of contact overseeing strategy execution and weekly alignment calls.",
        "icon": "UserCheck"
      }
    ]
  },
  "services": [
    {
      "id": "diagnose-marketing",
      "title": "Diagnose Marketing",
      "shortDescription": "Identify growth blockers, wasted ad spend, and hidden revenue opportunities.",
      "fullDescription": "Before scaling your marketing efforts, you need to know exactly what is working, what is wasting budget, and where your hidden growth opportunities lie. Our Marketing Diagnosis process dissects your entire digital footprint—from technical SEO and paid ad performance to conversion funnels and competitor gaps.",
      "iconName": "Activity",
      "features": ["Technical SEO Audits", "Paid Media Spend Analysis", "Conversion Rate Optimization (CRO)", "Competitor Benchmarking"],
      "deliverables": ["Comprehensive Audit Report", "Prioritized Action Plan", "Tech Stack Review", "Strategy Alignment Session"],
      "recommendedFor": "Businesses experiencing stagnant growth or inefficient ad spend",
      "badge": "Highly Recommended"
    },
    {
      "id": "target-audience-reach",
      "title": "Target Audience Reach",
      "shortDescription": "Identify, isolate, and engage your exact demographic with surgical precision.",
      "fullDescription": "Broad, untargeted marketing is a massive drain on your budget. Target Audience Reach is about identifying and engaging the exact demographic, firmographic, and psychographic profiles most likely to buy your product. We leverage advanced data modeling and programmatic networks to put your brand directly in front of the right people—locally, nationally, or globally.",
      "iconName": "Crosshair",
      "features": ["Persona & Intent Mapping", "Programmatic ABM Targeting", "Geo-Fencing & Local Targeting", "Cross-Device Retargeting"],
      "deliverables": ["Audience Intelligence Report", "Custom Audience Building", "Programmatic Media Plan", "Cost-Per-Acquisition Optimization"],
      "recommendedFor": "B2B Enterprises, Niche Retailers, and Event Promoters",
      "badge": "High Conversion"
    },
    {
      "id": "search-engine-optimization",
      "title": "Search Engine Optimization (SEO)",
      "shortDescription": "Dominate search results and capture high-intent, revenue-generating organic traffic.",
      "fullDescription": "Being on the second page of Google is the same as not existing. We build robust, technically sound, and content-rich SEO strategies that drive sustainable organic traffic. Our approach goes beyond vanity metrics; we focus on ranking for the revenue-generating keywords that your ideal customers are actively searching for.",
      "iconName": "Search",
      "features": ["Technical SEO Audits", "On-Page & Keyword Strategy", "Topical Authority Content", "High-Authority Link Building"],
      "deliverables": ["Keyword Mapping Blueprint", "Technical Remediation Plan", "Monthly Link Reports", "Organic Traffic Dashboards"],
      "recommendedFor": "B2B SaaS, E-commerce, and high-growth startups",
      "badge": "Core Strategy"
    },
    {
      "id": "social-media-marketing",
      "title": "Social Media Marketing",
      "shortDescription": "Build brand authority, foster trust, and drive active audience engagement.",
      "fullDescription": "Social media is no longer just a branding exercise; it is a primary driver of customer acquisition and retention. We build dynamic, platform-specific strategies that turn passive scrollers into active brand advocates. From high-production video content to community management, we ensure your brand voice cuts through the noise and drives measurable business impact.",
      "iconName": "Share2",
      "features": ["Short-Form Video Production", "B2B LinkedIn Authority", "Community Management", "Influencer Partnerships"],
      "deliverables": ["Social Strategy Playbook", "Monthly Content Calendar", "Video & Graphic Assets", "Engagement & Growth Reports"],
      "recommendedFor": "DTC E-commerce, B2B Thought Leaders, and SaaS Brands",
      "badge": "Community Focus"
    },
    {
      "id": "paid-advertising-campaigns",
      "title": "Paid Advertising Campaigns",
      "shortDescription": "Highly engineered paid media ecosystems that drive immediate, measurable ROI.",
      "fullDescription": "Paid advertising is the fastest way to scale your revenue—if executed correctly. We don't just 'run ads'; we build highly engineered paid media ecosystems across search, social, and programmatic networks. By combining relentless A/B testing with advanced bidding algorithms, we eliminate wasted spend and drive highly qualified leads and direct sales.",
      "iconName": "Megaphone",
      "features": ["Google & Bing Search Ads", "Paid Social Campaigns", "Programmatic Display", "E-Commerce Shopping Ads"],
      "deliverables": ["Funnel Architecture Map", "Ad Creative & Copy", "Algorithmic Bidding Strategy", "Daily ROAS Monitoring"],
      "recommendedFor": "Aggressive Growth Companies and Performance-Driven E-Commerce",
      "badge": "Revenue Driver"
    },
    {
      "id": "performance-marketing",
      "title": "Performance Marketing",
      "shortDescription": "Data-driven marketing that strictly aligns every dollar spent with bottom-line revenue.",
      "fullDescription": "Traditional marketing hopes for results; Performance Marketing guarantees accountability. We align every marketing dollar spent directly with your bottom line. By obsessing over metrics like Cost Per Acquisition (CPA), Customer Lifetime Value (LTV), and Return on Ad Spend (ROAS), we build growth engines that scale profitably and predictably.",
      "iconName": "Target",
      "features": ["Conversion Rate Optimization", "Multi-Touch Attribution", "Affiliate Marketing", "LTV/CAC Optimization"],
      "deliverables": ["Performance Growth Model", "Server-Side Tracking Setup", "A/B Testing Roadmap", "Cohort Analysis Reports"],
      "recommendedFor": "Scale-Ups, E-Commerce Brands, and Data-Driven Enterprises",
      "badge": "Scalable Growth"
    },
    {
      "id": "demand-generation",
      "title": "Demand Generation",
      "shortDescription": "Create awareness, educate your market, and build a sustainable pipeline of high-intent buyers.",
      "fullDescription": "Stop competing solely for the 3% of the market that is ready to buy today. Our Demand Generation strategies educate, engage, and nurture the remaining 97% of your total addressable market. By distributing high-value content and building omnipresent brand authority, we ensure that when prospects are ready to buy, you are their only logical choice.",
      "iconName": "TrendingUp",
      "features": ["Omnichannel Content Distribution", "Account-Based Marketing (ABM)", "Webinar & Event Marketing", "Dark Social Strategies"],
      "deliverables": ["Demand Gen Strategy Playbook", "Content Amplification Funnels", "Sales & Marketing Alignment", "Brand Awareness Metrics"],
      "recommendedFor": "B2B Enterprises, SaaS, and high-ticket service providers",
      "badge": "Strategic Growth"
    },
    {
      "id": "lead-generation",
      "title": "Lead Generation",
      "shortDescription": "Build a predictable pipeline of high-intent, qualified sales prospects.",
      "fullDescription": "Traffic means nothing if it doesn't convert into sales conversations. Our Lead Generation services are ruthlessly focused on one thing: filling your sales pipeline with qualified prospects who have an immediate need for your solution. We optimize the entire conversion journey to ensure maximum lead velocity at the lowest possible cost.",
      "iconName": "Users",
      "features": ["Inbound Lead Funnels", "Outbound Automation", "Lead Magnet Creation", "Automated Lead Scoring"],
      "deliverables": ["Conversion-Optimized Landing Pages", "CRM Integration Setup", "Email Nurture Sequences", "Cost-Per-Lead (CPL) Tracking"],
      "recommendedFor": "B2B Services, Consultancies, and High-Ticket Local Services",
      "badge": "Sales Engine"
    },
    {
      "id": "retargeting-marketing",
      "title": "Retargeting Marketing",
      "shortDescription": "Recapture lost traffic and turn hesitant visitors into high-value customers.",
      "fullDescription": "97% of your website visitors will leave without taking action. If you aren't bringing them back, you are leaving massive amounts of revenue on the table. Our Retargeting Marketing services deploy highly personalized, cross-channel campaigns that follow your high-intent prospects across the web, reminding them why they need your solution and giving them the exact push they need to convert.",
      "iconName": "RotateCcw",
      "features": ["Dynamic E-Commerce Retargeting", "Cross-Channel Pixel Tracking", "Cart Abandonment Sequences", "Sequential Ad Storytelling"],
      "deliverables": ["Omnipresence Pixel Setup", "Dynamic Ad Creative", "Audience Segmentation Strategy", "Recovery Revenue Dashboard"],
      "recommendedFor": "E-Commerce, SaaS, and High-Consideration B2B Buyers",
      "badge": "Revenue Recovery"
    },
    {
      "id": "influencer-marketing",
      "title": "Influencer Marketing",
      "shortDescription": "Partner with highly trusted creators to drive massive authentic brand awareness.",
      "fullDescription": "Consumers trust people, not logos. Influencer Marketing is no longer about vanity metrics or generic endorsements; it is about partnering with highly trusted creators who can authentically integrate your product into their audience's daily lives. We manage the entire lifecycle—from creator discovery and rigorous contract negotiation to campaign execution and strict ROI tracking.",
      "iconName": "Star",
      "features": ["Micro-Influencer Campaigns", "B2B Thought Leader Collabs", "User-Generated Content (UGC)", "Affiliate Creator Networks"],
      "deliverables": ["Creator Discovery & Vetting", "Creative Briefs & Contracts", "Product Seeding Logistics", "Promo Code ROI Tracking"],
      "recommendedFor": "DTC Brands, App Developers, and B2B SaaS Innovators",
      "badge": "Viral Scale"
    },
    {
      "id": "business-branding",
      "title": "Business Branding",
      "shortDescription": "Build a distinctive business identity, command premium pricing, and secure lasting brand loyalty.",
      "fullDescription": "Your brand is more than just a logo; it is the psychological relationship between your company and your consumers. We build robust Business Branding strategies that articulate your unique value proposition, establish market authority, and create memorable visual and verbal identities that resonate with your target audience.",
      "iconName": "Briefcase",
      "features": ["Brand Strategy & Positioning", "Visual Identity Design", "Brand Voice & Messaging", "Comprehensive Corporate Guidelines"],
      "deliverables": ["Brand Architecture Blueprint", "Logo & Typography Suites", "Brand Tone of Voice Document", "Complete Brand Book"],
      "recommendedFor": "Startups, enterprises scaling up, and legacy brands seeking a refresh",
      "badge": "Premium"
    },
    {
      "id": "personal-branding",
      "title": "Personal Branding",
      "shortDescription": "Become the recognized authority in your industry and monetize your personal brand.",
      "fullDescription": "In the modern digital economy, people buy from people they trust. A strong personal brand elevates you from a commodity to an industry thought leader. We help founders, executives, and industry experts build, scale, and monetize their personal brands through targeted content, PR, and strategic positioning.",
      "iconName": "User",
      "features": ["Executive Positioning", "LinkedIn Thought Leadership", "Digital PR & Media Features", "Content Creation & Video"],
      "deliverables": ["Personal Brand Strategy", "Ghostwritten Content", "Media Kit", "Speaking Engagement Outreach"],
      "recommendedFor": "Founders, C-Level Executives, and Industry Experts",
      "badge": "High Impact"
    },
    {
      "id": "brand-management",
      "title": "Brand Management",
      "shortDescription": "Protect your digital reputation, ensure brand consistency, and track equity over time.",
      "fullDescription": "A brand is not built in a day, but its reputation can be damaged in seconds. Comprehensive Brand Management goes beyond visual consistency; it's about actively monitoring sentiment, protecting digital equity, and ensuring brand compliance across all touchpoints. We serve as the guardians of your brand's integrity.",
      "iconName": "Shield",
      "features": ["Reputation Management", "Brand Compliance", "Digital Asset Management", "Sentiment Analysis"],
      "deliverables": ["Brand Monitoring Dashboard", "Crisis Response Playbook", "Asset Library Setup", "Quarterly Equity Reports"],
      "recommendedFor": "Established enterprises, public figures, and scaling organizations",
      "badge": "Guardian"
    },
    {
      "id": "ai-marketing-automation",
      "title": "AI Marketing Automation",
      "shortDescription": "Hyper-personalize customer journeys, predict buying behaviors, and automate complex workflows at scale.",
      "fullDescription": "Stop relying on manual, error-prone tasks. AI Marketing Automation allows you to scale your efforts exponentially without scaling your headcount. From AI-driven email sequencing and dynamic ad creative to intelligent chatbots and CRM syncing, we implement the technology that allows your team to do more with less while driving higher conversions.",
      "iconName": "Cpu",
      "features": ["Predictive Lead Scoring", "Conversational AI Chatbots", "Dynamic Email Sequences", "Programmatic Ad Buying"],
      "deliverables": ["Automation Architecture Blueprint", "CRM & API Integrations", "Custom Chatbot Deployment", "Machine Learning Optimization"],
      "recommendedFor": "Data-driven companies, E-Commerce, and high-volume B2B sales teams",
      "badge": "Cutting-Edge"
    },
    {
      "id": "expert-monthly-audit",
      "title": "Expert Monthly Audit",
      "shortDescription": "Continuous oversight, forensic analysis, and strategic alignment for your digital ecosystem.",
      "fullDescription": "The digital landscape changes daily—what worked last month might be wasting budget today. Our Expert Monthly Audit service provides ongoing, rigorous oversight of your entire marketing ecosystem. We act as an external board of advisors, evaluating your team's execution, auditing ad accounts for inefficiencies, and ensuring your strategy stays aligned with your revenue goals.",
      "iconName": "FileSearch",
      "features": ["Paid Media Forensic Audits", "Technical SEO Tracking", "Conversion Funnel Analysis", "Competitor Movement Tracking"],
      "deliverables": ["Executive Strategy Briefing", "Actionable Fix Roadmap", "Monthly Advisory Call", "Algorithmic Diagnostics"],
      "recommendedFor": "Companies with in-house teams or multiple agency partners",
      "badge": "Advisory"
    }
  ],
  "whoShouldUse": [
    {
      "id": "w1",
      "title": "Startups & Emerging Tech",
      "description": "Rapidly establish product-market validation, generate early adopter signups, and scale investor pitch traction.",
      "iconName": "Rocket",
      "benefits": [
        "Low CAC User Acquisition",
        "Product Launch Buzz",
        "Investor Ready Metrics"
      ]
    },
    {
      "id": "w2",
      "title": "Healthcare & Medical Practice",
      "description": "Attract patient consultations, build trusted provider reputations, and rank high on local map packs.",
      "iconName": "HeartPulse",
      "benefits": [
        "HIPAA Compliant Funnels",
        "High-Intent Patient Leads",
        "Local Map Domination"
      ]
    },
    {
      "id": "w3",
      "title": "Real Estate & Property Developers",
      "description": "Generate high-net-worth investor inquiries, luxury property buyer leads, and pre-construction bookings.",
      "iconName": "Building2",
      "benefits": [
        "Virtual Tour Ad Campaigns",
        "HNWI Buyer Targeting",
        "Direct Broker Inquiries"
      ]
    },
    {
      "id": "w4",
      "title": "E-commerce & Retail Brands",
      "description": "Scale direct-to-consumer sales with Google Shopping feeds, TikTok shop strategy, and automated email flows.",
      "iconName": "ShoppingBag",
      "benefits": [
        "High Shopping ROAS",
        "Abandoned Cart Recovery",
        "Repeat Order Retention"
      ]
    },
    {
      "id": "w5",
      "title": "IT & Software Companies (SaaS)",
      "description": "Drive demo bookings, free trial signups, and enterprise software contract pipelines with LinkedIn B2B ads.",
      "iconName": "Laptop",
      "benefits": [
        "SQL Lead Generation",
        "Demo Booking Engine",
        "Whitepaper Gated Downloads"
      ]
    },
    {
      "id": "w6",
      "title": "Manufacturing & B2B Enterprises",
      "description": "Expand distributor networks, secure global bulk order RFQs, and position engineering capabilities.",
      "iconName": "Factory",
      "benefits": [
        "International RFQ Inquiries",
        "Supply Chain Visibility",
        "Trade Show Amplification"
      ]
    }
  ],
  "achievements": [
      {
          "id": "case-1",
          "clientName": "MedTech Solutions",
          "industry": "Healthcare",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "300+",
                  "change": "+100%"
              }
          ],
          "challenge": "Increased patient acquisition through targeted local SEO and Google Ads.",
          "solution": "Increased patient acquisition through targeted local SEO and Google Ads.",
          "results": "Our data-driven approach resulted in a 300+ increase in monthly patient inquiries, optimizing their local presence and reducing Cost Per Acquisition (CPA) by 40%.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Healthcare. Highly recommended!",
              "author": "VP of Marketing, MedTech Solutions",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-2",
          "clientName": "Dental Care Network",
          "industry": "Healthcare",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "150%",
                  "change": "+100%"
              }
          ],
          "challenge": "Boosted online bookings by 150% in 6 months.",
          "solution": "Boosted online bookings by 150% in 6 months.",
          "results": "We completely revamped their booking funnel and ran hyper-local Facebook and Instagram campaigns, leading to a massive 150% surge in booked appointments.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Healthcare. Highly recommended!",
              "author": "VP of Marketing, Dental Care Network",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-3",
          "clientName": "Global Pharma Inc.",
          "industry": "Healthcare",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "$2M+",
                  "change": "+100%"
              }
          ],
          "challenge": "Generated $2M+ in pipeline for new medical device launch.",
          "solution": "Generated $2M+ in pipeline for new medical device launch.",
          "results": "Through a combination of LinkedIn B2B lead generation and programmatic display ads, we successfully launched their new device to hospital administrators globally.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Healthcare. Highly recommended!",
              "author": "VP of Marketing, Global Pharma Inc.",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-4",
          "clientName": "CloudScale SaaS",
          "industry": "B2B & IT SaaS",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "3x",
                  "change": "+100%"
              }
          ],
          "challenge": "Tripled Enterprise MRR using Account-Based Marketing (ABM).",
          "solution": "Tripled Enterprise MRR using Account-Based Marketing (ABM).",
          "results": "We implemented a multi-touch ABM strategy on LinkedIn, increasing demo requests by 3x and closing $5M+ in new annual recurring revenue.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to B2B & IT SaaS. Highly recommended!",
              "author": "VP of Marketing, CloudScale SaaS",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-5",
          "clientName": "CyberDefend Pro",
          "industry": "B2B & IT SaaS",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "45%",
                  "change": "+100%"
              }
          ],
          "challenge": "Reduced cost-per-lead by 45% in highly competitive cyber security space.",
          "solution": "Reduced cost-per-lead by 45% in highly competitive cyber security space.",
          "results": "By optimizing Google Search campaigns and creating high-converting landing pages, we slashed CPL by 45% while doubling lead volume.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to B2B & IT SaaS. Highly recommended!",
              "author": "VP of Marketing, CyberDefend Pro",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-6",
          "clientName": "DataSync Platforms",
          "industry": "B2B & IT SaaS",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "500+",
                  "change": "+100%"
              }
          ],
          "challenge": "Secured 500+ webinar attendees for product launch.",
          "solution": "Secured 500+ webinar attendees for product launch.",
          "results": "We utilized Facebook and LinkedIn ads to drive a highly targeted audience to their virtual product launch, resulting in a record-breaking 500+ attendees.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to B2B & IT SaaS. Highly recommended!",
              "author": "VP of Marketing, DataSync Platforms",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-7",
          "clientName": "Luxury Estates Dubai",
          "industry": "Real Estate",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "$50M+",
                  "change": "+100%"
              }
          ],
          "challenge": "Sold $50M+ in luxury off-plan properties through Facebook lead gen.",
          "solution": "Sold $50M+ in luxury off-plan properties through Facebook lead gen.",
          "results": "We created immersive video ads showcasing luxury properties and targeted high-net-worth individuals, resulting in over $50M in closed sales.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Real Estate. Highly recommended!",
              "author": "VP of Marketing, Luxury Estates Dubai",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-8",
          "clientName": "Urban Living Realty",
          "industry": "Real Estate",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "200%",
                  "change": "+100%"
              }
          ],
          "challenge": "Increased agent inquiries by 200% via Google Ads.",
          "solution": "Increased agent inquiries by 200% via Google Ads.",
          "results": "We completely restructured their Google Ads account, focusing on high-intent search terms. This led to a 200% increase in qualified inquiries for their agents.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Real Estate. Highly recommended!",
              "author": "VP of Marketing, Urban Living Realty",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-9",
          "clientName": "Commercial Spaces Ltd.",
          "industry": "Real Estate",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "40%",
                  "change": "+100%"
              }
          ],
          "challenge": "Increased commercial lease applications by 40%.",
          "solution": "Increased commercial lease applications by 40%.",
          "results": "By leveraging LinkedIn Ads targeting business owners and office managers, we boosted applications for commercial leases by 40% in just 3 months.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Real Estate. Highly recommended!",
              "author": "VP of Marketing, Commercial Spaces Ltd.",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-10",
          "clientName": "Fashion Nova UK",
          "industry": "E-commerce",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "5x",
                  "change": "+100%"
              }
          ],
          "challenge": "5x Return on Ad Spend (ROAS) during Black Friday.",
          "solution": "5x Return on Ad Spend (ROAS) during Black Friday.",
          "results": "We designed a comprehensive cross-channel strategy (Facebook, Instagram, Google Shopping) that resulted in a massive 5x ROAS during their biggest sale of the year.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to E-commerce. Highly recommended!",
              "author": "VP of Marketing, Fashion Nova UK",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-11",
          "clientName": "Organic Skincare Co.",
          "industry": "E-commerce",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "60%",
                  "change": "+100%"
              }
          ],
          "challenge": "Increased repeat customer rate by 60% through email marketing.",
          "solution": "Increased repeat customer rate by 60% through email marketing.",
          "results": "We implemented automated email flows (abandoned cart, welcome series, win-back) that drastically improved customer retention and increased repeat purchases by 60%.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to E-commerce. Highly recommended!",
              "author": "VP of Marketing, Organic Skincare Co.",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-12",
          "clientName": "Tech Gadgets Store",
          "industry": "E-commerce",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "2x",
                  "change": "+100%"
              }
          ],
          "challenge": "Doubled conversion rate through CRO and TikTok Ads.",
          "solution": "Doubled conversion rate through CRO and TikTok Ads.",
          "results": "We optimized their product pages for conversions and launched engaging TikTok ad campaigns, effectively doubling their overall website conversion rate.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to E-commerce. Highly recommended!",
              "author": "VP of Marketing, Tech Gadgets Store",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-13",
          "clientName": "SteelWorks Industrial",
          "industry": "Manufacturing",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "$10M+",
                  "change": "+100%"
              }
          ],
          "challenge": "Generated $10M+ in B2B pipeline via LinkedIn & SEO.",
          "solution": "Generated $10M+ in B2B pipeline via LinkedIn & SEO.",
          "results": "We combined targeted LinkedIn outreach with technical SEO to capture high-value search intent, generating over $10M in qualified B2B pipeline.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Manufacturing. Highly recommended!",
              "author": "VP of Marketing, SteelWorks Industrial",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-14",
          "clientName": "AutoParts Global",
          "industry": "Manufacturing",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "85%",
                  "change": "+100%"
              }
          ],
          "challenge": "Increased distributor inquiries by 85% globally.",
          "solution": "Increased distributor inquiries by 85% globally.",
          "results": "By running multi-language Google Ads campaigns across Europe and Asia, we successfully increased inquiries from international distributors by 85%.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Manufacturing. Highly recommended!",
              "author": "VP of Marketing, AutoParts Global",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
      },
      {
          "id": "case-15",
          "clientName": "EcoPackaging Solutions",
          "industry": "Manufacturing",
          "location": "Global",
          "metrics": [
              {
                  "label": "Key Result",
                  "value": "3x",
                  "change": "+100%"
              }
          ],
          "challenge": "Tripled organic traffic in 8 months.",
          "solution": "Tripled organic traffic in 8 months.",
          "results": "Our comprehensive content strategy and technical SEO improvements resulted in a 3x increase in organic traffic, establishing them as an industry thought leader.",
          "testimonial": {
              "quote": "Lumora completely transformed our approach to Manufacturing. Highly recommended!",
              "author": "VP of Marketing, EcoPackaging Solutions",
              "role": "Client"
          },
          "image_url": "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800"
      }
  ],
    "process": [
    {
      "stepNumber": 1,
      "title": "Requirement & Competitor Analysis",
      "description": "We audit your existing digital footprint, study competitor ad strategies, and identify market opportunities.",
      "duration": "Week 1",
      "iconName": "Search",
      "keyOutputs": [
        "Full SEO & PPC Audit",
        "Competitor Keyword Matrix",
        "Target Persona Profiles"
      ]
    },
    {
      "stepNumber": 2,
      "title": "Strategy & Funnel Planning",
      "description": "We build a customized omnichannel marketing blueprint detailing channel budgets, KPI benchmarks, and messaging.",
      "duration": "Week 1 - 2",
      "iconName": "Compass",
      "keyOutputs": [
        "Media Spend Allocation",
        "Funnel Architecture Map",
        "A/B Testing Hypothesis"
      ]
    },
    {
      "stepNumber": 3,
      "title": "Campaign Setup & Ad Creation",
      "description": "Our design and copy team crafts high-converting creatives, video assets, landing pages, and tracking pixels.",
      "duration": "Week 2",
      "iconName": "Palette",
      "keyOutputs": [
        "Custom Landing Pages",
        "Ad Copies & Motion Reels",
        "Conversion Attribution Pixels"
      ]
    },
    {
      "stepNumber": 4,
      "title": "Multi-Channel Campaign Launch",
      "description": "Campaigns go live across search, social, and programmatic networks under active real-time bidding supervision.",
      "duration": "Week 3 Onward",
      "iconName": "Rocket",
      "keyOutputs": [
        "Live Google/Meta/LinkedIn Ads",
        "Instant Lead Routing",
        "Live Client Dashboard"
      ]
    },
    {
      "stepNumber": 5,
      "title": "AI Optimization & Scaling",
      "description": "We continuously test ad variants, trim non-performing keywords, and reallocate budget to top-converting angles.",
      "duration": "Ongoing",
      "iconName": "TrendingUp",
      "keyOutputs": [
        "Weekly Ad Refresh",
        "CPA Reduction",
        "Scalable Budget Expansion"
      ]
    },
{
            "stepNumber": 6,
            "title": "A/B Optimization",
            "description": "A/B testing ad creatives, bidding strategies, and funnel copy to drive down cost-per-lead.",
            "duration": "Ongoing",
            "iconName": "Activity",
            "keyOutputs": [
                  "A/B Test Results",
                  "Conversion Optimization",
                  "CPL Reduction"
            ]
      
    },
{
            "stepNumber": 7,
            "title": "Reporting & Analytics",
            "description": "Transparent weekly lead attribution reporting and real-time dashboard analytics access.",
            "duration": "Ongoing",
            "iconName": "BarChart2",
            "keyOutputs": [
                  "Weekly Reports",
                  "Live Dashboard Access",
                  "ROI Tracking"
            ]
      
    },
{
            "stepNumber": 8,
            "title": "Growth Scaling",
            "description": "Re-allocating budget into winning channels and expanding market reach globally.",
            "duration": "Ongoing",
            "iconName": "TrendingUp",
            "keyOutputs": [
                  "Budget Reallocation",
                  "Market Expansion",
                  "Revenue Growth"
            ]
      
    }
  ],
  "industries": [
    {
      "id": "i1",
      "name": "Healthcare",
      "description": "Patient acquisition, clinic marketing, and HIPAA-compliant funnels.",
      "iconName": "HeartPulse",
      "caseStudyHighlight": "240% increase in patient bookings"
    },
    {
      "id": "i2",
      "name": "Real Estate",
      "description": "HNWI lead acquisition, project launches, and agent branding.",
      "iconName": "Building2",
      "caseStudyHighlight": "$48M in property transactions"
    },
    {
      "id": "i3",
      "name": "E-commerce",
      "description": "D2C sales growth, Google Shopping, and retargeting flows.",
      "iconName": "ShoppingBag",
      "caseStudyHighlight": "8.4x average e-commerce ROAS"
    },
    {
      "id": "i4",
      "name": "B2B & IT SaaS",
      "description": "SQL lead generation, demo scheduling, and LinkedIn campaigns.",
      "iconName": "Laptop",
      "caseStudyHighlight": "4,800+ enterprise demo leads"
    },
    {
      "id": "i5",
      "name": "Manufacturing",
      "description": "International RFQ inquiries and supply chain buyer reach.",
      "iconName": "Factory",
      "caseStudyHighlight": "Export contracts across 18 countries"
    },
    {
      "id": "i6",
      "name": "Education & EdTech",
      "description": "Student enrollment campaigns and course signups.",
      "iconName": "GraduationCap",
      "caseStudyHighlight": "12,000+ new student signups"
    }
  ],
  "faqs": [
    {
      "id": "faq-1",
      "question": "How quickly can Lumora launch our digital marketing campaign?",
      "answer": "After our initial strategy call and alignment, campaign setup, landing page build, and creative assets typically take 5 to 7 business days before official launch.",
      "category": "General"
    },
    {
      "id": "faq-2",
      "question": "Do you handle local, national, and international campaigns?",
      "answer": "Yes! We run hyper-local map pack SEO campaigns for local businesses as well as multi-region, multi-currency international ad campaigns across North America, Europe, Middle East, and Asia-Pacific.",
      "category": "General"
    },
    {
      "id": "faq-3",
      "question": "How do you track leads and measure return on investment (ROI)?",
      "answer": "We install custom conversion tracking pixels, Google Tag Manager event triggers, and call tracking metrics. Every lead captured is logged in real-time on your client dashboard and forwarded to your CRM.",
      "category": "Results"
    },
    {
      "id": "faq-4",
        "question": "Can we edit pages, create custom landing pages, or replicate pages?",
        "answer": "Absolutely. Lumora includes a full dynamic Admin Panel and SEO Replicator where you can edit content, duplicate pages for different locations, set custom slugs, manage meta tags, and preview live SEO scores.",
        "category": "Process"
      }
    ],
    "teamMembers": [
      {
        "id": "team-1",
        "name": "Alexandra Hayes",
        "role": "Head of Strategy",
        "specializations": ["Omnichannel Marketing", "Predictive Analytics", "Revenue Operations"],
        "imageUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        "description": "Alexandra leads our global strategy division with a laser focus on data-driven acquisition."
      },
      {
        "id": "team-2",
        "name": "Marcus Reynolds",
        "role": "Director of Performance Media",
        "specializations": ["Programmatic Advertising", "Google Ads", "B2B Lead Gen"],
        "imageUrl": "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        "description": "Marcus manages our high-budget paid media campaigns."
      },
      {
        "id": "team-3",
        "name": "Sarah Jenkins",
        "role": "Creative Director",
        "specializations": ["Brand Storytelling", "Video Production", "UI/UX Design"],
        "imageUrl": "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
        "description": "Sarah oversees all creative initiatives at Lumora, transforming complex data points into compelling visual narratives."
      }
    ],
    "contactInfo": {
    "phone": "+91 9179765554",
    "whatsapp": "+91 9179765554",
    "email": "consult@lumora.expert",
    "address": "Plot No 5/C, Sy No 83/1, Raidurgam panmaktha Hyderabad Knowledge City, Serilingampally, Hyderabad, Telangana 500081.",
    "workingHours": "Mon - Sat: 9:00 AM - 8:00 PM IST / Global 24/7 Support"
  },
  "caseStudiesList": [
  {
    "id": "case-healthcare-1",
    "title": "MedTech Solutions",
    "category": "Healthcare",
    "description": "Increased patient acquisition through targeted local SEO and Google Ads.",
    "image_url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-healthcare-2",
    "title": "Dental Care Network",
    "category": "Healthcare",
    "description": "Boosted online bookings by 150% in 6 months.",
    "image_url": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-healthcare-3",
    "title": "Global Pharma Inc.",
    "category": "Healthcare",
    "description": "Generated $2M+ in pipeline for new medical device launch.",
    "image_url": "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-b2b-1",
    "title": "CloudScale SaaS",
    "category": "B2B & IT SaaS",
    "description": "Tripled Enterprise MRR using Account-Based Marketing (ABM).",
    "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-b2b-2",
    "title": "DataSync Pro",
    "category": "B2B & IT SaaS",
    "description": "Drove 10,000+ free trial signups via Technical SEO.",
    "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-b2b-3",
    "title": "CyberDefend",
    "category": "B2B & IT SaaS",
    "description": "Reduced customer churn, saving $500k annually.",
    "image_url": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-realestate-1",
    "title": "Skyline Developers",
    "category": "Real Estate",
    "description": "Sold out 50+ luxury condos in record time.",
    "image_url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-realestate-2",
    "title": "Urban Spaces Realty",
    "category": "Real Estate",
    "description": "Increased lead volume by 400% through Google Local Services.",
    "image_url": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-realestate-3",
    "title": "Commercial Property Group",
    "category": "Real Estate",
    "description": "Sourced $10M+ in commercial leasing contracts.",
    "image_url": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-ecomm-1",
    "title": "Fashion Nova Styles",
    "category": "E-commerce",
    "description": "Achieved a 5x Return on Ad Spend (ROAS) on TikTok.",
    "image_url": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-ecomm-2",
    "title": "EcoLiving Goods",
    "category": "E-commerce",
    "description": "Doubled conversion rates with CRO and email flows.",
    "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-ecomm-3",
    "title": "TechGadgets Direct",
    "category": "E-commerce",
    "description": "Generated $1M in Black Friday sales.",
    "image_url": "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800"
  }
],
  "rndModules": [
    {
        "id": "57b8a1af-a325-4496-9b2f-3f13bd19128c",
        "title": "Predictive Buyer Journey Engine",
        "description": "Simulates conversion probabilities across 10,000+ audience pathways before allocating live media spend.",
        "badge": "Machine Learning",
        "image_url": "https://cdn-icons-png.flaticon.com/512/2043/2043102.png"
    },
    {
        "id": "fe1e79b0-5649-46f0-9bd1-7d7c0c6c840d",
        "title": "Automated Multi-Touch Attribution",
        "description": "Tracks every user touchpoint across search, social, and email to allocate budget to high-converting channels.",
        "badge": "Real-Time Data",
        "image_url": "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
    },
    {
        "id": "e4fc4e37-e202-46b7-b96b-74e422fc7318",
        "title": "Autonomous AI Lead Qualification",
        "description": "Interactive AI chatbots and automated scoring sequences verify intent before handing off leads to sales teams.",
        "badge": "Automation",
        "image_url": "https://cdn-icons-png.flaticon.com/512/4711/4711987.png"
    },
    {
        "id": "43538efd-e468-47dc-a0db-825671f7181e",
        "title": "Creative Resonance Computer Vision",
        "description": "AI visual analysis evaluates ad creative elements (colors, copy layout, imagery) against historic ROAS benchmarks.",
        "badge": "Computer Vision",
        "image_url": "https://cdn-icons-png.flaticon.com/512/2919/2919864.png"
    }
],
  "aboutCorePillars": [
    {
        "id": "a2fcb6c7-2dce-439b-b724-9b3dc0556cd5",
        "title": "Data-Driven Strategy",
        "description": "Every campaign hypothesis is validated using historical search trends and conversion benchmarks.",
        "iconName": "BarChart3"
    },
    {
        "id": "f019dbdc-a8b4-4954-9831-9d8ef97c25c1",
        "title": "Certified Premier Partners",
        "description": "Accredited Google Premier, Meta Business, and HubSpot marketing strategists managing your budget.",
        "iconName": "Award"
    },
    {
        "id": "e51abb94-2fde-4e70-86f7-b8b3db35ca15",
        "title": "Relentless ROI Focus",
        "description": "We optimize down to Customer Acquisition Cost (CAC) and customer lifetime value (LTV).",
        "iconName": "TrendingUp"
    }
],
  "aboutMissionCards": [
    {
        "id": "859bd44e-9776-41e3-bbff-e91e9c9318bf",
        "title": "Omnichannel Funnel Scaling",
        "description": "Google Ads, Meta, LinkedIn & Programmatic",
        "iconName": "Globe2"
    },
    {
        "id": "45aaac53-d8a2-4282-869c-ef191e0c3680",
        "title": "AI Campaign Automation",
        "description": "Real-time automated bidding & AI creative testing",
        "iconName": "Zap"
    },
    {
        "id": "35c815fc-79bb-4612-aa50-62466c77f32e",
        "title": "100% Attribution Transparency",
        "description": "Live client dashboard tracking CAC, leads & ROI",
        "iconName": "CheckCircle2"
    }
],
  "trustedLogos": [
    {
        "id": "28a5f009-d080-40ef-b293-48e87dd26e30",
        "name": "HubSpot",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg"
    },
    {
        "id": "4614aca6-ae66-4ccf-9632-2a303b0c4595",
        "name": "Honeywell",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Honeywell_logo.svg/320px-Honeywell_logo.svg.png"
    },
    {
        "id": "89930202-bda6-4bdb-b7b6-4237ff554b0c",
        "name": "Microsoft",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
    },
    {
        "id": "5a08e4b3-4f62-44fa-b6da-febce51ae7e4",
        "name": "Startup India",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Startup_India_Logo.svg"
    },
    {
        "id": "b9e6484f-2b05-4649-be4c-041137940a24",
        "name": "Google",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    }
],
  "testimonials": [
    {
        "id": "1",
        "name": "Rahul Sharma",
        "company": "TechVentures India",
        "role": "CEO",
        "content": "Lumora transformed our lead generation pipeline. We went from 20 leads/month to 350+ qualified leads in just 3 months. Their ROI-focused approach is unlike anything we've experienced before.",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        "id": "2",
        "name": "Sarah Mitchell",
        "company": "MedFirst Healthcare",
        "role": "Marketing Director",
        "content": "The healthcare campaigns they built for us were HIPAA-compliant, highly targeted, and incredibly effective. Patient appointment bookings increased by 280% in the first quarter.",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        "id": "3",
        "name": "James Thornton",
        "company": "PropMax Real Estate",
        "role": "Director",
        "content": "Their real estate lead generation expertise is unmatched. Quality leads, transparent reporting, and a dedicated account manager who actually cares about our results. 5 stars across the board.",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        "id": "4",
        "name": "Priya Nair",
        "company": "EduFirst Academy",
        "role": "Founder",
        "content": "We doubled our student enrollments in one academic year using Lumora's digital marketing strategy. The combination of SEO and paid ads was perfectly calibrated for our goals.",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80"
    }
],
    siteMeta: {
        siteName: "Lumora",
        siteTagline: "Digital Marketing Agency",
        footerTagline: "",
        consultationHeading: "What Are Your Business Requirements?",
        consultationSubheading: "Book a free consultation with our experts."
    },
    navigationVisibility: {
        showHome: true,
        showAbout: true,
        showPortfolio: true,
        showRnd: true,
        showConsultation: true
    }
};

export const initialDynamicPages: DynamicPage[] = [
  {
    "id": "page-diagnose-marketing",
    "slug": "diagnose-marketing",
    "title": "Marketing Diagnosis & Audit Services",
    "heroBadge": "Activity",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 1,
    "sections": [
      {
        "id": "sec-overview-diagnose-marketing",
        "type": "overview",
        "title": "Stop Guessing. Start Scaling with a Data-Driven Marketing Diagnosis.",
        "content": "Before investing heavily in new campaigns, you need absolute clarity on your current performance. Our Marketing Diagnosis process dissects your entire digital ecosystem—identifying technical roadblocks, wasted advertising budget, broken conversion funnels, and untapped market opportunities. We provide a clear, actionable roadmap to turn inefficiencies into profitable growth.",
        "mediaUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-diagnose-marketing",
        "type": "services-grid",
        "title": "What We Analyze",
        "content": "A 360-degree deep dive into your digital marketing ecosystem.",
        "cards": [
          { "id": "card-1", "title": "SEO & Organic Traffic", "description": "Checking indexability, keyword gaps, backlink health, and content relevancy.", "iconName": "Search" },
          { "id": "card-2", "title": "Paid Media & Advertising", "description": "Auditing ROAS, Cost-Per-Acquisition, bidding strategies, and campaign structure.", "iconName": "MousePointerClick" },
          { "id": "card-3", "title": "Conversion Rate (CRO)", "description": "Analyzing user journeys, landing page friction, and lead capture forms.", "iconName": "TrendingUp" },
          { "id": "card-4", "title": "Competitor Benchmarking", "description": "Identifying gaps in your market positioning and uncovering their strategies.", "iconName": "Crosshair" },
          { "id": "card-5", "title": "Tech Stack & Analytics", "description": "Ensuring tracking pixels, GA4, and CRMs are accurately aligned and firing.", "iconName": "Settings" }
        ]
      },
      {
        "id": "sec-how-we-do-it-diagnose-marketing",
        "type": "how-we-do-it",
        "title": "Our Diagnostic Process",
        "content": "We use a proven, data-first approach to uncover inefficiencies and map out a strategic recovery and growth plan.",
        "mediaUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Discovery & Data Collection", "description": "We gather historical data, gain access to your platforms, and align on business goals." },
          { "id": "hw-2", "title": "Technical Deep Dive", "description": "Our experts manually audit your ad accounts, website code, and tracking systems." },
          { "id": "hw-3", "title": "Competitor & Market Analysis", "description": "We evaluate your positioning against top industry competitors to find strategic gaps." },
          { "id": "hw-4", "title": "Strategic Roadmapping", "description": "We compile our findings into a prioritized, actionable growth roadmap." },
          { "id": "hw-5", "title": "Implementation Handoff", "description": "We review the plan with you and seamlessly transition into execution mode." }
        ]
      },
      {
        "id": "sec-case-study-diagnose-marketing",
        "type": "case-study",
        "title": "Diagnostic Success Stories",
        "content": "See how our comprehensive audits have transformed struggling campaigns into highly profitable growth engines.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "E-Commerce Revenue Recovery",
            "bgImageUrl": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
            "description": "Our diagnosis identified a critical tracking bug and massive landing page friction. After implementing our fixes, they saw a 45% increase in conversion rate and a $120k revenue boost within 30 days.",
            "points": [
              { "id": "p1", "title": "Tracking Fixed", "iconName": "CheckCircle" },
              { "id": "p2", "title": "Friction Removed", "iconName": "Zap" },
              { "id": "p3", "title": "45% CRO Boost", "iconName": "TrendingUp" }
            ]
          },
          {
            "id": "cs-2",
            "title": "B2B Ad Spend Optimization",
            "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
            "description": "We audited a $50k/mo Google Ads account for a SaaS company, eliminating 60% of wasted spend on irrelevant keywords while doubling their qualified enterprise leads.",
            "points": [
              { "id": "p1", "title": "60% Waste Cut", "iconName": "Scissors" },
              { "id": "p2", "title": "Leads Doubled", "iconName": "Users" },
              { "id": "p3", "title": "Lower CAC", "iconName": "ArrowDown" }
            ]
          }
        ]
      },
      {
        "id": "faq-diagnose-marketing",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our marketing diagnostic process.",
        "cards": [
          {
            "id": "faq-1",
            "title": "How long does a full marketing diagnosis take?",
            "description": "Typically, a comprehensive audit takes 1 to 2 weeks, depending on the complexity of your active campaigns, the size of your website, and your overall digital footprint."
          },
          {
            "id": "faq-2",
            "title": "What do we receive at the end of the audit?",
            "description": "You will receive a highly detailed, plain-English report containing our findings, data-backed insights, and a prioritized action plan detailing exactly what needs to be fixed and scaled."
          },
          {
            "id": "faq-3",
            "title": "Will you implement the fixes for us?",
            "description": "Yes! While the diagnosis provides you with a standalone roadmap, our team is fully equipped to transition seamlessly from the audit phase into full implementation and ongoing campaign management."
          }
        ]
      }
    ]
  },
  {
    "id": "page-target-audience-reach",
    "slug": "target-audience-reach",
    "title": "Precision Target Audience Reach",
    "heroBadge": "Crosshair",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 2,
    "sections": [
      {
        "id": "sec-overview-target-audience-reach",
        "type": "overview",
        "title": "Precision Targeting. Global Scale.",
        "content": "Broad, 'spray and pray' marketing is a massive drain on your budget. Target Audience Reach is about identifying, isolating, and engaging the exact demographic, firmographic, and psychographic profiles most likely to buy your product. We leverage advanced 1st-party data modeling and programmatic networks to put your brand directly in front of the right decision-makers—whether they are a mile away or across the globe.",
        "mediaUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-target-audience-reach",
        "type": "services-grid",
        "title": "Audience Reach Capabilities",
        "content": "How we find and engage your ideal buyers across the digital landscape.",
        "cards": [
          { "id": "card-1", "title": "Persona Mapping", "description": "Creating hyper-accurate buyer profiles based on real-world data and intent signals.", "iconName": "Users" },
          { "id": "card-2", "title": "Programmatic Display", "description": "Targeting users across millions of premium sites in real-time.", "iconName": "Monitor" },
          { "id": "card-3", "title": "Geo-Fencing", "description": "Hyper-local mobile targeting for physical events, competitors, or storefronts.", "iconName": "MapPin" },
          { "id": "card-4", "title": "Account-Based Targeting", "description": "Isolating C-level decision-makers at specific target companies.", "iconName": "Briefcase" },
          { "id": "card-5", "title": "Cross-Device Retargeting", "description": "Following high-intent users seamlessly across mobile, desktop, and CTV.", "iconName": "Smartphone" }
        ]
      },
      {
        "id": "sec-how-we-do-it-target-audience-reach",
        "type": "how-we-do-it",
        "title": "The Targeting Methodology",
        "content": "A scientific approach to eliminating wasted ad impressions.",
        "mediaUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Audience Intelligence", "description": "Analyzing your 1st-party CRM data to understand who your best customers actually are." },
          { "id": "hw-2", "title": "Lookalike Modeling", "description": "Using machine learning algorithms to find new users who match your best buyers." },
          { "id": "hw-3", "title": "Platform Selection", "description": "Choosing the right digital networks based on B2B vs B2C intent and media consumption habits." },
          { "id": "hw-4", "title": "Creative Personalization", "description": "Dynamically adapting ad messaging to speak directly to specific audience segments." },
          { "id": "hw-5", "title": "Performance Optimization", "description": "Continuously trimming wasted impressions to lower your overall Cost Per Acquisition." }
        ]
      },
      {
        "id": "sec-case-study-target-audience-reach",
        "type": "case-study",
        "title": "Targeting Success Stories",
        "content": "How precision reach drove massive ROI for our clients.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Global B2B Software Launch",
            "bgImageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200",
            "description": "We utilized LinkedIn and programmatic Account-Based Marketing (ABM) to isolate and reach CTOs across 5 countries. This hyper-targeted approach yielded a 200% ROI in Q1 and secured 15 enterprise contracts.",
            "points": [
              { "id": "p1", "title": "200% ROI", "iconName": "TrendingUp" },
              { "id": "p2", "title": "CTO Targeting", "iconName": "Target" },
              { "id": "p3", "title": "Global Reach", "iconName": "Globe" }
            ]
          },
          {
            "id": "cs-2",
            "title": "Retail Franchise Expansion",
            "bgImageUrl": "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200",
            "description": "To support a national rollout, we deployed advanced geo-fencing around competitor locations and high-density shopping districts, driving a measurable 15% lift in physical store foot traffic.",
            "points": [
              { "id": "p1", "title": "Geo-Fencing", "iconName": "MapPin" },
              { "id": "p2", "title": "15% Foot Traffic", "iconName": "Users" },
              { "id": "p3", "title": "Competitor Conquesting", "iconName": "Crosshair" }
            ]
          }
        ]
      },
      {
        "id": "faq-target-audience-reach",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about Audience Reach & Targeting.",
        "cards": [
          {
            "id": "faq-1",
            "title": "Can you target specific job titles at specific companies?",
            "description": "Yes. Through Account-Based Marketing (ABM) and LinkedIn targeting, we can isolate decision-makers at specific companies with surgical precision."
          },
          {
            "id": "faq-2",
            "title": "How do you respect user privacy?",
            "description": "We strictly adhere to GDPR, CCPA, and utilize privacy-compliant 1st-party data strategies and contextual targeting as third-party cookies phase out."
          },
          {
            "id": "faq-3",
            "title": "What is the minimum audience size needed?",
            "description": "While niche audiences often convert higher, advertising algorithms typically require a pool of at least 1,000 to 5,000 users to optimize delivery effectively."
          }
        ]
      }
    ]
  },
  {
    "id": "page-search-engine-optimization",
    "slug": "search-engine-optimization",
    "title": "Search Engine Optimization (SEO) Services",
    "heroBadge": "Search",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 3,
    "sections": [
      {
        "id": "sec-overview-search-engine-optimization",
        "type": "overview",
        "title": "Dominate Search Results and Capture High-Intent Demand.",
        "content": "Being on the second page of Google is the same as not existing. We build robust, technically sound, and content-rich SEO strategies that drive sustainable, high-converting organic traffic. Our approach goes beyond vanity metrics; we focus entirely on ranking for the revenue-generating keywords that your ideal customers are actively searching for when they are ready to buy.",
        "mediaUrl": "https://images.unsplash.com/photo-1432888117426-1d3744957e84?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-search-engine-optimization",
        "type": "services-grid",
        "title": "Our SEO Architecture",
        "content": "A multi-disciplinary approach to climbing the search rankings.",
        "cards": [
          { "id": "card-1", "title": "Technical SEO", "description": "Optimizing site architecture, crawlability, and Core Web Vitals for maximum speed.", "iconName": "Settings" },
          { "id": "card-2", "title": "On-Page Strategy", "description": "Keyword targeting, internal link siloing, and meta data optimization.", "iconName": "FileText" },
          { "id": "card-3", "title": "Content Authority", "description": "Building long-form pillar pages to establish dominance in your topical niche.", "iconName": "BookOpen" },
          { "id": "card-4", "title": "Off-Page & PR", "description": "Acquiring high-authority backlinks and executing Digital PR campaigns.", "iconName": "Link" },
          { "id": "card-5", "title": "Local & Global SEO", "description": "Scaling your visibility in specific regional markets or dominating internationally.", "iconName": "Globe" }
        ]
      },
      {
        "id": "sec-how-we-do-it-search-engine-optimization",
        "type": "how-we-do-it",
        "title": "The Ranking Methodology",
        "content": "How we take websites from obscurity to industry dominance.",
        "mediaUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Comprehensive Audit", "description": "Identifying severe technical blockers and uncovering low-hanging keyword fruit." },
          { "id": "hw-2", "title": "Intent Mapping", "description": "Aligning your most valuable keywords with the specific stages of the buyer's journey." },
          { "id": "hw-3", "title": "Technical Remediation", "description": "Fixing code, server responses, and UX issues that are holding your rankings back." },
          { "id": "hw-4", "title": "Content Engine Activation", "description": "Deploying our writers to publish highly authoritative, search-optimized assets." },
          { "id": "hw-5", "title": "Continuous Outreach", "description": "Running ongoing link-building sprints to continually increase your Domain Authority." }
        ]
      },
      {
        "id": "sec-case-study-search-engine-optimization",
        "type": "case-study",
        "title": "Organic Growth Stories",
        "content": "How our SEO strategies translated into massive revenue growth.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "B2B SaaS Organic Scaling",
            "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
            "description": "By executing a topical cluster content strategy and a rigorous technical cleanup, we grew a SaaS company's non-branded organic traffic by 450% in 12 months, resulting in a 3x increase in enterprise demo requests.",
            "points": [
              { "id": "p1", "title": "450% Traffic Growth", "iconName": "TrendingUp" },
              { "id": "p2", "title": "3x Demo Requests", "iconName": "Users" },
              { "id": "p3", "title": "Topical Authority", "iconName": "Award" }
            ]
          },
          {
            "id": "cs-2",
            "title": "E-Commerce Traffic Recovery",
            "bgImageUrl": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
            "description": "An e-commerce retailer lost 60% of their traffic to an algorithmic penalty. We audited their backlink profile, disavowed toxic links, and restructured their category pages, recovering their traffic and boosting organic revenue by $2M year-over-year.",
            "points": [
              { "id": "p1", "title": "Penalty Lifted", "iconName": "CheckCircle" },
              { "id": "p2", "title": "$2M New Revenue", "iconName": "DollarSign" },
              { "id": "p3", "title": "Clean Backlinks", "iconName": "Shield" }
            ]
          }
        ]
      },
      {
        "id": "faq-search-engine-optimization",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our SEO services.",
        "cards": [
          {
            "id": "faq-1",
            "title": "How long does it take to see SEO results?",
            "description": "While resolving severe technical errors can yield quick wins within 30 days, meaningful, compounding organic growth typically takes between 3 to 6 months depending on the competitiveness of your industry."
          },
          {
            "id": "faq-2",
            "title": "Are backlinks still important for SEO?",
            "description": "Yes. High-quality, contextually relevant backlinks act as 'votes of confidence' from other sites and remain one of the top three ranking factors in Google's core algorithm."
          },
          {
            "id": "faq-3",
            "title": "Do you guarantee the #1 spot on Google?",
            "description": "No ethical agency can guarantee a #1 spot due to the constant volatility of search algorithms. What we do guarantee is a rigorous, data-driven methodology that reliably increases organic visibility and revenue."
          }
        ]
      }
    ]
  },
  {
    "id": "page-social-media-marketing",
    "slug": "social-media-marketing",
    "title": "Strategic Social Media Marketing",
    "heroBadge": "Share2",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 4,
    "sections": [
      {
        "id": "sec-overview-social-media-marketing",
        "type": "overview",
        "title": "Build Brand Authority and Drive Engagement.",
        "content": "Social media is no longer just a top-of-funnel branding exercise; it is a primary driver of customer acquisition, retention, and loyalty. We build dynamic, highly targeted social media strategies that turn passive scrollers into active brand advocates. From high-retention video production to meticulous community management, we ensure your brand voice cuts through the algorithmic noise and drives measurable revenue.",
        "mediaUrl": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-social-media-marketing",
        "type": "services-grid",
        "title": "Social Media Capabilities",
        "content": "A full-suite approach to dominating the social landscape.",
        "cards": [
          { "id": "card-1", "title": "Social Strategy", "description": "Defining your unique voice, content pillars, and platform-specific tactics.", "iconName": "Target" },
          { "id": "card-2", "title": "Video Production", "description": "High-retention, native short-form video for TikTok, Reels, and YouTube Shorts.", "iconName": "Video" },
          { "id": "card-3", "title": "Community Management", "description": "Active community engagement, comment moderation, and crisis response.", "iconName": "MessageCircle" },
          { "id": "card-4", "title": "LinkedIn Authority", "description": "Executive ghostwriting and B2B corporate page scaling.", "iconName": "Briefcase" },
          { "id": "card-5", "title": "Creator Partnerships", "description": "Sourcing and negotiating with high-impact influencers in your niche.", "iconName": "Users" }
        ]
      },
      {
        "id": "sec-how-we-do-it-social-media-marketing",
        "type": "how-we-do-it",
        "title": "The Content Engine",
        "content": "How we produce, publish, and scale your social presence.",
        "mediaUrl": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "The Brand Voice Audit", "description": "We establish a distinct tone, visual identity, and operational guidelines for your brand." },
          { "id": "hw-2", "title": "Calendar Creation", "description": "Planning a monthly mix of educational, entertaining, and promotional content." },
          { "id": "hw-3", "title": "Asset Production", "description": "Our in-house team designs graphics and edits trend-matching, high-retention video." },
          { "id": "hw-4", "title": "Publishing & Engagement", "description": "Deploying content at algorithmically optimal times and actively driving conversation." },
          { "id": "hw-5", "title": "Analytics & Iteration", "description": "Measuring engagement rates weekly to double-down on the creative that actually works." }
        ]
      },
      {
        "id": "sec-case-study-social-media-marketing",
        "type": "case-study",
        "title": "Social Growth Stories",
        "content": "How our social strategies built massive, engaged communities.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Viral Consumer Launch",
            "bgImageUrl": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1200",
            "description": "By leveraging a network of micro-influencers and native short-form video, we generated 2.5 million organic impressions on TikTok within the first 30 days of a DTC product launch, selling out their initial inventory.",
            "points": [
              { "id": "p1", "title": "2.5M Impressions", "iconName": "Eye" },
              { "id": "p2", "title": "Sold Out Inventory", "iconName": "ShoppingCart" },
              { "id": "p3", "title": "Viral Growth", "iconName": "TrendingUp" }
            ]
          },
          {
            "id": "cs-2",
            "title": "B2B LinkedIn Dominance",
            "bgImageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200",
            "description": "Through a combination of executive ghostwriting and high-value carousel posts, we grew a B2B tech company's LinkedIn page from 500 to 15,000 highly engaged industry followers in 6 months, directly sourcing 4 enterprise deals.",
            "points": [
              { "id": "p1", "title": "30x Follower Growth", "iconName": "Users" },
              { "id": "p2", "title": "4 Enterprise Deals", "iconName": "Briefcase" },
              { "id": "p3", "title": "Thought Leadership", "iconName": "Award" }
            ]
          }
        ]
      },
      {
        "id": "faq-social-media-marketing",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about scaling on social media.",
        "cards": [
          {
            "id": "faq-1",
            "title": "Do I need to be active on every social platform?",
            "description": "No. It is significantly more effective to dominate one or two platforms where your exact target audience spends their time, rather than spreading your resources too thin across all platforms."
          },
          {
            "id": "faq-2",
            "title": "How do you measure social media success?",
            "description": "We move far beyond vanity metrics like total followers. We measure success through engagement rates, click-through rates (CTR), shareability, and ultimately, attributed conversions in your CRM."
          },
          {
            "id": "faq-3",
            "title": "Do you handle all the video editing in-house?",
            "description": "Yes. Our internal creative team handles everything from scripting and storyboarding to post-production, sound design, and native trend-matching edits."
          }
        ]
      }
    ]
  },
  {
    "id": "page-paid-advertising-campaigns",
    "slug": "paid-advertising-campaigns",
    "title": "Performance Paid Advertising",
    "heroBadge": "Megaphone",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 5,
    "sections": [
      {
        "id": "sec-overview-paid-advertising-campaigns",
        "type": "overview",
        "title": "Strategic Paid Media for Immediate ROI.",
        "content": "Paid advertising is the fastest way to scale your revenue—but without precise execution, it's the fastest way to burn your budget. We don't just 'run ads'; we build highly engineered paid media ecosystems across search, social, and programmatic networks. By combining relentless A/B testing with advanced algorithmic bidding, we eliminate wasted spend and drive a predictable, scalable pipeline of qualified leads and direct sales.",
        "mediaUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-ads-we-manage-paid-advertising-campaigns",
        "type": "scrollable-cards",
        "title": "Ads We Manage",
        "content": "Dominating intent and capturing attention across the entire digital ecosystem.",
        "cards": [
          { "id": "card-1", "title": "Google Ads", "description": "Search, Display, Shopping, Performance Max & YouTube Ads", "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg", "linkUrl": "paid-advertising-campaigns/google-ads" },
          { "id": "card-2", "title": "Meta Ads", "description": "Facebook & Instagram Ads that build brand, leads & sales", "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", "linkUrl": "paid-advertising-campaigns/meta-ads" },
          { "id": "card-3", "title": "YouTube Ads", "description": "Video Ads that increase brand awareness and drive conversions", "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg", "linkUrl": "paid-advertising-campaigns/youtube-ads" },
          { "id": "card-4", "title": "LinkedIn Ads", "description": "B2B Leads, Brand Building & Targeted Outreach for Professionals", "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", "linkUrl": "paid-advertising-campaigns/linkedin-ads" },
          { "id": "card-5", "title": "Twitter Ads", "description": "Promote your brand and engage with your target audience on Twitter", "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg", "linkUrl": "paid-advertising-campaigns/twitter-ads" }
        ]
      },
      {
        "id": "sec-how-we-do-it-paid-advertising-campaigns",
        "type": "how-we-do-it",
        "title": "The Campaign Architecture",
        "content": "A mathematically rigorous approach to scaling ad spend profitably.",
        "mediaUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Profitability Audit", "description": "Analyzing your historical ad account data to instantly identify and cut wasted spend." },
          { "id": "hw-2", "title": "Funnel Mapping", "description": "Architecting the exact ad sequence from the very first click to the final conversion." },
          { "id": "hw-3", "title": "Creative Production", "description": "Designing thumb-stopping, psychology-driven ad creatives built explicitly for conversion." },
          { "id": "hw-4", "title": "Algorithmic Bidding", "description": "Deploying your campaigns with smart-bidding strategies to maximize machine learning." },
          { "id": "hw-5", "title": "Relentless Optimization", "description": "Daily monitoring, continuous A/B testing, and ruthless budget reallocation." }
        ]
      },
      {
        "id": "sec-case-study-paid-advertising-campaigns",
        "type": "case-study",
        "title": "Paid Media Success Stories",
        "content": "How we turned ad spend into predictable profit engines.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "E-Commerce ROAS Scaling",
            "bgImageUrl": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
            "description": "We took a DTC brand from a stagnant 1.5x to a 4.2x Return on Ad Spend (ROAS) within 90 days by completely restructuring their Google Shopping feeds and deploying dynamic creative testing on Meta.",
            "points": [
              { "id": "p1", "title": "4.2x ROAS", "iconName": "TrendingUp" },
              { "id": "p2", "title": "90 Day Scale", "iconName": "Clock" },
              { "id": "p3", "title": "Feed Optimized", "iconName": "Settings" }
            ]
          },
          {
            "id": "cs-2",
            "title": "B2B SaaS Lead Generation",
            "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
            "description": "A software company was overpaying for unqualified leads. We shifted their budget into hyper-targeted LinkedIn ABM campaigns and intent-based Google Ads, slashing their CPA by 45% while doubling lead volume.",
            "points": [
              { "id": "p1", "title": "45% Lower CPA", "iconName": "ArrowDown" },
              { "id": "p2", "title": "2x Lead Volume", "iconName": "Users" },
              { "id": "p3", "title": "High Intent", "iconName": "Target" }
            ]
          }
        ]
      },
      {
        "id": "faq-paid-advertising-campaigns",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about scaling with Paid Advertising.",
        "cards": [
          {
            "id": "faq-1",
            "title": "How much should I spend on ads?",
            "description": "We recommend starting with a budget that allows for statistically significant testing—usually a minimum of $3,000 to $5,000 per month, depending heavily on the CPCs in your specific industry."
          },
          {
            "id": "faq-2",
            "title": "How long does it take to see a positive ROI?",
            "description": "While leads and sales can start flowing on day one, achieving true algorithmic optimization and a stabilized, predictable ROI typically requires 30 to 60 days of active management."
          },
          {
            "id": "faq-3",
            "title": "Do you create the ad graphics and videos?",
            "description": "Yes. Our performance creative team designs all ad visuals and writes all copy specifically engineered to maximize click-through rates (CTR) and conversion rates (CVR)."
          }
        ]
      }
    ]
  },
  {
    "id": "page-performance-marketing",
    "slug": "performance-marketing",
    "title": "Data-Driven Performance Marketing",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 6,
    "sections": [
      {
        "id": "sec-overview-performance-marketing",
        "type": "overview",
        "title": "Data-Driven Marketing that Scales Your Revenue.",
        "content": "Traditional marketing hopes for results; Performance Marketing guarantees accountability. We align every single marketing dollar spent directly with your bottom line. By obsessing over hard metrics like Cost Per Acquisition (CPA), Customer Lifetime Value (LTV), and Return on Ad Spend (ROAS), we build highly tuned growth engines that scale profitably, predictably, and aggressively.",
        "mediaUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-performance-marketing",
        "type": "services-grid",
        "title": "Performance Capabilities",
        "content": "The tactical execution behind mathematically sound growth.",
        "cards": [
          { "id": "card-1", "title": "Conversion Optimization", "description": "Rigorous A/B testing of landing pages and funnels to maximize lead capture.", "iconName": "MousePointerClick" },
          { "id": "card-2", "title": "Multi-Touch Attribution", "description": "Tracking the exact customer journey to properly attribute revenue to the right channels.", "iconName": "Share2" },
          { "id": "card-3", "title": "Affiliate Marketing", "description": "Scaling revenue through vetted, performance-based revenue-share networks.", "iconName": "Users" },
          { "id": "card-4", "title": "LTV/CAC Optimization", "description": "Balancing your acquisition cost with lifetime value for sustainable scaling.", "iconName": "Activity" },
          { "id": "card-5", "title": "Scalable Media Buying", "description": "Injecting budget aggressively into winning campaigns while maintaining ROAS.", "iconName": "TrendingUp" }
        ]
      },
      {
        "id": "sec-how-we-do-it-performance-marketing",
        "type": "how-we-do-it",
        "title": "The Growth Engine Process",
        "content": "A systematic methodology for finding and exploiting profitable acquisition channels.",
        "mediaUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "The Growth Model", "description": "Building a mathematical model of your entire acquisition funnel to identify bottlenecks." },
          { "id": "hw-2", "title": "Tracking Infrastructure", "description": "Setting up pixel-perfect, server-side tracking to ensure absolute data integrity." },
          { "id": "hw-3", "title": "Rapid Testing Sprints", "description": "Deploying high-tempo weekly A/B tests on ad creative, copy, and landing pages." },
          { "id": "hw-4", "title": "Cohort Analysis", "description": "Reviewing historical retention data to find your most profitable customer segments." },
          { "id": "hw-5", "title": "Vertical Scaling", "description": "Aggressively increasing spend on winning variations to capture maximum market share." }
        ]
      },
      {
        "id": "sec-case-study-performance-marketing",
        "type": "case-study",
        "title": "Performance Scaling Wins",
        "content": "How we turned data into exponential revenue growth.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "E-Commerce Aggressive Scaling",
            "bgImageUrl": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
            "description": "By implementing strict server-side tracking and multi-touch attribution, we scaled a DTC brand's monthly ad spend from $50k to $250k while maintaining a 3.5x ROAS and actually improving their LTV/CAC ratio by 20%.",
            "points": [
              { "id": "p1", "title": "$250k/mo Spend", "iconName": "DollarSign" },
              { "id": "p2", "title": "Maintained 3.5x ROAS", "iconName": "TrendingUp" },
              { "id": "p3", "title": "Improved LTV", "iconName": "Activity" }
            ]
          },
          {
            "id": "cs-2",
            "title": "Lead Gen Profitability",
            "bgImageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
            "description": "A financial services firm was struggling with high acquisition costs. Through aggressive landing page CRO and eliminating wasted spend identified by our attribution model, we reduced their cost per qualified lead by 60%.",
            "points": [
              { "id": "p1", "title": "60% Lower CPL", "iconName": "ArrowDown" },
              { "id": "p2", "title": "CRO Focused", "iconName": "MousePointerClick" },
              { "id": "p3", "title": "Higher Lead Quality", "iconName": "CheckCircle" }
            ]
          }
        ]
      },
      {
        "id": "faq-performance-marketing",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our Performance Marketing approach.",
        "cards": [
          {
            "id": "faq-1",
            "title": "What is the difference between Performance Marketing and Paid Ads?",
            "description": "Paid advertising is simply a channel. Performance Marketing is the overarching methodology of running those channels (and others) strictly based on data, ROI, and measurable business outcomes."
          },
          {
            "id": "faq-2",
            "title": "How do you handle tracking in a post-cookie world?",
            "description": "We implement robust server-side tracking (like Facebook Conversion API), 1st-party data collection strategies, and advanced probabilistic attribution modeling to ensure data accuracy despite iOS updates."
          },
          {
            "id": "faq-3",
            "title": "Do you work on a performance basis?",
            "description": "For select, highly vetted partners that meet strict criteria regarding historical data and product-market fit, we do occasionally offer hybrid performance-based compensation models."
          }
        ]
      }
    ]
  },
  {
    "id": "page-demand-generation",
    "slug": "demand-generation",
    "title": "Enterprise Demand Generation Services",
    "heroBadge": "TrendingUp",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 7,
    "sections": [
      {
        "id": "sec-overview-demand-generation",
        "type": "overview",
        "title": "Don't Just Capture Demand. Create It.",
        "content": "Most companies fight fiercely over the 3% of the market that is ready to buy today, leading to skyrocketing acquisition costs and diminishing returns. Lumora's Demand Generation strategies shift the paradigm by actively educating, engaging, and nurturing the other 97%. Through high-value content distribution, omnipresent branding, and strategic market positioning, we make sure that when your prospects enter the buying cycle, you are the only logical choice.",
        "mediaUrl": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-demand-generation",
        "type": "services-grid",
        "title": "Demand Generation Channels",
        "content": "We deploy an omnipresent strategy across the platforms where your buyers learn and engage.",
        "cards": [
          { "id": "card-1", "title": "Content Amplification", "description": "Distributing whitepapers, case studies, and insights across social networks to build undeniable authority.", "iconName": "Share2" },
          { "id": "card-2", "title": "Account-Based Marketing", "description": "Deploying hyper-targeted, personalized campaigns to high-value enterprise accounts.", "iconName": "Briefcase" },
          { "id": "card-3", "title": "Webinars & Live Events", "description": "Building interactive, value-driven virtual events that foster trust and rapid engagement.", "iconName": "Video" },
          { "id": "card-4", "title": "Dark Social Strategy", "description": "Leveraging communities, podcasts, and untrackable word-of-mouth channels to drive organic demand.", "iconName": "Users" },
          { "id": "card-5", "title": "Nurture Workflows", "description": "Automated email and retargeting sequences that keep your brand top-of-mind over long sales cycles.", "iconName": "Mail" }
        ]
      },
      {
        "id": "sec-how-we-do-it-demand-generation",
        "type": "how-we-do-it",
        "title": "Our Demand Creation Process",
        "content": "A systematic approach to turning cold prospects into brand advocates and eventually, loyal customers.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Audience Intelligence", "description": "Mapping your Total Addressable Market and identifying key pain points." },
          { "id": "hw-2", "title": "Content Strategy", "description": "Developing un-gated, highly actionable content that solves your buyers' immediate problems." },
          { "id": "hw-3", "title": "Omnichannel Distribution", "description": "Pushing content natively through LinkedIn, industry PR, YouTube, and targeted display networks." },
          { "id": "hw-4", "title": "Engagement Tracking", "description": "Monitoring account-level engagement (ABM) to identify surging buyer intent." },
          { "id": "hw-5", "title": "Sales Alignment", "description": "Seamlessly passing highly-educated, warm prospects to your sales team with full context." }
        ]
      },
      {
        "id": "sec-case-study-demand-generation",
        "type": "case-study",
        "title": "Demand Generation In Action",
        "content": "How we built sustainable pipelines for enterprise clients.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling a B2B SaaS Pipeline",
            "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
            "description": "By shifting budget from high-cost bottom-of-funnel search ads to top-of-funnel LinkedIn thought leadership and webinars, we reduced their Customer Acquisition Cost by 35% while increasing total pipeline volume by 3x over 6 months.",
            "points": [
              { "id": "p1", "title": "3x Pipeline", "iconName": "TrendingUp" },
              { "id": "p2", "title": "35% Lower CAC", "iconName": "ArrowDown" },
              { "id": "p3", "title": "Brand Authority", "iconName": "Award" }
            ]
          },
          {
            "id": "cs-2",
            "title": "Enterprise Tech Adoption",
            "bgImageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
            "description": "Implemented an Account-Based Marketing (ABM) strategy targeting the Fortune 500. Through hyper-personalized content and direct mail, we achieved a 42% meeting booking rate among target accounts.",
            "points": [
              { "id": "p1", "title": "ABM Strategy", "iconName": "Target" },
              { "id": "p2", "title": "42% Meeting Rate", "iconName": "Calendar" },
              { "id": "p3", "title": "Enterprise Deals", "iconName": "Briefcase" }
            ]
          }
        ]
      },
      {
        "id": "faq-demand-generation",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our Demand Generation strategies.",
        "cards": [
          {
            "id": "faq-1",
            "title": "What is the difference between Lead Generation and Demand Generation?",
            "description": "Lead Generation focuses on capturing existing demand (collecting contact info from people actively looking to buy). Demand Generation focuses on creating demand—educating the market so they eventually realize they have a problem your product solves."
          },
          {
            "id": "faq-2",
            "title": "How long does Demand Generation take to show ROI?",
            "description": "Because it targets the 97% of the market not ready to buy today, demand generation is a long-term play. While leading indicators (engagement, branded search volume) improve in weeks, revenue impact is typically seen between months 3 to 6."
          },
          {
            "id": "faq-3",
            "title": "How do you measure the success of Demand Generation?",
            "description": "We measure success through metrics like account-level engagement, increase in direct and branded organic search traffic, pipeline velocity, and ultimately, closed-won revenue from influenced accounts."
          }
        ]
      }
    ]
  },
  {
    "id": "page-lead-generation",
    "slug": "lead-generation",
    "title": "High-Velocity Lead Generation",
    "heroBadge": "Users",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 8,
    "sections": [
      {
        "id": "sec-overview-lead-generation",
        "type": "overview",
        "title": "Build a Predictable Pipeline of Qualified Buyers.",
        "content": "Website traffic means nothing if it doesn't convert into actual sales conversations. Our Lead Generation services are ruthlessly focused on one single metric: filling your sales pipeline with highly qualified prospects who have an immediate need for your solution. By optimizing the entire conversion journey—from thumb-stopping ad creative to frictionless landing pages—we ensure maximum lead velocity at the lowest possible Cost-Per-Lead (CPL).",
        "mediaUrl": "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-leads-we-manage-lead-generation",
        "type": "scrollable-cards",
        "title": "Leads We Manage",
        "content": "Targeted lead acquisition across industries and channels.",
        "cards": [
          { "id": "card-1", "title": "B2B Sales Leads", "description": "High-value business inquiries, meeting bookings, and enterprise prospects.", "iconName": "Briefcase", "linkUrl": "lead-generation/b2b-sales" },
          { "id": "card-2", "title": "Real Estate Leads", "description": "Qualified homebuyers, property investors, and commercial real estate inquiries.", "iconName": "Home", "linkUrl": "lead-generation/real-estate" },
          { "id": "card-3", "title": "Healthcare Leads", "description": "Patient bookings, telemedicine consultations, and clinic inquiries.", "iconName": "Heart", "linkUrl": "lead-generation/healthcare" },
          { "id": "card-4", "title": "SaaS & Tech Leads", "description": "Free trial signups, product demo requests, and software subscriptions.", "iconName": "Monitor", "linkUrl": "lead-generation/saas-tech" },
          { "id": "card-5", "title": "E-commerce Leads", "description": "High-intent cart abandoners, newsletter signups, and VIP shoppers.", "iconName": "ShoppingCart", "linkUrl": "lead-generation/ecommerce" }
        ]
      },
      {
        "id": "sec-how-we-do-it-lead-generation",
        "type": "how-we-do-it",
        "title": "The Conversion Journey",
        "content": "How we turn cold traffic into booked sales appointments.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Offer Creation", "description": "Developing an irresistible hook or lead magnet that demands your prospect's attention." },
          { "id": "hw-2", "title": "Traffic Acquisition", "description": "Deploying highly targeted paid and organic campaigns to drive the right users to the offer." },
          { "id": "hw-3", "title": "Conversion Mechanics", "description": "Building lightning-fast, high-converting landing pages tailored to the ad creative." },
          { "id": "hw-4", "title": "Nurture Sequences", "description": "Deploying automated email and SMS drips to warm up leads who aren't ready to buy yet." },
          { "id": "hw-5", "title": "Sales Integration", "description": "Pushing scored, qualified leads directly into your CRM in real-time for immediate follow-up." }
        ]
      },
      {
        "id": "sec-case-study-lead-generation",
        "type": "case-study",
        "title": "Lead Velocity Success",
        "content": "How we flooded sales teams with high-intent prospects.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "B2B Service Scaling",
            "bgImageUrl": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200",
            "description": "We built a targeted webinar funnel for a B2B consultancy that generated 450+ highly qualified sales appointments in 90 days, completely transforming their outbound-heavy sales process into an inbound machine.",
            "points": [
              { "id": "p1", "title": "450+ Appointments", "iconName": "Calendar" },
              { "id": "p2", "title": "90 Day Scale", "iconName": "Clock" },
              { "id": "p3", "title": "Inbound Shift", "iconName": "TrendingUp" }
            ]
          },
          {
            "id": "cs-2",
            "title": "Local Service Domination",
            "bgImageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200",
            "description": "By overhauling their localized landing pages and implementing strict geo-targeting on Google Ads, we reduced the Cost-Per-Lead (CPL) by 55% for a national home services franchise.",
            "points": [
              { "id": "p1", "title": "55% Lower CPL", "iconName": "ArrowDown" },
              { "id": "p2", "title": "Localized CRO", "iconName": "MapPin" },
              { "id": "p3", "title": "Higher Close Rate", "iconName": "CheckCircle" }
            ]
          }
        ]
      },
      {
        "id": "faq-lead-generation",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our lead generation process.",
        "cards": [
          {
            "id": "faq-1",
            "title": "Are these exclusive leads?",
            "description": "Yes. We build custom campaigns specifically for your business. Every lead generated is exclusive to you; we do not sell shared or recycled leads like traditional lead-broker platforms."
          },
          {
            "id": "faq-2",
            "title": "How do you ensure lead quality?",
            "description": "We use strict ad targeting criteria, multi-step qualifying questions on our lead forms, and automated CRM lead scoring to filter out 'tire kickers' before they ever reach your sales team."
          },
          {
            "id": "faq-3",
            "title": "Can you integrate with my CRM?",
            "description": "Absolutely. We build seamless integrations using APIs and Webhooks for Salesforce, HubSpot, Pipedrive, GoHighLevel, and virtually any other modern CRM platform."
          }
        ]
      }
    ]
  },
  {
    "id": "page-retargeting-marketing",
    "slug": "retargeting-marketing",
    "title": "Precision Retargeting Marketing",
    "heroBadge": "RotateCcw",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 9,
    "sections": [
      {
        "id": "sec-overview-retargeting-marketing",
        "type": "overview",
        "title": "Recapture Lost Revenue and Maximize ROI.",
        "content": "Most users don't buy on their first visit. In fact, 97% of your website traffic will bounce without taking a single action. If you aren't actively bringing them back, you are effectively subsidizing your competitors' marketing. Our precision retargeting campaigns deploy highly personalized, cross-channel ads that follow your highest-intent prospects across the web, reminding them why they need your solution and delivering the exact offer they need to finally convert.",
        "mediaUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-retargeting-marketing",
        "type": "services-grid",
        "title": "Retargeting Capabilities",
        "content": "Strategies to stay top-of-mind and force the conversion.",
        "cards": [
          { "id": "card-1", "title": "Dynamic Retargeting", "description": "Showing e-commerce users the exact products they viewed or added to cart.", "iconName": "ShoppingCart" },
          { "id": "card-2", "title": "Cross-Channel Tracking", "description": "Following users seamlessly from Facebook to Google Display to YouTube.", "iconName": "Monitor" },
          { "id": "card-3", "title": "Account Retargeting", "description": "Staying hyper-visible to B2B enterprise buyers during long, complex sales cycles.", "iconName": "Briefcase" },
          { "id": "card-4", "title": "Cart Abandonment", "description": "Deploying urgent email, SMS, and ad sequences to recover lost checkouts.", "iconName": "AlertCircle" },
          { "id": "card-5", "title": "Sequential Storytelling", "description": "Moving users through an ad sequence of awareness, logic, and urgency.", "iconName": "Film" }
        ]
      },
      {
        "id": "sec-how-we-do-it-retargeting-marketing",
        "type": "how-we-do-it",
        "title": "The Omnipresence Strategy",
        "content": "How we build a web of inescapable, high-converting touchpoints.",
        "mediaUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Audience Segmentation", "description": "Dividing visitors by behavior, time-on-site, and specific pages viewed to gauge intent." },
          { "id": "hw-2", "title": "The Omnipresence Pixel", "description": "Deploying global tracking via Server-Side APIs to bypass ad-blockers and iOS restrictions." },
          { "id": "hw-3", "title": "Dynamic Creative", "description": "Designing ad creatives that automatically adapt based on the user's previous on-site actions." },
          { "id": "hw-4", "title": "Frequency Capping", "description": "Strictly managing how often ads are shown so your brand stays helpful, not annoying." },
          { "id": "hw-5", "title": "Offer Escalation", "description": "Introducing strategic discounts or bonuses exactly when a buyer is hesitating the most." }
        ]
      },
      {
        "id": "sec-case-study-retargeting-marketing",
        "type": "case-study",
        "title": "Revenue Recovery Wins",
        "content": "How retargeting turned lost traffic into massive profit.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "E-Commerce Cart Recovery",
            "bgImageUrl": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
            "description": "An apparel brand was losing 70% of carts at checkout. We implemented a dynamic Meta product catalog retargeting strategy combined with SMS cart abandonment, generating $85,000 in recovered revenue in just 30 days.",
            "points": [
              { "id": "p1", "title": "$85k Recovered", "iconName": "DollarSign" },
              { "id": "p2", "title": "Dynamic Catalog", "iconName": "Image" },
              { "id": "p3", "title": "SMS Integration", "iconName": "Smartphone" }
            ]
          },
          {
            "id": "cs-2",
            "title": "B2B SaaS Conversion Lift",
            "bgImageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
            "description": "A B2B SaaS company had great traffic but low demo bookings. We deployed a 30-day sequential retargeting campaign on LinkedIn and YouTube, educating prospects over time. Demo requests increased by 40%.",
            "points": [
              { "id": "p1", "title": "40% More Demos", "iconName": "Calendar" },
              { "id": "p2", "title": "Sequential Ads", "iconName": "Film" },
              { "id": "p3", "title": "LinkedIn & YouTube", "iconName": "Share2" }
            ]
          }
        ]
      },
      {
        "id": "faq-retargeting-marketing",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about Retargeting Marketing.",
        "cards": [
          {
            "id": "faq-1",
            "title": "Is retargeting annoying to users?",
            "description": "Only if done poorly. We utilize strict frequency capping (limiting how many times a user sees an ad per day) and sequential messaging to ensure your brand remains top-of-mind without becoming annoying."
          },
          {
            "id": "faq-2",
            "title": "Does retargeting still work without third-party cookies?",
            "description": "Yes. While iOS updates changed the landscape, we rely on robust 1st-party data collection and server-side tracking (like the Meta Conversions API) to maintain high audience match rates."
          },
          {
            "id": "faq-3",
            "title": "How large does my audience need to be?",
            "description": "Most major ad platforms require a minimum audience pool of 100 to 1,000 specific matched users before retargeting ads will begin to serve effectively."
          }
        ]
      }
    ]
  },
  {
    "id": "page-influencer-marketing",
    "slug": "influencer-marketing",
    "title": "Authentic Influencer Marketing",
    "heroBadge": "Star",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 10,
    "sections": [
      {
        "id": "sec-overview-influencer-marketing",
        "type": "overview",
        "title": "Leverage Authentic Voices to Drive Massive Scale.",
        "content": "Consumers inherently trust people, not faceless logos. True Influencer Marketing is no longer about buying vanity metrics or posting generic endorsements; it is about partnering with highly trusted creators who can authentically integrate your product into their audience's daily lives. We manage the entire lifecycle—from strategic creator discovery and rigorous contract negotiation to campaign execution and strict ROI tracking—ensuring your brand message is delivered by the voices your market actually listens to.",
        "mediaUrl": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-influencer-marketing",
        "type": "services-grid",
        "title": "Influencer & Creator Solutions",
        "content": "Building trust at scale across every tier of influence.",
        "cards": [
          { "id": "card-1", "title": "Micro-Influencer Campaigns", "description": "Leveraging highly engaged niche creators for maximum conversion rates.", "iconName": "Users" },
          { "id": "card-2", "title": "Macro & Celebrity Partnerships", "description": "Driving massive, overnight brand awareness and cultural impact.", "iconName": "Star" },
          { "id": "card-3", "title": "B2B Thought Leaders", "description": "Partnering with industry experts and executives on LinkedIn and podcasts.", "iconName": "Briefcase" },
          { "id": "card-4", "title": "UGC Creation", "description": "Sourcing authentic, lo-fi video assets to fuel your own paid ad campaigns.", "iconName": "Video" },
          { "id": "card-5", "title": "Affiliate Programs", "description": "Structuring performance-based compensation based on actual sales driven.", "iconName": "Percent" }
        ]
      },
      {
        "id": "sec-how-we-do-it-influencer-marketing",
        "type": "how-we-do-it",
        "title": "The Creator Management Lifecycle",
        "content": "How we execute flawless campaigns across dozens of creators simultaneously.",
        "mediaUrl": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Audience Matching", "description": "Using deep data analytics to ensure a creator's following matches your exact target demographic." },
          { "id": "hw-2", "title": "Vetting & Negotiation", "description": "Filtering out fake followers and negotiating strict deliverables, timelines, and usage rights." },
          { "id": "hw-3", "title": "Creative Briefing", "description": "Providing creators with brand guardrails while allowing space for their authentic expression." },
          { "id": "hw-4", "title": "Campaign Orchestration", "description": "Managing product shipping, content review, and live scheduling across the entire roster." },
          { "id": "hw-5", "title": "ROI Measurement", "description": "Tracking exact sales, clicks, and impressions via custom promo codes and dedicated UTM links." }
        ]
      },
      {
        "id": "sec-case-study-influencer-marketing",
        "type": "case-study",
        "title": "Influencer Impact Stories",
        "content": "How creator partnerships drove tangible, measurable revenue.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "DTC Beauty Launch",
            "bgImageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200",
            "description": "We partnered with 50 tightly vetted micro-influencers on TikTok to build hype for a new skincare line. The campaign generated 4.5M organic views and drove $200k in direct sales within 48 hours of the product drop.",
            "points": [
              { "id": "p1", "title": "4.5M Organic Views", "iconName": "Eye" },
              { "id": "p2", "title": "$200k Sales in 48h", "iconName": "DollarSign" },
              { "id": "p3", "title": "50 Creators Scaled", "iconName": "Users" }
            ]
          },
          {
            "id": "cs-2",
            "title": "B2B Software Adoption",
            "bgImageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200",
            "description": "To break into a new enterprise market, we collaborated with 5 major LinkedIn thought leaders to co-host a digital summit. This drove 1,200 highly qualified webinar registrations and $1.2M in sales pipeline.",
            "points": [
              { "id": "p1", "title": "1,200 Registrations", "iconName": "UserPlus" },
              { "id": "p2", "title": "$1.2M Pipeline", "iconName": "TrendingUp" },
              { "id": "p3", "title": "B2B Trust Built", "iconName": "Shield" }
            ]
          }
        ]
      },
      {
        "id": "faq-influencer-marketing",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about scaling with influencers.",
        "cards": [
          {
            "id": "faq-1",
            "title": "Do I get to approve the content before it goes live?",
            "description": "Yes. All of our creative briefs include a mandatory draft review process. We ensure brand safety and factual accuracy while preserving the creator's authentic voice."
          },
          {
            "id": "faq-2",
            "title": "How do you actually measure the ROI of an influencer?",
            "description": "We move past vanity metrics like 'likes'. We track hard conversions using dedicated landing pages, unique trackable UTM links, and custom creator promo codes."
          },
          {
            "id": "faq-3",
            "title": "Who owns the rights to the content they create?",
            "description": "We aggressively negotiate 'whitelisting' and usage rights upfront in our contracts. This allows you to legally repurpose their high-performing content into your own paid ad campaigns."
          }
        ]
      }
    ]
  },
  {
    "id": "page-business-branding",
    "slug": "business-branding",
    "title": "Business & Corporate Branding Services",
    "heroBadge": "Briefcase",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 11,
    "sections": [
      {
        "id": "sec-overview-business-branding",
        "type": "overview",
        "title": "Build a Brand That Commands Authority and Loyalty.",
        "content": "A logo is not a brand. A brand is the psychological relationship and set of expectations established between your business and your customers. Lumora builds comprehensive, robust Business Branding strategies that articulate your unique value proposition, establish market dominance, and create memorable visual and verbal identities that deeply resonate with your target demographic. We craft brands that can charge premium pricing and survive market shifts.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-business-branding",
        "type": "services-grid",
        "title": "Brand Development Pillars",
        "content": "Everything you need to stand out, look premium, and sound authentic.",
        "cards": [
          { "id": "card-1", "title": "Brand Strategy & Positioning", "description": "Defining your mission, vision, core values, and precise market positioning.", "iconName": "Compass" },
          { "id": "card-2", "title": "Visual Identity Design", "description": "Crafting premium logos, color palettes, typography, and visual assets.", "iconName": "Palette" },
          { "id": "card-3", "title": "Brand Voice & Messaging", "description": "Establishing a unique tone of voice, key messages, and elevator pitches.", "iconName": "MessageCircle" },
          { "id": "card-4", "title": "Corporate Guidelines", "description": "Creating comprehensive Brand Books to ensure consistency across all touchpoints.", "iconName": "BookOpen" },
          { "id": "card-5", "title": "Rebranding & Refresh", "description": "Modernizing legacy brands without losing existing customer equity.", "iconName": "RefreshCw" }
        ]
      },
      {
        "id": "sec-how-we-do-it-business-branding",
        "type": "how-we-do-it",
        "title": "Our Branding Methodology",
        "content": "We don't just design; we strategically engineer your brand identity from the ground up.",
        "mediaUrl": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Discovery & Audit", "description": "Immersing ourselves in your industry, interviewing stakeholders, and auditing current assets." },
          { "id": "hw-2", "title": "Market Positioning", "description": "Identifying the 'white space' in your industry where your brand can lead unopposed." },
          { "id": "hw-3", "title": "Concept Creation", "description": "Presenting diverse visual and verbal directions based on the approved strategy." },
          { "id": "hw-4", "title": "Refinement", "description": "Iterating on the chosen concept to achieve perfection down to the smallest detail." },
          { "id": "hw-5", "title": "Rollout & Activation", "description": "Delivering all assets, guidelines, and launch strategies to introduce the brand to the world." }
        ]
      },
      {
        "id": "sec-case-study-business-branding",
        "type": "case-study",
        "title": "Branding Success Stories",
        "content": "See how our brand transformations have elevated businesses to new heights.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling a Fintech Startup",
            "bgImageUrl": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200",
            "description": "We built a complete visual identity and trust-centric brand voice for a new Fintech app. The cohesive, premium branding helped them secure a $15M Series A funding round within 6 months of launch.",
            "points": [
              { "id": "p1", "title": "Visual Identity", "iconName": "Palette" },
              { "id": "p2", "title": "$15M Funded", "iconName": "DollarSign" },
              { "id": "p3", "title": "Trust Established", "iconName": "Shield" }
            ]
          },
          {
            "id": "cs-2",
            "title": "Legacy Retailer Rebrand",
            "bgImageUrl": "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200",
            "description": "A 30-year-old retail chain was losing market share to younger competitors. We executed a modern rebrand while preserving their heritage, resulting in a 25% increase in Gen-Z and Millennial foot traffic.",
            "points": [
              { "id": "p1", "title": "Modernized", "iconName": "RefreshCw" },
              { "id": "p2", "title": "25% New Demo", "iconName": "Users" },
              { "id": "p3", "title": "Heritage Kept", "iconName": "Award" }
            ]
          }
        ]
      },
      {
        "id": "faq-business-branding",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our Business Branding services.",
        "cards": [
          {
            "id": "faq-1",
            "title": "What is included in a typical Brand Identity package?",
            "description": "Our packages usually include Brand Strategy (Positioning, Mission, Values), Visual Identity (Logo suite, Color Palette, Typography), Brand Voice guidelines, and a comprehensive Brand Book detailing how to use these assets."
          },
          {
            "id": "faq-2",
            "title": "How long does a full rebrand take?",
            "description": "A comprehensive rebrand—from initial discovery to final rollout—typically takes between 4 to 8 weeks, depending on the size of your organization and the number of deliverables required."
          },
          {
            "id": "faq-3",
            "title": "Why is Brand Positioning so important?",
            "description": "Positioning determines how your target audience perceives you relative to your competitors. Without strong positioning, you compete solely on price. With it, you compete on unique value, allowing you to charge premium rates."
          }
        ]
      }
    ]
  },
  {
    "id": "page-personal-branding",
    "slug": "personal-branding",
    "title": "Executive & Personal Branding Services",
    "heroBadge": "User",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 12,
    "sections": [
      {
        "id": "sec-overview-personal-branding",
        "type": "overview",
        "title": "Become the Recognized Authority in Your Industry.",
        "content": "In today's digital-first economy, people don't just buy from companies—they buy from people they trust. A powerful personal brand elevates you from a commodity to an industry thought leader, opening doors to new partnerships, speaking engagements, and inbound revenue. We help founders, executives, and subject matter experts build, scale, and monetize their personal brands through highly strategic content, PR, and positioning.",
        "mediaUrl": "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-personal-branding",
        "type": "services-grid",
        "title": "Personal Brand Pillars",
        "content": "A multi-channel approach to establishing you as the go-to expert.",
        "cards": [
          { "id": "card-1", "title": "Executive Positioning", "description": "Defining your unique angle, core values, and industry expertise.", "iconName": "UserCheck" },
          { "id": "card-2", "title": "LinkedIn Thought Leadership", "description": "Professional ghostwriting and network growth strategies on LinkedIn.", "iconName": "MessageSquare" },
          { "id": "card-3", "title": "Digital PR & Features", "description": "Securing podcast interviews, article placements, and media mentions.", "iconName": "Mic" },
          { "id": "card-4", "title": "Content & Video Production", "description": "High-quality, short-form video content to humanize your brand.", "iconName": "Video" },
          { "id": "card-5", "title": "Monetization Strategy", "description": "Turning your growing audience into a tangible, revenue-generating asset.", "iconName": "DollarSign" }
        ]
      },
      {
        "id": "sec-how-we-do-it-personal-branding",
        "type": "how-we-do-it",
        "title": "How We Build Your Brand",
        "content": "A turnkey solution for busy executives who want maximum impact with minimal time commitment.",
        "mediaUrl": "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "The Expert Audit", "description": "We assess your current digital footprint and identify your most valuable knowledge." },
          { "id": "hw-2", "title": "The Narrative Blueprint", "description": "We craft your unique story, content pillars, and distinctive voice." },
          { "id": "hw-3", "title": "Omnichannel Production", "description": "Our team ghostwrites, designs, and produces a steady pipeline of content for you." },
          { "id": "hw-4", "title": "Audience Growth", "description": "We execute proven engagement strategies to rapidly grow your targeted following." },
          { "id": "hw-5", "title": "Authority Scaling", "description": "We leverage your growing audience to secure high-tier speaking gigs and PR." }
        ]
      },
      {
        "id": "sec-case-study-personal-branding",
        "type": "case-study",
        "title": "Thought Leadership Success",
        "content": "How we turned industry experts into undeniable authorities.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling a SaaS Founder",
            "bgImageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200",
            "description": "We took a relatively unknown SaaS founder and positioned them as a top voice in B2B software. Within 8 months, their LinkedIn presence drove over $500k in inbound pipeline for their company.",
            "points": [
              { "id": "p1", "title": "$500k Pipeline", "iconName": "DollarSign" },
              { "id": "p2", "title": "Top Voice Badge", "iconName": "Award" },
              { "id": "p3", "title": "Zero Ad Spend", "iconName": "Zap" }
            ]
          },
          {
            "id": "cs-2",
            "title": "Executive Thought Leadership",
            "bgImageUrl": "https://images.unsplash.com/photo-1475503572774-15a45e5d30b9?q=80&w=1200",
            "description": "A seasoned CEO wanted to pivot into public speaking. By completely revamping their personal brand and pushing out high-value insights, they grew their following by 400% and secured 3 major keynote gigs.",
            "points": [
              { "id": "p1", "title": "400% Growth", "iconName": "TrendingUp" },
              { "id": "p2", "title": "3 Keynotes", "iconName": "Mic" },
              { "id": "p3", "title": "Media Features", "iconName": "Star" }
            ]
          }
        ]
      },
      {
        "id": "faq-personal-branding",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our Personal Branding process.",
        "cards": [
          {
            "id": "faq-1",
            "title": "Do I need to write my own content?",
            "description": "No. Our expert ghostwriting team captures your unique voice through short, efficient interviews. We write the content, you approve it, and we publish it."
          },
          {
            "id": "faq-2",
            "title": "How long does it take to see results?",
            "description": "While visibility and engagement often increase within the first few weeks, true authority and consistent inbound opportunities typically compound over 3 to 6 months."
          },
          {
            "id": "faq-3",
            "title": "What platforms do you focus on?",
            "description": "We tailor the platform strategy to where your specific target audience lives. For B2B executives, this is almost exclusively LinkedIn and X (Twitter), occasionally supplemented with YouTube."
          }
        ]
      }
    ]
  },
  {
    "id": "page-brand-management",
    "slug": "brand-management",
    "title": "Comprehensive Brand Management Services",
    "heroBadge": "Shield",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 13,
    "sections": [
      {
        "id": "sec-overview-brand-management",
        "type": "overview",
        "title": "Protect, Monitor, and Evolve Your Most Valuable Asset.",
        "content": "A brand's reputation is its most powerful revenue driver—but as your company scales, maintaining consistency and positive sentiment becomes increasingly complex. Comprehensive Brand Management is the active, ongoing process of protecting your digital equity, ensuring strict compliance across all internal and external touchpoints, and strategically evolving your narrative as market dynamics shift. We serve as the vigilant guardians of your brand's integrity.",
        "mediaUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-brand-management",
        "type": "services-grid",
        "title": "Brand Guardianship Pillars",
        "content": "A proactive suite of services to secure and grow your market position.",
        "cards": [
          { "id": "card-1", "title": "Reputation Management", "description": "Active monitoring of brand sentiment, reviews, and rapid crisis response.", "iconName": "ShieldAlert" },
          { "id": "card-2", "title": "Brand Compliance", "description": "Ensuring visual and verbal consistency across teams, affiliates, and vendors.", "iconName": "CheckSquare" },
          { "id": "card-3", "title": "Digital Asset Management", "description": "Organizing and distributing brand collateral securely and efficiently.", "iconName": "FolderLock" },
          { "id": "card-4", "title": "Equity Tracking", "description": "Measuring brand awareness, share of voice, and perceived market value over time.", "iconName": "BarChart2" },
          { "id": "card-5", "title": "Brand Evolution", "description": "Strategic, incremental refreshes to keep the brand modern without losing core identity.", "iconName": "RefreshCw" }
        ]
      },
      {
        "id": "sec-how-we-do-it-brand-management",
        "type": "how-we-do-it",
        "title": "The Management Process",
        "content": "How we take control of your brand ecosystem to ensure flawless execution.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Baseline Audit", "description": "Assessing current brand perception, identifying inconsistencies, and mapping vulnerabilities." },
          { "id": "hw-2", "title": "Asset Centralization", "description": "Creating a single source of truth for all logos, fonts, and approved messaging." },
          { "id": "hw-3", "title": "Proactive Monitoring", "description": "Deploying advanced social listening and sentiment analysis tools 24/7." },
          { "id": "hw-4", "title": "Enforcement & Training", "description": "Educating internal teams and partners on strict adherence to brand guidelines." },
          { "id": "hw-5", "title": "Quarterly Equity Reviews", "description": "Measuring the ROI of brand activities and adjusting strategies for growth." }
        ]
      },
      {
        "id": "sec-case-study-brand-management",
        "type": "case-study",
        "title": "Brand Guardianship Success",
        "content": "How we have protected and streamlined major brands.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Global Enterprise Compliance",
            "bgImageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
            "description": "A multinational corporation was suffering from fragmented branding across 14 regional offices. We centralized their asset management and enforced compliance, resulting in a unified global presence and saving 40 hours a month in design revisions.",
            "points": [
              { "id": "p1", "title": "100% Compliance", "iconName": "CheckCircle" },
              { "id": "p2", "title": "40hrs Saved/Mo", "iconName": "Clock" },
              { "id": "p3", "title": "Unified Identity", "iconName": "Globe" }
            ]
          },
          {
            "id": "cs-2",
            "title": "Crisis Mitigation & Recovery",
            "bgImageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200",
            "description": "Following a negative PR incident, a major retail brand's online sentiment dropped to 30% positive. Through rapid response protocols and strategic positive content amplification, we rebuilt their sentiment to 85% positive within 4 months.",
            "points": [
              { "id": "p1", "title": "85% Positive", "iconName": "TrendingUp" },
              { "id": "p2", "title": "Rapid Response", "iconName": "Zap" },
              { "id": "p3", "title": "Trust Restored", "iconName": "Shield" }
            ]
          }
        ]
      },
      {
        "id": "faq-brand-management",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our Brand Management approach.",
        "cards": [
          {
            "id": "faq-1",
            "title": "What is the difference between Branding and Brand Management?",
            "description": "Branding is the initial creation of the identity (the strategy, logo, and voice). Brand Management is the ongoing, daily protection, execution, and measurement of that identity to ensure it retains its value."
          },
          {
            "id": "faq-2",
            "title": "How do you measure brand equity?",
            "description": "We measure brand equity through a combination of Share of Voice (SOV) compared to competitors, branded organic search volume growth, automated sentiment analysis, and direct customer perception surveys."
          },
          {
            "id": "faq-3",
            "title": "Do you handle PR crises?",
            "description": "Yes. Our reputation management services include rapid response protocols to immediately mitigate damage during negative PR events, followed by long-term strategies to rebuild trust and positive sentiment."
          }
        ]
      }
    ]
  },
  {
    "id": "page-ai-marketing-automation",
    "slug": "ai-marketing-automation",
    "title": "AI Marketing Automation Solutions",
    "heroBadge": "Cpu",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 14,
    "sections": [
      {
        "id": "sec-overview-ai-marketing-automation",
        "type": "overview",
        "title": "Scale Your Marketing Efforts with Artificial Intelligence.",
        "content": "Stop relying on manual, error-prone tasks. AI Marketing Automation allows you to hyper-personalize customer journeys at scale, predict buying behaviors before they happen, and automate complex workflows. From AI-driven email sequencing and dynamic ad creative to intelligent chatbots and seamless CRM syncing, we implement the cutting-edge technology that empowers your team to do more with less while significantly driving up conversion rates.",
        "mediaUrl": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-ai-marketing-automation",
        "type": "services-grid",
        "title": "Automation Capabilities",
        "content": "Deploying machine learning to optimize every stage of your funnel.",
        "cards": [
          { "id": "card-1", "title": "AI-Driven Email Sequences", "description": "Predictive send times and dynamic content tailored to individual user behavior.", "iconName": "Mail" },
          { "id": "card-2", "title": "Conversational AI", "description": "Intelligent chatbots capable of 24/7 lead qualification and customer support.", "iconName": "MessageCircle" },
          { "id": "card-3", "title": "CRM & Data Sync", "description": "Eliminating manual data entry through seamless API and webhook integrations.", "iconName": "Database" },
          { "id": "card-4", "title": "Programmatic Bidding", "description": "AI algorithms optimizing your ad spend and bid strategies in real-time.", "iconName": "MousePointerClick" },
          { "id": "card-5", "title": "Predictive Lead Scoring", "description": "Using historical data to identify exactly which prospects are ready to buy right now.", "iconName": "Target" }
        ]
      },
      {
        "id": "sec-how-we-do-it-ai-marketing-automation",
        "type": "how-we-do-it",
        "title": "The Implementation Process",
        "content": "A rigorous, phased approach to integrating AI into your marketing ecosystem securely.",
        "mediaUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Workflow Audit", "description": "We map out your current manual processes to identify high-impact automation opportunities." },
          { "id": "hw-2", "title": "Tech Stack Integration", "description": "Connecting your CRMs, analytics APIs, and marketing platforms into one cohesive brain." },
          { "id": "hw-3", "title": "Logic & Trigger Setup", "description": "Building the complex 'if/then' rules and machine learning parameters for your campaigns." },
          { "id": "hw-4", "title": "Testing & QA", "description": "Running extensive simulations to ensure flawless execution across all possible user journeys." },
          { "id": "hw-5", "title": "Continuous Learning", "description": "Monitoring the AI's performance and training the models to improve conversion rates over time." }
        ]
      },
      {
        "id": "sec-case-study-ai-marketing-automation",
        "type": "case-study",
        "title": "AI Automation Success Stories",
        "content": "How we turned manual processes into intelligent revenue engines.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Automating B2B Lead Nurturing",
            "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
            "description": "We replaced a static drip campaign with an AI-driven behavioral sequence for a SaaS company. This hyper-personalization increased email open rates by 40% and reduced their average sales cycle length by 22 days.",
            "points": [
              { "id": "p1", "title": "40% Higher Opens", "iconName": "Mail" },
              { "id": "p2", "title": "22 Days Faster", "iconName": "Clock" },
              { "id": "p3", "title": "Behavior Triggers", "iconName": "Zap" }
            ]
          },
          {
            "id": "cs-2",
            "title": "E-Commerce Cart Recovery",
            "bgImageUrl": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
            "description": "Implemented a predictive discount AI that analyzed user behavior to offer dynamic, individualized incentives. It successfully recovered 35% of abandoned carts without relying on blanket margin-killing discounts.",
            "points": [
              { "id": "p1", "title": "35% Recovery", "iconName": "TrendingUp" },
              { "id": "p2", "title": "Margin Protected", "iconName": "Shield" },
              { "id": "p3", "title": "Dynamic Pricing", "iconName": "DollarSign" }
            ]
          }
        ]
      },
      {
        "id": "faq-ai-marketing-automation",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about integrating AI Marketing Automation.",
        "cards": [
          {
            "id": "faq-1",
            "title": "Will AI replace my marketing team?",
            "description": "No. AI eliminates the tedious, repetitive tasks (like manual data entry and generic email blasts), freeing your marketing and sales teams to focus on high-level strategy, creative direction, and closing deals."
          },
          {
            "id": "faq-2",
            "title": "What CRMs and tools do you integrate with?",
            "description": "We are platform-agnostic and regularly build integrations across HubSpot, Salesforce, Marketo, ActiveCampaign, Klaviyo, and custom REST APIs."
          },
          {
            "id": "faq-3",
            "title": "Is my customer data safe?",
            "description": "Absolutely. All AI automations we deploy are built with strict data privacy protocols, GDPR/CCPA compliance, and secure API gateways to ensure your proprietary data remains yours."
          }
        ]
      }
    ]
  },
  {
    "id": "page-expert-monthly-audit",
    "slug": "expert-monthly-audit",
    "title": "Expert Monthly Marketing Audits",
    "heroBadge": "FileSearch",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 15,
    "sections": [
      {
        "id": "sec-overview-expert-monthly-audit",
        "type": "overview",
        "title": "Continuous Oversight for Peak Performance.",
        "content": "The digital landscape changes daily—what worked last month might be bleeding your budget today. Our Expert Monthly Audit service provides rigorous, objective oversight of your entire marketing ecosystem. We act as your external board of advisors, evaluating your internal team's execution, auditing ad accounts for hidden inefficiencies, and ensuring your overarching strategy stays perfectly aligned with your revenue goals.",
        "mediaUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "bullets": []
      },
      {
        "id": "sec-services-expert-monthly-audit",
        "type": "services-grid",
        "title": "Monthly Audit Deliverables",
        "content": "A forensic deep-dive into the health of your digital presence.",
        "cards": [
          { "id": "card-1", "title": "Paid Media Forensics", "description": "Deep dive into Ad spend, ROAS, wasted keywords, and bidding inefficiencies.", "iconName": "DollarSign" },
          { "id": "card-2", "title": "Technical SEO Tracking", "description": "Monthly checks for crawl errors, Core Web Vitals drops, and indexation issues.", "iconName": "Search" },
          { "id": "card-3", "title": "Funnel Analysis", "description": "Tracking user drop-offs and friction points across your primary conversion paths.", "iconName": "TrendingDown" },
          { "id": "card-4", "title": "Competitor Movement", "description": "Monitoring new competitor campaigns, keyword shifts, and positioning changes.", "iconName": "Eye" },
          { "id": "card-5", "title": "Executive Briefing", "description": "A concise, no-fluff strategic report tailored for C-level leadership.", "iconName": "Briefcase" }
        ]
      },
      {
        "id": "sec-how-we-do-it-expert-monthly-audit",
        "type": "how-we-do-it",
        "title": "The Monthly Cadence",
        "content": "How we maintain relentless accountability and optimization.",
        "mediaUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        "cards": [
          { "id": "hw-1", "title": "Data Aggregation", "description": "Pulling metrics from all your platforms into one unified, un-biased source of truth." },
          { "id": "hw-2", "title": "Algorithmic Diagnostics", "description": "Running automated, proprietary tools to catch obvious technical errors instantly." },
          { "id": "hw-3", "title": "Senior Expert Review", "description": "Manual, nuanced analysis conducted exclusively by our top-tier marketing veterans." },
          { "id": "hw-4", "title": "The Action Plan", "description": "Detailing exactly what needs to be fixed, what to kill, and what to scale." },
          { "id": "hw-5", "title": "The Advisory Call", "description": "A high-impact, 1-hour strategic alignment call with your marketing leadership." }
        ]
      },
      {
        "id": "sec-case-study-expert-monthly-audit",
        "type": "case-study",
        "title": "Audit Success Stories",
        "content": "How objective oversight saved millions in wasted budget.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Rescuing an Internal Team",
            "bgImageUrl": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
            "description": "An internal marketing team was burning $100k/mo on Google Ads with declining returns. During our first monthly audit, we caught a broad-match setting error that, when fixed, saved them $20k/mo instantly without affecting lead volume.",
            "points": [
              { "id": "p1", "title": "$20k/mo Saved", "iconName": "Scissors" },
              { "id": "p2", "title": "Settings Fixed", "iconName": "Settings" },
              { "id": "p3", "title": "Leads Maintained", "iconName": "Users" }
            ]
          },
          {
            "id": "cs-2",
            "title": "Maintaining SEO Dominance",
            "bgImageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
            "description": "After a client's major site update, our diagnostic tools identified a catastrophic drop in Core Web Vitals and indexability within 48 hours, preventing a potential 30% loss in organic traffic.",
            "points": [
              { "id": "p1", "title": "Rapid Detection", "iconName": "Zap" },
              { "id": "p2", "title": "Traffic Saved", "iconName": "TrendingUp" },
              { "id": "p3", "title": "Vitals Restored", "iconName": "CheckCircle" }
            ]
          }
        ]
      },
      {
        "id": "faq-expert-monthly-audit",
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "Common questions about our Expert Audit services.",
        "cards": [
          {
            "id": "faq-1",
            "title": "Is this a replacement for an agency?",
            "description": "No, this is objective oversight. We audit your internal team or your current agency partners to keep them accountable, efficient, and aligned with best practices."
          },
          {
            "id": "faq-2",
            "title": "Do you implement the fixes?",
            "description": "This specific service is advisory. We provide the roadmap, and your team executes it. However, if your team lacks the bandwidth, we can step in on a project basis to implement the solutions."
          },
          {
            "id": "faq-3",
            "title": "Who conducts the audit?",
            "description": "Unlike large agencies that pass audits to junior staff, our monthly audits are conducted exclusively by our most senior strategists and department heads."
          }
        ]
      }
    ]
  },

  {
    "id": "page-paid-advertising-campaigns-google-ads",
    "slug": "paid-advertising-campaigns/google-ads",
    "title": "Google Ads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-paid-advertising-campaigns-google-ads",
        "type": "icon-hero",
        "title": "Google Ads",
        "content": "Reach customers exactly when they are searching for what you offer. Our Google Ads management services ensure high ROI by optimizing campaigns across Search, Display, Shopping, and Performance Max networks.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
      },
      {
        "id": "sec-process-paid-advertising-campaigns-google-ads",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-paid-advertising-campaigns-meta-ads",
    "slug": "paid-advertising-campaigns/meta-ads",
    "title": "Meta Ads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-paid-advertising-campaigns-meta-ads",
        "type": "icon-hero",
        "title": "Meta Ads",
        "content": "Facebook and Instagram Ads that build brand, leads and sales with targeted demographic precision.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
      },
      {
        "id": "sec-process-paid-advertising-campaigns-meta-ads",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-paid-advertising-campaigns-youtube-ads",
    "slug": "paid-advertising-campaigns/youtube-ads",
    "title": "YouTube Ads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-paid-advertising-campaigns-youtube-ads",
        "type": "icon-hero",
        "title": "YouTube Ads",
        "content": "Video Ads that increase brand awareness and drive conversions on the worlds largest video platform.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
      },
      {
        "id": "sec-process-paid-advertising-campaigns-youtube-ads",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-paid-advertising-campaigns-linkedin-ads",
    "slug": "paid-advertising-campaigns/linkedin-ads",
    "title": "LinkedIn Ads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-paid-advertising-campaigns-linkedin-ads",
        "type": "icon-hero",
        "title": "LinkedIn Ads",
        "content": "B2B Leads, Brand Building and Targeted Outreach for Professionals across corporate environments.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      },
      {
        "id": "sec-process-paid-advertising-campaigns-linkedin-ads",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-paid-advertising-campaigns-twitter-ads",
    "slug": "paid-advertising-campaigns/twitter-ads",
    "title": "Twitter Ads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-paid-advertising-campaigns-twitter-ads",
        "type": "icon-hero",
        "title": "Twitter Ads",
        "content": "Promote your brand and engage with your target audience on Twitter through high-impact viral campaigns.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
      },
      {
        "id": "sec-process-paid-advertising-campaigns-twitter-ads",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-lead-generation-b2b-sales",
    "slug": "lead-generation/b2b-sales",
    "title": "B2B Sales Leads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-lead-generation-b2b-sales",
        "type": "icon-hero",
        "title": "B2B Sales Leads",
        "content": "Generate high-value business inquiries, meeting bookings, and enterprise prospects with targeted B2B lead generation strategies designed for measurable growth.",
        "iconName": "Briefcase"
      },
      {
        "id": "sec-process-lead-generation-b2b-sales",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-lead-generation-real-estate",
    "slug": "lead-generation/real-estate",
    "title": "Real Estate Leads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-lead-generation-real-estate",
        "type": "icon-hero",
        "title": "Real Estate Leads",
        "content": "Connect with qualified homebuyers, property investors, and commercial real estate prospects actively searching for properties in your target markets.",
        "iconName": "Home"
      },
      {
        "id": "sec-process-lead-generation-real-estate",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-lead-generation-healthcare",
    "slug": "lead-generation/healthcare",
    "title": "Healthcare Leads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-lead-generation-healthcare",
        "type": "icon-hero",
        "title": "Healthcare Leads",
        "content": "Increase patient bookings, telemedicine consultations, and clinic inquiries with HIPAA-compliant, targeted healthcare marketing funnels.",
        "iconName": "Heart"
      },
      {
        "id": "sec-process-lead-generation-healthcare",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-lead-generation-saas-tech",
    "slug": "lead-generation/saas-tech",
    "title": "SaaS & Tech Leads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-lead-generation-saas-tech",
        "type": "icon-hero",
        "title": "SaaS & Tech Leads",
        "content": "Drive free trial signups, product demo requests, and software subscriptions with high-converting inbound marketing designed for B2B tech companies.",
        "iconName": "Monitor"
      },
      {
        "id": "sec-process-lead-generation-saas-tech",
        "type": "process",
        "cards": []
      }
    ]
  },
  {
    "id": "page-lead-generation-ecommerce",
    "slug": "lead-generation/ecommerce",
    "title": "E-commerce Leads",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-lead-generation-ecommerce",
        "type": "icon-hero",
        "title": "E-commerce Leads",
        "content": "Capture high-intent cart abandoners, newsletter signups, and VIP shoppers to maximize lifetime value and lower customer acquisition costs.",
        "iconName": "ShoppingCart"
      },
      {
        "id": "sec-process-lead-generation-ecommerce",
        "type": "process",
        "cards": []
      }
    ]
  }
,
{
  "id": "page-lead-generation-hidden",
  "slug": "lead-generation-v2",
  "title": "Lead Generation Services - High Converting B2B & B2C Funnels",
  "heroBadge": "Users",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-ads-we-manage",
      "type": "scrollable-cards",
      "title": "Leads We Manage",
      "cards": [
        {
          "id": "card-b2b-sales",
          "title": "B2B Sales Leads",
          "description": "High-value business inquiries, meeting bookings, and enterprise prospects.",
          "iconName": "Briefcase",
          "linkUrl": "lead-generation/b2b-sales"
        },
        {
          "id": "card-real-estate",
          "title": "Real Estate Leads",
          "description": "Qualified homebuyers, property investors, and commercial real estate inquiries.",
          "iconName": "Home",
          "linkUrl": "lead-generation/real-estate"
        },
        {
          "id": "card-healthcare",
          "title": "Healthcare Leads",
          "description": "Patient bookings, telemedicine consultations, and clinic inquiries.",
          "iconName": "Heart",
          "linkUrl": "lead-generation/healthcare"
        },
        {
          "id": "card-saas",
          "title": "SaaS & Tech Leads",
          "description": "Free trial signups, product demo requests, and software subscriptions.",
          "iconName": "Monitor",
          "linkUrl": "lead-generation/saas"
        },
        {
          "id": "card-ecommerce",
          "title": "E-commerce Leads",
          "description": "High-intent shoppers, cart abandonment recovery, and newsletter signups.",
          "iconName": "ShoppingCart",
          "linkUrl": "lead-generation/ecommerce"
        }
      ]
    },
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Turning Awareness Into Qualified Demand For Your Business.",
      "content": "In competitive global markets, growth is no longer driven by isolated marketing campaigns—it requires a structured, full-funnel lead generation engine. Lumora delivers Lead Generation services that help organizations consistently attract, engage, convert, and retain high-intent prospects across digital channels. We work with B2B enterprises, B2C brands, SaaS companies, startups, and global service providers to build demand systems that align marketing, sales, and revenue operations.",
      "mediaUrl": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "Lead Generation Solutions & Services",
      "content": "Explore our specialized lead generation products designed for exponential business growth.",
      "cards": [
        {
          "id": "card-1",
          "title": "B2B Appointment Setting",
          "description": "Securing highly qualified meetings with key decision-makers.",
          "iconName": "Target"
        },
        {
          "id": "card-2",
          "title": "Inbound Funnel Optimization",
          "description": "Maximizing the conversion rates of your existing website traffic.",
          "iconName": "BarChart3"
        },
        {
          "id": "card-3",
          "title": "Account-Based Marketing",
          "description": "Hyper-targeted campaigns for high-value enterprise clients.",
          "iconName": "Briefcase"
        },
        {
          "id": "card-4",
          "title": "Cold Email Outreach",
          "description": "Automated, personalized email sequences that get replies.",
          "iconName": "Mail"
        },
        {
          "id": "card-5",
          "title": "Lead Scoring & CRM Sync",
          "description": "Seamlessly routing warm leads directly to your sales team.",
          "iconName": "Workflow"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-9660",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "How we helped scale a global enterprise.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "SaaS Enterprise Lead Surge",
          "bgImageUrl": "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
          "description": "By implementing a comprehensive B2B lead generation funnel, we increased qualified demos by 250% in 3 months for a leading enterprise SaaS provider.",
          "points": [
            {
              "id": "p1",
              "title": "Funnel Mapping",
              "iconName": "Map"
            },
            {
              "id": "p2",
              "title": "Target Identification",
              "iconName": "Target"
            },
            {
              "id": "p3",
              "title": "Lead Capture Setup",
              "iconName": "MousePointerClick"
            },
            {
              "id": "p4",
              "title": "CRM Integration",
              "iconName": "Database"
            },
            {
              "id": "p5",
              "title": "Automated Nurturing",
              "iconName": "Workflow"
            },
            {
              "id": "p6",
              "title": "ROI Tracking",
              "iconName": "BarChart3"
            }
          ]
        },
        {
          "id": "cs-2",
          "title": "Real Estate Investor Acquisition",
          "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
          "description": "We built an aggressive local lead generation campaign that decreased the Cost Per Lead (CPL) by 40% while doubling the closing rate for a commercial real estate firm.",
          "points": [
            {
              "id": "p1",
              "title": "Local Targeting",
              "iconName": "MapPin"
            },
            {
              "id": "p2",
              "title": "High-Intent Ads",
              "iconName": "TrendingUp"
            },
            {
              "id": "p3",
              "title": "Landing Page A/B Testing",
              "iconName": "Sparkles"
            },
            {
              "id": "p4",
              "title": "Speed-to-Lead Automation",
              "iconName": "Zap"
            },
            {
              "id": "p5",
              "title": "Sales Handoff",
              "iconName": "Users"
            },
            {
              "id": "p6",
              "title": "Performance Scaling",
              "iconName": "Activity"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-lead-generation-2636",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Lead Generation services include?",
          "description": "Our Lead Generation services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Lead Generation?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Lead Generation campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Lead Generation?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Lead Generation solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "page-social-media-marketing-hidden",
  "slug": "social-media-marketing-v2",
  "title": "Social Media Marketing - Build Brand Authority",
  "heroBadge": "Share2",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Igniting Brand Conversations and Community Growth.",
      "content": "Social Media is the pulse of modern consumer behavior. Lumora provides elite Social Media Marketing services that transform passive scrollers into active brand advocates. From crafting viral TikTok strategies to building B2B thought leadership on LinkedIn, our data-backed approach ensures your social presence drives measurable engagement, brand loyalty, and direct revenue.",
      "mediaUrl": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "Social Media Marketing Services",
      "content": "Complete solutions to dominate your industry's social landscape.",
      "cards": [
        {
          "id": "card-1",
          "title": "Content Strategy & Creation",
          "description": "High-end graphics, Reels, and TikToks that demand attention.",
          "iconName": "Sparkles"
        },
        {
          "id": "card-2",
          "title": "Community Management",
          "description": "Active engagement, responding to comments, and building a loyal following.",
          "iconName": "Users"
        },
        {
          "id": "card-3",
          "title": "Paid Social Amplification",
          "description": "Strategic ad spend to boost your best-performing organic content.",
          "iconName": "TrendingUp"
        },
        {
          "id": "card-4",
          "title": "Influencer Collaborations",
          "description": "Partnering with industry voices to expand your brand's reach.",
          "iconName": "Star"
        },
        {
          "id": "card-5",
          "title": "Social Listening & Analytics",
          "description": "Tracking brand sentiment and competitor moves in real-time.",
          "iconName": "BarChart3"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-8540",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Real results from our social media campaigns.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "E-Commerce Lifestyle Brand Explosion",
          "bgImageUrl": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1200",
          "description": "By revamping their Instagram and TikTok presence with UGC (User Generated Content) and interactive stories, we grew their following by 150k in 6 months and increased direct social sales by 400%.",
          "points": [
            {
              "id": "p1",
              "title": "UGC Campaigns",
              "iconName": "Users"
            },
            {
              "id": "p2",
              "title": "Viral Reel Strategy",
              "iconName": "Video"
            },
            {
              "id": "p3",
              "title": "Hashtag Optimization",
              "iconName": "Hash"
            },
            {
              "id": "p4",
              "title": "Community Building",
              "iconName": "Heart"
            },
            {
              "id": "p5",
              "title": "Social Commerce",
              "iconName": "ShoppingBag"
            },
            {
              "id": "p6",
              "title": "Monthly Analytics",
              "iconName": "BarChart3"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-social-media-marketing-8189",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Social Media Marketing services include?",
          "description": "Our Social Media Marketing services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Social Media Marketing?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Social Media Marketing campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Social Media Marketing?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Social Media Marketing solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "page-seo-hidden",
  "slug": "seo",
  "title": "Search Engine Optimization (SEO) - Dominate Organic Search",
  "heroBadge": "Search",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Securing the Top Spot When Customers Search.",
      "content": "Organic search visibility is the most sustainable source of long-term revenue. Lumora's SEO experts utilize technical precision, authoritative backlink building, and semantic content strategies to push your brand to the top of Google. We don't just chase traffic; we target high-intent keywords that bring buyers directly to your digital doorstep.",
      "mediaUrl": "https://images.unsplash.com/photo-1432888117247-2b0e6dfa0698?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "Comprehensive SEO Strategies",
      "content": "Data-driven techniques to conquer search engine rankings.",
      "cards": [
        {
          "id": "card-1",
          "title": "Technical SEO Audits",
          "description": "Fixing site speed, crawl errors, and indexability issues.",
          "iconName": "Code"
        },
        {
          "id": "card-2",
          "title": "On-Page Optimization",
          "description": "Structuring content, headers, and metadata for maximum relevance.",
          "iconName": "FileText"
        },
        {
          "id": "card-3",
          "title": "High-Authority Link Building",
          "description": "Acquiring powerful backlinks from trusted industry domains.",
          "iconName": "Link"
        },
        {
          "id": "card-4",
          "title": "Local SEO & GMB Profiles",
          "description": "Dominating the map pack for local service businesses.",
          "iconName": "MapPin"
        },
        {
          "id": "card-5",
          "title": "SEO Content Creation",
          "description": "Publishing semantic, helpful content that Google loves.",
          "iconName": "PenTool"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-2755",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Achieving Page 1 dominance.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "National Retailer Traffic Boom",
          "bgImageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
          "description": "Through a massive technical cleanup and targeted long-tail keyword strategy, we increased organic non-branded traffic by 310%, leading to a massive spike in online revenue.",
          "points": [
            {
              "id": "p1",
              "title": "Technical Audit",
              "iconName": "Search"
            },
            {
              "id": "p2",
              "title": "Keyword Mapping",
              "iconName": "Map"
            },
            {
              "id": "p3",
              "title": "Content Pruning",
              "iconName": "Scissors"
            },
            {
              "id": "p4",
              "title": "Link Outreach",
              "iconName": "Link"
            },
            {
              "id": "p5",
              "title": "Core Web Vitals",
              "iconName": "Activity"
            },
            {
              "id": "p6",
              "title": "SERP Tracking",
              "iconName": "BarChart3"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-seo-9477",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Search Engine Optimization (SEO) services include?",
          "description": "Our Search Engine Optimization (SEO) services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Search Engine Optimization (SEO)?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Search Engine Optimization (SEO) campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Search Engine Optimization (SEO)?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Search Engine Optimization (SEO) solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "page-performance-marketing-hidden",
  "slug": "performance-marketing-v2",
  "title": "Performance Marketing - AI-Optimized ROI Campaigns",
  "heroBadge": "Target",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Data-Driven Campaigns Where Every Dollar Counts.",
      "content": "Performance marketing is about measurable, scalable results. Lumora deploys aggressive, omnichannel performance campaigns driven by AI algorithms and rigorous A/B testing. We focus strictly on KPIs—CPA, ROAS, and LTV—ensuring your marketing budget acts as a precise investment vehicle for immediate revenue growth.",
      "mediaUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "Performance Marketing Strategies",
      "content": "Unlocking unprecedented ROI with programmatic precision.",
      "cards": [
        {
          "id": "card-1",
          "title": "Programmatic Advertising",
          "description": "Real-time automated bidding across global ad exchanges.",
          "iconName": "Cpu"
        },
        {
          "id": "card-2",
          "title": "Conversion Rate Optimization",
          "description": "Continuous multivariate testing of landing pages and funnels.",
          "iconName": "MousePointerClick"
        },
        {
          "id": "card-3",
          "title": "Cross-Channel Attribution",
          "description": "Understanding the exact touchpoints that drive a sale.",
          "iconName": "GitMerge"
        },
        {
          "id": "card-4",
          "title": "Dynamic Creative Optimization",
          "description": "AI-generated ad variants tailored to the individual user.",
          "iconName": "Sparkles"
        },
        {
          "id": "card-5",
          "title": "Affiliate & Partner Marketing",
          "description": "Leveraging third-party networks for cost-effective acquisition.",
          "iconName": "Users"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-720",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Scaling revenue with mathematical precision.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "FinTech App User Acquisition",
          "bgImageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
          "description": "By implementing a strict CPA-focused programmatic campaign, we scaled a new FinTech app to 100,000 active users within 4 months while reducing the cost-per-install by 65%.",
          "points": [
            {
              "id": "p1",
              "title": "Algorithm Training",
              "iconName": "Cpu"
            },
            {
              "id": "p2",
              "title": "A/B Testing",
              "iconName": "SplitSquareHorizontal"
            },
            {
              "id": "p3",
              "title": "Attribution Modeling",
              "iconName": "GitMerge"
            },
            {
              "id": "p4",
              "title": "LTV Analysis",
              "iconName": "BarChart3"
            },
            {
              "id": "p5",
              "title": "Budget Scaling",
              "iconName": "TrendingUp"
            },
            {
              "id": "p6",
              "title": "Fraud Prevention",
              "iconName": "ShieldCheck"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-performance-marketing-6913",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Performance Marketing services include?",
          "description": "Our Performance Marketing services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Performance Marketing?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Performance Marketing campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Performance Marketing?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Performance Marketing solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "page-retargeting-marketing-hidden",
  "slug": "retargeting-marketing-v2",
  "title": "Retargeting Marketing - Re-engage & Convert Lost Visitors",
  "heroBadge": "RefreshCw",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Don't Let High-Intent Visitors Slip Away.",
      "content": "Over 97% of visitors leave a website without taking action. Lumora's Retargeting Marketing services ensure your brand stays top-of-mind. We use advanced tracking pixels and dynamic ad formats to re-engage bounced traffic across social networks, search engines, and partner sites, guiding them back to your funnel to complete their purchase or inquiry.",
      "mediaUrl": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "Advanced Retargeting Solutions",
      "content": "Recapture lost revenue with persistent, tailored messaging.",
      "cards": [
        {
          "id": "card-1",
          "title": "Dynamic Product Ads",
          "description": "Showing users the exact products they viewed but didn't buy.",
          "iconName": "ShoppingBag"
        },
        {
          "id": "card-2",
          "title": "Cross-Device Tracking",
          "description": "Reaching users seamlessly across mobile, tablet, and desktop.",
          "iconName": "MonitorSmartphone"
        },
        {
          "id": "card-3",
          "title": "Cart Abandonment Campaigns",
          "description": "High-urgency ads designed to close the sale immediately.",
          "iconName": "ShoppingCart"
        },
        {
          "id": "card-4",
          "title": "Video Sequence Retargeting",
          "description": "Moving users down the funnel with a planned series of video ads.",
          "iconName": "Video"
        },
        {
          "id": "card-5",
          "title": "Custom CRM Audiences",
          "description": "Uploading email lists to retarget existing or lapsed customers.",
          "iconName": "Database"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-9376",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Bringing buyers back to the checkout line.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Luxury Apparel Cart Recovery",
          "bgImageUrl": "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200",
          "description": "We implemented a dynamic 3-step retargeting sequence across Facebook and Google Display for a luxury clothing brand, recovering $450k in abandoned cart revenue in a single quarter.",
          "points": [
            {
              "id": "p1",
              "title": "Pixel Configuration",
              "iconName": "Code"
            },
            {
              "id": "p2",
              "title": "Dynamic Feeds",
              "iconName": "Database"
            },
            {
              "id": "p3",
              "title": "Urgency Copywriting",
              "iconName": "PenTool"
            },
            {
              "id": "p4",
              "title": "Frequency Capping",
              "iconName": "Clock"
            },
            {
              "id": "p5",
              "title": "Offer Testing",
              "iconName": "Sparkles"
            },
            {
              "id": "p6",
              "title": "ROAS Tracking",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-retargeting-marketing-1811",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Retargeting Marketing services include?",
          "description": "Our Retargeting Marketing services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Retargeting Marketing?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Retargeting Marketing campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Retargeting Marketing?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Retargeting Marketing solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "page-ai-marketing-automation-hidden",
  "slug": "ai-marketing-automation-v2",
  "title": "AI Marketing Automation - Smart Workflows & Nurturing",
  "heroBadge": "Cpu",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Scaling Your Sales with Artificial Intelligence.",
      "content": "Manual lead nurturing is slow and prone to errors. Lumora integrates cutting-edge AI Marketing Automation tools that streamline your entire customer journey. From intelligent chatbots that qualify leads 24/7 to predictive email sequencing and automated CRM updates, we build smart infrastructures that allow your team to focus on closing, not chasing.",
      "mediaUrl": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "Intelligent Automation Services",
      "content": "Eliminate repetitive tasks and hyper-personalize customer interactions.",
      "cards": [
        {
          "id": "card-1",
          "title": "Predictive Lead Scoring",
          "description": "AI algorithms that rank leads based on their likelihood to close.",
          "iconName": "Target"
        },
        {
          "id": "card-2",
          "title": "Conversational AI Chatbots",
          "description": "Smart bots that answer FAQs and book meetings automatically.",
          "iconName": "MessageSquare"
        },
        {
          "id": "card-3",
          "title": "Automated Email Journeys",
          "description": "Drip campaigns that adapt based on user behavior and triggers.",
          "iconName": "Mail"
        },
        {
          "id": "card-4",
          "title": "CRM Architecture",
          "description": "Structuring HubSpot/Salesforce for maximum automation efficiency.",
          "iconName": "Database"
        },
        {
          "id": "card-5",
          "title": "Omnichannel Sync",
          "description": "Ensuring marketing data flows perfectly into sales pipelines.",
          "iconName": "Workflow"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-1850",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Working smarter, not harder.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "B2B Tech Company Pipeline Automation",
          "bgImageUrl": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
          "description": "By deploying a customized HubSpot AI workflow and an intelligent qualification bot, we reduced their sales cycle length by 35% and saved the sales team 20 hours per week in manual entry.",
          "points": [
            {
              "id": "p1",
              "title": "Workflow Mapping",
              "iconName": "Map"
            },
            {
              "id": "p2",
              "title": "Bot Scripting",
              "iconName": "Code"
            },
            {
              "id": "p3",
              "title": "CRM Integration",
              "iconName": "Database"
            },
            {
              "id": "p4",
              "title": "Behavioral Triggers",
              "iconName": "Zap"
            },
            {
              "id": "p5",
              "title": "Sales Alignment",
              "iconName": "Users"
            },
            {
              "id": "p6",
              "title": "Optimization",
              "iconName": "Activity"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-ai-marketing-automation-2943",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your AI Marketing Automation services include?",
          "description": "Our AI Marketing Automation services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from AI Marketing Automation?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive AI Marketing Automation campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for AI Marketing Automation?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled AI Marketing Automation solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "page-paid-advertising-campaigns-hidden",
  "slug": "paid-advertising-campaigns-v2",
  "title": "Paid Advertising Campaigns Services",
  "heroBadge": "Megaphone",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-ads-we-manage-paid",
      "type": "scrollable-cards",
      "title": "Ads We Manage",
      "cards": [
        {
          "id": "card-google",
          "title": "Google Ads",
          "description": "Search, Display, Shopping, Performance Max & YouTube Ads",
          "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
          "linkUrl": "paid-advertising-campaigns/google-ads"
        },
        {
          "id": "card-meta",
          "title": "Meta Ads",
          "description": "Facebook & Instagram Ads that build brand, leads & sales",
          "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
          "linkUrl": "paid-advertising-campaigns/meta-ads"
        },
        {
          "id": "card-youtube",
          "title": "YouTube Ads",
          "description": "Video Ads that increase brand awareness and drive conversions",
          "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
          "linkUrl": "paid-advertising-campaigns/youtube-ads"
        },
        {
          "id": "card-linkedin",
          "title": "LinkedIn Ads",
          "description": "B2B Leads, Brand Building & Targeted Outreach for Professionals",
          "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
          "linkUrl": "paid-advertising-campaigns/linkedin-ads"
        },
        {
          "id": "card-twitter",
          "title": "Twitter (X) Ads",
          "description": "Promote your business and engage with your target audience",
          "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
          "linkUrl": "paid-advertising-campaigns/twitter-ads"
        }
      ]
    },
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Instant Visibility. Immediate Revenue.",
      "content": "When you need fast, scalable results, nothing beats precision Paid Advertising. Lumora manages high-budget PPC campaigns across Google Ads, Microsoft Ads, and premium display networks. We focus on rigorous keyword research, compelling ad copy, and relentless bid optimization to guarantee that you acquire customers at the lowest possible cost.",
      "mediaUrl": "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "PPC & Display Solutions",
      "content": "Maximize your ad spend with data-driven paid search strategies.",
      "cards": [
        {
          "id": "card-1",
          "title": "Search Engine Marketing (SEM)",
          "description": "Capturing high-intent searches on Google and Bing.",
          "iconName": "Search"
        },
        {
          "id": "card-2",
          "title": "Display Network Campaigns",
          "description": "Building brand awareness with visually striking banner ads.",
          "iconName": "Image"
        },
        {
          "id": "card-3",
          "title": "Video Ads (YouTube)",
          "description": "Engaging pre-roll and mid-roll video campaigns.",
          "iconName": "Video"
        },
        {
          "id": "card-4",
          "title": "Shopping Ads (E-commerce)",
          "description": "Showcasing your product inventory directly in search results.",
          "iconName": "ShoppingBag"
        },
        {
          "id": "card-5",
          "title": "A/B Copy Testing",
          "description": "Continuously refining ad headlines and descriptions for higher CTR.",
          "iconName": "PenTool"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-5263",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Dominating the paid search landscape.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Legal Firm Lead Generation",
          "bgImageUrl": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200",
          "description": "In a highly competitive market, we restructured a personal injury law firm's Google Ads account, implementing negative keyword lists and bid modifiers to decrease their Cost Per Acquisition by 55%.",
          "points": [
            {
              "id": "p1",
              "title": "Keyword Audit",
              "iconName": "Search"
            },
            {
              "id": "p2",
              "title": "Negative Keywords",
              "iconName": "MinusCircle"
            },
            {
              "id": "p3",
              "title": "Ad Copy Writing",
              "iconName": "PenTool"
            },
            {
              "id": "p4",
              "title": "Landing Pages",
              "iconName": "Layout"
            },
            {
              "id": "p5",
              "title": "Call Tracking",
              "iconName": "Phone"
            },
            {
              "id": "p6",
              "title": "Bid Adjustments",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-paid-advertising-campaigns-4007",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Paid Advertising Campaigns services include?",
          "description": "Our Paid Advertising Campaigns services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Paid Advertising Campaigns?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Paid Advertising Campaigns campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Paid Advertising Campaigns?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Paid Advertising Campaigns solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "page-target-audience-reach-hidden",
  "slug": "target-audience-reach-v2",
  "title": "Target Audience Reach Services",
  "heroBadge": "Crosshair",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Connecting Your Brand with the People Who Matter.",
      "content": "Marketing is useless if it's not seen by the right eyes. Lumora's Target Audience Reach Services utilize advanced demographic, psychographic, and behavioral profiling to put your brand directly in front of your ideal customers. We leverage big data to eliminate wasted impressions and ensure your message resonates with those most likely to convert.",
      "mediaUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "Audience Profiling & Penetration",
      "content": "Scientifically identifying and acquiring your perfect customer.",
      "cards": [
        {
          "id": "card-1",
          "title": "Buyer Persona Development",
          "description": "Creating detailed profiles of your ideal target customers.",
          "iconName": "UserCheck"
        },
        {
          "id": "card-2",
          "title": "Lookalike Audiences",
          "description": "Finding new users who share traits with your best existing clients.",
          "iconName": "Users"
        },
        {
          "id": "card-3",
          "title": "Geo-Fencing & Hyper-Local",
          "description": "Targeting users within specific physical boundaries.",
          "iconName": "MapPin"
        },
        {
          "id": "card-4",
          "title": "Behavioral Targeting",
          "description": "Serving ads based on a user's browsing history and interests.",
          "iconName": "Target"
        },
        {
          "id": "card-5",
          "title": "B2B Firmographic Targeting",
          "description": "Reaching decision-makers based on company size, revenue, and job title.",
          "iconName": "Briefcase"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-4879",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Hitting the bullseye on customer acquisition.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Niche Software Market Penetration",
          "bgImageUrl": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
          "description": "By utilizing highly specific LinkedIn firmographic targeting and AI-built lookalike audiences, we successfully introduced a niche software product to 500+ C-level executives in the manufacturing sector.",
          "points": [
            {
              "id": "p1",
              "title": "Persona Mapping",
              "iconName": "UserCheck"
            },
            {
              "id": "p2",
              "title": "Data Harvesting",
              "iconName": "Database"
            },
            {
              "id": "p3",
              "title": "List Segmentation",
              "iconName": "List"
            },
            {
              "id": "p4",
              "title": "Custom Messaging",
              "iconName": "MessageSquare"
            },
            {
              "id": "p5",
              "title": "Omnichannel Delivery",
              "iconName": "Globe"
            },
            {
              "id": "p6",
              "title": "Conversion Analysis",
              "iconName": "BarChart3"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-target-audience-reach-7038",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Target Audience Reach services include?",
          "description": "Our Target Audience Reach services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Target Audience Reach?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Target Audience Reach campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Target Audience Reach?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Target Audience Reach solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "page-influencer-marketing-hidden",
  "slug": "influencer-marketing-v2",
  "title": "Influencer Marketing Services",
  "heroBadge": "Star",
  "pageType": "service",
  "isPublished": true,
  "sections": [
    {
      "id": "sec-overview",
      "type": "overview",
      "title": "Borrowing Trust to Accelerate Brand Growth.",
      "content": "Consumers trust recommendations from people they admire. Lumora manages end-to-end Influencer Marketing campaigns, connecting your brand with vetted macro and micro-influencers whose audiences align perfectly with your target market. We handle the outreach, negotiation, content guidelines, and ROI tracking to ensure authentic partnerships that drive massive sales.",
      "mediaUrl": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800",
      "bullets": []
    },
    {
      "id": "sec-services",
      "type": "services-grid",
      "title": "End-to-End Influencer Management",
      "content": "Strategic partnerships that create authentic brand champions.",
      "cards": [
        {
          "id": "card-1",
          "title": "Influencer Vetting & Sourcing",
          "description": "Finding creators with high engagement and authentic followings.",
          "iconName": "Search"
        },
        {
          "id": "card-2",
          "title": "Contract Negotiation",
          "description": "Managing deliverables, usage rights, and payment structures.",
          "iconName": "FileText"
        },
        {
          "id": "card-3",
          "title": "Campaign Strategy & Briefs",
          "description": "Providing creative direction while maintaining creator authenticity.",
          "iconName": "Map"
        },
        {
          "id": "card-4",
          "title": "UGC Whitelisting",
          "description": "Running paid ads through the influencer's social handles.",
          "iconName": "TrendingUp"
        },
        {
          "id": "card-5",
          "title": "Affiliate & Promo Tracking",
          "description": "Measuring direct sales generated by each specific creator.",
          "iconName": "BarChart3"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-8765",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Going viral with the right partnerships.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Beauty Brand Product Launch",
          "bgImageUrl": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200",
          "description": "We orchestrated a synchronized launch featuring 50 micro-influencers on TikTok and Instagram. The campaign generated 4.5 million organic impressions and sold out the initial product run in just 72 hours.",
          "points": [
            {
              "id": "p1",
              "title": "Creator Scouting",
              "iconName": "Search"
            },
            {
              "id": "p2",
              "title": "Product Seeding",
              "iconName": "Package"
            },
            {
              "id": "p3",
              "title": "Brief Creation",
              "iconName": "PenTool"
            },
            {
              "id": "p4",
              "title": "Content Review",
              "iconName": "Eye"
            },
            {
              "id": "p5",
              "title": "Launch Coordination",
              "iconName": "Clock"
            },
            {
              "id": "p6",
              "title": "Sales Attribution",
              "iconName": "DollarSign"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-influencer-marketing-5320",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Influencer Marketing services include?",
          "description": "Our Influencer Marketing services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Influencer Marketing?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Influencer Marketing campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Influencer Marketing?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Influencer Marketing solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "position": "None"
},
{
  "id": "20-hidden",
  "slug": "strategies-creations",
  "title": "Strategies Creations",
  "isPublished": true,
  "heroTitle": "Data-Driven Strategies Creations",
  "heroSubtitle": "We craft comprehensive digital marketing strategies that align with your business goals, target the right audience, and drive sustainable growth.",
  "heroBadge": "TrendingUp",
  "heroImage": "/images/services/strategy_creation.png",
  "overviewContent": "Our strategy creation process dives deep into your market, competitors, and audience. We build actionable roadmaps that take the guesswork out of marketing and give your team clear, measurable objectives to achieve.",
  "sections": [
    {
      "id": "overview-20",
      "type": "overview",
      "isActive": true,
      "orderIndex": 0,
      "content": "A successful marketing campaign starts with a solid foundation. Our Strategies Creations service involves deep market research, competitive analysis, and audience profiling to create a customized marketing blueprint. We don't just give you ideas; we give you a step-by-step execution plan tailored to maximize ROI across all relevant channels.",
      "title": "Strategic Blueprinting",
      "subtitle": "The Foundation of Success"
    },
    {
      "id": "features-20",
      "type": "services-grid",
      "isActive": true,
      "orderIndex": 1,
      "title": "Key Strategy Components",
      "subtitle": "What goes into our strategies",
      "cards": [
        {
          "title": "Market Positioning",
          "description": "Finding the white space in your industry.",
          "iconName": "Target"
        },
        {
          "title": "Audience Personas",
          "description": "Detailed profiles of your ideal buyers.",
          "iconName": "Users"
        },
        {
          "title": "Channel Selection",
          "description": "Identifying where your audience spends their time.",
          "iconName": "Share2"
        },
        {
          "title": "Budget Allocation",
          "description": "Optimizing spend for maximum returns.",
          "iconName": "PieChart"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-9105",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study-8837",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Real results for real clients.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Scaling strategies creations",
          "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
          "description": "Through a strategic approach, we helped our client achieve unprecedented growth and efficiency.",
          "points": [
            {
              "id": "p1",
              "title": "Strategic Planning",
              "iconName": "Map"
            },
            {
              "id": "p2",
              "title": "Execution",
              "iconName": "Target"
            },
            {
              "id": "p3",
              "title": "Results",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-strategies-creations-9383",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Strategies Creations services include?",
          "description": "Our Strategies Creations services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Strategies Creations?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Strategies Creations campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Strategies Creations?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Strategies Creations solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "seo": {
    "metaTitle": "Marketing Strategies Creations | Lumora",
    "metaDescription": "Custom digital marketing strategies tailored for growth and ROI.",
    "keywords": "marketing strategy, digital strategy, growth planning"
  },
  "serviceFeatures": [
    "In-depth Market Research",
    "Competitor Analysis",
    "Actionable Roadmaps"
  ],
  "serviceDeliverables": [
    "Comprehensive Strategy Document",
    "Quarterly Execution Plans",
    "KPI Dashboards"
  ],
  "serviceRecommendedFor": "Startups and enterprises looking to scale or pivot.",
  "position": "None"
},
{
  "id": "21-hidden",
  "slug": "diagnose-marketing-v2",
  "title": "Diagnose Marketing",
  "isPublished": true,
  "heroTitle": "Comprehensive Marketing Diagnosis",
  "heroSubtitle": "Identify bottlenecks, discover wasted ad spend, and unlock hidden revenue opportunities within your current marketing funnel.",
  "heroBadge": "Search",
  "heroImage": "/images/services/diagnose_marketing.png",
  "overviewContent": "If your marketing isn't performing as expected, our Diagnose Marketing service will find out why. We conduct a complete audit of your digital footprint, ad accounts, SEO, and website conversion rates to pinpoint exact areas of improvement.",
  "sections": [
    {
      "id": "overview-21",
      "type": "overview",
      "isActive": true,
      "orderIndex": 0,
      "content": "Stop guessing why your campaigns are failing. Our diagnostic process uses advanced analytics and manual expert review to audit every touchpoint of your customer journey. We evaluate messaging alignment, technical setup, tracking accuracy, and creative effectiveness to provide a clear diagnosis of your marketing health.",
      "title": "Uncovering the Truth",
      "subtitle": "Deep-dive Audits"
    },
    {
      "id": "sec-how-we-do-it-9462",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study-8782",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Real results for real clients.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Scaling diagnose marketing",
          "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
          "description": "Through a strategic approach, we helped our client achieve unprecedented growth and efficiency.",
          "points": [
            {
              "id": "p1",
              "title": "Strategic Planning",
              "iconName": "Map"
            },
            {
              "id": "p2",
              "title": "Execution",
              "iconName": "Target"
            },
            {
              "id": "p3",
              "title": "Results",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-diagnose-marketing-9922",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Diagnose Marketing services include?",
          "description": "Our Diagnose Marketing services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Diagnose Marketing?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Diagnose Marketing campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Diagnose Marketing?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Diagnose Marketing solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "seo": {
    "metaTitle": "Diagnose Marketing Performance | Lumora",
    "metaDescription": "Find out why your marketing campaigns are underperforming with our expert diagnostic services.",
    "keywords": "marketing audit, campaign diagnosis, conversion rate optimization"
  },
  "serviceFeatures": [
    "Full Funnel Analysis",
    "Tracking & Analytics Verification",
    "Competitor Benchmarking"
  ],
  "serviceDeliverables": [
    "Detailed Audit Report",
    "Prioritized Action Plan",
    "Consultation Session"
  ],
  "serviceRecommendedFor": "Companies with existing campaigns seeing declining ROI.",
  "position": "None"
},
{
  "id": "22-hidden",
  "slug": "retarget-marketing",
  "title": "Retarget Marketing",
  "isPublished": true,
  "heroTitle": "High-Converting Retargeting Campaigns",
  "heroSubtitle": "Bring back lost visitors and turn them into paying customers with highly personalized, omnichannel retargeting strategies.",
  "heroBadge": "Repeat",
  "heroImage": "/images/services/retarget_marketing.png",
  "overviewContent": "Over 95% of first-time website visitors leave without converting. Our Retarget Marketing service captures this lost revenue by strategically re-engaging them across social media, display networks, and email with tailored messaging based on their previous behavior.",
  "sections": [
    {
      "id": "overview-22",
      "type": "overview",
      "isActive": true,
      "orderIndex": 0,
      "content": "We don't just stalk your visitors with the same ad. We build dynamic retargeting funnels that address objections, offer timely incentives, and guide prospects back to the point of purchase. By segmenting audiences based on how they interacted with your site (e.g., viewed pricing, abandoned cart, read a blog), we deliver hyper-relevant ads that drastically improve conversion rates.",
      "title": "Smart Re-engagement",
      "subtitle": "Closing the Loop"
    },
    {
      "id": "features-22",
      "type": "services-grid",
      "isActive": true,
      "orderIndex": 1,
      "title": "Retargeting Capabilities",
      "subtitle": "Platforms and strategies we use",
      "cards": [
        {
          "title": "Dynamic Product Ads",
          "description": "Showing exactly what they left in their cart.",
          "iconName": "ShoppingCart"
        },
        {
          "title": "Cross-Channel",
          "description": "Following users seamlessly across Meta, Google, and LinkedIn.",
          "iconName": "Globe"
        },
        {
          "title": "Sequential Messaging",
          "description": "Telling a story over multiple ad touches.",
          "iconName": "MessageSquare"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-1451",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study-2107",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Real results for real clients.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Scaling retarget marketing",
          "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
          "description": "Through a strategic approach, we helped our client achieve unprecedented growth and efficiency.",
          "points": [
            {
              "id": "p1",
              "title": "Strategic Planning",
              "iconName": "Map"
            },
            {
              "id": "p2",
              "title": "Execution",
              "iconName": "Target"
            },
            {
              "id": "p3",
              "title": "Results",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-retarget-marketing-9060",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Retarget Marketing services include?",
          "description": "Our Retarget Marketing services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Retarget Marketing?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Retarget Marketing campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Retarget Marketing?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Retarget Marketing solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "seo": {
    "metaTitle": "Retarget Marketing Services | Lumora",
    "metaDescription": "Convert lost traffic with smart omnichannel retargeting campaigns.",
    "keywords": "retargeting, remarketing, conversion optimization"
  },
  "serviceFeatures": [
    "Dynamic Ad Creatives",
    "Behavioral Audience Segmentation",
    "Frequency Capping & Optimization"
  ],
  "serviceDeliverables": [
    "Retargeting Funnel Setup",
    "A/B Tested Creatives",
    "ROI & Attribution Reporting"
  ],
  "serviceRecommendedFor": "E-commerce and B2B SaaS with high website traffic.",
  "position": "None"
},
{
  "id": "23-hidden",
  "slug": "demand-generation-v2",
  "title": "Demand Generation",
  "isPublished": true,
  "heroTitle": "Scalable Demand Generation",
  "heroSubtitle": "Create sustainable, long-term brand awareness and interest that fills your pipeline with high-intent prospects before they even start searching for a solution.",
  "heroBadge": "Megaphone",
  "heroImage": "/images/services/demand_generation.png",
  "overviewContent": "Unlike traditional lead gen that harvests existing demand, our Demand Generation services create new demand. We position your brand as a thought leader and educate your market on the problems they didn't know they had, making you the undeniable solution.",
  "sections": [
    {
      "id": "overview-23",
      "type": "overview",
      "isActive": true,
      "orderIndex": 0,
      "content": "Demand generation requires a holistic approach combining content marketing, PR, organic social, and top-of-funnel paid media. We focus on distributing high-value, ungated content that builds trust and authority. By capturing mindshare early, we ensure that when buyers are ready to purchase, you are the only brand they consider.",
      "title": "Creating the Market",
      "subtitle": "Beyond Lead Gen"
    },
    {
      "id": "faq-23",
      "type": "services-grid",
      "isActive": true,
      "orderIndex": 1,
      "title": "Demand Generation FAQs",
      "subtitle": "Common questions about our approach",
      "cards": [
        {
          "title": "How is this different from Lead Generation?",
          "description": "Lead generation captures existing intent (often through gated content or direct response ads). Demand generation creates the intent through education and brand building, often without asking for an email right away.",
          "iconName": "MessageCircle"
        },
        {
          "title": "How do you measure Demand Generation?",
          "description": "We look at blended metrics including branded search volume, direct traffic, content engagement, and overall pipeline velocity, rather than just cost-per-lead.",
          "iconName": "MessageCircle"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-6810",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study-1701",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Real results for real clients.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Scaling demand generation",
          "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
          "description": "Through a strategic approach, we helped our client achieve unprecedented growth and efficiency.",
          "points": [
            {
              "id": "p1",
              "title": "Strategic Planning",
              "iconName": "Map"
            },
            {
              "id": "p2",
              "title": "Execution",
              "iconName": "Target"
            },
            {
              "id": "p3",
              "title": "Results",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-demand-generation-4289",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Demand Generation services include?",
          "description": "Our Demand Generation services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Demand Generation?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Demand Generation campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Demand Generation?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Demand Generation solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "seo": {
    "metaTitle": "B2B Demand Generation | Lumora",
    "metaDescription": "Build brand authority and create sustainable pipeline with our demand generation strategies.",
    "keywords": "demand generation, B2B marketing, brand awareness"
  },
  "serviceFeatures": [
    "Content Strategy & Distribution",
    "Thought Leadership Campaigns",
    "Account-Based Marketing (ABM)"
  ],
  "serviceDeliverables": [
    "Content Calendar",
    "Multi-channel Distribution Setup",
    "Brand Lift Metrics"
  ],
  "serviceRecommendedFor": "B2B companies selling high-ticket or complex solutions.",
  "position": "None"
},
{
  "id": "24-hidden",
  "slug": "high-quality-lead-generation",
  "title": "High Quality Lead Generation",
  "isPublished": true,
  "heroTitle": "High Quality Lead Generation",
  "heroSubtitle": "Stop chasing unqualified prospects. We build automated funnels that attract, qualify, and deliver sales-ready leads directly to your CRM.",
  "heroBadge": "Filter",
  "heroImage": "/images/services/lead_generation.png",
  "overviewContent": "Quantity means nothing if the quality is poor. Our lead generation strategies prioritize intent and qualification over sheer volume. We utilize advanced targeting, rigorous qualifying questionnaires, and CRM integrations to ensure your sales team only speaks to prospects who are ready to buy.",
  "sections": [
    {
      "id": "overview-24",
      "type": "overview",
      "isActive": true,
      "orderIndex": 0,
      "content": "We engineer lead generation systems tailored to your specific ideal customer profile (ICP). By combining high-converting landing pages, compelling lead magnets, and targeted advertising on platforms like LinkedIn and Google, we create a predictable engine for growth. Every lead is scored and nurtured through automated email sequences until they meet your sales criteria.",
      "title": "Quality Over Quantity",
      "subtitle": "The Revenue Engine"
    },
    {
      "id": "sec-how-we-do-it-809",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study-8293",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Real results for real clients.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Scaling high quality lead generation",
          "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
          "description": "Through a strategic approach, we helped our client achieve unprecedented growth and efficiency.",
          "points": [
            {
              "id": "p1",
              "title": "Strategic Planning",
              "iconName": "Map"
            },
            {
              "id": "p2",
              "title": "Execution",
              "iconName": "Target"
            },
            {
              "id": "p3",
              "title": "Results",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-high-quality-lead-generation-479",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your High Quality Lead Generation services include?",
          "description": "Our High Quality Lead Generation services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from High Quality Lead Generation?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive High Quality Lead Generation campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for High Quality Lead Generation?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled High Quality Lead Generation solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "seo": {
    "metaTitle": "High Quality Lead Generation Services | Lumora",
    "metaDescription": "Generate sales-ready B2B and B2C leads with our optimized marketing funnels.",
    "keywords": "lead generation, quality leads, B2B leads, sales funnels"
  },
  "serviceFeatures": [
    "Custom Landing Pages",
    "Lead Scoring & Qualification",
    "CRM & Marketing Automation Integration"
  ],
  "serviceDeliverables": [
    "Automated Lead Funnel",
    "Targeted Ad Campaigns",
    "Lead Nurture Email Sequences"
  ],
  "serviceRecommendedFor": "Service businesses, SaaS, and B2B organizations.",
  "position": "None"
},
{
  "id": "25-hidden",
  "slug": "experts-monthly-audit",
  "title": "Experts Monthly Audit",
  "isPublished": true,
  "heroTitle": "Experts Monthly Audit",
  "heroSubtitle": "Continuous oversight and strategic refinement of your internal marketing efforts by our seasoned industry veterans.",
  "heroBadge": "CheckCircle",
  "heroImage": "/images/services/monthly_audit.png",
  "overviewContent": "Have an in-house marketing team but need expert guidance to ensure they are on the right track? Our Experts Monthly Audit provides ongoing, high-level strategic review, campaign optimization recommendations, and mentorship for your internal staff.",
  "sections": [
    {
      "id": "overview-25",
      "type": "overview",
      "isActive": true,
      "orderIndex": 0,
      "content": "Marketing moves fast. What worked six months ago might be wasting your budget today. With our monthly audit service, a dedicated senior strategist reviews your analytics, ad accounts, and content strategy every 30 days. We provide actionable feedback, catch costly mistakes before they scale, and keep your team updated on the latest platform changes and growth hacks.",
      "title": "Strategic Oversight",
      "subtitle": "Your Fractional CMO Team"
    },
    {
      "id": "features-25",
      "type": "services-grid",
      "isActive": true,
      "orderIndex": 1,
      "title": "What We Review",
      "subtitle": "Monthly checks and balances",
      "cards": [
        {
          "title": "Ad Spend Efficiency",
          "description": "Ensuring your ROAS is maximized across platforms.",
          "iconName": "DollarSign"
        },
        {
          "title": "Conversion Bottlenecks",
          "description": "Identifying where users drop off on your site.",
          "iconName": "AlertTriangle"
        },
        {
          "title": "SEO Performance",
          "description": "Tracking rankings and organic traffic growth.",
          "iconName": "TrendingUp"
        },
        {
          "title": "Strategy Alignment",
          "description": "Keeping tactics aligned with business goals.",
          "iconName": "Compass"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-966",
      "type": "how-we-do-it",
      "title": "How we do it",
      "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
      "cards": [
        {
          "id": "hw-1",
          "title": "Strategy & Planning",
          "description": "We analyze your business goals and develop a comprehensive roadmap."
        },
        {
          "id": "hw-2",
          "title": "Design & Copywriting",
          "description": "Crafting compelling visuals and persuasive messaging that resonates."
        },
        {
          "id": "hw-3",
          "title": "Technical Execution",
          "description": "Implementing the strategy using cutting-edge tools and best practices."
        },
        {
          "id": "hw-4",
          "title": "Quality Assurance",
          "description": "Rigorous testing to ensure everything performs flawlessly."
        },
        {
          "id": "hw-5",
          "title": "Campaign Launch",
          "description": "Deploying the campaigns with precision and maximum impact."
        },
        {
          "id": "hw-6",
          "title": "Optimization & Scaling",
          "description": "Continuous monitoring and refining to maximize ROI and scale success."
        }
      ]
    },
    {
      "id": "sec-case-study-8958",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "Real results for real clients.",
      "caseStudies": [
        {
          "id": "cs-1",
          "title": "Scaling experts monthly audit",
          "bgImageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
          "description": "Through a strategic approach, we helped our client achieve unprecedented growth and efficiency.",
          "points": [
            {
              "id": "p1",
              "title": "Strategic Planning",
              "iconName": "Map"
            },
            {
              "id": "p2",
              "title": "Execution",
              "iconName": "Target"
            },
            {
              "id": "p3",
              "title": "Results",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-experts-monthly-audit-5298",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-1",
          "title": "What exactly do your Experts Monthly Audit services include?",
          "description": "Our Experts Monthly Audit services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
        },
        {
          "id": "faq-2",
          "title": "How long does it take to see results from Experts Monthly Audit?",
          "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive Experts Monthly Audit campaigns typically show significant, scalable growth in 3-6 months."
        },
        {
          "id": "faq-3",
          "title": "Why should we choose Lumora for Experts Monthly Audit?",
          "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled Experts Monthly Audit solutions that directly impact your bottom line."
        }
      ]
    }
  ],
  "seo": {
    "metaTitle": "Monthly Marketing Audits | Lumora",
    "metaDescription": "Get expert oversight and monthly reviews of your marketing campaigns to ensure maximum performance.",
    "keywords": "marketing audit, fractional CMO, campaign review, marketing consulting"
  },
  "serviceFeatures": [
    "Deep-Dive Monthly Account Reviews",
    "Actionable Fixes & Recommendations",
    "1-on-1 Strategy Calls"
  ],
  "serviceDeliverables": [
    "Monthly Video Walkthrough",
    "Prioritized Task List",
    "Performance Benchmark Report"
  ],
  "serviceRecommendedFor": "Companies with an in-house marketing team seeking expert guidance.",
  "position": "None"
},
{
  "id": "page-personal-branding-hidden",
  "slug": "personal-branding-v2",
  "title": "Personal Branding",
  "isPublished": true,
  "pageType": "service",
  "heroTitle": "Elevate Your Personal Brand & Legacy",
  "heroSubtitle": "Position yourself as an industry authority. We build powerful personal brands for CEOs, entrepreneurs, and thought leaders who want to maximize their influence and legacy.",
  "heroBadge": "Award",
  "heroImage": "/images/services/personal_branding_hero.jpg",
  "overviewContent": "In today's digital landscape, people buy from people they trust. Your personal brand is your most valuable asset. Our tailored personal branding strategies are designed exclusively for high-achieving entrepreneurs, CEOs, and industry leaders to help you stand out, build a lasting legacy, and command industry authority.",
  "sections": [
    {
      "id": "sec-overview-personal-branding",
      "type": "overview",
      "isActive": true,
      "orderIndex": 0,
      "content": "A strong personal brand does more than boost your ego—it drives business growth, attracts premium partnerships, and opens doors to speaking engagements and media opportunities. We handle everything from LinkedIn thought leadership and PR placements to premium content creation, so you can focus on leading your business.",
      "title": "Build Your Legacy",
      "subtitle": "Influence that Scales"
    },
    {
      "id": "features-personal-branding",
      "type": "services-grid",
      "isActive": true,
      "orderIndex": 1,
      "title": "Personal Branding Services",
      "subtitle": "What we do for leaders",
      "cards": [
        {
          "title": "Executive Thought Leadership",
          "description": "Ghostwritten articles, LinkedIn posts, and industry insights.",
          "iconName": "PenTool"
        },
        {
          "title": "Digital PR & Media Placement",
          "description": "Getting you featured in top-tier publications and podcasts.",
          "iconName": "Mic"
        },
        {
          "title": "Premium Visual Identity",
          "description": "Professional photography, personal logo, and website design.",
          "iconName": "Image"
        },
        {
          "title": "Speaking Engagement Outreach",
          "description": "Securing keynote speaking spots at industry conferences.",
          "iconName": "Megaphone"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-personal-branding",
      "type": "how-we-do-it",
      "title": "How we build your brand",
      "content": "Our process is highly personalized. We start by uncovering your unique story, core values, and expertise, then craft a narrative that resonates with your target audience and peers.",
      "cards": [
        {
          "id": "pb-hw-1",
          "title": "Brand Discovery",
          "description": "Deep-dive interviews to extract your unique value proposition."
        },
        {
          "id": "pb-hw-2",
          "title": "Strategy & Narrative",
          "description": "Defining your content pillars and target audience."
        },
        {
          "id": "pb-hw-3",
          "title": "Content Creation",
          "description": "Developing high-impact visual and written content."
        },
        {
          "id": "pb-hw-4",
          "title": "Omnichannel Distribution",
          "description": "Publishing across LinkedIn, Twitter, and personal blogs."
        },
        {
          "id": "pb-hw-5",
          "title": "PR & Outreach",
          "description": "Pitching you to podcasts and media outlets."
        },
        {
          "id": "pb-hw-6",
          "title": "Authority Scaling",
          "description": "Leveraging your new authority for business growth."
        }
      ]
    },
    {
      "id": "sec-case-study-personal-branding",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "How we built a top-tier personal brand.",
      "caseStudies": [
        {
          "id": "cs-pb-1",
          "title": "Scaling Executive Influence",
          "bgImageUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200",
          "description": "We worked with a tech founder to position them as a thought leader on LinkedIn, resulting in a 400% increase in profile views and securing two keynote speaking slots at major industry conferences within 6 months.",
          "points": [
            {
              "id": "p1",
              "title": "Narrative Building",
              "iconName": "PenTool"
            },
            {
              "id": "p2",
              "title": "Content Strategy",
              "iconName": "Map"
            },
            {
              "id": "p3",
              "title": "Audience Engagement",
              "iconName": "Users"
            },
            {
              "id": "p4",
              "title": "PR Placements",
              "iconName": "Mic"
            },
            {
              "id": "p5",
              "title": "Speaking Gigs",
              "iconName": "Megaphone"
            },
            {
              "id": "p6",
              "title": "Lead Growth",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-personal-branding",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-pb-1",
          "title": "Who is this service for?",
          "description": "This service is specifically designed for CEOs, founders, entrepreneurs, executives, and subject matter experts looking to build authority and a recognizable personal brand."
        },
        {
          "id": "faq-pb-2",
          "title": "How much of my time will this take?",
          "description": "We understand leaders are busy. We typically require just 2-3 hours per month for interviews and content approvals. We handle the rest."
        },
        {
          "id": "faq-pb-3",
          "title": "Can personal branding directly impact my company's revenue?",
          "description": "Absolutely. Founders with strong personal brands significantly reduce customer acquisition costs, attract better talent, and close deals faster due to established trust."
        }
      ]
    }
  ],
  "seo": {
    "metaTitle": "Personal Branding for CEOs & Entrepreneurs | Lumora",
    "metaDescription": "Build your legacy and industry authority with our premium personal branding services for leaders, founders, and CEOs.",
    "keywords": "personal branding, ceo branding, executive branding, thought leadership"
  },
  "serviceFeatures": [
    "LinkedIn Authority Building",
    "PR & Podcast Placements",
    "Executive Ghostwriting"
  ],
  "serviceDeliverables": [
    "Personal Brand Strategy Playbook",
    "Monthly Content Calendar",
    "Media Kit & Press Features"
  ],
  "serviceRecommendedFor": "CEOs, Founders, and executives wanting to build a lasting legacy.",
  "position": "None"
},
{
  "id": "page-brand-management-hidden",
  "slug": "brand-management-v2",
  "title": "Brand Management",
  "isPublished": true,
  "pageType": "service",
  "heroTitle": "Scale Your Product's Market Presence",
  "heroSubtitle": "End-to-end product brand management. We handle product positioning, digital marketing, visual identity, and performance campaigns to make your products market leaders.",
  "heroBadge": "Star",
  "heroImage": "/images/services/brand_management_hero.jpg",
  "overviewContent": "Effective brand management is more than just a logo on a product. It's the complete strategy of how your item is perceived, marketed, and sold in a competitive landscape. We help e-commerce and retail businesses build strong, recognizable product brands that drive loyalty and high-volume sales through data-driven marketing, aesthetic packaging design, and targeted omnichannel campaigns.",
  "sections": [
    {
      "id": "sec-overview-brand-management",
      "type": "overview",
      "isActive": true,
      "orderIndex": 0,
      "content": "Our comprehensive brand management services cover everything your product needs to succeed. From initial market research and competitor analysis to executing high-converting digital ad campaigns and influencer partnerships, we ensure your product stays top-of-mind for consumers.",
      "title": "Dominate Your Market Category",
      "subtitle": "Product Marketing Excellence"
    },
    {
      "id": "features-brand-management",
      "type": "services-grid",
      "isActive": true,
      "orderIndex": 1,
      "title": "Product Brand Management Services",
      "subtitle": "How we elevate your items",
      "cards": [
        {
          "title": "Product Positioning & Strategy",
          "description": "Defining your unique value proposition and target demographic.",
          "iconName": "Target"
        },
        {
          "title": "Visual Identity & Packaging",
          "description": "Creating stunning visuals, logos, and packaging designs that sell.",
          "iconName": "Image"
        },
        {
          "title": "E-Commerce & Performance Ads",
          "description": "Driving direct sales via Google Shopping, Meta, and TikTok Ads.",
          "iconName": "TrendingUp"
        },
        {
          "title": "Influencer & Affiliate Marketing",
          "description": "Partnering with creators to build authentic product awareness.",
          "iconName": "Users"
        }
      ]
    },
    {
      "id": "sec-how-we-do-it-brand-management",
      "type": "how-we-do-it",
      "title": "Our Brand Management Process",
      "content": "A systematic approach to taking your product from an unknown item to a household name.",
      "cards": [
        {
          "id": "bm-hw-1",
          "title": "Market Audit",
          "description": "Analyzing competitors and finding market gaps."
        },
        {
          "id": "bm-hw-2",
          "title": "Brand Guidelines",
          "description": "Establishing consistent visual and tonal identity."
        },
        {
          "id": "bm-hw-3",
          "title": "Campaign Launch",
          "description": "Rolling out multi-channel marketing campaigns."
        },
        {
          "id": "bm-hw-4",
          "title": "Distribution & SEO",
          "description": "Optimizing listings on Amazon, Shopify, and Google."
        },
        {
          "id": "bm-hw-5",
          "title": "Community Building",
          "description": "Fostering customer loyalty and social proof."
        },
        {
          "id": "bm-hw-6",
          "title": "Scale & Optimize",
          "description": "Using analytics to refine ads and scale production."
        }
      ]
    },
    {
      "id": "sec-case-study-brand-management",
      "type": "case-study",
      "title": "Client Success & Transformation",
      "content": "How we helped consumer brands achieve explosive growth.",
      "caseStudies": [
        {
          "id": "cs-bm-1",
          "title": "DTC Skincare Brand Relaunch",
          "bgImageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200",
          "description": "We took over the brand management for a struggling DTC skincare line. By revamping their visual identity and launching targeted TikTok and Meta ad campaigns, we increased their monthly recurring revenue by 350% in 4 months.",
          "points": [
            {
              "id": "p1",
              "title": "Packaging Redesign",
              "iconName": "Package"
            },
            {
              "id": "p2",
              "title": "TikTok Ads",
              "iconName": "Video"
            },
            {
              "id": "p3",
              "title": "Conversion Optimization",
              "iconName": "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      "id": "faq-brand-management",
      "type": "faq",
      "title": "Frequently Asked Questions",
      "content": "",
      "cards": [
        {
          "id": "faq-bm-1",
          "title": "Do you work with physical or digital products?",
          "description": "We manage both! While we have extensive experience with physical CPG (Consumer Packaged Goods), fashion, and tech hardware, we also successfully manage SaaS and digital product brands."
        },
        {
          "id": "faq-bm-2",
          "title": "Does this include social media management?",
          "description": "Yes, our brand management packages typically include full-scale social media management to ensure your product maintains a consistent and engaging presence online."
        },
        {
          "id": "faq-bm-3",
          "title": "How long does it take to see results?",
          "description": "While visual identity changes are immediate, building measurable brand equity and scaling e-commerce sales typically takes 3 to 6 months of consistent campaign execution."
        }
      ]
    }
  ],
  "seo": {
    "metaTitle": "Product Brand Management Services | Lumora",
    "metaDescription": "Scale your product's market presence with our end-to-end brand management, marketing, and performance strategies.",
    "keywords": "product brand management, item marketing, CPG marketing, e-commerce branding"
  },
  "serviceFeatures": [
    "Product Positioning & Launch",
    "Omnichannel Ad Campaigns",
    "Packaging & Visual Identity"
  ],
  "serviceDeliverables": [
    "Comprehensive Brand Book",
    "Monthly Ad Performance Reports",
    "Influencer Partnership Roster"
  ],
  "serviceRecommendedFor": "E-commerce stores, retail brands, and startups launching new products.",
  "position": "None"
}
];
