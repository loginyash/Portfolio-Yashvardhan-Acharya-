import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { personal } from '../config/personal';

function CountUp({ to, duration = 1.5 }: { to: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    { to: personal.stats.yearsExperience, label: 'Years\nExperience', suffix: '+' },
    { to: personal.stats.projects, label: 'Projects\nDelivered', suffix: '' }
  ];

  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden bg-[#F3F3F0]">
      <div ref={containerRef} className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start lg:items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <motion.span 
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-4 block text-ink"
            >
              ABOUT ME
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-8 text-ink"
            >
              Design Meets
              <br />
              <span className="text-ink">Logic.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-[1px] bg-ink" />
              <span className="font-subheading text-[11px] tracking-[0.15em] uppercase text-ink/60">
                Available for Work
              </span>
              <motion.span 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-500"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-inter text-[16px] md:text-[17px] leading-[1.8] max-w-lg mb-6 text-ink/70"
            >
              I'm a <span className="text-ink font-medium">UI/UX Designer & Product Thinker</span> from {personal.location.city}, {personal.location.state}. Currently pursuing B.Tech in Computer Science at GEC Bikaner.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-inter text-[15px] md:text-[16px] leading-[1.7] max-w-lg mb-10 text-ink/50"
            >
              I design digital experiences that don't just look good — they solve real problems. My background in both design and code means I think in <span className="text-ink/80 font-medium">systems</span>, not just screens.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-8 md:gap-12"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-5xl md:text-6xl text-ink">
                    <CountUp to={stat.to} />{stat.suffix}
                  </span>
                  <span className="font-subheading text-[10px] uppercase tracking-wider text-ink/40 mt-1 whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-md">
              <div className="relative p-8 border border-black/[0.06] rounded-none bg-white/60 light-glass">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-lavender/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-subheading text-[10px] uppercase tracking-widest text-ink/50">Based in</p>
                    <p className="font-display text-lg text-ink">{personal.location.city}, {personal.location.state}</p>
                  </div>
                </div>
                
                <div className="h-px bg-black/10 mb-6" />
                
                <p className="font-inter text-[15px] leading-relaxed text-ink/60">
                  Currently pursuing B.Tech in Computer Science at GEC BKN. Open to internships and full-time opportunities in UI/UX design.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
