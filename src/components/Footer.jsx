import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

export function Footer() {
  const { siteData } = useSiteData();
  const { footer, contact } = siteData;

  return (
    <footer className="bg-surface relative overflow-hidden pt-12 border-t border-outline-variant/10 mt-auto">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Categorized Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-8 relative z-10">

          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">volunteer_activism</span>
              <span className="font-headline-sm font-bold tracking-tight text-primary">Saint &amp; Supper</span>
            </div>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
              {footer.tagline}
            </p>

            {/* Address */}
            <div className="mb-6 flex items-start gap-2 text-on-surface-variant text-sm">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">location_on</span>
              <p className="leading-relaxed">
                {footer.address.split(',').map((line, i) => (
                  <React.Fragment key={i}>
                    {line.trim()}
                    {i < footer.address.split(',').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* Social Icons (YouTube, LinkedIn, Instagram, Twitter, Facebook) */}
            <div className="flex flex-wrap gap-2">
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-[#FF0000]/10 transition-colors border border-outline-variant/20 text-[#FF0000]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-[#0A66C2]/10 transition-colors border border-outline-variant/20 text-[#0A66C2]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-[#E1306C]/10 transition-colors border border-outline-variant/20 text-[#E1306C]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" aria-label="Twitter / X" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-[#1DA1F2]/10 transition-colors border border-outline-variant/20 text-[#1DA1F2]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-[#1877F2]/10 transition-colors border border-outline-variant/20 text-[#1877F2]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          {/* Explore More */}
          <div>
            <h4 className="font-label-lg font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Explore More</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/leadership" className="hover:text-primary transition-colors">Leadership</Link></li>
              <li><Link to="/join" className="hover:text-primary transition-colors">Volunteer With Us</Link></li>
              <li><Link to="/join" className="hover:text-primary transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="font-label-lg font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Initiatives</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant text-sm">
              <li><Link to="/initiatives#conclave" className="hover:text-primary transition-colors">Conclave</Link></li>
              <li><Link to="/initiatives#astryx" className="hover:text-primary transition-colors">ASTRYX</Link></li>
              <li><Link to="/initiatives#udaan" className="hover:text-primary transition-colors">Udaan</Link></li>
              <li><Link to="/initiatives#annapurna" className="hover:text-primary transition-colors">Annapurna</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-label-lg font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Important Links</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Annual Reports</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* UPI Payment Block - Centered and Styled exactly like the image */}
          <div className="flex flex-col items-center justify-center text-center col-span-1 md:col-span-2 lg:col-span-1">
            <h5 className="font-headline-sm font-bold text-on-surface text-[15px] mb-3">Pay using any UPI Apps</h5>

            {/* Payment Logos row */}
            <div className="flex gap-3 items-center justify-center mb-5">

              {/* HDFC */}
              <div className="w-5 h-5 bg-[#ED1C24] flex items-center justify-center rounded-[2px] p-[2px]" title="HDFC">
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#004B8D]"></div>
                </div>
              </div>

              {/* GPay */}
              <div className="flex items-center tracking-tight" title="Google Pay">
                <span className="text-[#4285F4] font-bold text-[13px] font-display">G</span>
                <span className="text-gray-600 font-bold text-[13px]">Pay</span>
              </div>

              {/* UPI */}
              <div className="flex items-center" title="UPI">
                <span className="italic font-black text-[#5C5C5C] text-[12px] tracking-tighter">UPI</span>
                <svg className="w-3 h-3 text-[#058e46] ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L22 12H16V22H8V12H2L12 2Z" /></svg>
              </div>

              {/* PhonePe */}
              <div className="w-5 h-5 bg-[#5F259F] text-white rounded-md flex items-center justify-center font-bold text-[12px]" title="PhonePe">
                पे
              </div>

              {/* Paytm */}
              <div className="flex items-center text-[13px] font-bold tracking-tight" title="Paytm">
                <span className="text-[#032b5f]">Pay</span>
                <span className="text-[#00B9F1]">tm</span>
              </div>

            </div>

            {/* QR Code */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=ngo@upi&pn=SaintAndSupper"
              alt="Saint & Supper UPI QR Code"
              className="w-[120px] h-[120px] object-contain mb-4"
            />

            {/* Details */}
            <p className="font-body-md font-bold text-on-surface text-sm mb-1">UPI / VPA ID: saintsupper@sbi</p>
            <p className="font-body-md font-bold text-on-surface text-sm">Org. Name: Saint &amp; Supper</p>
          </div>

        </div>
      </div>

      {/* Copyright Strip */}
      <div className="w-full bg-gradient-to-r from-primary to-secondary py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-sm text-white font-medium flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left tracking-wide drop-shadow-md pr-20 md:pr-12">
          <p>© {new Date().getFullYear()} Saint &amp; Supper Welfare Foundation. All rights reserved.</p>
          <p className="opacity-90 text-xs mt-2 md:mt-0">Designed by <span style={{ fontFamily: "'Dancing Script', cursive" }} className="text-2xl lowercase tracking-wide text-secondary-fixed">samtrics</span></p>
        </div>

        <Link to="/admin" className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-white/50 hover:text-white flex flex-col md:flex-row items-center gap-1 transition-colors">
          <span className="material-symbols-outlined text-[16px] md:text-[14px]">admin_panel_settings</span>
          <span className="text-[10px] md:text-xs">Admin</span>
        </Link>
      </div>
    </footer>
  );
}
