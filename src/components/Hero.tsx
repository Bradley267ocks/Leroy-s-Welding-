import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 overflow-hidden px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold-dark px-3 py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-6 whitespace-nowrap">
              Industrial & Commercial Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-industrial-black break-words">
              PROFESSIONAL <span className="text-transparent text-stroke italic">WELDING</span><br />& FABRICATION.
            </h1>
            <p className="text-zinc-500 text-base md:text-xl leading-snug max-w-lg mb-8 font-medium">
              High-quality pipework, HDPE solutions, and industrial labour hire in Pietermaritzburg. Reliability forged in steel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="bg-brand-gold hover:bg-brand-gold-dark text-white font-black px-6 py-4 flex items-center justify-center gap-3 transition-all uppercase text-xs md:text-sm tracking-tight rounded-sm"
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 w-full"
          >
            <div className="relative bg-industrial-grey border border-zinc-200 p-6 md:p-8 rounded-sm overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-black text-6xl md:text-8xl transition-opacity group-hover:opacity-10 pointer-events-none">24/7</div>
              <h3 className="text-brand-gold font-bold mb-3 uppercase tracking-wider text-xs md:text-sm">Emergency Services</h3>
              <p className="text-zinc-500 text-xs md:text-sm mb-6 leading-relaxed">
                Need urgent structural repairs or site support? Our mobile teams are ready for rapid dispatch across Pietermaritzburg.
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[8px] md:text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Mkondeni Based
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                  Fast Turnaround
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


