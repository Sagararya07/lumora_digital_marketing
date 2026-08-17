const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const title = 'AOL Permaculture';
const category = 'Education & Sustainability';
const description = `Overview: AOL Permaculture is the regenerative farming and permaculture education initiative of Art of Living, led by Binay, known widely as the "Man in the Bus" for his viral talk on sustainability. The organization needed a digital presence that could tell their story authentically and drive enrollment for both online and residential permaculture courses, along with ongoing social media and marketing support to build community engagement.

The Challenge: The challenge was twofold—first, to build a website capable of translating a deeply hands-on, land-based practice into a compelling digital narrative for people discovering permaculture for the first time; and second, to sustain that momentum beyond launch through consistent social media presence and marketing, so the brand's story kept reaching new audiences and driving course sign-ups over time.

The Solution: We delivered a complete digital ecosystem covering both the website and ongoing marketing:
• Story-Driven Website: A warm, editorial-style site built around Binay's personal journey and the philosophy of permaculture, blending narrative content with course information rather than a purely transactional layout.
• Course Enrollment Pathways: Clear, dedicated sections for the online Foundations of Permaculture course and the in-person 9-day Spirit of the Soil immersion program, each with direct calls-to-action.
• Visual Storytelling: Rich photography of the farm's transformation—from barren mountainside to thriving ecosystem—used throughout to build trust and emotional connection.
• Ongoing Social Media Management: Regular content planning, posting, and community engagement across Facebook, Instagram, and YouTube to keep the AOL Permaculture story visible and growing.
• Marketing Support: Continuous promotional efforts aligned with course cycles and events (such as their annual Conference) to drive awareness and enrollment beyond the website itself.

The Impact: The result is an end-to-end digital presence for AOL Permaculture — a website that authentically communicates their mission and course offerings, paired with hands-on social media and marketing management that keeps the brand actively engaged with its growing community of students, volunteers, and sustainability advocates.`;
const imageUrl = 'https://images.unsplash.com/photo-1592424040775-6e4262118321?w=800&auto=format&fit=crop&q=80';
const imagePublicId = 'manual-upload-aolpermaculture';

async function updateDB() {
  try {
    await pool.query(
      'INSERT INTO case_studies (title, category, description, image_url, image_public_id) VALUES ($1, $2, $3, $4, $5)',
      [title, category, description, imageUrl, imagePublicId]
    );
    console.log("Inserted AOL Permaculture case study successfully.");
  } catch (err) {
    console.error('Error inserting case study:', err);
  } finally {
    process.exit(0);
  }
}

updateDB();
