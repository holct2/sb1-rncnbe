import React, { useState } from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { AuthForm } from './components/AuthForm';
import { Dashboard } from './components/Dashboard';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return (
      <div className={isDark ? 'dark' : ''}>
        <ThemeSwitcher isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <Dashboard isDark={isDark} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex relative transition-colors duration-200 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-indigo-50'
    }`}>
      <ThemeSwitcher isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      {/* Left Panel with Static Image */}
      <div 
        className="hidden lg:flex lg:w-1/2 text-white p-12 flex-col justify-between bg-cover bg-center relative"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        
        <div className="relative z-10">
          <Logo isDark={true} />
          <h1 className="text-4xl font-bold mb-4 mt-8">Welcome to FlowWealth</h1>
          <p className="text-lg text-indigo-100">
            Join thousands of users who are already transforming their financial workflow.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="lg:hidden mb-8">
              <Logo isDark={isDark} />
            </div>
            <AuthForm isDark={isDark} onLogin={handleLogin} />
          </div>
          <Footer isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export default App;