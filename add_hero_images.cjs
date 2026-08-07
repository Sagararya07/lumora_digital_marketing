const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/data/initialData.ts');
let content = fs.readFileSync(dataPath, 'utf8');

const gifs = {
  'lead-generation': 'https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif',
  'social-media-marketing': 'https://media.giphy.com/media/26tn33aiTi1jC2VvW/giphy.gif',
  'seo': 'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif',
  'performance-marketing': 'https://media.giphy.com/media/3oKIPa2TdahYIGany8/giphy.gif',
  'retargeting-marketing': 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
  'ai-marketing-automation': 'https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif',
  'paid-advertising-campaigns': 'https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif',
  'target-audience-reach': 'https://media.giphy.com/media/l41lOugZmGBnExU40/giphy.gif',
  'influencer-marketing': 'https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif'
};

let matchedCount = 0;
Object.keys(gifs).forEach(slug => {
  const findStr = '"slug": "' + slug + '",';
  if (content.includes(findStr)) {
    content = content.replace(findStr, findStr + '\n    "heroImage": "' + gifs[slug] + '",');
    matchedCount++;
  }
});

fs.writeFileSync(dataPath, content);
console.log('Replaced ' + matchedCount + ' items');
