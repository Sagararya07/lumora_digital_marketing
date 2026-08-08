const fs = require('fs');
let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const match = content.match(/export const initialDynamicPages.*?=\s*\[([\s\S]*?)\];/);
if (match) {
  const pagesStr = match[1];
  const pages = eval('[' + pagesStr + ']');
  
  // Right now, the order is: 6 new cards, 9 original cards, 5 ads cards.
  // We want: 9 original cards, 6 new cards, 5 ads cards.
  
  const new6 = pages.slice(0, 6);
  const original9 = pages.slice(6, 15);
  const ads5 = pages.slice(15);
  
  const newPages = [...original9, ...new6, ...ads5];
  const newPagesStr = JSON.stringify(newPages, null, 2);
  
  content = content.replace(match[0], 'export const initialDynamicPages: DynamicPage[] = ' + newPagesStr + ';');
  fs.writeFileSync('src/data/initialData.ts', content);
  console.log('Reordered pages successfully: Original 9 first, then the new 6.');
} else {
  console.log('Could not match initialDynamicPages');
}
