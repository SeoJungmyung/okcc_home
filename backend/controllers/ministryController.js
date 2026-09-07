module.exports = {
  getMinistries: async (req, res) => res.json({
    data: [
      { id: 1, slug: 'ainos', name_ko: '영아유치부 (Ainos)', age: '1~5세', time: '주일 오후 2시 BUC 강당' },
      { id: 2, slug: 'philoi', name_ko: '아동부 (Philoi)', age: '1~6학년', time: '주일 오후 1:45 BFCRC' },
      { id: 3, slug: 'youth', name_ko: '청소년부 (Youth)', age: '7~12학년', time: '주일 오후 1:45 BFCRC' },
      { id: 4, slug: 'bahuri', name_ko: '청년부 (Bahuri)', age: '청년', time: '주일 오후 4:10 BUC 강당' },
      { id: 5, slug: 'mosaic', name_ko: 'Mosaic (EM 영어예배)', age: '전체', time: 'Sunday 4:10pm BUC Sanctuary' }
    ]
  }),
  getMinistryBySlug: async (req, res) => res.json({ slug: req.params.slug, data: {} }),
  updateMinistry: async (req, res) => res.json({ message: '사역 정보 수정 완료' })
};
