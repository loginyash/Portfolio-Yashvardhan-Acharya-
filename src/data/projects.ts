export interface Project {
  title: string;
  tag: string;
  description: string;
  link: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Amazon App — UI Redesign",
    tag: "UI Redesign · E-Commerce · Mobile",
    description: "Redesigned the Amazon mobile app interface — simplifying navigation, improving product discovery, and creating a modern visual hierarchy with cleaner flows.",
    link: "https://www.figma.com/proto/TYagBX7zirg31Dpe6bGplh?node-id=33-3&t=yV4xo41IR39DAREo-6",
    image: "/Amazon_logo.jpg"
  },
  {
    title: "Sampark — Hyperlocal Social Network",
    tag: "Mobile Design · Accessibility · Figma",
    description: "A LinkedIn-inspired mobile interface re-engineered for rural Indian users — prioritizing accessibility, low-literacy affordances, and local governance tools.",
    link: "https://www.figma.com/proto/PnPkdDjvfXCbEvM7RN9yW5/Sampark?node-id=167-1019&page-id=0%3A1&starting-point-node-id=41%3A327&t=67jZPFvRgnTTk3YL-1",
    image: "/sampark_thumb.png"
  }
];