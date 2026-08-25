const fs = require('fs');
const txt = fs.readFileSync('src/data/initialData.ts', 'utf8');
const titles = [];
const regex = /"slug":\s*"([^"]+)",\s*"title":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(txt)) !== null) {
  titles.push({slug: match[1], title: match[2]});
}
console.log(titles.map(t=>t.title).join('\n'));
