const fs = require('fs');
const file = 'src/components/DynamicPage/DynamicPageViewer.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the card container div
content = content.replace(
  'className="bg-white p-6 min-h-[140px] flex flex-col justify-end group hover:-translate-y-1 transition-all duration-300 border border-slate-200 hover:border-blue-200 cursor-pointer shadow-sm hover:shadow-md rounded-2xl"',
  'className="bg-white p-6 min-h-[140px] flex flex-col justify-center group hover:-translate-y-1 transition-all duration-500 border border-slate-200 hover:border-transparent hover:bg-gradient-to-br hover:from-[#5B8EE2]/10 hover:via-[#D6A67B]/10 hover:to-[#EC4899]/10 cursor-pointer shadow-sm hover:shadow-lg rounded-2xl relative overflow-hidden z-10"'
);

// Replace the line
content = content.replace(
  '<div className="w-6 h-1 bg-gradient-to-r from-[#5B8EE2] to-[#EC4899] mb-4 opacity-80 rounded-full" />',
  '<div className="w-6 h-1 bg-gradient-to-r from-[#5B8EE2] to-[#EC4899] mb-4 opacity-80 rounded-full group-hover:w-12 transition-all duration-500" />'
);

// Replace the text
content = content.replace(
  '<h4 className="text-[#111827] font-[\'Plus_Jakarta_Sans\',sans-serif] font-bold text-lg leading-snug">',
  '<h4 className="text-[#111827] font-[\'Plus_Jakarta_Sans\',sans-serif] font-bold text-lg leading-snug group-hover:text-[#5B8EE2] transition-colors duration-300">'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated cards using flexible replacement!');
