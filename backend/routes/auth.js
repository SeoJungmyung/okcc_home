/**
 * 인증 라우터 (로그인, 회원가입, 내 정보)
 * Base: /api/auth
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const authController = require('../controllers/authController');

router.post('/register', authController.register); // 회원가입
router.post('/login',    authController.login);    // 로그인
router.get('/me',        authMiddleware, authController.getMe); // 내 정보
router.put('/me',        authMiddleware, authController.updateMe); // 정보 수정
router.post('/logout',   authMiddleware, authController.logout);   // 로그아웃
router.post('/forgot-password', authController.forgotPassword);     // 비밀번호 찾기
router.post('/reset-password',  authController.resetPassword);      // 비밀번호 재설정

module.exports = router;
