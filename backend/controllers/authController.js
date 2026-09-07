const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name_ko, email, password, phone } = req.body;
      const existing = await User.findByEmail(email);
      if (existing) return res.status(400).json({ error: '이미 등록된 이메일입니다.' });
      
      const salt = await bcrypt.genSalt(10);
      const password_hash = await bcrypt.hash(password, salt);
      const user = await User.create({ name_ko, email, password_hash, phone });
      
      res.status(201).json({ message: '회원가입 완료', user: { id: user.id, email: user.email } });
    } catch (err) { next(err); }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findByEmail(email);
      if (!user) return res.status(401).json({ error: '이메일 또는 비밀번호가 잘못되었습니다.' });
      
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) return res.status(401).json({ error: '이메일 또는 비밀번호가 잘못되었습니다.' });
      
      const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: user.id, name_ko: user.name_ko, email: user.email, role: user.role } });
    } catch (err) { next(err); }
  },
  getMe: async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      delete user.password_hash;
      res.json({ user });
    } catch (err) { next(err); }
  },
  updateMe: async (req, res, next) => {
    try {
      const user = await User.update(req.user.id, req.body);
      res.json({ message: '정보가 수정되었습니다.', user });
    } catch (err) { next(err); }
  },
  logout: async (req, res) => res.json({ message: '로그아웃 되었습니다.' }),
  forgotPassword: async (req, res) => res.json({ message: '재설정 이메일을 발송했습니다.' }),
  resetPassword: async (req, res) => res.json({ message: '비밀번호가 변경되었습니다.' })
};
