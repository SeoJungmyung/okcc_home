import React from 'react';

export default function ShortTermTripNotice() {
  return (
    <div style={{ background: '#fef3c7', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid #fde68a' }}>
      <h3 style={{ color: '#b45309', marginBottom: '0.5rem' }}>단기선교 참가 신청 안내</h3>
      <p style={{ color: '#78350f', marginBottom: '1rem' }}>
        국내외 선교지를 품고 복음을 전하는 귀한 발걸음에 성도님들의 많은 동참과 기도를 부탁드립니다.
      </p>
      <button style={{ background: '#d97706', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '6px', fontWeight: 600 }}>
        온라인 참가 문의
      </button>
    </div>
  );
}
