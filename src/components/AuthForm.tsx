import React, { useState } from 'react';
import { Mail, Lock, User, Building2 } from 'lucide-react';

interface AuthFormProps {
  isDark: boolean;
  onLogin: () => void;
}

export function AuthForm({ isDark, onLogin }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const linkColor = isDark ? 'text-purple-400 hover:text-purple-300' : 'text-[#220041] hover:text-purple-700';
  const inputClasses = `pl-10 w-full rounded-lg border ${
    isDark 
      ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500' 
      : 'bg-white border-gray-300 text-gray-900 focus:ring-[#220041]'
  } focus:ring-2 focus:border-transparent`;

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className={isDark ? 'mt-2 text-gray-300' : 'mt-2 text-gray-600'}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className={`font-medium ${linkColor}`}
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Name
                </label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Company Name
                </label>
                <div className="mt-1 relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={inputClasses}
                    placeholder="Company Inc."
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Email address
            </label>
            <div className="mt-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Password
            </label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClasses}
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        {isLogin && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className={`h-4 w-4 rounded border focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500'
                    : 'bg-white border-gray-300 text-[#220041] focus:ring-[#220041]'
                }`}
              />
              <label htmlFor="remember-me" className={`ml-2 block text-sm ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                Remember me
              </label>
            </div>

            <a href="#" className={`text-sm font-medium ${linkColor}`}>
              Forgot your password?
            </a>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg text-white transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: '#220041' }}
        >
          {isLogin ? 'Sign in' : 'Create account'}
        </button>
      </form>

      {!isLogin && (
        <p className={`mt-4 text-xs text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          By creating an account, you agree to our{' '}
          <a href="#" className={`font-medium ${linkColor}`}>Terms of Service</a>{' '}
          and{' '}
          <a href="#" className={`font-medium ${linkColor}`}>Privacy Policy</a>
        </p>
      )}
    </div>
  );
}