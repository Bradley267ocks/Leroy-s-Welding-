import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { BUSINESS_NAME, PHONE_NUMBER, ADDRESS, REG_NO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row gap-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center md:text-left">
          <address className="not-italic flex items-center gap-2 text-zinc-500">
            <MapPin size={12} className="text-brand-gold" aria-hidden="true" /> 
            {ADDRESS}
          </address>
          <span className="text-zinc-500">Reg No: {REG_NO}</span>
          <a 
            href="https://www.leroysweldingworks.co.za" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-gold transition-colors focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            www.leroysweldingworks.co.za
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-[10px] text-zinc-400 uppercase font-black tracking-widest hidden sm:inline italic">Precision in every weld</span>
          <div className="h-4 w-px bg-zinc-200 hidden sm:block"></div>
          <p className="text-[10px] font-black uppercase tracking-wider text-industrial-black">
            © {new Date().getFullYear()} LEROY'S WELDING WORKS
          </p>
          <img 
            src="https://i.ibb.co/N2kznf4N/Gemini-Generated-Image-2-removebg-preview-1.png" 
            alt={`${BUSINESS_NAME} Official Logo`} 
            className="w-32 h-12 grayscale opacity-50 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-zinc-100 text-center">
        <a 
          href="https://www.vibrantws.co.za" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-brand-gold transition-colors focus:outline-none focus:ring-1 focus:ring-brand-gold"
        >
          Website Designed by Vibrant Web Solutions
        </a>
      </div>
    </footer>
  );
}
