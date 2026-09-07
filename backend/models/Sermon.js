/**
 * Sermon 모델 - 설교 DB 연동
 */
const db = require('../config/db');

class Sermon {
  static async findAll({ service_type, limit = 10, offset = 0 }) {
    let query = db('sermons').orderBy('sermon_date', 'desc');
    if (service_type) query = query.where({ service_type });
    return query.limit(limit).offset(offset);
  }

  static async count(service_type) {
    let query = db('sermons');
    if (service_type) query = query.where({ service_type });
    const res = await query.count('* as total').first();
    return res.total;
  }

  static async findById(id) {
    return db('sermons').where({ id }).first();
  }

  static async create(data) {
    const [id] = await db('sermons').insert(data);
    return this.findById(id);
  }
}

module.exports = Sermon;
