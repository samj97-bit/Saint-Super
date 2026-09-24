import React, { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function VoicesOfImpact() {
  const { siteData } = useSiteData();
  const { testimonials } = siteData;
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!testimonials || testimonials.length === 0) return null;

  // Duplicate for seamless marquee effect (original + duplicate)
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 md:py-16 relative bg-slate-950 overflow-hidden dark-grid-bg">
      {/* Soft warm glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 reveal">
          <span className="inline-flex items-center gap-2 bg-rose-500/10 text-rose-300 border border-rose-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-symbols-outlined text-[14px]">favorite</span>
            Voices of Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-black leading-tight tracking-tight mb-4">
            Real Stories.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-rose-400">Changed Lives.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Behind every meal served and every child educated is a deeply human story of resilience, hope, and love. Click on any story to read more.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden w-full max-w-[100vw] py-8">
        {/* Fading Edges for the Marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused] items-stretch">
          {marqueeTestimonials.map((t, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={idx} 
                className={`w-[300px] md:w-[400px] mx-4 cursor-pointer transition-transform duration-500 ease-out flex flex-col ${isExpanded ? '-translate-y-6 z-50' : 'z-10 hover:-translate-y-2'}`}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              >
                <div className={`bg-slate-900/40 backdrop-blur-md border rounded-3xl p-8 h-full flex flex-col relative group transition-all duration-300 shadow-xl ${isExpanded ? 'border-rose-500/30 bg-slate-800/80 shadow-rose-500/10' : 'border-slate-800/60 hover:bg-slate-800/40 hover:border-slate-700/60'}`}>
                  
                  {/* Decorative Quote Icon */}
                  <span className={`material-symbols-outlined absolute top-6 right-6 text-6xl transition-colors ${isExpanded ? 'text-rose-500/20' : 'text-slate-800/50 group-hover:text-rose-500/20'}`}>
                    format_quote
                  </span>
                  
                  <p className={`text-slate-200 text-base md:text-lg leading-relaxed mb-10 flex-1 font-medium italic relative z-10 transition-all duration-500 ${isExpanded ? '' : 'line-clamp-4'}`}>
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-slate-800/60 pt-6 mt-auto">
                    <img src={t.image} alt={t.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-slate-800" />
                    <div>
                      <h4 className="text-white font-bold">{t.name}</h4>
                      <p className="text-rose-400/80 text-sm font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
