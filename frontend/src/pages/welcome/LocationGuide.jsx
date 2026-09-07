import React from 'react';
import { FiMapPin, FiNavigation } from 'react-icons/fi';

export default function LocationGuide() {
  return (
    <div className="location-card">
      <style>{`
        .location-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius);
          margin-bottom: 2rem;
          border: 1px solid var(--border-color);
        }
        .location-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }
        .map-wrapper {
          height: 250px;
          background: #e2e8f0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          margin-top: 1rem;
        }
      `}</style>
      <div className="location-header">
        <FiMapPin /> 오시는 길 & 주차 안내
      </div>
      <p><strong>주소:</strong> 3013 Jockvale Rd. K2J 4E4 (Barrhaven United Church 본당)</p>
      <p style={{ marginTop: '0.5rem', color: '#64748b' }}>
        * 교회 건물 앞 및 인근 공용 주차장을 무료로 이용하실 수 있습니다.
      </p>
      <div className="map-wrapper">
        <FiNavigation style={{ marginRight: '0.5rem' }} /> Google Map 지도 연동 영역
      </div>
    </div>
  );
}
