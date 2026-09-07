module.exports = {
  getPrayers: async (req, res) => res.json({ data: [] }),
  getPrayerById: async (req, res) => res.json({ data: null }),
  createPrayer: async (req, res) => res.status(201).json({ message: '기도제목 등록 완료' }),
  updatePrayer: async (req, res) => res.json({ message: '기도제목 수정 완료' }),
  deletePrayer: async (req, res) => res.json({ message: '기도제목 삭제 완료' }),
  markAsAnswered: async (req, res) => res.json({ message: '응답 표시 완료' })
};
