const Sermon = require('../models/Sermon');

module.exports = {
  getSermons: async (req, res, next) => {
    try {
      const { service_type, page = 1, limit = 10 } = req.query;
      const offset = (page - 1) * limit;
      const sermons = await Sermon.findAll({ service_type, limit: Number(limit), offset: Number(offset) });
      const total = await Sermon.count(service_type);
      res.json({ data: sermons, pagination: { total, page: Number(page), limit: Number(limit) } });
    } catch (err) { next(err); }
  },
  getLatestSermons: async (req, res, next) => {
    try {
      const sermons = await Sermon.findAll({ limit: 3 });
      res.json({ data: sermons });
    } catch (err) { next(err); }
  },
  getSermonById: async (req, res, next) => {
    try {
      const sermon = await Sermon.findById(req.params.id);
      if (!sermon) return res.status(404).json({ error: '설교를 찾을 수 없습니다.' });
      res.json({ data: sermon });
    } catch (err) { next(err); }
  },
  createSermon: async (req, res, next) => {
    try {
      const sermon = await Sermon.create(req.body);
      res.status(201).json({ message: '설교가 등록되었습니다.', data: sermon });
    } catch (err) { next(err); }
  },
  updateSermon: async (req, res) => res.json({ message: '수정되었습니다.' }),
  deleteSermon: async (req, res) => res.json({ message: '삭제되었습니다.' })
};
