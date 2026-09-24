import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

export function JoinUs() {
  const location = useLocation();
  const { addSubmission } = useSiteData();
  const [activeTab, setActiveTab] = useState('volunteer'); // 'volunteer' or 'partner'
  const [submittedVol, setSubmittedVol] = useState(false);
  const [submittedPart, setSubmittedPart] = useState(false);

  useEffect(() => {
    if (location.hash === '#partner') {
      setActiveTab('partner');
    } else if (location.hash === '#volunteer') {
      setActiveTab('volunteer');
    }
  }, [location.hash]);

  const handleVolunteer = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    addSubmission('volunteer', {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      interest: fd.get('interest'),
      message: fd.get('message')
    });
    setSubmittedVol(true);
  };

  const handlePartner = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    addSubmission('partner', {
      orgName: fd.get('orgName'),
      contactPerson: fd.get('contactPerson'),
      email: fd.get('email'),
      partnerType: fd.get('partnerType'),
      message: fd.get('message')
    });
    setSubmittedPart(true);
  };

  return (
    <div className="py-24 md:py-32 relative overflow-hidden min-h-screen">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent -z-10 rounded-br-[200px]"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[150px] -z-10 opacity-60"></div>
      
      {/* Hero Section */}
      <section className="mb-20 px-6 md:px-12 max-w-5xl mx-auto text-center reveal">
        <h1 className="font-display-hero text-display-md md:text-display-lg text-on-surface mb-6 tracking-tight">
          Let's Build the <span className="text-primary italic">Future</span> Together
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Whether you want to lend a hand on the ground or bring your organization's resources to the table, there is a place for you here. Choose how you want to get involved below.
        </p>
      </section>

      {/* Main Content - Tabs & Forms */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto">
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-16 reveal">
          <div className="inline-flex bg-surface-container rounded-full p-2 shadow-inner border border-outline-variant/10">
            <button 
              onClick={() => setActiveTab('volunteer')}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-label-lg text-sm md:text-base transition-all duration-300 ${activeTab === 'volunteer' ? 'bg-primary text-white shadow-lg scale-105' : 'text-on-surface-variant hover:text-on-surface hover:bg-white/50'}`}
            >
              <span className="material-symbols-outlined text-[20px]">front_hand</span>
              Volunteer With Us
            </button>
            <button 
              onClick={() => setActiveTab('partner')}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-label-lg text-sm md:text-base transition-all duration-300 ${activeTab === 'partner' ? 'bg-secondary text-white shadow-lg scale-105' : 'text-on-surface-variant hover:text-on-surface hover:bg-white/50'}`}
            >
              <span className="material-symbols-outlined text-[20px]">handshake</span>
              Partner With Us
            </button>
          </div>
        </div>

        {/* Dynamic Form Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/50 relative overflow-hidden reveal blur-reveal">
          
          {/* Internal decorative gradients */}
          <div className={`absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full blur-[100px] -z-10 transition-colors duration-1000 ${activeTab === 'volunteer' ? 'bg-primary/10' : 'bg-secondary/10'} translate-x-1/3 -translate-y-1/3`}></div>

          {/* VOLUNTEER FORM */}
          {activeTab === 'volunteer' && (
            <div className="animate-fade-in-up">
              <div className="mb-12">
                <h2 className="font-display text-headline-md text-primary mb-4">Become a Volunteer</h2>
                <p className="font-body-md text-on-surface-variant max-w-2xl">
                  Give your time and skills to make a direct impact. From teaching children to assisting in healthcare camps, our volunteers are the backbone of our ground operations.
                </p>
              </div>

              {!submittedVol ? (
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleVolunteer}>
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Full Name</label>
                    <input type="text" name="name" required placeholder="Jane Doe" className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Email Address</label>
                    <input type="email" name="email" required placeholder="jane@example.com" className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Phone Number</label>
                    <input type="tel" name="phone" placeholder="+91 98765 43210" className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  {/* Interest Area */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Area of Interest</label>
                    <select name="interest" required defaultValue="" className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                      <option value="" disabled>Select an area</option>
                      <option value="education">Education & Tutoring</option>
                      <option value="healthcare">Healthcare & Sanitization</option>
                      <option value="logistics">Field Logistics & Events</option>
                      <option value="digital">Digital Marketing & Tech</option>
                    </select>
                  </div>
                  {/* Message */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Why do you want to join us?</label>
                    <textarea name="message" rows="4" placeholder="Tell us a bit about yourself..." className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                  </div>
                  
                  {/* Submit */}
                  <div className="md:col-span-2 mt-4">
                    <button type="submit" className="w-full md:w-auto bg-primary text-white px-12 py-4 rounded-full font-button text-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      Submit Volunteer Application
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                  </div>
                  <h4 className="font-bold text-2xl text-on-surface">Application Received!</h4>
                  <p className="text-on-surface-variant">Thank you for stepping up. Our volunteer coordinator will contact you shortly.</p>
                  <button onClick={() => setSubmittedVol(false)} className="mt-4 text-primary font-bold text-sm hover:underline">Submit another</button>
                </div>
              )}
            </div>
          )}

          {/* PARTNER FORM */}
          {activeTab === 'partner' && (
            <div className="animate-fade-in-up">
              <div className="mb-12">
                <h2 className="font-display text-headline-md text-secondary mb-4">Become a Partner</h2>
                <p className="font-body-md text-on-surface-variant max-w-2xl">
                  Amplify your organization's CSR impact by partnering with us. We collaborate with corporations, academic institutions, and other NGOs to scale our sustainable initiatives.
                </p>
              </div>

              {!submittedPart ? (
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handlePartner}>
                  {/* Org Name */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Organization Name</label>
                    <input type="text" name="orgName" required placeholder="Acme Corp / Institute of Tech" className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md focus:outline-none focus:border-secondary transition-colors" />
                  </div>
                  {/* Contact Person */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Contact Person</label>
                    <input type="text" name="contactPerson" required placeholder="John Smith" className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md focus:outline-none focus:border-secondary transition-colors" />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Official Email</label>
                    <input type="email" name="email" required placeholder="john@acmecorp.com" className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md focus:outline-none focus:border-secondary transition-colors" />
                  </div>
                  {/* Partnership Type */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Type of Partnership</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="flex items-center gap-3 p-4 bg-surface border-2 border-outline-variant/20 rounded-2xl cursor-pointer hover:border-secondary/50 transition-colors">
                        <input type="radio" name="partnerType" value="CSR Funding" required className="w-5 h-5 accent-secondary" />
                        <span className="font-body-md">CSR Funding</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 bg-surface border-2 border-outline-variant/20 rounded-2xl cursor-pointer hover:border-secondary/50 transition-colors">
                        <input type="radio" name="partnerType" value="Knowledge / Tech" required className="w-5 h-5 accent-secondary" />
                        <span className="font-body-md">Knowledge / Tech</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 bg-surface border-2 border-outline-variant/20 rounded-2xl cursor-pointer hover:border-secondary/50 transition-colors">
                        <input type="radio" name="partnerType" value="On-ground Collaboration" required className="w-5 h-5 accent-secondary" />
                        <span className="font-body-md">On-ground Collaboration</span>
                      </label>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-label-lg text-sm text-on-surface pl-2">Partnership Proposal / Thoughts</label>
                    <textarea name="message" rows="4" placeholder="How can we work together to create impact?" className="bg-surface border-2 border-outline-variant/20 rounded-2xl px-6 py-4 font-body-md focus:outline-none focus:border-secondary transition-colors resize-none"></textarea>
                  </div>
                  
                  {/* Submit */}
                  <div className="md:col-span-2 mt-4">
                    <button type="submit" className="w-full md:w-auto bg-secondary text-white px-12 py-4 rounded-full font-button text-button shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      Send Partnership Request
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-secondary text-5xl">handshake</span>
                  </div>
                  <h4 className="font-bold text-2xl text-on-surface">Proposal Sent!</h4>
                  <p className="text-on-surface-variant">We appreciate your interest in collaborating. Our partnerships team will review this and get back to you.</p>
                  <button onClick={() => setSubmittedPart(false)} className="mt-4 text-secondary font-bold text-sm hover:underline">Submit another</button>
                </div>
              )}
            </div>
          )}

        </div>
      </section>
      
      {/* Simple inline CSS for fade-in animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
