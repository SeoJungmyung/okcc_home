module.exports = {
  getEvents: async (req, res) => res.json({ data: [] }),
  getUpcomingEvents: async (req, res) => res.json({ data: [] }),
  getEventById: async (req, res) => res.json({ data: null }),
  createEvent: async (req, res) => res.status(201).json({ message: '이벤트 등록 완료' }),
  updateEvent: async (req, res) => res.json({ message: '이벤트 수정 완료' }),
  deleteEvent: async (req, res) => res.json({ message: '이벤트 삭제 완료' })
};
