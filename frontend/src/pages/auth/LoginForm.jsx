import React, { useState } from 'react';

export default function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('로그인 요청: ' + email);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>이메일</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}
        />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>비밀번호</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}
        />
      </div>
      <button type="submit" style={{ background: 'var(--primary-color)', color: 'white', padding: '0.85rem', borderRadius: '6px', fontWeight: 600, marginTop: '0.5rem' }}>
        로그인
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
        계정이 없으신가요?{' '}
        <span onClick={onSwitch} style={{ color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 600 }}>
          회원가입
        </span>
      </p>
    </form>
  );
}
