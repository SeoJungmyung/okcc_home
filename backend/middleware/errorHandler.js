/**
 * 전역 에러 핸들러 미들웨어
 * app.js에 마지막으로 등록합니다.
 */
const errorHandler = (err, req, res, next) => {
  console.error('[ERROR]', err.message);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: '인증이 필요합니다.' });
  }
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: '파일 크기가 너무 큽니다.' });
  }

  const statusCode = err.statusCode || 500;
  const message = process.env.NODE_ENV === 'production'
    ? '서버 오류가 발생했습니다.'
    : err.message;

  res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;
