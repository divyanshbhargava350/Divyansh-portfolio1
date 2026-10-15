import React from 'react';
import { Github, Linkedin, Mail, Heart, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  playClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ playClick }) => {
  return (
    <footer className="relative py-12 border-t border-purple-500/20 bg-[#06060a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Motto */}
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="font-mono font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                DB.
              </span>
              <span className="text-slate-600 dark:text-slate-500">•</span>
              <span className="text-xs font-semibold text-slate-300">
                {PERSONAL_INFO.displayName}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Designed with curiosity. Built with purpose.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/40 transition-all hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-cyan-400 hover:border-purple-400 hover:bg-purple-900/40 transition-all hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => playClick()}
              aria-label="Direct Email"
              className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:bg-purple-900/40 transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Location */}
          <div className="text-center sm:text-right text-xs font-mono text-slate-400 space-y-0.5">
            <div>©️ 2026 {PERSONAL_INFO.displayName}</div>
            <div className="text-[11px] text-purple-400/80">
              Gwalior, Madhya Pradesh, India
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
