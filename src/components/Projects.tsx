import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Compass, 
  Maximize2, 
  X, 
  Zap, 
  Sliders,
  Droplets,
  Flame,
  Sprout,
  Home
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectStatus } from '../types/portfolio';

interface ProjectsProps {
  playClick: () => void;
  playPulse: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ playClick, playPulse }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const statuses = ['All', 'Prototype', 'In Progress', 'Planned'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedStatus === 'All') return true;
    return proj.status === selectedStatus;
  });

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40';
      case 'Prototype':
        return 'bg-cyan-950/60 text-cyan-400 border-cyan-500/40';
      case 'In Progress':
        return 'bg-purple-950/60 text-purple-300 border-purple-500/40';
      case 'Planned':
        return 'bg-slate-800/80 text-slate-300 border-slate-600/40';
      default:
        return 'bg-purple-950/40 text-purple-300 border-purple-500/30';
    }
  };

  const renderProjectSchematic = (diagramType: Project['diagramType']) => {
    switch (diagramType) {
      case 'irrigation':
        return (
          <div className="relative h-44 bg-black/60 rounded-xl p-3 border border-purple-500/20 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              {/* Soil Sensor -> ESP32 -> Relay -> Pump */}
              <rect x="20" y="40" width="60" height="40" rx="6" fill="#1e1b4b" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="50" y="60" textAnchor="middle" fill="#22d3ee" fontSize="9" fontFamily="monospace">SOIL SENSOR</text>
              <text x="50" y="72" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Analog ADC</text>

              <line x1="80" y1="60" x2="120" y2="60" stroke="#a855f7" strokeWidth="1.5" className="animate-dash" />

              <rect x="120" y="35" width="60" height="50" rx="6" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
              <text x="150" y="58" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">ESP32</text>
              <text x="150" y="70" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="monospace">Hysteresis</text>

              <line x1="180" y1="60" x2="220" y2="60" stroke="#06b6d4" strokeWidth="1.5" className="animate-dash" />

              <rect x="220" y="40" width="60" height="40" rx="6" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="250" y="60" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="monospace">5V RELAY</text>
              <text x="250" y="72" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">DC PUMP</text>
            </svg>
            <div className="absolute top-2 left-3 flex items-center space-x-1.5 text-[9px] font-mono text-cyan-400">
              <Droplets className="w-3 h-3 text-cyan-400" />
              <span>PRECISION IRRIGATION LOOP</span>
            </div>
          </div>
        );

      case 'fire-smoke':
        return (
          <div className="relative h-44 bg-black/60 rounded-xl p-3 border border-purple-500/20 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              {/* MQ-2 -> ESP32 -> Buzzer & Local Web Broadcast */}
              <rect x="20" y="40" width="60" height="40" rx="6" fill="#1e1b4b" stroke="#ef4444" strokeWidth="1.5" />
              <text x="50" y="60" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="monospace">MQ-2 GAS</text>
              <text x="50" y="72" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">PPM Reading</text>

              <line x1="80" y1="60" x2="120" y2="60" stroke="#ef4444" strokeWidth="1.5" className="animate-dash" />

              <rect x="120" y="35" width="60" height="50" rx="6" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
              <text x="150" y="58" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">ESP32</text>
              <text x="150" y="70" textAnchor="middle" fill="#f87171" fontSize="8" fontFamily="monospace">&lt;50ms Latency</text>

              <line x1="180" y1="60" x2="220" y2="60" stroke="#ef4444" strokeWidth="1.5" className="animate-dash" />

              <rect x="220" y="40" width="60" height="40" rx="6" fill="#1e1b4b" stroke="#ef4444" strokeWidth="1.5" />
              <text x="250" y="60" textAnchor="middle" fill="#fca5a5" fontSize="9" fontFamily="monospace">ALARM BUZZER</text>
              <text x="250" y="72" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Strobe Trigger</text>
            </svg>
            <div className="absolute top-2 left-3 flex items-center space-x-1.5 text-[9px] font-mono text-rose-400">
              <Flame className="w-3 h-3 text-rose-400" />
              <span>RAPID HAZARD TRIP LOOP</span>
            </div>
          </div>
        );

      case 'plant':
        return (
          <div className="relative h-44 bg-black/60 rounded-xl p-3 border border-purple-500/20 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              {/* Tri-sensor -> ESP32 Multi-Bus */}
              <circle cx="50" cy="30" r="14" fill="#1e1b4b" stroke="#22d3ee" strokeWidth="1.5" />
              <text x="50" y="33" textAnchor="middle" fill="#22d3ee" fontSize="8" fontFamily="monospace">MOIST</text>

              <circle cx="50" cy="65" r="14" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1.5" />
              <text x="50" y="68" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="monospace">DHT22</text>

              <circle cx="50" cy="100" r="14" fill="#1e1b4b" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="50" y="103" textAnchor="middle" fill="#fde047" fontSize="8" fontFamily="monospace">LIGHT</text>

              <line x1="64" y1="30" x2="140" y2="60" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="64" y1="65" x2="140" y2="65" stroke="#a855f7" strokeWidth="1.5" />
              <line x1="64" y1="100" x2="140" y2="70" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 3" />

              <rect x="140" y="40" width="70" height="50" rx="6" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
              <text x="175" y="62" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">ESP32 CORE</text>
              <text x="175" y="74" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace">Telemetry Pkg</text>

              <line x1="210" y1="65" x2="250" y2="65" stroke="#06b6d4" strokeWidth="1.5" className="animate-dash" />

              <circle cx="265" cy="65" r="15" fill="#1e1b4b" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="265" y="68" textAnchor="middle" fill="#22d3ee" fontSize="8" fontFamily="monospace">CLOUD</text>
            </svg>
            <div className="absolute top-2 left-3 flex items-center space-x-1.5 text-[9px] font-mono text-emerald-400">
              <Sprout className="w-3 h-3 text-emerald-400" />
              <span>MULTI-PARAMETER BOTANICAL CLUSTER</span>
            </div>
          </div>
        );

      case 'home-auto':
        return (
          <div className="relative h-44 bg-black/60 rounded-xl p-3 border border-purple-500/20 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              {/* Web Browser -> ESP32 Local Server -> 4-Channel Relay */}
              <rect x="20" y="40" width="65" height="40" rx="6" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1.5" />
              <text x="52" y="58" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="monospace">LAN CLIENT</text>
              <text x="52" y="70" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">HTTP / REST</text>

              <line x1="85" y1="60" x2="125" y2="60" stroke="#06b6d4" strokeWidth="1.5" className="animate-dash" />

              <rect x="125" y="35" width="65" height="50" rx="6" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
              <text x="157" y="56" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">ESP32 WEB</text>
              <text x="157" y="68" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace">Isolated AP</text>

              <line x1="190" y1="60" x2="230" y2="60" stroke="#a855f7" strokeWidth="1.5" className="animate-dash" />

              <rect x="230" y="35" width="55" height="50" rx="6" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="257" y="56" textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="monospace">4-CH RELAY</text>
              <text x="257" y="68" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Mains Isol.</text>
            </svg>
            <div className="absolute top-2 left-3 flex items-center space-x-1.5 text-[9px] font-mono text-purple-300">
              <Home className="w-3 h-3 text-purple-400" />
              <span>OFFLINE LAN ISOLATED CONTROLLER</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#090912]/90 overflow-hidden border-t border-purple-500/10">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>APPLIED HARDWARE & SOFTWARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            THINGS I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-purple-neon to-cyan-400">BUILDING</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Direct practical solutions addressing real physical challenges. Each project reflects iterative circuit prototyping, firmware logic, and transparent development stages.
          </p>
        </div>

        {/* Status Filters */}
        <div className="flex items-center justify-center space-x-2 mb-12">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => {
                playClick();
                setSelectedStatus(status);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 border ${
                selectedStatus === status
                  ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                  : 'glass-panel text-slate-300 border-purple-500/20 hover:border-purple-400/50 hover:text-white'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel-elevated border border-purple-500/25 hover:border-purple-400/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:-translate-y-1"
            >
              <div>
                {/* Header: Title and Status */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs font-mono text-purple-300/90 mb-4">
                  {project.tagline}
                </p>

                {/* Schematic Preview */}
                <div className="mb-5">
                  {renderProjectSchematic(project.diagramType)}
                </div>

                {/* Problem & Proposed Solution Summary */}
                <div className="space-y-3 mb-5 text-xs text-slate-300 leading-relaxed">
                  <div>
                    <span className="font-mono text-purple-400 font-semibold uppercase text-[10px] block mb-0.5">
                      Problem Context:
                    </span>
                    <p className="text-slate-400 line-clamp-2">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-cyan-400 font-semibold uppercase text-[10px] block mb-0.5">
                      Proposed Architecture:
                    </span>
                    <p className="text-slate-300 line-clamp-2">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/40 border border-purple-500/20 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
                <button
                  onClick={() => {
                    playClick();
                    setActiveModalProject(project);
                  }}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-purple-300 hover:text-white transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Technical Specs</span>
                </button>

                <div className="flex items-center space-x-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500 px-2 py-1 rounded bg-black/30 border border-slate-800">
                      Repo in Prep
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel-elevated rounded-2xl border border-purple-400/50 p-6 sm:p-8 shadow-2xl">
              
              <button
                onClick={() => {
                  playClick();
                  setActiveModalProject(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {activeModalProject.category}
                  </span>
                  <span className="text-slate-600 dark:text-slate-500">•</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getStatusBadge(activeModalProject.status)}`}>
                    {activeModalProject.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs font-mono text-purple-300 mt-1">
                  {activeModalProject.tagline}
                </p>
              </div>

              {/* Schematic view */}
              <div className="mb-6">
                {renderProjectSchematic(activeModalProject.diagramType)}
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 mb-6">
                <div>
                  <h4 className="font-mono text-xs text-purple-300 uppercase tracking-wider mb-1 font-semibold">
                    PROBLEM STATEMENT
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
                    PROPOSED SOLUTION & ARCHITECTURE
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-purple-300 uppercase tracking-wider mb-1 font-semibold">
                    INDIVIDUAL CONTRIBUTION
                  </h4>
                  <p className="text-purple-200 leading-relaxed bg-purple-950/30 p-3 rounded-xl border border-purple-500/20">
                    {activeModalProject.contribution}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                    KEY SYSTEM CAPABILITIES
                  </h4>
                  <ul className="space-y-1.5 font-mono text-xs text-slate-400">
                    {activeModalProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-purple-500/20">
                <span className="font-mono text-[11px] text-slate-400 uppercase block mb-2">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-950/60 border border-purple-500/30 text-purple-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
