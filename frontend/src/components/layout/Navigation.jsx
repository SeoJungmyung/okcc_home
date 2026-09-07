import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/welcome', label: '환영합니다' },
  { path: '/about', label: '교회소개' },
  { path: '/worship', label: '예배안내' },
  { path: '/sermon', label: '말씀·미디어' },
  { path: '/bible', label: '공동체성경' },
  { path: '/ministry', label: '부서사역' },
  { path: '/mission', label: '선교' },
  { path: '/news', label: '교회소식' },
  { path: '/community', label: '커뮤니티' },
];

export default function Navigation({ isOpen, onClose }) {
  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <style>{`
        .nav-menu {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .nav-link {
          font-weight: 500;
          color: #334155;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary-color);
          background: #eff6ff;
        }
        @media (max-width: 900px) {
          .nav-menu {
            display: none;
            flex-direction: column;
            width: 100%;
          }
          .nav-menu.open {
            display: flex;
            padding: 1rem 0;
          }
        }
      `}</style>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={onClose}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
