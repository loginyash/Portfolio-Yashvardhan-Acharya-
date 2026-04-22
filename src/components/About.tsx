import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { CinematicHeader } from './CinematicHeader';

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function About({ isLight }: { isLight?: boolean }) {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12 relative border-b border-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center relative z-10">
        
        {/* LEFT COLUMN - Bio Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="md:col-span-7 flex flex-col items-start"
        >
          <CinematicHeader 
            title="Design Meets Logic." 
            subtitle="WHO I AM" 
            isLight={isLight}
          />

          <div 
            style={{ 
              backgroundColor: isLight ? '#F5F5E9' : '#121212',
              borderColor: isLight ? '#001B4420' : '#ffffff10' 
            }}
            className="flex items-center gap-2 mb-8 border rounded-full px-4 py-2 backdrop-blur-sm transition-colors duration-500"
          >
             <span className="text-[14px]">📍</span>
             <span 
               style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
               className="font-subheading text-[11px] tracking-widest uppercase transition-colors"
             >
               Bikaner, Rajasthan
             </span>
          </div>
          
          <p 
            style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
            className="font-inter text-[16px] leading-[1.6] max-w-2xl mb-16 transition-colors"
          >
            I'm a UI/UX Designer and Product Thinker from Rajasthan, India — currently pursuing B.Tech in Computer Science at GEC Bikaner. I design digital experiences that don't just look good — they solve real problems. My background in both design and code means I think in systems, not just screens.
          </p>

          <div className="grid grid-cols-3 gap-8 md:gap-16 w-full">
            <div className="flex flex-col border-l border-white/10 pl-4 group">
              <span 
                style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
                className="font-display text-4xl mb-2 group-hover:text-crimson transition-colors duration-300"
              >
                <CountUp to={2} />+
              </span>
              <span 
                style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
                className="font-subheading text-[10px] uppercase tracking-wider transition-colors"
              >
                Years of Design<br/>Practice
              </span>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-4 group">
              <span 
                style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
                className="font-display text-4xl mb-2 group-hover:text-crimson transition-colors duration-300"
              >
                <CountUp to={3} />
              </span>
              <span 
                style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
                className="font-subheading text-[10px] uppercase tracking-wider transition-colors"
              >
                Real-World<br/>Projects
              </span>
            </div>
            <div className="flex flex-col border-l border-crimson pl-4 group">
              <span 
                style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
                className="font-display text-4xl mb-2 group-hover:text-cobalt transition-colors duration-300"
              >
                <CountUp to={1} />
              </span>
              <span 
                style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
                className="font-subheading text-[10px] uppercase tracking-wider transition-colors"
              >
                Google UX<br/>Certification
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Avatar Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-5 relative flex flex-col items-center group cursor-default perspective-1000"
        >
          {/* Subtle outer glow */}
          <div className="absolute inset-0 bg-crimson/5 blur-3xl opacity-50 mix-blend-screen pointer-events-none group-hover:bg-cobalt/10 transition-colors duration-700" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="relative w-full aspect-square max-w-[400px] mx-auto md:mx-0 group cursor-none"
          >
            <div className="absolute inset-0 bg-transparent" />

            {/* The Unconstrained Mirrored Pop-Out Wrapper */}
            <div className="absolute z-20 w-[180%] h-[180%] max-w-none -right-[20%] -bottom-[20%] scale-x-[-1] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={isLight ? 'spiderman-pop' : 'miles-pop'}
                  src={isLight ? "/spiderman_pop.png" : "/about_miles.png"} 
                  alt="Character Pop-out" 
                  initial={{ scale: 0.5, y: 50, x: 50, rotate: 10, opacity: 0, filter: "grayscale(100%) brightness(50%)" }}
                  whileInView={{ 
                    scale: isLight ? 1.25 : 0.85, 
                    y: isLight ? -16 : -20, 
                    x: isLight ? -24 : -12, 
                    rotate: -3, 
                    opacity: 1, 
                    filter: "grayscale(0%) brightness(100%)" 
                  }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
                  className="w-full h-full object-left-bottom object-contain origin-bottom-left drop-shadow-[25px_20px_40px_rgba(0,0,0,0.9)]"
                  loading="lazy"
                />
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Removed Location Pin from bottom */}
        </motion.div>
      </div>
    </section>
  );
}
