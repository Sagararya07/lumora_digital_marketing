const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const title = 'EVA Advisors';
const category = 'Growth Consulting & Advisory';
const description = `Overview: EVA Advisors is a growth consulting firm positioning itself as a "business catalyst"—working hands-on with leadership teams to craft and execute product, marketing, technology, and ecosystem-led growth strategies. They needed a sharp, professional website that could establish credibility with founders and executives while clearly articulating a consulting methodology that's more operational than theoretical.

The Challenge: The main challenge was differentiating EVA Advisors from typical advisory firms by visually and structurally communicating their "hands-on operator" identity—showing that they don't just recommend strategy, they execute it alongside client teams—while organizing a broad service offering (go-to-market, growth strategy, scaling operations, talent & leadership) into an easy-to-navigate structure.

The Solution: We built a clean, conversion-focused consulting website featuring:
• Methodology-First Structure: A clear "Diagnose, Design, Execute, Enable" framework front and center on the homepage, giving visitors an immediate sense of how engagements work.
• Organized Service Architecture: Dedicated, icon-led sections for core offerings—Go-to-Market Execution, Growth Strategy, Scaling Operations, and Talent & Leadership—making it easy for prospects to identify relevant expertise.
• Trust & Differentiation Messaging: A "Why Us" section highlighting hands-on execution, tailored approach, interim executive support, and proven playbooks from scaling startups seed-to-Series C.
• Case Study Showcase: A curated list of real engagement outcomes (operational transformations, retention modeling, re-engagement programs) available on request, reinforcing credibility without overexposing client details.
• Clean, Professional UI/UX: A minimal, corporate-friendly design with strong typography and clear calls-to-action guiding visitors toward booking a consultation.

The Impact: The new site gives EVA Advisors a professional digital front door that mirrors their operator-led approach—helping them build instant credibility with founders and executives, clearly communicate their value proposition, and convert visitors into consultation leads for their growth advisory services.`;
const imageUrl = 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&auto=format&fit=crop&q=80';
const imagePublicId = 'manual-upload-eva';

async function updateDB() {
  try {
    await pool.query(
      'INSERT INTO case_studies (title, category, description, image_url, image_public_id) VALUES ($1, $2, $3, $4, $5)',
      [title, category, description, imageUrl, imagePublicId]
    );
    console.log("Inserted EVA Advisors case study successfully.");
  } catch (err) {
    console.error('Error inserting case study:', err);
  } finally {
    process.exit(0);
  }
}

updateDB();
