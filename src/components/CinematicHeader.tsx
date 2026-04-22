import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

interface CinematicHeaderProps {
  title: string;
  subtitle: string;
  id?: string;
  hideLine?: boolean;
  isLight?: boolean;
}

export function CinematicHeader({ title, subtitle, id, hideLine, isLight }: CinematicHeaderProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div id={id} ref={containerRef} className="mb-20">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
        className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-6 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
        className="font-display text-[64px] md:text-[80px] leading-none tracking-[-0.02em] uppercase"
      >
        {title}
      </motion.h2>
      {!hideLine && (
        <div className="w-full h-[1px] bg-text-primary/10 mt-6 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "0%" } : {}}
            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            className="w-full h-full bg-crimson"
          />
        </div>
      )}
    </div>
  );
}
