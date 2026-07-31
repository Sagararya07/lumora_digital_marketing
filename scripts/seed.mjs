/**
 * Seeds / updates site_settings extended JSON and ensures core CMS defaults exist.
 * Run: node scripts/seed.mjs
 */
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const extendedSettings = [
  {
    key: 'hero_extended',
    label: 'Hero Extended Fields',
    type: 'json',
    value: JSON.stringify({
      headlineHighlight: 'Digital Marketing',
      statNumber: '+342%',
      statLabel: 'Avg. Pipeline Revenue Growth',
      statBadgeText: 'Verified Agency Partner',
    }),
  },
  {
    key: 'what_is_section',
    label: 'What Is Digital Marketing Section',
    type: 'json',
    value: JSON.stringify({
      title: 'What is Digital Marketing?',
      subtitle: 'The Engine of Modern Global Business Scaling',
      descriptionParagraph2:
        'At Cypher Swift, we transcend standard advertising. We combine algorithmic audience targeting, AI-enhanced campaign optimization, and creative brand storytelling to convert international digital attention into scalable pipeline revenue.',
    }),
  },
  {
    key: 'why_choose_section',
    label: 'Why Choose Us Section',
    type: 'json',
    value: JSON.stringify({
      title: 'Why Choose Cypher Swift?',
      subtitle: 'Built for High-Growth Enterprises, SMEs & Ambitious Brands',
    }),
  },
  {
    key: 'working_hours',
    label: 'Working Hours',
    type: 'text',
    value: 'Mon - Sat: 9:00 AM - 8:00 PM IST / Global 24/7 Support',
  },
  {
    key: 'footer_tagline',
    label: 'Footer Brand Description',
    type: 'textarea',
    value:
      'Cypher Swift is an international digital marketing agency specializing in search engine optimization, performance advertising, lead generation, and multi-channel global expansion.',
  },
];

async function upsertSetting(client, { key, label, type, value }) {
  const existing = await client.query('SELECT id FROM site_settings WHERE key = $1', [key]);
  if (existing.rows.length === 0) {
    await client.query(
      `INSERT INTO site_settings (key, value, label, type, updated_at) VALUES ($1, $2, $3, $4, NOW())`,
      [key, value, label, type]
    );
    console.log(`  + inserted setting: ${key}`);
  } else {
    await client.query(
      `UPDATE site_settings SET value = $1, label = $2, type = $3, updated_at = NOW() WHERE key = $4`,
      [value, label, type, key]
    );
    console.log(`  ~ updated setting: ${key}`);
  }
}

async function run() {
  const client = await pool.connect();
  try {
    console.log('Seeding extended site settings...');
    for (const s of extendedSettings) {
      await upsertSetting(client, s);
    }
    console.log('Done.');
  } finally {
    client.release();
    await pool.end();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
