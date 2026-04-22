import { motion } from 'framer-motion';
import { CinematicHeader } from './CinematicHeader';
import { TiltCard } from './TiltCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  tag: string;
  description: string;
  link: string;
  image?: string;
  useIframe?: boolean;
}

const projects: Project[] = [
  {
    title: "CodeSage — AI Learning Platform",
    tag: "UX Design · AI · EdTech",
    description: "End-to-end learning experience for AI-driven coding practice — built around cognitive load reduction, gamification, and intuitive user flows.",
    link: "https://code-sage-minor-project.vercel.app/",
    image: "/codesage_thumb.png"
  },
  {
    title: "ProjectIn — Case Study",
    tag: "Workflow Management · Product Design",
    description: "An end-to-end workflow management tool engineered to reduce friction in team coordination and streamline systemic operations.",
    link: "https://www.figma.com/proto/v483jvSG6nUIL7g363TlhR/ProjectIn-Case-Study?node-id=212-6767&viewport=6120%2C3436%2C0.55&t=7Q87EkFColC6vPD5-1&scaling=contain&content-scaling=responsive&starting-point-node-id=2861%3A1905&page-id=0%3A1",
    image: "/projectin_thumb.png"
  },
  {
    title: "Sampark App — Hyperlocal Social Network",
    tag: "Mobile Design · Accessibility · Figma",
    description: "A LinkedIn-inspired mobile interface re-engineered for rural Indian users — prioritizing accessibility, low-literacy affordances, and local governance tools.",
    link: "https://www.figma.com/proto/PnPkdDjvfXCbEvM7RN9yW5/Sampark?node-id=41-327&viewport=571%2C74%2C0.18&t=iPLmdriyEeVTrcLd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=41%3A327&page-id=0%3A1",
    image: "/sampark_thumb.png"
  }
];

export function Work({ isLight }: { isLight?: boolean }) {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <CinematicHeader 
          title="Things I've Built." 
          subtitle="SELECTED WORK" 
          isLight={isLight}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <motion.a
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -4,
                    boxShadow: isLight 
                      ? "0 12px 24px rgba(0,27,68,0.1), 0 4px 8px rgba(0,0,0,0.05)" 
                      : "0 12px 24px rgba(0,0,0,0.6), 0 4px 8px rgba(192,0,29,0.15)" 
                  }}
                  transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
                  style={{ 
                    backgroundColor: isLight ? '#FDFDF7' : '#0F0F0F',
                    borderColor: isLight ? '#001B4415' : '#ffffff10'
                  }}
                  className="group relative flex flex-col h-full border transition-all duration-400 overflow-hidden cursor-none z-10"
                >
                  {/* Thumbnail Container */}
                  <div 
                    style={{ borderColor: isLight ? '#001B4410' : '#ffffff10' }}
                    className="w-full aspect-[4/3] overflow-hidden relative border-b group-hover:border-crimson transition-colors duration-300 flex items-center justify-center p-8 bg-black/[0.02]"
                  >
                  <div className="absolute inset-0 bg-cobalt/20 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {project.useIframe ? (
                    <div className="absolute inset-0 z-10 opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none filter grayscale group-hover:grayscale-0">
                      <div className="w-[150%] h-[150%] origin-top-left scale-[0.666]">
                        <iframe src={project.link} className="w-full h-full border-none pointer-events-none" scrolling="no" tabIndex={-1} />
                      </div>
                    </div>
                  ) : project.image ? (
                    <div className="absolute inset-0 z-10 opacity-50 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-110">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <h3 
                      style={{ color: isLight ? '#001B4420' : '#F2F2F210' }}
                      className="font-display text-[40px] leading-[0.9] group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] text-center relative z-10 select-none uppercase break-words hyphens-auto"
                    >
                      {project.title.split('—')[0].trim()}
                    </h3>
                  )}
                  
                  <div className="absolute top-0 left-0 w-full h-full bg-crimson/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-20 skew-x-12" />
                </div>

                {/* Content */}
                <div 
                  style={{ backgroundColor: isLight ? '#FDFDF7' : '#0F0F0F' }}
                  className="p-8 flex flex-col flex-grow relative z-30 transition-colors"
                >
                  <span 
                    style={{ color: isLight ? '#667A99' : '#A3A3A3' }}
                    className="font-subheading text-[10px] uppercase tracking-widest group-hover:text-cobalt transition-colors duration-300 mb-4 block"
                  >
                    {project.tag}
                  </span>
                  
                  <h3 
                    style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
                    className="font-display text-2xl tracking-widest mb-4 group-hover:animate-rgb-split transition-colors"
                  >
                    {project.title.split('—')[0].trim()}
                  </h3>
                  
                  <p 
                    style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
                    className="font-inter text-[14px] leading-relaxed mb-8 transition-colors"
                  >
                    {project.description}
                  </p>

                  <div className="mt-auto relative pt-6 overflow-hidden">
                    <div 
                      style={{ backgroundColor: isLight ? '#001B4415' : '#ffffff10' }}
                      className="absolute top-0 left-0 w-full h-[1px] group-hover:bg-transparent transition-colors" 
                    />
                    
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-crimson -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />

                    <div className="flex items-center gap-3">
                      <span 
                        style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
                        className="font-subheading text-[12px] uppercase tracking-widest group-hover:text-crimson transition-colors duration-300"
                      >
                        View Project
                      </span>
                      <ArrowRight size={14} className="text-crimson -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                    </div>
                  </div>
                </div>
              </motion.a>
            </TiltCard>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
