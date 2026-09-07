import React from 'react';
import HeroBanner from './HeroBanner';
import QuickShortcuts from './QuickShortcuts';
import LiveNoticeCard from './LiveNoticeCard';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroBanner />
      <div className="container">
        <QuickShortcuts />
        <LiveNoticeCard />
        
        <section style={{ margin: '4rem 0' }}>
          <h2 className="section-title">말씀과 묵상</h2>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border-color)',
            textAlign: 'center'
          }}>
            <p style={{ fontStyle: 'italic', color: '#475569', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              "너는 기도할 때에 네 골방에 들어가 문을 닫고 은밀한 중에 계신 네 아버지께 기도하라"
            </p>
            <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>- 마태복음 6:6 -</span>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/bible" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
                성경통독 & 묵상캘린더 보러가기 →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
