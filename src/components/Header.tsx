import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-3xl font-display font-black text-gold-400">
            THE BABA
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-gold-400 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-white hover:text-gold-400 transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gold-400 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-white hover:text-gold-400 transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Book Session
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-gold-400 text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-gold-400 text-left">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-gold-400 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-gold-400 text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary w-full">
                Book Session
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;