import React from 'react';

export default function MissionReportList() {
  const reports = [
    { title: '2026 원주민 여름 단기선교', date: '2026-07-24', author: '선교팀', summary: '캐나다 원주민 보호구역을 방문하여 VBS 및 캠프 봉사를 진행했습니다.' },
    { title: '상처와 화해 사이 (단기선교 간증)', date: '2026-07-12', author: '이하영 성도', summary: '선교지에서 만난 아이들과 주민들을 통해 발견한 하나님의 은혜를 나눕니다.' },
  ];

  return (
    <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
      {reports.map((r, i) => (
        <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{r.date} | {r.author}</span>
          <h3 style={{ margin: '0.4rem 0', color: 'var(--primary-color)' }}>{r.title}</h3>
          <p style={{ color: '#475569' }}>{r.summary}</p>
        </div>
      ))}
    </div>
  );
}
