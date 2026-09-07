import React from 'react';
import MonthlyVerseCard from './MonthlyVerseCard';
import DevotionCalendar from './DevotionCalendar';
import ReadingPlanDownload from './ReadingPlanDownload';

export default function BiblePage() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">공동체 성경읽기</h1>
      <MonthlyVerseCard />
      <DevotionCalendar />
      <ReadingPlanDownload />
    </div>
  );
}
