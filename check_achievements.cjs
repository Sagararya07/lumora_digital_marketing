const fs = require('fs');
let c = fs.readFileSync('src/data/initialData.ts', 'utf8');
console.log(c.split('"achievements":')[1].substring(0, 500));
