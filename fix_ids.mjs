import fs from 'fs';
import path from 'path';

const filePath = './src/data/initialData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The file exports initialSiteContent and initialDynamicPages.
// Because we appended JSON strings at the bottom, we can safely find and replace "id" values for objects that have "position": "None".

// This is slightly tricky with regex because objects span multiple lines.
// But we know that the new pages were appended at the end.
// Let's just find all instances where an id needs to change.

const idsToChange = [
  'page-lead-generation',
  'page-social-media-marketing',
  'page-seo',
  'page-performance-marketing',
  'page-retargeting-marketing',
  'page-ai-marketing-automation',
  'page-paid-advertising-campaigns',
  'page-target-audience-reach',
  'page-influencer-marketing',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  'page-personal-branding',
  'page-brand-management'
];

let replacedContent = content;

// Since we appended the pages at the very end of the file, we can isolate the last chunk of the file
const splitIndex = content.lastIndexOf('page-lead-generation'); // Finds the first id of the newly added pages

if (splitIndex !== -1) {
  // Let's go a bit back to the start of that object
  const startOfNewPages = content.lastIndexOf('{', splitIndex);
  
  let firstPart = content.slice(0, startOfNewPages);
  let secondPart = content.slice(startOfNewPages);

  // Now replace the IDs in the second part ONLY
  for (const id of idsToChange) {
    const regex = new RegExp(`"id":\\s*"${id}"`, 'g');
    secondPart = secondPart.replace(regex, `"id": "${id}-hidden"`);
  }

  replacedContent = firstPart + secondPart;
  
  fs.writeFileSync(filePath, replacedContent, 'utf8');
  console.log("Successfully fixed IDs!");
} else {
  console.log("Could not find start of new pages");
}
