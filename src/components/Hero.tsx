import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const { scrollY } = useScroll();


  const textParallaxY = useTransform(scrollY, [0, 800], [0, 80]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center overflow-hidden">
      {/* Subtle radial gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-crimson/40 z-20" />

      <motion.div 
        style={{ y: textParallaxY, opacity: textOpacity }}
        className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center mt-20"
      >
        <motion.p 
          initial={{ opacity: 0, letterSpacing: '0.5em', y: 10 }}
          animate={{ opacity: 0.5, letterSpacing: '0.3em', y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-subheading text-[13px] md:text-[15px] text-white/70 mb-6 md:mb-8"
        >
          HELLO, I'M
        </motion.p>
        
        <div className="flex flex-col items-center cursor-default">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[56px] md:text-[120px] lg:text-[140px] leading-[0.85] tracking-[-0.02em] select-none uppercase"
          >
            <span className="relative z-10 block group/name">
              {"YASHVARDHAN".split('').map((letter, i) => (
                <span 
                  key={i}
                  className="inline-block text-[#F2F2F2] transition-all duration-300 hover:text-crimson hover:-translate-y-[6px] md:hover:-translate-y-[12px]"
                  style={{ transitionDelay: `${i * 15}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="relative block mt-2 md:mt-4 group/surname">
              {"ACHARYA".split('').map((letter, i) => (
                <span 
                  key={i}
                  className="inline-block text-crimson transition-all duration-300 hover:text-white hover:-translate-y-[6px] md:hover:-translate-y-[12px]"
                  style={{ transitionDelay: `${i * 15}ms` }}
                >
                  {letter}
                </span>
              ))}
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[1px] md:h-[2px] bg-crimson/30 origin-left"
              />
            </span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 md:mt-12 font-subheading font-medium text-[15px] md:text-[17px]"
        >
          <span className="text-crimson">UI/UX Designer</span>
          <span className="text-[#F2F2F2] opacity-20 mx-3">·</span>
          <span className="text-white/70">Product Thinker</span>
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-inter italic text-[14px] md:text-[15px] text-[#A3A3A3] mt-3"
        >
          Crafting interfaces that feel like superpowers.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-[rgba(255,255,255,0.12)] rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ opacity: [0.3, 0.8, 0.3], height: [6, 12, 6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1.5px] bg-crimson rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
