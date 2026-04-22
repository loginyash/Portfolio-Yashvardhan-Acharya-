import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

interface LampSwitchProps {
  onToggle: (isLight: boolean) => void;
  isLight: boolean;
}

export function LampSwitch({ onToggle, isLight }: LampSwitchProps) {
  const dragY = useMotionValue(0);
  const springY = useSpring(dragY, { stiffness: 450, damping: 28 });
  
  // High-fidelity sync for the vector path
  const yPos = useTransform(springY, (v) => 180 + v);

  const handleDragEnd = () => {
    if (dragY.get() > 50) {
      onToggle(!isLight);
    }
    animate(dragY, 0, { type: "spring", stiffness: 500, damping: 25 });
  };

  return (
    <div className="fixed top-0 right-12 md:right-20 z-[100] flex flex-col items-center group">
      <motion.svg 
        width="40" 
        height="450" 
        viewBox="0 0 40 450" 
        className="pointer-events-none"
      >
        {/* Unified Cord */}
        <motion.line 
          x1="20" 
          y1="0" 
          x2="20" 
          y2={yPos} 
          stroke={isLight ? '#001B4430' : '#ffffff20'} 
          strokeWidth="1.5"
          className="transition-colors duration-500"
        />
        
        {/* Handle Shell */}
        <motion.g style={{ y: yPos }}>
          <rect x="16" y="5" width="8" height="28" rx="4" fill="url(#brassGradient)" />
          <rect x="17.5" y="7" width="1.5" height="10" rx="0.75" fill="white" fillOpacity="0.2" />
          <rect x="18" y="2" width="4" height="6" rx="1" fill="#333" />
          
          <defs>
            <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CF995F" />
              <stop offset="50%" stopColor="#B87333" />
              <stop offset="100%" stopColor="#7B4A12" />
            </linearGradient>
          </defs>
        </motion.g>
      </motion.svg>

      {/* Robust Drag Control (Larger hit area) */}
      <motion.div 
        drag="y"
        dragConstraints={{ top: 0, bottom: 120 }}
        onDragEnd={handleDragEnd}
        style={{ y: dragY, top: 160 }}
        className="absolute w-20 h-32 -ml-10 left-1/2 cursor-grab active:cursor-grabbing pointer-events-auto"
      />
    </div>
  );
}
