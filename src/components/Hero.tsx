import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-40 pb-12 overflow-hidden px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto container">
        <div className="flex flex-col gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center text-center z-10"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold-dark px-3 py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-6 whitespace-nowrap">
              Industrial & Commercial Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-industrial-black break-words max-w-4xl">
              PRECISION <span className="text-transparent text-stroke italic">FORGED</span><br />IN EVERY WELD.
            </h1>
            <p className="text-zinc-500 text-base md:text-xl leading-snug max-w-2xl mb-8 font-medium">
              Professional welding, HDPE piping, and structural fabrication solutions for Pietermaritzburg. We bring your blueprints to life with heavy-duty reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="bg-brand-gold hover:bg-brand-gold-dark text-white font-black px-6 py-4 flex items-center justify-center gap-3 transition-all uppercase text-xs md:text-sm tracking-tight rounded-sm shadow-xl"
              >
                <Phone size={18} fill="currentColor" />
                CALL NOW {PHONE_NUMBER}
              </a>
              <a 
                href={`https://wa.me/${PHONE_NUMBER.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-300 hover:bg-zinc-50 text-industrial-black px-6 py-4 font-bold flex items-center justify-center gap-2 transition-all uppercase text-xs md:text-sm tracking-tight rounded-sm"
              >
                WHATSAPP US
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center px-4"
          >
            <div className="relative w-full max-w-5xl bg-industrial-black p-1 rounded-sm border border-zinc-200 shadow-2xl overflow-hidden">
              <img 
                src="https://i.ibb.co/4w6yCz93/Untitled-design-8.jpg"
                alt="Professional Industrial Welding Action"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


