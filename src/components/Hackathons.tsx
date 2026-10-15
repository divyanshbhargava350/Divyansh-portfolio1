import React from 'react';
import { 
  Rocket, 
  Lightbulb, 
  Users, 
  Cpu, 
  Layers, 
  Terminal, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { HACKATHONS } from '../data/portfolioData';

interface HackathonsProps {
  playClick: () => void;
}

export const Hackathons: React.FC<HackathonsProps> = ({ playClick }) => {
  return (
    <section id="hackathons" className="relative py-24 bg-[#090912]/80 overflow-hidden border-t border-purple-500/10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>INNOVATION & SPRINT SESSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            HACKATHONS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-purple-neon to-cyan-400">IDEAS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rapid prototyping sprints testing the convergence of artificial intelligence heuristics and real-world embedded sensor feeds.
          </p>
        </div>

        {/* Hackathon Showcase Card */}
        <div className="max-w-4xl mx-auto">
          {HACKATHONS.map((hackathon) => (
            <div
              key={hackathon.id}
              className="p-6 sm:p-10 rounded-2xl glass-panel-elevated border border-purple-500/30 shadow-2xl relative space-y-6"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-cyan-400">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {hackathon.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs font-mono text-purple-300 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Team: {hackathon.team}</span>
                      <span>•</span>
                      <span>Year: {hackathon.year}</span>
                    </div>
                  </div>
                </div>

                <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>{hackathon.status}</span>
                </span>
              </div>

              {/* Grid: Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-2">
                  <div className="text-xs font-mono text-purple-300 uppercase tracking-wider flex items-center space-x-1.5 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5 text-purple-400" />
                    <span>CHALLENGE & PROBLEM STATEMENT</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {hackathon.problemStatement}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider flex items-center space-x-1.5 font-semibold">
                    <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
                    <span>PROPOSED ARCHITECTURE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {hackathon.proposedSolution}
                  </p>
                </div>
              </div>

              {/* Individual Contribution */}
              <div className="p-5 rounded-xl bg-black/40 border border-purple-500/25">
                <div className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5 font-semibold">
                  INDIVIDUAL ROLE & CONTRIBUTIONS
                </div>
                <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                  {hackathon.contribution}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  TECHNOLOGIES EXPLORED & APPLIED:
                </span>
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-950/50 border border-purple-500/25 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Transparent Status Disclosure */}
              <div className="pt-4 border-t border-purple-500/15 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Result: Active sprint in college innovation circles</span>
                <span className="text-cyan-400">Iterative Prototype Sprint</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
