import React from 'react';
import BulletinList from './BulletinList';
import FeedbackModal from './FeedbackModal';

export default function NewsPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">교회 소식 & 주보</h1>
      <BulletinList />
      <FeedbackModal />
    </div>
  );
}
