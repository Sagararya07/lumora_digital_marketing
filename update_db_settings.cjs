const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function updateSettings() {
  try {
    console.log('Updating DB settings...');
    
    // Email
    await pool.query(`INSERT INTO site_settings (key, value) VALUES ('email', 'support@lumora.expert') ON CONFLICT (key) DO UPDATE SET value = 'support@lumora.expert'`);
    await pool.query(`INSERT INTO site_settings (key, value) VALUES ('contact_email', 'support@lumora.expert') ON CONFLICT (key) DO UPDATE SET value = 'support@lumora.expert'`);

    // Address
    const address = "Plot No 5/C, Sy No 83/1, Raidurgam panmaktha Hyderabad Knowledge City, Serilingampally, Hyderabad, Telangana 500081.";
    await pool.query(`INSERT INTO site_settings (key, value) VALUES ('address', $1) ON CONFLICT (key) DO UPDATE SET value = $1`, [address]);
    await pool.query(`INSERT INTO site_settings (key, value) VALUES ('contact_address', $1) ON CONFLICT (key) DO UPDATE SET value = $1`, [address]);

    // Phone
    const phone = "+91 9179765554";
    await pool.query(`INSERT INTO site_settings (key, value) VALUES ('phone', $1) ON CONFLICT (key) DO UPDATE SET value = $1`, [phone]);
    await pool.query(`INSERT INTO site_settings (key, value) VALUES ('contact_phone', $1) ON CONFLICT (key) DO UPDATE SET value = $1`, [phone]);
    await pool.query(`INSERT INTO site_settings (key, value) VALUES ('whatsapp', $1) ON CONFLICT (key) DO UPDATE SET value = $1`, [phone]);
    await pool.query(`INSERT INTO site_settings (key, value) VALUES ('contact_whatsapp', $1) ON CONFLICT (key) DO UPDATE SET value = $1`, [phone]);

    console.log('Update complete!');
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

updateSettings();
