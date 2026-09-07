/**
 * MariaDB 연결 설정 (Knex.js 기반)
 */
const knex = require('knex');

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    database: process.env.DB_NAME || 'okcc_db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '1234',
    charset: 'utf8mb4',
  },
  pool: { min: 2, max: 10 },
  acquireConnectionTimeout: 10000,
});

// 연결 테스트
db.raw('SELECT 1')
  .then(() => console.log('✅ MariaDB 연결 성공'))
  .catch((err) => console.error('❌ MariaDB 연결 실패:', err.message));

module.exports = db;
