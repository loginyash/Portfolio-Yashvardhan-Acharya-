import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understanding users through research, interviews, and empathy mapping.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Define",
    desc: "Synthesizing findings into problem statements, user flows, and architecture.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Design",
    desc: "From wireframes to pixel-perfect prototypes in Figma.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42-3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Handoff specs, dev collaboration, and iteration.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    )
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="process" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-1/2 h-[500px] bg-gradient-to-t from-violet-600/5 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <motion.span 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-4 block text-violet-400"
        >
          MY PROCESS
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-16 text-[#F2F2F2]"
        >
          The Framework.
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="hidden lg:block absolute top-8 left-0 right-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent origin-center"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                <div className="flex lg:flex-col items-start gap-6">
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-2xl bg-[#0F0F18] border border-white/[0.06] flex items-center justify-center text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-600/10 transition-all duration-500"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  <div className="flex-1 lg:flex-none lg:text-center">
                    <span className="font-display text-[12px] text-violet-500 mb-2 block">{step.num}</span>
                    <motion.h3 
                      whileHover={{ x: 4 }}
                      className="font-display text-2xl md:text-3xl tracking-wide mb-3 text-white"
                    >
                      {step.title}
                    </motion.h3>
                    <p className="font-inter text-[14px] leading-relaxed text-white/50 max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}