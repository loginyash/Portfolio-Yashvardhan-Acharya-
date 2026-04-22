import { motion } from 'framer-motion';

export function Contact({ isLight }: { isLight?: boolean }) {
  const textTitle = "LET'S BUILD SOMETHING.".split(" ");

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 relative border-t border-white/5 flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Background moving grain & gradient */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: isLight ? 0.05 : 0.2
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-radial from-cobalt/5 via-transparent to-transparent bg-[length:150%_150%] z-0" 
      />
      
      <div className="max-w-[1440px] w-full mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Cinematic Headline Stagger */}
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 mb-12 select-none">
          {textTitle.map((word, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.175, 0.885, 0.32, 1.275] }}
              style={{ 
                transformOrigin: 'bottom',
                color: isLight ? '#001B44' : '#F2F2F2'
              }}
              className="font-display text-[80px] md:text-[140px] leading-[0.85] tracking-[-0.02em] transition-colors"
            >
              {word}
            </motion.h2>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
          className="font-inter text-[16px] md:text-[18px] max-w-xl mx-auto mb-16 leading-[1.6] transition-colors"
        >
          Open to internships, freelance projects, and full-time roles. I design with purpose — let's find yours.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14 mb-32 w-full md:w-auto"
        >
          {/* Email Button - Geometric & Solid */}
          <motion.a 
            href="mailto:yashacharya2099@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              color: isLight ? '#FFFFF0' : '#0A0A0A',
              clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)'
            }}
            className="w-full md:w-auto px-16 py-6 bg-crimson font-subheading text-[12px] font-bold uppercase tracking-[0.3em] transition-all duration-500 relative group overflow-hidden"
          >
            <span className="relative z-10">Email Me</span>
            
            {/* Animated Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-sheen pointer-events-none" />
            
            {/* Kinetic Glitch Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="absolute inset-0 bg-white/10 animate-glitch-slow mix-blend-overlay" />
            </div>
          </motion.a>
          
          {/* LinkedIn Button - Outlined & Minimalist */}
          <motion.a 
            href="https://www.linkedin.com/in/loginyash/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              borderColor: isLight ? '#001B4420' : '#ffffff10',
              color: isLight ? '#001B44' : '#F2F2F2',
              clipPath: 'polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)'
            }}
            className="w-full md:w-auto px-16 py-6 bg-transparent border font-subheading text-[12px] font-medium uppercase tracking-[0.3em] transition-all duration-500 relative group overflow-hidden"
          >
            <span className="relative z-10 transition-transform group-hover:translate-x-2 inline-block">View LinkedIn</span>
            
            {/* Slide-in Background */}
            <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-10 ${isLight ? 'bg-cobalt/5' : 'bg-white/5'}`} />
            
            {/* Magnetic Icon Detail */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-8 transition-all">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                 <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ borderColor: isLight ? '#001B4415' : '#ffffff10' }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 pt-12 border-t w-full max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform">
            <span style={{ color: isLight ? '#667A99' : '#A3A3A3' }} className="font-subheading text-[10px] uppercase tracking-widest transition-colors text-text-secondary">LOCATION</span>
            <span style={{ color: isLight ? '#001B44' : '#F2F2F2' }} className="font-subheading text-[14px] tracking-wider group-hover:text-cobalt transition-colors">Bikaner, Rajasthan, India</span>
          </div>
          
          <div style={{ backgroundColor: isLight ? '#001B4420' : '#F2F2F220' }} className="hidden md:block w-1 h-1 rounded-full transition-colors" />
          
          <div className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform">
            <span style={{ color: isLight ? '#667A99' : '#A3A3A3' }} className="font-subheading text-[10px] uppercase tracking-widest transition-colors text-text-secondary">PHONE</span>
            <span style={{ color: isLight ? '#001B44' : '#F2F2F2' }} className="font-subheading text-[14px] tracking-wider group-hover:text-crimson transition-colors">+91-99282 83468</span>
          </div>
          
          <div style={{ backgroundColor: isLight ? '#001B4420' : '#F2F2F220' }} className="hidden md:block w-1 h-1 rounded-full transition-colors" />
          
          <div className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform">
            <span style={{ color: isLight ? '#667A99' : '#A3A3A3' }} className="font-subheading text-[10px] uppercase tracking-widest transition-colors text-text-secondary">EMAIL</span>
            <span style={{ color: isLight ? '#001B44' : '#F2F2F2' }} className="font-subheading text-[14px] tracking-wider group-hover:text-crimson transition-colors">yashacharya2099@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
