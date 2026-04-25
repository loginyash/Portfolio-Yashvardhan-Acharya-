import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { CinematicHeader } from './CinematicHeader';

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand users through research, interviews, and empathy mapping. I ask the annoying questions first."
  },
  {
    num: "02",
    title: "Define",
    desc: "Synthesize findings into clear problem statements, user flows, and information architecture."
  },
  {
    num: "03",
    title: "Design",
    desc: "From low-fidelity wireframes to pixel-perfect high-fidelity prototypes in Figma. Systems thinking at every layer."
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Handoff-ready specs, dev collaboration, and iteration. Design doesn't end at delivery."
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="process" ref={containerRef} className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <CinematicHeader 
          title="The Architecture." 
          subtitle="MY PROCESS" 
          hideLine={true}
          staggered
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-16"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[7px] left-[7px] right-[7px] h-[1px] bg-[rgba(255,255,255,0.06)] z-0 overflow-hidden">
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeInOut" }}
               className="h-full bg-crimson/40 origin-left"
             />
          </div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-[7px] left-[7px] bottom-[7px] w-[1px] bg-[rgba(255,255,255,0.06)] z-0 overflow-hidden">
             <motion.div 
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeInOut" }}
               className="w-full bg-crimson/40 origin-top"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {processSteps.map((step, i) => (
              <div 
                key={i}
                className="flex flex-row md:flex-col items-start gap-6 md:gap-8 group"
              >
                {/* Node Dot */}
                <div className="relative shrink-0 w-10 md:w-full flex justify-center md:justify-start">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i, duration: 0.4 }}
                    className="w-[14px] h-[14px] rounded-full border-2 border-crimson bg-[#0A0A0A] relative z-10 group-hover:bg-crimson transition-colors duration-300" 
                  />
                  
                  {/* Background Number */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 * i, duration: 0.6 }}
                    className="absolute top-0 md:-top-12 left-6 md:left-2 font-display text-[56px] md:text-[80px] leading-none -z-10 pointer-events-none text-white/[0.04] group-hover:text-crimson/20 transition-colors duration-300 select-none"
                  >
                    {step.num}
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i + 0.15, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <h3 className="font-display text-[24px] md:text-[28px] tracking-wider mb-3 text-[#F2F2F2] group-hover:text-crimson transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-inter text-[14px] leading-relaxed pr-4 text-[#A3A3A3]">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
