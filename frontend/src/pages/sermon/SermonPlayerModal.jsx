import React from 'react';
import { FiX } from 'react-icons/fi';

export default function SermonPlayerModal({ sermon, onClose }) {
  if (!sermon) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
      <div style={{ background: 'white', width: '100%', maxWidth: '720px', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: 0 }}>{sermon.title}</h3>
          <button onClick={onClose} style={{ background: 'none', fontSize: '1.5rem' }}><FiX /></button>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <div style={{ height: '360px', background: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            YouTube 비디오 플레이어 영역
          </div>
          <div style={{ marginTop: '1rem', color: '#475569' }}>
            <p><strong>본문:</strong> {sermon.scripture || '성경 본문'}</p>
            <p><strong>설교자:</strong> {sermon.preacher}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
