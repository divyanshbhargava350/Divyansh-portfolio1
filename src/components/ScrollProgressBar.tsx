import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] z-50 bg-black/20 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-brand-purple-neon to-cyan-400 transition-all duration-75 shadow-[0_0_10px_rgba(168,85,247,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
