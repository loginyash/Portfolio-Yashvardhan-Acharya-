import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LampSwitch } from './components/LampSwitch';

function App() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light';
    }
    return false;
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  useEffect(() => {
    // Advanced Asset Preloading
    const assets = ['/spiderman_light.png', '/venom_dark.png', '/about_miles.png'];

    const minimumDelay = new Promise(resolve => setTimeout(resolve, 2200));
    
    const preloading = Promise.all(assets.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Continue even if one fails
      });
    }));

    Promise.all([minimumDelay, preloading]).then(() => {
      setIsLoading(false);
    });
  }, []);
  
  // Create deep parallax weights for scroll
  const bgY1 = useTransform(scrollY, [0, 5000], [0, 800]);
  const bgY2 = useTransform(scrollY, [0, 5000], [0, 400]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-32 h-32 flex items-center justify-center"
            >
              <div className="absolute inset-0 border-2 border-crimson rounded-full animate-ping opacity-10" />
              <div className="absolute inset-4 border border-crimson/30 rounded-full animate-pulse" />
              
              {/* Monogram SVG Logo */}
              <svg 
                className="w-16 h-16 text-crimson drop-shadow-[0_0_15px_rgba(192,0,29,0.4)]" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="miter"
              >
                <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" stroke="currentColor" />
                <polyline points="7.5 7.5 12 11 16.5 7.5" />
                <line x1="12" y1="11" x2="12" y2="13.5" />
                <polyline points="7.5 17.5 12 13.5 16.5 17.5" />
                <line x1="9.4" y1="16" x2="14.6" y2="16" />
              </svg>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-crimson mt-8"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen transition-colors duration-700 ${isLight ? 'light bg-[#FFFFF0] text-[#001B44]' : 'bg-[#0A0A0A] text-[#F2F2F2]'}`}>
        <LampSwitch isLight={isLight} onToggle={(val) => {
          setIsLight(val);
        }} />
        <CustomCursor isLight={isLight} />
        <Navigation isLight={isLight} />

      {/* Global Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Distant Halftone Float (Subtle texture for depth) */}
        <motion.div 
          style={{ y: bgY1 }}
          className="absolute inset-x-0 -top-[20%] h-[140%] halftone-parallax opacity-[0.02] grayscale"
        />

        {/* Layer 4: Floating 3D Debris */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ 
              y: i % 2 === 0 ? bgY1 : bgY2,
              borderColor: 'rgb(var(--crimson) / 0.1)'
            }}
            className="absolute w-12 h-12 border rounded-full flex items-center justify-center -z-10"
          >
            <div 
              style={{ backgroundColor: 'rgb(var(--crimson) / 0.05)' }} 
              className="w-[1px] h-full rotate-45" 
            />
          </motion.div>
        ))}
      </div>
      
      <main className="relative z-10">
        <Hero isLight={isLight} />
        <About isLight={isLight} />
        <Work isLight={isLight} />
        <Skills isLight={isLight} />
        <Process isLight={isLight} />
        <Contact isLight={isLight} />
      </main>

      <Footer isLight={isLight} />
    </div>
    </>
  );
}

export default App;
