import React, { useState, useEffect } from 'react';
import { site } from '../content';

const NAV = [
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Work' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'Studio' },
  { id: 'pricing', label: 'Pricing' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-noir-950/85 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="container-custom flex items-center justify-between py-5">
        <button onClick={() => go('hero')} className="font-display text-lg font-semibold tracking-tight text-paper">
          THE BABA
        </button>

        <div className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)}
              className="text-[13px] tracking-wide text-white/55 hover:text-paper transition-colors">
              {n.label}
            </button>
          ))}
          <button onClick={() => go('contact')} className="btn-primary !px-5 !py-2 text-[13px]">
            Start a Project
          </button>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-paper p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 17h16'} />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-noir-950/97 backdrop-blur-xl border-b border-white/10 md:hidden">
            <div className="flex flex-col gap-5 p-6">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => go(n.id)} className="text-left text-white/70 hover:text-paper">
                  {n.label}
                </button>
              ))}
              <button onClick={() => go('contact')} className="btn-primary w-full">Start a Project</button>
              <a href={site.phone.href} className="text-center text-sm text-white/40">{site.phone.display}</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
