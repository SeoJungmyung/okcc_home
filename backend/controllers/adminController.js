module.exports = {
  getDashboard: async (req, res) => res.json({ stats: { members: 0, sermons: 0, posts: 0 } }),
  getUsers: async (req, res) => res.json({ users: [] }),
  getUserById: async (req, res) => res.json({ user: null }),
  updateUser: async (req, res) => res.json({ message: '사용자 수정 완료' }),
  changeUserRole: async (req, res) => res.json({ message: '권한 변경 완료' }),
  deleteUser: async (req, res) => res.json({ message: '사용자 삭제 완료' }),
  getSettings: async (req, res) => res.json({ settings: {} }),
  updateSettings: async (req, res) => res.json({ message: '설정 저장 완료' }),
  getPopups: async (req, res) => res.json({ popups: [] }),
  createPopup: async (req, res) => res.status(201).json({ message: '팝업 등록 완료' }),
  updatePopup: async (req, res) => res.json({ message: '팝업 수정 완료' }),
  deletePopup: async (req, res) => res.json({ message: '팝업 삭제 완료' })
};
