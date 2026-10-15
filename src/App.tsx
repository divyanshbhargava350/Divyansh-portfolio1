import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useSoundFX } from './hooks/useSoundFX';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { BackToTop } from './components/BackToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConnectedSystems } from './components/ConnectedSystems';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Hackathons } from './components/Hackathons';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const AppContent: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { soundEnabled, toggleSound, playClick, playPulse, playSuccess } = useSoundFX();

  return (
    <div className="relative min-h-screen bg-theme-bg text-theme-text transition-colors duration-300">
      {/* Top Reading Progress Indicator */}
      <ScrollProgressBar />

      {/* Futuristic Desktop Cursor */}
      <CustomCursor />

      {/* Floating Scroll to Top */}
      <BackToTop />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        playClick={playClick}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          playClick={playClick}
          playPulse={playPulse}
        />

        {/* Modern IoT Sensor Gateway Experience: CONNECTED SYSTEMS */}
        <ConnectedSystems
          playClick={playClick}
          playPulse={playPulse}
        />

        {/* About Me Section */}
        <About playClick={playClick} />

        {/* Technical Interests & Skills */}
        <Skills playClick={playClick} />

        {/* Things I'm Building: Projects Showcase */}
        <Projects playClick={playClick} playPulse={playPulse} />

        {/* Beyond Code: Experience & Events */}
        <Experience playClick={playClick} />

        {/* Hackathons & Innovation */}
        <Hackathons playClick={playClick} />

        {/* Education Timeline */}
        <Education playClick={playClick} />

        {/* Contact Section */}
        <Contact playClick={playClick} playSuccess={playSuccess} />
      </main>

      {/* Footer */}
      <Footer playClick={playClick} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        playClick={playClick}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
