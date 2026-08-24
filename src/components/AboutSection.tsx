import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, GraduationCap, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#111111] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            09 / ABOUT & BACKGROUND
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Designer with a technical background.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Bio Content (8 cols) */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#444444] font-sans leading-relaxed">
            <p className="text-xl sm:text-2xl text-[#111111] font-display font-semibold leading-snug">
              "I'm a multidisciplinary technology professional working across presentation design, UI/UX, AI workflows, technical communication, and developer ecosystems."
            </p>

            <p>
              My technical background helps me understand complex subjects, while my design practice helps me turn those subjects into visual systems that people can understand quickly.
            </p>

            <p className="text-base text-[#555555]">
              Whether collaborating with senior leadership on executive board presentations, translating multi-region distributed system architectures into scannable schematics, or evaluating AI-generated slides against strict typographic standards at Postwork and Taste AI, I focus relentlessly on information clarity and visual discipline.
            </p>

            {/* Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4] text-xs space-y-1">
                <strong className="text-[#111111] font-display text-sm block">Clarity Over Decoration</strong>
                <p className="text-[#555555]">Every shape, line, and color must justify its cognitive existence on the slide canvas.</p>
              </div>
              <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4] text-xs space-y-1">
                <strong className="text-[#111111] font-display text-sm block">AI-Assisted Rigor</strong>
                <p className="text-[#555555]">Leveraging AI tools for drafting velocity while strictly enforcing human visual QA standards.</p>
              </div>
            </div>
          </div>

          {/* Sidebar: Education & Location Metadata (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 bg-[#F7F7F5] rounded-xl border border-[#D9D9D4]">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#D9D9D4]">
                <GraduationCap className="w-4 h-4 text-[#111111]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Formal Education
                </span>
              </div>

              <div className="space-y-4">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-display font-bold text-sm text-[#111111]">
                      {edu.degree}
                    </div>
                    <div className="font-mono text-[#666666] mt-0.5">
                      {edu.institution}
                    </div>
                    <div className="text-[11px] text-[#777777] mt-1 font-sans">
                      {edu.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="p-6 bg-[#F7F7F5] rounded-xl border border-[#D9D9D4] text-xs font-mono space-y-3">
              <div className="font-bold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D9D9D4]">
                Location & Engagement
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#666666]">Base Location:</span>
                <span className="font-semibold text-[#111111]">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#666666]">Working Mode:</span>
                <span className="font-semibold text-[#111111]">Remote Worldwide</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#666666]">Availability:</span>
                <span className="px-2 py-0.5 bg-[#D4FF00] text-[#111111] rounded font-bold text-[10px]">
                  Freelance / Contract
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
