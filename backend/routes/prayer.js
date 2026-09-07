/**
 * 기도 제목 라우터
 * Base: /api/prayer
 */
const express = require('express');
const router = express.Router();
const { authMiddleware, optionalAuth } = require('../middleware/auth');
const prayerController = require('../controllers/prayerController');

router.get('/',       optionalAuth, prayerController.getPrayers);       // 기도 제목 목록
router.get('/:id',    optionalAuth, prayerController.getPrayerById);    // 기도 제목 상세
router.post('/',      authMiddleware, prayerController.createPrayer);   // 기도 제목 등록
router.put('/:id',    authMiddleware, prayerController.updatePrayer);   // 기도 제목 수정
router.delete('/:id', authMiddleware, prayerController.deletePrayer);   // 기도 제목 삭제
router.patch('/:id/answered', authMiddleware,
              prayerController.markAsAnswered);                         // 응답됨 표시

module.exports = router;
