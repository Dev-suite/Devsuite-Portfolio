import React, { useState } from 'react';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { InformationDesignSection } from './components/InformationDesignSection';
import { AIDesignExperience } from './components/AIDesignExperience';
import { DesignApproach } from './components/DesignApproach';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsToolkit } from './components/SkillsToolkit';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SlideViewerModal } from './components/SlideViewerModal';

export default function App() {
  const [selectedProjectForDeck, setSelectedProjectForDeck] = useState<Project | null>(null);
  const [initialSlideIndex, setInitialSlideIndex] = useState<number>(0);
  const [isDeckViewerOpen, setIsDeckViewerOpen] = useState<boolean>(false);
  const [targetCaseStudyId, setTargetCaseStudyId] = useState<string | null>(null);

  const handleOpenDeck = (project: Project, slideIdx = 0) => {
    setSelectedProjectForDeck(project);
    setInitialSlideIndex(slideIdx);
    setIsDeckViewerOpen(true);
  };

  const handleCloseDeck = () => {
    setIsDeckViewerOpen(false);
  };

  const handleOpenCaseStudy = (caseStudyId: string) => {
    setTargetCaseStudyId(caseStudyId);
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111111] selection:bg-[#D4FF00] selection:text-[#111111]">
      {/* Sticky Editorial Navigation */}
      <Navbar onOpenDeck={() => handleOpenDeck(PROJECTS[0], 0)} />

      {/* Main Content Sections */}
      <main>
        {/* 01: Hero Section */}
        <Hero 
          onExploreWork={handleExploreWork}
          onOpenFeaturedDeck={() => handleOpenDeck(PROJECTS[0], 0)}
        />

        {/* 02: Selected Presentation Work (16:9 Presentation Systems) */}
        <SelectedWork 
          onOpenDeck={handleOpenDeck}
          onOpenCaseStudy={handleOpenCaseStudy}
        />

        {/* 03: In-Depth Case Studies (Context, Challenge, Approach, Visual System, Hierarchy, Result) */}
        <CaseStudiesSection 
          onOpenDeck={handleOpenDeck}
          targetCaseStudyId={targetCaseStudyId}
        />

        {/* 04: Information Design & Data Visualization Showcase */}
        <InformationDesignSection />

        {/* 05: AI + Design Experience (Postwork, Taste AI, Workflow & Rubrics) */}
        <AIDesignExperience />

        {/* 06: Design Approach (01 Understand -> 02 Structure -> 03 Prioritize -> 04 Design -> 05 Refine) */}
        <DesignApproach />

        {/* 07: Work Experience (Chronological CV Timeline) */}
        <ExperienceTimeline />

        {/* 08: Skills / Toolkit (Presentation, Design, AI, Communication) */}
        <SkillsToolkit />

        {/* 09: About Section (Technical Background + Design Practice) */}
        <AboutSection />

        {/* 10: Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 16:9 Presentation Slide Viewer Modal */}
      <SlideViewerModal 
        project={selectedProjectForDeck}
        initialSlideIndex={initialSlideIndex}
        isOpen={isDeckViewerOpen}
        onClose={handleCloseDeck}
      />
    </div>
  );
}
