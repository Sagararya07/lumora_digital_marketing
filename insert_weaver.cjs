const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const title = "Weaver's Crafting";
const category = 'Retail & Manufacturing';
const description = `Overview: Weaver's Crafting is a top-tier handcrafted furniture store and manufacturer located in Bommanahalli, Bengaluru. They needed a robust, visually engaging digital platform to consolidate their diverse offerings—ranging from custom-designed sofas and space-saving sofa-cum-beds to premium dining sets, mattresses, and B2B bulk manufacturing services.

The Challenge: The primary challenge was to build an engaging and scalable architecture that could seamlessly organize and present their extensive product catalog while capturing local market search intent. Weaver's Crafting offers a vast array of highly customizable furniture pieces, requiring a platform that could handle varied product categories, showcase high-quality image galleries of their craftsmanship, and streamline customer inquiries for custom orders and home visits.

The Solution: We developed a custom, scalable web platform featuring a dynamic architecture optimized for local SEO and lead generation. The solution includes:
• Dynamic Product & Catalog Management: Custom modules allowing administrators to easily update product galleries, organize furniture categories (sofas, dining, beds), and highlight intricate craftsmanship details.
• B2B & Retail Integration: A tailored architecture with dedicated sections for direct-to-consumer retail and bulk B2B manufacturing inquiries, ensuring targeted user journeys for different client types.
• Seamless Inquiry & Booking System: Optimized workflows for customers to easily schedule free home visits, request custom quotes, and consult with design experts via seamless WhatsApp and direct contact integrations.
• Optimized UI/UX & Local SEO: A modern, visually rich frontend with fast load times, mobile-responsive mega-galleries, and advanced local schema structuring to help customers across South Bangalore discover their premium furniture ecosystem easily.

The Impact: The new platform successfully consolidated Weaver's Crafting's retail and manufacturing operations into a single, cohesive digital experience. It empowered their team with streamlined inquiry management, resulting in improved local lead generation, increased showroom footfall, and a powerful showcase of their artisanal furniture capabilities to both individual buyers and commercial clients.`;
const imageUrl = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80';
const imagePublicId = 'manual-upload-weavers';

async function updateDB() {
  try {
    await pool.query(
      'INSERT INTO case_studies (title, category, description, image_url, image_public_id) VALUES ($1, $2, $3, $4, $5)',
      [title, category, description, imageUrl, imagePublicId]
    );
    console.log("Inserted Weaver's Crafting case study successfully.");
  } catch (err) {
    console.error('Error inserting case study:', err);
  } finally {
    process.exit(0);
  }
}

updateDB();
