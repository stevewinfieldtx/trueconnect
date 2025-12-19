
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { LandingScreen } from './screens/LandingScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignupScreen } from './screens/SignupScreen';
import { DashboardMan } from './screens/DashboardMan';
import { DashboardWoman } from './screens/DashboardWoman';
import { BrowseScreen } from './screens/BrowseScreen';
import { ChatScreen } from './screens/ChatScreen';
import { CapacityScreen } from './screens/CapacityScreen';
import { SafetyScreen } from './screens/SafetyScreen';
import { UpgradeScreen } from './screens/UpgradeScreen';
import { Icon } from './components/UI';
import { Gender } from './types';

const Navigation: React.FC = () => {
  const location = useLocation();
  const hideNavOn = ['/', '/login', '/signup-man', '/signup-woman', '/chat'];
  const isChat = location.pathname.startsWith('/chat');
  const shouldHide = hideNavOn.some(path => location.pathname === path) || isChat;

  if (shouldHide) return null;

  const tabs = [
    { path: '/dashboard-man', label: 'Home', icon: 'home' },
    { path: '/browse', label: 'Browse', icon: 'search' },
    { path: '/dashboard-woman', label: 'Community', icon: 'groups' },
    { path: '/safety', label: 'Safety', icon: 'shield' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 pb-safe pt-2 px-6 flex justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {tabs.map(tab => {
        const isActive = location.pathname === tab.path;
        return (
          <Link 
            key={tab.path} 
            to={tab.path} 
            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400'}`}
          >
            <Icon name={tab.icon} filled={isActive} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<{ gender: Gender; name: string } | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white flex flex-col items-center">
        <div className="w-full max-w-md min-h-screen bg-white dark:bg-background-dark relative shadow-xl">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup-man" element={<SignupScreen gender={Gender.MALE} />} />
            <Route path="/signup-woman" element={<SignupScreen gender={Gender.FEMALE} />} />
            <Route path="/dashboard-man" element={<DashboardMan />} />
            <Route path="/dashboard-woman" element={<DashboardWoman />} />
            <Route path="/browse" element={<BrowseScreen />} />
            <Route path="/chat/:id" element={<ChatScreen />} />
            <Route path="/capacity" element={<CapacityScreen />} />
            <Route path="/safety" element={<SafetyScreen />} />
            <Route path="/upgrade" element={<UpgradeScreen />} />
          </Routes>
          <Navigation />
        </div>
      </div>
    </Router>
  );
};

export default App;
