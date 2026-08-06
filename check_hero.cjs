const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function check() {
  try {
    const res = await pool.query("SELECT * FROM hero_section");
    console.log('Rows:', res.rowCount);
    console.log('Data:', res.rows);
  } catch(e) {
    console.error('Error fetching hero_section:', e.message);
  }
  
  try {
    const res2 = await pool.query("SELECT * FROM section_settings");
    console.log('Section Settings:', res2.rows);
  } catch(e) {
    console.error('Error fetching section_settings:', e.message);
  }

  pool.end();
}
check();
