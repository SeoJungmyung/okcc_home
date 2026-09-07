import React from 'react';
import VisionSection from './VisionSection';
import HistoryTimeline from './HistoryTimeline';
import FourLawsIntro from './FourLawsIntro';

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">교회 소개</h1>
      <VisionSection />
      <HistoryTimeline />
      <FourLawsIntro />
    </div>
  );
}
