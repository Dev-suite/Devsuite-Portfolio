import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { LayoutTemplate, Figma, Sparkles, FileCode, Check } from 'lucide-react';

export const SkillsToolkit: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <LayoutTemplate className="w-5 h-5 text-[#111111]" />;
      case 'Figma':
        return <Figma className="w-5 h-5 text-[#111111]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#111111]" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-[#111111]" />;
      default:
        return <LayoutTemplate className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#111111] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            08 / SKILLS & TOOLKIT
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Capabilities & Toolkit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] font-sans leading-relaxed">
            Structured competencies spanning presentation craft, interface design, AI evaluation, and technical communication.
          </p>
        </div>

        {/* 4 Category Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={cat.category}
              className="p-6 bg-white rounded-xl border border-[#D9D9D4] flex flex-col justify-between hover:border-[#111111] transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EBEBE6]">
                  <div className="flex items-center gap-2">
                    {getIcon(cat.iconName)}
                    <span className="font-mono text-xs font-bold text-[#888888]">
                      0{idx + 1}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-semibold text-[#666666]">
                    Core
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#111111]">
                  {cat.category}
                </h3>
                <p className="text-xs text-[#666666] mt-1 font-sans mb-4">
                  {cat.description}
                </p>

                {/* Skill Items List */}
                <div className="space-y-2">
                  {cat.items.map((item, iIdx) => (
                    <div 
                      key={iIdx}
                      className={`flex items-center justify-between p-2 rounded text-xs font-sans ${
                        item.emphasis 
                          ? 'bg-[#F7F7F5] border border-[#D9D9D4] font-semibold text-[#111111]' 
                          : 'text-[#444444]'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                      {item.emphasis && (
                        <span className="font-mono text-[9px] px-1 bg-[#D4FF00] text-[#111111] rounded font-bold">
                          PRO
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EBEBE6] font-mono text-[10px] text-[#888888]">
                Standardized Presentation Readiness
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
