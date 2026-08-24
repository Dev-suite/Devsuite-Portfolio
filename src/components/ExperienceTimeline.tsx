import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'AI Training', 'Design QA', 'Operations', 'Design & DevRel'];

  const filteredExperiences = filterCategory === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.category === filterCategory);

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#D9D9D4] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#111111] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              07 / VERIFIED EXPERIENCE
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111111] tracking-tight">
              Work Experience
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#666666] max-w-2xl font-sans">
              Chronological track record across AI presentation training, visual quality evaluation, and technical design communication.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded transition-all border ${
                  filterCategory === cat
                    ? 'bg-[#111111] text-[#D4FF00] border-[#111111] font-bold'
                    : 'bg-[#F7F7F5] text-[#555555] border-[#D9D9D4] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, idx) => (
            <div 
              key={exp.id}
              className="p-6 sm:p-8 bg-[#F7F7F5] rounded-xl border border-[#D9D9D4] hover:border-[#111111] transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                
                {/* Left: Role & Company */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-[#111111] text-[#D4FF00] rounded uppercase">
                      {exp.category}
                    </span>
                    <span className="font-mono text-xs text-[#666666] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mt-2">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm text-[#111111] font-semibold mt-0.5">
                    {exp.company}
                  </div>
                  <div className="font-mono text-xs text-[#666666] mt-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                </div>

                {/* Right: Narrative Description & Responsibilities */}
                <div className="lg:w-2/3 space-y-3 pt-2 lg:pt-0 lg:border-l lg:border-[#D9D9D4] lg:pl-8">
                  <p className="text-sm text-[#444444] font-sans leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {exp.keyResponsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {exp.skillsApplied.map((skill) => (
                      <span 
                        key={skill}
                        className="font-mono text-[10px] px-2 py-0.5 bg-white border border-[#D9D9D4] rounded text-[#444444]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
