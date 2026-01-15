
export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface Career {
  id: string;
  text: string;
}

export interface SiteData {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    imageUrl: string;
  };
  about: {
    title: string;
    description: string;
    imageUrl: string;
    careers: Career[];
  };
  programs: {
    title: string;
    highlight: string;
    description: string;
    items: Program[];
  };
  library: {
    title: string;
    description: string;
    images: string[];
  };
  contact: {
    title: string;
    description: string;
    location: string;
    phone: string;
    instagramUrl: string;
    blogUrl: string;
  };
  news: NewsItem[];
}

export type ViewMode = 'user' | 'admin';
export type UserPage = 'home' | 'about' | 'program' | 'library' | 'contact';
