import { motion, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
        {({ rotateX, rotateY }) => {
          const imgX = useTransform(rotateY, [-0.5, 0.5], ["3%", "-3%"]);
          const imgY = useTransform(rotateX, [-0.5, 0.5], ["3%", "-3%"]);
          
          const titleX = useTransform(rotateY, [-0.5, 0.5], ["6px", "-6px"]);
          const titleY = useTransform(rotateX, [-0.5, 0.5], ["6px", "-6px"]);

          return (
            <motion.a
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full border border-[rgba(255,255,255,0.06)] bg-[#0F0F0F] transition-all duration-300 overflow-hidden z-10 hover:border-crimson/30"
            >
              {/* Thumbnail */}
              <div className="w-full aspect-[4/3] overflow-hidden relative border-b border-[rgba(255,255,255,0.04)] transition-colors duration-300 flex items-center justify-center">
                {project.image ? (
                  <motion.div 
                    style={{ x: imgX, y: imgY }}
                    className="absolute inset-0 z-10 opacity-60 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </motion.div>
                ) : (
                  <motion.h3 
                    style={{ 
                      x: titleX,
                      y: titleY
                    }}
                    className="font-display text-[36px] leading-[0.9] text-center select-none uppercase break-words hyphens-auto p-8 text-[rgba(242,242,242,0.06)]"
                  >
                    {project.title.split('—')[0].trim()}
                  </motion.h3>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow relative z-30 bg-[#0F0F0F]">
                <span className="font-subheading text-[10px] uppercase tracking-widest text-[#A3A3A3] group-hover:text-white transition-colors duration-300 mb-3 block">
                  {project.tag}
                </span>
                
                <h3 className="font-display text-xl md:text-2xl tracking-widest mb-3 text-[#F2F2F2] group-hover:text-crimson transition-colors">
                  {project.title.split('—')[0].trim()}
                </h3>
                
                <p className="font-inter text-[13px] leading-relaxed mb-6 text-[#A3A3A3]">
                  {project.description}
                </p>

                <div className="mt-auto relative pt-5 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[rgba(255,255,255,0.06)] group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-crimson -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />

                  <div className="flex items-center gap-2">
                    <span className="font-subheading text-[11px] uppercase tracking-widest text-[#A3A3A3] group-hover:text-crimson transition-colors duration-300">
                      View Project
                    </span>
                    <ArrowRight size={12} className="text-crimson -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        }}
      </TiltCard>
    </motion.div>
  );
}
