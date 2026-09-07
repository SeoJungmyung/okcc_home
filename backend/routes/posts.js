/**
 * 게시판 라우터 (공지사항, 선교 소식 등)
 * Base: /api/posts
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const postsController = require('../controllers/postsController');

router.get('/',        postsController.getPosts);           // 게시물 목록 (category 쿼리)
router.get('/:id',     postsController.getPostById);        // 게시물 상세
router.post('/',       authMiddleware, adminMiddleware,
             postsController.createPost);                   // 게시물 작성
router.put('/:id',     authMiddleware, adminMiddleware,
             postsController.updatePost);                   // 게시물 수정
router.delete('/:id',  authMiddleware, adminMiddleware,
             postsController.deletePost);                   // 게시물 삭제
router.post('/:id/view', postsController.incrementView);    // 조회수 증가

module.exports = router;
