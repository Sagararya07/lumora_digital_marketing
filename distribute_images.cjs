const fs = require('fs');
let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const images = [
  '/images/services/media__1785475842503.png',
  '/images/services/media__1785476248162.png',
  '/images/services/media__1785488537465.png',
  '/images/services/media__1785489450599.png',
  '/images/services/media__1785490439793.png',
  '/images/services/media__1785490930515.png'
];

let i = 0;
// Note: right now they all have the same image from the previous replacement
content = content.replace(/"heroImage": "\/images\/services\/media__1785488537465\.png"/g, match => {
  const result = `"heroImage": "${images[i % images.length]}"`;
  i++;
  return result;
});

fs.writeFileSync('src/data/initialData.ts', content);
console.log('Distributed different local images to the cards.');
