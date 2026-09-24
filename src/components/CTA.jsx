import React from 'react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" id="join">
      {/* Rich dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#1a2e44] to-[#0d1b2a]"></div>

      {/* Decorative glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
        <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Join The Movement
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
          Small Actions.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed to-primary-fixed">Extraordinary Impact.</span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          The foundation is built on the belief that collective kindness is the most powerful force in the universe. Join as a volunteer, a partner, or a donor.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/join#volunteer" className="animate-heartbeat inline-flex items-center justify-center gap-2 bg-white text-[#0d1b2a] px-10 py-4 font-bold text-base rounded-full hover:bg-secondary-fixed hover:text-[#0d1b2a] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95">
            <span className="material-symbols-outlined text-xl">volunteer_activism</span>
            Volunteer With Us
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-10 py-4 font-bold text-base rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm active:scale-95">
            <span className="material-symbols-outlined text-xl">mail</span>
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
