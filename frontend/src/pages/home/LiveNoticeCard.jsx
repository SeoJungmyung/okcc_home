import React from 'react';
import { FiRadio } from 'react-icons/fi';

export default function LiveNoticeCard() {
  return (
    <div className="live-notice-card">
      <style>{`
        .live-notice-card {
          background: white;
          border: 1px solid var(--border-color);
          border-left: 5px solid #ef4444;
          padding: 1.25rem;
          border-radius: var(--radius);
          margin: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .live-info h3 {
          font-size: 1.1rem;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .live-link {
          background: #ef4444;
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
        }
      `}</style>
      <div className="live-info">
        <h3><FiRadio style={{ color: '#ef4444' }} /> 이번 주일예배 안내</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          매주 주일 오후 2시 BUC 본당 예배 및 YouTube 실시간 라이브 스트리밍
        </p>
      </div>
      <a href="https://youtube.com/okcclivestream/live" target="_blank" rel="noreferrer" className="live-link">
        생방송 참여하기
      </a>
    </div>
  );
}
