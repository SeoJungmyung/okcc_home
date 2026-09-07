import React from 'react';
import { FiCalendar } from 'react-icons/fi';

export default function ChurchCalendar() {
  const events = [
    { title: '새예배당 완공 기념 입당예배', date: '2026-10-18', place: '새본당' },
    { title: '가을 전교인 수련회', date: '2026-10-03 ~ 10-04', place: '캠프장' },
    { title: '원주민 단기선교 보고회', date: '2026-09-13', place: 'BUC 본당' },
  ];

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <FiCalendar /> 주요 행사 캘린더
      </h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {events.map((ev, i) => (
          <div key={i} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid var(--primary-color)' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{ev.date} | {ev.place}</span>
            <h4 style={{ margin: '0.25rem 0', color: '#1e293b' }}>{ev.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
