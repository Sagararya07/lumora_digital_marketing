const fs = require('fs');
const content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const pagesStr = content.match(/export const initialDynamicPages.*?=\s*(\[[\s\S]*?\]);/)[1];
const pages = eval(pagesStr);

const adsPages = pages.filter(p => p.slug && p.slug.includes('ads'));
console.log('Ads Pages Slugs:', adsPages.map(p => p.slug));

const leadGenPage = pages.find(p => p.slug === 'lead-generation');
const adsSection = leadGenPage.sections.find(s => s.title === 'Ads We Manage');

if (adsSection) {
  console.log('Link URLs in Ads We Manage section:');
  console.log(adsSection.cards.map(c => c.linkUrl));
} else {
  console.log('Ads We Manage section not found');
}
