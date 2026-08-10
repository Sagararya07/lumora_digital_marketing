const fs = require('fs');
const path = 'src/data/initialData.ts';
let content = fs.readFileSync(path, 'utf8');

// Fix sparse arrays like `[ , {`
content = content.replace(/\[\s*,/g, '[');

// Fix double commas like `, ,`
content = content.replace(/,\s*,/g, ',');

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed sparse arrays!");
