import React from 'react';

export function Report() {
  const pastReports = [
    { year: "2025", title: "A Year of Growth", size: "4.2 MB", rotation: "-rotate-2", offset: "md:translate-x-12" },
    { year: "2024", title: "Building the Foundations", size: "3.8 MB", rotation: "rotate-1", offset: "md:-translate-x-8" },
    { year: "2023", title: "The First 1,000 Days", size: "2.1 MB", rotation: "-rotate-1", offset: "md:translate-x-20" },
    { year: "2022", title: "Where It All Began", size: "1.5 MB", rotation: "rotate-2", offset: "md:-translate-x-4" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] selection:bg-primary/20">
      
      {/* The Letter Hero */}
      <div className="pt-28 md:pt-36 pb-24 max-w-4xl mx-auto px-6 md:px-12 relative">
        {/* Decorative glow accent */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>

        <p className="font-body-md text-on-surface-variant mb-12 tracking-widest uppercase text-sm font-bold flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-primary"></span>
          An Open Letter to Our Supporters
        </p>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-on-surface leading-tight mb-16 tracking-tight">
          We didn't just distribute food this year. <br/>
          <span className="text-primary italic font-serif font-light">We shared 2.4 million moments of connection.</span>
        </h1>

        <div className="prose prose-lg prose-p:font-body-lg prose-p:text-on-surface-variant prose-p:leading-relaxed prose-p:mb-8 max-w-none">
          <p>
            When we look back at 2026, we don't just see spreadsheets and financial audits. We see the faces of the 8,500 children who walked into our learning centers, many of them holding a pencil for the very first time. We see the 45 villages that turned on their lights, breaking decades of darkness.
          </p>
          <p>
            Numbers are cold, but the reality on the ground is profoundly human. Every single dollar you entrusted to us went directly into the hands of our grassroots volunteers—the people waking up at 4 AM to cook in the community kitchens, and the teachers staying late to mentor students.
          </p>
          <p>
            This document isn't just a financial report. It is a testament to what we can build when we decide to take care of each other. 
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-on-surface/10 flex items-center justify-between">
          <div>
            <p className="font-display text-2xl font-black text-on-surface">The 2026 Journal</p>
            <p className="font-body-sm text-on-surface-variant">Complete Financial & Impact Audit</p>
          </div>
          <button className="flex items-center gap-3 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
            <span className="material-symbols-outlined">download</span>
            <span className="hidden md:inline">Download Report</span>
            <span className="md:hidden">Download</span>
          </button>
        </div>
      </div>

      {/* Raw Documentary Image */}
      <div className="w-full px-4 md:px-8 max-w-[100rem] mx-auto">
        <div className="w-full aspect-[21/9] md:aspect-[24/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000" 
            alt="Volunteers cooking together"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12">
            <p className="text-white/90 font-serif italic text-lg md:text-2xl drop-shadow-md">
              "The 4 AM prep team at Annapurna Kitchen."
            </p>
          </div>
        </div>
      </div>

      {/* The Scrapbook Archives */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-32">
        <div className="text-center mb-24">
          <h2 className="font-display text-3xl font-black text-on-surface mb-4">
            The Historical Archives
          </h2>
          <p className="font-serif italic text-on-surface-variant text-lg">
            A look back at our journey, year by year.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16 items-center">
          {pastReports.map((report, index) => (
            <div 
              key={index} 
              className={`w-full max-w-lg bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl border border-[#EAE6DF] flex flex-col md:flex-row md:items-center justify-between group cursor-pointer transition-all duration-500 hover:-translate-y-2 ${report.rotation} ${report.offset} hover:rotate-0`}
            >
              
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest text-primary/60 uppercase border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">{report.year}</span>
                  <span className="text-xs text-on-surface-variant font-medium">PDF • {report.size}</span>
                </div>
                <h3 className="font-display text-2xl font-black text-on-surface leading-tight">
                  {report.title}
                </h3>
              </div>

              <div className="flex items-center justify-start md:justify-end">
                <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined">download</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
