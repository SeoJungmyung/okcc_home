import React from 'react';

const ministryDetails = {
  ainos: { title: '영아유치부 (Ainos)', time: '주일 오후 2시 BUC 강당', target: '1~5세 미취학 아동', desc: '하나님의 말씀을 찬양과 성경 암송카드를 통해 즐겁게 배우며 믿음의 기초를 세워갑니다.' },
  philoi: { title: '아동부 (Philoi)', time: '주일 오후 1:45 BFCRC', target: '1~6학년 초등학생', desc: '신앙의 좋은 친구(Philoi)가 되어 예수님의 사랑을 실천하고 예배의 기쁨을 알아갑니다.' },
  youth: { title: '청소년부 (Youth)', time: '주일 오후 1:45 BFCRC', target: '7~12학년 중고등부', desc: '이민 사회의 청소년들이 성경적 세계관으로 세상 속에서 건강한 리더로 자라도록 양육합니다.' },
  bahuri: { title: '청년부 (Bahuri)', time: '주일 오후 4:10 BUC 강당', target: '대학생, 청년 직장인', desc: '청년들의 깊이 있는 성도의 교제와 삶의 영성을 세우는 열정적인 청년 공동체입니다.' },
  mosaic: { title: 'Mosaic (English Ministry)', time: 'Sunday 4:10pm BUC Sanctuary', target: 'English Speakers & Multiculture', desc: 'Worshipping God together across cultures and generations in the Ottawa region.' },
};

export default function MinistryProgramInfo({ activeTab }) {
  const info = ministryDetails[activeTab] || ministryDetails.ainos;

  return (
    <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
      <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>{info.title}</h2>
      <p style={{ color: '#64748b', marginBottom: '0.5rem' }}><strong>대상:</strong> {info.target}</p>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}><strong>모임 시간 & 장소:</strong> {info.time}</p>
      <p style={{ color: '#334155', lineHeight: 1.8 }}>{info.desc}</p>
    </div>
  );
}
