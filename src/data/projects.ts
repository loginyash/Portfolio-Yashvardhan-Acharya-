export interface Project {
  title: string;
  tag: string;
  description: string;
  link: string;
  image?: string;
  slug?: string;
  isLocalCaseStudy?: boolean;
}

export const projects: Project[] = [
  {
    title: "IRCTC Revamp — UX/UI Case Study",
    tag: "UX/UI Case Study · Mobile · Transportation",
    description: "A complete UX/UI overhaul of the IRCTC app focused on making train booking faster, simpler, and significantly more user-friendly.",
    link: "https://www.figma.com/design/SpLOrHE1EbOqLC6TGdamdK/IRCTC-Revamp?node-id=0-1&t=FxvqNbfgiH1jSWwI-1",
    image: "/irctc_thumb.png",
    slug: "irctc-revamp",
    isLocalCaseStudy: false
  },
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