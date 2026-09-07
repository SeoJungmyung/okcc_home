import React from 'react';
import PopupManager from './PopupManager';

export default function AdminDashboard() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">관리자 대시보드</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>총 등록 성도</span>
          <h2 style={{ color: 'var(--primary-color)' }}>128명</h2>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>설교 아카이브</span>
          <h2 style={{ color: 'var(--secondary-color)' }}>342편</h2>
        </div>
      </div>
      <PopupManager />
    </div>
  );
}
