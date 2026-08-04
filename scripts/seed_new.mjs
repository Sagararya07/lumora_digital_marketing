import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function seedNew() {
  const client = await pool.connect();
  try {
    console.log('Seeding trusted_logos and case_studies...');

    // Trusted Logos
    const logos = [
      { name: 'Startup India', url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
      { name: 'Honeywell', url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
      { name: 'PcVue Solutions', url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
      { name: 'Tridium', url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
      { name: 'HubSpot', url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
      { name: 'Microsoft', url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
      { name: 'Google', url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
    ];

    const logosCheck = await client.query('SELECT COUNT(*) FROM trusted_logos');
    if (parseInt(logosCheck.rows[0].count) === 0) {
      for (const logo of logos) {
        await client.query(
          'INSERT INTO trusted_logos (name, image_url, image_public_id) VALUES ($1, $2, $3)',
          [logo.name, logo.url, 'sample_id']
        );
      }
      console.log('Inserted default trusted logos.');
    }

    // Case Studies
    const cases = [
      { title: 'SaaS Company', category: 'SAAS', desc: 'How we helped a SaaS brand increase demo bookings by 320% in 6 months.', img: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
      { title: 'Manufacturing Business', category: 'MANUFACTURING', desc: 'Building a predictable lead pipeline that increased revenue by 180%.', img: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
      { title: 'Healthcare Brand', category: 'HEALTHCARE', desc: 'AI-powered campaigns that improved patient appointments by 250%.', img: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
    ];

    const casesCheck = await client.query('SELECT COUNT(*) FROM case_studies');
    if (parseInt(casesCheck.rows[0].count) === 0) {
      for (const c of cases) {
        await client.query(
          'INSERT INTO case_studies (title, category, description, image_url, image_public_id) VALUES ($1, $2, $3, $4, $5)',
          [c.title, c.category, c.desc, c.img, 'sample_id']
        );
      }
      console.log('Inserted default case studies.');
    }

    console.log('Seeding complete.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    client.release();
    pool.end();
  }
}

seedNew();
