import React from 'react';

const partners = ['ETHOS CORP', 'LEGACY BANK', 'GLOBAL REACH', 'NEXUS TECH', 'FOUNDATION X', 'UNITY FUND', 'APEX GROUP'];

export function Partners() {
  return (
    <section className="py-14 border-y border-outline-variant/20 overflow-hidden bg-surface-container-low/40">
      <div className="text-center mb-8">
        <span className="inline-block bg-surface-container text-on-surface-variant text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-outline-variant/30">
          Our Partners &amp; Supporters
        </span>
      </div>

      {/* Marquee with gradient fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--tw-gradient-from, #f6f3f2), transparent)' }}></div>
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--tw-gradient-from, #f6f3f2), transparent)' }}></div>

        <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          <div className="flex space-x-16 px-10 items-center">
            {[...partners, ...partners].map((name, i) => (
              <span key={i} className="text-xl font-black text-on-surface-variant/30 tracking-widest hover:text-on-surface-variant/60 transition-colors duration-300 cursor-default uppercase select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
