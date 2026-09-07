module.exports = {
  getAlbums: async (req, res) => res.json({ data: [] }),
  getAlbumById: async (req, res) => res.json({ data: null, photos: [] }),
  createAlbum: async (req, res) => res.status(201).json({ message: '앨범 생성 완료' }),
  deleteAlbum: async (req, res) => res.json({ message: '앨범 삭제 완료' }),
  uploadPhotos: async (req, res) => res.status(201).json({ message: '사진 업로드 완료' })
};
