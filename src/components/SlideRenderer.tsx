import React from 'react';
import { SlideData } from '../types';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Sparkles,
  Shield,
  Zap,
  Grid
} from 'lucide-react';

interface SlideRendererProps {
  slide: SlideData;
  showGridOverlay?: boolean;
  isThumbnail?: boolean;
  className?: string;
  projectNumber?: string;
  projectCategory?: string;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  showGridOverlay = false,
  isThumbnail = false,
  className = "",
  projectNumber = "PROJECT 01",
  projectCategory = "Presentation Design"
}) => {
  const isCover = slide.layoutType === 'cover';
  const isDark = isCover && (slide.id.includes('p1') || slide.id.includes('p4'));

  return (
    <div 
      className={`relative w-full aspect-[16/9] rounded-lg overflow-hidden border select-none transition-all ${
        isDark 
          ? 'bg-[#111111] text-[#F7F7F5] border-[#2A2A2A]' 
          : 'bg-[#FFFFFF] text-[#111111] border-[#D9D9D4]'
      } ${className}`}
      style={{ boxSizing: 'border-box' }}
    >
      {/* Visual Grid Overlay Toggle for Designers */}
      {showGridOverlay && !isThumbnail && (
        <div className="absolute inset-0 z-40 pointer-events-none grid grid-cols-12 gap-3 px-8 py-6 opacity-25">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full bg-red-500/20 border-x border-red-500/40" />
          ))}
          <div className="absolute top-2 right-4 bg-red-600 text-white font-mono text-[10px] px-2 py-0.5 rounded">
            12-COL GRID • 40PX MARGINS
          </div>
        </div>
      )}

      {/* Slide Inner Canvas */}
      <div className={`w-full h-full flex flex-col justify-between ${
        isThumbnail ? 'p-3 sm:p-4' : 'p-6 sm:p-8 lg:p-10'
      }`}>
        
        {/* Slide Header / Metadata */}
        <div className="flex items-center justify-between border-b pb-2 sm:pb-3 mb-2 sm:mb-4 border-current/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className={`font-mono font-semibold tracking-wider ${
              isThumbnail ? 'text-[8px]' : 'text-[10px] sm:text-xs'
            } px-1.5 py-0.5 rounded ${
              isDark ? 'bg-[#D4FF00] text-[#111111]' : 'bg-[#111111] text-[#D4FF00]'
            }`}>
              {slide.eyebrow || projectNumber}
            </span>
            <span className={`font-mono uppercase tracking-wider text-current/60 ${
              isThumbnail ? 'text-[8px]' : 'text-[10px] sm:text-xs'
            }`}>
              {slide.category || projectCategory}
            </span>
          </div>
          <div className={`font-mono text-current/50 ${
            isThumbnail ? 'text-[8px]' : 'text-[10px] sm:text-xs'
          }`}>
            SLIDE {String(slide.slideNumber).padStart(2, '0')} / {String(slide.totalSlides).padStart(2, '0')}
          </div>
        </div>

        {/* Slide Content Area */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          
          {/* LAYOUT: COVER */}
          {slide.layoutType === 'cover' && (
            <div className="flex flex-col justify-between h-full py-1">
              <div>
                <h2 className={`font-display font-bold leading-tight tracking-tight ${
                  isThumbnail ? 'text-xs sm:text-sm' : 'text-lg sm:text-2xl lg:text-3xl xl:text-4xl max-w-3xl'
                }`}>
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className={`mt-1 sm:mt-2 text-current/75 font-sans ${
                    isThumbnail ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm lg:text-base max-w-2xl'
                  }`}>
                    {slide.subtitle}
                  </p>
                )}
              </div>

              {slide.content.metrics && (
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-current/15">
                  {slide.content.metrics.map((m, idx) => (
                    <div key={idx} className={`rounded p-2 sm:p-3 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                      <div className={`font-display font-bold ${
                        isThumbnail ? 'text-[11px]' : 'text-base sm:text-xl lg:text-2xl text-[#D4FF00]'
                      }`}>
                        {m.value}
                      </div>
                      <div className={`font-sans text-current/80 font-medium ${
                        isThumbnail ? 'text-[7px] truncate' : 'text-[10px] sm:text-xs'
                      }`}>
                        {m.label}
                      </div>
                      {m.delta && !isThumbnail && (
                        <div className="font-mono text-[9px] sm:text-[10px] text-current/60 mt-0.5">
                          {m.delta}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* LAYOUT: THREE COLUMN ARCHITECTURE */}
          {slide.layoutType === 'three_column_architecture' && (
            <div className="flex flex-col h-full justify-between">
              <div className="mb-2">
                <h3 className={`font-display font-bold leading-snug ${
                  isThumbnail ? 'text-[11px] line-clamp-1' : 'text-base sm:text-xl lg:text-2xl'
                }`}>
                  {slide.title}
                </h3>
                {slide.subtitle && !isThumbnail && (
                  <p className="text-xs sm:text-sm text-current/70 mt-0.5">{slide.subtitle}</p>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 flex-1 items-stretch">
                {slide.content.columns?.map((col, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-md p-2 sm:p-3 flex flex-col justify-between border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-[#F7F7F5] border-[#D9D9D4]'
                    }`}
                  >
                    <div>
                      {col.badge && (
                        <span className={`font-mono font-medium uppercase px-1 py-0.5 rounded text-[8px] sm:text-[10px] ${
                          isDark ? 'bg-[#D4FF00]/20 text-[#D4FF00]' : 'bg-black/10 text-[#111111]'
                        }`}>
                          {col.badge}
                        </span>
                      )}
                      <h4 className={`font-display font-semibold mt-1 ${
                        isThumbnail ? 'text-[9px] line-clamp-1' : 'text-xs sm:text-sm lg:text-base'
                      }`}>
                        {col.heading}
                      </h4>
                      <p className={`text-current/70 mt-0.5 leading-relaxed ${
                        isThumbnail ? 'text-[8px] line-clamp-2' : 'text-[11px] sm:text-xs'
                      }`}>
                        {col.body}
                      </p>
                    </div>

                    {col.points && !isThumbnail && (
                      <ul className="mt-2 space-y-1 pt-1.5 border-t border-current/10">
                        {col.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-[10px] sm:text-[11px] text-current/80 flex items-start gap-1">
                            <span className="text-[#D4FF00] font-bold">•</span>
                            <span className="line-clamp-1">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LAYOUT: PROBLEM / SOLUTION (2 COLUMNS + CALLOUT) */}
          {slide.layoutType === 'problem_solution' && (
            <div className="flex flex-col h-full justify-between">
              <div className="mb-2">
                <h3 className={`font-display font-bold leading-snug ${
                  isThumbnail ? 'text-[11px] line-clamp-1' : 'text-base sm:text-xl lg:text-2xl'
                }`}>
                  {slide.title}
                </h3>
                {slide.subtitle && !isThumbnail && (
                  <p className="text-xs sm:text-sm text-current/70 mt-0.5">{slide.subtitle}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 items-stretch">
                {/* Left: Structured Points */}
                <div className="space-y-2 flex flex-col justify-center">
                  {slide.content.bulletPoints?.map((bp, idx) => (
                    <div 
                      key={idx} 
                      className={`p-2 sm:p-2.5 rounded border ${
                        isDark ? 'bg-white/5 border-white/10' : 'bg-[#F7F7F5] border-[#D9D9D4]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-display font-semibold ${
                          isThumbnail ? 'text-[9px]' : 'text-xs sm:text-sm'
                        }`}>
                          {bp.label}
                        </span>
                        {bp.tag && (
                          <span className="font-mono text-[8px] sm:text-[9px] px-1 bg-[#D4FF00] text-[#111111] rounded font-bold">
                            {bp.tag}
                          </span>
                        )}
                      </div>
                      <p className={`text-current/70 mt-0.5 ${
                        isThumbnail ? 'text-[7px] line-clamp-1' : 'text-[10px] sm:text-xs'
                      }`}>
                        {bp.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right: Key Insight Callout Box */}
                {slide.content.callout && (
                  <div className={`rounded-md p-3 sm:p-4 flex flex-col justify-between border ${
                    isDark ? 'bg-black/60 border-[#D4FF00]/40' : 'bg-[#111111] text-[#F7F7F5] border-black'
                  }`}>
                    <div>
                      <div className="font-mono text-[9px] sm:text-[10px] text-[#D4FF00] font-bold uppercase tracking-wider mb-1">
                        EXECUTIVE TAKEAWAY
                      </div>
                      <p className={`font-sans leading-relaxed italic ${
                        isThumbnail ? 'text-[8px] line-clamp-3' : 'text-xs sm:text-sm lg:text-base'
                      }`}>
                        "{slide.content.callout.quote}"
                      </p>
                    </div>
                    {slide.content.callout.highlight && (
                      <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between">
                        <span className="font-mono text-[9px] text-white/60">Core Impact</span>
                        <span className="font-mono text-[10px] sm:text-xs text-[#D4FF00] font-semibold">
                          {slide.content.callout.highlight}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* LAYOUT: KPI DASHBOARD */}
          {slide.layoutType === 'kpi_dashboard' && (
            <div className="flex flex-col h-full justify-between">
              <div className="mb-2">
                <h3 className={`font-display font-bold leading-snug ${
                  isThumbnail ? 'text-[11px] line-clamp-1' : 'text-base sm:text-xl lg:text-2xl'
                }`}>
                  {slide.title}
                </h3>
                {slide.subtitle && !isThumbnail && (
                  <p className="text-xs sm:text-sm text-current/70 mt-0.5">{slide.subtitle}</p>
                )}
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 my-1">
                {slide.content.metrics?.map((m, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-md p-2 sm:p-3 border flex flex-col justify-between ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-[#F7F7F5] border-[#D9D9D4]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-display font-bold ${
                        isThumbnail ? 'text-xs' : 'text-lg sm:text-2xl lg:text-3xl text-[#111111] dark:text-[#D4FF00]'
                      }`}>
                        {m.value}
                      </span>
                      {m.trend === 'up' && <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-[#D4FF00]" />}
                    </div>
                    <div>
                      <div className={`font-sans font-medium text-current/80 ${
                        isThumbnail ? 'text-[8px] truncate' : 'text-[10px] sm:text-xs'
                      }`}>
                        {m.label}
                      </div>
                      {m.delta && !isThumbnail && (
                        <div className="font-mono text-[9px] text-current/60 mt-0.5">
                          {m.delta}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Supporting Insight Columns */}
              {slide.content.columns && !isThumbnail && (
                <div className="grid grid-cols-2 gap-3 mt-1 pt-2 border-t border-current/10">
                  {slide.content.columns.map((col, idx) => (
                    <div key={idx} className="text-[11px] sm:text-xs">
                      <span className="font-semibold font-display">{col.heading}: </span>
                      <span className="text-current/70">{col.body}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* LAYOUT: PROCESS TIMELINE */}
          {slide.layoutType === 'process_timeline' && (
            <div className="flex flex-col h-full justify-between">
              <div className="mb-2">
                <h3 className={`font-display font-bold leading-snug ${
                  isThumbnail ? 'text-[11px] line-clamp-1' : 'text-base sm:text-xl lg:text-2xl'
                }`}>
                  {slide.title}
                </h3>
                {slide.subtitle && !isThumbnail && (
                  <p className="text-xs sm:text-sm text-current/70 mt-0.5">{slide.subtitle}</p>
                )}
              </div>

              <div className="grid grid-cols-4 gap-2 flex-1 items-stretch">
                {slide.content.timelineSteps?.map((step, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-md p-2 sm:p-3 border flex flex-col justify-between relative ${
                      step.status === 'active' 
                        ? 'border-[#D4FF00] bg-[#D4FF00]/10' 
                        : isDark ? 'bg-white/5 border-white/10' : 'bg-[#F7F7F5] border-[#D9D9D4]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold">
                          {step.step}
                        </span>
                        <span className={`font-mono text-[8px] px-1 py-0.2 rounded uppercase ${
                          step.status === 'done' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' :
                          step.status === 'active' ? 'bg-[#D4FF00] text-black font-bold' :
                          'bg-current/10 text-current/60'
                        }`}>
                          {step.status || 'Planned'}
                        </span>
                      </div>
                      <h4 className={`font-display font-semibold ${
                        isThumbnail ? 'text-[8px] line-clamp-1' : 'text-xs sm:text-sm'
                      }`}>
                        {step.title}
                      </h4>
                      <p className={`text-current/70 mt-1 leading-tight ${
                        isThumbnail ? 'text-[7px] line-clamp-2' : 'text-[10px] sm:text-[11px]'
                      }`}>
                        {step.detail}
                      </p>
                    </div>

                    <div className={`font-mono text-current/50 pt-1 border-t border-current/10 ${
                      isThumbnail ? 'text-[6px]' : 'text-[9px]'
                    }`}>
                      {step.timeframe}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LAYOUT: MATRIX COMPARISON */}
          {slide.layoutType === 'matrix_comparison' && (
            <div className="flex flex-col h-full justify-between">
              <div className="mb-2">
                <h3 className={`font-display font-bold leading-snug ${
                  isThumbnail ? 'text-[11px] line-clamp-1' : 'text-base sm:text-xl lg:text-2xl'
                }`}>
                  {slide.title}
                </h3>
                {slide.subtitle && !isThumbnail && (
                  <p className="text-xs sm:text-sm text-current/70 mt-0.5">{slide.subtitle}</p>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-1 sm:space-y-1.5">
                {slide.content.matrixItems?.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`grid grid-cols-12 gap-2 p-1.5 sm:p-2 rounded border items-center ${
                      idx % 2 === 0 
                        ? (isDark ? 'bg-white/5 border-white/10' : 'bg-[#F7F7F5] border-[#D9D9D4]')
                        : 'border-transparent'
                    }`}
                  >
                    <div className={`col-span-4 font-display font-semibold ${
                      isThumbnail ? 'text-[8px] truncate' : 'text-[11px] sm:text-xs'
                    }`}>
                      {item.feature}
                    </div>
                    <div className={`col-span-3 text-current/60 ${
                      isThumbnail ? 'text-[7px] truncate' : 'text-[10px] sm:text-[11px]'
                    }`}>
                      {item.traditional}
                    </div>
                    <div className={`col-span-3 font-medium ${
                      isThumbnail ? 'text-[7px] truncate' : 'text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {item.optimized}
                    </div>
                    <div className={`col-span-2 font-mono text-right font-bold ${
                      isThumbnail ? 'text-[7px] truncate' : 'text-[10px] sm:text-xs text-[#D4FF00] dark:text-[#D4FF00]'
                    }`}>
                      {item.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Slide Footer */}
        <div className="flex items-center justify-between border-t pt-1.5 sm:pt-2 mt-2 border-current/10 font-mono text-current/40">
          <span className={isThumbnail ? 'text-[6px]' : 'text-[8px] sm:text-[9px]'}>
            KAMALDEEN SULYMAN • PRESENTATION DESIGN STUDIO
          </span>
          <span className={isThumbnail ? 'text-[6px]' : 'text-[8px] sm:text-[9px]'}>
            {slide.gridSpecs.hierarchyLevel}
          </span>
        </div>

      </div>
    </div>
  );
};
