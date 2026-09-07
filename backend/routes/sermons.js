/**
 * 설교 라우터
 * Base: /api/sermons
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const { upload, processImage } = require('../middleware/upload');
const sermonsController = require('../controllers/sermonsController');

router.get('/',           sermonsController.getSermons);         // 설교 목록
router.get('/latest',     sermonsController.getLatestSermons);   // 최신 설교
router.get('/:id',        sermonsController.getSermonById);      // 설교 상세
router.post('/',          authMiddleware, adminMiddleware,
              upload.single('thumbnail'), processImage(800),
              sermonsController.createSermon);                   // 설교 등록 (관리자)
router.put('/:id',        authMiddleware, adminMiddleware,
              sermonsController.updateSermon);                   // 설교 수정
router.delete('/:id',     authMiddleware, adminMiddleware,
              sermonsController.deleteSermon);                   // 설교 삭제

module.exports = router;
