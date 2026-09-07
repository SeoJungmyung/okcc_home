import React from 'react';

export default function DevotionCalendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>공동체 성경묵상 캘린더</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
        {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
          <div key={d} style={{ fontWeight: 700, padding: '0.5rem 0', color: '#64748b' }}>{d}</div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            style={{
              padding: '0.75rem 0',
              border: '1px solid #f1f5f9',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 500,
              background: day === new Date().getDate() ? '#dbeafe' : 'white'
            }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
