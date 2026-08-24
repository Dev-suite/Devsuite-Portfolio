import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-[#888888] font-mono text-xs py-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-[#1E1E1E] gap-6">
          <div>
            <div className="font-display font-bold text-lg text-white">
              {PERSONAL_INFO.name.toUpperCase()}
            </div>
            <div className="text-[11px] text-[#666666] mt-0.5">
              {PERSONAL_INFO.primaryPositioning}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <a href="#work" className="hover:text-white transition-colors">WORK</a>
            <a href="#case-studies" className="hover:text-white transition-colors">CASE STUDIES</a>
            <a href="#info-design" className="hover:text-white transition-colors">INFO DESIGN</a>
            <a href="#ai-design" className="hover:text-white transition-colors">AI + DESIGN</a>
            <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-white hover:text-[#D4FF00] transition-colors self-start md:self-auto"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[#555555]">
          <div>
            © {new Date().getFullYear()} Kamaldeen Sulyman. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Typeset in Space Grotesk & Plus Jakarta Sans</span>
            <span>•</span>
            <span>16:9 Presentation System</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
