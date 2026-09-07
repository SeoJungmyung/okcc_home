/**
 * Bulletin 모델 - 주보 DB 연동
 */
const db = require('../config/db');

class Bulletin {
  static async findAll({ limit = 10, offset = 0 }) {
    return db('bulletins').orderBy('service_date', 'desc').limit(limit).offset(offset);
  }

  static async getLatest() {
    return db('bulletins').orderBy('service_date', 'desc').first();
  }

  static async create(data) {
    const [id] = await db('bulletins').insert(data);
    return db('bulletins').where({ id }).first();
  }
}

module.exports = Bulletin;
