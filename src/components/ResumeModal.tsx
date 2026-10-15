import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle2, 
  Info, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { PERSONAL_INFO, TECHNICAL_SKILLS, PROJECTS, EXPERIENCE_ITEMS, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  playClick: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, playClick }) => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = () => {
    playClick();
    
    // Check if user has uploaded a custom resume.pdf in public folder
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          const link = document.createElement('a');
          link.href = '/resume.pdf';
          link.download = 'Divyansh_Bhargava_Resume.pdf';
          link.click();
          setDownloadNotice('Downloading official PDF resume...');
        } else {
          // Generate clean printable resume document
          generateATSResumeFile();
        }
      })
      .catch(() => {
        generateATSResumeFile();
      });
  };

  const generateATSResumeFile = () => {
    const resumeText = `
DIVYANSH BHARGAVA
Gwalior, Madhya Pradesh, India | divyanshbhargava350@gmail.com
LinkedIn: https://www.linkedin.com/in/divyansh-bhargava-7b43403a5
GitHub: https://github.com/divyanshbhargava350

PROFESSIONAL TITLE
IoT Enthusiast | Aspiring Software Engineer

EDUCATION
Bachelor of Technology (B.Tech) — Internet of Things (IoT)
Madhav Institute of Technology and Science (MITS), Gwalior
Expected Graduation: 2029 | Current Status: Second Year Enrolled
Relevant Coursework: IoT Architecture, Microcontrollers, C/C++ Programming, Data Structures, Sensor Networks

TECHNICAL SKILLS
• Programming: C, C++, Python
• IoT & Hardware: ESP32, Arduino, Microcontroller Architecture, Sensors & Actuators, I2C/SPI Protocols
• Software & Tools: Git, GitHub, HTML, CSS, JavaScript, Linux CLI

KEY PROJECTS
1. Smart Irrigation System (Prototype)
   • Closed-loop precision automated soil moisture sensing using capacitive probes.
   • Hysteresis-controlled relay switching DC pump to prevent water waste and root decay.
   • Tech: Capacitive Soil Sensor, ESP32, 5V Relay, C++ Firmware.

2. ESP32-Based Fire & Smoke Monitoring (Prototype)
   • Real-time hazardous gas/smoke detection node with hardware interrupt alarm (<50ms).
   • High-decibel acoustic alert and localized telemetry dissemination.
   • Tech: ESP32, MQ-2 Gas/Smoke Sensor, Active Buzzer, Embedded C++.

3. Smart Plant Monitoring System (Planned)
   • Multi-sensor botanical vitals cluster tracking ambient temp, humidity, lux, and soil hydration.
   • Tech: Capacitive Soil Sensor, DHT22, LDR, I2C Bus.

4. Smart Home Automation Hub (In Progress)
   • Local LAN appliance switching with optically isolated relays; zero external cloud dependency.
   • Tech: ESP32 Microcontroller, 4-Channel Optocoupled Relay, Local Web Server.

COLLEGE EXPERIENCE & EVENT COORDINATION
Skillsphere Club — Legacy of Valor
• Role: Core Team Member & Event Coordinator
• Managed logistics, participant communications, and audiovisual orchestration for campus event.

CREATIVE ACHIEVEMENTS
Lafz-e-Bayaan — Raabta (Creative Expression & Elocution)
• Expressive public speaking and narrative elocution connecting technical rigor with emotional storytelling.
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Divyansh_Bhargava_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);

    setDownloadNotice('Downloaded ATS-formatted resume text! (To serve a PDF, simply place resume.pdf in the public/ folder).');
    setTimeout(() => setDownloadNotice(null), 5000);
  };

  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl glass-panel-elevated border border-purple-400/50 shadow-2xl overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-purple-950/40">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-purple-600/30 text-purple-300 border border-purple-500/30">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Curriculum Vitae — Divyansh Bhargava
              </h3>
              <p className="text-[11px] font-mono text-purple-300">
                Verified B.Tech IoT Credentials • ATS Compatible
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-xs text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-md shadow-purple-950 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/60 transition-colors ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Download notification alert if triggered */}
        {downloadNotice && (
          <div className="px-6 py-2.5 bg-cyan-950/70 border-b border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center space-x-2 animate-in slide-in-from-top duration-200">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{downloadNotice}</span>
          </div>
        )}

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 text-xs sm:text-sm font-sans bg-black/40 print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-purple-500/20 pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-sm font-mono text-purple-400 mt-0.5">
                {PERSONAL_INFO.title}
              </p>
              <div className="flex items-center space-x-2 text-xs text-slate-400 mt-2 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.city}</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end space-y-1 text-xs font-mono text-slate-300">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline flex items-center space-x-1.5">
                <Mail className="w-3 h-3" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-purple-300 hover:underline flex items-center space-x-1.5">
                <Linkedin className="w-3 h-3" />
                <span>LinkedIn Profile</span>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:underline flex items-center space-x-1.5">
                <Github className="w-3 h-3" />
                <span>github.com/divyanshbhargava350</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest border-b border-purple-500/20 pb-1">
              EDUCATION
            </h2>
            <div className="flex justify-between items-start pt-1">
              <div>
                <h3 className="font-bold text-white text-sm">
                  {EDUCATION_DATA.institution}
                </h3>
                <div className="text-xs text-cyan-300">
                  {EDUCATION_DATA.degree}
                </div>
              </div>
              <div className="text-right text-xs font-mono text-slate-400">
                <div>Graduation: {EDUCATION_DATA.expectedGraduation}</div>
                <div className="text-[11px] text-purple-300">{EDUCATION_DATA.status}</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 pt-1">
              <strong className="text-slate-300 font-mono">Relevant Coursework: </strong>
              {EDUCATION_DATA.coursework.join(', ')}.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest border-b border-purple-500/20 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-xs text-slate-300">
              <div>
                <span className="font-mono font-semibold text-cyan-400">Programming Languages: </span>
                C, C++, Python
              </div>
              <div>
                <span className="font-mono font-semibold text-cyan-400">IoT & Hardware: </span>
                ESP32, Arduino, Microcontroller Architecture, Analog/Digital Sensors, Actuators, I2C / SPI / UART
              </div>
              <div>
                <span className="font-mono font-semibold text-cyan-400">Software & Tools: </span>
                Git, GitHub, HTML5, CSS3, JavaScript, Linux Command Line
              </div>
            </div>
          </div>

          {/* Project Work */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest border-b border-purple-500/20 pb-1">
              TECHNICAL PROJECTS
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-white">
                    {proj.title} <span className="font-normal font-mono text-[11px] text-purple-300">({proj.status})</span>
                  </h3>
                  <span className="font-mono text-[10px] text-cyan-400">
                    {proj.technologies.slice(0, 3).join(', ')}
                  </span>
                </div>
                <p className="text-slate-400 leading-snug">
                  {proj.solution}
                </p>
                <div className="text-[11px] text-slate-300 font-mono">
                  • Individual Contribution: {proj.contribution}
                </div>
              </div>
            ))}
          </div>

          {/* Event Experience & Leadership */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest border-b border-purple-500/20 pb-1">
              COLLEGE ACTIVITIES & EVENT COORDINATION
            </h2>
            {EXPERIENCE_ITEMS.map((exp) => (
              <div key={exp.id} className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="font-bold text-white">
                    {exp.organization} — {exp.event}
                  </span>
                  <span className="font-mono text-cyan-400">{exp.role}</span>
                </div>
                <p className="text-slate-400 leading-snug">
                  {exp.contribution}
                </p>
              </div>
            ))}
          </div>

          {/* Creative Expression */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest border-b border-purple-500/20 pb-1">
              CREATIVE EXPRESSION & CULTURAL ENGAGEMENT
            </h2>
            <div className="text-xs text-slate-300 space-y-1">
              <span className="font-bold text-white">Lafz-e-Bayaan — Raabta</span>
              <p className="text-slate-400 leading-snug">
                Participated in poetic expression and elocution showcase, cultivating narrative articulation, public presentation, and cross-disciplinary creative thinking.
              </p>
            </div>
          </div>

        </div>

        {/* Footer info explaining PDF replacement */}
        <div className="px-6 py-3 border-t border-purple-500/20 bg-purple-950/20 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-1.5">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>To substitute with custom PDF: place <code>resume.pdf</code> inside the <code>public/</code> directory.</span>
          </div>
          <span className="text-purple-300">Updated: October 2026</span>
        </div>

      </div>
    </div>
  );
};
