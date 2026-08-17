const fs = require('fs');
const file = 'src/components/DynamicPage/DynamicPageViewer.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldCode = `{/* Grid of cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-12">
                    {sec.cards?.map((card, cardIdx) => (
                      <div key={card.id || cardIdx} className="bg-white p-6 min-h-[140px] flex flex-col justify-end group hover:-translate-y-1 transition-all duration-300 border border-slate-200 hover:border-blue-200 cursor-pointer shadow-sm hover:shadow-md rounded-2xl">
                        <div className="w-6 h-1 bg-gradient-to-r from-[#5B8EE2] to-[#EC4899] mb-4 opacity-80 rounded-full" />
                        <h4 className="text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg leading-snug">
                          {card.title}
                        </h4>
                      </div>
                    ))}
                  </div>`;

const newCode = `{/* Grid of cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-12">
                    {sec.cards?.map((card, cardIdx) => (
                      <div key={card.id || cardIdx} className="bg-white p-6 min-h-[140px] flex flex-col justify-center group hover:-translate-y-1 transition-all duration-500 border border-slate-200 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-50/80 hover:via-orange-50/80 hover:to-pink-50/80 cursor-pointer shadow-sm hover:shadow-lg rounded-2xl relative overflow-hidden z-10">
                        <div className="w-6 h-1 bg-gradient-to-r from-[#5B8EE2] to-[#EC4899] mb-4 opacity-80 rounded-full group-hover:w-12 transition-all duration-500" />
                        <h4 className="text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg leading-snug group-hover:text-[#5B8EE2] transition-colors duration-300">
                          {card.title}
                        </h4>
                      </div>
                    ))}
                  </div>`;

if(content.includes(oldCode)) {
  content = content.replace(oldCode, newCode);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated cards!');
} else {
  console.log('Could not find the target code block. Check exact string match.');
}
