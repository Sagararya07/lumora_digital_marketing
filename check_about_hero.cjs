const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function check() {
  try {
    const res = await pool.query("SELECT * FROM about_hero_section");
    console.log('about_hero_section Rows:', res.rowCount);
    console.log('about_hero_section Data:', res.rows);
  } catch(e) {
    console.error('Error fetching about_hero_section:', e.message);
  }
  
  pool.end();
}
check();
