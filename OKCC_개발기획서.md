# OKCC (Ottawa Korean Community Church) 웹사이트 신규 개발 기획서

> **프로젝트명:** OKCC 웹사이트 리뉴얼 (Node.js + React 풀스택)  
> **대상 기존 사이트:** https://okcc.ca  
> **작성일:** 2026-09-03  
> **기술 스택:** Node.js (Express) · React · MariaDB

---

## 1. 프로젝트 개요

### 1.1 교회 소개
**오타와한인교회 (Ottawa Korean Community Church, OKCC)** 는 캐나다 수도 오타와에 세워진 기독교 신앙 공동체입니다.

- **주소:** 3013 Jockvale Rd. K2J 4E4 (예배 장소: BUC 본당)  
- **연락처:** contact@okcc.ca / 613.236.4442  
- **SNS:** Facebook (@ottawakorean), YouTube (@OKCCLiveStream)  
- **영문 사이트:** https://okcc.ca/eng/  

### 1.2 현재 사이트 기술 스택 (기존)
| 항목 | 현황 |
|------|------|
| CMS | WordPress (Divi 테마 4.27.8) |
| 호스팅 | Hostinger |
| 게시판 | KBoard 플러그인 6.7.1 |
| 회원 | Ultimate Member 플러그인 |
| 이벤트 | STEC Event 플러그인 |
| 폰트 | Noto Sans KR, Noto Serif KR, Montserrat, Open Sans |
| 애널리틱스 | Google Analytics (gtag) + Google Tag Manager |
| 성경 | Logos Bible 연동 (https://okcc.ca/logos/) |

---

## 2. 기존 사이트 분석

### 2.1 사이트 구조 (현재 메뉴 및 페이지)

```
홈 (/)
├── 환영합니다 (/환영합니다)
│   ├── 오시는 길 (Location) - 지도 임베드
│   ├── 예배 시간 (Service Times)
│   ├── 주차 안내 (Parking)
│   └── 새교우 등록 방법 (Registration)
├── 교회 소개 (About)
│   ├── 비전 & 연간 목표 (/교회소개/#year_goal)
│   ├── 교회 연혁 (/교회-연혁/)
│   └── 4영리 소개 (/the-four-spiritual-laws/)
├── 예배 & 소그룹
│   ├── 주일예배 (오후 2시 BUC 본당 + YouTube LIVE)
│   │   └── 사역자예배 (오전 9시 Zoom)
│   ├── Mosaic EM (오후 4:10 BUC / mosaic.okcc.ca)
│   ├── 평일예배
│   │   ├── 새벽기도회 화~금 오전 6시 (Zoom)
│   │   ├── 토요 새벽기도회 오전 6시 BUC
│   │   ├── 수요예배 오후 7:30 BUC (YouTube LIVE)
│   │   └── 금요기도회 (매월 셋째 주)
│   └── 구역예배
├── 설교 & 미디어
│   ├── 수요예배(강좌) 설교 게시판
│   ├── 주일예배 설교 게시판
│   └── Daily Bible (/daily-bible/?date=YYYY-MM-DD)
├── 부서 사역
│   ├── 영아유치부 Ainos (/ainos/) - 1~5세, 주보·암송카드
│   ├── 아동부 Philoi (/philoi/) - 1~6학년, 오후 1:45 BFCRC
│   ├── 청소년부 Youth (/youth/) - 7~12학년, 오후 1:45 BFCRC
│   ├── 청년부 Bahuri (외부 Google Sites)
│   └── Mosaic EM (별도 서브도메인)
├── 선교 & 봉사
│   ├── 선교 보고
│   └── 단기선교 활동
├── 공동체 성경
│   ├── 성경암송 (월별 한/영 구절)
│   ├── 성경묵상 (날짜 캘린더)
│   └── 성경통독 (/2025-bible-reading-plan/ + PDF)
├── 소식 & 게시판
│   ├── 주보 (/bulletin/)
│   ├── 공지사항 (KBoard)
│   ├── 갤러리
│   └── 건의함 (Microsoft Forms 외부)
├── 팝업 공지 시스템
│   ├── 건의함 팝업
│   ├── 부고 공지 팝업
│   ├── 행사 광고 팝업 (Ainos VBS)
│   ├── 새가족 공부반 팝업
│   └── 일반 텍스트 공지 팝업
├── 로그인 (/login/) / 회원가입 (/register/)
├── Privacy Policy (/privacy-policy/)
└── English Site (/eng/)
```

### 2.2 홈페이지 주요 섹션 구성

| 섹션 | 내용 |
|------|------|
| 히어로 | 새예배당 건축현장 이미지 + 빠른 버튼 (LIVE, 예배시간, 주보, 연혁) |
| 건축현장 캐러셀 | 자동 재생 사진 슬라이더 (10장, 2초 간격) |
| 공동체 성경암송 | 월별 한국어 + 영어 암송 구절 자동 표시 |
| 공동체 성경묵상 | 인터랙티브 월간 캘린더 (날짜별 daily-bible 링크) |
| 공동체 성경통독 | 연간 통독 설명 + PDF 다운로드 버튼 |
| 주일예배 안내 | 7가지 예배/부서 시간 + Zoom/YouTube 버튼 |
| 평일예배 안내 | 새벽기도회, 수요예배, 금요기도회, 구역예배 |
| 최신 게시물 | 3열 카드 (수요설교, 선교, 공동체 스토리) |
| 오늘의 말씀 | 당일 성경 구절 |
| 팝업들 | 다양한 공지·행사 팝업 |

---

## 3. 기존 사이트 문제점 분석

### 3.1 기술적 문제점

| 구분 | 문제 | 영향 |
|------|------|------|
| **성능** | jQuery 포함 20~40개 JS/CSS 파일 동시 로드 | 페이지 로딩 3~5초 이상 |
| **HTML 구조** | 단일 페이지 내 h1 태그 7개 이상 남용 | SEO 순위 저하 |
| **코드 품질** | 모든 JS 기능이 HTML 인라인 스크립트로 작성 | 유지보수 극히 어려움 |
| **플러그인 의존** | 8개 이상 플러그인 의존 (Divi, KBoard, UM, STEC 등) | 업데이트 충돌, 보안 취약 |
| **분산 운영** | Mosaic(별도 서브도메인), 청년부(Google Sites) | 관리 이원화, 브랜드 통일성 없음 |
| **다국어** | 영문 사이트 /eng/ 경로로 별도 유지 | 동일 콘텐츠 이중 관리 |
| **팝업 관리** | 5개 팝업을 코드로 직접 관리 | 비개발자 업데이트 불가 |

### 3.2 UX/디자인 문제점

| 구분 | 문제 |
|------|------|
| **모바일** | Divi 특성상 모바일 레이아웃 제한적 |
| **탐색성** | 메뉴가 복잡하고 뎁스가 불규칙 |
| **검색** | 전체 사이트 통합 검색 없음 |
| **접근성** | ARIA 라벨 미흡, 키보드 탐색 불완전 |
| **언어 전환** | 언어 버튼이 푸터 맨 아래에만 존재 |
| **로딩 피드백** | 페이지 전환 시 시각적 피드백 없음 |

### 3.3 기능적 한계

| 구분 | 현황 | 개선 방향 |
|------|------|----------|
| 온라인 헌금 | 없음 | 온라인 헌금 링크/안내 시스템 |
| 알림 시스템 | 이메일만 | 예배 일정 알림, 공지 알림 |
| 설교 검색 | WordPress 기본 검색 | 제목/설교자/본문/날짜 필터 검색 |
| 통독 진도 | PDF만 제공 | 온라인 체크리스트 진도 관리 |
| 기도 제목 | 없음 | 기도 제목 공유 게시판 |
| 성도 커뮤니티 | 없음 | 구역/셀 그룹 관리 |

---

## 4. 신규 개발 목표

### 4.1 핵심 목표
1. **WordPress 탈피** → Node.js + React 독립 시스템 구축
2. **통합 플랫폼** → 부서 사이트, 다국어를 하나의 코드베이스로 통합
3. **성능 우선** → LCP < 2.5초, Core Web Vitals 90점 이상
4. **관리 편의성** → 비개발자도 사용 가능한 관리자 패널
5. **확장성** → API 기반 설계로 추후 앱 개발 대비

### 4.2 신규 메뉴 구조

```
홈 (/)
├── 환영 (Welcome) /welcome
│   ├── 교회 소개 /about
│   ├── 오시는 길 /location
│   ├── 예배 안내 /service-times
│   └── 새가족 등록 /new-member
├── 예배 (Worship) /worship
│   ├── 주일예배 /worship/sunday
│   ├── 평일예배 /worship/weekday
│   ├── 설교 아카이브 /sermons
│   └── 주보 /bulletin
├── 성경 (Bible) /bible
│   ├── 오늘의 말씀 /bible/daily
│   ├── 성경암송 /bible/memorization
│   ├── 성경묵상 /bible/devotion
│   └── 성경통독 /bible/reading-plan
├── 사역 (Ministry) /ministry
│   ├── 영아유치부 Ainos /ministry/ainos
│   ├── 아동부 Philoi /ministry/philoi
│   ├── 청소년부 Youth /ministry/youth
│   ├── 청년부 Bahuri /ministry/bahuri
│   └── Mosaic EM /ministry/mosaic
├── 선교 (Mission) /mission
│   ├── 선교 소식 /mission/news
│   └── 단기선교 /mission/trips
├── 소식 (News) /news
│   ├── 공지사항 /news/announcements
│   ├── 갤러리 /gallery
│   └── 건의함 /feedback
├── 커뮤니티 (Community) /community
│   ├── 기도 제목 /community/prayer
│   └── 행사 캘린더 /community/events
└── 마이페이지 /my
    ├── 로그인 /login
    ├── 회원가입 /register
    └── 프로필 /profile
```

---

## 5. 기술 스택

### 5.1 백엔드 (backend/)
| 항목 | 기술 | 버전 |
|------|------|------|
| 런타임 | Node.js | 20 LTS |
| 프레임워크 | Express.js | ^4.18 |
| 데이터베이스 | MariaDB | 10.11+ |
| ORM/쿼리빌더 | Knex.js | ^3.0 |
| 인증 | jsonwebtoken + bcryptjs | |
| 환경변수 | dotenv | |
| 파일 업로드 | Multer + Sharp | |
| 이메일 | Nodemailer | |
| CORS | cors | |
| 유효성 검사 | Joi 또는 express-validator | |
| 로깅 | Morgan + Winston | |

### 5.2 프론트엔드 (frontend/)
| 항목 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | React | 18 |
| 번들러 | Vite | ^5.0 |
| 라우팅 | React Router | v6 |
| 상태관리 | Zustand 또는 Context API | |
| 스타일 | Vanilla CSS + CSS Modules | |
| HTTP | Axios | |
| 다국어 | react-i18next | |
| 아이콘 | react-icons (Font Awesome) | |
| 폼 | React Hook Form | |
| 날짜 | date-fns | |

### 5.3 배포 환경
| 항목 | 내용 |
|------|------|
| 서버 | Hostinger VPS |
| 프로세스 관리 | PM2 |
| 웹서버 | Nginx (리버스 프록시) |
| SSL | Let's Encrypt (Certbot) |
| 빌드 | `npm run build` (Vite) |

---

## 6. 데이터베이스 설계 (주요 테이블)

```sql
-- 사용자
users (id, name_ko, name_en, email, password_hash, role, 
       phone, address, joined_at, is_active, profile_image)

-- 설교
sermons (id, title_ko, title_en, preacher, scripture, 
         service_type, video_url, content_ko, content_en, 
         sermon_date, thumbnail, created_at)

-- 게시판 카테고리
categories (id, name_ko, name_en, slug, parent_id, sort_order)

-- 게시물
posts (id, category_id, user_id, title_ko, title_en, 
       content_ko, content_en, thumbnail, is_pinned, 
       view_count, created_at, updated_at)

-- 주보
bulletins (id, title, file_url, service_date, 
           description, created_at)

-- 행사/이벤트
events (id, title_ko, title_en, description_ko, description_en,
        location, start_time, end_time, thumbnail,
        registration_required, registration_url, created_at)

-- 갤러리 앨범
gallery_albums (id, title_ko, title_en, description,
                thumbnail, event_date, is_public, created_at)

-- 갤러리 사진
gallery_photos (id, album_id, image_url, caption, sort_order)

-- 성경 통독 계획
bible_reading_plans (id, year, title_ko, title_en, 
                     file_url, plan_data_json)

-- 성원 통독 진도
member_reading_progress (id, user_id, plan_id, 
                         reading_date, is_done)

-- 기도 제목
prayer_requests (id, user_id, title, content, is_public, 
                 is_answered, created_at, updated_at)

-- 설정/공지
site_settings (id, key, value, updated_at)
```

---

## 7. 개발 로드맵

| Phase | 기간 | 주요 작업 |
|-------|------|----------|
| **Phase 1** | Week 1~2 | 프로젝트 셋업, DB 마이그레이션, 인증 API |
| **Phase 2** | Week 3~4 | 메인페이지, 예배 안내, 설교 목록/상세 |
| **Phase 3** | Week 5~6 | 성경 기능 (암송/묵상/통독), 부서 사역 페이지 |
| **Phase 4** | Week 7~8 | 회원 기능, 게시판, 공지사항, 갤러리 |
| **Phase 5** | Week 9~10 | 관리자 대시보드, 이메일 알림, 팝업 관리 |
| **Phase 6** | Week 11~12 | QA, 성능 최적화, SEO, 배포 |

---

## 8. 개선 포인트 요약

| 항목 | 기존 | 신규 |
|------|------|------|
| 기술 | WordPress + 다수 플러그인 | Node.js + React (커스텀) |
| 성능 | 로드 3~5초 (jQuery 과부하) | 목표 1.5초 이내 |
| SEO | h1 남용, 구조 혼재 | 시맨틱 HTML, 메타 최적화 |
| 다국어 | /eng/ 별도 페이지 | i18next 실시간 전환 |
| 부서 | 외부 도메인 분산 | 통합 페이지 |
| 관리 | FTP + WP 대시보드 | 자체 관리자 패널 |
| 검색 | WP 기본 검색 | 필터 기반 설교·게시물 검색 |
| 알림 | 없음 | 이메일 알림 시스템 |
| 접근성 | 미흡 | WCAG 2.1 AA 목표 |
| 보안 | 플러그인 취약점 | JWT 인증, 입력 검증, HTTPS |

---

*본 기획서는 okcc.ca 사이트 HTML 소스 분석을 기반으로 작성되었습니다.*
*실제 개발 진행 시 교회 측 요구사항에 따라 내용이 수정될 수 있습니다.*
