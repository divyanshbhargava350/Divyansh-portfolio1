import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Volume2, VolumeX, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  soundEnabled,
  toggleSound,
  playClick,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Systems', href: '#connected-systems' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'connected-systems', 'skills', 'projects', 'experience', 'hackathons', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg shadow-purple-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/40 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
              <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                DB
              </span>
              {/* Pulsing IoT node LED */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-semibold text-sm tracking-wide text-slate-100 group-hover:text-purple-300 transition-colors">
                Divyansh Bhargava
              </span>
              <span className="font-mono text-[10px] text-purple-400 tracking-wider">
                IoT & SOFTWARE DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-purple-950/20 border border-purple-500/20 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-purple-600/60 shadow-[0_0_12px_rgba(168,85,247,0.4)] border border-purple-400/40'
                      : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Controls & Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                toggleSound();
                playClick();
              }}
              title={soundEnabled ? 'Mute sound effects' : 'Enable futuristic sound effects'}
              aria-label="Toggle audio effects"
              className="p-2 rounded-lg bg-purple-950/30 border border-purple-500/30 text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-all text-xs flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-purple-400"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => {
                toggleTheme();
                playClick();
              }}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-lg bg-purple-950/30 border border-purple-500/30 text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-all text-xs flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-purple-400"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                playClick();
                onOpenResume();
              }}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg font-medium text-xs text-purple-200 bg-purple-950/60 border border-purple-500/40 hover:bg-purple-600 hover:text-white hover:border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.25)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 text-slate-200 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel-elevated border-b border-purple-500/30 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/40 text-purple-200 border border-purple-500/40'
                      : 'text-slate-300 hover:bg-purple-950/40 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              Status: <span className="text-cyan-400">Node Active</span>
            </span>
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 text-white shadow-md shadow-purple-900/50"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
