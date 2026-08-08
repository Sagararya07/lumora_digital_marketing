const fs = require('fs');
let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const regex = /"heroImage":\s*"https:\/\/images\.unsplash\.com\/photo-[^"]+"/g;
const matches = content.match(regex);
console.log('Found unsplash URLs:', matches ? matches.length : 0);

if (matches) {
  content = content.replace(regex, '"heroImage": "/images/services/media__1785488537465.png"');
  fs.writeFileSync('src/data/initialData.ts', content);
  console.log('Replaced unsplash URLs with local fallback image.');
}
