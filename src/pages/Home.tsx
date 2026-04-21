import React from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Award, Hammer, Phone, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, PHONE_NUMBER } from '../constants';

export default function Home() {
  const trustPoints = [
    { icon: Shield, title: 'Reliable workmanship', desc: 'Consistent, high-quality results on every job.' },
    { icon: Award, title: 'Industrial-grade quality', desc: 'Built to withstand the toughest industrial conditions.' },
    { icon: Clock, title: 'Fast turnaround times', desc: 'Minimizing downtime with efficient on-site service.' },
    { icon: Hammer, title: 'Workshop & On-site', desc: 'Full service solutions wherever you need us.' },
  ];

  return (
    <main>
      <Hero />

      {/* Services Preview */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-industrial-black uppercase tracking-tighter">Forged <span className="text-transparent text-stroke italic">Excellence</span></h2>
            </div>
            <p className="text-zinc-500 max-w-sm mb-2 text-sm leading-snug font-medium">
              Specialized industrial solutions for Pietermaritzburg's harshest environments. Reliability in every weld.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="relative aspect-video rounded-sm overflow-hidden border border-zinc-200 group">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070" 
                  alt="Precision Welding Action" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-brand-gold/10 rounded-sm blur-2xl -z-10" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-gold-dark border border-zinc-200">
                Precision Workshop
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 block">About Us</span>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight leading-tight">Built on <span className="text-brand-gold">Trust</span> and Precision</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed font-medium text-sm md:text-base">
                Leroy’s Welding Works is a professional welding and industrial services company based in Mkondeni, Pietermaritzburg. We specialise in high-quality fabrication, pipework, and on-site welding solutions for industrial and commercial clients.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="border-l-2 border-brand-gold pl-4 py-1 md:py-2 text-left">
                  <h4 className="text-lg md:text-xl font-black text-industrial-black leading-none">8+ Years</h4>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold mt-1">Experience</p>
                </div>
                <div className="border-l-2 border-brand-gold pl-4 py-1 md:py-2 text-left">
                  <h4 className="text-lg md:text-xl font-black text-industrial-black leading-none">100%</h4>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold mt-1">Reliability</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-industrial-grey border-y border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12 md:mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter shrink-0 text-industrial-black">Why <span className="text-brand-gold">Choose us</span></h2>
            <div className="h-px bg-zinc-200 flex-grow hidden md:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-zinc-200 p-6 md:p-8 rounded-sm group hover:border-brand-gold/30 transition-all shadow-sm flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded flex items-center justify-center mb-6 border border-brand-gold/20 group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <point.icon size={20} />
                </div>
                <h3 className="text-sm font-black mb-3 uppercase tracking-wider text-industrial-black">{point.title}</h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-bold uppercase tracking-tight">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="bg-brand-gold p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 rounded-sm shadow-xl">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase leading-[0.95] tracking-tighter mb-4">
                Let's start your<br className="hidden md:block" /> next project.
              </h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-[8px] md:text-[10px]">
                MKONDENI BASED • {PHONE_NUMBER} • RAPID DISPATCH
              </p>
            </div>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="w-full sm:w-auto bg-industrial-black text-white hover:bg-zinc-800 font-black px-8 md:px-10 py-4 md:py-5 rounded-sm transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-2xl uppercase text-xs md:text-sm tracking-tight"
            >
              <Phone size={18} fill="currentColor" />
              <span>Call Now</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
