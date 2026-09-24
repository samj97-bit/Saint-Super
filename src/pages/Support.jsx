import React, { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

export function Support() {
  const { addSubmission } = useSiteData();
  const [donationType, setDonationType] = useState('monthly'); // 'monthly' or 'once'
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donated, setDonated] = useState(false);

  const presetAmounts = [500, 1000, 2500, 5000];

  const handlePresetClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(null); // Clear preset selection
  };

  const handleDonation = (e) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : amount;
    if (!finalAmount) return;
    
    addSubmission('donation', {
      donorName: donorName || 'Anonymous',
      email: donorEmail || 'N/A',
      amount: finalAmount,
      donationType: donationType
    });
    setDonated(true);
  };

  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-full h-[70vh] bg-gradient-to-bl from-secondary/10 via-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-40 left-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[150px] -z-10 opacity-50"></div>

      {/* Hero & Donation Widget Section */}
      <section className="mb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 reveal">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-lg text-sm mb-6 border border-secondary/20">
            <span className="material-symbols-outlined text-[16px]">favorite</span>
            Support Our Mission
          </div>
          <h1 className="font-display-hero text-display-md md:text-display-lg text-on-surface mb-6 tracking-tight leading-tight">
            Your Contribution <br className="hidden md:block"/>
            <span className="text-secondary italic">Creates Ripples.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
            Every Rupee you give goes directly towards funding education, healthcare, and sustainable infrastructure for communities that need it most. Join us in building a future where everyone has the opportunity to thrive.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <p className="font-body-md">85% of funds go directly to programs.</p>
            </div>
            <div className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <p className="font-body-md">All donations are tax-deductible under Section 80G.</p>
            </div>
            <div className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <p className="font-body-md">Secure, encrypted payment processing.</p>
            </div>
          </div>
        </div>

        {/* Donation Widget */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform translate-x-4 translate-y-4 -z-10"></div>
          <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-10 shadow-2xl border border-white">
            {!donated ? (
              <form onSubmit={handleDonation}>
                <h3 className="font-headline-sm text-headline-sm text-center mb-8 text-on-surface">Make a Donation</h3>
                
                {/* Toggle Monthly/Once */}
                <div className="flex bg-surface-container rounded-full p-1 mb-8 relative">
                  <button 
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 font-label-lg text-sm rounded-full transition-all duration-300 z-10 ${donationType === 'monthly' ? 'text-white' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    Give Monthly
                  </button>
                  <button 
                    type="button"
                    onClick={() => setDonationType('once')}
                    className={`flex-1 py-3 font-label-lg text-sm rounded-full transition-all duration-300 z-10 ${donationType === 'once' ? 'text-white' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    Give Once
                  </button>
                  {/* Toggle Slider Background */}
                  <div 
                    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-transform duration-300 ease-out z-0`}
                    style={{ transform: donationType === 'monthly' ? 'translateX(0)' : 'translateX(100%)' }}
                  ></div>
                </div>

                {/* Amount Selection Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {presetAmounts.map((val) => (
                    <button 
                      type="button"
                      key={val}
                      onClick={() => handlePresetClick(val)}
                      className={`py-4 rounded-2xl font-display text-title-lg transition-all duration-300 border-2 ${amount === val ? 'bg-primary/10 border-primary text-primary' : 'bg-surface border-outline-variant/20 text-on-surface hover:border-primary/50'}`}
                    >
                      ₹{val}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                <div className="relative mb-6">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 font-display text-title-lg text-on-surface-variant">₹</span>
                  <input 
                    type="number" 
                    placeholder="Custom Amount" 
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full bg-surface border-2 border-outline-variant/20 rounded-2xl py-4 pl-12 pr-6 font-display text-title-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/50"
                  />
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <input 
                    type="text" 
                    placeholder="Full Name (Optional)" 
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-surface border border-outline-variant/40 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-body-md"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address (Optional)" 
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full bg-surface border border-outline-variant/40 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-body-md"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-secondary text-white py-4 rounded-2xl font-button text-button shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-secondary/90 transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">volunteer_activism</span>
                  Donate {customAmount ? `₹${customAmount}` : (amount ? `₹${amount}` : '')}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                </div>
                <h4 className="font-bold text-2xl text-on-surface">Thank You!</h4>
                <p className="text-on-surface-variant">Your generous donation has been securely processed and recorded.</p>
                <button onClick={() => setDonated(false)} className="mt-4 text-primary font-bold text-sm hover:underline">Make another donation</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="mb-32 px-6 md:px-12 max-w-7xl mx-auto text-center reveal">
        <h2 className="font-display text-headline-lg text-on-surface mb-4">Where Your Money Goes</h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
          We believe in radical transparency. Here is exactly how every Rupee you donate is allocated to create maximum impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/20 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="font-display-hero text-[4rem] text-primary mb-2">85%</h3>
            <p className="font-headline-sm text-title-lg mb-4 text-on-surface">Direct Programs</p>
            <p className="font-body-md text-on-surface-variant">Funds directly allocated to education materials, healthcare clinics, and community infrastructure projects.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/20 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="font-display-hero text-[4rem] text-secondary mb-2">10%</h3>
            <p className="font-headline-sm text-title-lg mb-4 text-on-surface">Operations</p>
            <p className="font-body-md text-on-surface-variant">Essential logistical support, transport, and basic salaries for our core on-ground staff managing the projects.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/20 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="font-display-hero text-[4rem] text-primary/70 mb-2">5%</h3>
            <p className="font-headline-sm text-title-lg mb-4 text-on-surface">Fundraising</p>
            <p className="font-body-md text-on-surface-variant">Reinvested into outreach, awareness campaigns, and digital infrastructure to sustain and grow our mission.</p>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl reveal">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-headline-lg mb-6">Other Ways to Help</h2>
            <p className="font-body-lg text-white/80 leading-relaxed mb-12">
              Money isn't the only way to make a difference. Your time, skills, and voice are just as valuable to us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-2xl p-6 text-left transition-colors duration-300 group">
                <span className="material-symbols-outlined text-3xl mb-4 text-secondary-fixed group-hover:scale-110 transition-transform">handshake</span>
                <h4 className="font-headline-sm text-title-lg mb-2">Volunteer With Us</h4>
                <p className="text-sm text-white/70">Join our on-ground teams or help us remotely with digital skills.</p>
              </button>
              
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-2xl p-6 text-left transition-colors duration-300 group">
                <span className="material-symbols-outlined text-3xl mb-4 text-secondary-fixed group-hover:scale-110 transition-transform">campaign</span>
                <h4 className="font-headline-sm text-title-lg mb-2">Spread the Word</h4>
                <p className="text-sm text-white/70">Follow us on social media and share our campaigns with your network.</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
