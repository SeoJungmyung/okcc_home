import React from 'react';
import { FiDownload, FiFileText } from 'react-icons/fi';

export default function BulletinList() {
  const bulletins = [
    { title: '2026년 9월 첫째주 주보', date: '2026-09-06' },
    { title: '2026년 8월 넷째주 주보', date: '2026-08-30' },
    { title: '2026년 8월 셋째주 주보', date: '2026-08-23' },
  ];

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.25rem' }}>주일 소식지 (주보)</h3>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {bulletins.map((b, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
              <FiFileText color="var(--primary-color)" /> {b.title}
            </span>
            <button style={{ background: '#f1f5f9', color: '#334155', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <FiDownload /> PDF 다운로드
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
