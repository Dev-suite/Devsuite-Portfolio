import React, { useState } from 'react';
import { AI_WORKFLOW_STEPS, AI_RUBRIC } from '../data/portfolioData';
import { 
  Sparkles, 
  Cpu, 
  Search, 
  CheckSquare, 
  Sliders, 
  Award, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  ShieldCheck,
  Zap,
  LayoutTemplate
} from 'lucide-react';

export const AIDesignExperience: React.FC = () => {
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState<number>(2); // Default to Step 3 (Visual Evaluation)
  const [selectedRubricCategory, setSelectedRubricCategory] = useState<string>('All');

  const filteredRubric = selectedRubricCategory === 'All' 
    ? AI_RUBRIC 
    : AI_RUBRIC.filter(r => r.category === selectedRubricCategory);

  const categories = ['All', 'Typography', 'Hierarchy', 'Layout Density', 'Contrast & Color', 'Brand Alignment'];

  return (
    <section id="ai-design" className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#111111] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            05 / AI + DESIGN SPECIALIZATION
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Designing for the age of generative AI.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#555555] font-sans leading-relaxed">
            My practice sits directly at the intersection of presentation design and generative AI systems — training models, evaluating visual outputs against strict design standards, and refining procedural layout algorithms.
          </p>
        </div>

        {/* Highlighted AI Roles (Postwork & Taste AI) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Postwork Card */}
          <div className="p-6 sm:p-8 bg-[#F7F7F5] rounded-xl border border-[#D9D9D4] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#D9D9D4]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded uppercase">
                    AI TRAINING
                  </span>
                  <span className="font-mono text-xs text-[#666666]">March 2026 – May 2026</span>
                </div>
                <span className="font-mono text-xs font-semibold text-[#111111]">Remote</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#111111] mt-4">
                AI Trainer Expert
              </h3>
              <div className="font-mono text-xs text-[#666666] font-semibold mt-0.5">
                Postwork
              </div>

              <p className="mt-4 text-sm text-[#444444] font-sans leading-relaxed">
                "Trained advanced AI models on structural and procedural generation, specifically optimizing their ability to create comprehensive, professional Google Slides presentations."
              </p>

              <div className="mt-6 space-y-2 text-xs text-[#444444]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>Constructed procedural Google Slides prompt architectures and layout coordinate guidelines.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>Created benchmark datasets testing model responses to dense briefings and technical data tables.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>Trained models to enforce balanced whitespace, padding rules, and cross-slide narrative pacing.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D9D9D4] flex flex-wrap gap-2 font-mono text-[11px] text-[#555555]">
              <span className="px-2 py-0.5 bg-white border border-[#D9D9D4] rounded">Google Slides</span>
              <span className="px-2 py-0.5 bg-white border border-[#D9D9D4] rounded">Procedural Layout</span>
              <span className="px-2 py-0.5 bg-white border border-[#D9D9D4] rounded">AI Training</span>
            </div>
          </div>

          {/* Taste AI Card */}
          <div className="p-6 sm:p-8 bg-[#F7F7F5] rounded-xl border border-[#D9D9D4] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#D9D9D4]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded uppercase">
                    DESIGN QUALITY QA
                  </span>
                  <span className="font-mono text-xs text-[#666666]">April 2026 – August 2026</span>
                </div>
                <span className="font-mono text-xs font-semibold text-[#111111]">Remote</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#111111] mt-4">
                AI Design Quality Evaluator
              </h3>
              <div className="font-mono text-xs text-[#666666] font-semibold mt-0.5">
                Taste AI — Golden Critiques
              </div>

              <p className="mt-4 text-sm text-[#444444] font-sans leading-relaxed">
                "Evaluated AI-generated designs against creative briefs and visual quality standards, delivering rigorous critiques across typography, layout, and hierarchy."
              </p>

              <div className="mt-6 space-y-2 text-xs text-[#444444]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>Structured critiques covering typography, color, layout, accessibility, hierarchy, and brand alignment.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>Applied detailed QA guidelines to deliver specific, evidence-based design observations.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>Instructed and fine-tuned AI systems on frontend design workflows and slide generation.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D9D9D4] flex flex-wrap gap-2 font-mono text-[11px] text-[#555555]">
              <span className="px-2 py-0.5 bg-white border border-[#D9D9D4] rounded">Visual Quality QA</span>
              <span className="px-2 py-0.5 bg-white border border-[#D9D9D4] rounded">Design Critique</span>
              <span className="px-2 py-0.5 bg-white border border-[#D9D9D4] rounded">Accessibility (WCAG)</span>
            </div>
          </div>

        </div>

        {/* Interactive "Prompt → Design → Evaluation → Refinement" Pipeline */}
        <div className="mb-16 bg-[#111111] text-[#F7F7F5] rounded-xl p-6 sm:p-10 border border-black">
          
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs font-bold text-[#D4FF00] uppercase tracking-wider">
              THE GENERATIVE DESIGN & QA LIFECYCLE
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
              How I Evaluate & Refine AI-Generated Presentation Systems
            </h3>
            <p className="text-sm text-white/70 mt-2 font-sans">
              I don't simply create slides; I understand how to evaluate, benchmark, and improve AI-assisted visual communication from first prompt to boardroom deliverable.
            </p>
          </div>

          {/* 6 Step Horizontal Process Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {AI_WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = selectedWorkflowStep === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setSelectedWorkflowStep(idx)}
                  className={`p-3 rounded-lg text-left transition-all border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#222222] border-[#D4FF00] ring-1 ring-[#D4FF00]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono text-[10px] font-bold ${
                        isSelected ? 'text-[#D4FF00]' : 'text-white/40'
                      }`}>
                        STEP {step.stepNumber}
                      </span>
                    </div>
                    <div className="font-display font-semibold text-xs text-white line-clamp-1">
                      {step.name}
                    </div>
                  </div>
                  <div className="font-mono text-[9px] text-white/50 mt-2">
                    {step.role}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          {(() => {
            const activeStep = AI_WORKFLOW_STEPS[selectedWorkflowStep];
            return (
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#333333] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#D4FF00] font-bold uppercase mb-1">
                    <span>STEP {activeStep.stepNumber}</span>
                    <span>•</span>
                    <span>{activeStep.role}</span>
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    {activeStep.name}
                  </h4>
                  <p className="text-sm text-white/80 mt-2 font-sans leading-relaxed">
                    {activeStep.description}
                  </p>
                  <p className="text-xs text-white/50 mt-2 font-mono">
                    Specialist Focus: {activeStep.details}
                  </p>
                </div>

                <div className="md:col-span-4 p-4 rounded bg-black/50 border border-white/10 text-xs font-mono">
                  <div className="text-white/50 text-[10px] uppercase mb-1">QA Benchmark Status</div>
                  <div className="text-[#D4FF00] font-bold text-sm">Evidence-Based Validation</div>
                  <div className="text-white/70 text-[11px] mt-1">
                    Ensuring zero visual hallucinations, proper typographic scaling, and strict margin containment.
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

        {/* Live Visual Quality QA Rubric Matrix */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-[#D9D9D4] gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-[#666666] uppercase">
                OBJECTIVE EVALUATION FRAMEWORK
              </span>
              <h3 className="font-display font-bold text-2xl text-[#111111] mt-0.5">
                The 5-Pillar Design QA Rubric
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedRubricCategory(cat)}
                  className={`px-3 py-1 rounded transition-all border ${
                    selectedRubricCategory === cat
                      ? 'bg-[#111111] text-[#D4FF00] border-[#111111] font-bold'
                      : 'bg-[#F7F7F5] text-[#666666] border-[#D9D9D4] hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Rubric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRubric.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-[#111111]">
                    {item.criterion}
                  </h4>
                  <p className="text-xs text-[#555555] mt-1 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* AI Defect Risk vs Evaluator Remedy */}
                <div className="space-y-2 pt-3 border-t border-[#D9D9D4] text-xs">
                  <div className="p-2 bg-rose-50 border border-rose-200 rounded text-rose-900">
                    <div className="font-mono text-[10px] font-bold uppercase text-rose-700 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Common AI Defect</span>
                    </div>
                    <p className="text-[11px] mt-0.5">{item.aiDefectRisk}</p>
                  </div>

                  <div className="p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-900">
                    <div className="font-mono text-[10px] font-bold uppercase text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Evaluator Remedy</span>
                    </div>
                    <p className="text-[11px] mt-0.5">{item.evaluatorRemedy}</p>
                  </div>
                </div>

                <div className="font-mono text-[10px] text-[#666666] pt-1">
                  <strong>Standard:</strong> {item.standardBenchmark}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
