import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

interface WorkProps {
  onSelectProject?: (slug: string) => void;
}

export function Work({ onSelectProject }: WorkProps) {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(143,175,155,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(143,175,155,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.span 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-4 block text-ink"
        >
          SELECTED WORK
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-12 text-ink"
        >
          Case Studies.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} onSelect={onSelectProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
