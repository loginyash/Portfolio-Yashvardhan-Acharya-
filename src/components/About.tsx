import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { CinematicHeader } from './CinematicHeader';
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
  const stats = [
    { to: personal.stats.yearsExperience, label: 'Years of Design\nPractice', suffix: '+', accent: 'group-hover:text-crimson', border: 'hover:border-crimson' },
    { to: personal.stats.projects, label: 'Real-World\nProjects', suffix: '', accent: 'group-hover:text-crimson', border: 'hover:border-crimson' },
    { to: personal.stats.certifications, label: 'Google UX\nCertification', suffix: '', accent: 'group-hover:text-crimson', border: 'hover:border-crimson' }
  ];

  return (
    <section id="about" className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center relative z-10">
        
        <motion.div className="md:col-span-7 flex flex-col items-start">
          <CinematicHeader 
            title="Design Meets Logic." 
            subtitle="WHO I AM" 
            staggered
          />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-8 border border-[rgba(255,255,255,0.06)] rounded-full px-4 py-2 bg-[rgba(18,18,18,0.6)] backdrop-blur-sm"
          >
             <span className="text-[13px]">📍</span>
             <span className="font-subheading text-[11px] tracking-widest uppercase text-[#B8B8B8]">
               {personal.location.city}, {personal.location.state}
             </span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-inter text-[15px] md:text-[16px] leading-[1.7] max-w-2xl mb-16 text-[#B8B8B8]"
          >
            I'm a UI/UX Designer and Product Thinker from {personal.location.state}, {personal.location.country} — currently pursuing B.Tech in Computer Science at GEC Bikaner. I design digital experiences that don't just look good — they solve real problems. My background in both design and code means I think in systems, not just screens.
          </motion.p>

          <div className="grid grid-cols-3 gap-8 md:gap-16 w-full">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.12 }}
                className={`flex flex-col border-l border-[rgba(255,255,255,0.06)] pl-4 group ${stat.border} transition-colors duration-300`}
              >
                <span className={`font-display text-4xl text-[#F2F2F2] mb-2 ${stat.accent} transition-colors duration-300`}>
                  <CountUp to={stat.to} />{stat.suffix}
                </span>
                <span className="font-subheading text-[10px] uppercase tracking-wider text-[#B8B8B8] whitespace-pre-line">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 relative flex flex-col items-center"
        >
          <div className="relative w-full aspect-square max-w-[460px] mx-auto group">
            <div className="absolute inset-0 overflow-hidden hex-frame">
              <img 
                src="/my_photo_about.png" 
                alt={personal.fullName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-0 hex-frame border border-[rgba(255,255,255,0.06)] group-hover:border-white/20 transition-colors duration-500" />
            <div className="absolute inset-0 hex-frame bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
