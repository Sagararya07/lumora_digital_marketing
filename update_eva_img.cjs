const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Using a guaranteed working Unsplash image for business strategy
const correctImageUrl = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80';

async function updateDB() {
  try {
    await pool.query(
      'UPDATE case_studies SET image_url = $1 WHERE title = $2',
      [correctImageUrl, 'EVA Advisors']
    );
    console.log("Updated EVA Advisors image successfully.");
  } catch (err) {
    console.error('Error updating image:', err);
  } finally {
    process.exit(0);
  }
}

updateDB();
