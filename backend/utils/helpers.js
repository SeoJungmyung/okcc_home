/**
 * 공통 유틸리티 함수
 */

/** 페이지네이션 파라미터 파싱 */
const parsePagination = (query) => {
  const page  = Math.max(1, parseInt(query.page  || '1'));
  const limit = Math.min(50, parseInt(query.limit || '10'));
  const offset = (page - 1) * limit;
  return { page, limit, offset };
};

/** 페이지네이션 응답 형식 */
const paginatedResponse = (data, total, page, limit) => ({
  data,
  pagination: {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    hasNext: page * limit < total,
    hasPrev: page > 1,
  },
});

/** 슬러그 생성 */
const toSlug = (str) =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

/** 날짜 포맷 (YYYY-MM-DD) */
const formatDate = (date) =>
  new Date(date).toISOString().split('T')[0];

module.exports = { parsePagination, paginatedResponse, toSlug, formatDate };
