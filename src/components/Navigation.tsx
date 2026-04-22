import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navigation({ isLight }: { isLight?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{ 
        backgroundColor: scrolled 
          ? (isLight ? 'rgba(255, 255, 240, 0.85)' : 'rgba(10, 10, 10, 0.85)') 
          : 'transparent',
        borderColor: scrolled 
          ? (isLight ? 'rgba(0, 27, 68, 0.1)' : 'rgba(255, 255, 255, 0.05)')
          : 'transparent'
      }}
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b backdrop-blur-md',
        scrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Monogram Logo Badge */}
        <a href="#" className="flex items-center justify-center relative group">
          <svg 
            style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
            className="w-10 h-10 group-hover:text-crimson transition-all duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(192,0,29,0.2)]" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="miter"
          >
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" stroke="currentColor" />
            <polyline points="7.5 7.5 12 11 16.5 7.5" />
            <line x1="12" y1="11" x2="12" y2="13.5" />
            <polyline points="7.5 17.5 12 13.5 16.5 17.5" />
            <line x1="9.4" y1="16" x2="14.6" y2="16" />
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
              className="relative font-subheading uppercase text-xs tracking-[0.2em] hover:text-crimson transition-colors group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-crimson transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Right Nav Options */}
        <div className="hidden md:flex items-center gap-6">
          <div className="h-4 overflow-hidden flex flex-col items-end w-24">
            <motion.div
              animate={{ y: isLight ? -16 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`font-subheading text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${isLight ? 'text-[#001B44]' : 'text-[#F2F2F2]'}`}
            >
              <span className="h-4 flex items-center">Dark Mode</span>
              <span className="h-4 flex items-center">Light Mode</span>
            </motion.div>
          </div>

          <div 
            style={{ 
              borderColor: '#C0001D',
              backgroundColor: isLight ? 'rgba(192, 0, 29, 0.03)' : 'rgba(192, 0, 29, 0.05)'
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson" />
            </span>
            <span 
              style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
              className="font-subheading uppercase text-[10px] tracking-widest opacity-80"
            >
              Open to Work
            </span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button 
          style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
          className="md:hidden p-2 transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background border-l border-white/10 flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              {/* Drawer Monogram Logo */}
              <div className="flex items-center justify-center relative -left-1">
                <svg className="w-10 h-10 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="miter">
                  <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
                  <polyline points="7.5 7.5 12 11 16.5 7.5" />
                  <line x1="12" y1="11" x2="12" y2="13.5" />
                  <polyline points="7.5 17.5 12 13.5 16.5 17.5" />
                  <line x1="9.4" y1="16" x2="14.6" y2="16" />
                </svg>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-text-primary">
                <X size={28} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-8">
              {links.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl uppercase tracking-wider hover:text-crimson transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-crimson" />
                </span>
                <span className="font-subheading uppercase tracking-widest text-sm text-text-secondary">
                  Available for roles
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
