
import { SiteData } from './types';

export const INITIAL_SITE_DATA: SiteData = {
  hero: {
    title: "김포 마산동 영어공부방｜원서로 배우는 진짜 영어",
    subtitle: "영어를 '과목'이 아닌 '언어'로 만나는 시간",
    buttonText: "상담 신청하기",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000"
  },
  about: {
    title: "크리스티(Christie) 강사",
    description: "원서로 배우는 진짜 영어, '과목'이 아닌 '언어'로 완성합니다. 최상의 수업을 합리적인 가격으로 제공합니다.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000",
    careers: [
      { id: "1", text: "영어교육 20년 이상 / 영어영문학 전공" },
      { id: "2", text: "영어독서 지도사 / 한우리 논술지도사" },
      { id: "3", text: "TESOL (Australia IH Sydney / Arizona State University 수료)" },
      { id: "4", text: "전) 정상어학원, ECC 어학원 초·중등 강사" },
      { id: "5", text: "전) 호주 커뮤니티 교육기관 영어강사" }
    ]
  },
  programs: {
    title: "우리의 교육 프로그램",
    highlight: "‘문법 중심’이 아닌 ‘원서 중심 영어’",
    description: "무작정 앞서가기보다, 아이 수준에 맞게 천천히, 그러나 제대로. 영어를 오래 가져갈 힘을 만들어줍니다.",
    items: [
      { id: "p1", title: "매일 원서 읽기 & 읽기 녹음", description: "소리 내어 읽으며 자신의 목소리를 듣는 훈련", icon: "📚" },
      { id: "p2", title: "자연스러운 문장 구조 이해", description: "맥락 속에서 문법과 어휘를 체득", icon: "🧠" },
      { id: "p3", title: "언어 감각 형성", description: "말하기와 쓰기까지 자연스럽게 연결", icon: "🗣️" },
      { id: "p4", title: "2000권 이상 원서 보유", description: "픽처북, 챕터북, 뉴베리 수상작 등 다양한 컬렉션", icon: "✨" }
    ]
  },
  library: {
    title: "에버 도서관",
    description: "아이들의 상상력이 자라나는 2000권 이상의 영어 원서 컬렉션입니다.",
    images: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532012197367-6bb2638d974c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  contact: {
    title: "궁금하신 점이 있으신가요?",
    description: "상담은 언제든 편하게 문의 주세요. 아이에게 맞지 않다면 무리한 등록은 권하지 않습니다.",
    location: "경기도 김포시 마산동 (Ever English)",
    phone: "010-8618-2830",
    instagramUrl: "https://instagram.com",
    blogUrl: "https://blog.naver.com/christie830"
  },
  news: [
    { id: "n1", title: "2026년 신규 원서 입고 소식", content: "아이들이 좋아하는 인기 시리즈를 포함한 뉴베리 수상작들이 대거 추가되었습니다.", date: "2024-05-10" },
    { id: "n2", title: "여름방학 집중 리딩 클래스 모집", content: "방학 동안 원서 한 권을 완독하고 독서 토론을 진행하는 특별 클래스를 모집합니다.", date: "2024-05-01" }
  ]
};
