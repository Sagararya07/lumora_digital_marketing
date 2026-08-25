import fs from 'fs';
import { initialDynamicPages as curPages } from './src/data/initialData.ts';
import { initialDynamicPages as gitPages } from 'file:///C:/Users/Sagar R/.gemini/antigravity-ide/brain/f67b5e62-069d-4498-a366-674bcb864bb7/scratch/lumoro_website_testing/src/data/initialData.ts';

const existingSlugs = new Set(curPages.map(p => p.slug));

const pagesToAdd = [];

for (const p of gitPages) {
  if (p.slug && p.slug.includes('/')) {
    continue; // Skip sub-pages like Ads and Leads
  }

  const newPage = JSON.parse(JSON.stringify(p)); // Deep clone
  
  // 1. Make position none
  newPage.position = 'None';
  
  // 2. Prevent slug overwrite
  let finalSlug = newPage.slug;
  if (existingSlugs.has(finalSlug)) {
    finalSlug = finalSlug + '-v2';
    // if still exists (highly unlikely but just in case)
    let counter = 3;
    while (existingSlugs.has(finalSlug)) {
      finalSlug = newPage.slug + '-v' + counter;
      counter++;
    }
  }
  newPage.slug = finalSlug;
  
  // add to our tracking set so we don't collide with other new pages
  existingSlugs.add(finalSlug);
  
  pagesToAdd.push(newPage);
}

// Now we need to append these pages to the existing initialData.ts file.
const filePath = './src/data/initialData.ts';
let fileContent = fs.readFileSync(filePath, 'utf8');

// Find the last `];` in the file.
const lastBracketIndex = fileContent.lastIndexOf('];');
if (lastBracketIndex === -1) {
  console.error("Could not find ]; at the end of initialData.ts");
  process.exit(1);
}

// Stringify the pages to add. We map them to JSON strings, join with comma, and prepend a comma.
const jsonString = pagesToAdd.map(p => JSON.stringify(p, null, 2)).join(',\n');

// Reconstruct the file content
const newFileContent = fileContent.slice(0, lastBracketIndex) + ',\n' + jsonString + '\n' + fileContent.slice(lastBracketIndex);

fs.writeFileSync(filePath, newFileContent, 'utf8');

console.log(`Successfully added ${pagesToAdd.length} pages to initialData.ts!`);
