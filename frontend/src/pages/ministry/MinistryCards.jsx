import React from 'react';

export default function MinistryCards({ activeTab, setActiveTab }) {
  const departments = [
    { id: 'ainos', name: '영아유치부 (Ainos)', age: '1~5세' },
    { id: 'philoi', name: '아동부 (Philoi)', age: '1~6학년' },
    { id: 'youth', name: '청소년부 (Youth)', age: '7~12학년' },
    { id: 'bahuri', name: '청년부 (Bahuri)', age: '청년/대학생' },
    { id: 'mosaic', name: 'Mosaic (EM)', age: '다문화 영어예배' },
  ];

  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
      {departments.map((dept) => (
        <button
          key={dept.id}
          onClick={() => setActiveTab(dept.id)}
          style={{
            padding: '0.75rem 1.25rem',
            borderRadius: '9999px',
            fontWeight: 600,
            background: activeTab === dept.id ? 'var(--primary-color)' : 'white',
            color: activeTab === dept.id ? 'white' : '#475569',
            border: '1px solid var(--border-color)',
          }}
        >
          {dept.name}
        </button>
      ))}
    </div>
  );
}
