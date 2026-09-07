/**
 * User 모델 - 사용자 DB 연동
 */
const db = require('../config/db');

class User {
  static async findById(id) {
    return db('users').where({ id }).first();
  }

  static async findByEmail(email) {
    return db('users').where({ email }).first();
  }

  static async create(userData) {
    const [id] = await db('users').insert(userData);
    return this.findById(id);
  }

  static async update(id, updates) {
    await db('users').where({ id }).update(updates);
    return this.findById(id);
  }

  static async delete(id) {
    return db('users').where({ id }).del();
  }
}

module.exports = User;
