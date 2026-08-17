const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const title = 'Artistvibes Entertainment';
const category = 'Entertainment & Talent Booking';
const description = `Overview: Artistvibes Entertainment is a premier artist and celebrity management company offering end-to-end booking services for live performers across India. They needed a polished, high-energy digital presence to showcase their talent roster and convert event organizers into booking leads.

The Challenge: The core challenge was presenting a diverse, category-spanning talent pool—DJs, singers, dancers, comedians, bands, anchors, musicians, magicians, and stand-up comics—in a way that felt premium and easy to navigate, while giving visitors a fast path from "browsing" to "booking" for specific event types like weddings, corporate functions, and college festivals.

The Solution: We built a modern, visually immersive booking platform featuring:
• Category-Based Artist Discovery: A filterable artist directory letting users browse by category (Singer, DJ, Band, Comedian, etc.) or by event type (Wedding, Party, Corporate, College Fest).
• Event-Focused Landing Experience: A cinematic homepage with bold typography, concert imagery, and clear calls-to-action guiding visitors straight into the booking flow.
• Direct Contact & WhatsApp Integration: Streamlined "Get Started" and WhatsApp booking pathways so leads can reach the team instantly without friction.
• Social Proof & Brand Trust: A testimonials section and "10+ Years Experience" positioning to build credibility with event organizers.
• Responsive, Modern UI/UX: A dark, high-contrast design with performance photography and clean navigation across Home, About, Artists, and Contact pages.

The Impact: The new platform gives Artistvibes Entertainment a professional, conversion-ready storefront for their talent booking business—making it simple for wedding planners, corporate event managers, and college fest organizers to discover the right artist and get in touch, while reinforcing the brand's positioning as a trusted, premium entertainment management company.`;
const imageUrl = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80';
const imagePublicId = 'manual-upload-artistvibes';

async function updateDB() {
  try {
    await pool.query(
      'INSERT INTO case_studies (title, category, description, image_url, image_public_id) VALUES ($1, $2, $3, $4, $5)',
      [title, category, description, imageUrl, imagePublicId]
    );
    console.log("Inserted Artistvibes Entertainment case study successfully.");
  } catch (err) {
    console.error('Error inserting case study:', err);
  } finally {
    process.exit(0);
  }
}

updateDB();
