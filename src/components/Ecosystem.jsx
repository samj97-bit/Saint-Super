import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 'conclave',
    label: 'Leadership',
    icon: 'groups',
    title: 'Global Youth Conclave',
    tagline: 'Shaping the Vanguard.',
    desc: 'A premier gathering of young minds committed to social governance and humanitarian ethics. We cultivate leaders who don\'t just ask "why" but define "how."',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMNSTFB2FjMWWk5Bbvf3kGuViU72FKtuBSLpNQKrW-XprBR_I6XNBw_5YeQQoqgFePc0echOLMCleSZa_Mrs5VCkNAOLbzE9HFTECZkjsHG0Tc5bVm35yzYmT0jnAEplKBA1qRDeUTe3UgofcjEzP23TqoICWDDgyOlzGO_vCnaArBV9I4HaaEVmMC5bVHnOCeCjeZASZL_Tjsozi0J8vuHqqenfnkpFZlmGZfkr_yzapmwfPB5R1QxA',
    bgClass: 'bg-surface-container',
    textClass: 'text-on-surface',
    descClass: 'text-on-surface-variant'
  },
  {
    id: 'astryx',
    label: 'Technology',
    icon: 'hub',
    title: 'ASTRYX Platform',
    tagline: 'The Neural Network of Social Good.',
    desc: 'Our proprietary technology platform that maps humanitarian needs in real-time, ensuring resources are deployed with surgical precision.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuTWMEHdsKqleDOL7uugwRYRBNIHAui6S8j5w5VeyV52QnfqZzkbs_67kT_1FVDVJ88paF-rHTXZo19uXtBkO55YEM5BDCGIHpB4zhaR-l3WsUzX0rWDzFz-iPJ3mPHK9XQ73rvpRsNAQm-BGVbpwvOU65Dffr0NmDIkaVbw9j5MSm1SeUqPkduxqenAQ12tbA9hZBcrFZjoyEUSfoDBWCpVnkSBFVIt8G-AMoeGzHaUp9wHxjh80DtA',
    bgClass: 'bg-primary-container',
    textClass: 'text-on-primary-container',
    descClass: 'text-on-primary-container/80'
  },
  {
    id: 'udaan',
    label: 'Education',
    icon: 'menu_book',
    title: 'Project Udaan',
    tagline: 'Wings of Knowledge.',
    desc: 'Transforming rural classrooms into hubs of global connectivity. We provide digital literacy and mentorship to the underserved brilliance of our nation.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsdCJEecFTYtaN8uQSbrrZQ_F8BawQPwIYZdi71cJNN0NgG6sWOLeKxQy3_VWaITS3CK54SKbPXrPaI86QBrx1L-JFcAYP63z_tYFU40489MQCPpUvaHyJSEtbR351QdiNjsAQ_DF8Y-DLDlBYwAlbCR6RUWL4kWmhlyeNoXENWb9760QgetsbvwOyCTMMsUXHatHjo93qvuw7YSWeptjZRwtuiN8Hh9WkWepzway-ojgdrpIDXEVEGw',
    bgClass: 'bg-surface-container-low',
    textClass: 'text-on-surface',
    descClass: 'text-on-surface-variant'
  },
  {
    id: 'annapurna',
    label: 'Nutrition',
    icon: 'restaurant',
    title: 'Project Annapurna',
    tagline: 'Zero Hunger, Absolute Dignity.',
    desc: 'Beyond simple feeding programs, we build community-led nutritional ecosystems that ensure no family sleeps with the weight of an empty stomach.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJzlKFChnmUVjc784BNuDQE2d_puPINPc3mKcKDY9qYH5ZlpVLpExfMsMsufV8QaLXHpXhyOfxhEX-X3Y_hySnsRAhXsEWIB_4itEJIqpI3K-t6dRCMfx_A5pG7O8YP-nhoTFJmvmzlRiekhlkvyv08qvgel3rf296ddabXwE3ceUyEfsKxflaowPNRxi-dlckGbyuxwf0kjNwjQ4C1DGFplyrBAEfR1GXeENUX2RKKnIvsyGvKSWLBw',
    bgClass: 'bg-secondary-container',
    textClass: 'text-on-secondary-container',
    descClass: 'text-on-secondary-container/80'
  }
];

// Positioning classes for the 4 orbiting buttons
const orbitPositions = [
  "left-1/2 -top-6 md:-top-10 -translate-x-1/2", // Top
  "top-1/2 -right-6 md:-right-10 -translate-y-1/2", // Right
  "left-1/2 -bottom-6 md:-bottom-10 -translate-x-1/2", // Bottom
  "top-1/2 -left-6 md:-left-10 -translate-y-1/2" // Left
];

export function Ecosystem() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find(p => p.id === activeId);

  return (
    <section className={`relative py-32 md:py-48 transition-colors duration-1000 ease-in-out ${activeProject.bgClass} overflow-hidden z-0`} id="initiatives">
      
      {/* Soft Background Glow / Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none transition-all duration-1000 bg-current"></div>
      
      <div className="max-w-container-max mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title for the whole section */}
        <div className="text-center mb-24 md:mb-32 reveal">
          <p className="font-label-caps text-secondary font-bold tracking-[0.3em] mb-4 uppercase">Discover</p>
          <h2 className={`font-headline-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight ${activeProject.textClass}`}>
            Our Ecosystem.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-5/12 reveal relative min-h-[350px]">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  activeId === proj.id 
                    ? 'opacity-100 translate-y-0 relative z-10' 
                    : 'opacity-0 translate-y-12 absolute inset-0 pointer-events-none z-0'
                }`}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-current/20 bg-white/20 backdrop-blur-sm opacity-90 mb-8 font-bold tracking-widest text-sm uppercase shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">{proj.icon}</span>
                  {proj.label}
                </div>
                
                <h3 className={`font-display-hero text-5xl md:text-6xl font-extrabold mb-8 leading-[1.05] tracking-tight ${proj.textClass}`}>
                  {proj.title}
                </h3>
                <p className={`font-body-lg text-xl md:text-2xl mb-12 leading-relaxed ${proj.descClass}`}>
                  {proj.desc}
                </p>

                {/* Custom Content blocks per project */}
                {proj.id === 'conclave' && (
                  <div className="mb-10">
                    <button className="bg-primary text-on-primary px-10 py-4 font-button text-button rounded-full shadow-2xl hover:shadow-primary/40 hover:bg-primary/90 transition-all hover:-translate-y-1 w-full sm:w-auto">
                      Register for 2024
                    </button>
                  </div>
                )}
                
                {proj.id === 'astryx' && (
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-white/30 p-6 rounded-2xl backdrop-blur-xl border border-white/50 shadow-sm hover:bg-white/40 transition-colors">
                      <span className="material-symbols-outlined text-primary mb-4 text-3xl">analytics</span>
                      <p className="font-bold text-base text-primary">Predictive Aid</p>
                    </div>
                    <div className="bg-white/30 p-6 rounded-2xl backdrop-blur-xl border border-white/50 shadow-sm hover:bg-white/40 transition-colors">
                      <span className="material-symbols-outlined text-primary mb-4 text-3xl">shield</span>
                      <p className="font-bold text-base text-primary">Transparent Flow</p>
                    </div>
                  </div>
                )}

                {proj.id === 'udaan' && (
                  <div className="mb-10">
                    <button className={`font-button text-button border-b-2 border-current pb-1 opacity-90 hover:opacity-100 transition-colors text-lg ${proj.textClass}`}>
                      View Case Study
                    </button>
                  </div>
                )}

                {proj.id === 'annapurna' && (
                  <div className="bg-white/40 p-8 rounded-3xl border border-white/60 shadow-xl backdrop-blur-md mb-10 flex flex-col items-start">
                    <p className="text-4xl md:text-5xl font-extrabold text-primary mb-3">1.2 Million+</p>
                    <p className={`text-base font-bold opacity-80 ${proj.textClass}`}>Meals distributed with love and precision.</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: The Circular Orbit */}
          <div className="w-full lg:w-7/12 flex justify-center reveal" style={{ transitionDelay: '0.2s' }}>
            {/* The Outer Orbit Ring */}
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-white/40 flex items-center justify-center before:absolute before:inset-0 before:border-dashed before:border-2 before:border-outline-variant/20 before:rounded-full before:animate-[spin_60s_linear_infinite]">
              
              {/* Central Image Mask with slow breathing animation */}
              <div className="w-3/4 h-3/4 rounded-full overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-[12px] border-white/80 backdrop-blur-xl animate-[pulse_10s_ease-in-out_infinite]">
                {projects.map((proj) => (
                  <img
                    key={proj.id}
                    src={proj.img}
                    alt={proj.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      activeId === proj.id ? 'opacity-100 scale-100' : 'opacity-0 scale-125'
                    }`}
                  />
                ))}
              </div>

              {/* Orbiting Satellite Buttons */}
              {projects.map((proj, idx) => {
                const isActive = activeId === proj.id;
                return (
                  <div key={proj.id} className={`absolute ${orbitPositions[idx]} flex flex-col items-center gap-3 group z-20`}>
                    <button
                      onClick={() => setActiveId(proj.id)}
                      className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-500 transform backdrop-blur-xl ${
                        isActive
                          ? 'bg-primary text-white scale-110 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-[6px] border-white'
                          : 'bg-white/60 text-on-surface hover:scale-105 border-[3px] border-white shadow-lg hover:shadow-xl hover:bg-white/90'
                      }`}
                      aria-label={proj.title}
                    >
                      <span className="material-symbols-outlined text-[28px] md:text-[36px]">{proj.icon}</span>
                    </button>
                    {/* Tooltip Label */}
                    <span className={`font-bold text-sm md:text-base tracking-[0.1em] uppercase transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                    } ${activeProject.textClass}`}>
                      {proj.label}
                    </span>
                  </div>
                );
              })}
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
