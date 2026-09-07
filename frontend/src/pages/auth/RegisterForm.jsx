import React, { useState } from 'react';

export default function RegisterForm({ onSwitch }) {
  const [form, setForm] = useState({ name_ko: '', email: '', password: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원가입 요청: ' + form.name_ko);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.9rem' }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>이름</label>
        <input
          type="text"
          required
          value={form.name_ko}
          onChange={(e) => setForm({ ...form, name_ko: e.target.value })}
          style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}
        />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>이메일</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}
        />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>비밀번호</label>
        <input
          type="password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}
        />
      </div>
      <button type="submit" style={{ background: 'var(--secondary-color)', color: 'white', padding: '0.85rem', borderRadius: '6px', fontWeight: 600, marginTop: '0.5rem' }}>
        회원가입 완료
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
        이미 계정이 있으신가요?{' '}
        <span onClick={onSwitch} style={{ color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 600 }}>
          로그인
        </span>
      </p>
    </form>
  );
}
