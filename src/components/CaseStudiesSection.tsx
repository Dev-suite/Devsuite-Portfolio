import React, { useState } from 'react';
import { Project, CaseStudyData } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { SlideRenderer } from './SlideRenderer';
import { 
  FileText, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Grid, 
  Maximize2,
  Sparkles,
  Sliders
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenDeck: (project: Project, slideIndex?: number) => void;
  targetCaseStudyId?: string | null;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenDeck,
  targetCaseStudyId
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    targetCaseStudyId 
      ? PROJECTS.find(p => p.caseStudy.id === targetCaseStudyId)?.id || PROJECTS[0].id
      : PROJECTS[0].id
  );

  const activeProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];
  const caseStudy = activeProject.caseStudy;

  return (
    <section id="case-studies" className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#D9D9D4]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#111111] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              03 / CASE STUDIES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111111] tracking-tight">
              In-Depth Case Studies
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#666666] max-w-2xl font-sans">
              Rigorous breakdowns of information architecture, typography decisions, and visual systems.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#666666]">
            Structured 6-Step Presentation Design Process
          </div>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PROJECTS.map((p) => {
            const isActive = p.id === activeProject.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProjectId(p.id)}
                className={`px-4 py-2.5 rounded-md font-mono text-xs font-semibold transition-all border text-left flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#111111] text-[#F7F7F5] border-[#111111] shadow-xs'
                    : 'bg-[#F7F7F5] text-[#555555] border-[#D9D9D4] hover:bg-[#EAEAE6] hover:text-[#111111]'
                }`}
              >
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                  isActive ? 'bg-[#D4FF00] text-[#111111]' : 'bg-[#E5E5E0] text-[#444444]'
                }`}>
                  {p.number}
                </span>
                <span className="truncate max-w-[200px] sm:max-w-xs">{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Content Container */}
        <div className="bg-[#F7F7F5] rounded-xl border border-[#D9D9D4] p-6 sm:p-10">
          
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#D9D9D4] gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#666666]">
                {caseStudy.clientType} • {caseStudy.role}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#111111] mt-1 leading-tight">
                {caseStudy.title}
              </h3>
              <p className="text-sm sm:text-base text-[#555555] mt-1">
                {caseStudy.subtitle}
              </p>
            </div>

            <button
              onClick={() => onOpenDeck(activeProject, 0)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#111111] text-white hover:bg-black font-mono text-xs font-bold rounded shrink-0 shadow-xs"
            >
              <Maximize2 className="w-4 h-4 text-[#D4FF00]" />
              <span>Launch Full Slide Deck ({activeProject.slides.length} Slides)</span>
            </button>
          </div>

          {/* 6-Step Case Study Grid Breakdown */}
          <div className="space-y-10">
            
            {/* Step 01 & 02: Context & Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 01 Context */}
              <div className="p-6 bg-white rounded-lg border border-[#D9D9D4]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded">
                    01
                  </span>
                  <h4 className="font-display font-bold text-lg text-[#111111]">Context & Objective</h4>
                </div>
                <p className="text-sm text-[#444444] leading-relaxed font-sans">
                  {caseStudy.context}
                </p>
                <div className="mt-4 pt-3 border-t border-[#EBEBE6] font-mono text-xs text-[#666666]">
                  <strong>Deliverables:</strong> {caseStudy.deliverables.join(' • ')}
                </div>
              </div>

              {/* 02 Challenge */}
              <div className="p-6 bg-white rounded-lg border border-[#D9D9D4]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded">
                    02
                  </span>
                  <h4 className="font-display font-bold text-lg text-[#111111]">The Core Challenge</h4>
                </div>
                <p className="text-sm text-[#444444] leading-relaxed font-sans">
                  {caseStudy.challenge}
                </p>
                <div className="mt-4 pt-3 border-t border-[#EBEBE6] font-mono text-xs text-[#666666]">
                  <strong>Constraint:</strong> High information density requiring sub-minute comprehension.
                </div>
              </div>

            </div>

            {/* Step 03: Approach */}
            <div className="p-6 bg-white rounded-lg border border-[#D9D9D4]">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded">
                  03
                </span>
                <h4 className="font-display font-bold text-lg text-[#111111]">Strategic Approach</h4>
              </div>
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-sans">
                {caseStudy.approach}
              </p>
            </div>

            {/* Step 04: Visual System Specifications */}
            <div className="p-6 bg-white rounded-lg border border-[#D9D9D4]">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded">
                  04
                </span>
                <h4 className="font-display font-bold text-lg text-[#111111]">Visual System & Typography</h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Typography Rationale */}
                <div className="p-4 bg-[#F7F7F5] rounded border border-[#E5E5E0]">
                  <div className="font-mono text-xs font-bold text-[#111111] mb-2 uppercase">
                    Typography Pairing
                  </div>
                  <div className="space-y-2 text-xs text-[#444444]">
                    <div>
                      <span className="font-semibold text-[#111111]">Headings:</span> {caseStudy.visualSystem.typography.primary}
                    </div>
                    <div>
                      <span className="font-semibold text-[#111111]">Body & Data:</span> {caseStudy.visualSystem.typography.secondary}
                    </div>
                    <p className="pt-2 text-[11px] text-[#666666] italic border-t border-[#D9D9D4]">
                      {caseStudy.visualSystem.typography.rationale}
                    </p>
                  </div>
                </div>

                {/* Color Palette Rationale */}
                <div className="p-4 bg-[#F7F7F5] rounded border border-[#E5E5E0]">
                  <div className="font-mono text-xs font-bold text-[#111111] mb-2 uppercase">
                    Color Architecture
                  </div>
                  <div className="space-y-2">
                    {caseStudy.visualSystem.colors.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 rounded border border-black/20" style={{ backgroundColor: c.hex }} />
                          <span className="font-medium text-[#111111]">{c.name}</span>
                        </div>
                        <span className="font-mono text-[10px] text-[#666666]">{c.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid & Aspect Ratio */}
                <div className="p-4 bg-[#F7F7F5] rounded border border-[#E5E5E0]">
                  <div className="font-mono text-xs font-bold text-[#111111] mb-2 uppercase">
                    Grid & Specifications
                  </div>
                  <div className="space-y-2 text-xs text-[#444444]">
                    <div>
                      <span className="font-semibold text-[#111111]">Grid:</span> {caseStudy.visualSystem.grid}
                    </div>
                    <div>
                      <span className="font-semibold text-[#111111]">Aspect Ratio:</span> {caseStudy.visualSystem.aspectRatio}
                    </div>
                    <div className="pt-2 text-[11px] text-[#666666] border-t border-[#D9D9D4]">
                      Strict margin cushions (≥ 40px) ensure zero edge collisions during projection.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Step 05: Information Hierarchy Rules */}
            <div className="p-6 bg-white rounded-lg border border-[#D9D9D4]">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded">
                  05
                </span>
                <h4 className="font-display font-bold text-lg text-[#111111]">Information Hierarchy Execution</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.informationHierarchy.map((rule, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 p-3 bg-[#F7F7F5] rounded border border-[#E5E5E0] text-xs text-[#333333]">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 06: Final Result & Key Slide Showcase */}
            <div className="p-6 bg-white rounded-lg border border-[#D9D9D4]">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded">
                  06
                </span>
                <h4 className="font-display font-bold text-lg text-[#111111]">Final Outcome & Measurable Impact</h4>
              </div>
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-sans">
                {caseStudy.finalResult}
              </p>

              {/* Slide Deck Previews Inside Case Study */}
              <div className="mt-6 pt-6 border-t border-[#EBEBE6]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#111111]">
                    Key Slide Artifacts ({activeProject.slides.length} Widescreen Slides)
                  </span>
                  <button
                    onClick={() => onOpenDeck(activeProject, 0)}
                    className="font-mono text-xs text-[#111111] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View all in Fullscreen</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeProject.slides.slice(0, 3).map((slide, sIdx) => (
                    <div 
                      key={slide.id}
                      onClick={() => onOpenDeck(activeProject, sIdx)}
                      className="cursor-pointer group rounded-lg overflow-hidden border border-[#D9D9D4] hover:border-[#111111] transition-all bg-black"
                    >
                      <SlideRenderer 
                        slide={slide} 
                        isThumbnail 
                        projectNumber={activeProject.number}
                        projectCategory={activeProject.category}
                      />
                      <div className="p-2.5 bg-white border-t border-[#EBEBE6] flex items-center justify-between text-xs">
                        <span className="font-mono text-[11px] text-[#666666]">Slide {sIdx + 1}</span>
                        <span className="font-display font-semibold text-[#111111] truncate max-w-[160px]">
                          {slide.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
