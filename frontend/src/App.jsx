import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// 페이지 컴포넌트 임포트
import HomePage from './pages/home/HomePage';
import WelcomePage from './pages/welcome/WelcomePage';
import AboutPage from './pages/about/AboutPage';
import WorshipPage from './pages/worship/WorshipPage';
import SermonPage from './pages/sermon/SermonPage';
import BiblePage from './pages/bible/BiblePage';
import MinistryPage from './pages/ministry/MinistryPage';
import MissionPage from './pages/mission/MissionPage';
import NewsPage from './pages/news/NewsPage';
import CommunityPage from './pages/community/CommunityPage';
import AuthPage from './pages/auth/AuthPage';
import AdminDashboard from './pages/admin/AdminDashboard';

export default function App() {
  return (
    <div className="app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/worship" element={<WorshipPage />} />
          <Route path="/sermon" element={<SermonPage />} />
          <Route path="/bible" element={<BiblePage />} />
          <Route path="/ministry" element={<MinistryPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
