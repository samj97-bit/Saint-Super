import React, { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function Contact() {
  const [sent, setSent] = useState(false);
  const { siteData, addSubmission } = useSiteData();
  const { contact } = siteData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    addSubmission('inbox', {
      name: `${fd.get('firstName')} ${fd.get('lastName')}`,
      email: fd.get('email'),
      subject: fd.get('subject'),
      message: fd.get('message'),
    });
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20">

      {/* Cinematic Full-Bleed Hero */}
      <div className="relative w-full h-52 md:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2500"
          alt="Community volunteers"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end pb-8 px-8 md:px-16">
          <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            We'd love to hear<br className="hidden md:block" /> from you.
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <p className="font-body-lg text-on-surface-variant text-lg mb-12 leading-relaxed max-w-md">
              Whether you have a question about volunteering, donations, or want to partner with us, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              {[
                { icon: 'location_on', title: 'Main Kitchen', lines: contact.address.split(', ') },
                { icon: 'call', title: 'Phone', lines: [contact.phone, `Available ${contact.officeHours}`] },
                { icon: 'mail', title: 'Email', lines: [contact.email] }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-surface-container/60 border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm mb-1">{item.title}</p>
                    {item.lines.map((l, j) => (
                      <p key={j} className="text-on-surface-variant text-sm leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="relative bg-white rounded-[2rem] shadow-xl border border-outline-variant/20 overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary"></div>

              <div className="p-8 md:p-12">
                <h3 className="font-display text-3xl font-bold text-on-surface mb-8">Send us a message</h3>

                {!sent ? (
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="text-xs font-bold text-on-surface-variant tracking-widest uppercase">First Name</label>
                        <input type="text" id="firstName" name="firstName" required placeholder="Jane" className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-on-surface" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-xs font-bold text-on-surface-variant tracking-widest uppercase">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required placeholder="Doe" className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-on-surface" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-on-surface-variant tracking-widest uppercase">Email Address</label>
                      <input type="email" id="email" name="email" required placeholder="jane@example.com" className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-on-surface" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-bold text-on-surface-variant tracking-widest uppercase">Subject</label>
                      <div className="relative">
                        <select id="subject" name="subject" required defaultValue="" className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-on-surface appearance-none cursor-pointer">
                          <option value="" disabled>Select a topic</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="donate">Making a Donation</option>
                          <option value="partner">Corporate Partnerships</option>
                          <option value="other">General Inquiry</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                          <span className="material-symbols-outlined text-[20px]">expand_more</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-bold text-on-surface-variant tracking-widest uppercase">Message</label>
                      <textarea id="message" name="message" required rows="4" placeholder="How can we help you?" className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-on-surface resize-y"></textarea>
                    </div>

                    <button type="submit" className="mt-2 w-full bg-primary text-white py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95">
                      <span className="material-symbols-outlined text-xl">send</span>
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                    </div>
                    <h4 className="font-bold text-2xl text-on-surface">Message Sent!</h4>
                    <p className="text-on-surface-variant max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="mt-4 text-primary font-bold text-sm hover:underline">Send another message</button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

