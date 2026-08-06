import { initialDynamicPages } from './src/data/initialData.js';
initialDynamicPages.forEach(p => {
  console.log(p.slug, ':', p.isPublished);
});
