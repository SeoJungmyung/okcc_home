import React from 'react';
import { FiDownload } from 'react-icons/fi';

export default function ReadingPlanDownload() {
  return (
    <div style={{ background: '#f8fafc', border: '1px solid var(--border-color)', padding: '2rem', borderRadius: 'var(--radius)' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>2026 공동체 성경통독표</h3>
      <p style={{ color: '#64748b', marginBottom: '1.25rem' }}>
        「그리스도 중심 성경읽기: 리딩 지저스」로 1년 동안 성경 전체를 완독해보세요.
      </p>
      <button style={{ background: 'var(--secondary-color)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        <FiDownload /> 통독표 PDF 다운로드
      </button>
    </div>
  );
}
