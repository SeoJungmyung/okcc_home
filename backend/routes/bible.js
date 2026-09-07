/**
 * 성경 기능 라우터 (암송, 묵상, 통독)
 * Base: /api/bible
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const bibleController = require('../controllers/bibleController');

// 오늘의 말씀
router.get('/verse/today', bibleController.getTodayVerse);

// 성경암송 (월별 구절)
router.get('/memorization',         bibleController.getMemorizationVerses);
router.get('/memorization/:month',  bibleController.getMemorizationByMonth);

// 성경통독 계획
router.get('/reading-plans',        bibleController.getReadingPlans);
router.get('/reading-plans/:id',    bibleController.getReadingPlanById);
router.post('/reading-plans',       authMiddleware, adminMiddleware,
                                    bibleController.createReadingPlan);

// 개인 통독 진도 (로그인 사용자)
router.get('/progress',             authMiddleware, bibleController.getMyProgress);
router.post('/progress',            authMiddleware, bibleController.updateProgress);

module.exports = router;
