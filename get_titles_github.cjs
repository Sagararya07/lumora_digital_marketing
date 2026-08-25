const fs = require('fs');
const txt = fs.readFileSync('C:/Users/Sagar R/.gemini/antigravity-ide/brain/f67b5e62-069d-4498-a366-674bcb864bb7/scratch/lumoro_website_testing/src/data/initialData.ts', 'utf8');
const titles = [];
const regex = /"slug":\s*"([^"]+)",\s*"title":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(txt)) !== null) {
  titles.push({slug: match[1], title: match[2]});
}
console.log(titles.map(t=>t.title).join('\n'));
