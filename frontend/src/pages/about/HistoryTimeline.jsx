import React from 'react';

export default function HistoryTimeline() {
  const events = [
    { year: '1976', title: '교회 창립 예배', desc: '오타와 지역 한인 디아스포라를 위한 첫 예배 시작' },
    { year: '2000', title: '부서 사역 확장', desc: '영아유치부 및 EM(Mosaic) 다문화 예배 사역 분립' },
    { year: '2024', title: '새예배당 건축 추진', desc: 'Jockvale Rd 부지 새예배당 기공 및 공동체 도약' },
  ];

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>교회 연혁</h3>
      <div style={{ borderLeft: '2px solid #e2e8f0', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
        {events.map((ev, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', position: 'relative' }}>
            <span style={{ fontWeight: 700, color: 'var(--secondary-color)' }}>{ev.year}</span>
            <h4 style={{ margin: '0.25rem 0' }}>{ev.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{ev.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
