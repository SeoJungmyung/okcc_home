import React from 'react';
import SundaySchedule from './SundaySchedule';
import WeekdaySchedule from './WeekdaySchedule';

export default function WorshipPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">예배 안내</h1>
      <SundaySchedule />
      <WeekdaySchedule />
    </div>
  );
}
