import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  CheckCircle2, 
  Linkedin, 
  Github, 
  MapPin, 
  Clock, 
  Radio, 
  Sparkles,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  playClick: () => void;
  playSuccess: () => void;
}

export const Contact: React.FC<ContactProps> = ({ playClick, playSuccess }) => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  // Live Gwalior (IST) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccess();

    // Compose mailto link
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmittedStatus('Draft opened in your email client! Thank you.');
    setTimeout(() => setSubmittedStatus(null), 6000);
  };

  return (
    <section id="contact" className="relative py-24 bg-theme-bg overflow-hidden border-t border-purple-500/10">
      {/* Background radial glows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            LET'S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-purple-neon to-cyan-400">MEANINGFUL</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have an interesting idea, a project to discuss, or an opportunity to collaborate? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connect Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Verified Email Card with Copy interaction */}
            <div className="p-6 sm:p-7 rounded-2xl glass-panel-elevated border border-purple-500/30 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
                  DIRECT INBOX
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>Active Monitored</span>
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Personal Email:</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-purple-300 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {/* Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-white transition-all shadow-sm"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                {/* Direct Compose mailto */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => playClick()}
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-mono font-semibold text-white shadow-md shadow-purple-950 transition-all hover:scale-105 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* LinkedIn & GitHub Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="group p-5 rounded-2xl glass-panel border border-purple-500/20 hover:border-purple-400 hover:bg-purple-950/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 group-hover:text-cyan-400 group-hover:border-purple-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Connect & Network
                </p>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="group p-5 rounded-2xl glass-panel border border-purple-500/20 hover:border-purple-400 hover:bg-purple-950/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 group-hover:text-cyan-400 group-hover:border-purple-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Code Repositories
                </p>
              </a>
            </div>

            {/* Location & Local Clock Card */}
            <div className="p-5 rounded-2xl bg-black/40 border border-purple-500/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-purple-950/40 text-cyan-400 border border-purple-500/25">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">
                    Gwalior, Madhya Pradesh, India
                  </div>
                  <div className="text-[11px] font-mono text-purple-300">
                    MITS Gwalior Campus Region
                  </div>
                </div>
              </div>

              <div className="text-right font-mono">
                <div className="text-xs font-bold text-cyan-300 flex items-center justify-end space-x-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{currentTime || 'IST'}</span>
                </div>
                <span className="text-[10px] text-slate-400">UTC+5:30 (IST)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Composition Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-purple-500/30 shadow-2xl relative">
            
            <div className="flex items-center space-x-2 text-xs font-mono text-purple-300 uppercase tracking-wider mb-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>TRANSMIT A MESSAGE</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              Start a Conversation
            </h3>

            {submittedStatus && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{submittedStatus}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. IoT Project Collaboration / Internship Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Message Content
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hello Divyansh, I would love to connect about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 via-brand-purple-neon to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message via Email</span>
              </button>

              <p className="text-[11px] font-mono text-center text-slate-400 pt-1">
                Zero spam • Opens directly in your configured mail application with prefilled fields
              </p>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
