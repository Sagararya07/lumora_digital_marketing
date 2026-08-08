const fs = require('fs');

let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const match = content.match(/export const initialDynamicPages.*?=\s*\[([\s\S]*?)\];/);
if (match) {
  const pagesStr = match[1];
  const pages = eval('[' + pagesStr + ']');
  
  const adsSlugs = [
    'lead-generation/google-ads',
    'lead-generation/meta-ads',
    'lead-generation/youtube-ads',
    'lead-generation/linkedin-ads',
    'lead-generation/twitter-ads'
  ];

  const updatedPages = pages.map(page => {
    if (adsSlugs.includes(page.slug)) {
      // Find the process section and remove cards
      const newSections = page.sections.map(s => {
        if (s.type === 'process') {
          return {
            ...s,
            title: 'A Proven Process for Predictable Growth', // Set default title from screenshot
            content: 'From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.',
            cards: [] // Set to empty to trigger fallback in ProcessSection
          };
        }
        return s;
      });
      
      return {
        ...page,
        sections: newSections
      };
    }
    return page;
  });
  
  const newPagesStr = JSON.stringify(updatedPages, null, 2);
  content = content.replace(match[0], 'export const initialDynamicPages: DynamicPage[] = ' + newPagesStr + ';');
  
  fs.writeFileSync('src/data/initialData.ts', content);
  console.log('Fixed Ads pages process section to trigger full fallback flow.');
} else {
  console.log('Could not find initialDynamicPages array.');
}
