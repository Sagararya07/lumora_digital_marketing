const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const title = 'Cypher Swift';
const category = 'IT Consulting & Services';
const description = `Overview: Cypherswift is a global technology consulting and IT services firm with a presence in North America, Europe, Asia, and India. They needed a robust, dynamic digital platform to consolidate their extensive offerings—ranging from Artificial General Intelligence (AGI) and Generative AI to enterprise software development and corporate IT training.

The Challenge: The primary challenge was to build a highly scalable architecture that could seamlessly organize and present complex data. Cypherswift offers a vast array of services, proprietary software products, industry-specific solutions, and expert-led training programs. The client needed a powerful backend administration panel to manage these entities dynamically without touching the code.

The Solution: We developed a custom, scalable web application featuring a dynamic Content Management System (CMS). The solution includes:
• Dynamic Service & Product Management: Custom modules allowing administrators to instantly create, edit, and organize services, products, and capabilities.
• Global Ecosystem Mapping: A tailored architecture to handle location-specific data for their offices across the USA, Europe, Asia, and India.
• Expert & Training Integration: Dedicated modules to manage corporate training programs and allow users to seamlessly consult with industry experts.
• Optimized UI/UX: A modern, responsive frontend with advanced search functionality, mega-menus, and categorized insights to help enterprise clients navigate their massive ecosystem easily.

The Impact: The new platform successfully consolidated Cypherswift's global operations into a single, cohesive digital experience. It empowered their internal team with full administrative control over content and services, resulting in improved lead generation, streamlined corporate training enrollments, and a powerful showcase of their AI and software capabilities to enterprise clients worldwide.`;
const imageUrl = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80';
const imagePublicId = 'manual-upload-cypherswift';

async function updateDB() {
  try {
    await pool.query('DELETE FROM case_studies');
    console.log('Cleared existing case studies.');
    
    await pool.query(
      'INSERT INTO case_studies (title, category, description, image_url, image_public_id) VALUES ($1, $2, $3, $4, $5)',
      [title, category, description, imageUrl, imagePublicId]
    );
    console.log('Inserted Cypher Swift case study successfully.');
  } catch (err) {
    console.error('Error updating case studies:', err);
  } finally {
    process.exit(0);
  }
}

updateDB();
