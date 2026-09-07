import React from 'react';
import ChurchCalendar from './ChurchCalendar';
import PrayerRequestBoard from './PrayerRequestBoard';

export default function CommunityPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">커뮤니티</h1>
      <ChurchCalendar />
      <PrayerRequestBoard />
    </div>
  );
}
