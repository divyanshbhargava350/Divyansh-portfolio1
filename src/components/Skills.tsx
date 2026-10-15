import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Layers, 
  GitBranch, 
  Flame, 
  CheckCircle2, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

interface SkillsProps {
  playClick: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ playClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Programming', 'IoT & Hardware', 'Software & Tools'];

  const filteredSkills = TECHNICAL_SKILLS.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Project-Tested':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40';
      case 'Active Practice':
        return 'bg-purple-950/60 text-purple-300 border-purple-500/40';
      case 'Foundational':
        return 'bg-blue-950/60 text-blue-400 border-blue-500/40';
      case 'Exploring':
        return 'bg-amber-950/60 text-amber-400 border-amber-500/40';
      default:
        return 'bg-purple-950/40 text-purple-300 border-purple-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-4 h-4 text-purple-400" />;
      case 'IoT & Hardware':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'Software & Tools':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      default:
        return <Layers className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-theme-bg overflow-hidden border-t border-purple-500/10">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-purple-neon to-cyan-400">TOOLS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Grounded in core procedural and object-oriented programming, embedded hardware prototyping, and modern software tooling. No arbitrary percentage bars—just authentic competency.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-purple-500/15">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : 'glass-panel text-slate-300 border-purple-500/20 hover:border-purple-400/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-purple-950/20 border border-purple-500/25 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 rounded-2xl glass-panel border border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-950/25 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 group-hover:border-purple-400 transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getLevelBadge(skill.level)}`}>
                  {skill.level}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed min-h-[38px]">
                {skill.description}
              </p>

              <div className="mt-4 pt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center space-x-1 text-cyan-400/90">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>Verified Competency</span>
                </span>
                <span className="text-purple-400/80 group-hover:text-purple-300 transition-colors">
                  Applied in Projects
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Disclosure Note */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-slate-400 font-mono max-w-2xl">
            <span className="text-purple-300 font-semibold">Integrity Standard: </span>
            All skills shown above reflect active second-year B.Tech coursework and practical project application. No exaggerated percentages or unverified claims.
          </div>
        </div>

      </div>
    </section>
  );
};
