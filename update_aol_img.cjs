const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Using a guaranteed working Unsplash image for nature/farming
const correctImageUrl = 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop&q=80';

async function updateDB() {
  try {
    await pool.query(
      'UPDATE case_studies SET image_url = $1 WHERE title = $2',
      [correctImageUrl, 'AOL Permaculture']
    );
    console.log("Updated AOL Permaculture image successfully.");
  } catch (err) {
    console.error('Error updating image:', err);
  } finally {
    process.exit(0);
  }
}

updateDB();
