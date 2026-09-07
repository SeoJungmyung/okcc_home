/**
 * 갤러리 라우터
 * Base: /api/gallery
 */
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const { upload, processImage } = require('../middleware/upload');
const galleryController = require('../controllers/galleryController');

router.get('/albums',         galleryController.getAlbums);             // 앨범 목록
router.get('/albums/:id',     galleryController.getAlbumById);          // 앨범 상세 + 사진
router.post('/albums',        authMiddleware, adminMiddleware,
             upload.single('thumbnail'), processImage(800),
             galleryController.createAlbum);                            // 앨범 생성
router.delete('/albums/:id',  authMiddleware, adminMiddleware,
             galleryController.deleteAlbum);                            // 앨범 삭제
router.post('/albums/:id/photos', authMiddleware, adminMiddleware,
             upload.array('photos', 30), galleryController.uploadPhotos); // 사진 업로드

module.exports = router;
