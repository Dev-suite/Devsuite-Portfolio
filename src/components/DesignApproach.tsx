import React from 'react';
import { DESIGN_APPROACH_STEPS } from '../data/portfolioData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const DesignApproach: React.FC = () => {
  return (
    <section id="approach" className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#111111] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            06 / METHODOLOGY & PROCESS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111111] tracking-tight">
            How I approach a presentation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] font-sans leading-relaxed">
            A disciplined, 5-step editorial system ensuring every slide serves a strategic purpose before visual styling begins.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_APPROACH_STEPS.map((step, idx) => (
            <div 
              key={step.number}
              className={`p-6 sm:p-8 bg-white rounded-xl border border-[#D9D9D4] flex flex-col justify-between hover:border-[#111111] transition-all shadow-xs ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EBEBE6]">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#111111] text-[#D4FF00] rounded">
                    STEP {step.number}
                  </span>
                  <span className="font-mono text-xs text-[#888888] uppercase">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#111111]">
                  {step.title}
                </h3>
                <div className="font-mono text-xs text-[#666666] font-semibold mt-1">
                  {step.subhead}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#444444] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="mt-6 pt-4 border-t border-[#EBEBE6] space-y-2">
                <div className="font-mono text-[10px] font-bold text-[#888888] uppercase">
                  Execution Checklist:
                </div>
                {step.checklist.map((item, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2 text-xs text-[#333333]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
