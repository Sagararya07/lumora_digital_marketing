const fs = require('fs');

const filesToUpdate = [
  'src/data/initialData.ts',
  'src/components/Modals/LegalModal.tsx',
  'src/components/Modals/ConsultationModal.tsx',
  'src/components/Home/ConsultationSection.tsx'
];

for (const filePath of filesToUpdate) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/Cypher Swift/g, 'Lumora');
  content = content.replace(/cypherswiftinfotech@gmail\.com/g, 'contact@lumora.com');
  content = content.replace(/cypherswift\.com/g, 'lumora.com');
  content = content.replace(/CypherSwift/g, 'Lumora');

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Replaced Cypher Swift with Lumora successfully.');
