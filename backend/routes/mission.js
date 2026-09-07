/**
 * 선교 라우터
 * Base: /api/mission
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const missionController = require('../controllers/missionController');

router.get('/news',       missionController.getMissionNews);       // 선교 소식
router.get('/news/:id',   missionController.getMissionNewsById);   // 선교 소식 상세
router.post('/news',      authMiddleware, adminMiddleware,
             missionController.createMissionNews);                 // 선교 소식 작성
router.get('/trips',      missionController.getMissionTrips);      // 단기선교 목록
router.get('/trips/:id',  missionController.getMissionTripById);   // 단기선교 상세
router.post('/trips',     authMiddleware, adminMiddleware,
             missionController.createMissionTrip);                 // 단기선교 등록

module.exports = router;
