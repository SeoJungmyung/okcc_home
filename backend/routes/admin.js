/**
 * 관리자 라우터
 * Base: /api/admin
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const adminController = require('../controllers/adminController');

router.use(authMiddleware, adminMiddleware); // 모든 라우트에 인증 + 관리자 검증

router.get('/dashboard',      adminController.getDashboard);     // 대시보드 통계
router.get('/users',          adminController.getUsers);         // 사용자 목록
router.get('/users/:id',      adminController.getUserById);      // 사용자 상세
router.put('/users/:id',      adminController.updateUser);       // 사용자 정보 수정
router.patch('/users/:id/role', adminController.changeUserRole); // 역할 변경
router.delete('/users/:id',   adminController.deleteUser);       // 사용자 삭제

router.get('/settings',       adminController.getSettings);      // 사이트 설정 조회
router.put('/settings',       adminController.updateSettings);   // 사이트 설정 수정

router.get('/popups',         adminController.getPopups);        // 팝업 공지 목록
router.post('/popups',        adminController.createPopup);      // 팝업 공지 생성
router.put('/popups/:id',     adminController.updatePopup);      // 팝업 공지 수정
router.delete('/popups/:id',  adminController.deletePopup);      // 팝업 공지 삭제

module.exports = router;
