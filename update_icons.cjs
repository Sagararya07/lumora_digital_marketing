const fs = require('fs');
const file = 'src/data/initialData.ts';
let content = fs.readFileSync(file, 'utf8');

const parts = content.split('export const initialDynamicPages: DynamicPage[] = [');

const iconMap = [
  'Users', 'Share2', 'Search', 'Target', 'RefreshCw', 
  'Cpu', 'Megaphone', 'Crosshair', 'Star', 'Lightbulb', 
  'Activity', 'Repeat', 'TrendingUp', 'Filter', 
  'ClipboardCheck', 'UserCheck', 'Shield'
];

let i = 0;
parts[1] = parts[1].replace(/"title":\s*"([^"]+)",\s*"pageType":/g, (match, title) => {
  const icon = iconMap[i] || 'Target';
  i++;
  return '"title": "' + title + '",\n      "heroBadge": "' + icon + '",\n      "pageType":';
});

fs.writeFileSync(file, parts[0] + 'export const initialDynamicPages: DynamicPage[] = [' + parts[1]);
console.log('Replaced ' + i + ' pages with unique icons.');
