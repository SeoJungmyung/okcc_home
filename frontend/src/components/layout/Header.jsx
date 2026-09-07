import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border-color);
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 72px;
        }
        .logo-area {
          display: flex;
          flex-direction: column;
        }
        .logo-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-color);
          letter-spacing: -0.5px;
        }
        .logo-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .auth-btn {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.875rem;
          color: var(--primary-color);
          font-weight: 600;
        }
        .menu-toggle {
          display: none;
          background: none;
          font-size: 1.5rem;
          color: var(--text-main);
        }
        @media (max-width: 900px) {
          .menu-toggle { display: block; }
        }
      `}</style>
      <div className="container header-inner">
        <Link to="/" className="logo-area">
          <span className="logo-title">오타와한인교회</span>
          <span className="logo-sub">Ottawa Korean Community Church</span>
        </Link>
        <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="header-actions">
          <Link to="/auth" className="auth-btn">
            <FiUser /> 로그인
          </Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
