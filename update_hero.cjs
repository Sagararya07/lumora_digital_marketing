const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
pool.query("UPDATE hero_section SET primary_cta = 'Explore Services' WHERE id = 1", (err, res) => {
  if (err) throw err;
  console.log('Updated hero_section in DB');
  process.exit(0);
});
