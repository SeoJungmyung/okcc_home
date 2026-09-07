/**
 * Post 모델 - 게시글/공지사항 DB 연동
 */
const db = require('../config/db');

class Post {
  static async findAll({ category_id, limit = 10, offset = 0 }) {
    let query = db('posts').orderBy('created_at', 'desc');
    if (category_id) query = query.where({ category_id });
    return query.limit(limit).offset(offset);
  }

  static async findById(id) {
    return db('posts').where({ id }).first();
  }

  static async incrementView(id) {
    return db('posts').where({ id }).increment('view_count', 1);
  }
}

module.exports = Post;
