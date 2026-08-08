const fs = require('fs');

let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const pagesToUpdate = [
  'google-ads',
  'meta-ads',
  'youtube-ads',
  'linkedin-ads',
  'twitter-ads'
];

pagesToUpdate.forEach(page => {
  // Update the slug of the page itself. Matches slug: 'page' or "slug": "page"
  const slugRegex = new RegExp(`(['"]?)slug\\1\\s*:\\s*(['"])${page}\\2`);
  content = content.replace(slugRegex, `slug: "lead-generation/${page}"`);

  // Update any linkUrls that pointed to this page (like in the Ads We Manage section)
  // Matches linkUrl: 'page' or "linkUrl": "page"
  const linkRegex = new RegExp(`(['"]?)linkUrl\\1\\s*:\\s*(['"])${page}\\2`, 'g');
  content = content.replace(linkRegex, `linkUrl: "lead-generation/${page}"`);
});

fs.writeFileSync('src/data/initialData.ts', content);
console.log('Updated slugs and links successfully.');
