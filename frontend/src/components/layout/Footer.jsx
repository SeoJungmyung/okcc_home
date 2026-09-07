import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiMail, FiPhone, FiYoutube, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer {
          background: #0f172a;
          color: #94a3b8;
          padding: 3rem 0 2rem;
          margin-top: 4rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-col h4 {
          color: #f8fafc;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .footer-links li {
          list-style: none;
          margin-bottom: 0.5rem;
        }
        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          font-size: 1.4rem;
        }
        .footer-bottom {
          border-top: 1px solid #1e293b;
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.85rem;
        }
      `}</style>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>오타와한인교회</h4>
            <p>다양한 배경의 사람들이 그리스도 안에서 하나되는 신앙 공동체입니다.</p>
            <div className="social-links">
              <a href="https://youtube.com/okcclivestream" target="_blank" rel="noreferrer"><FiYoutube /></a>
              <a href="https://facebook.com/ottawakorean" target="_blank" rel="noreferrer"><FiFacebook /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>교회 정보</h4>
            <ul className="footer-contact">
              <li><FiMapPin /> 3013 Jockvale Rd. K2J 4E4</li>
              <li><FiMail /> contact@okcc.ca</li>
              <li><FiPhone /> 613.236.4442</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>바로가기</h4>
            <ul className="footer-links">
              <li><Link to="/worship">예배 시간표</Link></li>
              <li><Link to="/news">소식지 (주보)</Link></li>
              <li><Link to="/bible">공동체 성경통독</Link></li>
              <li><Link to="/about">교회 연혁</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ottawa Korean Community Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
