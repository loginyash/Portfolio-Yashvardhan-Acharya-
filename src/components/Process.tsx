import { motion, useScroll, useTransform } from 'framer-motion';
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

// Sequence animation definitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export function Process({ isLight }: { isLight?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <CinematicHeader 
          title="The Architecture." 
          subtitle="MY PROCESS" 
          hideLine={true}
          isLight={isLight}
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-20"
        >
          {/* Connecting Line (Desktop Scroll Progress) */}
          <div 
            style={{ backgroundColor: isLight ? '#001B4415' : '#ffffff10' }}
            className="hidden md:block absolute top-[28px] left-[20px] right-[20px] h-[1px] z-0"
          >
             <motion.div 
               style={{ scaleX: scaleProgress }}
               className="h-full bg-crimson origin-left shadow-[0_0_15px_#C0001D]"
             />
          </div>
          
          {/* Connecting Line (Mobile Scroll Progress) */}
          <div 
            style={{ backgroundColor: isLight ? '#001B4415' : '#ffffff10' }}
            className="md:hidden absolute top-[20px] left-[28px] bottom-[20px] w-[1px] z-0"
          >
             <motion.div 
               style={{ scaleY: scaleProgress }}
               className="w-full bg-crimson origin-top shadow-[0_0_15px_#C0001D]"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover="hover"
                className="flex flex-row md:flex-col items-start gap-8 md:gap-10 group"
              >
                {/* Node Dot */}
                <div className="relative shrink-0 w-14 md:w-full flex justify-center md:justify-start">
                  <motion.div 
                    whileHover={{ scale: 1.5, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{ backgroundColor: isLight ? '#FFFFF0' : '#0A0A0A' }}
                    className="w-[14px] h-[14px] rounded-full border-2 border-crimson relative z-10 group-hover:bg-crimson group-hover:shadow-[0_0_15px_#C0001D] transition-all duration-300" 
                  >
                    {/* Inner Pulse that only active on hover */}
                    <motion.div 
                      variants={{
                        hover: { 
                          scale: [1, 2, 1], 
                          opacity: [0.5, 0, 0.5],
                          transition: { duration: 1.5, repeat: Infinity }
                        },
                        initial: { scale: 1, opacity: 0 }
                      }}
                      initial="initial"
                      className="absolute inset-0 rounded-full bg-crimson -z-10"
                    />
                  </motion.div>
                  
                  {/* Big Background Number - Auto-pop on scroll + hover pop */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: -10,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    variants={{
                      hover: { 
                        scale: 1.15,
                        color: isLight ? '#001B44' : '#C0001D',
                      }
                    }}
                    style={{ 
                      color: isLight ? '#001B4415' : '#C0001D20'
                    }}
                    className="absolute top-0 md:-top-16 left-6 md:left-2 font-display text-[60px] md:text-[100px] leading-none -z-10 pointer-events-none transition-colors duration-500"
                  >
                    {step.num}
                  </motion.div>
                </div>

                <div className="flex flex-col">
                  <h3 
                    style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
                    className="font-display text-[28px] tracking-wider mb-4 group-hover:text-crimson group-hover:translate-x-1 transition-all"
                  >
                    {step.title}
                  </h3>
                  <p 
                    style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
                    className="font-inter text-[14px] leading-relaxed pr-4 transition-colors"
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
