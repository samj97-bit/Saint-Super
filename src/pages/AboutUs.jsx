import React from 'react';

export function AboutUs() {
  const coreValues = [
    {
      title: "Empathy First",
      description: "We listen before we act, ensuring our solutions are rooted in a deep understanding of the communities we serve.",
      icon: "volunteer_activism",
      color: "from-rose-500/20 to-orange-500/20"
    },
    {
      title: "Radical Transparency",
      description: "We believe in open books and open doors. Every donation is tracked, and every outcome is measured and shared.",
      icon: "visibility",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Sustainable Impact",
      description: "We don't just provide temporary relief; we build systems and infrastructure for long-term community resilience.",
      icon: "eco",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Inclusive Innovation",
      description: "We leverage technology and creative problem-solving to reach those often left behind by traditional systems.",
      icon: "lightbulb",
      color: "from-purple-500/20 to-indigo-500/20"
    }
  ];

  const impactNumbers = [
    { value: "50K+", label: "Lives Touched" },
    { value: "120+", label: "Communities Served" },
    { value: "15", label: "Years of Trust" },
    { value: "$2M+", label: "Aid Distributed" }
  ];

  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-[80vh] bg-gradient-to-bl from-primary/10 to-transparent -z-10 rounded-bl-[100px]"></div>
      <div className="absolute top-40 left-0 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-40 right-10 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[150px] -z-10 opacity-40"></div>

      {/* Advanced Hero Section */}
      <section className="mb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 reveal">
        <div className="w-full md:w-1/2 text-left">
          <div className="inline-block px-5 py-2 rounded-full bg-white border border-primary/20 shadow-sm text-primary font-label-lg text-sm mb-8 transform -rotate-2 hover:rotate-0 transition-transform">
            ✨ Our Origin Story
          </div>
          <h1 className="font-display-hero text-display-md md:text-display-lg text-on-surface mb-8 tracking-tight leading-tight">
            Empowering Communities,<br/>
            <span className="text-primary italic relative">
              Transforming Lives
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-secondary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
              </svg>
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-10">
            We are a collective of dreamers, doers, and dedicated social workers committed to breaking the cycle of poverty and inequality. Our journey began with a simple belief: that everyone deserves the opportunity to thrive.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-full font-button shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
            Join Our Mission
          </button>
        </div>
        
        {/* Hero Image Collage */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] hidden md:block">
           <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl z-10 transform hover:scale-105 transition-transform duration-700">
             <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80" alt="Community impact" className="w-full h-full object-cover" />
           </div>
           <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-surface transform -translate-y-10 hover:translate-y-0 hover:scale-105 transition-all duration-700">
             <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="Children smiling" className="w-full h-full object-cover" />
           </div>
           {/* Decorative badge */}
           <div className="absolute top-1/2 left-0 z-30 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 transform -translate-x-1/2 animate-bounce-slow">
              <span className="material-symbols-outlined text-secondary text-3xl">public</span>
              <div>
                <p className="font-headline-sm text-sm">Global Reach</p>
                <p className="text-xs text-on-surface-variant">120+ Communities</p>
              </div>
           </div>
        </div>
      </section>

      {/* Our Story - Left Image, Right Text */}
      <section className="mb-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 reveal blur-reveal group">
          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            {/* Organic shape background */}
            <div className="absolute inset-0 bg-secondary/20 rounded-[4rem] rounded-tl-none transform transition-transform duration-700 group-hover:-translate-x-4 group-hover:translate-y-4 -z-10"></div>
            <div className="relative h-[450px] md:h-[550px] rounded-[4rem] rounded-br-none overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80" 
                alt="Volunteers planting" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-headline-lg text-on-surface mb-6">How It All Started</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mb-10 rounded-full"></div>
            <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg mb-6">
              In 2010, witnessing the stark contrast between urban development and rural neglect, a small group of passionate students decided to take action. What started as weekend tutoring sessions under a banyan tree quickly evolved into a powerful movement.
            </p>
            <div className="p-6 bg-surface-container rounded-2xl border-l-4 border-primary mb-6">
              <p className="font-body-lg italic text-on-surface">
                "We didn't set out to start an NGO. We just wanted to help the kids in our neighborhood read. The community's response dictated everything else."
              </p>
            </div>
            <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg">
              Today, we operate in over 120 communities, but our core philosophy remains unchanged: real change happens on the ground, hand-in-hand with the people we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values - Snap Scroll for Mobile */}
      <section className="mb-40 px-0 md:px-12 max-w-7xl mx-auto">
        <div className="px-6 md:px-0 flex items-center justify-center gap-6 mb-16 reveal">
          <div className="h-px w-16 bg-primary/30 hidden md:block"></div>
          <h2 className="font-display text-headline-lg text-center text-on-surface">Our Core Values</h2>
          <div className="h-px w-16 bg-primary/30 hidden md:block"></div>
        </div>

        {/* Horizontal scroll container on mobile, grid on PC */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 md:gap-10 pb-12 px-6 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {coreValues.map((value, idx) => (
            <div key={idx} className="reveal min-w-[85vw] md:min-w-0 snap-center shrink-0 bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 group relative overflow-hidden flex flex-col h-full">
              
              {/* Dynamic hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0`}></div>
              
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="font-headline-sm text-title-lg text-on-surface mb-4">{value.title}</h3>
                <p className="text-on-surface-variant font-body-md text-base leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Minimal decorative line */}
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Impact Numbers */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="bg-surface-container-highest text-on-surface rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl reveal group">
          
          {/* Animated Background Gradients inside the card */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-colors duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px] -z-0 -translate-x-1/3 translate-y-1/3 group-hover:bg-secondary/20 transition-colors duration-1000"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-20">
              <span className="font-label-lg uppercase tracking-widest text-primary mb-4 block">The Results</span>
              <h2 className="font-display text-headline-lg">Our Impact in Numbers</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 text-center divide-x-0 md:divide-x divide-outline-variant/20">
              {impactNumbers.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center">
                  <p className="font-display-hero text-[3rem] md:text-[4.5rem] leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary drop-shadow-sm group-hover:scale-110 transition-transform duration-700">
                    {stat.value}
                  </p>
                  <p className="font-label-lg text-on-surface-variant uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
