
import React, { useState } from 'react';
import { SiteData, NewsItem, Career, Program } from '../types';

interface AdminDashboardProps {
  data: SiteData;
  setData: (data: SiteData) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ data, setData }) => {
  const [activeTab, setActiveTab] = useState<'hero' | 'about' | 'programs' | 'news' | 'contact' | 'system'>('hero');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (section: keyof SiteData, field: string, value: any) => {
    setData({
      ...data,
      [section]: {
        ...(data[section] as any),
        [field]: value
      }
    });
  };

  const updateCareer = (id: string, text: string) => {
    const newCareers = data.about.careers.map(c => c.id === id ? { ...c, text } : c);
    handleChange('about', 'careers', newCareers);
  };

  const addNews = () => {
    const newItem: NewsItem = {
      id: Date.now().toString(),
      title: "새 공지사항",
      content: "내용을 입력하세요.",
      date: new Date().toISOString().split('T')[0]
    };
    setData({ ...data, news: [newItem, ...data.news] });
  };

  const deleteNews = (id: string) => {
    setData({ ...data, news: data.news.filter(n => n.id !== id) });
  };

  // Function to submit entire site config via Formspree
  const submitDataToFormspree = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch("https://formspree.io/f/xvzzgrzr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "[Ever English] 웹사이트 설정 데이터 수집",
          timestamp: new Date().toLocaleString(),
          siteConfig: data
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[70vh]">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-6 space-y-2">
          <h2 className="text-xl font-bold text-gray-800 mb-8 px-2 flex items-center gap-2">
            <span className="w-2 h-6 bg-green-500 rounded-full"></span>
            콘텐츠 관리
          </h2>
          {(['hero', 'about', 'programs', 'news', 'contact', 'system'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                activeTab === tab 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              {tab === 'system' ? '🚀 시스템 & 백업' : tab.charAt(0).toUpperCase() + tab.slice(1) + ' Section'}
            </button>
          ))}
        </div>

        {/* Form Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'hero' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold mb-6">메인 화면 수정</h3>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">메인 제목</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                  rows={2}
                  value={data.hero.title}
                  onChange={(e) => handleChange('hero', 'title', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">슬로건</label>
                <input 
                  type="text"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                  value={data.hero.subtitle}
                  onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                />
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">강사 소개 수정</h3>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">소개글</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                  rows={4}
                  value={data.about.description}
                  onChange={(e) => handleChange('about', 'description', e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-700 mb-2">경력 사항</label>
                {data.about.careers.map((career) => (
                  <div key={career.id} className="flex gap-2">
                    <input 
                      type="text"
                      className="flex-1 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
                      value={career.text}
                      onChange={(e) => updateCareer(career.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">소식 게시판 관리</h3>
                <button 
                  onClick={addNews}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-600"
                >
                  새 소식 추가
                </button>
              </div>
              <div className="space-y-4">
                {data.news.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-2xl p-6 bg-gray-50 space-y-4 relative">
                    <button 
                      onClick={() => deleteNews(item.id)}
                      className="absolute top-4 right-4 text-red-400 hover:text-red-600"
                    >
                      삭제
                    </button>
                    <input 
                      type="text"
                      placeholder="제목"
                      className="w-full bg-white border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
                      value={item.title}
                      onChange={(e) => {
                        const newNews = data.news.map(n => n.id === item.id ? { ...n, title: e.target.value } : n);
                        setData({ ...data, news: newNews });
                      }}
                    />
                    <textarea 
                      placeholder="내용"
                      className="w-full bg-white border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
                      rows={3}
                      value={item.content}
                      onChange={(e) => {
                        const newNews = data.news.map(n => n.id === item.id ? { ...n, content: e.target.value } : n);
                        setData({ ...data, news: newNews });
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">연락처 및 하단 정보</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">위치 정보</label>
                  <input 
                    type="text"
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                    value={data.contact.location}
                    onChange={(e) => handleChange('contact', 'location', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">전화번호</label>
                  <input 
                    type="text"
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                    value={data.contact.phone}
                    onChange={(e) => handleChange('contact', 'phone', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'system' && (
            <div className="space-y-8 animate-fadeIn">
              <h3 className="text-2xl font-bold mb-6">시스템 & 데이터 관리</h3>
              <div className="bg-green-50 p-8 rounded-[2.5rem] border border-green-100">
                <h4 className="text-lg font-black text-green-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  설정 데이터 이메일로 수집
                </h4>
                <p className="text-green-700 text-sm mb-6 leading-relaxed">
                  현재까지 수정하신 모든 웹사이트 텍스트와 설정을 JSON 형식으로 본인의 이메일에 전송합니다. <br/>
                  (Formspree 서비스를 통해 안전하게 전송됩니다.)
                </p>
                
                <button 
                  onClick={submitDataToFormspree}
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white' 
                      : submitStatus === 'success'
                        ? 'bg-blue-500 text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      전송 중...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      전송 완료!
                    </>
                  ) : (
                    '현재 설정 데이터 이메일로 받기'
                  )}
                </button>

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-xs mt-4 font-bold">전송에 실패했습니다. 다시 시도해 주세요.</p>
                )}
                {submitStatus === 'success' && (
                  <p className="text-blue-600 text-xs mt-4 font-bold">이메일을 확인해 주세요. 데이터가 전송되었습니다.</p>
                )}
              </div>
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-end">
            <p className="text-gray-400 text-sm italic">변경사항은 즉시 반영되어 미리보기 화면에서 확인 가능합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
