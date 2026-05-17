import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    tag: string;
    description: string;
    link: string;
    image?: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="h-full group"
    >
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col h-full bg-[#0F0F18] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 hover:border-violet-500/30 hover:shadow-glow-violet-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-transparent to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-transparent transition-all duration-500" />
        
        <div className="w-full aspect-[16/10] overflow-hidden relative">
          {project.image ? (
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F18] via-transparent to-transparent" />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0F0F18]">
              <span className="font-display text-[48px] text-white/10 uppercase">
                {project.title.split('—')[0].trim().split(' ')[0]}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow relative z-10">
          <span className="font-subheading text-[10px] uppercase tracking-widest text-violet-400 mb-3 block">
            {project.tag}
          </span>
          
          <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-3 text-white group-hover:text-violet-300 transition-colors duration-300">
            {project.title.split('—')[0].trim()}
          </h3>
          
          <p className="font-inter text-[14px] leading-relaxed mb-6 text-white/50 group-hover:text-white/70 transition-colors duration-300">
            {project.description}
          </p>

          <div className="mt-auto flex items-center gap-3">
            <span className="font-subheading text-[11px] uppercase tracking-widest text-white/60 group-hover:text-violet-400 transition-colors duration-300">
              View Case Study
            </span>
            <ArrowRight size={14} className="text-violet-400 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}