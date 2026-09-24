import React from 'react';

const features = [
  {
    icon: 'public',
    color: 'text-primary',
    bg: 'bg-primary/10',
    title: 'Universal Access',
    desc: 'Breaking geographical barriers to quality welfare services.'
  },
  {
    icon: 'psychology',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    title: 'Sustainable Thinking',
    desc: 'Moving beyond temporary relief to permanent empowerment.'
  },
  {
    icon: 'diversity_3',
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
    title: 'Community First',
    desc: 'Built with communities, not just for them — co-creating every solution.'
  }
];

export function WhyExist() {
  return (
    <section className="py-section-padding bg-transparent">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid md:grid-cols-2 gap-16 items-center">

        {/* Image Side */}
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl opacity-60 pointer-events-none"></div>
          <img
            alt="Community"
            className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl border-4 border-white/60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCiQn1E5_P6-5ukhFWXclYtIU766CAINxn5ZhXUWlBhvp4fUHSMW-L8HfxhEfpX1YmJbGH-iywyqqGr9fHrJHxwFVzNNHfKBQ2knS7HJcB7q6-bsRp-7tcwRpQ0exvHFCSQTQr7fyP9qzvkYGG2T0GBuYzGGe_VWQ7DDPOpl8toYHbHKVCTHml_7MsFN1AMkHJma4NiBF2HJPmT9pkrFyKrDkE_4enUTIrG8Mjhvp_vx0H_kNA1MNNFQ"
            style={{ objectPosition: 'center' }}
          />
          {/* Floating stat badge */}
          <div className="absolute -bottom-5 -right-4 bg-white shadow-xl border border-outline-variant/20 rounded-2xl px-6 py-4 flex flex-col items-center text-center">
            <p className="text-2xl font-black text-primary">5+</p>
            <p className="text-xs text-on-surface-variant font-medium">Years of Impact</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-secondary mb-4">Why We Exist</span>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-black mb-6 text-on-surface leading-tight">
            Bridging the Gap Between Intent and Impact.
          </h2>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant mb-10 leading-relaxed">
            While the world advances at light speed, millions remain anchored in outdated cycles of poverty. We exist to build the infrastructure of opportunity—where talent meets resource, and struggle meets solution.
          </p>
          <div className="space-y-5">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container transition-colors duration-200">
                <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-outlined ${f.color} text-2xl`}>{f.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-base mb-0.5">{f.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
