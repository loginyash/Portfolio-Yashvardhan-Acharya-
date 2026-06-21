import { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from "./config/personal";
import { usePrefersReducedMotion } from "./hooks/useAnimations";

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";

const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Work = lazy(() => import("./components/Work").then(m => ({ default: m.Work })));
const Skills = lazy(() => import("./components/Skills").then(m => ({ default: m.Skills })));
const Process = lazy(() => import("./components/Process").then(m => ({ default: m.Process })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const CaseStudyDetail = lazy(() => import("./components/CaseStudyDetail").then(m => ({ default: m.CaseStudyDetail })));

function LoadingSection() {
  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-ink/20 border-t-ink rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="min-h-screen bg-background text-ink">
        <CustomCursor />
        <Navigation />
        <main id="main-content">
          <Hero />
          <About />
          <Work onSelectProject={setActiveCaseStudy} />
          <Skills />
          <Process />
          <Contact />
        </main>
        <Suspense fallback={<div />}>
          <CaseStudyDetail slug={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
        </Suspense>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <svg 
                  className="w-16 h-16 text-ink" 
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
                  className="absolute inset-0 bg-ink blur-xl rounded-full"
                />
              </motion.div>

              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 100, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                className="h-[2px] bg-ink mt-8 rounded-full overflow-hidden"
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/3 bg-ink/80 blur-sm"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="font-subheading text-[10px] uppercase tracking-[0.3em] text-ink/40 mt-6"
              >
                {personal.fullName}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-ink focus:text-white focus:text-sm focus:rounded"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background text-ink">
        
        <ScrollProgress />

        <CustomCursor />
        <Navigation />
      
        <main id="main-content" className="relative z-10">
          <Hero />
          <Suspense fallback={<LoadingSection />}>
            <About />
            <Work onSelectProject={setActiveCaseStudy} />
            <Skills />
            <Process />
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>

        <AnimatePresence>
          {activeCaseStudy && (
            <Suspense fallback={<div />}>
              <CaseStudyDetail slug={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
            </Suspense>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
