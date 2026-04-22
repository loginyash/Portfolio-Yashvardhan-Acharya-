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

export function Skills({ isLight }: { isLight?: boolean }) {
  return (
    <section id="skills" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden flex flex-col items-center justify-center border-t border-transparent">
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        
        <CinematicHeader 
          title="My Toolkit." 
          subtitle="CORE COMPETENCIES" 
          isLight={isLight}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          
          {/* Design Skills */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <span 
              style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
              className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-8 block hover:-translate-y-1 transition-transform"
            >
              DESIGN LAYER
            </span>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill, i) => (
                <motion.button 
                   key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    borderColor: isLight ? '#001B4430' : '#ffffff20',
                    color: isLight ? '#001B44' : '#F2F2F2'
                  }}
                  className="group relative px-5 py-2.5 bg-transparent border font-subheading text-[11px] uppercase tracking-widest overflow-hidden hover:border-crimson hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute top-0 left-0 h-full w-full bg-crimson -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <span 
              style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
              className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-8 block hover:-translate-y-1 transition-transform"
            >
              TECHNICAL LAYER
            </span>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, i) => (
                <motion.button 
                   key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    borderColor: isLight ? '#001B4430' : '#ffffff20',
                    color: isLight ? '#001B44' : '#F2F2F2'
                  }}
                  className="group relative px-5 py-2.5 bg-transparent border font-subheading text-[11px] uppercase tracking-widest overflow-hidden hover:border-cobalt hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10 transition-transform group-hover:animate-rgb-split">{skill}</span>
                  <div className="absolute top-0 left-0 h-full w-full bg-cobalt/80 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ borderColor: isLight ? '#001B4415' : '#ffffff10' }}
          className="mt-24 pt-12 border-t flex flex-col md:flex-row gap-6 md:gap-12"
        >
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              style={{ 
                backgroundColor: isLight ? '#F5F5E9' : '#121212',
                borderColor: isLight ? '#001B4415' : '#ffffff10'
              }}
              className="group flex items-center gap-4 px-6 py-4 border hover:border-crimson/50 transition-all duration-300"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300 origin-bottom">🏅</span>
              <span 
                style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
                className="font-subheading text-[12px] tracking-wider uppercase group-hover:text-crimson transition-colors"
              >
                {cert}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
