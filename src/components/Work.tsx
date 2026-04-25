import { CinematicHeader } from './CinematicHeader';
import { ProjectCard } from './ProjectCard';

interface Project {
  title: string;
  tag: string;
  description: string;
  link: string;
  image?: string;
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
