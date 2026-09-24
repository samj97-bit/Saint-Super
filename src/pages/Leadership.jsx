import React from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function Leadership() {
  const { siteData } = useSiteData();
  const { executiveBoard, subcommittee: subcommitteeCoChairs } = siteData;


  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background blurs specifically for this page */}
      <div className="absolute top-20 left-0 w-full h-[80vh] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-60 right-0 w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[120px] -z-10 opacity-70"></div>
      <div className="absolute bottom-40 left-10 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[150px] -z-10 opacity-50"></div>

      {/* Hero Section */}
      <section className="mb-24 px-6 md:px-12 max-w-7xl mx-auto text-center reveal">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-lg text-sm mb-6 border border-primary/20">
          Our Guiding Force
        </div>
        <h1 className="font-display-hero text-display-md md:text-display-lg text-on-surface mb-6 tracking-tight">
          Faces of Our <span className="text-primary italic">Mission</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Meet the dedicated, smiling faces who guide our vision. Our leadership team brings together decades of experience, boundless empathy, and a relentless drive to create sustainable social impact.
        </p>
      </section>

      {/* Executive Board Members - Zig Zag Layout for PC, Stacked for Mobile */}
      <section className="mb-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-20 reveal">
          <h2 className="font-display text-headline-lg text-on-surface whitespace-nowrap">Executive Board</h2>
          <div className="h-px w-full bg-gradient-to-r from-outline-variant to-transparent"></div>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {executiveBoard.map((person, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20 reveal blur-reveal group`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative">
                <div className={`absolute inset-0 bg-primary/20 rounded-[3rem] transform transition-transform duration-700 ${idx % 2 === 1 ? 'group-hover:-translate-x-4 group-hover:translate-y-4' : 'group-hover:translate-x-4 group-hover:translate-y-4'} -z-10`}></div>
                <div className="relative h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="font-label-lg text-secondary uppercase tracking-widest mb-3">{person.role}</p>
                <h3 className="font-display text-display-sm text-on-surface mb-6">{person.name}</h3>
                <div className="w-16 h-1 bg-primary/50 mb-8 rounded-full"></div>
                <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg">
                  {person.bio}
                </p>
                <div className="mt-10 flex gap-4">
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </button>
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">link</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Subcommittee Co-Chairs - Horizontal Scroll on Mobile, Grid on PC */}
      <section className="px-0 md:px-12 max-w-7xl mx-auto">
        <div className="px-6 md:px-0 flex items-center gap-6 mb-16 reveal">
          <h2 className="font-display text-headline-lg text-on-surface whitespace-nowrap">Subcommittee Co-Chairs</h2>
          <div className="h-px w-full bg-gradient-to-r from-outline-variant to-transparent"></div>
        </div>

        {/* 
          Hide scrollbar trick using tailwind arbitrary values: 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-12 px-6 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {subcommitteeCoChairs.map((person, idx) => (
            <div key={idx} className="reveal min-w-[85vw] md:min-w-0 snap-center shrink-0 bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant/20 group relative overflow-hidden">
              
              {/* Decorative Corner Shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[100px] -z-10 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative w-32 h-32 mb-8 rounded-[2rem] overflow-hidden shadow-md transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-top group-hover:scale-110"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="font-headline-sm text-title-lg text-on-surface mb-1">{person.name}</h3>
                <p className="font-label-lg text-primary text-sm tracking-wider uppercase mb-5">{person.role}</p>
                <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-full"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
