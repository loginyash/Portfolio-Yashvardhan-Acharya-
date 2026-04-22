import { useEffect, useRef } from 'react';

export function CustomCursor({ isLight }: { isLight?: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable completely on touch devices and < 768px
    if (
      window.matchMedia("(max-width: 768px)").matches || 
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const dot = dotRef.current;
    const follower = followerRef.current;

    if (!dot || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Follower Position
    let followerX = mouseX;
    let followerY = mouseY;
    
    let isHovering = false;
    let isClicking = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const target = e.target as HTMLElement;
      // Identify interactive elements
      isHovering = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
    };

    const onMouseDown = () => { isClicking = true; };
    const onMouseUp = () => { isClicking = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const render = () => {
      // Smooth follow for secondary cursor
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      // Render Primary Cursor (snaps instantly)
      dot.style.translate = `${mouseX}px ${mouseY}px`;
      dot.style.scale = isClicking ? '0.8' : '1';
      dot.style.opacity = isHovering ? '0.4' : '1';

      // Render Follower Cursor
      follower.style.translate = `${followerX}px ${followerY}px`;
      follower.style.scale = isHovering ? '1.8' : '1';
      follower.style.opacity = isHovering ? '1' : '0.5';

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-crimson/60 opacity-50 bg-transparent pointer-events-none z-[9998] transition-[scale,opacity] duration-120 ease-out hidden md:flex items-center justify-center overflow-hidden" 
        style={{ willChange: 'translate' }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 flex items-center justify-center scale-75">
           <svg viewBox="0 0 24 24" className="w-full h-full text-crimson" fill="none" stroke="currentColor" strokeWidth="0.5">
             <path d="M12 2L2 12l10 10 10-10L12 2z" />
             <path d="M12 2v20M2 12h20" />
           </svg>
        </div>
      </div>
      <div 
        ref={dotRef} 
        style={{ 
          willChange: 'translate',
          backgroundColor: isLight ? '#001B44' : '#F2F2F2'
        }}
        className="fixed top-0 left-0 w-[6px] h-[6px] -ml-[3px] -mt-[3px] rounded-full pointer-events-none z-[9999] transition-[scale,opacity,background-color] duration-300 ease-out hidden md:block" 
      />
    </>
  );
}
