import fs from 'fs';
import path from 'path';

const hexMapping = {
  // Primary Blue (L U)
  '#2563EB': '#5B8EE2',
  '#1D4ED8': '#4676C2',
  '#38BDF8': '#8CB4F5',
  
  // Secondary Tan/Gold (M O R A)
  '#7C3AED': '#D6A67B',
  '#6D28D9': '#C29367',
  
  // Also replace standard tailwind blue-500, blue-600, etc. classes with arbitrary values
  'text-blue-600': 'text-[#5B8EE2]',
  'bg-blue-600': 'bg-[#5B8EE2]',
  'border-blue-600': 'border-[#5B8EE2]',
  'text-blue-500': 'text-[#729EE6]',
  'bg-blue-500': 'bg-[#729EE6]',
  'border-blue-500': 'border-[#729EE6]',
  'bg-blue-50': 'bg-[#F2F6FC]',
  'text-blue-300': 'text-[#AEC7F0]',
  
  // For purple tailwind classes
  'text-purple-600': 'text-[#D6A67B]',
  'bg-purple-600': 'bg-[#D6A67B]',
  'border-purple-600': 'border-[#D6A67B]',
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Replace hex codes
    for (const [oldColor, newColor] of Object.entries(hexMapping)) {
      if (oldColor.startsWith('#')) {
        const regex = new RegExp(oldColor, 'gi');
        content = content.replace(regex, newColor);
      } else {
        const regex = new RegExp(oldColor, 'g');
        content = content.replace(regex, newColor);
      }
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
console.log('Colors updated.');
