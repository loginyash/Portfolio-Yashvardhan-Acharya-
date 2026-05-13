import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { personal } from "./config/personal";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloading = new Promise((resolve) => {
      const img = new Image();
      img.src = '/my_photo_about.png';
      img.onload = resolve;
      img.onerror = resolve;
    });

    preloading.then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <svg 
                  className="w-16 h-16 text-crimson" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="miter"
                >
                  <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" stroke="currentColor" />
                  <polyline points="7.5 7.5 12 11 16.5 7.5" />
                  <line x1="12" y1="11" x2="12" y2="13.5" />
                  <polyline points="7.5 17.5 12 13.5 16.5 17.5" />
                  <line x1="9.4" y1="16" x2="14.6" y2="16" />
                </svg>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-crimson blur-xl rounded-full"
                />
              </motion.div>

              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 100, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                className="h-[2px] bg-crimson mt-8 rounded-full overflow-hidden"
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/3 bg-white/80 blur-sm"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="font-subheading text-[10px] uppercase tracking-[0.3em] text-white/40 mt-6"
              >
                {personal.fullName}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-crimson focus:text-white focus:text-sm focus:rounded"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
        
        <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay opacity-[0.06]">
          <div className="absolute inset-0 comic-grain" />
        </div>

        <CustomCursor />
        <Navigation />
      
        <main id="main-content" className="relative z-10">
          <Hero />
          <About />
          <Work />
          <Skills />
          <Process />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
