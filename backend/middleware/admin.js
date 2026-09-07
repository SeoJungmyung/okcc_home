/**
 * 관리자 권한 확인 미들웨어
 * authMiddleware 이후에 사용합니다.
 */
const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: '인증이 필요합니다.' });
  }
  if (req.user.role !== 'admin' && req.user.role !== 'pastor') {
    return res.status(403).json({ error: '관리자 권한이 필요합니다.' });
  }
  next();
};

module.exports = adminMiddleware;
