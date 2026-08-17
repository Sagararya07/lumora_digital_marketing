const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const title = 'Sri Krishna Crafting';
const category = 'E-Commerce & Epoxy Resin Art';
const description = `Overview: Krishna Scrafting is a premier artisanal brand specializing in high-quality, handcrafted epoxy resin artistry. They required a visually striking, dynamic digital platform to consolidate their extensive offerings—ranging from ready-to-purchase home decor and statement wall art to bespoke custom orders and specialized resin art training courses.

The Challenge: The primary challenge was to build an immersive and highly visual e-commerce architecture that could beautifully present their unique, one-of-a-kind art pieces while handling complex operational needs. The client needed a powerful, code-free backend administration panel to dynamically manage their diverse product inventory, update portfolio galleries, curate homepage hero sections, and process custom orders seamlessly.

The Solution: We developed a custom, scalable web application featuring a dynamic Content Management System (CMS) tailored for visual storytelling and e-commerce. The solution includes:
• Dynamic E-Commerce & Product Management: Custom modules allowing administrators to instantly create, edit, and organize product listings across categories like River Tables, Resin Jewelry, and Epoxy Flooring.
• Integrated Portfolio & Custom Orders: A tailored architecture that separates standard retail products from bespoke, made-to-order commissions, allowing users to browse past work and request custom quotes easily.
• Artisan Training Integration: Dedicated modules to promote and manage specialized resin art training workshops and masterclasses directly through the platform.
• Optimized UI/UX: A modern, highly visual, and responsive frontend with premium micro-animations, curated glassmorphism elements, and intuitive navigation to immerse visitors in the artistry and craftsmanship of the brand.

The Impact: The new platform successfully transformed Krishna Scrafting's online presence into a premium, cohesive digital experience. It empowered their internal team with full administrative control over content, products, and services, resulting in improved online sales, streamlined custom order processing, and a powerful, aesthetic showcase of their resin mastery to art lovers and interior designers worldwide.`;
const imageUrl = 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop&q=80';
const imagePublicId = 'manual-upload-srikrishna';

async function updateDB() {
  try {
    await pool.query(
      'INSERT INTO case_studies (title, category, description, image_url, image_public_id) VALUES ($1, $2, $3, $4, $5)',
      [title, category, description, imageUrl, imagePublicId]
    );
    console.log("Inserted Sri Krishna Crafting case study successfully.");
  } catch (err) {
    console.error('Error inserting case study:', err);
  } finally {
    process.exit(0);
  }
}

updateDB();
