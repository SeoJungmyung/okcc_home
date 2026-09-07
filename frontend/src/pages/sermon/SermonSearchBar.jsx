import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SermonSearchBar({ searchTerm, setSearchTerm, filter, setFilter }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
        <input
          type="text"
          placeholder="설교 제목, 설교자, 본문 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}
        />
        <FiSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
      </div>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'white' }}
      >
        <option value="all">전체 설교</option>
        <option value="sunday">주일예배</option>
        <option value="wednesday">수요예배</option>
        <option value="special">특별집회</option>
      </select>
    </div>
  );
}
