export interface SlideData {
  id: string;
  slideNumber: number;
  totalSlides: number;
  title: string;
  category: string;
  subtitle?: string;
  eyebrow?: string;
  layoutType: 
    | 'cover'
    | 'executive_summary'
    | 'problem_solution'
    | 'kpi_dashboard'
    | 'three_column_architecture'
    | 'process_timeline'
    | 'matrix_comparison'
    | 'data_charts'
    | 'typography_grid';
  presenterNotes: string;
  gridSpecs: {
    columns: number;
    margins: string;
    hierarchyLevel: string;
  };
  content: {
    leadParagraph?: string;
    bulletPoints?: { label: string; description: string; tag?: string }[];
    metrics?: { value: string; label: string; delta?: string; trend?: 'up' | 'neutral' | 'down' }[];
    columns?: { heading: string; body: string; badge?: string; points?: string[] }[];
    timelineSteps?: { step: string; title: string; timeframe: string; detail: string; status?: 'done' | 'active' | 'future' }[];
    matrixItems?: { feature: string; traditional: string; optimized: string; impact: string }[];
    chartData?: { label: string; value: number; baseline?: number }[];
    callout?: { quote: string; author?: string; highlight?: string };
    tagline?: string;
  };
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  clientType: string;
  role: string;
  deliverables: string[];
  context: string;
  challenge: string;
  approach: string;
  visualSystem: {
    typography: { primary: string; secondary: string; rationale: string };
    colors: { name: string; hex: string; role: string }[];
    grid: string;
    aspectRatio: string;
  };
  informationHierarchy: string[];
  finalResult: string;
  slideReferences: number[]; // indices of slides
  keyLearnings: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tools: string[];
  summary: string;
  tags: string[];
  slides: SlideData[];
  caseStudy: CaseStudyData;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  category: 'AI Training' | 'Design QA' | 'Operations' | 'Design & DevRel';
  description: string;
  keyResponsibilities: string[];
  skillsApplied: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  items: { name: string; emphasis?: boolean }[];
}

export interface AIRubricCriterion {
  criterion: string;
  category: 'Typography' | 'Hierarchy' | 'Layout Density' | 'Contrast & Color' | 'Brand Alignment';
  description: string;
  aiDefectRisk: string;
  evaluatorRemedy: string;
  standardBenchmark: string;
}
