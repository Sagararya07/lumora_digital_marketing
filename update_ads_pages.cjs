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
  
  const logoMap = {
    'lead-generation/google-ads': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg',
    'lead-generation/meta-ads': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    'lead-generation/youtube-ads': 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    'lead-generation/linkedin-ads': 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    'lead-generation/twitter-ads': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'
  };

  const updatedPages = pages.map(page => {
    if (adsSlugs.includes(page.slug)) {
      // Find the overview section
      const overview = page.sections.find(s => s.type === 'overview');
      const services = page.sections.find(s => s.type === 'services-grid');
      
      const newSections = [];
      
      if (overview) {
        newSections.push({
          id: `sec-icon-hero-${page.slug.split('/').pop()}`,
          type: 'icon-hero',
          title: page.title.replace(' Management', ''),
          content: overview.content || page.heroSubtitle,
          mediaUrl: logoMap[page.slug],
          bullets: []
        });
      }
      
      if (services) {
        newSections.push({
          id: `sec-process-${page.slug.split('/').pop()}`,
          type: 'process',
          title: services.title,
          content: services.content,
          cards: services.cards
        });
      }
      
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
  console.log('Updated Ads pages to use icon-hero and process flow designs.');
} else {
  console.log('Could not find initialDynamicPages array.');
}
