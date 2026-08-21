const fs = require('fs');
let code = fs.readFileSync('scripts/rebuild_data.mjs', 'utf-8');

const subPagesArray = [
  { slug: 'paid-advertising-campaigns/google-ads', title: 'Google Ads', desc: 'Reach customers exactly when they are searching for what you offer. Our Google Ads management services ensure high ROI by optimizing campaigns across Search, Display, Shopping, and Performance Max networks.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg' },
  { slug: 'paid-advertising-campaigns/meta-ads', title: 'Meta Ads', desc: 'Facebook and Instagram Ads that build brand, leads and sales with targeted demographic precision.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { slug: 'paid-advertising-campaigns/youtube-ads', title: 'YouTube Ads', desc: 'Video Ads that increase brand awareness and drive conversions on the world\\'s largest video platform.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
  { slug: 'paid-advertising-campaigns/linkedin-ads', title: 'LinkedIn Ads', desc: 'B2B Leads, Brand Building and Targeted Outreach for Professionals across corporate environments.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
  { slug: 'paid-advertising-campaigns/twitter-ads', title: 'Twitter Ads', desc: 'Promote your brand and engage with your target audience on Twitter through high-impact viral campaigns.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg' }
];

const subPagesString = subPagesArray.map(sp => `
  {
    "id": "page-${sp.slug.replace('/', '-')}",
    "slug": "${sp.slug}",
    "title": "${sp.title}",
    "heroBadge": "Target",
    "pageType": "service",
    "isPublished": true,
    "sortOrder": 100,
    "sections": [
      {
        "id": "sec-overview-${sp.slug.replace('/', '-')}",
        "type": "icon-hero",
        "title": "${sp.title}",
        "content": "${sp.desc}",
        "mediaUrl": "${sp.iconUrl}"
      }
    ]
  }`).join(',');

code = code.replace(
  `const newDynamicPagesBlock = \`export const initialDynamicPages: DynamicPage[] = [\${newPagesString}\\n];\`;`,
  `const subPagesString = \`` + subPagesString + `\`;\nconst newDynamicPagesBlock = \`export const initialDynamicPages: DynamicPage[] = [\${newPagesString},\${subPagesString}\\n];\`;`
);

// Add linkUrl to each card
const replacements = [
  {
    search: 'Google Ads_logo.svg" }',
    replace: 'Google Ads_logo.svg", "linkUrl": "paid-advertising-campaigns/google-ads" }'
  },
  {
    search: 'Meta_Platforms_Inc._logo.svg" }',
    replace: 'Meta_Platforms_Inc._logo.svg", "linkUrl": "paid-advertising-campaigns/meta-ads" }'
  },
  {
    search: 'YouTube_full-color_icon_%282017%29.svg" }',
    replace: 'YouTube_full-color_icon_%282017%29.svg", "linkUrl": "paid-advertising-campaigns/youtube-ads" }'
  },
  {
    search: 'LinkedIn_logo_initials.png" }',
    replace: 'LinkedIn_logo_initials.png", "linkUrl": "paid-advertising-campaigns/linkedin-ads" }'
  },
  {
    search: 'Logo_of_Twitter.svg" }',
    replace: 'Logo_of_Twitter.svg", "linkUrl": "paid-advertising-campaigns/twitter-ads" }'
  }
];

for (const r of replacements) {
  code = code.replace(r.search, r.replace);
}

fs.writeFileSync('scripts/rebuild_data.mjs', code, 'utf-8');
console.log('Done mapping subpages and linkUrls.');
