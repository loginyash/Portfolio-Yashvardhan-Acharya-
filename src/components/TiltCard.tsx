import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useState, useRef } from 'react';

interface TiltCardProps {
  children: (props: { rotateX: MotionValue<number>; rotateY: MotionValue<number> }) => React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateXStr = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateYStr = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const rotateX = mouseYSpring;
  const rotateY = mouseXSpring;
  
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useSpring(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    
    glowX.set(mouseX);
    glowY.set(mouseY);
    glowOpacity.set(1);
    setHovering(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glowOpacity.set(0);
    setHovering(false);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        scale: hovering ? 1.02 : 1,
        y: hovering ? -4 : 0
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateY: rotateYStr,
        rotateX: rotateXStr,
        transformStyle: "preserve-3d",
        perspective: "800px"
      }}
      className={`relative ${className}`}
    >
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        {children({ rotateX, rotateY })}
      </div>
      
      {/* Subtle glow */}
      <motion.div 
        style={{
          left: glowX,
          top: glowY,
          opacity: glowOpacity,
          background: "radial-gradient(circle at center, rgba(192,0,29,0.12) 0%, transparent 70%)",
          width: '250px',
          height: '250px',
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute pointer-events-none z-30 blur-2xl rounded-full"
      />
    </motion.div>
  );
}
