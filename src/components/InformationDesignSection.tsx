import React, { useState } from 'react';
import { 
  BarChart3, 
  Table2, 
  GitCommit, 
  Layers, 
  ArrowRight, 
  Check, 
  X, 
  TrendingUp, 
  ArrowUpRight,
  Sparkles,
  Columns3,
  Sliders,
  Cpu
} from 'lucide-react';

export const InformationDesignSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kpi' | 'comparison' | 'timeline' | 'topology'>('kpi');
  const [comparisonMode, setComparisonMode] = useState<'structured' | 'raw'>('structured');

  return (
    <section id="info-design" className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#111111] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            04 / INFORMATION DESIGN & DATA VISUALIZATION
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111111] tracking-tight leading-tight">
            "Information should be easy to understand before it is beautiful."
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#555555] font-sans leading-relaxed">
            I approach dense information by establishing hierarchy first: what needs attention, what supports the message, and what can remain secondary.
          </p>
        </div>

        {/* Interactive "Raw Content vs Structured Presentation" Transformation Demo */}
        <div className="mb-16 bg-white rounded-xl border border-[#D9D9D4] p-6 sm:p-8 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#EBEBE6] gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#666666]">
                THE HIERARCHY TEST • LIVE TRANSFORMATION
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mt-0.5">
                From Unstructured Text to Presentation Clarity
              </h3>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center p-1 bg-[#F0F0ED] rounded-lg border border-[#D9D9D4]">
              <button
                onClick={() => setComparisonMode('raw')}
                className={`px-3 py-1.5 rounded font-mono text-xs font-semibold transition-all ${
                  comparisonMode === 'raw'
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                Raw Document Draft
              </button>
              <button
                onClick={() => setComparisonMode('structured')}
                className={`px-3 py-1.5 rounded font-mono text-xs font-semibold transition-all ${
                  comparisonMode === 'structured'
                    ? 'bg-[#111111] text-[#D4FF00] shadow-xs'
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                Structured Slide Layout
              </button>
            </div>
          </div>

          {/* Transformation View Container */}
          {comparisonMode === 'raw' ? (
            /* RAW BULLET WALL DEFECT */
            <div className="p-6 bg-[#FAFAFA] rounded-lg border border-dashed border-[#CCCCCC] font-sans text-xs sm:text-sm text-[#444444] space-y-3 leading-relaxed">
              <div className="font-mono text-xs text-rose-600 font-bold flex items-center gap-1.5">
                <X className="w-4 h-4" />
                <span>UNSTRUCTURED TEXT DRAFT (Cognitive Fatigue • No Hierarchy)</span>
              </div>
              <p>
                <strong>Quarterly Performance & Risk Review:</strong> Last quarter our distributed systems processed over 40,000 queries per second which was a 150% increase in capacity while our read latency was reduced to 12 milliseconds across p99 which is about 64% lower than our legacy system. Meanwhile we had 99.999% availability and our total audit preparation time dropped from 6 weeks to only 3 days because we automated 100% of our SOC2 compliance checks. Furthermore we have zero unmonitored service accounts across all clusters.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#666666]">
                <li>Problem: Eye wanders aimlessly without visual anchors.</li>
                <li>Key numbers (40k, 12ms, 3 days) are buried in dense sentences.</li>
                <li>Audience requires 20+ seconds to extract the strategic takeaway.</li>
              </ul>
            </div>
          ) : (
            /* STRUCTURED PRESENTATION SLIDE */
            <div className="p-6 sm:p-8 bg-[#111111] text-[#F7F7F5] rounded-lg border border-black space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-[#D4FF00] text-black rounded uppercase">
                    STRUCTURED SLIDE
                  </span>
                  <span className="font-mono text-xs text-white/60">3-SECOND COMPREHENSION HIERARCHY</span>
                </div>
                <div className="font-mono text-[11px] text-[#D4FF00]">12-COL MODULAR GRID</div>
              </div>

              <div>
                <span className="font-mono text-xs text-[#D4FF00] uppercase font-bold tracking-wider">
                  SYSTEM PERFORMANCE & AUDIT READINESS
                </span>
                <h4 className="font-display font-bold text-xl sm:text-3xl text-white mt-1">
                  150% Throughput Surge with Sub-15ms Latency
                </h4>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded bg-white/5 border border-white/10">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-[#D4FF00]">40,000</div>
                  <div className="font-sans font-medium text-xs text-white mt-0.5">Peak QPS Capacity</div>
                  <div className="font-mono text-[10px] text-white/50 mt-1">+150% Throughput Headroom</div>
                </div>

                <div className="p-4 rounded bg-white/5 border border-white/10">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-[#D4FF00]">12ms</div>
                  <div className="font-sans font-medium text-xs text-white mt-0.5">p99 Read Latency</div>
                  <div className="font-mono text-[10px] text-white/50 mt-1">-64% Latency Reduction</div>
                </div>

                <div className="p-4 rounded bg-white/5 border border-white/10">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-[#D4FF00]">3 Days</div>
                  <div className="font-sans font-medium text-xs text-white mt-0.5">Audit Preparation Window</div>
                  <div className="font-mono text-[10px] text-white/50 mt-1">Reduced from 6 weeks</div>
                </div>
              </div>

              {/* 2 Supporting Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">100% Automated SOC2 Controls: </strong>
                    <span className="text-white/70">Continuous compliance checks eliminate manual evidence gathering.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Zero Unmonitored Accounts: </strong>
                    <span className="text-white/70">Full inventory visibility across production clusters achieved.</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* 4 Specialized Information Design Layout Showcases */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D9D9D4] pb-4 gap-3">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111]">
              Information Layout Archetypes
            </h3>
            
            {/* Tab Selector */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              <button
                onClick={() => setActiveTab('kpi')}
                className={`px-3 py-1.5 rounded transition-all border ${
                  activeTab === 'kpi'
                    ? 'bg-[#111111] text-[#D4FF00] border-[#111111] font-bold'
                    : 'bg-white text-[#555555] border-[#D9D9D4] hover:text-[#111111]'
                }`}
              >
                01 / KPI Metrics
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-3 py-1.5 rounded transition-all border ${
                  activeTab === 'comparison'
                    ? 'bg-[#111111] text-[#D4FF00] border-[#111111] font-bold'
                    : 'bg-white text-[#555555] border-[#D9D9D4] hover:text-[#111111]'
                }`}
              >
                02 / Comparative Grid
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                className={`px-3 py-1.5 rounded transition-all border ${
                  activeTab === 'timeline'
                    ? 'bg-[#111111] text-[#D4FF00] border-[#111111] font-bold'
                    : 'bg-white text-[#555555] border-[#D9D9D4] hover:text-[#111111]'
                }`}
              >
                03 / Phased Roadmap
              </button>
              <button
                onClick={() => setActiveTab('topology')}
                className={`px-3 py-1.5 rounded transition-all border ${
                  activeTab === 'topology'
                    ? 'bg-[#111111] text-[#D4FF00] border-[#111111] font-bold'
                    : 'bg-white text-[#555555] border-[#D9D9D4] hover:text-[#111111]'
                }`}
              >
                04 / 3-Tier Topology
              </button>
            </div>
          </div>

          {/* Active Layout Sandbox Container */}
          <div className="bg-white rounded-xl border border-[#D9D9D4] p-6 sm:p-8">
            
            {/* TAB 01: KPI METRICS */}
            {activeTab === 'kpi' && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#666666] uppercase">
                    KPI & DELTA CARD SYSTEM
                  </span>
                  <h4 className="font-display font-bold text-xl text-[#111111] mt-0.5">
                    High-Scannability Executive Metric Cards
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] mt-1 font-sans">
                    Pairing bold 36pt numerals with immediate contextual captions and delta indicators ensures figures cannot be misinterpreted.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4]">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-3xl text-[#111111]">$180M+</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="font-sans font-semibold text-xs text-[#111111] mt-1">Annualized GMV Processed</div>
                    <div className="font-mono text-[11px] text-[#666666] mt-0.5">4.2x YoY Expansion</div>
                  </div>

                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4]">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-3xl text-[#111111]">142%</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="font-sans font-semibold text-xs text-[#111111] mt-1">Net Revenue Retention</div>
                    <div className="font-mono text-[11px] text-[#666666] mt-0.5">Strong enterprise expansion</div>
                  </div>

                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4]">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-3xl text-[#111111]">5.8 mo</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="font-sans font-semibold text-xs text-[#111111] mt-1">CAC Payback Window</div>
                    <div className="font-mono text-[11px] text-[#666666] mt-0.5">High capital efficiency</div>
                  </div>

                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4]">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-3xl text-[#111111]">78%</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="font-sans font-semibold text-xs text-[#111111] mt-1">Gross Software Margin</div>
                    <div className="font-mono text-[11px] text-[#666666] mt-0.5">+420 bps expansion</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 02: COMPARISON TABLE */}
            {activeTab === 'comparison' && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#666666] uppercase">
                    COMPARATIVE MATRIX SYSTEM
                  </span>
                  <h4 className="font-display font-bold text-xl text-[#111111] mt-0.5">
                    Multi-Attribute Benchmark Table
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] mt-1 font-sans">
                    Structured attribute rows with clear highlight columns allow decision-makers to evaluate legacy vs optimized solutions instantly.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-[#111111] font-mono text-[11px] text-[#666666]">
                        <th className="py-2.5 px-3">Evaluation Dimension</th>
                        <th className="py-2.5 px-3">Legacy Infrastructure</th>
                        <th className="py-2.5 px-3 bg-[#D4FF00]/15 text-[#111111] font-bold">Optimized Architecture</th>
                        <th className="py-2.5 px-3 text-right">Net Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EBEBE6]">
                      <tr>
                        <td className="py-3 px-3 font-semibold text-[#111111]">p50 Median Read Latency</td>
                        <td className="py-3 px-3 text-[#666666]">42ms (Direct DB queries)</td>
                        <td className="py-3 px-3 bg-[#D4FF00]/10 font-semibold text-[#111111]">4ms (Edge Cache hit)</td>
                        <td className="py-3 px-3 font-mono font-bold text-right text-emerald-600">10.5x Faster</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-[#111111]">p99 Tail Latency Spikes</td>
                        <td className="py-3 px-3 text-[#666666]">380ms (Lock contention)</td>
                        <td className="py-3 px-3 bg-[#D4FF00]/10 font-semibold text-[#111111]">12ms (Read replicas)</td>
                        <td className="py-3 px-3 font-mono font-bold text-right text-emerald-600">96.8% Lower</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-[#111111]">Cache Hit Efficiency</td>
                        <td className="py-3 px-3 text-[#666666]">34% (Single local node)</td>
                        <td className="py-3 px-3 bg-[#D4FF00]/10 font-semibold text-[#111111]">91.4% (Distributed mesh)</td>
                        <td className="py-3 px-3 font-mono font-bold text-right text-emerald-600">+57.4% Hit Rate</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-[#111111]">Failover Recovery Window</td>
                        <td className="py-3 px-3 text-[#666666]">4.5 minutes (Manual DNS)</td>
                        <td className="py-3 px-3 bg-[#D4FF00]/10 font-semibold text-[#111111]">1.2 seconds (Automated VIP)</td>
                        <td className="py-3 px-3 font-mono font-bold text-right text-emerald-600">Zero Outage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 03: TIMELINE ROADMAP */}
            {activeTab === 'timeline' && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#666666] uppercase">
                    PHASED EXECUTION PIPELINE
                  </span>
                  <h4 className="font-display font-bold text-xl text-[#111111] mt-0.5">
                    Sequential Implementation Roadmap
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] mt-1 font-sans">
                    Translating multi-week engineering transformations into explicit milestone gates with status indicators.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-[#111111]">PHASE 01</span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">
                          COMPLETED
                        </span>
                      </div>
                      <h5 className="font-display font-semibold text-sm text-[#111111]">Discovery & Audit</h5>
                      <p className="text-xs text-[#666666] mt-1">Catalog all service roles, shadow APIs, and baseline access telemetry.</p>
                    </div>
                    <div className="font-mono text-[10px] text-[#888888] pt-2 mt-3 border-t border-[#D9D9D4]">
                      Weeks 1–3
                    </div>
                  </div>

                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-[#111111]">PHASE 02</span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">
                          COMPLETED
                        </span>
                      </div>
                      <h5 className="font-display font-semibold text-sm text-[#111111]">Policy Synthesis</h5>
                      <p className="text-xs text-[#666666] mt-1">Formulate automated role definitions and deploy proxy telemetry sidecars.</p>
                    </div>
                    <div className="font-mono text-[10px] text-[#888888] pt-2 mt-3 border-t border-[#D9D9D4]">
                      Weeks 4–7
                    </div>
                  </div>

                  <div className="p-4 bg-[#D4FF00]/10 rounded-lg border border-[#D4FF00] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-[#111111]">PHASE 03</span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 bg-[#111111] text-[#D4FF00] rounded font-bold">
                          IN PROGRESS
                        </span>
                      </div>
                      <h5 className="font-display font-semibold text-sm text-[#111111]">Enforcement Staging</h5>
                      <p className="text-xs text-[#444444] mt-1">Activate zero-trust ingress in audit-mode across staging clusters.</p>
                    </div>
                    <div className="font-mono text-[10px] text-[#111111] font-semibold pt-2 mt-3 border-t border-[#D4FF00]/40">
                      Weeks 8–11
                    </div>
                  </div>

                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-[#111111]">PHASE 04</span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 bg-gray-200 text-gray-700 rounded font-bold">
                          PLANNED
                        </span>
                      </div>
                      <h5 className="font-display font-semibold text-sm text-[#111111]">Production Cutover</h5>
                      <p className="text-xs text-[#666666] mt-1">Live policy enforcement with automated incident containment triggers.</p>
                    </div>
                    <div className="font-mono text-[10px] text-[#888888] pt-2 mt-3 border-t border-[#D9D9D4]">
                      Weeks 12–14
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 04: 3-TIER TOPOLOGY */}
            {activeTab === 'topology' && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#666666] uppercase">
                    SYSTEMS ARCHITECTURE DIAGRAM
                  </span>
                  <h4 className="font-display font-bold text-xl text-[#111111] mt-0.5">
                    Layered Topology Schematic
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] mt-1 font-sans">
                    Demystifying distributed microservices into 3 structured horizontal zones with explicit responsibilities.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4]">
                    <div className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-[#111111] text-[#D4FF00] inline-block rounded mb-2">
                      TIER 01 / EDGE INGRESS
                    </div>
                    <h5 className="font-display font-bold text-sm text-[#111111]">Anycast Edge CDN</h5>
                    <p className="text-xs text-[#666666] mt-1">Terminates TLS within 15ms of user; serves 78% of static reads.</p>
                    <div className="mt-3 pt-2 border-t border-[#D9D9D4] font-mono text-[10px] text-[#555555]">
                      • Geo-routing • DDoS shield
                    </div>
                  </div>

                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4]">
                    <div className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-[#111111] text-[#D4FF00] inline-block rounded mb-2">
                      TIER 02 / IN-MEMORY
                    </div>
                    <h5 className="font-display font-bold text-sm text-[#111111]">Distributed Redis Mesh</h5>
                    <p className="text-xs text-[#666666] mt-1">Absorbs read spikes with sub-millisecond in-memory cache lookups.</p>
                    <div className="mt-3 pt-2 border-t border-[#D9D9D4] font-mono text-[10px] text-[#555555]">
                      • 91.4% Hit Rate • Auto-eviction
                    </div>
                  </div>

                  <div className="p-4 bg-[#F7F7F5] rounded-lg border border-[#D9D9D4]">
                    <div className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-[#111111] text-[#D4FF00] inline-block rounded mb-2">
                      TIER 03 / STORAGE
                    </div>
                    <h5 className="font-display font-bold text-sm text-[#111111]">Partitioned PostgreSQL</h5>
                    <p className="text-xs text-[#666666] mt-1">ACID transactional writes with automatic multi-AZ hot standby failover.</p>
                    <div className="mt-3 pt-2 border-t border-[#D9D9D4] font-mono text-[10px] text-[#555555]">
                      • Zero data loss • WAL sync
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
