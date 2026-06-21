import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, Clock, User, Award, ShieldAlert, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

interface CaseStudyDetailProps {
  slug: string | null;
  onClose: () => void;
}

export function CaseStudyDetail({ slug, onClose }: CaseStudyDetailProps) {
  const isOpen = slug === 'irctc-revamp';

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#FCFAF7] text-[#1F2933]"
      id="case-study-root"
      role="dialog"
      aria-modal="true"
      aria-label="IRCTC Revamp Case Study"
    >
      {/* Top sticky navigation bar */}
      <div className="sticky top-0 z-30 w-full bg-[#FCFAF7]/80 backdrop-blur-md border-b border-[#8FAF9B]/20 py-4 px-6 md:px-12 flex justify-between items-center">
        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-sm font-subheading text-[#1F2933]/60 hover:text-[#1F2933] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FAF9B]"
          aria-label="Back to selected works"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Work</span>
        </button>

        <button
          onClick={onClose}
          className="p-2 text-[#1F2933]/60 hover:text-[#1F2933] hover:bg-[#8FAF9B]/10 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FAF9B]"
          aria-label="Close case study"
        >
          <X size={20} />
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-20">
          <div className="flex-1 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#8FAF9B]/15 text-[#1F2933]/80 border border-[#8FAF9B]/30 font-subheading text-[10px] uppercase tracking-widest">
              UX/UI Case Study
            </span>
            <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.1] text-[#1F2933]">
              IRCTC Revamp
            </h1>
            <p className="font-display text-xl md:text-2xl text-[#1F2933]/70 font-light leading-relaxed">
              Redesigning India's Railway Booking Experience
            </p>
            <p className="font-inter text-base md:text-lg leading-relaxed text-[#1F2933]/60">
              A complete UX/UI overhaul of the IRCTC mobile app focused on removing user friction, simplifying the booking workflow, and prioritizing clarity and accessibility for millions of daily travelers.
            </p>

            <div className="pt-2">
              <a
                href="https://www.figma.com/design/SpLOrHE1EbOqLC6TGdamdK/IRCTC-Revamp?node-id=0-1&t=FxvqNbfgiH1jSWwI-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 border border-[#1F2933] text-[#1F2933] font-subheading text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 overflow-hidden hover:border-[#8FAF9B]"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Figma Prototype</span>
                <div className="absolute inset-0 bg-[#8FAF9B] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-[#8FAF9B]/20">
              <div>
                <span className="flex items-center gap-2 text-xs font-subheading text-[#1F2933]/40 uppercase tracking-wider mb-1">
                  <User size={12} className="text-[#8FAF9B]" /> Role
                </span>
                <span className="text-sm font-medium text-[#1F2933]/80">Lead UX/UI Designer</span>
              </div>
              <div>
                <span className="flex items-center gap-2 text-xs font-subheading text-[#1F2933]/40 uppercase tracking-wider mb-1">
                  <Clock size={12} className="text-[#8FAF9B]" /> Timeline
                </span>
                <span className="text-sm font-medium text-[#1F2933]/80">4 Weeks (Personal Project)</span>
              </div>
              <div>
                <span className="flex items-center gap-2 text-xs font-subheading text-[#1F2933]/40 uppercase tracking-wider mb-1">
                  <Award size={12} className="text-[#8FAF9B]" /> Focus
                </span>
                <span className="text-sm font-medium text-[#1F2933]/80">Product Strategy, UX Research, UI Design</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[420px] aspect-[4/5] bg-gradient-to-tr from-[#8FAF9B]/15 via-[#F8F5F0]/40 to-[#C8A96B]/15 rounded-3xl p-8 flex items-center justify-center border border-[#8FAF9B]/20 relative overflow-hidden group shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8FAF9B]/5 via-transparent to-transparent opacity-60" />
            
            {/* Styled interactive screen mockup preview */}
            <div className="relative z-10 w-full max-w-[280px] bg-[#FCFAF7] rounded-[40px] shadow-card border-[6px] border-[#1F2933] overflow-hidden aspect-[9/19] flex flex-col">
              {/* Phone Notch */}
              <div className="w-28 h-4 bg-[#1F2933] rounded-b-xl mx-auto flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-black/40 mr-2" />
                <div className="w-10 h-1 bg-black/40 rounded-full" />
              </div>

              {/* Mock App Header */}
              <div className="p-4 bg-[#F8F5F0] border-b border-[#8FAF9B]/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#8FAF9B]/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#8FAF9B]">IR</span>
                  </div>
                  <span className="text-[11px] font-display font-semibold tracking-wide">RAILWAY CONNECT</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              {/* Mock App Home Screen */}
              <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-[#FCFAF7]">
                <div className="space-y-1">
                  <p className="text-[8px] uppercase tracking-wider text-[#1F2933]/40">Where are you heading?</p>
                  <h3 className="text-xs font-display font-bold">Book Tickets</h3>
                </div>

                {/* Route Selector */}
                <div className="bg-[#F8F5F0] border border-[#8FAF9B]/20 rounded-xl p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[8px] text-[#1F2933]/40 uppercase">From</p>
                      <p className="text-[10px] font-bold">New Delhi (NDLS)</p>
                    </div>
                    <RefreshCw size={10} className="text-[#8FAF9B]" />
                    <div className="text-right">
                      <p className="text-[8px] text-[#1F2933]/40 uppercase">To</p>
                      <p className="text-[10px] font-bold">Mumbai Central (MMCT)</p>
                    </div>
                  </div>
                </div>

                {/* Date and Class */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#F8F5F0] border border-[#8FAF9B]/10 rounded-xl p-2.5">
                    <p className="text-[8px] text-[#1F2933]/40 uppercase">Departure Date</p>
                    <p className="text-[9px] font-bold mt-0.5">Thu, 25 Jun</p>
                  </div>
                  <div className="bg-[#F8F5F0] border border-[#8FAF9B]/10 rounded-xl p-2.5">
                    <p className="text-[8px] text-[#1F2933]/40 uppercase">Class</p>
                    <p className="text-[9px] font-bold mt-0.5">AC 3 Tier (3A)</p>
                  </div>
                </div>

                {/* Available Train Card Mockup */}
                <div className="border border-[#8FAF9B]/25 rounded-xl p-3 bg-[#FCFAF7] space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-[#1F2933]">Rajdhani Express (12952)</span>
                    <span className="text-[9px] font-bold text-[#C8A96B]">₹2,140</span>
                  </div>
                  <div className="flex justify-between text-[8px] text-[#1F2933]/60">
                    <span>16:55 NDLS</span>
                    <span>15h 35m</span>
                    <span>08:30 MMCT</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#8FAF9B]/10">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 text-[8px] font-medium">
                      AVAILABLE - 0145
                    </span>
                    <span className="text-[7px] text-[#1F2933]/40">General Quota</span>
                  </div>
                </div>

                {/* Book Now Action */}
                <div className="w-full py-2 bg-[#8FAF9B] text-[#FCFAF7] rounded-xl text-center text-[9px] font-bold">
                  Search Trains
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">01. Project Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4">
              <p className="font-inter leading-relaxed text-[#1F2933]/70">
                The Indian Railway Catering and Tourism Corporation (IRCTC) manages one of the largest passenger railway networks globally, handling over 1.5 million bookings per day. Despite its massive traffic, the mobile application experience is notoriously frustrating for users.
              </p>
              <p className="font-inter leading-relaxed text-[#1F2933]/70">
                This project focuses on a complete structural, visual, and workflow transformation. The objective was to replace the visual clutter, low-contrast UI, distracting ads, and confusing checkout loops with a clean, high-performance, accessible, and user-centered design system.
              </p>
            </div>
            <div className="md:col-span-4 bg-[#F8F5F0] border border-[#8FAF9B]/20 rounded-2xl p-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#1F2933] mb-3">Key Highlights</h3>
              <ul className="space-y-2 text-xs font-inter text-[#1F2933]/70 list-disc pl-4">
                <li>Streamlined 3-step booking flow</li>
                <li>Clear status signals (WL/RAC/CNF)</li>
                <li>Design accessibility optimized (WCAG AAA)</li>
                <li>Dynamic responsive dashboard layout</li>
                <li>Clean, premium railway aesthetic</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="space-y-6 mb-20 bg-[#1F2933] text-[#FCFAF7] rounded-3xl p-8 md:p-12 border border-[#8FAF9B]/10 shadow-card">
          <div className="flex items-center gap-3 text-[#8FAF9B]">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider">02. Problem Statement</h2>
          </div>
          <div className="space-y-4 max-w-3xl">
            <p className="font-display text-lg md:text-xl text-[#FCFAF7]/90 leading-relaxed font-light">
              "Booking a train ticket on IRCTC shouldn't feel like an obstacles course."
            </p>
            <p className="font-inter text-sm leading-relaxed text-[#FCFAF7]/60">
              Users frequently encounter visual noise (heavy advertisements and duplicate menus), lack of logical information hierarchy during class/train selection, and high anxiety during checkout due to timing sessions and complex quota parameters. These issues lead to high transaction failure rates, booking delays, and extreme user frustration—especially for non-technical users and people with visual disabilities.
            </p>
          </div>
        </section>

        {/* Research Insights & Pain Points */}
        <section className="space-y-8 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">03. User Pain Points</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 border border-[#8FAF9B]/20 p-6 rounded-2xl flex flex-col space-y-4 hover:border-[#8FAF9B]/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                <ShieldAlert size={20} />
              </div>
              <h3 className="font-display text-lg font-bold">Choice Overload & Noise</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed flex-grow">
                Too many parameters displayed at once (Quota options, ticket class codes, seat codes) with no clear visual weights. Third-party banner ads overlay primary actions.
              </p>
            </div>

            <div className="bg-white/60 border border-[#8FAF9B]/20 p-6 rounded-2xl flex flex-col space-y-4 hover:border-[#8FAF9B]/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#C8A96B]/15 text-[#C8A96B] flex items-center justify-center shrink-0">
                <Sparkles size={20} />
              </div>
              <h3 className="font-display text-lg font-bold">Booking Anxiety</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed flex-grow">
                Session time-out indicators are stress-inducing rather than informative. Captchas are difficult to read and fail frequently, resulting in lost Tatkal bookings.
              </p>
            </div>

            <div className="bg-white/60 border border-[#8FAF9B]/20 p-6 rounded-2xl flex flex-col space-y-4 hover:border-[#8FAF9B]/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#8FAF9B]/20 text-[#8FAF9B] flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-display text-lg font-bold">Accessibility Failures</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed flex-grow">
                Small tap targets (below 32px), low text contrast, and poor support for regional screen readers fail rural and older cohorts who represent a significant demographic.
              </p>
            </div>
          </div>
        </section>

        {/* Design Goals */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">04. Design Goals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="font-display text-4xl text-[#8FAF9B]/60 font-semibold block">01</span>
              <h3 className="font-display text-lg font-bold">Absolute Simplicity</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed">
                Streamline ticket searching, details checking, and payments into a smooth linear progression. Reduce cognitive load at each step.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-display text-4xl text-[#8FAF9B]/60 font-semibold block">02</span>
              <h3 className="font-display text-lg font-bold">Visual Hierarchy</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed">
                Color-code seat availability statuses (Available vs WL/RAC) clearly and make secondary information discoverable via expanding details.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-display text-4xl text-[#8FAF9B]/60 font-semibold block">03</span>
              <h3 className="font-display text-lg font-bold">Accessible Architecture</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed">
                Enforce a minimum touch-target size of 48x48px, support dark mode and high-contrast styling, and write clean labels for screen readers.
              </p>
            </div>
          </div>
        </section>

        {/* Information Architecture */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">05. Information Architecture</h2>
          </div>
          <div className="bg-[#F8F5F0] border border-[#8FAF9B]/20 rounded-3xl p-6 md:p-8">
            <p className="font-inter text-sm text-[#1F2933]/60 mb-8 max-w-2xl">
              We collapsed the disjointed multi-page configuration forms into a single unified search container, while partitioning passenger adding and quota validation into linear steps.
            </p>
            
            {/* CSS Flow Diagram */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              <div className="w-full md:w-1/5 p-4 bg-[#FCFAF7] border border-[#8FAF9B]/30 rounded-xl shadow-soft">
                <span className="text-[10px] text-[#8FAF9B] uppercase font-bold tracking-wider">Step 1</span>
                <p className="text-xs font-bold mt-1">Smart Search</p>
                <p className="text-[9px] text-[#1F2933]/50 mt-1">Select source, destination, & travel date</p>
              </div>
              <div className="h-6 w-[1px] md:h-[1px] md:w-12 bg-[#8FAF9B]/50" />
              <div className="w-full md:w-1/5 p-4 bg-[#FCFAF7] border border-[#8FAF9B]/30 rounded-xl shadow-soft">
                <span className="text-[10px] text-[#8FAF9B] uppercase font-bold tracking-wider">Step 2</span>
                <p className="text-xs font-bold mt-1">Train Selection</p>
                <p className="text-[9px] text-[#1F2933]/50 mt-1">Compare availability, timings & fares</p>
              </div>
              <div className="h-6 w-[1px] md:h-[1px] md:w-12 bg-[#8FAF9B]/50" />
              <div className="w-full md:w-1/5 p-4 bg-[#FCFAF7] border border-[#8FAF9B]/30 rounded-xl shadow-soft">
                <span className="text-[10px] text-[#8FAF9B] uppercase font-bold tracking-wider">Step 3</span>
                <p className="text-xs font-bold mt-1">Passenger Hub</p>
                <p className="text-[9px] text-[#1F2933]/50 mt-1">Fill passenger info, select berths</p>
              </div>
              <div className="h-6 w-[1px] md:h-[1px] md:w-12 bg-[#8FAF9B]/50" />
              <div className="w-full md:w-1/5 p-4 bg-[#1F2933] border border-[#8FAF9B]/10 rounded-xl text-[#FCFAF7] shadow-soft">
                <span className="text-[10px] text-[#8FAF9B] uppercase font-bold tracking-wider">Step 4</span>
                <p className="text-xs font-bold mt-1">Secure Checkout</p>
                <p className="text-[9px] text-[#FCFAF7]/50 mt-1">Single-click payment validation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wireframes vs UI Screens */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">06. Wireframes & Layout Structure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8F5F0] border border-dashed border-[#8FAF9B]/30 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-subheading text-[#8FAF9B] uppercase font-bold tracking-widest">Low-Fidelity Structure</span>
                <h3 className="font-display text-xl font-bold mt-1 mb-4">Focusing on Placement</h3>
                <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed mb-6">
                  We experimented with keeping routing handles and date select components in a single container. The low-fidelity testing confirmed that users prefer seeing recent search history on the primary screen.
                </p>
              </div>
              {/* CSS Wireframe Graphic Mockup */}
              <div className="bg-[#FCFAF7] border border-[#8FAF9B]/20 rounded-xl p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-black/10" />
                  <div className="w-12 h-2 bg-black/10 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-black/5 rounded border border-dashed border-black/15" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 bg-black/5 rounded border border-dashed border-black/15" />
                    <div className="h-6 bg-black/5 rounded border border-dashed border-black/15" />
                  </div>
                </div>
                <div className="h-10 bg-[#8FAF9B]/20 rounded-lg border border-dashed border-[#8FAF9B]/30" />
              </div>
            </div>

            <div className="bg-white/40 border border-[#8FAF9B]/20 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-subheading text-[#C8A96B] uppercase font-bold tracking-widest">High-Fidelity UI Screens</span>
                <h3 className="font-display text-xl font-bold mt-1 mb-4">Polishing Visual Interface</h3>
                <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed mb-6">
                  The visual layout integrates soft shadows, rounded container cards, large type headers, and sage-green active highlights to build trust and simplify interaction targets.
                </p>
              </div>
              {/* CSS High-Fidelity UI Graphic Mockup */}
              <div className="bg-[#FCFAF7] border border-[#8FAF9B]/30 rounded-xl p-4 space-y-4 shadow-soft">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#8FAF9B]/30" />
                    <span className="text-[10px] font-bold">New Delhi (NDLS)</span>
                  </div>
                  <span className="text-[9px] text-[#8FAF9B]">Swap</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#8FAF9B]/30" />
                    <span className="text-[10px] font-bold">Mumbai (MMCT)</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#F8F5F0] p-2 rounded-lg border border-[#8FAF9B]/10">
                    <span className="text-[7px] text-[#1F2933]/40 block uppercase">Travel Date</span>
                    <span className="text-[9px] font-bold text-[#1F2933]/80">25 Jun, 2026</span>
                  </div>
                  <div className="bg-[#F8F5F0] p-2 rounded-lg border border-[#8FAF9B]/10">
                    <span className="text-[7px] text-[#1F2933]/40 block uppercase">Travel Class</span>
                    <span className="text-[9px] font-bold text-[#1F2933]/80">AC 3 Tier (3A)</span>
                  </div>
                </div>
                <div className="h-10 bg-[#8FAF9B] text-white flex items-center justify-center rounded-lg text-xs font-bold shadow-soft">
                  Search Train Options
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before vs After Comparison */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">07. Before vs After Comparison</h2>
          </div>
          
          <div className="border border-[#8FAF9B]/20 rounded-3xl overflow-hidden bg-white/40 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#8FAF9B]/20">
              {/* Before Column */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <h3 className="font-display text-lg font-bold text-red-500 uppercase tracking-wider">Before (Original App)</h3>
                </div>
                <ul className="space-y-4 text-xs font-inter text-[#1F2933]/70">
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block mt-0.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Cluttered Routing forms:</strong> Text fields require manual typing without smart search history or station code helper popups.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block mt-0.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Low Contrast Details:</strong> Grey text on blue boxes fails basic accessibility checks. Information is hard to parse under sunlight.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block mt-0.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Disjointed checkout:</strong> Forced ads and captcha forms reload at multiple steps, disrupting quick tatkal bookings.</span>
                  </li>
                </ul>
              </div>

              {/* After Column */}
              <div className="p-6 md:p-8 space-y-6 bg-[#F8F5F0]/50">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="font-display text-lg font-bold text-[#8FAF9B] uppercase tracking-wider">After (Revamped)</h3>
                </div>
                <ul className="space-y-4 text-xs font-inter text-[#1F2933]/70">
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span><strong>Smart Routing Hub:</strong> Location inputs include auto-detection of current coordinates and quick station suggestions based on recent travel patterns.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span><strong>Premium contrast:</strong> Rich charcoal text on high-contrast ivory background ensures a clear rating of 6.2:1 contrast.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span><strong>Seamless single-scroll page:</strong> Ad placement is restricted to side banners, while the booking checkout integrates secure payment options inline.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">08. Design System</h2>
          </div>
          <p className="font-inter text-sm text-[#1F2933]/60 max-w-2xl mb-8">
            Designed to feel calm, secure, and modern. Sage green represents tranquility and safety, warm ivory delivers visual comfort, and gold is used sparingly for core actions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/60 border border-[#8FAF9B]/20 rounded-2xl p-4 space-y-4">
              <div className="w-full aspect-square rounded-xl bg-[#8FAF9B] border border-black/5" />
              <div>
                <p className="font-display text-xs font-bold">Sage Green</p>
                <p className="text-[10px] text-[#1F2933]/50">#8FAF9B · Primary Accent</p>
              </div>
            </div>
            <div className="bg-white/60 border border-[#8FAF9B]/20 rounded-2xl p-4 space-y-4">
              <div className="w-full aspect-square rounded-xl bg-[#FCFAF7] border border-[#8FAF9B]/20" />
              <div>
                <p className="font-display text-xs font-bold">Soft Ivory</p>
                <p className="text-[10px] text-[#1F2933]/50">#FCFAF7 · Background</p>
              </div>
            </div>
            <div className="bg-white/60 border border-[#8FAF9B]/20 rounded-2xl p-4 space-y-4">
              <div className="w-full aspect-square rounded-xl bg-[#C8A96B] border border-black/5" />
              <div>
                <p className="font-display text-xs font-bold">Muted Gold</p>
                <p className="text-[10px] text-[#1F2933]/50">#C8A96B · Highlights</p>
              </div>
            </div>
            <div className="bg-white/60 border border-[#8FAF9B]/20 rounded-2xl p-4 space-y-4">
              <div className="w-full aspect-square rounded-xl bg-[#1F2933] border border-black/5" />
              <div>
                <p className="font-display text-xs font-bold">Charcoal</p>
                <p className="text-[10px] text-[#1F2933]/50">#1F2933 · Text & Surface</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes and Key metrics */}
        <section className="space-y-8 mb-20 bg-[#F8F5F0] border border-[#8FAF9B]/20 rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">09. Key Outcomes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-display text-5xl md:text-6xl text-[#8FAF9B] font-bold block">60%</span>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#1F2933]/80">Faster Ticket Booking</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed">
                By collapsing routes selection and passengers listing into a linear, pre-filled form.
              </p>
            </div>
            <div className="space-y-2 text-center md:text-left border-y md:border-y-0 md:border-x border-[#8FAF9B]/20 py-6 md:py-0 md:px-8">
              <span className="font-display text-5xl md:text-6xl text-[#C8A96B] font-bold block">45%</span>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#1F2933]/80">Reduction in Error Rates</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed">
                Clear labeling of waitlist status parameters and quota constraints decreases booking errors.
              </p>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="font-display text-5xl md:text-6xl text-[#1F2933] font-bold block">WCAG</span>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#1F2933]/80">AAA Accessibility</h3>
              <p className="font-inter text-xs text-[#1F2933]/60 leading-relaxed">
                Achieved compliant visual contrasts and accessible navigation markers for assistive technology.
              </p>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8FAF9B]" />
            <h2 className="font-display text-2xl uppercase tracking-wider text-[#1F2933]/80">10. Case Learnings</h2>
          </div>
          <div className="space-y-4 max-w-3xl font-inter text-sm leading-relaxed text-[#1F2933]/70">
            <p>
              Designing for national infrastructure requires balancing modern aesthetic desires against operational simplicity. A highly graphical interface could break on older phones or low-bandwidth connections.
            </p>
            <p>
              By focusing heavily on structural layouts and prioritizing text styling over code-heavy graphic layers, we built a UI that looks expensive and high-end but scales lightweight for rural users.
            </p>
            <p>
              Ultimately, the project taught me that great design in public utilities means advocating for the user at every level, ensuring accessibility is baked in as a fundamental requirement rather than an afterthought.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
