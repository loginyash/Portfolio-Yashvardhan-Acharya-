import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-crimson z-[1000] origin-left"
      style={{ scaleX }}
    />
  );
}

export function VerticalProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 w-[2px] h-[200px] bg-white/[0.05] rounded-full hidden lg:block z-50">
      <motion.div
        className="w-full h-full bg-crimson rounded-full origin-top"
        style={{ scaleY }}
      />
    </div>
  );
}