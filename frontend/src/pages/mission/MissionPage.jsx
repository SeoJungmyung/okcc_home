import React from 'react';
import MissionReportList from './MissionReportList';
import ShortTermTripNotice from './ShortTermTripNotice';

export default function MissionPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">선교 & 봉사</h1>
      <MissionReportList />
      <ShortTermTripNotice />
    </div>
  );
}
