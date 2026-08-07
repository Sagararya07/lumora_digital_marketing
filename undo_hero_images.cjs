const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/data/initialData.ts');
let content = fs.readFileSync(dataPath, 'utf8');

// Remove all occurrences of heroImage
content = content.replace(/\n\s*"heroImage":\s*"[^"]+",/g, '');

fs.writeFileSync(dataPath, content);
console.log('Undone hero images.');
