/**
 * 부서 사역 라우터 (Ainos, Philoi, Youth, Bahuri, Mosaic)
 * Base: /api/ministry
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const ministryController = require('../controllers/ministryController');

router.get('/',         ministryController.getMinistries);       // 부서 목록
router.get('/:slug',    ministryController.getMinistryBySlug);   // 부서 상세
router.put('/:slug',    authMiddleware, adminMiddleware,
            ministryController.updateMinistry);                  // 부서 정보 수정

module.exports = router;
