import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export function Hero({ isLight }: { isLight: boolean }) {
  const [glitchActive, setGlitchActive] = useState(true);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const textParallaxY = useTransform(scrollY, [0, 1000], [0, 150]);

  useEffect(() => {
    // Single lightning-fast cinematic burst on load
    const timer1 = setTimeout(() => setGlitchActive(true), 800);
    const timer2 = setTimeout(() => setGlitchActive(false), 950);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-transparent">
      {/* Rivals Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <AnimatePresence mode="wait">
          {isLight ? (
            <motion.div 
              key="hero-light"
              initial={{ opacity: 0, x: -100, scale: 0.95 }}
              animate={{ opacity: 0.35, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full md:w-1/2 h-full"
            >
              <img 
                src="/spiderman_light.png" 
                alt="Peter Parker" 
                className="w-full h-full object-contain object-left scale-110 origin-left"
              />
            </motion.div>
          ) : (
            <motion.div 
              key="hero-dark"
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 0.5, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 w-full md:w-1/2 h-full"
            >
              <img 
                src="/venom_dark.png" 
                alt="Venom" 
                className="w-full h-full object-contain object-right scale-110 origin-right drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Deep Background Gradient Shift */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: isLight ? 0.03 : 0.3
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-radial from-crimson/10 via-transparent to-transparent bg-[length:200%_200%] z-5" 
      />
      
      {/* Scanline Effect - Subtle in Light Mode */}
      <div className={`absolute inset-0 h-[2px] bg-text-primary/10 opacity-30 z-10 pointer-events-none animate-scanline ${isLight ? 'hidden' : ''}`} />

      {/* Bottom Crimson Panel Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-crimson shadow-[0_-2px_15px_rgba(192,0,29,0.3)] z-20" />

      <motion.div 
        style={{ y: textParallaxY }}
        className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center mt-20"
      >
        <motion.p 
          initial={{ opacity: 0, letterSpacing: '0.5em', y: 10 }}
          animate={{ opacity: 1, letterSpacing: '0.3em', y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
          className="font-subheading text-[14px] md:text-[16px] mb-6 md:mb-8 opacity-80"
        >
          HELLO, I'M
        </motion.p>
        
        <div className="flex flex-col items-center group cursor-default transition-transform duration-[0.5s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[64px] md:text-[140px] leading-[0.85] tracking-[-0.02em] select-none uppercase"
          >
            <span 
               style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
               className={`relative z-10 transition-colors duration-500 ${!isLight ? 'kinetic-glitch' : ''} ${glitchActive && !isLight ? "is-glitching" : ""}`}
            >
              YASHVARDHAN
            </span>
            <br />
            <span 
               className={`relative inline-block mt-2 md:mt-4 text-crimson ${!isLight ? 'kinetic-glitch' : ''} ${glitchActive && !isLight ? "is-glitching" : ""} ${isLight ? '' : 'drop-shadow-[0_0_15px_rgba(192,0,29,0.3)]'}`}
            >
              ACHARYA
              
              <div style={{ backgroundColor: 'rgb(var(--crimson) / 0.3)' }} className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[1px] md:h-[2px] overflow-hidden">
                <div style={{ backgroundColor: 'rgb(var(--crimson) / 1)' }} className="w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.4s] ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </div>
            </span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 font-subheading font-medium text-[16px] md:text-[18px] text-crimson mb-3"
        >
          UI/UX Designer <span style={{ color: isLight ? '#001B44' : '#F2F2F2' }} className="opacity-30 mx-2">·</span> Product Thinker
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-inter italic text-text-secondary text-[14px] md:text-[15px]"
        >
          Crafting interfaces that feel like superpowers.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-8 h-12 border border-text-primary/20 rounded-full flex justify-center pt-2 bg-background/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-text-primary rounded-full animate-subtle-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
