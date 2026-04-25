import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CinematicHeaderProps {
  title: string;
  subtitle: string;
  id?: string;
  hideLine?: boolean;
  staggered?: boolean;
}

export function CinematicHeader({ title, subtitle, id, hideLine, staggered }: CinematicHeaderProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const titleWords = title.split(' ');

  return (
    <div id={id} ref={containerRef} className="mb-16">
      <motion.span 
        initial={{ opacity: 0, x: -15 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-5 block text-white/50"
      >
        {subtitle}
      </motion.span>
      <div className="flex flex-wrap gap-x-4">
        {titleWords.map((word, i) => (
          <motion.h2 
            key={i}
            initial={{ opacity: 0, y: staggered ? -20 : 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: staggered ? (0.1 * i) : 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="font-display text-[52px] md:text-[72px] leading-none tracking-[-0.02em] uppercase text-[#F2F2F2]"
          >
            {word}
          </motion.h2>
        ))}
      </div>
      {!hideLine && (
        <div className="w-full h-[1px] bg-[rgba(255,255,255,0.06)] mt-5 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "0%" } : {}}
            transition={{ duration: 0.8, ease: "circOut", delay: staggered ? 0.3 : 0.15 }}
            className="w-full h-full bg-crimson"
          />
        </div>
      )}
    </div>
  );
}
