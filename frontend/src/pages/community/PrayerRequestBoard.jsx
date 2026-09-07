import React from 'react';

export default function PrayerRequestBoard() {
  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem' }}>중보 기도 요청</h3>
      <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
        함께 기도하고 싶은 제목이 있으신가요? 목회팀과 중보기도팀이 성도님과 함께 기도합니다.
      </p>
      <button style={{ background: 'var(--secondary-color)', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '6px', fontWeight: 600 }}>
        기도제목 나누기
      </button>
    </div>
  );
}
