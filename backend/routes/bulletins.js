/**
 * 주보 라우터
 * Base: /api/bulletins
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const { upload } = require('../middleware/upload');
const bulletinsController = require('../controllers/bulletinsController');

router.get('/',       bulletinsController.getBulletins);      // 주보 목록
router.get('/latest', bulletinsController.getLatestBulletin); // 최신 주보
router.get('/:id',    bulletinsController.getBulletinById);   // 주보 상세
router.post('/',      authMiddleware, adminMiddleware,
             upload.single('file'),
             bulletinsController.createBulletin);             // 주보 등록
router.delete('/:id', authMiddleware, adminMiddleware,
             bulletinsController.deleteBulletin);             // 주보 삭제

module.exports = router;
