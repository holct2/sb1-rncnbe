import { useState } from 'react';
import {
  PlusCircle,
  Menu,
  X,
  Home,
  TrendingUp,
  DollarSign,
  Settings,
  LogOut,
} from 'lucide-react';
import { FinanceChart } from './FinanceChart';
import { StatsCards } from './StatsCards';
import { AddFlowModal } from './AddFlowModal';
import { Logo } from './Logo';

interface DashboardProps {
  isDark: boolean;
}

export function Dashboard({ isDark }: DashboardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: TrendingUp, label: 'Analytics' },
    { icon: DollarSign, label: 'Transactions' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div
      className={`min-h-screen flex ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? 'translate-x-0'
              : '-translate-x-full lg:translate-x-0'
          }
          ${isDark ? 'bg-gray-800' : 'bg-white'} border-r ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <Logo isDark={isDark} />
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                  ${
                    item.active
                      ? 'bg-[#220041] text-white'
                      : isDark
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                ${
                  isDark
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header
          className={`sticky top-0 z-40 ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-200"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center px-4 py-2 rounded-lg text-white transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: '#220041' }}
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                Add Flow
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Financial Overview</h1>
            </div>

            <StatsCards isDark={isDark} />

            <div className="grid grid-cols-1 gap-8">
              <FinanceChart isDark={isDark} />
            </div>
          </div>
        </main>
      </div>

      <AddFlowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
