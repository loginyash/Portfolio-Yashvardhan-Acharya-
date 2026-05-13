import { CinematicHeader } from './CinematicHeader';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function Work() {
  return (
    <section id="work" className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <CinematicHeader 
          title="Things I've Built." 
          subtitle="SELECTED WORK" 
          staggered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
