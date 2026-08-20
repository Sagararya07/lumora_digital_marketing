const fs = require('fs');

const missingPages = [
  {
    "id": "page-b2b-sales",
    "slug": "lead-generation/b2b-sales",
    "title": "B2B Sales Leads Generation",
    "heroBadge": "Briefcase",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-b2b-overview",
        "type": "overview",
        "title": "High-Value B2B Lead Generation",
        "content": "We specialize in generating high-value business inquiries, meeting bookings, and enterprise prospects. Our B2B lead generation strategies are tailored to fill your sales pipeline with qualified decision-makers."
      }
    ]
  },
  {
    "id": "page-real-estate",
    "slug": "lead-generation/real-estate",
    "title": "Real Estate Lead Generation",
    "heroBadge": "Home",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-real-estate-overview",
        "type": "overview",
        "title": "Qualified Real Estate Leads",
        "content": "Targeting qualified homebuyers, property investors, and commercial real estate inquiries. We help agents and brokerages scale by delivering leads with high intent to purchase or sell."
      }
    ]
  },
  {
    "id": "page-healthcare",
    "slug": "lead-generation/healthcare",
    "title": "Healthcare Lead Generation",
    "heroBadge": "Heart",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-healthcare-overview",
        "type": "overview",
        "title": "Patient & Clinic Inquiries",
        "content": "Drive patient bookings, telemedicine consultations, and clinic inquiries through HIPAA-compliant, targeted digital marketing campaigns."
      }
    ]
  },
  {
    "id": "page-saas",
    "slug": "lead-generation/saas",
    "title": "SaaS & Tech Lead Generation",
    "heroBadge": "Monitor",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-saas-overview",
        "type": "overview",
        "title": "Scale Your Software Subscriptions",
        "content": "Acquire free trial signups, product demo requests, and software subscriptions with data-driven paid acquisition and growth hacking strategies."
      }
    ]
  },
  {
    "id": "page-ecommerce",
    "slug": "lead-generation/ecommerce",
    "title": "E-commerce Leads & Sales",
    "heroBadge": "ShoppingBag",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-ecommerce-overview",
        "type": "overview",
        "title": "Drive E-commerce Revenue",
        "content": "From high-intent cart abandoners to new customer acquisition, we manage e-commerce lead generation to increase LTV and ROAS."
      }
    ]
  },
  {
    "id": "page-google-ads",
    "slug": "paid-advertising-campaigns/google-ads",
    "title": "Google Ads Management",
    "heroBadge": "Search",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-google-ads-overview",
        "type": "overview",
        "title": "Maximize ROI with Google Ads",
        "content": "We manage Search, Display, Shopping, Performance Max, and YouTube Ads to capture high-intent traffic and convert them into loyal customers."
      }
    ]
  },
  {
    "id": "page-meta-ads",
    "slug": "paid-advertising-campaigns/meta-ads",
    "title": "Meta Ads Management",
    "heroBadge": "Facebook",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-meta-ads-overview",
        "type": "overview",
        "title": "Facebook & Instagram Advertising",
        "content": "Build brand awareness, generate leads, and drive sales with highly targeted Meta Ads campaigns optimized by our experts."
      }
    ]
  },
  {
    "id": "page-youtube-ads",
    "slug": "paid-advertising-campaigns/youtube-ads",
    "title": "YouTube Ads Management",
    "heroBadge": "Youtube",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-youtube-ads-overview",
        "type": "overview",
        "title": "Video Ads that Convert",
        "content": "Increase brand awareness and drive conversions with impactful YouTube video campaigns targeting your exact audience demographic."
      }
    ]
  },
  {
    "id": "page-linkedin-ads",
    "slug": "paid-advertising-campaigns/linkedin-ads",
    "title": "LinkedIn Ads Management",
    "heroBadge": "Linkedin",
    "pageType": "service",
    "isPublished": true,
    "sections": [
      {
        "id": "sec-linkedin-ads-overview",
        "type": "overview",
        "title": "B2B Outreach & Brand Building",
        "content": "Generate B2B leads, build your brand, and execute targeted outreach to professionals and decision-makers using LinkedIn Ads."
      }
    ]
  }
];

const filePath = 'src/data/initialData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The array ends with \n]; at the end of the file
// Find the last bracket ]
const lastBracketIndex = content.lastIndexOf('];');
if (lastBracketIndex !== -1) {
  const newPagesStr = missingPages.map(p => JSON.stringify(p, null, 2)).join(',\n  ');
  const updatedContent = content.slice(0, lastBracketIndex) + ',\n  ' + newPagesStr + '\n];\n';
  fs.writeFileSync(filePath, updatedContent);
  console.log('Successfully added missing pages to initialData.ts');
} else {
  console.error('Could not find the end of the initialDynamicPages array.');
}
