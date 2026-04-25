import { motion } from 'framer-motion';
import { CinematicHeader } from './CinematicHeader';

const designSkills = [
  "Figma", "Wireframing", "High-Fidelity Prototyping", "User Flows", 
  "Design Systems", "Responsive Design", "User Interviews", "Usability Testing"
];

const techSkills = [
  "HTML", "CSS", "Python", "Git", "GitHub", "Product Thinking", 
  "Cross-functional Collaboration"
];

const certifications = [
  "Google UX Design — Coursera, March 2026",
  "Data Analytics Job Simulation — Deloitte/Forage, July 2025"
];

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        
        <CinematicHeader 
          title="My Toolkit." 
          subtitle="CORE COMPETENCIES" 
          staggered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Design Skills */}
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-8 block text-[#A3A3A3]"
            >
              DESIGN LAYER
            </motion.span>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="group relative px-4 py-2.5 bg-transparent border border-[rgba(255,255,255,0.08)] text-[#F2F2F2] font-subheading text-[11px] uppercase tracking-widest overflow-hidden hover:border-crimson hover:text-white transition-all duration-300 cursor-default"
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute top-0 left-0 h-full w-full bg-crimson -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                </motion.span>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-8 block text-[#A3A3A3]"
            >
              TECHNICAL LAYER
            </motion.span>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="group relative px-4 py-2.5 bg-transparent border border-[rgba(255,255,255,0.08)] text-[#F2F2F2] font-subheading text-[11px] uppercase tracking-widest overflow-hidden hover:border-crimson hover:text-white transition-all duration-300 cursor-default"
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute top-0 left-0 h-full w-full bg-crimson -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row gap-4 md:gap-8"
        >
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="group flex items-center gap-3 px-5 py-3.5 border border-[rgba(255,255,255,0.06)] bg-[rgba(18,18,18,0.5)] hover:border-crimson/30 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity">🏅</span>
              <span className="font-subheading text-[11px] tracking-wider uppercase text-[#A3A3A3] group-hover:text-white transition-colors">
                {cert}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
