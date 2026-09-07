import React, { useState } from 'react';
import SermonSearchBar from './SermonSearchBar';
import SermonList from './SermonList';
import SermonPlayerModal from './SermonPlayerModal';

export default function SermonPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedSermon, setSelectedSermon] = useState(null);

  const sampleSermons = [
    { id: 1, title: '산 위에 세운 공동체', preacher: '이도윤 전도사', date: '2026-09-02', type: '수요예배', scripture: '마태복음 5:13-16' },
    { id: 2, title: '주의 은혜를 기억하라', preacher: '강석제 담임목사', date: '2026-08-30', type: '주일예배', scripture: '시편 103:1-5' },
    { id: 3, title: '믿음의 반석 위에', preacher: '강석제 담임목사', date: '2026-08-23', type: '주일예배', scripture: '마태복음 7:24-27' },
  ];

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">설교 & 미디어</h1>
      <SermonSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />
      <SermonList sermons={sampleSermons} onSelect={setSelectedSermon} />
      <SermonPlayerModal sermon={selectedSermon} onClose={() => setSelectedSermon(null)} />
    </div>
  );
}
