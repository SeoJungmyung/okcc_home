import React from 'react';
import { Link } from 'react-router-dom';
import { FiVideo, FiClock, FiFileText, FiBookmark } from 'react-icons/fi';

export default function QuickShortcuts() {
  const shortcuts = [
    { label: '새벽예배 LIVE', icon: <FiVideo />, url: 'https://zoom.us', external: true, color: '#2563eb' },
    { label: '예배시간 안내', icon: <FiClock />, path: '/worship', color: '#0d9488' },
    { label: '이번주 주보', icon: <FiFileText />, path: '/news', color: '#475569' },
    { label: '교회 연혁', icon: <FiBookmark />, path: '/about', color: '#16a34a' },
  ];

  return (
    <div className="shortcuts-grid">
      <style>{`
        .shortcuts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-top: -2rem;
          position: relative;
          z-index: 10;
        }
        .shortcut-card {
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow-md);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          color: #1e293b;
          transition: transform 0.2s;
        }
        .shortcut-card:hover {
          transform: translateY(-4px);
        }
        .shortcut-icon {
          font-size: 1.5rem;
        }
      `}</style>
      {shortcuts.map((sc, i) =>
        sc.external ? (
          <a key={i} href={sc.url} target="_blank" rel="noreferrer" className="shortcut-card">
            <span className="shortcut-icon" style={{ color: sc.color }}>{sc.icon}</span>
            <span>{sc.label}</span>
          </a>
        ) : (
          <Link key={i} to={sc.path} className="shortcut-card">
            <span className="shortcut-icon" style={{ color: sc.color }}>{sc.icon}</span>
            <span>{sc.label}</span>
          </Link>
        )
      )}
    </div>
  );
}
