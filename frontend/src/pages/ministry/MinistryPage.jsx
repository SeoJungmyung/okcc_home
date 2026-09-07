import React, { useState } from 'react';
import MinistryCards from './MinistryCards';
import MinistryProgramInfo from './MinistryProgramInfo';

export default function MinistryPage() {
  const [activeTab, setActiveTab] = useState('ainos');

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">부서 사역</h1>
      <MinistryCards activeTab={activeTab} setActiveTab={setActiveTab} />
      <MinistryProgramInfo activeTab={activeTab} />
    </div>
  );
}
