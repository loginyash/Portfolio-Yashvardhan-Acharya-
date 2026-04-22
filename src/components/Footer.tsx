

export function Footer({ isLight }: { isLight?: boolean }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      style={{ 
        backgroundColor: isLight ? '#FFFFF0' : '#0A0A0A',
        borderColor: isLight ? '#001B4415' : '#ffffff0d'
      }}
      className="w-full border-t py-8 px-6 md:px-12 transition-colors duration-500"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <svg className="w-5 h-5 text-crimson" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter">
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
            <polyline points="7.5 7.5 12 11 16.5 7.5" />
            <line x1="12" y1="11" x2="12" y2="13.5" />
            <polyline points="7.5 17.5 12 13.5 16.5 17.5" />
            <line x1="9.4" y1="16" x2="14.6" y2="16" />
          </svg>
          <p 
            style={{ color: isLight ? '#3D4A5E' : '#A3A3A3' }}
            className="font-subheading text-[11px] uppercase tracking-widest transition-colors"
          >
            © {currentYear} Yashvardhan Acharya <span className="mx-2">·</span> Designed with intention.
          </p>
        </div>
        
        <div className="flex gap-8">
          {[
            { label: 'GitHub', href: 'https://github.com/loginyash' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/loginyash/' },
            { label: 'Email', href: 'mailto:yashacharya2099@gmail.com' }
          ].map((link, i) => (
            <a 
              key={i}
              href={link.href} 
              target={link.href.startsWith('mailto') ? undefined : "_blank"} 
              rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"} 
              style={{ color: isLight ? '#001B44' : '#F2F2F2' }}
              className="hover:text-crimson transition-colors font-subheading text-[11px] uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
