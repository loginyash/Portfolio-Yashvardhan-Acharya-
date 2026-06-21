import { motion } from 'framer-motion';
import { designSkills, toolsAndPlatforms, certifications } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden bg-background">
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        
        <motion.span 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-4 block text-ink"
        >
          SKILLS & TOOLS
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-16 text-ink"
        >
          Design Toolkit.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <span className="font-subheading text-[12px] uppercase tracking-[0.2em] text-ink/50">
              Design & UX
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {designSkills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative px-5 py-3 bg-white/70 border border-[#8FAF9B]/20 text-ink/70 font-subheading text-[11px] uppercase tracking-widest rounded-full cursor-default hover:text-ink hover:border-[#8FAF9B]/50 hover:bg-[#8FAF9B]/5 transition-all duration-300 shadow-sm"
              >
                <span className="relative z-10">{skill}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pt-12 border-t border-[#8FAF9B]/10 mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
            </div>
            <span className="font-subheading text-[12px] uppercase tracking-[0.2em] text-ink/50">
              Tools & Platforms
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {toolsAndPlatforms.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group px-6 py-3 bg-white/70 border border-[#8FAF9B]/20 rounded-xl hover:border-[#8FAF9B]/50 hover:bg-[#8FAF9B]/5 transition-all duration-300 cursor-default shadow-sm hover:shadow"
              >
                <span className="font-subheading text-[12px] tracking-wider text-ink/50 group-hover:text-ink transition-colors duration-300">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-12 border-t border-[#8FAF9B]/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-subheading text-[11px] uppercase tracking-[0.2em] text-ink/40">
              Certifications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 p-5 bg-white/70 border border-[#8FAF9B]/20 rounded-2xl hover:border-[#8FAF9B]/40 hover:bg-[#8FAF9B]/5 hover:shadow-md transition-all duration-500 cursor-default shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center border border-sage/25 shrink-0 group-hover:bg-sage/20 transition-colors">
                  <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-inter text-[13px] text-ink/50 group-hover:text-ink/80 transition-colors">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
