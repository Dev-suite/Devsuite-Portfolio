import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { SlideRenderer } from './SlideRenderer';
import { 
  ArrowUpRight, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  FileText,
  Sliders,
  Sparkles
} from 'lucide-react';

interface SelectedWorkProps {
  onOpenDeck: (project: Project, slideIndex?: number) => void;
  onOpenCaseStudy: (caseStudyId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onOpenDeck,
  onOpenCaseStudy
}) => {
  // Track active preview slide for each project card independently
  const [activeSlideIndex, setActiveSlideIndex] = useState<{ [projectId: string]: number }>({
    'project-01-security-governance': 0,
    'project-02-fintech-pitch': 0,
    'project-03-data-architecture': 0,
    'project-04-ai-presentation-training': 0
  });

  const handleNextSlide = (e: React.MouseEvent, projectId: string, totalSlides: number) => {
    e.stopPropagation();
    setActiveSlideIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalSlides
    }));
  };

  const handlePrevSlide = (e: React.MouseEvent, projectId: string, totalSlides: number) => {
    e.stopPropagation();
    setActiveSlideIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalSlides) % totalSlides
    }));
  };

  return (
    <section id="work" className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#D9D9D4] pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#666666] uppercase font-mono">
                02 / Selected Work
              </span>
              <div className="h-[1px] w-8 bg-[#D9D9D4]" />
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-5xl text-[#111111] tracking-tight">
              Selected Work
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#666666] max-w-2xl font-sans">
              Presentation systems built around hierarchy, storytelling, and visual clarity.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-[#666666]">
            4 Multi-Slide Systems • 16:9 Presentation Decks
          </div>
        </div>

        {/* Project Cards - Vertical Large Editorial Stacks */}
        <div className="space-y-16 sm:space-y-24">
          {PROJECTS.map((project, idx) => {
            const currentIdx = activeSlideIndex[project.id] || 0;
            const currentSlide = project.slides[currentIdx];

            return (
              <div 
                key={project.id}
                className="bg-white rounded-xl border border-[#D9D9D4] p-5 sm:p-8 shadow-xs hover:border-[#111111] transition-all"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#EBEBE6]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-xs px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded">
                      {project.number}
                    </span>
                    <span className="font-mono text-xs text-[#666666] uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Tool Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-[#555555] uppercase tracking-wider">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-2 py-0.5 bg-[#F0F0ED] rounded text-[#333333] border border-[#E0E0DC]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Two-Column Layout (Slide Preview Dominates) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left (or Top): 16:9 Large Interactive Slide Preview (7 cols) */}
                  <div className="lg:col-span-8 flex flex-col">
                    <div 
                      onClick={() => onOpenDeck(project, currentIdx)}
                      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-[#111111] border border-black/10"
                    >
                      {/* Live Rendered 16:9 Slide */}
                      <SlideRenderer 
                        slide={currentSlide}
                        projectNumber={project.number}
                        projectCategory={project.category}
                      />

                      {/* Top Right Slide Tag */}
                      <div className="absolute top-3 right-3 z-20 pointer-events-none">
                        <span className="text-[8px] font-mono text-[#F7F7F5] bg-black/70 backdrop-blur-xs border border-white/20 px-1.5 py-0.5 rounded tracking-widest uppercase">
                          SLIDE {String(currentIdx + 1).padStart(2, '0')}/{String(project.slides.length).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="bg-[#111111] text-[#F7F7F5] font-mono text-xs uppercase font-bold tracking-wider px-4 py-2 rounded-full border border-[#D4FF00] flex items-center gap-2 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                          <span>Click to launch fullscreen deck</span>
                        </div>
                      </div>

                      {/* Floating Slide Cycler Controls */}
                      <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1 bg-black/80 backdrop-blur-xs p-1 rounded-md border border-white/20">
                        <button
                          onClick={(e) => handlePrevSlide(e, project.id, project.slides.length)}
                          className="p-1 text-white hover:text-[#D4FF00] transition-colors"
                          title="Previous Preview Slide"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono text-[10px] text-white px-1">
                          {currentIdx + 1}/{project.slides.length}
                        </span>
                        <button
                          onClick={(e) => handleNextSlide(e, project.id, project.slides.length)}
                          className="p-1 text-white hover:text-[#D4FF00] transition-colors"
                          title="Next Preview Slide"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Slide Thumbnail Dots & Quick Selector */}
                    <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#666666]">
                      <div className="flex items-center gap-1.5">
                        {project.slides.map((s, sIdx) => (
                          <button
                            key={s.id}
                            onClick={() => setActiveSlideIndex(prev => ({ ...prev, [project.id]: sIdx }))}
                            className={`h-1.5 rounded-full transition-all ${
                              currentIdx === sIdx 
                                ? 'w-6 bg-[#111111]' 
                                : 'w-2 bg-[#D9D9D4] hover:bg-[#999999]'
                            }`}
                            title={`Jump to Slide ${sIdx + 1}`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px]">
                        Previewing Slide {currentIdx + 1}: <strong className="text-[#111111]">{currentSlide.title}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Right (or Bottom): Project Editorial Summary & Actions (4 cols) */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] leading-snug">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#666666] mt-1">
                        {project.subtitle}
                      </p>

                      <p className="text-sm text-[#444444] mt-4 leading-relaxed font-sans">
                        {project.summary}
                      </p>

                      {/* Tag list */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#F7F7F5] border border-[#D9D9D4] rounded text-[#444444] uppercase tracking-wider">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Primary Action Buttons */}
                    <div className="space-y-2.5 pt-4 border-t border-[#EBEBE6]">
                      <button
                        onClick={() => onOpenDeck(project, 0)}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-[#111111] text-[#F7F7F5] hover:bg-[#D4FF00] hover:text-[#111111] font-mono text-xs uppercase font-bold tracking-wider rounded transition-all"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Launch 5-Slide Presentation Deck</span>
                      </button>

                      <a
                        href={`#case-study-${project.caseStudy.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenCaseStudy(project.caseStudy.id);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-[#111111] hover:bg-[#111111] hover:text-white border border-[#D9D9D4] font-mono text-xs uppercase font-semibold tracking-wider rounded transition-all"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Read Detailed Case Study</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
