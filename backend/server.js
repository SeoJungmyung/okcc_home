/**
 * OKCC Backend - 서버 진입점
 * Node.js + Express 서버를 시작합니다.
 */
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 OKCC Backend Server running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});
