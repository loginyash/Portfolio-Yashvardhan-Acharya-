import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

export function Work() {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.3) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/5 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.span 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-4 block text-violet-400"
        >
          SELECTED WORK
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-12 text-[#F2F2F2]"
        >
          Case Studies.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}