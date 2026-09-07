/**
 * OKCC Backend - Express 앱 설정
 * 미들웨어, 라우터, 에러 핸들러를 등록합니다.
 */
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();

// ─── 보안 미들웨어 ───────────────────────────────
app.use(helmet());

// ─── CORS 설정 ──────────────────────────────────
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

// ─── Rate Limiting ──────────────────────────────
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 200,
  message: { error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.' },
});
app.use('/api/', apiLimiter);

// ─── 파싱 미들웨어 ──────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ─── 로깅 ───────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// ─── 정적 파일 (업로드) ─────────────────────────
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ─── API 라우터 등록 ────────────────────────────
app.use('/api/auth',      require('./routes/auth'));
app.use('/api/sermons',   require('./routes/sermons'));
app.use('/api/posts',     require('./routes/posts'));
app.use('/api/bulletins', require('./routes/bulletins'));
app.use('/api/events',    require('./routes/events'));
app.use('/api/bible',     require('./routes/bible'));
app.use('/api/gallery',   require('./routes/gallery'));
app.use('/api/ministry',  require('./routes/ministry'));
app.use('/api/mission',   require('./routes/mission'));
app.use('/api/prayer',    require('./routes/prayer'));
app.use('/api/admin',     require('./routes/admin'));

// ─── 헬스체크 ───────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── 에러 핸들러 ────────────────────────────────
app.use(require('./middleware/errorHandler'));

module.exports = app;
