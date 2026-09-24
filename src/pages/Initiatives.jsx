import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

export function Initiatives() {
  const location = useLocation();
  const { siteData } = useSiteData();
  const { initiatives } = siteData;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-surface relative">
      
      {/* Cinematic Hero Banner */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000"
          alt="Programs"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end pb-8 px-8 md:px-16">
          <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">What We Do</span>
          <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Programs &amp; Impact
          </h1>
          <p className="text-white/75 text-base mt-2 max-w-2xl">
            Four core programs focused on immediate relief and long-term sustainable development.
          </p>
        </div>
      </div>

      {/* Documentary-Style Initiatives */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="space-y-16 md:space-y-24">
          {initiatives.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.id} 
                id={item.id}
                className="scroll-mt-32 reveal group"
              >
                <div className={`flex flex-col md:flex-row gap-8 md:gap-10 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Image Side - Added subtle floating background glow */}
                  <div className="w-full md:w-3/5 relative">
                    <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-xl animate-pulse -z-10 transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>
                    <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-surface-container shadow-xl transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-1 rounded-[2.5rem]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text Side - Factual, editorial typography */}
                  <div className="w-full md:w-2/5 md:py-8">
                    <div className="border-l-2 border-primary pl-6 mb-8">
                      <h4 className="font-label-md font-bold uppercase tracking-widest text-primary mb-2">
                        {item.subtitle}
                      </h4>
                      <h2 className="font-display text-3xl md:text-4xl font-black text-on-surface">
                        {item.title}
                      </h2>
                    </div>
                    
                    <p className="font-body-lg text-on-surface-variant text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <div className="font-label-lg font-bold text-on-surface">
                        {item.stats}
                      </div>
                      <Link to="/support" className="text-sm font-button font-bold text-primary hover:text-secondary transition-colors underline underline-offset-4">
                        Support this program
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clean Call to Action */}
      <div className="py-16 border-t border-outline-variant/10 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-black text-on-surface mb-6">
            Get Involved
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-10 text-lg">
            Our programs are sustained by the dedication of volunteers and the generosity of our donors. View our reports or reach out to see how you can contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm px-10 py-4 rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
              <span className="material-symbols-outlined text-lg">volunteer_activism</span>
              Make a Donation
            </Link>
            <Link to="/join" className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant text-on-surface font-bold text-sm px-10 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-300">
              <span className="material-symbols-outlined text-lg">handshake</span>
              Apply to Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
