import React from 'react';

export default function MonthlyVerseCard() {
  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--primary-color)', marginBottom: '2rem' }}>
      <span className="badge badge-primary">이달의 암송 성구</span>
      <h3 style={{ marginTop: '0.75rem', color: '#0f172a' }}>마태복음 6:6</h3>
      <p style={{ marginTop: '0.5rem', color: '#334155', fontStyle: 'italic' }}>
        "너는 기도할 때에 네 골방에 들어가 문을 닫고 은밀한 중에 계신 네 아버지께 기도하라 은밀한 중에 보시는 네 아버지께서 갚으시리라"
      </p>
      <p style={{ marginTop: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
        "But when you pray, go into your room, close the door and pray to your Father, who is unseen."
      </p>
    </div>
  );
}
