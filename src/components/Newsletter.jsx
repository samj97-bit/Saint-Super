import React, { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function Newsletter() {
  const { addSubmission } = useSiteData();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      addSubmission('newsletter', {
        email: email.trim(),
        message: 'Subscribed to Newsletter'
      });
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-surface-container-highest relative overflow-hidden py-8 md:py-10 border-t border-outline-variant/20">
      {/* Abstract dotted background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none text-on-surface"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text */}
        <div className="md:w-[55%]">
          <h2 className="font-display text-[26px] md:text-[32px] font-bold text-on-surface leading-snug">
            Stay up-to-date with all our latest <br className="hidden md:block"/> developments and work.
          </h2>
        </div>

        {/* Right Side: Form or Success */}
        <div className="md:w-[45%] w-full flex flex-col sm:flex-row gap-3 items-center justify-start md:justify-end">
          {!subscribed ? (
            <>
              <input
                type="email"
                placeholder="Your Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                className="w-full sm:w-[300px] px-5 py-3 border border-outline-variant rounded focus:outline-none focus:ring-1 focus:ring-primary text-on-surface bg-surface placeholder-on-surface-variant font-body-md"
              />
              <button
                onClick={handleSubscribe}
                className="w-full sm:w-auto bg-primary text-white px-8 py-3 font-bold rounded hover:shadow-md hover:bg-primary/90 transition-all whitespace-nowrap font-button"
              >
                Subscribe Now
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-full animate-pulse-once">
              <span className="material-symbols-outlined text-xl">check_circle</span>
              <span className="font-bold text-sm">You're subscribed! Thank you 🎉</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

