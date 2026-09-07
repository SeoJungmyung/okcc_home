import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <style>{`
        .hero-banner {
          background: linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.75)),
                      url('https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80') center/cover;
          color: white;
          padding: 5rem 0 6rem;
          text-align: center;
          border-radius: 0 0 24px 24px;
        }
        .hero-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1.25rem;
          display: inline-block;
        }
        .hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .hero-desc {
          font-size: 1.15rem;
          max-width: 680px;
          margin: 0 auto 2rem;
          color: #e2e8f0;
        }
        .hero-btn {
          background: var(--primary-color);
          color: white;
          padding: 0.85rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: background 0.2s;
        }
        .hero-btn:hover {
          background: var(--primary-hover);
        }
      `}</style>
      <div className="container">
        <span className="hero-badge">캐나다 수도 오타와에 세워진 신앙 공동체</span>
        <h1 className="hero-title">그리스도 안에서 하나되는 교회</h1>
        <p className="hero-desc">
          오타와한인교회(OKCC)는 다양한 언어와 문화적 배경의 성도들이 모여 하나님 나라를 함께 섬기는 믿음의 가족입니다.
        </p>
        <Link to="/welcome" className="hero-btn">처음 오셨나요? 환영합니다</Link>
      </div>
    </section>
  );
}
