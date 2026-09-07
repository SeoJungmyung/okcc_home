import React from 'react';

export default function FeedbackModal() {
  return (
    <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: 'var(--radius)', border: '1px dashed #cbd5e1' }}>
      <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>교회 발전 건의함</h3>
      <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
        성도님들의 따뜻한 의견과 건의사항을 목회진과 당회에 전달해 드립니다.
      </p>
      <button style={{ background: 'var(--primary-color)', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '6px', fontWeight: 600 }}>
        온라인 의견 작성하기
      </button>
    </div>
  );
}
