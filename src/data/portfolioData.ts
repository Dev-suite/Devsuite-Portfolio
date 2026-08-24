import { Project, ExperienceItem, SkillCategory, AIRubricCriterion } from '../types';

export const PERSONAL_INFO = {
  name: "Kamaldeen Sulyman",
  primaryPositioning: "Presentation Designer & AI Design Specialist",
  secondaryPositioning: "I turn complex information into clear, structured, presentation-ready visual stories.",
  headline: "Complex information. Clearly presented.",
  alternativeSupportingLine: "Presentation designer focused on visual hierarchy, information design, storytelling, and AI-assisted creative workflows.",
  shortIntroduction: "I'm Kamaldeen Sulyman. I design presentation experiences that make complex ideas easier to understand, remember, and act on.",
  location: "Lagos, Nigeria",
  availability: "Remote • Available for freelance projects",
  email: "Devsuite.sulyman@gmail.com",
  linkedIn: "https://www.linkedin.com/in/kamaldeen-sulyman-999335222/",
  education: [
    {
      degree: "BSc Cybersecurity",
      institution: "Miva University",
      focus: "Information systems, security frameworks, and structured problem analysis"
    },
    {
      degree: "HND Computer Science",
      institution: "Kwara State Polytechnic",
      focus: "Computational structures, data systems, and algorithmic logic"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "project-01-security-governance",
    number: "PROJECT 01",
    title: "Enterprise Cloud Governance & Security Architecture",
    subtitle: "Executive Board Presentation System",
    category: "Presentation Design",
    tools: ["Google Slides", "Figma", "Information Design", "Vector Graphics"],
    summary: "A high-stakes corporate presentation system designed to translate dense infrastructure risk assessments, compliance frameworks, and cloud security architecture into an executive-ready strategic briefing.",
    tags: ["Executive Deck", "Information Architecture", "Risk Matrix", "Governance"],
    slides: [
      {
        id: "p1-s1",
        slideNumber: 1,
        totalSlides: 5,
        category: "Presentation Design",
        eyebrow: "EXECUTIVE STRATEGY BRIEFING",
        title: "Enterprise Cloud Governance & Security Architecture",
        subtitle: "A unified operating model for zero-trust posture, risk mitigation, and infrastructure resilience.",
        layoutType: "cover",
        presenterNotes: "Setting the executive frame: Clear visual title anchor, neutral dark ground for authority, high contrast metadata.",
        gridSpecs: { columns: 12, margins: "48px", hierarchyLevel: "Display H1 + Supporting Subhead" },
        content: {
          leadParagraph: "Prepared for Senior Technology Leadership & Audit Committee. Outlining key security pillars, threat exposure thresholds, and capital resource allocation.",
          tagline: "Q3 Strategy & Governance Framework",
          metrics: [
            { value: "99.98%", label: "Target Uptime SLA", delta: "+0.4% YoY" },
            { value: "48ms", label: "Incident Detection Median", delta: "-35% MTTR" },
            { value: "Zero-Trust", label: "Core Security Architecture", delta: "100% Policy Enforced" }
          ]
        }
      },
      {
        id: "p1-s2",
        slideNumber: 2,
        totalSlides: 5,
        category: "Presentation Design",
        eyebrow: "01 / CURRENT THREAT TOPOLOGY",
        title: "Dissecting Multi-Cloud Friction & Surface Vulnerabilities",
        subtitle: "Fragmented tooling and asynchronous logging create blind spots across distributed clusters.",
        layoutType: "three_column_architecture",
        presenterNotes: "Focus audience attention on the three clear friction pillars before showing the unified remediation roadmap.",
        gridSpecs: { columns: 3, margins: "40px", hierarchyLevel: "Structured Comparative Grid" },
        content: {
          columns: [
            {
              badge: "Friction 01",
              heading: "Siloed Visibility",
              body: "Security teams monitor 14 disparate dashboards without unified telemetry or centralized log correlation.",
              points: ["High alert fatigue", "Mean time to triage exceeds 4 hours", "Duplicate remediation loops"]
            },
            {
              badge: "Friction 02",
              heading: "Drift in IAM Policies",
              body: "Permissions accumulate without automated de-provisioning, expanding privilege blast radius.",
              points: ["38% over-privileged service roles", "Manual auditing cycles", "Compliance reporting lag"]
            },
            {
              badge: "Friction 03",
              heading: "Edge Latency Gaps",
              body: "Legacy inspection appliances throttle real-time payload analysis across microservices.",
              points: ["Bottlenecks during peak throughput", "Unchecked API egress", "Elevated operational overhead"]
            }
          ]
        }
      },
      {
        id: "p1-s3",
        slideNumber: 3,
        totalSlides: 5,
        category: "Presentation Design",
        eyebrow: "02 / ARCHITECTURAL REMEDIATION",
        title: "The 3-Layer Zero-Trust Control Fabric",
        subtitle: "Establishing unified policy orchestration, continuous verification, and telemetry synthesis.",
        layoutType: "problem_solution",
        presenterNotes: "High visual clarity: left side displays the architectural mechanism, right side provides scannable outcomes.",
        gridSpecs: { columns: 2, margins: "40px", hierarchyLevel: "Split Analysis Matrix" },
        content: {
          leadParagraph: "A single control plane replaces manual validation scripts with automated continuous authentication at the proxy layer.",
          bulletPoints: [
            {
              label: "Identity & Context Gateway",
              description: "Every request is cryptographically signed and evaluated against real-time device posture before ingress.",
              tag: "Layer 01"
            },
            {
              label: "Micro-Segmented Data Plane",
              description: "Workload isolation prevents lateral movement; policy engines enforce least-privilege boundaries at runtime.",
              tag: "Layer 02"
            },
            {
              label: "Centralized Audit Stream",
              description: "Immutable event ledger synchronizes compliance evidence automatically for board review and external audit.",
              tag: "Layer 03"
            }
          ],
          callout: {
            quote: "By shifting from perimeter security to identity-driven micro-segmentation, mean time to isolate compromised nodes drops from hours to sub-second automated eviction.",
            highlight: "Sub-Second Isolation"
          }
        }
      },
      {
        id: "p1-s4",
        slideNumber: 4,
        totalSlides: 5,
        category: "Presentation Design",
        eyebrow: "03 / OPERATIONAL METRICS",
        title: "Measurable Impact Across Key Governance Indicators",
        subtitle: "Quantifiable improvements in compliance readiness, incident response, and audit efficiency.",
        layoutType: "kpi_dashboard",
        presenterNotes: "Clean KPI cards with distinct typographic weights ensure numbers stand out immediately without clutter.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Data Dashboard" },
        content: {
          metrics: [
            { value: "-74%", label: "Audit Prep Overhead", delta: "From 6 weeks to 3 days", trend: "up" },
            { value: "100%", label: "SOC2 Automated Controls", delta: "Real-time verification", trend: "up" },
            { value: "0", label: "Unmonitored Service Accounts", delta: "Full inventory achieved", trend: "neutral" },
            { value: "< 50ms", label: "Token Validation Latency", delta: "Zero user friction", trend: "up" }
          ],
          columns: [
            {
              heading: "Governance Efficiency",
              body: "Audit prep cycles transformed into real-time posture reporting, reducing legal & security team distraction."
            },
            {
              heading: "Cost Optimization",
              body: "Consolidation of 6 redundant monitoring tools into a single telemetry lake saves annual licensing costs."
            }
          ]
        }
      },
      {
        id: "p1-s5",
        slideNumber: 5,
        totalSlides: 5,
        category: "Presentation Design",
        eyebrow: "04 / IMPLEMENTATION ROADMAP",
        title: "Phased Execution & Deployment Milestones",
        subtitle: "A structured 4-phase rollout strategy ensuring zero disruption to production workloads.",
        layoutType: "process_timeline",
        presenterNotes: "Step-by-step roadmap showing clear dependencies, timeframes, and deliverables.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Horizontal Phased Pipeline" },
        content: {
          timelineSteps: [
            { step: "Phase 01", title: "Discovery & Inventory", timeframe: "Weeks 1–3", detail: "Audit all service roles, catalog shadow APIs, and baseline access traffic.", status: "done" },
            { step: "Phase 02", title: "Policy Synthesis", timeframe: "Weeks 4–7", detail: "Formulate automated role definitions and deploy proxy telemetry sidecars.", status: "done" },
            { step: "Phase 03", title: "Enforcement Staging", timeframe: "Weeks 8–11", detail: "Activate zero-trust ingress in audit-mode across staging clusters.", status: "active" },
            { step: "Phase 04", title: "Full Production Cutover", timeframe: "Weeks 12–14", detail: "Live policy enforcement with automated incident containment triggers.", status: "future" }
          ]
        }
      }
    ],
    caseStudy: {
      id: "cs-01",
      title: "Structuring Complex Security Architecture for Executive Decision-Makers",
      subtitle: "How disciplined information hierarchy turned a 90-page technical audit into an impactful 5-slide briefing.",
      clientType: "Enterprise Presentation Study",
      role: "Lead Presentation Designer & Information Architect",
      deliverables: ["16:9 Executive Slide Deck", "Data Visualization System", "Architectural Flow Schematics", "Presenter Notes"],
      context: "A enterprise infrastructure team needed to present a multi-million dollar cloud security overhaul to the board. The original draft was a dense 90-page text-heavy technical report filled with unparsed logs, unstructured bullet lists, and microscopic architecture diagrams.",
      challenge: "Executive stakeholders had only 15 minutes to review and approve the proposal. The technical complexity needed to be distilled without losing credibility, risk accuracy, or technical rigor.",
      approach: "Conducted content decomposition: separated critical decision points (Why now, What risk, What architecture, What return) from supplementary technical appendices. Designed a clear 12-column baseline grid with generous whitespace and high-contrast typographic scales.",
      visualSystem: {
        typography: {
          primary: "Space Grotesk (Bold, tightly tracked display headers)",
          secondary: "Plus Jakarta Sans & JetBrains Mono (Clean body & structured technical data points)",
          rationale: "Space Grotesk provides strong architectural presence, while JetBrains Mono anchors technical metrics and timestamps with engineering precision."
        },
        colors: [
          { name: "Obsidian Ink", hex: "#111111", role: "Primary background for authority and contrast" },
          { name: "Canvas Warm", hex: "#F7F7F5", role: "Primary text and slide content surfaces" },
          { name: "Acid Chartreuse", hex: "#D4FF00", role: "High-priority metric accents and status markers" },
          { name: "Slate Subtle", hex: "#666666", role: "Secondary metadata and step labels" }
        ],
        grid: "12-Column Modular Presentation Grid with 40px outer padding",
        aspectRatio: "16:9 High-Definition Widescreen"
      },
      informationHierarchy: [
        "Primary visual anchor: Big thematic claim stating the core takeaway in one line.",
        "Secondary anchor: Three-column comparative friction matrix establishing urgency.",
        "Data layer: Large 48pt+ KPI numbers positioned with immediate contextual captions.",
        "Action layer: Phased horizontal roadmap with clear phase status indicators."
      ],
      finalResult: "The board approved the transformation budget unanimously within 12 minutes. Reviewers specifically noted the clarity of the 3-layer architecture diagram and the concise phased execution roadmap.",
      slideReferences: [0, 1, 2, 3, 4],
      keyLearnings: [
        "Executive decks require clear narrative pacing — one distinct cognitive takeaway per slide.",
        "Visual hierarchy is not decoration; it is the cognitive roadmap that guides executive attention.",
        "Consistent typographic weights reduce cognitive fatigue across data-heavy slides."
      ]
    }
  },
  {
    id: "project-02-fintech-pitch",
    number: "PROJECT 02",
    title: "Fintech Infrastructure & Cross-Border Liquidity",
    subtitle: "Series A Investor Pitch Presentation",
    category: "Pitch / Brand Presentation",
    tools: ["PowerPoint", "Google Slides", "Figma", "Data Visualization"],
    summary: "An investor pitch deck balancing institutional financial credibility with modern fintech velocity. Designed to present market TAM, unit economics, regulatory moats, and growth velocity.",
    tags: ["Investor Pitch", "Market Sizing", "Unit Economics", "Financial Storytelling"],
    slides: [
      {
        id: "p2-s1",
        slideNumber: 1,
        totalSlides: 5,
        category: "Pitch / Brand Presentation",
        eyebrow: "SERIES A INVESTOR OVERVIEW",
        title: "Modernizing Cross-Border Settlement for Emerging Markets",
        subtitle: "Instant, transparent, multi-currency liquidity rails for high-growth digital businesses.",
        layoutType: "cover",
        presenterNotes: "Opening frame: Lead with the massive market problem and clear thesis statement.",
        gridSpecs: { columns: 12, margins: "48px", hierarchyLevel: "Display Hero + Tagline" },
        content: {
          leadParagraph: "Empowering global merchants and regional fintechs with real-time foreign exchange liquidity, sub-minute settlement, and automated local currency payouts.",
          tagline: "Bridging the $45B Emerging Markets Liquidity Gap",
          metrics: [
            { value: "$180M+", label: "Annualized GMV Processed", delta: "4.2x YoY Growth" },
            { value: "0.45%", label: "Average Take Rate", delta: "+12 bps Net Margin" },
            { value: "42", label: "Connected Banking Corridors", delta: "14 Countries" }
          ]
        }
      },
      {
        id: "p2-s2",
        slideNumber: 2,
        totalSlides: 5,
        category: "Pitch / Brand Presentation",
        eyebrow: "THE PROBLEM / MARKET FRICTION",
        title: "Traditional Correspondent Banking Is Broken",
        subtitle: "Global businesses lose 3-5% on every transfer with unpredictable 3-day delays.",
        layoutType: "three_column_architecture",
        presenterNotes: "Highlight the three compounding pains: settlement delays, opacity, and regulatory friction.",
        gridSpecs: { columns: 3, margins: "40px", hierarchyLevel: "Structured Problem Triad" },
        content: {
          columns: [
            {
              badge: "Pain Point 01",
              heading: "Opaque Fee Stacking",
              body: "Intermediary correspondent banks deduct hidden fees at each hop without pre-disclosure.",
              points: ["Unpredictable landed amount", "Up to 5.2% total FX friction", "Manual reconciliation load"]
            },
            {
              badge: "Pain Point 02",
              heading: "3-5 Day Settlement Lag",
              body: "Legacy SWIFT settlement cycles tie up working capital for regional enterprises.",
              points: ["Cash flow bottlenecks", "High currency volatility risk", "Stalled cross-border supply chains"]
            },
            {
              badge: "Pain Point 03",
              heading: "Fragmented Local Rails",
              body: "Integrating diverse local payment switches requires dozens of separate banking partnerships.",
              points: ["18+ months to enter each new market", "Complex regulatory overhead", "High compliance maintenance"]
            }
          ]
        }
      },
      {
        id: "p2-s3",
        slideNumber: 3,
        totalSlides: 5,
        category: "Pitch / Brand Presentation",
        eyebrow: "THE SOLUTION / PRODUCT ADVANTAGE",
        title: "Unified Liquidity Engine with Sub-Second Finality",
        subtitle: "A single API integrating local central bank switches, automated FX routing, and instant treasury balance.",
        layoutType: "problem_solution",
        presenterNotes: "Show the concrete mechanical superiority: direct switch access vs correspondent chains.",
        gridSpecs: { columns: 2, margins: "40px", hierarchyLevel: "Comparative Solution Diagram" },
        content: {
          leadParagraph: "By establishing direct settlement integrations with real-time gross settlement (RTGS) networks, we bypass intermediary correspondent banks entirely.",
          bulletPoints: [
            {
              label: "Direct Central Bank Switch Ingress",
              description: "Direct routing eliminates intermediary deductions and ensures 100% predictable net receipts.",
              tag: "Efficiency"
            },
            {
              label: "Smart FX Auto-Hedging",
              description: "Automated liquidity pools execute foreign exchange trades at institutional mid-market rates.",
              tag: "Cost Advantage"
            },
            {
              label: "Single API Integration",
              description: "Enterprise developers connect once to access 42 global and regional payment corridors.",
              tag: "Speed"
            }
          ],
          callout: {
            quote: "Our direct rail model reduces end-to-end settlement cost by 72% while delivering sub-minute finality for 99.4% of all transactions.",
            highlight: "72% Cost Reduction"
          }
        }
      },
      {
        id: "p2-s4",
        slideNumber: 4,
        totalSlides: 5,
        category: "Pitch / Brand Presentation",
        eyebrow: "TRACTION & UNIT ECONOMICS",
        title: "Proven Growth Velocity with Strong Margins",
        subtitle: "Accelerating transaction volume driven by organic enterprise retention and high corridor density.",
        layoutType: "kpi_dashboard",
        presenterNotes: "Metrics grouped logically: Volume growth, margin efficiency, customer retention, and payback.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Investor Metric Grid" },
        content: {
          metrics: [
            { value: "4.2x", label: "YoY GMV Expansion", delta: "$180M annualized", trend: "up" },
            { value: "142%", label: "Net Revenue Retention", delta: "Strong expansion in top accounts", trend: "up" },
            { value: "5.8 mo", label: "CAC Payback Period", delta: "Highly capital efficient", trend: "up" },
            { value: "78%", label: "Gross Margin", delta: "Software-like economics", trend: "up" }
          ],
          columns: [
            {
              heading: "Enterprise Customer Base",
              body: "Serving 120+ high-volume digital commerce platforms, import/export networks, and remittance providers."
            },
            {
              heading: "Corridor Expansion Velocity",
              body: "Adding 3 new African and Southeast Asian banking corridors per quarter under existing regulatory approvals."
            }
          ]
        }
      },
      {
        id: "p2-s5",
        slideNumber: 5,
        totalSlides: 5,
        category: "Pitch / Brand Presentation",
        eyebrow: "THE ASK & USE OF FUNDS",
        title: "Capital Deployment Plan to Capture Market Lead",
        subtitle: "Strategic allocation focused on corridor licensing, core engineering, and regional sales expansion.",
        layoutType: "process_timeline",
        presenterNotes: "Final slide closes with actionable investment ask and precise capital allocation.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Structured Allocation Matrix" },
        content: {
          timelineSteps: [
            { step: "45%", title: "Treasury & Liquidity Depth", timeframe: "Core Working Capital", detail: "Expand pre-funded liquidity buffers across top 5 high-volume payment corridors.", status: "active" },
            { step: "30%", title: "Engineering & Infrastructure", timeframe: "Product Scale", detail: "Scale low-latency matching engine and automated compliance screening pipelines.", status: "active" },
            { step: "15%", title: "Licensing & Regulatory Moats", timeframe: "Compliance Expansion", detail: "Secure direct payment institution licenses in tier-1 regional jurisdictions.", status: "future" },
            { step: "10%", title: "Enterprise Commercial GTM", timeframe: "Sales Acceleration", detail: "Expand enterprise solution engineering team for Tier-1 corporate onboardings.", status: "future" }
          ]
        }
      }
    ],
    caseStudy: {
      id: "cs-02",
      title: "Crafting a Clear Narrative for High-Stakes Fintech Capital Raising",
      subtitle: "Designing pitch materials that bridge intricate multi-currency mechanics and investor confidence.",
      clientType: "Fintech Pitch Presentation Study",
      role: "Presentation Designer & Narrative Strategist",
      deliverables: ["Investor Deck", "Financial KPI Summary", "Corridor Architecture Diagram", "One-Pager Executive Summary"],
      context: "A cross-border payments infrastructure startup was preparing their Series A fundraising round. Their initial presentation contained disjointed product screenshots, unformatted Excel charts, and an overly technical explanation of foreign exchange rails that confused non-technical investors.",
      challenge: "Investors needed to quickly grasp the market opportunity ($45B gap), understand why this team's direct-switch architecture wins, and see undeniable proof in unit economics without drowning in financial jargon.",
      approach: "Restructured the narrative arc around three core investor questions: 1. Why is current banking broken? 2. How does our direct rail model capture margin? 3. What proves our defensibility? Re-designed all charts with consistent typographic hierarchy and clean data callouts.",
      visualSystem: {
        typography: {
          primary: "Space Grotesk (Bold, commanding headlines)",
          secondary: "Plus Jakarta Sans (Crisp financial notes & clear narrative body copy)",
          rationale: "Establishes a high-trust institutional feel without appearing dated or bureaucratic."
        },
        colors: [
          { name: "Clean Editorial Chalk", hex: "#F7F7F5", role: "Primary canvas for readability and crisp contrast" },
          { name: "Deep Obsidian", hex: "#111111", role: "High-contrast headings and structured borders" },
          { name: "Electric Chartreuse", hex: "#D4FF00", role: "Highlighting growth metrics and key differentiator tags" },
          { name: "Subtle Warm Gray", hex: "#E8E8E3", role: "Card backgrounds and divider lines" }
        ],
        grid: "Modular 4-Column and 12-Column Responsive Slide Grids",
        aspectRatio: "16:9 Presentation Standard"
      },
      informationHierarchy: [
        "Hero financial statement: One bold metric at the top of the narrative hierarchy.",
        "Comparative grid: Clear contrast between old correspondent banking vs modern direct switch.",
        "Scannable KPI row: 4 key metrics with clean delta percentages and trend indicators.",
        "Direct allocation breakdown: Visual percentage bars showing exact use of proceeds."
      ],
      finalResult: "The deck gave leadership a unified, professional presentation tool that effectively communicated complex liquidity flows in under 10 slides.",
      slideReferences: [0, 1, 2, 3, 4],
      keyLearnings: [
        "Financial data is only persuasive when the visual hierarchy directs the eye to the key delta first.",
        "Consistent visual tags (e.g. 'Friction', 'Advantage', 'Phase') eliminate cognitive confusion across pitch meetings."
      ]
    }
  },
  {
    id: "project-03-data-architecture",
    number: "PROJECT 03",
    title: "Distributed Systems & Latency Optimization Study",
    subtitle: "Technical Architecture & Data Visualization Deck",
    category: "Data & Information Design",
    tools: ["Google Slides", "Figma", "Technical Diagrams", "Data Visualization"],
    summary: "An in-depth information design system translating distributed microservices topology, database query throughput, and failover protocols into clear, scannable visual schematics.",
    tags: ["Data Visualization", "System Topology", "Latency Metrics", "Process Flows"],
    slides: [
      {
        id: "p3-s1",
        slideNumber: 1,
        totalSlides: 5,
        category: "Data & Information Design",
        eyebrow: "SYSTEMS ARCHITECTURE STUDY",
        title: "Distributed Query Throughput & Failover Engineering",
        subtitle: "A visual blueprint for multi-region database replication, caching tiers, and tail latency mitigation.",
        layoutType: "cover",
        presenterNotes: "Title frame highlighting the intersection of technical depth and visual information design.",
        gridSpecs: { columns: 12, margins: "48px", hierarchyLevel: "Display Title + Architecture Focus" },
        content: {
          leadParagraph: "Analyzing p99 latency regressions, cross-region replication bottlenecks, and automated partition recovery across 40,000 requests per second.",
          tagline: "High-Throughput Information Architecture",
          metrics: [
            { value: "40k", label: "Peak QPS Capacity", delta: "+150% Headroom" },
            { value: "12ms", label: "p99 Read Latency", delta: "-64% Reduction" },
            { value: "99.999%", label: "Availability Target", delta: "Five Nines SLA" }
          ]
        }
      },
      {
        id: "p3-s2",
        slideNumber: 2,
        totalSlides: 5,
        category: "Data & Information Design",
        eyebrow: "01 / TOPOLOGY & DATA FLOW",
        title: "Three-Tier Caching & Ingress Routing Flow",
        subtitle: "Decoupling read-heavy workloads from transactional write backends via edge cache layers.",
        layoutType: "three_column_architecture",
        presenterNotes: "Walk through the request journey: Edge CDN -> In-Memory Cache -> Persistent Storage.",
        gridSpecs: { columns: 3, margins: "40px", hierarchyLevel: "Three-Tier Flow Diagram" },
        content: {
          columns: [
            {
              badge: "Tier 01: Edge",
              heading: "Anycast Edge PoPs",
              body: "Global edge proxies terminate TLS connections within 15ms of end users, serving 78% of read assets directly.",
              points: ["Geographic proximity", "Automated DDoS mitigation", "Cached query payload returns"]
            },
            {
              badge: "Tier 02: Memory",
              heading: "Distributed Redis Cluster",
              body: "In-memory caching tier absorbs volatile query spikes and maintains session state across availability zones.",
              points: ["Sub-millisecond access", "Automated key eviction", "Cluster read replicas"]
            },
            {
              badge: "Tier 03: Storage",
              heading: "Partitioned Shard DB",
              body: "PostgreSQL master-replica shards process transactional writes with write-ahead log replication.",
              points: ["ACID compliance guarantee", "Zero-data loss replication", "Hot standby automatic failover"]
            }
          ]
        }
      },
      {
        id: "p3-s3",
        slideNumber: 3,
        totalSlides: 5,
        category: "Data & Information Design",
        eyebrow: "02 / LATENCY BENCHMARK COMPARISON",
        title: "Latency Distribution: Legacy vs Optimized Architecture",
        subtitle: "Dramatic reductions achieved across p50, p90, and critical p99 tail latency distributions.",
        layoutType: "matrix_comparison",
        presenterNotes: "Matrix comparing architectural metrics with clear impact highlights.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Structured Comparative Matrix" },
        content: {
          matrixItems: [
            { feature: "p50 Median Read Latency", traditional: "42ms (Direct DB queries)", optimized: "4ms (Edge Cache hit)", impact: "10.5x Faster" },
            { feature: "p99 Tail Latency Spikes", traditional: "380ms (Lock contention)", optimized: "12ms (Read replicas)", impact: "96.8% Lower" },
            { feature: "Cache Hit Efficiency", traditional: "34% (Single local node)", optimized: "91.4% (Distributed mesh)", impact: "+57.4% Hit Rate" },
            { feature: "Failover Recovery Window", traditional: "4.5 minutes (Manual DNS)", optimized: "1.2 seconds (Automated VIP)", impact: "Zero Outage" }
          ],
          callout: {
            quote: "Structuring data comparisons into standardized attribute rows allows technical evaluators to verify system gains without parsing unformatted log dumps.",
            highlight: "Standardized Data Rows"
          }
        }
      },
      {
        id: "p3-s4",
        slideNumber: 4,
        totalSlides: 5,
        category: "Data & Information Design",
        eyebrow: "03 / SYSTEM HEALTH & TELEMETRY",
        title: "Key Performance Indicators for Operational Reliability",
        subtitle: "Unified telemetry overview tracking throughput, error budgets, and partition recovery.",
        layoutType: "kpi_dashboard",
        presenterNotes: "Emphasize scannability and clear numeric contrast.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Operational Metrics Panel" },
        content: {
          metrics: [
            { value: "0.001%", label: "API Error Rate", delta: "Within 99.999% SLA", trend: "up" },
            { value: "1.2s", label: "Automated Failover", delta: "Sub-second health check", trend: "up" },
            { value: "91.4%", label: "Global Cache Hit", delta: "Significant DB offload", trend: "up" },
            { value: "-52%", label: "Cloud Infrastructure Cost", delta: "Efficient resource packing", trend: "up" }
          ],
          columns: [
            {
              heading: "Resilience Posture",
              body: "Automated partition detection isolates dead nodes without human intervention."
            },
            {
              heading: "Throughput Headroom",
              body: "Benchmarked to absorb 3x seasonal holiday traffic surges without degraded response times."
            }
          ]
        }
      },
      {
        id: "p3-s5",
        slideNumber: 5,
        totalSlides: 5,
        category: "Data & Information Design",
        eyebrow: "04 / MIGRATION PHASES",
        title: "Zero-Downtime Database Migration Protocol",
        subtitle: "Four-step live migration strategy with instant fallback capabilities at every gate.",
        layoutType: "process_timeline",
        presenterNotes: "Clear horizontal flow demonstrating risk management during database migration.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Step Pipeline" },
        content: {
          timelineSteps: [
            { step: "Step 01", title: "Dual-Write Activation", timeframe: "Day 1–3", detail: "Write to legacy & new database replicas simultaneously without reading new data.", status: "done" },
            { step: "Step 02", title: "Historical Backfill", timeframe: "Day 4–7", detail: "Synchronize 50TB historical ledger with checksum verification script.", status: "done" },
            { step: "Step 03", title: "Canary Read Traffic", timeframe: "Day 8–10", detail: "Route 5% of production reads to new shards; monitor latency and error counts.", status: "active" },
            { step: "Step 04", title: "100% Primary Cutover", timeframe: "Day 11–12", detail: "Promote new cluster to primary write authority and decommission legacy nodes.", status: "future" }
          ]
        }
      }
    ],
    caseStudy: {
      id: "cs-03",
      title: "Transforming Dense System Metrics into Scannable Architecture Schematics",
      subtitle: "How technical documentation and presentation design combine to make engineering decisions transparent.",
      clientType: "Technical Architecture Study",
      role: "Information Designer & Technical Communicator",
      deliverables: ["Systems Architecture Slide Suite", "Comparative Benchmark Tables", "Zero-Downtime Migration Schematic"],
      context: "Engineering teams frequently struggle to communicate complex distributed architecture choices to cross-functional leaders. Technical presentations often collapse into illegible terminal output screenshots and chaotic spaghetti diagrams.",
      challenge: "Create a rigorous, aesthetically refined presentation system capable of presenting distributed cache topologies, p99 latency percentiles, and database migration steps with crystal-clear visual hierarchy.",
      approach: "Applied structural information design rules: 1. Grouped the 3-tier architecture into clear spatial zones. 2. Formatted latency benchmarks into a structured comparison table with delta impacts. 3. Designed a sequential 4-step pipeline with explicit rollback thresholds.",
      visualSystem: {
        typography: {
          primary: "Space Grotesk (Header clarity and visual authority)",
          secondary: "JetBrains Mono & Plus Jakarta Sans (Data values, latencies, code annotations)",
          rationale: "Monospace typography anchors technical metrics with crisp mathematical alignment, while modern sans-serif ensures narrative readability."
        },
        colors: [
          { name: "Editorial Canvas", hex: "#F7F7F5", role: "Light background ensuring high contrast for technical diagrams" },
          { name: "Ink Black", hex: "#111111", role: "Primary text and structural bounding boxes" },
          { name: "Accent Lime", hex: "#D4FF00", role: "Highlighting superior performance deltas and active phases" },
          { name: "Border Neutral", hex: "#D9D9D4", role: "Subtle grid lines and column separators" }
        ],
        grid: "Precision 12-Column Grid with strict alignment for diagram blocks",
        aspectRatio: "16:9 Presentation Format"
      },
      informationHierarchy: [
        "Tier markers: Explicit badges (Tier 01, Tier 02, Tier 03) anchoring reading order from left to right.",
        "Data metric prominence: Large numeric values paired with micro-labels to prevent ambiguity.",
        "Table rows: Alternate subtle row fills to ensure dense comparative data remains easily scan-friendly.",
        "Process timeline: Numbered step markers with status pills (Done, Active, Future)."
      ],
      finalResult: "Created a reusable visual template and presentation system that simplifies complex engineering reviews and speeds up architectural sign-offs.",
      slideReferences: [0, 1, 2, 3, 4],
      keyLearnings: [
        "Data visualizations must be self-explanatory: the visual form must directly echo the data structure.",
        "Technical stakeholders respect visual restraint: eliminating unnecessary decoration increases credibility."
      ]
    }
  },
  {
    id: "project-04-ai-presentation-training",
    number: "PROJECT 04",
    title: "AI Presentation Training & Visual QA Benchmark",
    subtitle: "Procedural Slide Generation & Design Quality Framework",
    category: "AI Presentation Training",
    tools: ["Google Slides AI", "Design Quality Rubric", "Prompt Engineering", "Visual QA"],
    summary: "A comprehensive design training and evaluation framework developed to optimize LLMs in generating structured, visually balanced, and presentation-ready Google Slides decks.",
    tags: ["AI Model Training", "Visual Quality QA", "Design Critique", "Google Slides Benchmarking"],
    slides: [
      {
        id: "p4-s1",
        slideNumber: 1,
        totalSlides: 5,
        category: "AI Presentation Training",
        eyebrow: "AI DESIGN QUALITY & TRAINING SUITE",
        title: "Optimizing AI Models for Procedural Presentation Design",
        subtitle: "Establishing rigorous evaluation criteria for typography, layout hierarchy, and visual consistency in AI-generated slides.",
        layoutType: "cover",
        presenterNotes: "Frame the methodology: Combining human design expertise with AI evaluation to eliminate generative slide defects.",
        gridSpecs: { columns: 12, margins: "48px", hierarchyLevel: "Editorial Cover + Rubric Framework" },
        content: {
          leadParagraph: "A structured study in evaluating generative slide outputs against professional design standards — ensuring AI tools produce executive-ready visual communications instead of unformatted bullet walls.",
          tagline: "AI Training & Quality Evaluation Methodology",
          metrics: [
            { value: "6-Point", label: "Visual Quality QA Rubric", delta: "Rigorous Standards" },
            { value: "100%", label: "Evidence-Based Critiques", delta: "Actionable Feedback" },
            { value: "Google Slides", label: "Core Platform Focus", delta: "Native Presentation Output" }
          ]
        }
      },
      {
        id: "p4-s2",
        slideNumber: 2,
        totalSlides: 5,
        category: "AI Presentation Training",
        eyebrow: "01 / THE GENERATIVE DESIGN LOOP",
        title: "The AI → Evaluation → Refinement Lifecycle",
        subtitle: "How structured critiques and precise design constraints teach models to generate polished presentation layouts.",
        layoutType: "three_column_architecture",
        presenterNotes: "Explain the three main phases of AI design training: Prompt & Generation, Evaluation & Critique, Refined Output.",
        gridSpecs: { columns: 3, margins: "40px", hierarchyLevel: "Three-Phase Workflow" },
        content: {
          columns: [
            {
              badge: "Phase 01",
              heading: "Prompt & Structural Generation",
              body: "AI receives raw content briefing and generates initial slide layouts, content groupings, and spatial coordinates in Google Slides.",
              points: ["Procedural layout generation", "Text chunking & tokenization", "Initial component placement"]
            },
            {
              badge: "Phase 02",
              heading: "Visual QA & Design Critique",
              body: "Human specialist evaluates output against typographic hierarchy, margin balance, contrast ratio, and visual storytelling.",
              points: ["Identifying spacing defects", "Evaluating typographic scale", "Checking information scannability"]
            },
            {
              badge: "Phase 03",
              heading: "Fine-Tuning & Refined Output",
              body: "Model parameters and system prompts are updated with structured feedback, resulting in clean, publication-ready presentation decks.",
              points: ["Elimination of visual clutter", "Consistent brand alignment", "Flawless presentation craft"]
            }
          ]
        }
      },
      {
        id: "p4-s3",
        slideNumber: 3,
        totalSlides: 5,
        category: "AI Presentation Training",
        eyebrow: "02 / THE 5-PILLAR EVALUATION RUBRIC",
        title: "Visual Quality Criteria for AI-Generated Presentations",
        subtitle: "Standardized evaluation dimensions used to rate and instruct generative design models.",
        layoutType: "matrix_comparison",
        presenterNotes: "Detail the five evaluation pillars: Typography, Hierarchy, Spacing, Contrast, and Consistency.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Quality Rubric Matrix" },
        content: {
          matrixItems: [
            { feature: "Typographic Hierarchy", traditional: "Uniform text size, missing scale ratios", optimized: "Distinct 3-tier scale (Display, Body, Meta)", impact: "High Scannability" },
            { feature: "Spatial & Margin Balance", traditional: "Elements colliding with slide edges", optimized: "Mathematical 40px+ outer margins", impact: "Zero Crowding" },
            { feature: "Information Density", traditional: "Dense walls of unformatted bullet text", optimized: "Chunked cards with bold lead-ins", impact: "Instant Comprehension" },
            { feature: "Visual Consistency", traditional: "Random font sizes and misaligned boxes", optimized: "Strict 12-column grid alignment", impact: "Professional Polishing" }
          ],
          callout: {
            quote: "Evaluating AI design requires objective criteria: stating not just that something 'looks off', but pinpointing the exact typographic ratio or margin misalignment causing the defect.",
            highlight: "Objective Criteria"
          }
        }
      },
      {
        id: "p4-s4",
        slideNumber: 4,
        totalSlides: 5,
        category: "AI Presentation Training",
        eyebrow: "03 / BEFORE & AFTER TRANSFORMATION",
        title: "Case Study: From Raw AI Output to Polished Slide",
        subtitle: "Demonstrating the impact of design critique and structural refinement on presentation clarity.",
        layoutType: "problem_solution",
        presenterNotes: "Show the visual transformation: left describes the unrefined AI defect, right shows the polished slide outcome.",
        gridSpecs: { columns: 2, margins: "40px", hierarchyLevel: "Before/After Comparative" },
        content: {
          leadParagraph: "A side-by-side analysis demonstrating how applying presentation design principles transforms chaotic AI outputs into high-clarity executive slides.",
          bulletPoints: [
            {
              label: "Before: Unstructured AI Output",
              description: "Monotonous 14pt bullet list, no visual focal point, cramped margins, numbers buried in paragraph text.",
              tag: "Raw AI Defect"
            },
            {
              label: "Critique Applied",
              description: "Extracted 3 core metrics into 48pt KPI cards, grouped supporting facts into 3 columns, added clear visual anchors.",
              tag: "Evaluator Action"
            },
            {
              label: "After: Executive-Ready Slide",
              description: "Instant 3-second comprehension, clear reading hierarchy, balanced whitespace, and rigorous grid alignment.",
              tag: "Refined Output"
            }
          ],
          callout: {
            quote: "By training models to prioritize visual hierarchy over raw text output, we elevate AI presentations from draft notes to boardroom-ready deliverables.",
            highlight: "Boardroom-Ready Deliverables"
          }
        }
      },
      {
        id: "p4-s5",
        slideNumber: 5,
        totalSlides: 5,
        category: "AI Presentation Training",
        eyebrow: "04 / SUMMARY & METHODOLOGY",
        title: "Key Takeaways for AI-Assisted Presentation Workflows",
        subtitle: "Combining generative speed with human design discernment produces superior presentation outcomes.",
        layoutType: "kpi_dashboard",
        presenterNotes: "Summarize the overarching philosophy: AI accelerates drafting, human design rigor ensures excellence.",
        gridSpecs: { columns: 4, margins: "40px", hierarchyLevel: "Strategic Summary Panel" },
        content: {
          metrics: [
            { value: "10x", label: "Drafting Velocity", delta: "Rapid initial layout generation", trend: "up" },
            { value: "100%", label: "Human QA Verification", delta: "Zero compromise on visual craft", trend: "up" },
            { value: "0", label: "Visual Hallucinations", delta: "Strict adherence to creative briefs", trend: "neutral" },
            { value: "A+", label: "Presentation Readiness", delta: "Verified against design standards", trend: "up" }
          ],
          columns: [
            {
              heading: "The Role of the Specialist",
              body: "The presentation specialist acts as the quality gatekeeper, guiding generative tools to adhere to editorial standards."
            },
            {
              heading: "Future of AI Presentations",
              body: "Models equipped with rigorous design rubrics produce structured slides that respect human attention and cognitive limits."
            }
          ]
        }
      }
    ],
    caseStudy: {
      id: "cs-04",
      title: "Building Evaluation Standards for AI-Generated Presentation Systems",
      subtitle: "How rigorous design critiques train generative AI models to produce structured, human-centered presentation decks.",
      clientType: "AI Design Quality Study",
      role: "AI Design Quality Specialist & Presentation Evaluator",
      deliverables: ["Visual Quality QA Rubric", "Procedural Slide Generation Benchmarks", "Fine-Tuning Dataset Critiques"],
      context: "As generative AI tools begin producing automated presentation slides, outputs frequently suffer from severe visual hierarchy defects: unformatted text blocks, clashing font scales, missing margins, and chaotic spatial distribution.",
      challenge: "Formulate a systematic, evidence-based evaluation methodology capable of diagnosing visual defects in AI-generated Google Slides and guiding procedural generation models toward professional design standards.",
      approach: "Developed a 5-pillar design QA rubric encompassing typography, spatial balance, information density, visual consistency, and brand fidelity. Conducted structured critiques identifying specific coordinate misalignments, contrast failures, and typographic deficiencies.",
      visualSystem: {
        typography: {
          primary: "Space Grotesk (Display headers, clear evaluation categories)",
          secondary: "Plus Jakarta Sans & JetBrains Mono (Detailed QA rubric criteria and diagnostic notes)",
          rationale: "Ensures technical critique criteria are communicated with precision and visual clarity."
        },
        colors: [
          { name: "Dark Neutral", hex: "#111111", role: "Primary structure for evaluation cards" },
          { name: "Editorial Off-White", hex: "#F7F7F5", role: "Base canvas ensuring readability" },
          { name: "Electric Lime", hex: "#D4FF00", role: "Rubric highlights and benchmark status markers" },
          { name: "Subtle Gray", hex: "#D9D9D4", role: "Grid demarcation lines" }
        ],
        grid: "Precision 12-Column Responsive Layout Grid",
        aspectRatio: "16:9 Standard Presentation Format"
      },
      informationHierarchy: [
        "Workflow visualization: Sequential chevron pipeline showing Prompt → Evaluation → Refinement.",
        "Quality rubric matrix: 4-column breakdown of criterion, defect risk, evaluator action, and standard.",
        "Before / after comparative cards: Clear contrasting of unrefined output vs structured slide.",
        "Metric summary: Highlighting speed acceleration paired with 100% human visual QA."
      ],
      finalResult: "Established a reliable visual evaluation framework that directly informs AI model fine-tuning for presentation generation workflows.",
      slideReferences: [0, 1, 2, 3, 4],
      keyLearnings: [
        "AI models generate text well, but lack innate spatial intelligence without structured visual constraints.",
        "High-quality design critiques must be quantitative and coordinate-specific, not vague subjective opinions."
      ]
    }
  }
];

export const AI_WORKFLOW_STEPS = [
  {
    stepNumber: "01",
    name: "Prompt & Brief Input",
    role: "User / System Prompt",
    description: "Inputting structured creative briefs, narrative outline, target audience, and key data points.",
    icon: "FileText",
    details: "Defining slide intent, presentation goals, and required data artifacts."
  },
  {
    stepNumber: "02",
    name: "Generated Design",
    role: "AI Model Output",
    description: "AI generates initial layout, spatial coordinates, typography, and text distribution in Google Slides.",
    icon: "Cpu",
    details: "Raw procedural generation of slide components and preliminary bounding boxes."
  },
  {
    stepNumber: "03",
    name: "Visual Evaluation",
    role: "Specialist QA",
    description: "Rigorous inspection against design standards: typography, margins, contrast, hierarchy, and density.",
    icon: "Search",
    details: "Diagnosing visual defects, margin collisions, and hierarchy collapse."
  },
  {
    stepNumber: "04",
    name: "Design Critique",
    role: "Evidence-Based Feedback",
    description: "Formulating structured, coordinate-specific critiques with actionable remediation instructions.",
    icon: "CheckSquare",
    details: "Documenting exact font ratios, padding corrections, and component regroupings."
  },
  {
    stepNumber: "05",
    name: "Refinement & Tuning",
    role: "Iterative Optimization",
    description: "Adjusting model constraints, system instructions, and spatial rules to eliminate defects.",
    icon: "Sliders",
    details: "Fine-tuning prompt architecture and layout generation algorithms."
  },
  {
    stepNumber: "06",
    name: "Final Presentation Output",
    role: "Executive-Ready Deliverable",
    description: "Clean, balanced, scannable presentation slides ready for executive decision-makers.",
    icon: "Award",
    details: "Zero visual noise, balanced whitespace, and pristine typographic hierarchy."
  }
];

export const AI_RUBRIC: AIRubricCriterion[] = [
  {
    criterion: "Typographic Scale & Hierarchy",
    category: "Typography",
    description: "Evaluating whether headlines, body text, and metadata have distinct, mathematically stepped size ratios.",
    aiDefectRisk: "Uniform font sizes causing visual flatness where everything competes for attention.",
    evaluatorRemedy: "Enforce a 3-tier typographic scale: Display (36–48pt), Body (16–18pt), Metadata (12–14pt).",
    standardBenchmark: "Instant recognition of primary takeaway within 2 seconds of slide view."
  },
  {
    criterion: "Margin & Spatial Cushioning",
    category: "Layout Density",
    description: "Ensuring content containers maintain minimum 40px outer canvas margins and balanced internal padding.",
    aiDefectRisk: "Text boxes extending to the extreme edge of the slide canvas, creating crowded visual tension.",
    evaluatorRemedy: "Apply strict boundary constraints with mathematical padding rules (outer margin >= inner gap).",
    standardBenchmark: "Generous whitespace framing the core content without awkward empty voids."
  },
  {
    criterion: "Information Density & Chunking",
    category: "Hierarchy",
    description: "Evaluating whether complex paragraphs are decomposed into scannable cards or structured columns.",
    aiDefectRisk: "Dense, unformatted walls of 8–10 consecutive bullet points with equal visual weight.",
    evaluatorRemedy: "Transform linear lists into 3-column cards, KPI metric blocks, or structured comparison rows.",
    standardBenchmark: "Audience can scan and comprehend the slide structure in under 5 seconds."
  },
  {
    criterion: "WCAG AA Contrast & Palette Discipline",
    category: "Contrast & Color",
    description: "Verifying color contrast meets minimum 4.5:1 ratio and accent colors are used intentionally.",
    aiDefectRisk: "Low-contrast gray text on tinted backgrounds or overuse of bright rainbow accent colors.",
    evaluatorRemedy: "Restrict accent color strictly to key metrics, active indicators, and critical section markers.",
    standardBenchmark: "100% legibility in both bright conference rooms and low-light monitor viewing."
  },
  {
    criterion: "Cross-Slide Visual Consistency",
    category: "Brand Alignment",
    description: "Ensuring header placements, grid alignments, and component styles remain synchronized across all slides.",
    aiDefectRisk: "Header jumping: slide titles shifting vertical positions from slide to slide across the deck.",
    evaluatorRemedy: "Lock master slide grid coordinates for title baseline, header rules, and footer metadata.",
    standardBenchmark: "Deck feels unified as a single coherent presentation system."
  }
];

export const DESIGN_APPROACH_STEPS = [
  {
    number: "01",
    title: "Understand",
    subhead: "Identify audience, objective, and message.",
    description: "Every presentation has a specific decision-maker and a desired outcome. Before touching any layout software, I clarify who is in the room, what they care about, and the single core takeaway they must remember.",
    checklist: ["Who is the audience (Executive, Investor, Technical, Client)?", "What is the single core decision required?", "What context or constraints exist?"]
  },
  {
    number: "02",
    title: "Structure",
    subhead: "Turn raw information into a logical narrative.",
    description: "Raw data is chaotic. I organize content into a clear narrative arc: Context → Problem → Solution → Evidence → Next Steps. Each slide is given a single, unambiguous purpose.",
    checklist: ["Decompose raw documents into atomic points", "Eliminate redundant or distracting filler", "Sequence slides for natural cognitive progression"]
  },
  {
    number: "03",
    title: "Prioritize",
    subhead: "Establish visual hierarchy and decide what deserves attention.",
    description: "When everything is emphasized, nothing stands out. I establish strict visual priority: primary headline states the takeaway, secondary cards provide evidence, and tertiary metadata supports credibility.",
    checklist: ["Identify the 'Hero Metric' or primary insight", "Separate primary content from supporting footnotes", "Define the eye-tracking scan path"]
  },
  {
    number: "04",
    title: "Design",
    subhead: "Apply typography, grid, imagery, data visualization, and spacing.",
    description: "Building the visual presentation system. Applying mathematical grid alignment, high-contrast typography pairings, custom data charts, structured tables, and generous whitespace.",
    checklist: ["12-column presentation grid alignment", "Precise typographic sizing & tracking", "Custom data charts and scannable visual cards"]
  },
  {
    number: "05",
    title: "Refine",
    subhead: "Review alignment, consistency, readability, pacing, and brand adherence.",
    description: "Rigorous quality review. Inspecting slide-to-slide header alignment, contrast ratios, label line-wraps, spacing uniformity, and presentation pacing in full-screen mode.",
    checklist: ["Zero header jump between slides", "Verify 4.5:1 contrast on all text", "Test presentation pacing in full-screen slide mode"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-01",
    role: "AI Trainer Expert",
    company: "Postwork",
    period: "March 2026 – May 2026",
    location: "Remote",
    category: "AI Training",
    description: "Trained advanced AI models on structural and procedural generation, specifically optimizing their ability to create comprehensive, professional Google Slides presentations.",
    keyResponsibilities: [
      "Trained generative AI models on structural slide composition, visual hierarchy, and procedural layout generation.",
      "Optimized model prompting strategies to generate clean, boardroom-ready Google Slides presentations from complex raw briefs.",
      "Created benchmark evaluation sets for layout density, component spacing, and multi-slide narrative pacing."
    ],
    skillsApplied: ["Google Slides", "AI Model Training", "Procedural Layout", "Presentation Systems", "Prompt Architecture"]
  },
  {
    id: "exp-02",
    role: "AI Design Quality Evaluator",
    company: "Taste AI — Golden Critiques",
    period: "April 2026 – August 2026",
    location: "Remote",
    category: "Design QA",
    description: "Evaluated AI-generated designs against creative briefs and visual quality standards, delivering rigorous critiques across typography, layout, and hierarchy.",
    keyResponsibilities: [
      "Conducted structured critiques covering typography, color contrast, layout density, accessibility, visual hierarchy, and brand alignment.",
      "Applied detailed QA guidelines to deliver specific, evidence-based design observations and coordinate-level remediation guidance.",
      "Instructed and fine-tuned AI systems on frontend design workflows and presentation design best practices."
    ],
    skillsApplied: ["Visual Quality QA", "Design Critique", "Typography Evaluation", "Accessibility (WCAG)", "Brand Alignment"]
  },
  {
    id: "exp-03",
    role: "AI Content Operations Associate",
    company: "Alveum",
    period: "September 2025 – May 2026",
    location: "Remote",
    category: "Operations",
    description: "Managed content operations and structured workflows for AI training pipelines, ensuring strict quality control and consistent data schemas.",
    keyResponsibilities: [
      "Structured dense multi-modal content assets and technical documentation for AI evaluation pipelines.",
      "Maintained operational quality benchmarks across high-volume dataset annotations and design reviews.",
      "Collaborated with cross-functional teams to streamline technical communication and workflow documentation."
    ],
    skillsApplied: ["Content Operations", "Quality Assurance", "Data Schemas", "Technical Workflows"]
  },
  {
    id: "exp-04",
    role: "Developer Relations Specialist",
    company: "GO54",
    period: "February 2024 – February 2025",
    location: "Lagos, Nigeria",
    category: "Design & DevRel",
    description: "Created technical presentations, developer documentation, and educational slide decks to communicate cloud infrastructure tools to developer audiences.",
    keyResponsibilities: [
      "Designed technical slide decks and visual documentation for developer workshops, webinars, and partner briefings.",
      "Turned complex API specifications, cloud hosting mechanics, and server configurations into clear visual guides.",
      "Facilitated technical communications and feedback loops between engineering teams and developer communities."
    ],
    skillsApplied: ["Technical Presentation Design", "Developer Communication", "API Architecture", "Slide Storytelling"]
  },
  {
    id: "exp-05",
    role: "UIUX Designer",
    company: "MALhub",
    period: "January 2024 – February 2025",
    location: "Ilorin / Remote, Nigeria",
    category: "Design & DevRel",
    description: "Designed digital interfaces, design systems, and client presentation decks for web applications and digital products.",
    keyResponsibilities: [
      "Created user interface layouts, wireframes, and design system components in Figma.",
      "Built client-facing design presentation decks explaining UX research findings, information architecture, and UI prototypes.",
      "Conducted usability testing and visual quality audits across responsive web deliverables."
    ],
    skillsApplied: ["Figma", "UI/UX Design", "Design Systems", "Client Pitch Presentations", "Information Architecture"]
  },
  {
    id: "exp-06",
    role: "Brand Ambassador",
    company: "QuickNode",
    period: "June 2023 – September 2024",
    location: "Remote",
    category: "Design & DevRel",
    description: "Communicated Web3 infrastructure capabilities and distributed node architectures through visual content and community presentations.",
    keyResponsibilities: [
      "Designed visual assets and presentation slides explaining blockchain infrastructure and RPC node reliability.",
      "Represented the QuickNode brand across regional tech meetups and developer community sessions."
    ],
    skillsApplied: ["Visual Communication", "Brand Representation", "Technical Presentations"]
  },
  {
    id: "exp-07",
    role: "Community Manager",
    company: "Flow Blockchain",
    period: "March 2023 – March 2024",
    location: "Remote",
    category: "Design & DevRel",
    description: "Managed technical community operations, created visual announcements, and facilitated developer onboarding sessions.",
    keyResponsibilities: [
      "Structured educational onboarding materials and visual presentations for ecosystem developers.",
      "Coordinated community AMAs, workshop slides, and developer documentation updates."
    ],
    skillsApplied: ["Community Operations", "Visual Documentation", "Technical Communication"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Presentation Design",
    iconName: "Layout",
    description: "Core craft in designing high-stakes presentation systems, pitch decks, and executive briefings.",
    items: [
      { name: "Google Slides", emphasis: true },
      { name: "PowerPoint", emphasis: true },
      { name: "Presentation Storytelling", emphasis: true },
      { name: "Slide Layout & Grid Systems", emphasis: true },
      { name: "Information Design & Scannability", emphasis: true },
      { name: "Data Visualization & Chart Craft", emphasis: true },
      { name: "Pitch Deck Architecture" },
      { name: "Executive Summary One-Pagers" },
      { name: "Presenter Notes & Scripting" }
    ]
  },
  {
    category: "UI & Visual Design",
    iconName: "Figma",
    description: "Deep foundation in digital interface design, design systems, and visual consistency.",
    items: [
      { name: "Figma", emphasis: true },
      { name: "UI/UX Design", emphasis: true },
      { name: "Visual Hierarchy", emphasis: true },
      { name: "Typographic Systems & Scales", emphasis: true },
      { name: "Design Systems & Tokens" },
      { name: "Framer" },
      { name: "Vector Graphics & Iconography" },
      { name: "Responsive Layouts" }
    ]
  },
  {
    category: "AI & Design Quality",
    iconName: "Sparkles",
    description: "Specialized expertise in evaluating, benchmarking, and training generative design models.",
    items: [
      { name: "AI Design Quality QA", emphasis: true },
      { name: "AI Model Training (Google Slides)", emphasis: true },
      { name: "Prompt Engineering & Synthesis", emphasis: true },
      { name: "Evidence-Based Design Critique", emphasis: true },
      { name: "Procedural Layout Benchmarking" },
      { name: "Design Quality Rubrics" },
      { name: "AI-Assisted Creative Workflows" }
    ]
  },
  {
    category: "Technical Communication",
    iconName: "FileCode",
    description: "Bridging complex technical systems, cybersecurity concepts, and clear audience understanding.",
    items: [
      { name: "Technical Writing & Documentation", emphasis: true },
      { name: "Complex System Decomposition", emphasis: true },
      { name: "Developer Communication" },
      { name: "Content Operations & QA" },
      { name: "Cybersecurity & Systems Awareness" },
      { name: "Cross-Functional Collaboration" }
    ]
  }
];

export const INFO_DESIGN_EXAMPLES = [
  {
    id: "kpi-metrics",
    title: "Executive KPI & Delta Cards",
    category: "Data Visualization",
    concept: "Giving numbers visual dominance with immediate contextual labels and delta trends.",
    description: "Eliminating dense tabular text by elevating key figures to 48pt display weight, paired with high-contrast trend indicators."
  },
  {
    id: "comparison-table",
    title: "Structured 3-Way Comparative Grid",
    category: "Information Hierarchy",
    concept: "Replacing long descriptive paragraphs with scannable attribute rows.",
    description: "Allowing decision-makers to evaluate traditional vs. optimized solutions across latency, cost, and reliability in under 5 seconds."
  },
  {
    id: "process-timeline",
    title: "Phased Execution Roadmap",
    category: "Process Architecture",
    concept: "Translating complex multi-week implementations into sequential milestone gates.",
    description: "Displaying progress status (Done, Active, Future) with clear timeframes and deliverables for audit and board alignment."
  },
  {
    id: "system-topology",
    title: "Layered Architecture Schematic",
    category: "Systems Design",
    concept: "Visualizing data flow across Edge, Caching, and Persistent Storage tiers.",
    description: "Using consistent horizontal flow and clear boundary grouping to demystify complex distributed microservices."
  }
];
