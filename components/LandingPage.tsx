
import React, { useState } from 'react';
import { SiteData, UserPage } from '../types';

interface LandingPageProps {
  data: SiteData;
  activePage: UserPage;
  setActivePage: (page: UserPage) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ data, activePage, setActivePage }) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xvzzgrzr", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObj)
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };
  
  const HomeView = () => (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center mesh-gradient overflow-hidden pt-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left animate-fadeIn">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white shadow-xl shadow-green-100/50 rounded-full mb-10 border border-green-50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-black text-green-700 tracking-wider uppercase">Premium English Coaching</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.1] mb-10 tracking-tighter">
                <span className="block text-gray-400 text-2xl md:text-3xl font-bold mb-4 tracking-normal opacity-80">
                  김포 마산동 영어공부방
                </span>
                <span className="block">
                  원서로 배우는 
                  <span className="relative inline-block whitespace-nowrap group lg:ml-4">
                    <span className="relative z-10 text-green-600 group-hover:text-green-700 transition-colors">진짜 영어</span>
                    <span className="absolute bottom-4 left-0 w-full h-6 bg-yellow-300/60 -z-10 rounded-lg transform -rotate-1 group-hover:rotate-0 transition-all duration-300"></span>
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-500 mb-12 font-medium leading-relaxed max-w-xl opacity-90">
                {data.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => setActivePage('contact')}
                  className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-[2rem] text-xl font-black shadow-[0_20px_40px_rgba(22,163,74,0.2)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  상담 신청하기
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-yellow-100 rounded-[6rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="relative z-10 transform transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1">
                <div className="relative overflow-hidden rounded-[5rem] shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1543004218-ee141104e12e?auto=format&fit=crop&q=80&w=1200&h=1200" 
                    alt="English Studying Atmosphere" 
                    className="w-full h-full object-cover aspect-square transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent"></div>
                </div>
                <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl animate-float border border-gray-50 max-w-[180px]">
                  <p className="text-3xl mb-1">📖</p>
                  <p className="text-sm font-black text-gray-800 leading-tight">2,000권 이상의 영어 원서 컬렉션</p>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-yellow-400 p-6 rounded-3xl shadow-2xl animate-float-delayed border-4 border-white max-w-[180px]">
                  <p className="text-3xl mb-1">💡</p>
                  <p className="text-sm font-black text-gray-900 leading-tight">언어를 언어답게 진짜 영어 수업</p>
                </div>
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="text-white font-black text-center text-xs leading-none">Best<br/>Reading<br/>Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary News */}
      <section className="py-16 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1a2b4b] rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative group border border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="flex items-center gap-6 md:gap-10 relative z-10 w-full md:w-auto">
               <div className="flex flex-col items-center shrink-0">
                 <span className="text-yellow-400 font-black text-[10px] uppercase tracking-[0.3em] mb-1">New</span>
                 <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></div>
               </div>
               <p className="font-bold text-gray-100 text-lg md:text-2xl truncate group-hover:text-white transition-colors flex-1">
                {data.news[0]?.title}
               </p>
            </div>
            <button 
              onClick={() => setActivePage('home')}
              className="group text-white font-black text-lg hover:text-yellow-400 transition-all flex items-center gap-3 relative z-10 shrink-0 w-full md:w-auto justify-center md:justify-start"
            >
              전체보기
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400 group-hover:rotate-45 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </button>
          </div>
        </div>
      </section>
      
      {/* Teacher Section */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a2b4b]/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
             <div className="relative group order-2 md:order-1">
               <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#1a2b4b] rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
               <div className="relative z-10 p-4 bg-white shadow-[0_50px_100px_rgba(0,0,0,0.1)] rounded-[5rem] overflow-hidden">
                 <img src={data.about.imageUrl} className="rounded-[4rem] w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" alt="Christie Teacher" />
               </div>
               <div className="absolute -bottom-12 -right-12 glass p-10 rounded-[4rem] shadow-2xl z-20 border border-white transform hover:-translate-y-4 transition-transform duration-500 bg-[#1a2b4b]/80 backdrop-blur-xl">
                  <p className="text-yellow-400 font-black text-5xl mb-1">20+</p>
                  <p className="text-white font-black text-[10px] uppercase tracking-widest leading-none opacity-80">Years Experience</p>
               </div>
             </div>
             
             <div className="order-1 md:order-2 text-center md:text-left">
               <span className="inline-block text-green-600 font-black tracking-[0.4em] text-xs uppercase mb-8 bg-green-50 px-5 py-2 rounded-full">Expert Instructor</span>
               <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 leading-[1.15] tracking-tight">
                  <span className="text-[#1a2b4b]">{data.about.title}</span><br/>
                  <span className="relative inline-block mt-4 text-3xl md:text-4xl text-gray-500 font-bold">
                    "과목이 아닌 <span className="text-green-600">언어</span>로 완성합니다"
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10 opacity-40"></span>
                  </span>
               </h2>
               <p className="text-xl md:text-2xl text-gray-500 mb-14 leading-relaxed font-medium mx-auto md:mx-0 max-w-xl">
                 {data.about.description}
               </p>
               <div className="flex justify-center md:justify-start">
                 <button 
                   onClick={() => setActivePage('about')}
                   className="group flex items-center gap-6 text-gray-900 font-black text-2xl transition-all hover:gap-8"
                 >
                   자세한 경력 확인
                   <div className="w-16 h-16 bg-yellow-400 rounded-3xl flex items-center justify-center group-hover:bg-[#1a2b4b] group-hover:text-white transition-all shadow-2xl group-hover:rotate-12 transform">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                   </div>
                 </button>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutView = () => (
    <div className="animate-fadeIn py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-40 hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#1a2b4b] rounded-[4rem] rotate-3 group-hover:rotate-6 transition-transform opacity-10"></div>
              <img src={data.about.imageUrl} alt="Principal" className="relative z-10 rounded-[4rem] shadow-2xl w-full h-[700px] object-cover border-8 border-white" />
              <div className="absolute -bottom-10 -right-10 bg-[#1a2b4b] p-10 rounded-[3.5rem] shadow-3xl max-w-[250px] z-20 transform hover:scale-110 transition-transform">
                <p className="text-3xl font-black text-yellow-400 mb-1">Expert</p>
                <p className="text-[10px] font-bold text-white/70 tracking-tight leading-tight uppercase">Professional Reading Specialist</p>
              </div>
            </div>
          </div>
          
          <div className="pt-10 lg:pt-0 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-[#1a2b4b] mb-12 leading-[1.1] tracking-tighter">
              {data.about.title}
            </h2>
            <div className="prose prose-xl md:prose-2xl text-gray-500 leading-relaxed mb-20 font-medium mx-auto lg:mx-0">
              <p>{data.about.description}</p>
            </div>
            
            <div className="space-y-20 text-left">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 flex items-center gap-5 justify-center lg:justify-start">
                  <span className="w-12 h-1.5 bg-green-500 rounded-full"></span> 
                  Career Expertise
                </h3>
                <div className="grid gap-5">
                  {data.about.careers.map((career) => (
                    <div key={career.id} className="flex items-start gap-6 bg-gray-50 p-8 rounded-[2.5rem] border border-transparent hover:border-green-200 hover:bg-white transition-all hover:shadow-xl group">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-[#1a2b4b] group-hover:text-yellow-400 shadow-lg transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p className="text-lg md:text-xl text-gray-800 font-bold leading-snug">{career.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#1a2b4b] p-12 md:p-16 rounded-[4rem] relative overflow-hidden group shadow-3xl text-center md:text-left">
                <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-bl-full transform group-hover:scale-125 transition-transform duration-1000"></div>
                <span className="text-[10px] font-black text-yellow-400 mb-8 tracking-[0.5em] uppercase relative z-10 block">Teaching Philosophy</span>
                <p className="text-white leading-tight text-3xl md:text-4xl font-black italic relative z-10">
                  "무작정 앞서가기보다, 아이 수준에 맞게 <span className="text-green-400">천천히, 제대로.</span> 평생의 자산이 될 영어를 만듭니다."
                </p>
                <a 
                  href="https://blog.naver.com/christie830" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-yellow-400 font-bold border-b border-yellow-400 pb-1 hover:text-white hover:border-white transition-all relative z-10"
                >
                  공식 블로그 방문하기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProgramView = () => (
    <div className="animate-fadeIn py-32 md:py-48 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24 md:mb-32">
          <span className="text-green-600 font-black tracking-[0.5em] text-xs uppercase mb-8 block">Educational Architecture</span>
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{data.programs.title}</h2>
          <p className="text-3xl md:text-4xl font-black text-green-600 mb-12">{data.programs.highlight}</p>
          <div className="w-32 h-2.5 bg-yellow-400 mx-auto mb-12 rounded-full shadow-lg shadow-yellow-100"></div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-semibold italic">
            {data.programs.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-32">
          {data.programs.items.map((item, idx) => (
            <div key={item.id} className="bg-white p-12 rounded-[3.5rem] hover:bg-[#1a2b4b] hover:text-white transition-all duration-700 group shadow-xl hover:shadow-[#1a2b4b]/40 hover:-translate-y-5 border border-gray-100 text-center">
              <div className="text-7xl mb-10 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <span className="block text-green-500 font-black mb-4 text-[10px] tracking-widest uppercase">Step 0{idx+1}</span>
              <h3 className="text-2xl md:text-3xl font-black mb-5 leading-tight">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed text-lg font-medium">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-600 rounded-[5rem] p-16 md:p-32 flex flex-col lg:flex-row items-center gap-20 md:gap-32 relative overflow-hidden shadow-[0_50px_100px_rgba(22,163,74,0.3)]">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-14 tracking-tight">왜 원서 중심일까요?</h3>
              <ul className="space-y-8 md:space-y-10 inline-block text-left">
                {[
                  "맥락 중심의 입체적 언어 이해",
                  "자기주도적 읽기 동기 부여",
                  "비판적 사고를 확장하는 토론"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center gap-6 md:gap-8 text-2xl md:text-3xl text-white/95 font-black group">
                    <div className="w-10 h-10 bg-yellow-400 rounded-2xl flex items-center justify-center text-gray-900 shadow-xl group-hover:scale-125 transition-transform shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
           </div>
           
           <div className="lg:w-1/2 grid grid-cols-2 gap-6 md:gap-10 w-full relative z-10">
              <div className="bg-white/10 backdrop-blur-xl p-10 md:p-16 rounded-[4rem] text-center shadow-2xl border border-white/20 hover:bg-white/20 transition-all group">
                <p className="text-5xl md:text-7xl font-black text-yellow-400 mb-4 group-hover:scale-110 transition-transform">2000+</p>
                <p className="text-sm font-black text-white/60 uppercase tracking-widest">Books</p>
              </div>
              <div className="bg-white p-10 md:p-16 rounded-[4rem] text-center shadow-3xl hover:scale-105 transition-transform group">
                <p className="text-5xl md:text-7xl font-black text-green-600 mb-4 group-hover:scale-110 transition-transform">1:1</p>
                <p className="text-sm font-black text-gray-300 uppercase tracking-widest">Coaching</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );

  const LibraryView = () => (
    <div className="animate-fadeIn py-32 md:py-48 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#16a34a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-24 md:mb-32 gap-12 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-green-600 font-black tracking-[0.5em] text-xs uppercase mb-8 block">World Class Library</span>
            <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{data.library.title}</h2>
            <p className="text-2xl md:text-3xl text-gray-400 font-semibold leading-relaxed">{data.library.description}</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            {['PICTURE', 'CHAPTER', 'NEWBERY'].map((tag, i) => (
              <button key={tag} className={`px-8 py-4 rounded-[1.5rem] text-xs font-black shadow-xl transition-all hover:scale-105 ${i === 0 ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-[#1a2b4b] hover:text-white'}`}>
                {tag} SERIES
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {data.library.images.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-[4rem] md:rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border-4 md:border-8 border-white">
              <img src={img} alt={`Book collection ${i}`} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4b] via-[#1a2b4b]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 md:p-16">
                 <span className="text-yellow-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Collection 0{i+1}</span>
                 <p className="text-white font-black text-3xl md:text-4xl mb-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Premium Series</p>
                 <div className="w-12 h-1 bg-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          ))}
          <div className="aspect-square bg-white rounded-[4rem] md:rounded-[5rem] border-4 border-dashed border-green-100 flex items-center justify-center p-12 md:p-20 text-center group hover:border-green-500 transition-all cursor-pointer shadow-inner">
             <div className="space-y-6 md:space-y-10">
               <div className="text-7xl md:text-8xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700">📖</div>
               <p className="text-gray-900 font-black text-2xl md:text-4xl leading-tight">2,000권 이상의<br/><span className="text-green-600">압도적 컬렉션</span></p>
               <p className="text-gray-400 font-bold text-base md:text-lg">매달 신간 원서가 업데이트됩니다.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="animate-fadeIn py-32 md:py-48 bg-white mesh-gradient" id="contact-form-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 md:gap-32 items-center">
          <div className="text-center lg:text-left">
            <span className="text-green-600 font-black tracking-[0.5em] text-xs uppercase mb-10 block">Consultation</span>
            <h2 className="text-6xl md:text-8xl font-black text-[#1a2b4b] mb-12 tracking-tighter leading-none">{data.contact.title}</h2>
            <p className="text-2xl md:text-3xl text-gray-400 mb-16 md:mb-20 leading-relaxed font-semibold italic mx-auto lg:mx-0 max-w-2xl">
              {data.contact.description}
            </p>
            
            <div className="space-y-12 md:space-y-16 inline-block text-left w-full max-w-xl">
              {[
                { label: 'Direct Line', value: data.contact.phone, icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                { label: 'Location', value: data.contact.location, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 md:gap-10 group">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-[2.5rem] flex items-center justify-center text-green-600 shadow-2xl shadow-green-100/50 group-hover:bg-[#1a2b4b] group-hover:text-yellow-400 transition-all group-hover:rotate-6 shrink-0">
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon}></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-2">{item.label}</p>
                    <p className="text-3xl md:text-4xl font-black text-gray-800 leading-none">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            <div className="glass p-12 md:p-20 rounded-[4rem] md:rounded-[5rem] shadow-3xl border border-white relative z-10 overflow-hidden min-h-[500px] flex flex-col justify-center">
              {submitStatus === 'success' ? (
                <div className="text-center space-y-10 animate-fadeIn">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-black text-[#1a2b4b] tracking-tighter">신청 완료!</h3>
                    <p className="text-xl md:text-2xl text-gray-500 font-bold leading-relaxed">
                      상담 신청이 정상적으로 접수되었습니다.<br/>
                      최대한 빠르게 연락드리겠습니다.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setSubmitStatus('idle');
                      setActivePage('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-4 bg-[#1a2b4b] hover:bg-black text-white px-10 py-6 rounded-full text-xl font-black shadow-2xl transition-all transform hover:scale-105 active:scale-95"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    홈으로 돌아가기
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-4xl md:text-5xl font-black text-[#1a2b4b] mb-12 md:mb-16 text-center tracking-tighter">Application</h3>
                  <form 
                    onSubmit={handleContactSubmit}
                    className="space-y-10 md:space-y-12"
                  >
                    <input type="hidden" name="_subject" value="[Ever English] 신규 상담 신청 내역" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                      <div className="space-y-3">
                        <label className="block text-[10px] font-black text-gray-400 ml-6 uppercase tracking-widest">Parent Name</label>
                        <input type="text" name="name" required className="w-full px-10 py-6 rounded-[2rem] border-2 border-transparent focus:border-green-500/30 focus:ring-0 shadow-2xl bg-white transition-all outline-none font-bold text-xl md:text-2xl" placeholder="성함" />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-[10px] font-black text-gray-400 ml-6 uppercase tracking-widest">Phone Number</label>
                        <input type="tel" name="phone" required className="w-full px-10 py-6 rounded-[2rem] border-2 border-transparent focus:border-green-500/30 focus:ring-0 shadow-2xl bg-white transition-all outline-none font-bold text-xl md:text-2xl" placeholder="연락처" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-gray-400 ml-6 uppercase tracking-widest">Student Info</label>
                      <input type="text" name="student" className="w-full px-10 py-6 rounded-[2rem] border-2 border-transparent focus:border-green-500/30 focus:ring-0 shadow-2xl bg-white transition-all outline-none font-bold text-xl md:text-2xl" placeholder="학년 및 나이" />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-gray-400 ml-6 uppercase tracking-widest">Your Message</label>
                      <textarea name="message" rows={4} className="w-full px-10 py-6 rounded-[2rem] border-2 border-transparent focus:border-green-500/30 focus:ring-0 shadow-2xl bg-white transition-all outline-none resize-none font-bold text-xl md:text-2xl" placeholder="상담 문의 내용"></textarea>
                    </div>
                    
                    {submitStatus === 'error' && (
                      <p className="text-red-500 text-sm font-bold text-center animate-pulse">오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
                    )}

                    <button 
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className={`w-full bg-[#1a2b4b] hover:bg-black text-white font-black py-7 md:py-8 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-6 text-2xl md:text-3xl group ${submitStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {submitStatus === 'submitting' ? (
                        <span className="flex items-center gap-3">
                          <svg className="animate-spin h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          전송 중...
                        </span>
                      ) : (
                        <>
                          상담 신청하기
                          <svg className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveView = () => {
    switch (activePage) {
      case 'home': return <HomeView />;
      case 'about': return <AboutView />;
      case 'program': return <ProgramView />;
      case 'library': return <LibraryView />;
      case 'contact': return <ContactView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {renderActiveView()}
    </div>
  );
};

export default LandingPage;
