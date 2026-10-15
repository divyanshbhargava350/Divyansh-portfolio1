import React from 'react';
import { 
  Users2, 
  Award, 
  Calendar, 
  Sparkles, 
  Mic2, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { EXPERIENCE_ITEMS, ACHIEVEMENTS } from '../data/portfolioData';

interface ExperienceProps {
  playClick: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ playClick }) => {
  return (
    <section id="experience" className="relative py-24 bg-theme-bg overflow-hidden border-t border-purple-500/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Users2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>COLLABORATIVE LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-purple-neon to-cyan-400">CODE</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering isn't built in isolation. Event management, stage orchestration, and creative public communication forge the discipline necessary for real-world execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Event Management & Teamwork (Skillsphere Club: Legacy of Valor) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>EVENT COORDINATION & EXECUTION</span>
            </div>

            {EXPERIENCE_ITEMS.map((exp) => (
              <div
                key={exp.id}
                className="p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 shadow-xl space-y-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-purple-500/20">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      {exp.organization}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {exp.event}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300">
                    {exp.role}
                  </span>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-2 font-semibold">
                    Core Responsibilities & Workflow:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Individual Contribution */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs sm:text-sm">
                  <span className="font-mono text-xs text-purple-300 uppercase tracking-wider block mb-1 font-semibold">
                    Individual Contribution:
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.contribution}
                  </p>
                </div>

                {/* Outcome */}
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Result: {exp.results}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Creative Expression & Articulation (Lafz-e-Bayaan — Raabta) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>CREATIVE ARTICULATION & ACHIEVEMENTS</span>
            </div>

            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="p-6 sm:p-7 rounded-2xl glass-panel border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 shadow-xl space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/40 to-cyan-600/40 border border-purple-500/30 text-white">
                    <Mic2 className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {ach.title}
                    </h3>
                    <span className="text-xs font-mono text-purple-300">
                      {ach.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ach.description}
                </p>

                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-200">
                  <span className="font-mono font-bold block mb-0.5 text-cyan-300">
                    Artistic & Personal Impact:
                  </span>
                  {ach.highlight}
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  <span>College Literary & Cultural Engagement</span>
                </div>
              </div>
            ))}

            {/* Note on Authenticity */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15 text-xs text-slate-400 font-mono">
              <span className="text-purple-300 font-semibold">Integrity Note: </span>
              Achievements and events are reflected faithfully according to verified participation without inflating designations or attendance numbers.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
