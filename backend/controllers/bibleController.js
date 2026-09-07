module.exports = {
  getTodayVerse: async (req, res) => {
    res.json({
      date: new Date().toISOString().split('T')[0],
      reference: '마태복음 6:6',
      text_ko: '너는 기도할 때에 네 골방에 들어가 문을 닫고 은밀한 중에 계신 네 아버지께 기도하라 은밀한 중에 보시는 네 아버지께서 갚으시리라',
      text_en: 'But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you.'
    });
  },
  getMemorizationVerses: async (req, res) => res.json({ data: [] }),
  getMemorizationByMonth: async (req, res) => res.json({ month: req.params.month, data: null }),
  getReadingPlans: async (req, res) => res.json({ data: [] }),
  getReadingPlanById: async (req, res) => res.json({ data: null }),
  createReadingPlan: async (req, res) => res.status(201).json({ message: '생성 완료' }),
  getMyProgress: async (req, res) => res.json({ progress: [] }),
  updateProgress: async (req, res) => res.json({ message: '진도 체크 완료' })
};
