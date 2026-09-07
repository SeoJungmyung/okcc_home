import React from 'react';

export default function NewFamilyStep() {
  const steps = [
    { num: '01', title: '예배 참석', desc: '주일 오후 2시 BUC 본당 예배에 참석합니다.' },
    { num: '02', title: '새가족 등록', desc: '안내위원의 안내를 받아 등록 카드를 작성합니다.' },
    { num: '03', title: '새가족 공부반', desc: '4주간의 기초 신앙 안내 및 교회 소개 과정을 거칩니다.' },
    { num: '04', title: '구역 배정', desc: '성도의 교제를 위해 각 연령/지역별 소그룹에 참여합니다.' },
  ];

  return (
    <div className="steps-container">
      <style>{`
        .steps-container {
          background: #eff6ff;
          padding: 2rem;
          border-radius: var(--radius);
        }
        .step-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .step-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #bfdbfe;
        }
        .step-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-color);
        }
      `}</style>
      <h3 style={{ color: 'var(--primary-color)' }}>새교우 등록 절차</h3>
      <div className="step-grid">
        {steps.map((st, i) => (
          <div key={i} className="step-card">
            <span className="step-num">{st.num}</span>
            <h4 style={{ margin: '0.5rem 0' }}>{st.title}</h4>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>{st.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
