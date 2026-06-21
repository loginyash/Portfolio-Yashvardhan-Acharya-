import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(max-width: 768px)").matches || 
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;
    let hovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      hovering = !!(
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]')
      );
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      dot.style.opacity = hovering ? '0' : '1';

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${hovering ? 1.8 : 1})`;
      ring.style.borderColor = hovering ? '#8FAF9B' : 'rgba(31, 41, 51, 0.3)';

      glow.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Ambient Glow */}
      <div 
        ref={glowRef} 
        className="fixed top-0 left-0 w-[450px] h-[450px] -ml-[225px] -mt-[225px] rounded-full bg-[#8FAF9B]/8 blur-[100px] pointer-events-none z-[0] hidden md:block will-change-transform"
      />
      {/* Follower ring */}
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border-[1.5px] border-[#1F2933]/30 pointer-events-none z-[9998] hidden md:block will-change-transform transition-[border-color] duration-200"
      />
      {/* Dot */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-[6px] h-[6px] -ml-[3px] -mt-[3px] rounded-full bg-[#1F2933] pointer-events-none z-[9999] hidden md:block will-change-transform" 
      />
    </>
  );
}
