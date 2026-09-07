-- OKCC 데이터베이스 스키마
-- MariaDB / MySQL

CREATE DATABASE IF NOT EXISTS okcc_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE okcc_db;

-- ────────── 사용자 ──────────
CREATE TABLE IF NOT EXISTS users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  name_ko       VARCHAR(50)  NOT NULL,
  name_en       VARCHAR(50),
  email         VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role          ENUM('member','deacon','elder','pastor','admin') DEFAULT 'member',
  phone         VARCHAR(20),
  address       TEXT,
  profile_image VARCHAR(255),
  joined_at     DATE,
  is_active     BOOLEAN DEFAULT TRUE,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ────────── 설교 ──────────
CREATE TABLE IF NOT EXISTS sermons (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  title_ko     VARCHAR(200) NOT NULL,
  title_en     VARCHAR(200),
  preacher     VARCHAR(100) NOT NULL,
  scripture    VARCHAR(200),
  service_type ENUM('sunday','wednesday','special','youth','english') NOT NULL,
  video_url    VARCHAR(500),
  content_ko   TEXT,
  content_en   TEXT,
  sermon_date  DATE NOT NULL,
  thumbnail    VARCHAR(255),
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ────────── 게시판 카테고리 ──────────
CREATE TABLE IF NOT EXISTS categories (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  name_ko   VARCHAR(100) NOT NULL,
  name_en   VARCHAR(100),
  slug      VARCHAR(100) NOT NULL UNIQUE,
  parent_id INT REFERENCES categories(id),
  sort_order INT DEFAULT 0
);

-- ────────── 게시물 ──────────
CREATE TABLE IF NOT EXISTS posts (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL REFERENCES categories(id),
  user_id    INT REFERENCES users(id),
  title_ko   VARCHAR(300) NOT NULL,
  title_en   VARCHAR(300),
  content_ko LONGTEXT NOT NULL,
  content_en LONGTEXT,
  thumbnail  VARCHAR(255),
  is_pinned  BOOLEAN DEFAULT FALSE,
  view_count INT DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ────────── 주보 ──────────
CREATE TABLE IF NOT EXISTS bulletins (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  title        VARCHAR(200) NOT NULL,
  file_url     VARCHAR(500) NOT NULL,
  service_date DATE NOT NULL,
  description  TEXT,
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ────────── 행사/이벤트 ──────────
CREATE TABLE IF NOT EXISTS events (
  id                   INT AUTO_INCREMENT PRIMARY KEY,
  title_ko             VARCHAR(200) NOT NULL,
  title_en             VARCHAR(200),
  description_ko       TEXT,
  description_en       TEXT,
  location             VARCHAR(200),
  start_time           DATETIME NOT NULL,
  end_time             DATETIME,
  thumbnail            VARCHAR(255),
  registration_required BOOLEAN DEFAULT FALSE,
  registration_url     VARCHAR(500),
  created_at           DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ────────── 갤러리 앨범 ──────────
CREATE TABLE IF NOT EXISTS gallery_albums (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  title_ko    VARCHAR(200) NOT NULL,
  title_en    VARCHAR(200),
  description TEXT,
  thumbnail   VARCHAR(255),
  event_date  DATE,
  is_public   BOOLEAN DEFAULT TRUE,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ────────── 갤러리 사진 ──────────
CREATE TABLE IF NOT EXISTS gallery_photos (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  album_id   INT NOT NULL REFERENCES gallery_albums(id),
  image_url  VARCHAR(500) NOT NULL,
  caption    VARCHAR(300),
  sort_order INT DEFAULT 0
);

-- ────────── 성경통독 계획 ──────────
CREATE TABLE IF NOT EXISTS bible_reading_plans (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  year          INT NOT NULL,
  title_ko      VARCHAR(200) NOT NULL,
  title_en      VARCHAR(200),
  file_url      VARCHAR(500),
  plan_data     JSON,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ────────── 성원 통독 진도 ──────────
CREATE TABLE IF NOT EXISTS member_reading_progress (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  user_id      INT NOT NULL REFERENCES users(id),
  plan_id      INT NOT NULL REFERENCES bible_reading_plans(id),
  reading_date DATE NOT NULL,
  is_done      BOOLEAN DEFAULT FALSE,
  UNIQUE KEY uq_progress (user_id, plan_id, reading_date)
);

-- ────────── 기도 제목 ──────────
CREATE TABLE IF NOT EXISTS prayer_requests (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  user_id    INT REFERENCES users(id),
  title      VARCHAR(200) NOT NULL,
  content    TEXT NOT NULL,
  is_public  BOOLEAN DEFAULT TRUE,
  is_answered BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ────────── 사이트 설정 ──────────
CREATE TABLE IF NOT EXISTS site_settings (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  `key`      VARCHAR(100) NOT NULL UNIQUE,
  `value`    TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
