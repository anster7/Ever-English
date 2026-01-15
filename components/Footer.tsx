
import React from 'react';
import { SiteData } from '../types';

interface FooterProps {
  data: SiteData['contact'];
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">E</div>
          <span className="text-lg font-bold text-gray-800">Ever English</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
          {data.location}<br />
          {data.phone}
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a href={data.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-green-50 text-gray-400 hover:text-green-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href={data.blogUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-green-50 text-gray-400 hover:text-green-600 transition-colors">
             <span className="font-bold text-lg">B</span>
          </a>
        </div>

        <p className="text-xs text-gray-400">© 2024 Ever English. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
