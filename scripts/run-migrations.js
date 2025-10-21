const fs = require('fs');
const { Client } = require('pg');
const glob = require('glob');

const url = process.env.SUPABASE_DB_URL_SERVICE_ROLE;
if (!url) {
  console.error('Missing SUPABASE_DB_URL_SERVICE_ROLE');
  process.exit(1);
}

(async () => {
  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  await client.connect();

  await client.query(`
    create table if not exists _migrations (
      id serial primary key,
      filename text unique not null,
      executed_at timestamptz not null default now()
    );`);

  const files = glob.sync('migrations/*.sql').sort();
  for (const file of files) {
    const done = await client.query('select 1 from _migrations where filename=$1', [file]);
    if (done.rowCount) { console.log('Already applied:', file); continue; }

    const sql = fs.readFileSync(file, 'utf8');
    console.log('Applying:', file);
    await client.query('begin');
    try {
      await client.query(sql);
      await client.query('insert into _migrations(filename) values ($1)', [file]);
      await client.query('commit');
    } catch (e) {
      await client.query('rollback');
      console.error('Failed migration:', file, e.message);
      process.exit(1);
    }
  }

  await client.end();
  console.log('All migrations applied.');
})();
