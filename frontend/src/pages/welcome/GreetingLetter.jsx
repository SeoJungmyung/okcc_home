import React from 'react';

export default function GreetingLetter() {
  return (
    <div className="greeting-card">
      <style>{`
        .greeting-card {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          margin-bottom: 2.5rem;
          border-left: 4px solid var(--primary-color);
        }
        .greeting-card h2 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        .greeting-card p {
          color: #475569;
          margin-bottom: 1rem;
          line-height: 1.8;
        }
      `}</style>
      <h2>새교우 여러분을 주님의 이름으로 환영합니다!</h2>
      <p>
        오타와한인교회 홈페이지를 찾아주신 여러분께 진심으로 감사를 드립니다.
        우리 교회는 말씀 안에서 영적 쉼을 얻고, 삶의 참된 의미를 발견해가는 따뜻한 공동체입니다.
      </p>
      <p>
        오타와에 처음 정착하셨거나 신앙의 보금자리를 찾고 계신다면, 주저하지 마시고 함께 예배의 기쁨을 나누시길 바랍니다.
      </p>
      <div style={{ textAlign: 'right', fontWeight: 600, color: 'var(--text-main)' }}>
        담임목사 강석제
      </div>
    </div>
  );
}
