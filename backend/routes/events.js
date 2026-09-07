/**
 * 행사/이벤트 라우터
 * Base: /api/events
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const { upload, processImage } = require('../middleware/upload');
const eventsController = require('../controllers/eventsController');

router.get('/',        eventsController.getEvents);           // 이벤트 목록
router.get('/upcoming',eventsController.getUpcomingEvents);   // 예정 이벤트
router.get('/:id',     eventsController.getEventById);        // 이벤트 상세
router.post('/',       authMiddleware, adminMiddleware,
             upload.single('thumbnail'), processImage(800),
             eventsController.createEvent);                   // 이벤트 생성
router.put('/:id',     authMiddleware, adminMiddleware,
             eventsController.updateEvent);                   // 이벤트 수정
router.delete('/:id',  authMiddleware, adminMiddleware,
             eventsController.deleteEvent);                   // 이벤트 삭제

module.exports = router;
