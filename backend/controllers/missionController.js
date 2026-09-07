module.exports = {
  getMissionNews: async (req, res) => res.json({ data: [] }),
  getMissionNewsById: async (req, res) => res.json({ data: null }),
  createMissionNews: async (req, res) => res.status(201).json({ message: '선교 소식 등록 완료' }),
  getMissionTrips: async (req, res) => res.json({ data: [] }),
  getMissionTripById: async (req, res) => res.json({ data: null }),
  createMissionTrip: async (req, res) => res.status(201).json({ message: '단기선교 등록 완료' })
};
