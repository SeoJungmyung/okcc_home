const Post = require('../models/Post');

module.exports = {
  getPosts: async (req, res, next) => {
    try {
      const { category_id, page = 1, limit = 10 } = req.query;
      const posts = await Post.findAll({ category_id, limit: Number(limit), offset: (page - 1) * limit });
      res.json({ data: posts });
    } catch (err) { next(err); }
  },
  getPostById: async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ error: '게시글이 없습니다.' });
      res.json({ data: post });
    } catch (err) { next(err); }
  },
  createPost: async (req, res) => res.status(201).json({ message: '작성 완료' }),
  updatePost: async (req, res) => res.json({ message: '수정 완료' }),
  deletePost: async (req, res) => res.json({ message: '삭제 완료' }),
  incrementView: async (req, res, next) => {
    try {
      await Post.incrementView(req.params.id);
      res.json({ success: true });
    } catch (err) { next(err); }
  }
};
