import React, { useEffect, useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function Hero() {
  const { siteData } = useSiteData();
  const { sliderImages, headline, headlineAccent, subtitle, badge, ctaPrimary, ctaSecondary } = siteData.hero;
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sliderImages.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <header className="relative w-full overflow-hidden py-10 md:py-14 flex items-center" id="hero">
      
      {/* Full Frame Background Slider */}
      {sliderImages.map((src, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${idx === currentIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} 
          style={{ backgroundImage: `url('${src}')` }}
        >
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
      ))}

      {/* Content overlay */}
      <div className="max-w-container-max mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="lg:w-2/3 reveal">
          
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full mb-4 text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white/30 shadow-sm">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            {badge}
          </div>
          
          <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.1] tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            {headline}<br />
            <span className="text-secondary-fixed">{headlineAccent}</span>
          </h1>
          
          <p className="font-body-lg text-base md:text-lg text-white/90 mb-6 leading-relaxed max-w-xl" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-3 mt-4 reveal">
            <button className="animate-heartbeat bg-primary text-on-primary px-8 py-3 md:py-4 font-button text-button rounded-full flex items-center gap-2 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg whitespace-nowrap">
              {ctaPrimary} <span className="material-symbols-outlined">favorite</span>
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 md:py-4 font-button text-button rounded-full hover:bg-white/20 transition-colors whitespace-nowrap">
              {ctaSecondary}
            </button>
          </div>
          
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-4 right-8 z-30 hidden md:flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <span className="material-symbols-outlined text-lg animate-bounce">keyboard_arrow_down</span>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {sliderImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIdx ? 'bg-white scale-150' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </header>
  );
}

