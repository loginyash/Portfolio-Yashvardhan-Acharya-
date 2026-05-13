import { motion, useScroll, useTransform } from 'framer-motion';

const floatingElements = [
  { size: 4, x: '10%', y: '20%', delay: 0, duration: 8 },
  { size: 6, x: '85%', y: '15%', delay: 1, duration: 10 },
  { size: 3, x: '75%', y: '70%', delay: 2, duration: 9 },
  { size: 5, x: '15%', y: '75%', delay: 1.5, duration: 11 },
  { size: 2, x: '50%', y: '10%', delay: 0.5, duration: 7 },
];

export function Hero() {
  const { scrollY } = useScroll();

  const textParallaxY = useTransform(scrollY, [0, 800], [0, 80]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
        
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(192, 0, 29, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(192, 0, 29, 0.1) 0%, transparent 40%), radial-gradient(circle at 40% 80%, rgba(192, 0, 29, 0.08) 0%, transparent 45%)',
            backgroundSize: '200% 200%',
          }}
        />

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-[400px] h-[400px] border border-white/[0.02] rounded-full"
        />
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] border border-crimson/[0.03] rounded-full"
        />
      </div>

      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: el.duration, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: el.delay
          }}
          className="absolute rounded-full border border-crimson/30 pointer-events-none"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-1/4 left-[5%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-crimson/20 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/3 right-[5%] w-[1px] h-[150px] bg-gradient-to-b from-transparent via-crimson/20 to-transparent"
      />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crimson/60 to-transparent"
      />

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
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-inter italic text-[14px] md:text-[15px] text-[#B8B8B8] mt-3"
        >
          Crafting interfaces that feel like superpowers.
        </motion.p>
      </motion.div>

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
