import React from 'react';

export function Challenges() {
  return (
    <section className="py-section-padding bg-transparent max-w-container-max mx-auto px-6 md:px-margin-desktop text-center" id="challenges">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-secondary mb-4 reveal">The Hard Truth</span>
        <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl font-black mb-14 reveal text-on-surface leading-tight">
          The Challenge is Stark.<br />Our Resolve is Absolute.
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left reveal">

          {/* Reality Card */}
          <div className="relative overflow-hidden rounded-2xl border border-error/20 bg-error/5 backdrop-blur-sm p-8 group hover:shadow-xl hover:border-error/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-error/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-error text-2xl">warning</span>
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-error mb-4">THE REALITY</p>
            <p className="font-body-lg text-lg italic text-on-surface leading-relaxed">
              "Inequality is not just a lack of wealth; it's a structural denial of potential that traps generations in silence."
            </p>
          </div>

          {/* Response Card */}
          <div className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-secondary/5 backdrop-blur-sm p-8 group hover:shadow-xl hover:border-secondary/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">bolt</span>
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-4">THE RESPONSE</p>
            <p className="font-body-lg text-lg text-on-surface leading-relaxed">
              Saint &amp; Supper deploys agile, high-tech frameworks to deliver essential services where traditional institutions falter.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
