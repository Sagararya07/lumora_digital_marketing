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
      "id": "social-media-marketing",
      "title": "Social Media Marketing",
      "shortDescription": "Build brand authority, engage target demographics, and turn social channels into lead engines on Meta, LinkedIn, and X.",
      "fullDescription": "Our Social Media Marketing service drives organic community engagement paired with high-conversion paid social campaigns across Facebook, Instagram, LinkedIn, YouTube, and X. We handle content creation, short-form video reels, influencer partnerships, and audience retargeting.",
      "iconName": "Share2",
      "features": [
        "Custom Visual & Video Content",
        "Community Management 24/7",
        "LinkedIn Executive Thought Leadership",
        "Audience Retargeting Pixel Funnels"
      ],
      "deliverables": [
        "Monthly Content Calendar",
        "1080p Video Reels & Motion Graphics",
        "Bi-weekly Performance Analytics",
        "Paid Social Ad Management"
      ],
      "recommendedFor": "B2B & B2C brands looking for viral brand equity and direct consumer lead capture.",
      "badge": "High Conversion"
    },
    {
      "id": "search-engine-optimization",
      "title": "Search Engine Optimization (SEO)",
      "shortDescription": "Dominate Google organic search results with technical SEO, keyword architecture, and authority backlink building.",
      "fullDescription": "Our international SEO strategy drives sustainable high-intent organic traffic. We conduct deep site audits, resolve technical indexation barriers, produce authoritative long-form content, and build white-hat niche backlink profiles that outperform competitors.",
      "iconName": "Search",
      "features": [
        "Technical Core Web Vitals Audits",
        "International & Multi-Regional SEO",
        "High-Domain Backlink Acquisition",
        "Schema & Structured Data Markup"
      ],
      "deliverables": [
        "Custom Keyword Matrix",
        "On-Page Content Optimization",
        "Monthly Keyword Rank Tracking",
        "Link Building Acquisition Reports"
      ],
      "recommendedFor": "Businesses aiming to build long-term organic acquisition funnels with zero per-click ad cost.",
      "badge": "Organic Scale"
    },
    {
      "id": "performance-marketing",
      "title": "Performance Marketing",
      "shortDescription": "Data-driven paid ads on Google Ads, Bing, and Programmatic Display engineered for strict Target CPA and ROAS.",
      "fullDescription": "Maximize every advertising dollar. Our performance marketing unit creates hyper-targeted Search, Shopping, and Display campaigns that capture high-intent buyers right when they are ready to transact.",
      "iconName": "Target",
      "features": [
        "Google Search & PPC Management",
        "Programmatic Native & Display",
        "AI Keyword Bidding Rules",
        "Negative Keyword Shielding"
      ],
      "deliverables": [
        "High-Converting Landing Pages",
        "Ad Copy Variant Testing",
        "Live Conversion Attribution",
        "ROAS & CPA Dashboards"
      ],
      "recommendedFor": "E-commerce stores and lead-gen businesses needing immediate predictable pipeline growth.",
      "badge": "Max ROAS"
    },
    {
      "id": "lead-generation",
      "title": "Lead Generation",
      "shortDescription": "Capture pre-qualified B2B and B2C sales inquiries directly into your CRM with multi-step interactive lead funnels.",
      "fullDescription": "Turn anonymous website visitors into sales-ready leads. We construct high-converting lead magnets, interactive quiz funnels, calendar booking integrations, and automated lead verification systems.",
      "iconName": "UserPlus",
      "features": [
        "Interactive Quiz & Assessment Funnels",
        "Instant SMS & Email Lead Notifications",
        "CRM Synchronization (HubSpot, Salesforce)",
        "Pre-Qualification Screening Forms"
      ],
      "deliverables": [
        "Custom Multi-step Lead Funnel",
        "A/B Testing Framework",
        "Verified Sales-Ready Leads",
        "Automated Lead Nurturing Email Sequence"
      ],
      "recommendedFor": "High-ticket service providers, IT firms, Real Estate agencies, and B2B SaaS companies.",
      "badge": "Top Choice"
    },
    {
      "id": "retargeting-marketing",
      "title": "Retargeting Marketing",
      "shortDescription": "Re-engage 98% of lost website traffic across display, social, and search networks with dynamic personalized offers.",
      "fullDescription": "Most visitors leave without converting on their first touch. Our multi-platform retargeting campaigns stay top-of-mind, displaying tailored ads based on exact user behavior and product pages viewed.",
      "iconName": "RotateCcw",
      "features": [
        "Dynamic Product Retargeting",
        "Sequential Ad Storytelling",
        "Cross-Device Tracking Pixels",
        "Custom Audience Exclusion Rules"
      ],
      "deliverables": [
        "Custom Retargeting Ad Creatives",
        "Frequency Cap Controls",
        "Abandoned Cart Recovery Funnels",
        "Cost-per-Acquisition Audits"
      ],
      "recommendedFor": "Brands looking to maximize conversion rates from existing marketing spend.",
      "badge": "High Conversion"
    },
    {
      "id": "paid-advertising-campaigns",
      "title": "Paid Advertising Campaigns",
      "shortDescription": "End-to-end paid campaign strategy spanning video ads, native networks, and international media placements.",
      "fullDescription": "Scale across global borders with localized ad creatives, multi-currency budget strategies, and high-impact YouTube video campaigns that command attention and drive buyer action.",
      "iconName": "Megaphone",
      "features": [
        "YouTube Video Ad Production",
        "Native Sponsored Content Placements",
        "Multi-Language Ad Translation",
        "Geofencing & Hyper-Local Targeting"
      ],
      "deliverables": [
        "Omnichannel Campaign Setup",
        "Localized Ad Creatives",
        "Cross-Channel Attribution Model",
        "Weekly Executive Summaries"
      ],
      "recommendedFor": "Enterprises expanding into new national or international geographical territories.",
      "badge": "Global Scale"
    },
    {
      "id": "target-audience-reach",
      "title": "Target Audience Reach",
      "shortDescription": "Identify, segment, and infiltrate high-value niche consumer demographics with behavioral intelligence.",
      "fullDescription": "Stop wasting ad budget on generic impressions. We analyze buyer personas, purchase intent indicators, and competitor audiences to laser-target customer profiles most likely to buy.",
      "iconName": "Crosshair",
      "features": [
        "In-Depth Buyer Persona Mapping",
        "Psychographic & Behavioral Targeting",
        "Competitor Audience Interception",
        "Lookalike Audience Modeling"
      ],
      "deliverables": [
        "Target Market Analysis Report",
        "Custom Audience Segment Exports",
        "Funnel Alignment Matrix",
        "Audience Penetration Metrics"
      ],
      "recommendedFor": "Niche brands and specialized product offerings aiming for high relevance.",
      "badge": "Precision"
    },
    {
      "id": "influencer-marketing",
      "title": "Influencer Marketing",
      "shortDescription": "Amplify brand trust through authentic creator partnerships, sponsored unboxings, and viral social campaigns.",
      "fullDescription": "Connect with respected industry voices and high-engagement creators in tech, lifestyle, finance, and B2B sectors. We manage outreach, contract negotiation, content guidelines, and ROI tracking.",
      "iconName": "Users",
      "features": [
        "Vetted Influencer Matching",
        "Contract & Rights Management",
        "Campaign Strategy & Briefing",
        "Trackable Promo Code Attribution"
      ],
      "deliverables": [
        "Influencer Roster Selection",
        "Co-Branded Content Approval",
        "Post-Campaign Engagement Analytics",
        "Usage Rights Licensing"
      ],
      "recommendedFor": "Consumer brands, mobile apps, and lifestyle products seeking instant social validation.",
      "badge": "Viral Authority"
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
]
};

export const initialDynamicPages: DynamicPage[] = [
  {
    "id": "page-lead-generation",
    "slug": "lead-generation",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-lead-generation-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "page-social-media-marketing",
    "slug": "social-media-marketing",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-social-media-marketing-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "page-seo",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-seo-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "page-performance-marketing",
    "slug": "performance-marketing",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-performance-marketing-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "page-retargeting-marketing",
    "slug": "retargeting-marketing",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-retargeting-marketing-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "page-ai-marketing-automation",
    "slug": "ai-marketing-automation",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-ai-marketing-automation-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "page-paid-advertising-campaigns",
    "slug": "paid-advertising-campaigns",
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
        },{
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-paid-advertising-campaigns-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "page-target-audience-reach",
    "slug": "target-audience-reach",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-target-audience-reach-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "page-influencer-marketing",
    "slug": "influencer-marketing",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "mediaUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        "cards": [
          {
            "id": "hw-1",
            "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap."
          },
          {
            "id": "hw-2",
            "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates."
          },
          {
            "id": "hw-3",
            "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices."
          },
          {
            "id": "hw-4",
            "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly."
          },
          {
            "id": "hw-5",
            "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact."
          },
          {
            "id": "hw-6",
            "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success."
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
      }
    
      ,
      {
        "id": "faq-influencer-marketing-" + Math.floor(Math.random()*10000),
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
    ]
  },
  {
    "id": "20",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "cards": [
          { "id": "hw-1", "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap." },
          { "id": "hw-2", "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates." },
          { "id": "hw-3", "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices." },
          { "id": "hw-4", "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly." },
          { "id": "hw-5", "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact." },
          { "id": "hw-6", "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success." }
        ]
      },
      {
        "id": "sec-case-study-" + Math.floor(Math.random()*10000),
        "type": "case-study",
        "title": "Client Success & Transformation",
        "content": "Real results for real clients.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling " + "strategies-creations".replace(/-/g, ' '),
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
      }
    
      ,
      {
        "id": "faq-strategies-creations-" + Math.floor(Math.random()*10000),
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
    "serviceRecommendedFor": "Startups and enterprises looking to scale or pivot."
  },
  {
    "id": "21",
    "slug": "diagnose-marketing",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "cards": [
          { "id": "hw-1", "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap." },
          { "id": "hw-2", "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates." },
          { "id": "hw-3", "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices." },
          { "id": "hw-4", "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly." },
          { "id": "hw-5", "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact." },
          { "id": "hw-6", "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success." }
        ]
      },
      {
        "id": "sec-case-study-" + Math.floor(Math.random()*10000),
        "type": "case-study",
        "title": "Client Success & Transformation",
        "content": "Real results for real clients.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling " + "diagnose-marketing".replace(/-/g, ' '),
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
      }
    
      ,
      {
        "id": "faq-diagnose-marketing-" + Math.floor(Math.random()*10000),
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
    "serviceRecommendedFor": "Companies with existing campaigns seeing declining ROI."
  },
  {
    "id": "22",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "cards": [
          { "id": "hw-1", "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap." },
          { "id": "hw-2", "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates." },
          { "id": "hw-3", "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices." },
          { "id": "hw-4", "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly." },
          { "id": "hw-5", "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact." },
          { "id": "hw-6", "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success." }
        ]
      },
      {
        "id": "sec-case-study-" + Math.floor(Math.random()*10000),
        "type": "case-study",
        "title": "Client Success & Transformation",
        "content": "Real results for real clients.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling " + "retarget-marketing".replace(/-/g, ' '),
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
      }
    
      ,
      {
        "id": "faq-retarget-marketing-" + Math.floor(Math.random()*10000),
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
    "serviceRecommendedFor": "E-commerce and B2B SaaS with high website traffic."
  },
  {
    "id": "23",
    "slug": "demand-generation",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "cards": [
          { "id": "hw-1", "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap." },
          { "id": "hw-2", "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates." },
          { "id": "hw-3", "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices." },
          { "id": "hw-4", "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly." },
          { "id": "hw-5", "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact." },
          { "id": "hw-6", "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success." }
        ]
      },
      {
        "id": "sec-case-study-" + Math.floor(Math.random()*10000),
        "type": "case-study",
        "title": "Client Success & Transformation",
        "content": "Real results for real clients.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling " + "demand-generation".replace(/-/g, ' '),
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
      }
    
      ,
      {
        "id": "faq-demand-generation-" + Math.floor(Math.random()*10000),
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
    "serviceRecommendedFor": "B2B companies selling high-ticket or complex solutions."
  },
  {
    "id": "24",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "cards": [
          { "id": "hw-1", "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap." },
          { "id": "hw-2", "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates." },
          { "id": "hw-3", "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices." },
          { "id": "hw-4", "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly." },
          { "id": "hw-5", "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact." },
          { "id": "hw-6", "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success." }
        ]
      }
    
      ,
      {
        "id": "sec-case-study-" + Math.floor(Math.random()*10000),
        "type": "case-study",
        "title": "Client Success & Transformation",
        "content": "Real results for real clients.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling " + "high-quality-lead-generation".replace(/-/g, ' '),
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
      }
    
      ,
      {
        "id": "faq-high-quality-lead-generation-" + Math.floor(Math.random()*10000),
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
    "serviceRecommendedFor": "Service businesses, SaaS, and B2B organizations."
  },
  {
    "id": "25",
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
        "id": "sec-how-we-do-it-" + Math.floor(Math.random()*10000),
        "type": "how-we-do-it",
        "title": "How we do it",
        "content": "We create fast, responsive, and conversion-optimised solutions that turn visitors into customers. From strategic planning to seamless execution — every project is built for performance and a seamless user experience across all platforms.",
        "cards": [
          { "id": "hw-1", "title": "Strategy & Planning", "description": "We analyze your business goals and develop a comprehensive roadmap." },
          { "id": "hw-2", "title": "Design & Copywriting", "description": "Crafting compelling visuals and persuasive messaging that resonates." },
          { "id": "hw-3", "title": "Technical Execution", "description": "Implementing the strategy using cutting-edge tools and best practices." },
          { "id": "hw-4", "title": "Quality Assurance", "description": "Rigorous testing to ensure everything performs flawlessly." },
          { "id": "hw-5", "title": "Campaign Launch", "description": "Deploying the campaigns with precision and maximum impact." },
          { "id": "hw-6", "title": "Optimization & Scaling", "description": "Continuous monitoring and refining to maximize ROI and scale success." }
        ]
      },
      {
        "id": "sec-case-study-" + Math.floor(Math.random()*10000),
        "type": "case-study",
        "title": "Client Success & Transformation",
        "content": "Real results for real clients.",
        "caseStudies": [
          {
            "id": "cs-1",
            "title": "Scaling " + "experts-monthly-audit".replace(/-/g, ' '),
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
      }
    
      ,
      {
        "id": "faq-experts-monthly-audit-" + Math.floor(Math.random()*10000),
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
    "serviceRecommendedFor": "Companies with an in-house marketing team seeking expert guidance."
  },
  {
    "id": "page-google-ads",
    "slug": "lead-generation/google-ads",
    "title": "Google Ads Management",
      "heroBadge": "Lightbulb",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-google-ads",
        "type": "icon-hero",
        "title": "Google Ads",
        "content": "Reach customers exactly when they are searching for what you offer. Our Google Ads management services ensure high ROI by optimizing campaigns across Search, Display, Shopping, and Performance Max networks.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
        "bullets": []
      },
{
        "id": "sec-process-google-ads",
        "type": "process",
        "title": "A Proven Process for Predictable Growth",
        "content": "From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.",
        "cards": []
      }
    ]
  },
  {
    "id": "page-meta-ads",
    "slug": "lead-generation/meta-ads",
    "title": "Meta Ads (Facebook & Instagram)",
      "heroBadge": "Activity",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-meta-ads",
        "type": "icon-hero",
        "title": "Meta Ads (Facebook & Instagram)",
        "content": "Leverage the power of Facebook and Instagram with targeted Meta Ads. We create compelling ad creative and utilize advanced audience targeting to drive brand awareness, leads, and sales.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        "bullets": []
      },
{
        "id": "sec-process-meta-ads",
        "type": "process",
        "title": "A Proven Process for Predictable Growth",
        "content": "From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.",
        "cards": []
      }
    ]
  },
  {
    "id": "page-youtube-ads",
    "slug": "lead-generation/youtube-ads",
    "title": "YouTube Advertising",
      "heroBadge": "Repeat",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-youtube-ads",
        "type": "icon-hero",
        "title": "YouTube Advertising",
        "content": "Harness the world's second-largest search engine. YouTube Ads allow you to connect with users through engaging video content, driving both brand awareness and direct conversions at a lower cost-per-view.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
        "bullets": []
      },
{
        "id": "sec-process-youtube-ads",
        "type": "process",
        "title": "A Proven Process for Predictable Growth",
        "content": "From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.",
        "cards": []
      }
    ]
  },
  {
    "id": "page-linkedin-ads",
    "slug": "lead-generation/linkedin-ads",
    "title": "LinkedIn Ads Management",
      "heroBadge": "TrendingUp",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-linkedin-ads",
        "type": "icon-hero",
        "title": "LinkedIn Ads",
        "content": "Connect with decision-makers and professionals. LinkedIn Ads offer unparalleled B2B targeting capabilities based on job title, industry, and company size to generate high-quality leads.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        "bullets": []
      },
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
    "serviceRecommendedFor": "Companies with an in-house marketing team seeking expert guidance."
  },
  {
    "id": "page-google-ads",
    "slug": "lead-generation/google-ads",
    "title": "Google Ads Management",
      "heroBadge": "Filter",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-google-ads",
        "type": "icon-hero",
        "title": "Google Ads",
        "content": "Reach customers exactly when they are searching for what you offer. Our Google Ads management services ensure high ROI by optimizing campaigns across Search, Display, Shopping, and Performance Max networks.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
        "bullets": []
      },
{
        "id": "sec-process-google-ads",
        "type": "process",
        "title": "A Proven Process for Predictable Growth",
        "content": "From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.",
        "cards": []
      }
    ]
  },
  {
    "id": "page-meta-ads",
    "slug": "lead-generation/meta-ads",
    "title": "Meta Ads (Facebook & Instagram)",
      "heroBadge": "ClipboardCheck",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-meta-ads",
        "type": "icon-hero",
        "title": "Meta Ads (Facebook & Instagram)",
        "content": "Leverage the power of Facebook and Instagram with targeted Meta Ads. We create compelling ad creative and utilize advanced audience targeting to drive brand awareness, leads, and sales.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        "bullets": []
      },
{
        "id": "sec-process-meta-ads",
        "type": "process",
        "title": "A Proven Process for Predictable Growth",
        "content": "From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.",
        "cards": []
      }
    ]
  },
  {
    "id": "page-youtube-ads",
    "slug": "lead-generation/youtube-ads",
    "title": "YouTube Advertising",
      "heroBadge": "UserCheck",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-youtube-ads",
        "type": "icon-hero",
        "title": "YouTube Advertising",
        "content": "Harness the world's second-largest search engine. YouTube Ads allow you to connect with users through engaging video content, driving both brand awareness and direct conversions at a lower cost-per-view.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
        "bullets": []
      },
{
        "id": "sec-process-youtube-ads",
        "type": "process",
        "title": "A Proven Process for Predictable Growth",
        "content": "From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.",
        "cards": []
      }
    ]
  },
  {
    "id": "page-linkedin-ads",
    "slug": "lead-generation/linkedin-ads",
    "title": "LinkedIn Ads Management",
      "heroBadge": "Shield",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-linkedin-ads",
        "type": "icon-hero",
        "title": "LinkedIn Ads",
        "content": "Connect with decision-makers and professionals. LinkedIn Ads offer unparalleled B2B targeting capabilities based on job title, industry, and company size to generate high-quality leads.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        "bullets": []
      },
{
        "id": "sec-process-linkedin-ads",
        "type": "process",
        "title": "A Proven Process for Predictable Growth",
        "content": "From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.",
        "cards": []
      }
    ]
  },
  {
    "id": "page-twitter-ads",
    "slug": "lead-generation/twitter-ads",
    "title": "Twitter (X) Advertising",
      "heroBadge": "Target",
      "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-icon-hero-twitter-ads",
        "type": "icon-hero",
        "title": "Twitter (X) Advertising",
        "content": "Join the conversation and promote your brand on Twitter (X). Our ad strategies help you reach relevant audiences, drive app installs, and boost website traffic with highly engaging, timely ad formats.",
        "mediaUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
        "bullets": []
      },
      {
        "id": "sec-process-twitter-ads",
        "type": "process",
        "title": "A Proven Process for Predictable Growth",
        "content": "From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.",
        "cards": []
      }
    ]
  },
  {
    "id": "page-personal-branding",
    "slug": "personal-branding",
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
          { "id": "pb-hw-1", "title": "Brand Discovery", "description": "Deep-dive interviews to extract your unique value proposition." },
          { "id": "pb-hw-2", "title": "Strategy & Narrative", "description": "Defining your content pillars and target audience." },
          { "id": "pb-hw-3", "title": "Content Creation", "description": "Developing high-impact visual and written content." },
          { "id": "pb-hw-4", "title": "Omnichannel Distribution", "description": "Publishing across LinkedIn, Twitter, and personal blogs." },
          { "id": "pb-hw-5", "title": "PR & Outreach", "description": "Pitching you to podcasts and media outlets." },
          { "id": "pb-hw-6", "title": "Authority Scaling", "description": "Leveraging your new authority for business growth." }
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
    "serviceRecommendedFor": "CEOs, Founders, and executives wanting to build a lasting legacy."
  },
  {
    "id": "page-brand-management",
    "slug": "brand-management",
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
          { "id": "bm-hw-1", "title": "Market Audit", "description": "Analyzing competitors and finding market gaps." },
          { "id": "bm-hw-2", "title": "Brand Guidelines", "description": "Establishing consistent visual and tonal identity." },
          { "id": "bm-hw-3", "title": "Campaign Launch", "description": "Rolling out multi-channel marketing campaigns." },
          { "id": "bm-hw-4", "title": "Distribution & SEO", "description": "Optimizing listings on Amazon, Shopify, and Google." },
          { "id": "bm-hw-5", "title": "Community Building", "description": "Fostering customer loyalty and social proof." },
          { "id": "bm-hw-6", "title": "Scale & Optimize", "description": "Using analytics to refine ads and scale production." }
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
              { "id": "p1", "title": "Packaging Redesign", "iconName": "Package" },
              { "id": "p2", "title": "TikTok Ads", "iconName": "Video" },
              { "id": "p3", "title": "Conversion Optimization", "iconName": "TrendingUp" }
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
    "serviceRecommendedFor": "E-commerce stores, retail brands, and startups launching new products."
  }
];
