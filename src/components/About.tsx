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
    <section id="about" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
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
              className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-4 block text-violet-400"
            >
              ABOUT ME
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-8 text-[#F2F2F2]"
            >
              Design Meets
              <br />
              <span className="text-gradient-violet">Logic.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-[1px] bg-violet-500" />
              <span className="font-subheading text-[11px] tracking-[0.15em] uppercase text-white/50">
                Available for Work
              </span>
              <motion.span 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-inter text-[16px] md:text-[17px] leading-[1.8] max-w-lg mb-6 text-white/70"
            >
              I'm a <span className="text-white font-medium">UI/UX Designer & Product Thinker</span> from {personal.location.city}, {personal.location.state}. Currently pursuing B.Tech in Computer Science at GEC Bikaner.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-inter text-[15px] md:text-[16px] leading-[1.7] max-w-lg mb-10 text-white/50"
            >
              I design digital experiences that don't just look good — they solve real problems. My background in both design and code means I think in <span className="text-violet-400">systems</span>, not just screens.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-8 md:gap-12"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-5xl md:text-6xl text-white">
                    <CountUp to={stat.to} />{stat.suffix}
                  </span>
                  <span className="font-subheading text-[10px] uppercase tracking-wider text-white/40 mt-1 whitespace-pre-line">
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
            <div className="relative w-full">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-transparent rounded-2xl blur-2xl"
              />
              
              <div className="relative group">
                <div className="overflow-hidden rounded-2xl">
                  <motion.img 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    src="/my_photo_about.png" 
                    alt={personal.fullName}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60" />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 p-5 glass rounded-xl"
                >
                  <p className="font-subheading text-[10px] uppercase tracking-widest text-violet-400 mb-1">Based in</p>
                  <p className="font-display text-2xl text-white">{personal.location.city}, {personal.location.state}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}