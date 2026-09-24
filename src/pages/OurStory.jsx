import React from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function OurStory() {
  const { siteData } = useSiteData();
  const { storyEras } = siteData;


  return (
    <div className="min-h-screen bg-surface relative">

      {/* Cinematic Hero Banner */}
      <div className="relative w-full h-56 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop"
          alt="Our Story"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-8 md:px-16">
          <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Our Journey</span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Our History
          </h1>
          <p className="text-white/75 text-base md:text-lg mt-3 max-w-xl leading-relaxed">
            We didn't start with a master plan. We started with a rented van, a few volunteers, and a refusal to ignore the hunger in our own city.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="relative">
          {/* Vertical timeline connector — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent -translate-x-1/2 pointer-events-none"></div>

          <div className="space-y-20 md:space-y-32">
            {storyEras.map((era, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-10 md:gap-12 reveal group ${isEven ? '' : 'md:flex-row-reverse'}`}>

                  {/* Image Side */}
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-[2rem] bg-surface-container shadow-xl group-hover:shadow-2xl transition-all duration-500">
                      <img
                        src={era.image}
                        alt={era.title}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Timeline Node — desktop connector dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-primary/40 rounded-full items-center justify-center shadow-md z-10">
                    <span className="material-symbols-outlined text-primary text-lg">{era.icon}</span>
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2">
                    <div className="mb-4">
                      <span className="font-display text-7xl md:text-8xl font-black text-primary/15 block -mb-4 md:-mb-6 leading-none select-none">
                        {era.year}
                      </span>
                      <h3 className="font-headline-lg font-bold text-on-surface text-3xl md:text-4xl relative z-10">
                        {era.title}
                      </h3>
                    </div>
                    <div className="w-14 h-1 bg-gradient-to-r from-primary to-secondary rounded-full my-5"></div>
                    <p className="font-body-md text-on-surface-variant text-base md:text-lg leading-relaxed">
                      {era.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission & Vision Block */}
      <div className="py-16 mt-8 border-t border-outline-variant/10 bg-surface-container/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Vision */}
            <div className="reveal bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-outline-variant/20 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-primary text-2xl">visibility</span>
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">What We Want</span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-on-surface mb-4 leading-tight">
                A country where no one goes to sleep hungry.
              </h2>
              <p className="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed">
                Our vision is incredibly simple. We want to see a society where basic human needs—food, water, and primary education—are accessible to absolutely everyone, regardless of where they were born.
              </p>
            </div>

            {/* Mission */}
            <div className="reveal bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-outline-variant/20 hover:shadow-xl transition-shadow duration-300" style={{ transitionDelay: '0.15s' }}>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-secondary text-2xl">bolt</span>
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-3 block">What We Do</span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-on-surface mb-4 leading-tight">
                We build and operate community infrastructure.
              </h2>
              <p className="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed">
                We run free daily community kitchens, operate free after-school learning centers, and fund rural water and lighting projects through the hard work of our volunteers and local donors.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

