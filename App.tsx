
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import LandingPage from './components/LandingPage.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';
import Footer from './components/Footer.tsx';
import { INITIAL_SITE_DATA } from './constants.ts';
import { SiteData, ViewMode, UserPage } from './types.ts';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('user');
  const [activePage, setActivePage] = useState<UserPage>('home');
  const [siteData, setSiteData] = useState<SiteData>(INITIAL_SITE_DATA);

  // Persistence to local storage
  useEffect(() => {
    const saved = localStorage.getItem('ever_english_site_data');
    if (saved) {
      try {
        setSiteData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved site data", e);
      }
    }
  }, []);

  const handleSetSiteData = (newData: SiteData) => {
    setSiteData(newData);
    localStorage.setItem('ever_english_site_data', JSON.stringify(newData));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-green-100 selection:text-green-900">
      <Header 
        viewMode={viewMode} 
        setViewMode={setViewMode} 
        activePage={activePage}
        setActivePage={setActivePage}
      />
      
      <main className="flex-1">
        {viewMode === 'user' ? (
          <LandingPage data={siteData} activePage={activePage} setActivePage={setActivePage} />
        ) : (
          <AdminDashboard data={siteData} setData={handleSetSiteData} />
        )}
      </main>

      {viewMode === 'user' && <Footer data={siteData.contact} />}
      
      {/* Admin Floating Switcher for Mobile */}
      <button 
        onClick={() => setViewMode(viewMode === 'user' ? 'admin' : 'user')}
        className="fixed bottom-6 left-6 z-50 p-4 bg-gray-900 text-white rounded-full shadow-2xl hover:scale-110 transition-all md:hidden"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path></svg>
      </button>

      {/* Direct Contact Floating Button */}
      <button 
        onClick={() => { setViewMode('user'); setActivePage('contact'); }}
        className="fixed bottom-6 right-6 z-50 p-5 bg-yellow-400 text-gray-900 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">상담 신청</span>
      </button>
    </div>
  );
};

export default App;
