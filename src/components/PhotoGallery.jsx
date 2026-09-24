import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function PhotoGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      caption: "Early morning prep at the Annapurna community kitchen.",
      location: "New Delhi, India"
    },
    {
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
      caption: "Fresh produce delivery from local farmers.",
      location: "Punjab, India"
    },
    {
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
      caption: "Volunteers organizing surplus food drives.",
      location: "Mumbai, India"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      caption: "Installing the first solar grid in the village.",
      location: "Jharkhand, India"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      caption: "A student reading at an Udaan center.",
      location: "Bihar, India"
    },
    {
      src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600",
      caption: "A teacher's dedication.",
      location: "Pune, India"
    }
  ];

  const togglePhotoInfo = (index) => {
    if (activePhotoIndex === index) {
      setActivePhotoIndex(null);
    } else {
      setActivePhotoIndex(index);
    }
  };

  return (
    <section className="py-section-padding bg-transparent">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal gap-4">
          <Link to="/gallery" className="group">
            <h2 className="font-headline-md text-headline-md group-hover:text-primary transition-colors flex items-center gap-2">
              Moments of Hope
              <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all">arrow_forward</span>
            </h2>
          </Link>
          <Link to="/gallery" className="font-button text-primary hover:text-secondary transition-colors flex items-center gap-1 font-bold">
            View full gallery <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <div 
              key={idx} 
              className="reveal overflow-hidden rounded-lg shadow-sm cursor-pointer group relative"
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onClick={() => togglePhotoInfo(idx)}
            >
              <img alt={`Gallery ${idx + 1}`} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" src={photo.src} />
              
              {/* Dark Overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${activePhotoIndex === idx ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Uplift Text Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${activePhotoIndex === idx ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
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
      </div>
    </section>
  );
}
