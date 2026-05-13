import { personal } from '../config/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { label: 'GitHub', href: personal.social.github },
    { label: 'LinkedIn', href: personal.social.linkedin },
    { label: 'Email', href: `mailto:${personal.contact.email}` }
  ];
  
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.04)] bg-[#0A0A0A] py-8 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <svg className="w-5 h-5 text-crimson" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter">
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
            <polyline points="7.5 7.5 12 11 16.5 7.5" />
            <line x1="12" y1="11" x2="12" y2="13.5" />
            <polyline points="7.5 17.5 12 13.5 16.5 17.5" />
            <line x1="9.4" y1="16" x2="14.6" y2="16" />
          </svg>
          <p className="font-subheading text-[11px] uppercase tracking-widest text-[#B8B8B8]">
            © {currentYear} {personal.fullName} <span className="mx-2">·</span> Designed with intention.
          </p>
        </div>
        
        <div className="flex gap-8">
          {socialLinks.map((link, i) => (
            <a 
              key={i}
              href={link.href} 
              target={link.href.startsWith('mailto') ? undefined : "_blank"} 
              rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"} 
              className="text-[#F2F2F2] hover:text-crimson transition-colors font-subheading text-[11px] uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
