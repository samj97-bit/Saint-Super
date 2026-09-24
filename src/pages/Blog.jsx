import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

export function Blog() {
  const { siteData } = useSiteData();
  const { featuredPost, articles } = siteData;


  return (
    <div className="min-h-screen bg-surface">
      
      {/* True Full-Bleed Panoramic Banner */}
      <div className="w-full pt-16 md:pt-20">
        <Link to="#" className="block w-full h-[250px] md:h-[350px] overflow-hidden relative group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
          <img 
            src={featuredPost.image} 
            alt={featuredPost.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
          />
        </Link>
      </div>

      {/* Editorially Arranged Text */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 mb-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          
          {/* Left Column: Meta & Title */}
          <div className="w-full md:w-3/5">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary font-label-sm font-bold tracking-widest uppercase py-1.5 px-4 rounded-full">
                Featured
              </span>
              <span className="text-on-surface-variant font-label-sm font-bold uppercase tracking-wider">
                {featuredPost.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:block"></span>
              <span className="text-on-surface-variant font-body-sm hidden sm:block">
                {featuredPost.date}
              </span>
            </div>
            
            <Link to="#" className="block group">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-on-surface leading-tight group-hover:text-primary transition-colors duration-300">
                {featuredPost.title}
              </h1>
            </Link>
          </div>

          {/* Right Column: Excerpt & Link */}
          <div className="w-full md:w-2/5 md:pt-14">
            <p className="font-body-lg text-on-surface-variant text-lg md:text-xl leading-relaxed mb-8">
              {featuredPost.excerpt}
            </p>
            <Link to="#" className="inline-flex items-center gap-2 font-button font-bold text-base text-on-surface hover:text-primary transition-colors border-b-2 border-primary pb-1 group">
              Read Full Story <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Section Divider */}
        <div className="flex items-end justify-between border-b border-outline-variant/20 pb-4 mb-8">
          <h3 className="font-display text-3xl font-black text-on-surface">
            Latest Articles
          </h3>
          <span className="font-body-sm text-on-surface-variant hidden md:block">
            Showing all recent updates
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', 'Impact Story', 'ASTRYX Project', 'Opinion', 'Event', 'Volunteer Diary', 'Guide', 'Team Spotlight'].map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border transition-all duration-200 ${
                i === 0
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-surface border-outline-variant/30 text-on-surface-variant hover:border-primary/50 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article, index) => (
            <Link key={index} to="#" className="group flex flex-col h-full">
              
              {/* Thumbnail */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className="text-primary font-label-sm font-bold uppercase tracking-wider">{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-on-surface-variant font-body-sm">{article.date}</span>
              </div>

              {/* Title & Excerpt */}
              <h4 className="font-display text-2xl font-black text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                {article.title}
              </h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed line-clamp-3 mb-4 flex-grow">
                {article.excerpt}
              </p>

              {/* Read More Link */}
              <div className="mt-auto inline-flex items-center gap-2 font-button font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                Read Article
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center justify-center gap-2 bg-primary text-white border border-primary font-bold text-sm px-10 py-4 rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
            Load More Stories
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
        </div>

      </div>
    </div>
  );
}
