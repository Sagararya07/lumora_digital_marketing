const fs = require('fs');
let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

// Replace items with cards
content = content.replace(/items:/g, 'cards:');

// Change faq type to services-grid
content = content.replace(/type: 'faq'/g, "type: 'services-grid'");

// Replace question with title and answer with description
content = content.replace(/question:/g, 'title:');
content = content.replace(/answer:/g, 'description:');

fs.writeFileSync('src/data/initialData.ts', content);
console.log('Fixed initialData.ts');
