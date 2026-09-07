const Bulletin = require('../models/Bulletin');

module.exports = {
  getBulletins: async (req, res, next) => {
    try {
      const data = await Bulletin.findAll({});
      res.json({ data });
    } catch (err) { next(err); }
  },
  getLatestBulletin: async (req, res, next) => {
    try {
      const data = await Bulletin.getLatest();
      res.json({ data });
    } catch (err) { next(err); }
  },
  getBulletinById: async (req, res) => res.json({ data: null }),
  createBulletin: async (req, res) => res.status(201).json({ message: '등록 완료' }),
  deleteBulletin: async (req, res) => res.json({ message: '삭제 완료' })
};
