import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Send, Github, Linkedin, Mail, Radio, Cpu, Network, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  playClick: () => void;
  playPulse: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, playClick, playPulse }) => {
  const [packetBurst, setPacketBurst] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTelemetry, setActiveTelemetry] = useState({
    cpuUsage: 14,
    freeHeap: 284,
    meshRssi: -58,
    packetCounter: 1420,
  });

  // Dynamic telemetry tick
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTelemetry((prev) => ({
        cpuUsage: Math.floor(12 + Math.random() * 8),
        freeHeap: Math.floor(280 + Math.random() * 8),
        meshRssi: Math.floor(-62 + Math.random() * 6),
        packetCounter: prev.packetCounter + 1,
      }));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const triggerBurst = () => {
    playPulse();
    setPacketBurst((prev) => prev + 1);
  };

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-6 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-semibold tracking-wider">{PERSONAL_INFO.availabilityStatus}</span>
            </div>

            {/* Sub-label */}
            <div className="flex items-center space-x-2 text-purple-400 font-mono text-sm tracking-widest uppercase mb-2">
              <span className="w-6 h-[1.5px] bg-purple-500"></span>
              <span>HELLO, I'M</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-none">
              <span className="block text-slate-100">DIVYANSH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-purple-neon to-cyan-400 text-glow-purple">
                BHARGAVA
              </span>
            </h1>

            {/* Role bullets */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg lg:text-xl font-medium text-slate-300 mb-6 font-mono">
              <span className="text-purple-400">IoT Enthusiast.</span>
              <span className="text-slate-600 dark:text-slate-500">•</span>
              <span className="text-cyan-400">Future Software Engineer.</span>
              <span className="text-slate-600 dark:text-slate-500">•</span>
              <span className="text-slate-200">Problem Solver.</span>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-400 dark:text-slate-300 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-normal">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              {/* Explore My Work */}
              <a
                href="#projects"
                onClick={() => playClick()}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download / View Resume */}
              <button
                onClick={() => {
                  playClick();
                  onOpenResume();
                }}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-400 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>

              {/* Let's Connect */}
              <a
                href="#contact"
                onClick={() => playClick()}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 border border-slate-700/50 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Links & Email copy pill */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-purple-500/15">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Channels:
              </span>

              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick()}
                  className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/25 hover:border-purple-400 text-slate-300 hover:text-white transition-all hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick()}
                  className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/25 hover:border-purple-400 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-purple-950/30 border border-purple-500/25 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
                  title="Click to copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                      <span className="sm:hidden">Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated IoT Gateway Visual Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Holographic Radar Ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-purple-500/20 border-dashed animate-radar-sweep pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-cyan-500/15 pointer-events-none" />

            {/* Central Glassmorphic Gateway Terminal */}
            <div className="relative w-full max-w-[420px] rounded-2xl glass-panel-elevated p-6 border border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.25)] z-20">
              
              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-500/20">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-purple-300 tracking-wider">
                    GATEWAY_CORE.ESP32
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Realistic Gateway Graphic & Network Diagram */}
              <div className="relative bg-black/60 rounded-xl p-4 border border-purple-500/20 overflow-hidden mb-4">
                
                {/* SVG Visualizing the Connected Sensor Topology */}
                <svg viewBox="0 0 360 220" className="w-full h-44">
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#7e22ce" />
                    </linearGradient>
                    <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>

                  {/* Grid background lines */}
                  <line x1="0" y1="110" x2="360" y2="110" stroke="rgba(168,85,247,0.1)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="180" y1="0" x2="180" y2="220" stroke="rgba(168,85,247,0.1)" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Connection Lines from Sensor Nodes to Gateway Hub */}
                  {/* Node 1: Temperature (Top Left) */}
                  <line x1="60" y1="45" x2="180" y2="110" stroke="#a855f7" strokeWidth="1.5" className="animate-dash" />
                  {/* Node 2: Soil Moisture (Bottom Left) */}
                  <line x1="60" y1="175" x2="180" y2="110" stroke="#06b6d4" strokeWidth="1.5" className="animate-dash" />
                  {/* Node 3: Light Sensor (Top Right) */}
                  <line x1="300" y1="45" x2="180" y2="110" stroke="#a855f7" strokeWidth="1.5" className="animate-dash" />
                  {/* Node 4: Smoke/Gas (Bottom Right) */}
                  <line x1="300" y1="175" x2="180" y2="110" stroke="#22d3ee" strokeWidth="1.5" className="animate-dash" />

                  {/* Central Gateway Hub */}
                  <g transform="translate(180, 110)">
                    <circle r="36" fill="#0d0d1a" stroke="#a855f7" strokeWidth="2" />
                    <circle r="42" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 4" className="animate-spin origin-center" />
                    <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#1e1b4b" stroke="#c084fc" strokeWidth="1.5" />
                    <text x="0" y="4" textAnchor="middle" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      GATEWAY
                    </text>
                  </g>

                  {/* Node 1: Temp & Humidity */}
                  <g transform="translate(60, 45)">
                    <circle r="18" fill="#131326" stroke="#c084fc" strokeWidth="1.5" />
                    <circle r="5" fill="#a855f7" />
                    <text x="0" y="32" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
                      TEMP 24°C
                    </text>
                  </g>

                  {/* Node 2: Soil Moisture */}
                  <g transform="translate(60, 175)">
                    <circle r="18" fill="#131326" stroke="#22d3ee" strokeWidth="1.5" />
                    <circle r="5" fill="#06b6d4" />
                    <text x="0" y="-24" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
                      SOIL 42%
                    </text>
                  </g>

                  {/* Node 3: Light */}
                  <g transform="translate(300, 45)">
                    <circle r="18" fill="#131326" stroke="#c084fc" strokeWidth="1.5" />
                    <circle r="5" fill="#a855f7" />
                    <text x="0" y="32" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
                      LUX 380
                    </text>
                  </g>

                  {/* Node 4: Smoke */}
                  <g transform="translate(300, 175)">
                    <circle r="18" fill="#131326" stroke="#22d3ee" strokeWidth="1.5" />
                    <circle r="5" fill="#06b6d4" />
                    <text x="0" y="-24" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
                      GAS SAFE
                    </text>
                  </g>

                  {/* Traveling Pulse Indicators on burst */}
                  {packetBurst > 0 && (
                    <circle r="4" fill="#38bdf8" className="animate-ping">
                      <animateMotion path="M 60,45 L 180,110" dur="0.8s" repeatCount="1" />
                    </circle>
                  )}
                </svg>

                {/* Decorative Interface Labels */}
                <div className="absolute top-2 left-3 text-[9px] font-mono text-purple-400/80 tracking-widest flex items-center space-x-1">
                  <Activity className="w-2.5 h-2.5" />
                  <span>SENSOR NETWORK</span>
                </div>
                <div className="absolute bottom-2 right-3 text-[9px] font-mono text-cyan-400/80 tracking-widest flex items-center space-x-1">
                  <Network className="w-2.5 h-2.5" />
                  <span>DATA FLOW NOMINAL</span>
                </div>
              </div>

              {/* Hardware Telemetry Strip */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/20">
                  <div className="text-[10px] text-slate-400 flex items-center justify-between">
                    <span>EDGE CPU</span>
                    <Cpu className="w-3 h-3 text-purple-400" />
                  </div>
                  <div className="text-sm font-bold text-slate-100 mt-0.5">
                    {activeTelemetry.cpuUsage}% <span className="text-[10px] text-purple-400 font-normal">Xtensa LX6</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/20">
                  <div className="text-[10px] text-slate-400 flex items-center justify-between">
                    <span>RF MESH RSSI</span>
                    <Radio className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div className="text-sm font-bold text-slate-100 mt-0.5">
                    {activeTelemetry.meshRssi} dBm <span className="text-[10px] text-cyan-400 font-normal">2.4GHz</span>
                  </div>
                </div>
              </div>

              {/* Interactive Telemetry Trigger Button */}
              <button
                onClick={triggerBurst}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 hover:border-cyan-400 text-purple-200 hover:text-white text-xs font-mono transition-all duration-200 group focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-125 transition-transform" />
                <span>Simulate Sensor Telemetry Pulse</span>
              </button>

              <div className="mt-2 text-center text-[10px] font-mono text-slate-400">
                Architectural Simulation • Packets Processed: {activeTelemetry.packetCounter}
              </div>
            </div>

            {/* Floating Technical Decorators */}
            <div className="hidden sm:block absolute -top-4 -right-4 p-3 rounded-xl glass-panel text-[11px] font-mono text-purple-300 border border-purple-500/30 shadow-lg animate-float">
              <div className="flex items-center space-x-1.5 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span>BUS: I2C / SPI</span>
              </div>
              <div className="text-slate-400 text-[10px] mt-0.5">4 Nodes Connected</div>
            </div>

            <div className="hidden sm:block absolute -bottom-6 -left-4 p-3 rounded-xl glass-panel text-[11px] font-mono text-slate-300 border border-purple-500/30 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-purple-300 font-semibold">EDGE COMPUTING</div>
              <div className="text-slate-400 text-[10px]">Filtering & Calibration</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
