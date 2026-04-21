import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { BUSINESS_NAME, PHONE_NUMBER, ADDRESS, REG_NO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 px-4 sm:px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:flex-row gap-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center md:text-left">
        <span className="flex items-center gap-2 text-zinc-500"><MapPin size={12} className="text-brand-gold" /> {ADDRESS}</span>
        <span className="text-zinc-500">Reg No: {REG_NO}</span>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-[10px] text-zinc-400 uppercase font-black tracking-widest hidden sm:inline italic">Precision in every weld</span>
        <div className="h-4 w-px bg-zinc-200 hidden sm:block"></div>
        <span className="text-[10px] font-black uppercase tracking-wider text-industrial-black">© {new Date().getFullYear()} LEROY'S WELDING WORKS</span>
        <img 
          src="https://i.ibb.co/Zp8P3C7s/Gemini-Generated-Image-1.png" 
          alt="Small Logo" 
          className="w-6 h-6 grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
      </div>
    </footer>
  );
}
