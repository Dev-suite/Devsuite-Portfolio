import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowDown, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  LayoutTemplate,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onOpenFeaturedDeck: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenFeaturedDeck }) => {
  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[#D9D9D4] overflow-hidden">
      
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Eyebrow Label with Hairline Line */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#666666] uppercase font-mono">
            Presentation Design / AI Specialist
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-[#D9D9D4]" />
        </div>

        {/* Main Editorial Headline */}
        <div className="max-w-5xl">
          <h1 className="font-display font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-[88px] tracking-tight text-[#111111] leading-[0.88] sm:leading-[0.85]">
            Complex information.<br />
            <span className="text-[#666666]">Clearly presented.</span>
          </h1>

          {/* Secondary Positioning Subtitle */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#666666] max-w-[560px] leading-relaxed font-sans">
            I design presentation experiences that make complex ideas easier to understand, remember, and act on.
          </p>

          {/* Personal Introduction */}
          <p className="mt-3 text-sm sm:text-base text-[#777777] leading-relaxed max-w-xl font-sans">
            {PERSONAL_INFO.shortIntroduction}
          </p>
        </div>

        {/* CTAs and Direct Triggers */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              onExploreWork();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-[#F7F7F5] hover:bg-[#D4FF00] hover:text-[#111111] font-mono text-xs uppercase font-bold tracking-wider rounded transition-all shadow-xs"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111111] hover:bg-[#111111] hover:text-white border border-[#D9D9D4] font-mono text-xs uppercase font-semibold tracking-wider rounded transition-all"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenFeaturedDeck}
            className="inline-flex items-center gap-2 px-4 py-3 bg-[#D4FF00]/15 hover:bg-[#D4FF00] text-[#111111] border border-[#D4FF00] font-mono text-xs uppercase font-bold tracking-wider rounded transition-all"
          >
            <LayoutTemplate className="w-3.5 h-3.5 text-[#111111]" />
            <span>Launch Slide Viewer</span>
          </button>
        </div>

        {/* Metadata Footer Bar */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#D9D9D4] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              <strong className="text-[#111111]">Lagos, Nigeria</strong>
            </span>
            <span className="text-[#CCCCCC]">•</span>
            <span>Remote Worldwide</span>
            <span className="text-[#CCCCCC]">•</span>
            <div className="flex items-center gap-1.5 py-0.5 px-2 bg-[#D4FF00] rounded-full border border-black/10">
              <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-black">
                Available for Freelance
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] text-[#666666] tracking-wider uppercase">
            <span>16:9 Widescreen Systems</span>
            <span className="text-[#CCCCCC]">/</span>
            <span>Google Slides & Keynote</span>
            <span className="text-[#CCCCCC]">/</span>
            <span>AI Design Quality QA</span>
          </div>
        </div>

        {/* Four Core Positioning Proof Points */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white/70 hover:bg-white rounded-lg border border-[#D9D9D4] hover:border-[#111111] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#666666] group-hover:text-[#111111]">01 / CRAFT</span>
                <LayoutTemplate className="w-4 h-4 text-[#888888] group-hover:text-[#111111] transition-colors" />
              </div>
              <div className="font-display font-bold text-base text-[#111111]">Presentation Design</div>
              <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">High-stakes corporate decks, investor pitches, and executive one-pagers.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAEAE8] font-mono text-[10px] text-[#888888] uppercase tracking-wider">
              16:9 Slide Systems
            </div>
          </div>

          <div className="p-5 bg-white/70 hover:bg-white rounded-lg border border-[#D9D9D4] hover:border-[#111111] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#666666] group-hover:text-[#111111]">02 / STRUCTURE</span>
                <Layers className="w-4 h-4 text-[#888888] group-hover:text-[#111111] transition-colors" />
              </div>
              <div className="font-display font-bold text-base text-[#111111]">Information Architecture</div>
              <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">Translating dense technical data into scannable visual narratives and KPI boards.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAEAE8] font-mono text-[10px] text-[#888888] uppercase tracking-wider">
              Data & Topology
            </div>
          </div>

          <div className="p-5 bg-white/70 hover:bg-white rounded-lg border border-[#D9D9D4] hover:border-[#111111] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#666666] group-hover:text-[#111111]">03 / AI SPECIALIST</span>
                <Cpu className="w-4 h-4 text-[#888888] group-hover:text-[#111111] transition-colors" />
              </div>
              <div className="font-display font-bold text-base text-[#111111]">AI Design Quality QA</div>
              <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">Benchmarked AI models on procedural Google Slides generation at Postwork & Taste AI.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAEAE8] font-mono text-[10px] text-[#888888] uppercase tracking-wider">
              Model Evaluation
            </div>
          </div>

          <div className="p-5 bg-white/70 hover:bg-white rounded-lg border border-[#D9D9D4] hover:border-[#111111] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#666666] group-hover:text-[#111111]">04 / RIGOR</span>
                <ShieldCheck className="w-4 h-4 text-[#888888] group-hover:text-[#111111] transition-colors" />
              </div>
              <div className="font-display font-bold text-base text-[#111111]">Technical Depth</div>
              <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">Cybersecurity & Computer Science background ensuring precise technical storytelling.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAEAE8] font-mono text-[10px] text-[#888888] uppercase tracking-wider">
              Systems Literacy
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
