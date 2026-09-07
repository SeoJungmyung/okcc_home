import React from 'react';

export default function SundaySchedule() {
  const sundayServices = [
    { name: '사역자예배', time: '오전 9:00', place: '온라인 (Zoom)', badge: 'Zoom' },
    { name: '주일 대예배', time: '오후 2:00', place: 'BUC 본당 (대면 + 라이브)', badge: 'YouTube Live' },
    { name: '영아유치부 (Ainos)', time: '오후 2:00', place: 'BUC 강당 (1~5세)' },
    { name: '아동부 (Philoi)', time: '오후 1:45', place: 'BFCRC (1~6학년)' },
    { name: '청소년부 (Youth)', time: '오후 1:45', place: 'BFCRC (7~12학년)' },
    { name: '청년부 (Bahuri)', time: '오후 4:10', place: 'BUC 강당' },
    { name: 'Mosaic (EM 영어예배)', time: '오후 4:10', place: 'BUC 본당' },
  ];

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>주일예배 시간표</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {sundayServices.map((srv, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9' }}>
            <div>
              <strong>{srv.name}</strong>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{srv.place}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 600 }}>{srv.time}</span>
              {srv.badge && <span className="badge badge-live">{srv.badge}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
