import React from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function Gallery() {
  const { siteData } = useSiteData();
  const { gallery } = siteData;
  const { photos, videos, featuredVideo } = gallery;

  return (
    <div className="min-h-screen bg-surface">
      
      {/* Header */}
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-black text-on-surface tracking-tighter mb-6">
          Sights & Sounds
        </h1>
        <p className="font-serif italic text-on-surface-variant text-xl md:text-2xl max-w-3xl mx-auto">
          Unfiltered moments from the ground.
        </p>
      </div>

      {/* Cinematic Featured Video */}
      <div id="videos" className="w-full px-4 md:px-8 max-w-[100rem] mx-auto mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="inline-block border border-on-surface px-4 py-1.5 rounded-full font-label-sm font-bold tracking-widest uppercase mb-8">
              Featured Documentary
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-on-surface tracking-tighter leading-[1.1] mb-8">
              {featuredVideo.title}
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed mb-12 max-w-xl">
              {featuredVideo.description}
            </p>
            <button className="flex items-center gap-4 bg-on-surface text-surface px-8 py-5 rounded-full font-button font-bold text-lg hover:bg-primary hover:text-white transition-all duration-500 hover:scale-105">
              <span className="material-symbols-outlined text-3xl">play_circle</span>
              Watch Full Film
            </button>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group cursor-pointer shadow-2xl">
              <img 
                src={featuredVideo.cover} 
                alt="Featured Video"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms] grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-1000"></div>
              
              {/* Massive Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-primary text-white transition-all duration-700 hover:scale-110">
                  <span className="material-symbols-outlined text-5xl md:text-6xl ml-3">play_arrow</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* The Screening Room (Asymmetrical Video Archives) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-40 border-t border-outline-variant/20 pt-24">
        <h3 className="font-display text-3xl md:text-4xl font-black text-on-surface mb-16 text-center">
          The Screening Room
        </h3>
        
        <div className="flex flex-col gap-24 md:gap-32">
          {videos.map((video, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 group cursor-pointer`}>
              
              {/* Video Thumbnail */}
              <div className="w-full md:w-3/5">
                <div className="aspect-[16/9] rounded-[2rem] overflow-hidden relative shadow-xl group-hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                  <img 
                    src={video.cover} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:bg-primary group-hover:border-primary text-white transition-all duration-500 group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white font-label-sm tracking-widest px-3 py-1.5 rounded-full">
                    {video.duration}
                  </div>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="font-serif italic text-primary text-xl mb-4 opacity-80">Vol. {index + 1}</span>
                <h4 className="font-display text-3xl lg:text-4xl font-black text-on-surface leading-tight mb-6 group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  A raw look into the day-to-day operations and the incredible stories of resilience we capture on the field.
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Documentary Photo Wall (Masonry Layout) */}
      <div id="photos" className="max-w-[100rem] mx-auto px-4 md:px-8 py-24 border-t border-outline-variant/20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-4">
            The Photo Wall
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Unposed, unfiltered moments captured by our volunteers.
          </p>
        </div>

        {/* CSS Columns Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {photos.map((photo, index) => (
            <div key={index} className="break-inside-avoid group overflow-hidden rounded-2xl relative shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in">
              <img 
                src={photo.src} 
                alt={photo.caption}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                loading="lazy"
              />
              
              {/* Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-display text-lg leading-tight mb-2">
                  {photo.caption}
                </p>
                <div className="flex items-center gap-1.5 text-white/80 font-label-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {photo.location}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-20">
          <button className="bg-transparent text-on-surface border border-outline font-button font-bold text-sm px-8 py-4 rounded-full hover:bg-surface-container transition-colors duration-300">
            Load More Photos
          </button>
        </div>
      </div>

    </div>
  );
}
