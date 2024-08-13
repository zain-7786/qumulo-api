import { Pool } from 'pg';
import Env from '@ioc:Adonis/Core/Env'

// Configure PostgreSQL client with connection string
const host = Env.get('PG_HOST');
const port = Env.get('PG_PORT');
const user = Env.get('PG_USER');
const password = Env.get('PG_PASSWORD', '');
const database = Env.get('PG_DB_NAME');

const pool = new Pool({
  connectionString: `postgresql://${user}:${password}@${host}:${port}/${database}`
});

// Function to get IOPS (Input/Output Operations Per Second) and throughput data from PostgreSQL
export const getIOPSAndThroughput = async () => {
  // Acquire a client from the pool to execute queries
  const client = await pool.connect();

  try {
    // Query to get IOPS data from pg_stat_bgwriter system view
    // pg_stat_bgwriter provides statistics about the background writer
    const iopsResult = await client.query(`
      SELECT
        stats_reset,
        checkpoint_write_time,
        checkpoint_sync_time
      FROM pg_stat_bgwriter;
    `);

    // Query to get throughput data from pg_stat_activity and pg_stat_database system views
    // pg_stat_activity provides information about current activity, and pg_stat_database provides database-wide statistics
    const throughputResult = await client.query(`
      SELECT
        COUNT(*) AS active_connections,
        SUM(xact_commit) AS transactions_committed,
        SUM(xact_rollback) AS transactions_rolled_back
      FROM pg_stat_activity
      LEFT JOIN pg_stat_database ON pg_stat_activity.datid = pg_stat_database.datid
    `);

    return {
      iops: iopsResult.rows,
      throughput: throughputResult.rows
    };
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  } finally {
    await client.end();
  }
};

// Fetch and log data
getIOPSAndThroughput().then(data => console.log(data));
