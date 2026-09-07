import React from 'react';

export default function WeekdaySchedule() {
  const weekdayServices = [
    { name: '평일 새벽기도회', time: '화~금 오전 6:00', place: '온라인 Zoom' },
    { name: '토요 새벽기도회', time: '토 오전 6:00', place: 'BUC 본당' },
    { name: '수요예배 및 성경강좌', time: '수 오후 7:30', place: 'BUC 본당 + 라이브' },
    { name: '금요기도회', time: '매월 셋째 주 금 오후 7:30', place: 'BUC 본당' },
    { name: '구역 모임', time: '구역별 정기 모임', place: '각 가정' },
  ];

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>평일 및 특별 집회</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {weekdayServices.map((srv, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9' }}>
            <div>
              <strong>{srv.name}</strong>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{srv.place}</div>
            </div>
            <span style={{ fontWeight: 600 }}>{srv.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
