import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '440px' }}>
      <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
          {isLogin ? '성도 로그인' : '새교우 회원가입'}
        </h2>
        {isLogin ? (
          <LoginForm onSwitch={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitch={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}
