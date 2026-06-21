import { motion } from 'framer-motion';
import { personal } from '../config/personal';
import { Download } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 relative flex items-center justify-center min-h-[60vh] overflow-hidden bg-background">
      <div className="max-w-[1440px] w-full mx-auto text-center relative z-10 flex flex-col items-center">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-8 block text-ink"
        >
          GET IN TOUCH
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[48px] md:text-[100px] lg:text-[120px] leading-[0.9] tracking-[-0.02em] mb-4 text-ink"
        >
          LET'S BUILD
          <br />
          <span className="text-ink">TOGETHER.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-inter text-[16px] md:text-[18px] max-w-lg mx-auto mb-12 leading-[1.6] text-ink/60"
        >
          Open to internships, freelance projects, and full-time roles. I design with purpose — let's find yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-16 w-full sm:w-auto"
        >
          <a
            href={personal.contact.mailto}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 overflow-hidden border border-[#1F2933] text-[#1F2933] font-subheading text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 active:scale-95 text-center min-h-[48px] flex items-center justify-center rounded-xl"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Email Me</span>
            <div className="absolute inset-0 bg-[#8FAF9B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-[#1F2933]/15 text-[#1F2933] font-subheading text-[11px] font-medium uppercase tracking-[0.25em] transition-all duration-500 hover:border-[#8FAF9B] hover:bg-[#8FAF9B]/5 active:scale-95 text-center min-h-[48px] flex items-center justify-center rounded-xl gap-2"
          >
            <span>LinkedIn</span>
          </a>

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 overflow-hidden border border-[#1F2933] bg-transparent text-[#1F2933] font-subheading text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 active:scale-95 text-center min-h-[48px] flex items-center justify-center rounded-xl"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              <Download size={14} className="group-hover:-translate-y-0.5 transition-all duration-300" />
              Resume
            </span>
            <div className="absolute inset-0 bg-[#8FAF9B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 pt-10 border-t border-black/[0.06] w-full max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-ink/40">LOCATION</span>
            <span className="font-subheading text-[13px] tracking-wider text-ink/70">{personal.location.full}</span>
          </div>
          
          <div className="hidden md:block w-1 h-1 rounded-full bg-ink/10" />
          
          <div className="flex flex-col items-center gap-1">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-ink/40">PHONE</span>
            <span className="font-subheading text-[13px] tracking-wider text-ink/70">{personal.contact.phone}</span>
          </div>
          
          <div className="hidden md:block w-1 h-1 rounded-full bg-ink/10" />
          
          <div className="flex flex-col items-center gap-1">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-ink/40">EMAIL</span>
            <span className="font-subheading text-[13px] tracking-wider text-ink/70">{personal.contact.email}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
