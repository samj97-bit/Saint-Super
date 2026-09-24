import React from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function FounderMessage() {
  const { siteData } = useSiteData();
  const { founder } = siteData;

  return (
    <section className="py-section-padding relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-container/40 to-transparent pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">

          {/* Portrait */}
          <div className="md:w-1/3 reveal">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-2xl blur-xl"></div>
              {founder.portrait && (
                <img
                  alt="Founder Portrait"
                  className="relative w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl shadow-2xl border-4 border-white/70 object-cover"
                  src={founder.portrait}
                />
              )}
            </div>
          </div>

          {/* Quote Content */}
          <div className="md:w-2/3 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="relative bg-white/60 backdrop-blur-sm border border-outline-variant/20 rounded-3xl p-8 md:p-12 shadow-xl">
              {/* Decorative gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-3xl"></div>

              {/* Large quote mark */}
              <div className="text-[80px] md:text-[100px] leading-none font-serif text-primary/20 mb-2 select-none" aria-hidden="true">"</div>

              <p className="font-display-hero text-xl md:text-2xl lg:text-3xl mb-10 leading-snug text-on-surface font-semibold">
                {founder.quote}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/20">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {founder.name ? founder.name.charAt(0).toUpperCase() : 'F'}
                </div>
                <div>
                  <p className="font-bold text-on-surface text-base">{founder.name}</p>
                  <p className="text-on-surface-variant text-sm">{founder.title}</p>
                </div>
                <div className="ml-auto">
                  <p className="cursive-signature text-primary text-3xl">{founder.signature}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
