import { useState, useEffect, useCallback, useRef } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleMobileClose = useCallback(() => {
    setMobileMenuOpen(false);
    firstFocusableRef.current?.focus();
  }, []);

  const handleMobileOpen = useCallback(() => {
    setMobileMenuOpen(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        handleMobileClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, handleMobileClose]);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b backdrop-blur-md',
        scrolled 
          ? 'py-3 bg-[rgba(10,10,10,0.92)] border-[rgba(255,255,255,0.06)]' 
          : 'py-5 bg-transparent border-transparent'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center justify-center relative group" 
          aria-label="Go to homepage"
        >
          <svg 
            className="w-9 h-9 text-[#F2F2F2] group-hover:text-violet-400 transition-colors duration-500" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="miter"
            aria-hidden="true"
          >
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" stroke="currentColor" />
            <polyline points="7.5 7.5 12 11 16.5 7.5" />
            <line x1="12" y1="11" x2="12" y2="13.5" />
            <polyline points="7.5 17.5 12 13.5 16.5 17.5" />
            <line x1="9.4" y1="16" x2="14.6" y2="16" />
          </svg>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-subheading uppercase text-xs tracking-[0.2em] text-[#B8B8B8] hover:text-white transition-colors duration-300 group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-violet-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <button 
          ref={firstFocusableRef}
          className="md:hidden p-2 text-[#F2F2F2] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-crimson"
          onClick={handleMobileOpen}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleMobileClose}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 w-[80%] max-w-[320px] z-50 bg-[#0A0A0A] flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-16">
                <svg 
                  className="w-9 h-9 text-[#F2F2F2]" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="miter"
                  aria-hidden="true"
                >
                  <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
                  <polyline points="7.5 7.5 12 11 16.5 7.5" />
                  <line x1="12" y1="11" x2="12" y2="13.5" />
                  <polyline points="7.5 17.5 12 13.5 16.5 17.5" />
                  <line x1="9.4" y1="16" x2="14.6" y2="16" />
                </svg>
                <button 
                  ref={closeButtonRef}
                  onClick={handleMobileClose} 
                  className="text-[#F2F2F2] min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-crimson"
                  aria-label="Close navigation menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col space-y-6">
                {links.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.07 }}
                    key={link.label}
                    href={link.href}
                    onClick={handleMobileClose}
                    className="font-display text-3xl text-[#F2F2F2] uppercase tracking-wider hover:text-crimson transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
