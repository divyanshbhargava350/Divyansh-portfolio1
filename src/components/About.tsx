import React from 'react';
import { 
  Compass, 
  Sparkles, 
  Lightbulb, 
  Users, 
  Wrench, 
  BookOpen, 
  Landmark, 
  Cpu, 
  Code2, 
  Bot, 
  Smile, 
  Bike, 
  Footprints, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  playClick: () => void;
}

export const About: React.FC<AboutProps> = ({ playClick }) => {
  return (
    <section id="about" className="relative py-24 bg-theme-bg overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            WHO I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-purple-neon to-cyan-400">AM</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering student at MITS Gwalior blending embedded hardware curiosity with software craft and a drive for public impact.
          </p>
        </div>

        {/* Split Layout: Bio on left, Visual Blueprint on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left: Detailed Story & Academic Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>Second-Year B.Tech in Internet of Things (IoT)</span>
              </h3>
              <div className="text-sm font-mono text-cyan-400">
                Madhav Institute of Technology and Science, Gwalior • Class of 2029
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                {PERSONAL_INFO.aboutBio.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Verified Career Interests Pills */}
              <div className="pt-6 border-t border-purple-500/20">
                <span className="text-xs font-mono text-purple-300 uppercase tracking-wider block mb-3">
                  PRIMARY FOCUS AREAS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PERSONAL_INFO.careerInterests.map((interest) => (
                    <div
                      key={interest.title}
                      className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 hover:border-purple-400/40 transition-all"
                    >
                      <div className="text-xs font-semibold text-slate-100 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{interest.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {interest.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Personality & Hobbies Sub-strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Personality */}
              <div className="p-5 rounded-2xl glass-panel border border-purple-500/20">
                <div className="flex items-center space-x-2 text-xs font-mono text-purple-300 uppercase tracking-wider mb-3">
                  <Smile className="w-4 h-4 text-purple-400" />
                  <span>PERSONALITY TRAITS</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.personality.map((trait, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-950/40 border border-purple-500/30 text-purple-200"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hobbies */}
              <div className="p-5 rounded-2xl glass-panel border border-purple-500/20">
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>BEYOND THE DESK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.hobbies.map((hobby, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-950/30 border border-cyan-500/30 text-cyan-200 flex items-center space-x-1.5"
                    >
                      {hobby.name === 'Walking outdoors' && <Footprints className="w-3 h-3 text-cyan-400" />}
                      {hobby.name === 'Cycling' && <Bike className="w-3 h-3 text-cyan-400" />}
                      {hobby.name === 'Exploring technology' && <Cpu className="w-3 h-3 text-cyan-400" />}
                      <span>{hobby.name}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right: The Four Core Pillars of Engineering & Synthesis Graphic */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2 flex items-center space-x-2">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              <span>CORE OPERATIONAL PILLARS</span>
            </div>

            <div className="space-y-3.5">
              {PERSONAL_INFO.corePillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="group p-5 rounded-2xl glass-panel border border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-950/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-mono text-xs font-extrabold text-cyan-400">
                          {pillar.number}
                        </span>
                        <span className="text-slate-600 dark:text-slate-500">—</span>
                        <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pr-2">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                      {pillar.number === '01' && <BookOpen className="w-4 h-4" />}
                      {pillar.number === '02' && <Wrench className="w-4 h-4" />}
                      {pillar.number === '03' && <Users className="w-4 h-4" />}
                      {pillar.number === '04' && <Sparkles className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Civil Services & Technology Synthesis Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 via-slate-900/60 to-cyan-950/40 border border-purple-500/30">
              <div className="flex items-center space-x-2.5 text-xs font-mono text-purple-300 uppercase tracking-wider mb-2">
                <Landmark className="w-4 h-4 text-cyan-400" />
                <span>TECH + PUBLIC GOVERNANCE SYNTHESIS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Combining rigorous technical grounding in software and IoT systems with an enduring vision for public policy and administration—building technology not for its own sake, but to sustainably improve human everyday lives."
              </p>
              <div className="mt-3 text-[11px] font-mono text-cyan-400">
                Divyansh Bhargava • Gwalior, MP
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
