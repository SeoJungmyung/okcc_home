import React from 'react';

export default function PopupManager() {
  return (
    <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', marginTop: '1.5rem' }}>
      <h3>공지 팝업 설정 관리</h3>
      <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0.5rem 0 1rem' }}>
        메인화면에 노출될 팝업(부고, 건의함, 행사 홍보)을 등록 및 활성화합니다.
      </p>
      <button style={{ background: 'var(--primary-color)', color: 'white', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.9rem' }}>
        + 새 팝업 등록
      </button>
    </div>
  );
}
