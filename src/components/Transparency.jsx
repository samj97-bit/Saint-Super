import React from 'react';

export function Transparency() {
  return (
    <section className="py-section-padding overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row shadow-lg rounded-[2rem] overflow-hidden bg-transparent border border-outline-variant/20">
        {/* Left Side: Image */}
        <div className="md:w-1/2 aspect-square relative reveal">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
            alt="Local farm impact" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side: Content */}
        <div className="md:w-1/2 p-margin-desktop flex flex-col justify-center bg-white/40 backdrop-blur-xl reveal" style={{ transitionDelay: '0.2s' }}>
          <h2 className="font-headline-lg text-headline-lg mb-8">Uncompromising Transparency.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            We believe donors deserve to see their impact in high definition. Every rupee is tracked, every outcome is measured, and every story is shared with total honesty.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">check_circle</span> 
              80G Tax Exempted Donations
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">check_circle</span> 
              Quarterly Impact Reports
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">check_circle</span> 
              Direct Beneficiary Verification
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
