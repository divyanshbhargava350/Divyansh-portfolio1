import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationProps {
  playClick: () => void;
}

export const Education: React.FC<EducationProps> = ({ playClick }) => {
  return (
    <section id="education" className="relative py-24 bg-theme-bg overflow-hidden border-t border-purple-500/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            FORMAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-purple-neon to-cyan-400">EDUCATION</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Curriculum focused on microprocessor design, sensor interfacing, software data structures, and embedded networks at MITS Gwalior.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-purple-500 via-brand-purple-neon to-cyan-400 hidden sm:block opacity-40" />

          <div className="sm:pl-16 relative">
            
            {/* Timeline node icon */}
            <div className="hidden sm:flex absolute left-0 top-6 -translate-x-[23px] w-12 h-12 rounded-2xl bg-purple-950 border-2 border-purple-400 items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-20">
              <GraduationCap className="w-6 h-6" />
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-purple-500/30 shadow-2xl space-y-6">
              
              <div className="flex flex-wrap items-start justify-between gap-3 pb-5 border-b border-purple-500/20">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {EDUCATION_DATA.degree}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Specialization in Internet of Things (IoT)
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-slate-300 mt-1">
                    <span className="font-semibold text-purple-300">{EDUCATION_DATA.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{EDUCATION_DATA.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-500/40 text-purple-300">
                    Graduation: {EDUCATION_DATA.expectedGraduation}
                  </span>
                  <div className="text-[11px] font-mono text-cyan-400 mt-1">
                    {EDUCATION_DATA.status}
                  </div>
                </div>
              </div>

              {/* Coursework */}
              {EDUCATION_DATA.coursework && EDUCATION_DATA.coursework.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-3 flex items-center space-x-2 font-semibold">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>RELEVANT COURSEWORK & LAB STUDY</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {EDUCATION_DATA.coursework.map((course, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/15 text-xs text-slate-300 flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Milestones */}
              {EDUCATION_DATA.milestones && EDUCATION_DATA.milestones.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                    ACADEMIC FOCUS & MILESTONES
                  </h4>
                  <div className="space-y-2 text-xs text-slate-300">
                    {EDUCATION_DATA.milestones.map((m, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
