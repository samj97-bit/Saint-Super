import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0);

      if (totalScroll > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-white/10 bg-[#081D45] ${scrolled ? 'shadow-md' : 'shadow-sm'}`} id="top-nav">
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-3 relative">
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-3 cursor-pointer z-50 mr-auto group">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Saint & Supper Logo" className="h-14 w-auto group-hover:scale-105 transition-transform duration-300 shadow-sm" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg md:text-xl font-bold tracking-tight text-white leading-tight">Saint &amp; Supper</span>
              <span className="text-[10px] md:text-xs font-semibold tracking-widest text-white/70 uppercase leading-none mt-1">Welfare Foundation</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 mr-16">
          <Link className="font-navigation text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-300" to="/">Home</Link>
          
          <div className="relative group py-2">
            <button className="font-navigation text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-1">
              Who We Are? <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 border border-outline-variant/20 py-2 z-50">
              <Link to="/about" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">About Us</Link>
              <Link to="/leadership" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Leadership</Link>
              <div className="relative group/sub">
                <button className="w-full text-left px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors flex items-center justify-between">
                  Join Us <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
                <div className="absolute top-0 left-full bg-white shadow-xl rounded-xl w-56 opacity-0 -translate-x-2 invisible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:visible transition-all duration-300 border border-outline-variant/20 py-2 z-50">
                  <Link to="/join#volunteer" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Volunteers With Us</Link>
                  <Link to="/join#partner" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Partners With Us</Link>
                </div>
              </div>
              <Link to="/support" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Support & Donate</Link>
            </div>
          </div>

          <div className="relative group py-2">
            <button className="font-navigation text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-1">
              What We Do? <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 border border-outline-variant/20 py-2 z-50">
              <Link to="/our-story" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Our Story</Link>
              <div className="relative group/sub-init">
                <button className="w-full text-left px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors flex items-center justify-between">
                  Initiatives <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
                <div className="absolute top-0 left-full bg-white shadow-xl rounded-xl w-56 opacity-0 -translate-x-2 invisible group-hover/sub-init:opacity-100 group-hover/sub-init:translate-x-0 group-hover/sub-init:visible transition-all duration-300 border border-outline-variant/20 py-2 z-50">
                  <Link to="/initiatives" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors font-bold border-b border-outline-variant/10">All Initiatives</Link>
                  <Link to="/initiatives#annapurna" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Annapurna</Link>
                  <Link to="/initiatives#udaan" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Udaan</Link>
                  <Link to="/initiatives#astryx" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Astryx</Link>
                  <Link to="/initiatives#conclave" className="block px-6 py-2.5 font-navigation text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Conclave</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group py-2">
            <button className="font-navigation text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-1">
              Resources <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-outline-variant/10 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
              <Link to="/report" className="block px-4 py-3 text-sm hover:bg-surface-container-low transition-colors text-on-surface">Report</Link>
              <Link to="/blog" className="block px-4 py-3 text-sm hover:bg-surface-container-low transition-colors text-on-surface">Blog</Link>
            </div>
          </div>
          
          <div className="relative group py-2">
            <button className="font-navigation text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-1">
              Gallery <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-outline-variant/10 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
              <Link to="/gallery#photos" className="block px-4 py-3 text-sm hover:bg-surface-container-low transition-colors text-on-surface">Photos</Link>
              <Link to="/gallery#videos" className="block px-4 py-3 text-sm hover:bg-surface-container-low transition-colors text-on-surface">Videos</Link>
            </div>
          </div>

          <Link className="font-navigation text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-300" to="/contact">Contact Us</Link>
        </div>

        {/* Right Side: Donation Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Link to="/support" className="group relative bg-primary text-on-primary px-6 md:px-8 py-2.5 md:py-3 rounded-full font-button text-sm md:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 active:scale-95 whitespace-nowrap flex items-center gap-2 overflow-hidden">
            <span className="material-symbols-outlined text-secondary-fixed text-lg md:text-xl transition-transform duration-300 group-hover:scale-110">favorite</span>
            <div className="relative flex items-center justify-center">
              <span className="font-bold transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">Donate Now</span>
              <span className="font-bold absolute text-secondary-fixed transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">Give Hope</span>
            </div>
          </Link>

          {/* Hamburger Icon */}
          <button 
            className="lg:hidden p-2 -mr-2 text-white focus:outline-none flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out origin-top border-t border-outline-variant/10 overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100 max-h-[80vh] py-4' : 'opacity-0 scale-y-0 max-h-0 py-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-1 pb-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors py-3 border-b border-outline-variant/10">Home</Link>
          
          <div className="flex flex-col py-3 border-b border-outline-variant/10">
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors mb-3">About Us</Link>
            <div className="flex flex-col pl-4 space-y-3 border-l-2 border-outline-variant/30 mb-4">
              <span className="font-display text-base font-bold text-on-surface-variant">Join Us</span>
              <Link to="/join#volunteer" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-sm text-on-surface hover:text-primary transition-colors">Volunteers With Us</Link>
              <Link to="/join#partner" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-sm text-on-surface hover:text-primary transition-colors">Partners With Us</Link>
            </div>
            <Link to="/support" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors">Support & Donate</Link>
          </div>
          
          <div className="flex flex-col py-3 border-b border-outline-variant/10">
            <Link to="/initiatives" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors mb-3">Initiatives</Link>
            <div className="flex flex-col pl-4 space-y-3 border-l-2 border-outline-variant/30">
              <Link to="/initiatives#annapurna" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-sm text-on-surface hover:text-primary transition-colors">Annapurna</Link>
              <Link to="/initiatives#udaan" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-sm text-on-surface hover:text-primary transition-colors">Udaan</Link>
              <Link to="/initiatives#astryx" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-sm text-on-surface hover:text-primary transition-colors">Astryx</Link>
              <Link to="/initiatives#conclave" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-sm text-on-surface hover:text-primary transition-colors">Conclave</Link>
            </div>
          </div>
          
          <Link to="/report" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors py-3 border-b border-outline-variant/10">Report</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors py-3 border-b border-outline-variant/10">Blog</Link>
          <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors py-3 border-b border-outline-variant/10">Gallery</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors py-3">Contact Us</Link>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-secondary-fixed transition-all duration-75 ease-out" style={{ width: `${scrollProgress}%` }}></div>
    </nav>
  );
}
