import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Menu, X, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenDeck?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'CASE STUDIES', href: '#case-studies' },
    { label: 'INFO DESIGN', href: '#info-design' },
    { label: 'AI + DESIGN', href: '#ai-design' },
    { label: 'APPROACH', href: '#approach' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-[#F7F7F5]/95 backdrop-blur-md border-[#D9D9D4] py-3 shadow-xs' 
          : 'bg-[#F7F7F5] border-[#D9D9D4] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand & Positioning */}
        <a 
          href="#"
          className="group flex flex-col items-start focus:outline-none"
        >
          <p className="text-[9px] uppercase tracking-widest text-[#666666] font-mono leading-none mb-1">
            PORTFOLIO
          </p>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#111111] group-hover:text-black">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 bg-[#111111] text-[#D4FF00] font-bold rounded">
              PRES. DESIGN
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#666666] hidden sm:block tracking-tight">
            Presentation Design & AI Specialist
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-[11px] font-semibold tracking-wider text-[#666666] hover:text-[#111111] transition-colors py-1 relative group uppercase"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#111111] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Status & Direct CTA */}
        <div className="flex items-center gap-3">
          {/* Availability Indicator */}
          <div className="hidden sm:flex items-center gap-2 py-1 px-3 bg-[#D4FF00] rounded-full border border-black/10">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Available for Freelance</span>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#111111] text-white hover:bg-[#D4FF00] hover:text-[#111111] font-mono text-xs font-bold uppercase tracking-wider rounded transition-all"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111111] hover:bg-black/5 rounded"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F7F5] border-b border-[#D9D9D4] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-150">
          <div className="py-2 flex items-center gap-2 px-2 text-xs font-mono text-[#666666]">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span>Lagos, Nigeria • Remote (Worldwide)</span>
          </div>
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider font-semibold py-2 px-2 text-[#111111] hover:bg-black/5 rounded"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#111111] text-white hover:bg-[#D4FF00] hover:text-[#111111] font-mono text-xs font-bold uppercase tracking-wider rounded transition-all"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4FF00]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
