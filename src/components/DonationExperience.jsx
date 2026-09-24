import React, { useState } from 'react';

export function DonationExperience() {
  const [selectedAmount, setSelectedAmount] = useState('₹2,000'); // Pre-select a popular amount

  const handleSelect = (e, amount) => {
    setSelectedAmount(amount);
  };

  const getImpactData = () => {
    switch (selectedAmount) {
      case '₹500': return {
        text: "Provides nutritious meals for 5 children for an entire week.",
        icon: "restaurant"
      };
      case '₹2,000': return {
        text: "Covers a month of vocational training for an underprivileged youth.",
        icon: "school"
      };
      case '₹5,000': return {
        text: "Funds a digital classroom kit for a remote village school.",
        icon: "computer"
      };
      case 'Custom': return {
        text: "Every contribution, no matter the size, fuels our collective mission.",
        icon: "volunteer_activism"
      };
      default: return {
        text: "Select an amount to see the impact you can create today.",
        icon: "favorite"
      };
    }
  };

  const impact = getImpactData();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="donate">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center reveal">
        <h2 className="font-display text-4xl md:text-5xl font-black mb-6 text-on-surface tracking-tight">
          Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Catalyst</span>
        </h2>
        <p className="font-body-lg text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Your generosity translates into real-world change. Choose how you want to make a difference today.
        </p>

        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 relative group">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {['₹500', '₹2,000', '₹5,000', 'Custom'].map(amount => {
              const isSelected = selectedAmount === amount;
              return (
                <button
                  key={amount}
                  onClick={(e) => handleSelect(e, amount)}
                  className={`relative overflow-hidden py-6 rounded-2xl font-display text-xl md:text-2xl font-bold transition-all duration-300 ${
                    isSelected 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105 border border-primary/50' 
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high border border-outline-variant/10 hover:shadow-md'
                  }`}
                >
                  {amount}
                </button>
              );
            })}
          </div>

          <div className="bg-surface-container-low rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-center gap-6 transform transition-all duration-500 ease-out border border-outline-variant/10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl text-primary animate-pulse">{impact.icon}</span>
            </div>
            <p className="font-body-lg text-xl md:text-2xl text-on-surface-variant font-medium text-center md:text-left">
              {impact.text}
            </p>
          </div>

          <button className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-5 font-button font-bold text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 mx-auto w-full md:w-auto">
            <span className="material-symbols-outlined text-xl">favorite</span>
            Proceed to Secure Donation
          </button>
        </div>
      </div>
    </section>
  );
}
