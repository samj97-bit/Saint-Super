import React from 'react';

const stats = [
  { value: '1.2M+', label: 'Meals Served' },
  { value: '4', label: 'States' },
  { value: '300+', label: 'Volunteers' },
  { value: '5+', label: 'Years Active' },
];

export function ScrollStory() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-transparent relative overflow-hidden" id="story">
      
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-container-low to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
        
        {/* Left Side: Editorial Image & Floating Label */}
        <div className="w-full lg:w-5/12 relative reveal">
          <div className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative border-4 border-white/50 max-h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop" 
              alt="Community impact" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2000ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-overlay"></div>
          </div>
          
          {/* Floating Rotated Label (Desktop Only) */}
          <div className="absolute -left-8 lg:-left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden md:block">
            <span className="font-label-caps text-secondary font-bold tracking-[0.4em] uppercase text-xs whitespace-nowrap opacity-60">
              The Narrative
            </span>
          </div>
        </div>

        {/* Right Side: Typography Content */}
        <div className="w-full lg:w-7/12 reveal" style={{ transitionDelay: '0.2s' }}>
          
          {/* Mobile Label */}
          <span className="font-label-caps text-primary font-bold tracking-[0.3em] uppercase block mb-4 md:hidden">
            The Narrative
          </span>

          <h2 className="font-display-hero text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-on-surface leading-[1.2] tracking-tight">
            We believe that a single spark of <span className="text-primary italic font-light">empathy</span> can ignite a global revolution of hope.
          </h2>
          
          <div className="flex gap-4 md:gap-8">
            {/* Elegant Vertical Accent Line */}
            <div className="w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full shrink-0"></div>
            
            {/* Drop-cap Paragraph */}
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed font-medium bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-2xl border border-primary/10">
              <span className="float-left text-5xl md:text-6xl font-display-hero text-primary font-bold pr-4 pt-2 leading-none">F</span>
              ounded on the principles of radical compassion and systemic change, Saint &amp; Supper is more than a foundation—it is a collective of visionaries dedicated to elevating the human condition through education, nourishment, and technology.
            </p>
          </div>

          {/* Stats Ticker Row */}
          <div className="mt-10 grid grid-cols-4 gap-4 pt-8 border-t border-outline-variant/30">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xl md:text-2xl font-black text-primary">{s.value}</p>
                <p className="text-xs text-on-surface-variant font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
