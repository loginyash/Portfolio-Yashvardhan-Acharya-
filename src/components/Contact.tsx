import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative flex items-center justify-center min-h-[60vh] overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-subheading text-[11px] uppercase tracking-[0.2em] mb-8 block text-white/50"
        >
          GET IN TOUCH
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[56px] md:text-[100px] lg:text-[120px] leading-[0.9] tracking-[-0.02em] mb-4 text-[#F2F2F2]"
        >
          LET'S BUILD
          <br />
          <span className="text-crimson">SOMETHING.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-inter text-[15px] md:text-[17px] max-w-lg mx-auto mb-10 leading-[1.6] text-[#A3A3A3]"
        >
          Open to internships, freelance projects, and full-time roles. I design with purpose — let's find yours.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16 w-full sm:w-auto"
        >
          {/* Email Button */}
          <a 
            href="mailto:yashacharya2099@gmail.com"
            className="group w-full sm:w-auto px-10 py-4 relative overflow-hidden border border-crimson text-white font-subheading text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 active:scale-95 text-center min-h-[44px] flex items-center justify-center"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Email Me</span>
            <div className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
          </a>
          
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/loginyash/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[rgba(255,255,255,0.1)] text-[#F2F2F2] font-subheading text-[11px] font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:border-white hover:text-white active:scale-95 text-center min-h-[44px] flex items-center justify-center gap-2"
          >
            <span>View LinkedIn</span>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-50">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Contact details */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 pt-10 border-t border-[rgba(255,255,255,0.06)] w-full max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-[#A3A3A3]">LOCATION</span>
            <span className="font-subheading text-[13px] tracking-wider text-[#F2F2F2]">Bikaner, Rajasthan, India</span>
          </div>
          
          <div className="hidden md:block w-1 h-1 rounded-full bg-[rgba(255,255,255,0.1)]" />
          
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-[#A3A3A3]">PHONE</span>
            <span className="font-subheading text-[13px] tracking-wider text-[#F2F2F2]">+91-99282 83468</span>
          </div>
          
          <div className="hidden md:block w-1 h-1 rounded-full bg-[rgba(255,255,255,0.1)]" />
          
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-[#A3A3A3]">EMAIL</span>
            <span className="font-subheading text-[13px] tracking-wider text-[#F2F2F2]">yashacharya2099@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
