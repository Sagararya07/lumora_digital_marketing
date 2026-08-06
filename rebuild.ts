import fs from 'fs';
import { initialSiteContent, initialDynamicPages } from './src/data/initialData.js';

// The lead-generation page is our template
const templatePage = initialDynamicPages.find(p => p.slug === 'lead-generation');
const templateSectionsStr = JSON.stringify(templatePage.sections);

initialDynamicPages.forEach(page => {
  if (page.slug !== 'lead-generation') {
    // Generate a title prefix (e.g. "Social Media Marketing")
    const titlePrefix = page.title.split('-')[0].trim();
    
    // Simple naive replacements
    let newSectionsStr = templateSectionsStr
      .replace(/Lead Generation/g, titlePrefix)
      .replace(/lead generation/g, titlePrefix.toLowerCase())
      .replace(/Demand Generation/g, titlePrefix)
      .replace(/demand generation/g, titlePrefix.toLowerCase());

    page.sections = JSON.parse(newSectionsStr);
  }
});

const fileContent = `import { SiteContent, DynamicPage } from '../types';

export const initialSiteContent: SiteContent = ${JSON.stringify(initialSiteContent, null, 2)};

export const initialDynamicPages: DynamicPage[] = ${JSON.stringify(initialDynamicPages, null, 2)};
`;

fs.writeFileSync('src/data/initialData.ts', fileContent, 'utf8');
console.log('Successfully rebuilt initialData.ts with fully populated sections!');
