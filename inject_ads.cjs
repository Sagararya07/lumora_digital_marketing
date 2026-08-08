const fs = require('fs');

const adsSection = {
  id: 'sec-ads-we-manage',
  type: 'scrollable-cards',
  title: 'Ads We Manage',
  cards: [
    {
      id: 'card-google',
      title: 'Google Ads',
      description: 'Search, Display, Shopping, Performance Max & YouTube Ads',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg',
      linkUrl: 'google-ads'
    },
    {
      id: 'card-meta',
      title: 'Meta Ads',
      description: 'Facebook & Instagram Ads that build brand, leads & sales',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      linkUrl: 'meta-ads'
    },
    {
      id: 'card-youtube',
      title: 'YouTube Ads',
      description: 'Video Ads that increase brand awareness and drive conversions',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
      linkUrl: 'youtube-ads'
    },
    {
      id: 'card-linkedin',
      title: 'LinkedIn Ads',
      description: 'B2B Leads, Brand Building & Targeted Outreach for Professionals',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      linkUrl: 'linkedin-ads'
    },
    {
      id: 'card-twitter',
      title: 'Twitter (X) Ads',
      description: 'Promote your business and engage with your target audience',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg',
      linkUrl: 'twitter-ads'
    }
  ]
};

let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const regex = /("slug":\s*"lead-generation"[\s\S]*?"sections":\s*\[\s*)/;
const match = content.match(regex);

if (match) {
  const insertStr = JSON.stringify(adsSection, null, 6).replace(/"([^"]+)":/g, '$1:') + ',\n      ';
  content = content.replace(regex, match[1] + insertStr);
  fs.writeFileSync('src/data/initialData.ts', content);
  console.log('Successfully injected Ads We Manage section');
} else {
  console.log('Could not find lead-generation sections array');
}
