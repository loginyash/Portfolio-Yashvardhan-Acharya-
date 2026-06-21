import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: {
    title: string;
    tag: string;
    description: string;
    link: string;
    image?: string;
    slug?: string;
    isLocalCaseStudy?: boolean;
  };
  index: number;
  onSelect?: (slug: string) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const isIrctc = project.slug === 'irctc-revamp';

  const handleClick = (e: React.MouseEvent) => {
    if (project.isLocalCaseStudy && onSelect && project.slug) {
      e.preventDefault();
      onSelect(project.slug);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full group"
    >
      <motion.a
        href={project.link}
        onClick={handleClick}
        target={project.isLocalCaseStudy ? undefined : "_blank"}
        rel={project.isLocalCaseStudy ? undefined : "noopener noreferrer"}
        className={cn(
          "relative flex flex-col h-full overflow-hidden transition-all duration-500 rounded-2xl p-4 active:scale-[0.98]",
          isIrctc
            ? "bg-[#FCFAF7] border border-[#8FAF9B]/30 shadow-sm hover:border-[#8FAF9B] hover:shadow-lg"
            : "bg-white/70 border border-[#1F2933]/10 shadow-sm hover:border-[#8FAF9B]/40 hover:shadow-lg"
        )}
      >
        <div className={cn(
          "w-full aspect-[16/10] overflow-hidden relative border border-[#1F2933]/5 rounded-xl bg-gradient-to-tr",
          isIrctc
            ? "from-[#8FAF9B]/15 via-[#F8F5F0]/30 to-[#C8A96B]/10"
            : "from-gray-50 to-[#FCFAF7]"
        )}>
          {project.image ? (
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7]/80 via-transparent to-transparent opacity-80" />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-white/60">
              <span className="font-display text-[48px] text-ink/10 uppercase">
                {project.title.split('—')[0].trim().split(' ')[0]}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-grow relative z-10 p-4">
          <span className={cn(
            "inline-block px-3 py-1 rounded-full font-subheading text-[9px] uppercase tracking-[0.15em] mb-3 self-start border",
            isIrctc
              ? "bg-[#8FAF9B]/15 text-[#1F2933]/90 border-[#8FAF9B]/30"
              : "bg-[#1F2933]/5 text-[#1F2933]/70 border-[#1F2933]/10 group-hover:border-[#8FAF9B]/30 group-hover:bg-[#8FAF9B]/5 group-hover:text-[#1F2933] transition-colors duration-300"
          )}>
            {project.tag}
          </span>
          
          <h3 className="font-display text-2xl md:text-3xl tracking-tight text-[#1F2933] group-hover:text-[#8FAF9B] transition-colors duration-300 mb-3">
            {project.title.split('—')[0].trim()}
          </h3>
          
          <p className="font-inter text-[14px] leading-relaxed mb-6 text-[#1F2933]/60 group-hover:text-[#1F2933]/80 transition-colors duration-300">
            {project.description}
          </p>

          <div className="mt-auto flex items-center gap-3">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-[#1F2933]/60 group-hover:text-[#1F2933] transition-colors duration-300">
              View Prototype
            </span>
            <ArrowRight size={14} className="text-[#1F2933] group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
