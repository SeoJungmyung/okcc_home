import React from 'react';
import { FiPlayCircle, FiCalendar, FiUser } from 'react-icons/fi';

export default function SermonList({ sermons, onSelect }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
      {sermons.map((sm) => (
        <div
          key={sm.id}
          onClick={() => onSelect(sm)}
          style={{ background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border-color)', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
        >
          <div style={{ height: '160px', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '3rem' }}>
            <FiPlayCircle />
          </div>
          <div style={{ padding: '1.25rem' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>{sm.type}</span>
            <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>{sm.title}</h4>
            <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <span><FiUser /> {sm.preacher}</span>
              <span><FiCalendar /> {sm.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
