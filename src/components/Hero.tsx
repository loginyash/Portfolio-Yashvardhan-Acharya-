import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const { scrollY } = useScroll();
  const textParallaxY = useTransform(scrollY, [0, 800], [0, 80]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(143,175,155,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(143,175,155,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"
      />

      <motion.div 
        style={{ y: textParallaxY, opacity: textOpacity }}
        className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center mt-20"
      >
        <motion.p 
          initial={{ opacity: 0, letterSpacing: '0.5em', y: 10 }}
          animate={{ opacity: 0.6, letterSpacing: '0.3em', y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-subheading text-[13px] md:text-[15px] text-ink/60 mb-6 md:mb-8"
        >
          HELLO, I'M
        </motion.p>
        
        <div className="flex flex-col items-center cursor-default">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(2.2rem,11.5vw,4.5rem)] md:text-[110px] lg:text-[140px] leading-[0.85] tracking-[-0.03em] select-none uppercase"
          >
            <span className="relative z-10 block whitespace-nowrap">
              {"YASHVARDHAN".split('').map((letter, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ color: '#8FAF9B', y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block text-ink"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="relative block mt-2 md:mt-4 whitespace-nowrap">
              <span className="text-ink">ACHARYA</span>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-3 md:-bottom-5 left-0 w-full h-[2px] md:h-[3px] bg-ink rounded-full"
              />
            </span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 md:mt-14 font-subheading font-medium text-[16px] md:text-[18px]"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage/10 border border-sage/30 text-ink text-[13px] md:text-[15px] font-medium mr-3">UI/UX Designer</span>
          <span className="text-ink/40 mx-2">·</span>
          <span className="text-ink/60">Product Thinker</span>
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-inter italic text-[15px] md:text-[16px] text-ink/40 mt-4"
        >
          Crafting digital experiences that feel like superpowers.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-black/20 rounded-full flex justify-center pt-3 cursor-pointer"
        >
          <motion.div 
            animate={{ opacity: [0.3, 0.8, 0.3], height: [8, 14, 8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] bg-ink/60 rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
