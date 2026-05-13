import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { TiltCard } from './TiltCard';

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
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <TiltCard className="h-full">
        {() => (
            <motion.a
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full border border-[rgba(255,255,255,0.06)] bg-[#0F0F0F] transition-all duration-500 overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-crimson/0 via-transparent to-crimson/0 group-hover:from-crimson/5 group-hover:to-crimson/0 transition-all duration-500" />
              
              <div className="w-full aspect-[4/3] overflow-hidden relative border-b border-[rgba(255,255,255,0.04)] transition-all duration-500 flex items-center justify-center">
                {project.image ? (
                  <div className="absolute inset-0 z-10 opacity-60 group-hover:opacity-90 transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-110">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <h3 className="font-display text-[36px] leading-[0.9] text-center select-none uppercase break-words hyphens-auto p-8 text-[rgba(242,242,242,0.06)]">
                    {project.title.split('—')[0].trim()}
                  </h3>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-crimson/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="px-6 py-3 bg-crimson text-white font-subheading text-[11px] uppercase tracking-widest rounded-full"
                  >
                    View Project
                  </motion.span>
                </motion.div>
              </div>

              <div className="p-7 flex flex-col flex-grow relative z-30 bg-[#0F0F0F] group-hover:bg-[#111111] transition-colors duration-300">
                <span className="font-subheading text-[10px] uppercase tracking-widest text-[#B8B8B8] group-hover:text-crimson transition-colors duration-300 mb-3 block">
                  {project.tag}
                </span>
                
                <h3 className="font-display text-xl md:text-2xl tracking-widest mb-3 text-[#F2F2F2] group-hover:text-white transition-colors duration-300 group-hover:translate-x-1">
                  {project.title.split('—')[0].trim()}
                </h3>
                
                <p className="font-inter text-[13px] leading-relaxed mb-6 text-[#B8B8B8] group-hover:text-[#D4D4D4] transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mt-auto relative pt-5 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[rgba(255,255,255,0.06)] group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-crimson -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-subheading text-[11px] uppercase tracking-widest text-[#B8B8B8] group-hover:text-crimson transition-colors duration-300">
                        View Project
                      </span>
                      <ArrowRight size={12} className="text-crimson -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <ExternalLink size={14} className="text-white/20 group-hover:text-crimson group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          )}
      </TiltCard>
    </motion.div>
  );
}
