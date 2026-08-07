const fs = require('fs');
let c = fs.readFileSync('src/data/initialData.ts', 'utf8');
const match = c.match(/caseStudiesList:\s*\[[\s\S]*?\]/);
if (match) {
  console.log(match[0]);
}
