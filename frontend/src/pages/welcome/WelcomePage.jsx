import React from 'react';
import GreetingLetter from './GreetingLetter';
import LocationGuide from './LocationGuide';
import NewFamilyStep from './NewFamilyStep';

export default function WelcomePage() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1 className="section-title">환영합니다</h1>
      <GreetingLetter />
      <LocationGuide />
      <NewFamilyStep />
    </div>
  );
}
