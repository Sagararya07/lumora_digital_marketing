const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function run() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS client_meetings (
        id SERIAL PRIMARY KEY,
        client_id VARCHAR(50) REFERENCES clients(client_id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        description TEXT,
        option1 TEXT NOT NULL,
        option2 TEXT NOT NULL,
        option3 TEXT NOT NULL,
        selected_option INTEGER CHECK (selected_option IN (1, 2, 3)),
        status VARCHAR(20) DEFAULT 'Pending',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("Created client_meetings table.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
