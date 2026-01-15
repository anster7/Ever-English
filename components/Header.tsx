
import React from 'react';
import { ViewMode, UserPage } from '../types';

interface HeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  activePage: UserPage;
  setActivePage: (page: UserPage) => void;
}

const Header: React.FC<HeaderProps> = ({ viewMode, setViewMode, activePage, setActivePage }) => {
  const navItems: { label: string; value: UserPage }[] = [
    { label: '홈', value: 'home' },
    { label: '소개', value: 'about' },
    { label: '프로그램', value: 'program' },
    { label: '도서관', value: 'library' },
    { label: '문의', value: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => { setViewMode('user'); setActivePage('home'); }}
          >
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">E</div>
            <span className="text-2xl font-black text-gray-800 tracking-tighter">Ever English</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => { setViewMode('user'); setActivePage(item.value); }}
                className={`text-sm font-bold transition-all hover:text-green-600 ${
                  activePage === item.value ? 'text-green-600 underline underline-offset-8 decoration-2' : 'text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setViewMode(viewMode === 'user' ? 'admin' : 'user')}
              className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all
                bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200"
            >
              {viewMode === 'user' ? 'ADMIN' : 'EXIT ADMIN'}
            </button>
            <button 
              onClick={() => { setViewMode('user'); setActivePage('contact'); }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-md transition-all transform hover:scale-105 active:scale-95"
            >
              상담 예약
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
