/**
 * 파일 업로드 미들웨어 (Multer + Sharp)
 * 이미지 업로드 및 리사이즈를 처리합니다.
 */
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const UPLOAD_DIR = process.env.UPLOAD_DIR || './uploads';

// 업로드 폴더 생성
['images', 'files', 'thumbnails'].forEach((dir) => {
  const dirPath = path.join(UPLOAD_DIR, dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
});

// Multer 설정
const storage = multer.memoryStorage(); // 메모리에 저장 후 Sharp 처리

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('지원하지 않는 파일 형식입니다.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760') },
});

// 이미지 리사이즈 & 저장 미들웨어
const processImage = (width = 1080, quality = 80) => async (req, res, next) => {
  if (!req.file || !req.file.mimetype.startsWith('image/')) return next();
  try {
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.webp`;
    const outputPath = path.join(UPLOAD_DIR, 'images', filename);
    await sharp(req.file.buffer)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);
    req.file.savedPath = `/uploads/images/${filename}`;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { upload, processImage };
