import React, { useState, useEffect, useCallback } from 'react';
import { Project } from '../types';
import { SlideRenderer } from './SlideRenderer';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  FileText, 
  Maximize2, 
  Minimize2,
  Sliders,
  CheckCircle,
  Eye,
  Info
} from 'lucide-react';

interface SlideViewerModalProps {
  project: Project | null;
  initialSlideIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const SlideViewerModal: React.FC<SlideViewerModalProps> = ({
  project,
  initialSlideIndex = 0,
  isOpen,
  onClose
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlideIndex);
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setCurrentSlideIndex(initialSlideIndex);
  }, [initialSlideIndex, project]);

  const handleNext = useCallback(() => {
    if (!project) return;
    setCurrentSlideIndex((prev) => (prev < project.slides.length - 1 ? prev + 1 : 0));
  }, [project]);

  const handlePrev = useCallback(() => {
    if (!project) return;
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : project.slides.length - 1));
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !project) return null;

  const currentSlide = project.slides[currentSlideIndex] || project.slides[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-2 sm:p-4 md:p-6 transition-all duration-200">
      <div className="relative w-full max-w-6xl bg-[#1A1A1A] text-[#F7F7F5] rounded-xl border border-[#333333] shadow-2xl flex flex-col max-h-[95vh] overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2A2A2A] bg-[#141414]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#D4FF00] text-[#111111] rounded">
              {project.number}
            </span>
            <div className="hidden sm:block">
              <h3 className="font-display font-semibold text-sm text-white truncate max-w-md">
                {project.title}
              </h3>
              <p className="text-[11px] text-white/50 font-mono">
                {project.category} • 16:9 Presentation Format
              </p>
            </div>
          </div>

          {/* Center: Slide Counter */}
          <div className="flex items-center gap-2 bg-[#222222] px-3 py-1 rounded-full border border-[#333333]">
            <button 
              onClick={handlePrev}
              className="p-1 hover:text-[#D4FF00] transition-colors"
              title="Previous Slide (Left Arrow)"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs font-medium px-1">
              Slide <span className="text-[#D4FF00] font-bold">{currentSlideIndex + 1}</span> of {project.slides.length}
            </span>
            <button 
              onClick={handleNext}
              className="p-1 hover:text-[#D4FF00] transition-colors"
              title="Next Slide (Right Arrow or Space)"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Grid Guides Toggle */}
            <button
              onClick={() => setShowGridOverlay(!showGridOverlay)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors border ${
                showGridOverlay 
                  ? 'bg-[#D4FF00] text-black border-[#D4FF00] font-bold' 
                  : 'bg-[#222222] text-white/70 hover:text-white border-[#333333]'
              }`}
              title="Toggle 12-Column Grid & Margin Guides"
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Grid Guides</span>
            </button>

            {/* Presenter Notes Toggle */}
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors border ${
                showNotes 
                  ? 'bg-[#D4FF00] text-black border-[#D4FF00] font-bold' 
                  : 'bg-[#222222] text-white/70 hover:text-white border-[#333333]'
              }`}
              title="Toggle Slide Notes & Design Rationale"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Notes</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors"
              aria-label="Close Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Stage */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-center bg-[#0D0D0D]">
          
          <div className="w-full max-w-4xl relative group">
            {/* Left/Right Floating Jump Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-white hover:text-[#D4FF00] border border-white/20 transition-all shadow-lg opacity-80 hover:opacity-100"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-white hover:text-[#D4FF00] border border-white/20 transition-all shadow-lg opacity-80 hover:opacity-100"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* High-Fidelity 16:9 Presentation Canvas */}
            <div className="shadow-2xl ring-1 ring-white/10 rounded-lg overflow-hidden">
              <SlideRenderer 
                slide={currentSlide}
                showGridOverlay={showGridOverlay}
                projectNumber={project.number}
                projectCategory={project.category}
              />
            </div>
          </div>

          {/* Presenter Notes & Design Specifications Drawer */}
          {showNotes && (
            <div className="w-full max-w-4xl mt-4 p-4 rounded-lg bg-[#181818] border border-[#333333] text-xs font-sans animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#D4FF00]" />
                  <span className="font-mono font-bold uppercase tracking-wider text-white">
                    Design Rationale & Slide Notes
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-white/50">
                  <span>Layout: {currentSlide.layoutType}</span>
                  <span>Grid: {currentSlide.gridSpecs.columns} Col ({currentSlide.gridSpecs.margins})</span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                {currentSlide.presenterNotes}
              </p>
            </div>
          )}

        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="p-3 bg-[#141414] border-t border-[#2A2A2A] overflow-x-auto">
          <div className="flex items-center justify-center gap-3 min-w-max">
            {project.slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`relative w-28 aspect-[16/9] rounded overflow-hidden border-2 transition-all cursor-pointer ${
                  currentSlideIndex === idx 
                    ? 'border-[#D4FF00] ring-2 ring-[#D4FF00]/30 scale-105' 
                    : 'border-white/10 opacity-50 hover:opacity-100'
                }`}
              >
                <SlideRenderer 
                  slide={s} 
                  isThumbnail 
                  projectNumber={project.number}
                  projectCategory={project.category}
                />
                <div className="absolute bottom-1 right-1 font-mono text-[8px] px-1 bg-black/80 text-white rounded">
                  {idx + 1}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
