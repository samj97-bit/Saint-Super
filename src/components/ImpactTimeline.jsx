import React, { useEffect, useRef } from 'react';

function Counter({ target, suffix = '' }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          let current = 0;
          const increment = target / 50;
          const update = () => {
            current += increment;
            if (current < target) {
              node.textContent = Math.ceil(current) + suffix;
              requestAnimationFrame(update);
            } else {
              node.textContent = target + suffix;
            }
          };
          update();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export function ImpactTimeline() {
  return (
    <section className="py-10 md:py-24 bg-transparent border-y border-outline-variant/20" id="impact">
      <div className="max-w-container-max mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 reveal">
          <p className="font-label-caps text-primary font-bold tracking-[0.3em] mb-2 uppercase text-[10px] md:text-xs">A Legacy in the Making</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-on-surface tracking-tight mb-3 leading-tight">
            Creating Measurable Change<br className="hidden md:block"/> Through Collective Action
          </h2>
        </div>

        {/* 4 Stats Cards - Premium Horizontal Layout on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {[
            { target: 1000, suffix: '+', label: 'YOUTH REACHED', desc: 'Empowering young minds through education, leadership and innovation.', icon: 'groups' },
            { target: 500, suffix: '+', label: 'BENEFICIARIES SUPPORTED', desc: 'Lives touched through nutrition, education assistance, and community support.', icon: 'volunteer_activism' },
            { target: 50, suffix: '+', label: 'VOLUNTEERS ENGAGED', desc: 'Passionate volunteers contributing time, skills and energy for social good.', icon: 'diversity_1' },
            { target: 4, suffix: '+', label: 'FLAGSHIP INITIATIVES', desc: 'Focused programs driving impact in education, hunger relief, youth development and innovation.', icon: 'rocket_launch' }
          ].map((stat, i) => (
            <div key={i} className="reveal group relative bg-white md:bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-outline-variant/20 md:border-outline-variant/30 flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-5 md:gap-0 transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 overflow-hidden cursor-pointer" style={{ transitionDelay: `${i * 0.1}s` }}>
              
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-t from-primary/5 md:from-transparent to-transparent md:to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 bg-primary/10 md:bg-primary text-primary md:text-white rounded-[1rem] md:rounded-full flex items-center justify-center md:mb-6 shadow-sm md:shadow-lg md:shadow-primary/20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 relative z-10">
                <span className="material-symbols-outlined text-2xl md:text-4xl">{stat.icon}</span>
              </div>
              
              <div className="flex flex-col flex-1 relative z-10">
                <p className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-on-surface md:text-secondary mb-0 md:mb-2 group-hover:text-primary transition-colors duration-500 leading-none">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="font-label-caps text-[10px] md:text-sm text-on-surface-variant md:text-on-surface tracking-widest uppercase font-bold mb-0 group-hover:mb-2 md:group-hover:mb-4 transition-all duration-500 mt-1.5 md:mt-0">{stat.label}</p>
                
                {/* CSS Grid trick for smooth height transition from 0 to auto - Desktop Only */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out hidden md:grid">
                  <div className="overflow-hidden">
                    <p className="text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{stat.desc}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Principles Bar */}
        <div className="reveal border-2 border-primary/20 rounded-2xl p-6 md:p-8 mb-12 bg-white shadow-sm hover:shadow-lg transition-shadow duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-outline-variant/30">
             {[
               { title: 'TRANSPARENCY', desc: 'We operate with openness and honesty in all our actions.', icon: 'verified_user' },
               { title: 'ACCOUNTABILITY', desc: 'We take responsibility for our actions and outcomes.', icon: 'group' },
               { title: 'COMPLIANCE', desc: 'We adhere to the highest standards of legal and ethical compliance.', icon: 'assignment_turned_in' },
               { title: 'IMPACT', desc: 'We measure what matters and drive sustainable change.', icon: 'track_changes' }
             ].map((principle, i) => (
               <div key={i} className="flex gap-4 items-start lg:px-6 group cursor-pointer">
                 <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                   <span className="material-symbols-outlined text-2xl text-primary group-hover:text-white transition-colors duration-500">{principle.icon}</span>
                 </div>
                 <div className="flex-1 pt-1">
                   <p className="font-bold text-sm text-on-surface mb-0 group-hover:mb-2 group-hover:text-primary transition-all duration-500">{principle.title}</p>
                   
                   {/* CSS Grid trick for smooth height transition from 0 to auto */}
                   <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                     <div className="overflow-hidden">
                       <p className="text-xs text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{principle.desc}</p>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="reveal text-center max-w-4xl mx-auto flex items-center justify-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary/50 hidden md:block"></div>
          <p className="text-sm md:text-base text-on-surface-variant italic leading-relaxed">
            Through youth-led initiatives, community engagement programs, and innovative social interventions, Saint & Supper Welfare Foundation continues to create meaningful and measurable impact.
          </p>
          <div className="w-2 h-2 rounded-full bg-primary/50 hidden md:block"></div>
        </div>
        
      </div>
    </section>
  );
}
