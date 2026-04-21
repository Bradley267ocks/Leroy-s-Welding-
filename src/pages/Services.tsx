import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main className="pt-24 md:pt-32 pb-0 bg-white items-center flex flex-col overflow-x-hidden">
      {/* Header */}
      <section className="mb-12 md:mb-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-4 block">Our Full Capability</span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 italic uppercase tracking-tighter text-industrial-black break-words">
              <span className="text-transparent text-stroke">Services</span> & Solutions
            </h1>
            <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium text-sm md:text-base">
              We provide end-to-end welding and metalwork solutions for industrial and commercial projects. 
              Our workshop is equipped for heavy fabrication while our mobile teams handle complex on-site installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="space-y-0 w-full">
        {SERVICES.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`py-16 md:py-24 relative overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-industrial-grey border-y border-zinc-200'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
              <div className={`flex flex-col lg:flex-row gap-10 md:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-zinc-200 group">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/1200/900`} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-brand-gold" />
                  <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 border-b-2 border-r-2 border-brand-gold" />
                </div>

                <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div className="p-4 bg-brand-gold/10 text-brand-gold rounded-sm border border-brand-gold/20 shrink-0">
                      <service.icon size={28} />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-industrial-black">{service.title}</h2>
                  </div>

                  <p className="text-zinc-500 text-base md:text-lg leading-relaxed italic font-medium">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Key Capabilities</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-sm border border-zinc-200 shadow-sm transition-colors hover:border-brand-gold/30">
                          <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-tight text-industrial-black text-left">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 md:pt-6">
                    <Link 
                      to="/contact" 
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-brand-gold text-white font-black px-8 py-4 rounded-sm hover:scale-[1.02] transition-transform shadow-lg group uppercase text-xs md:text-sm tracking-tight"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 w-full bg-industrial-black relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold animate-pulse opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <div className="inline-block p-4 bg-brand-gold/10 rounded-full mb-8 border border-brand-gold/20">
            <h2 className="text-lg md:text-2xl font-black text-brand-gold px-4 uppercase tracking-widest">Custom Service Needed?</h2>
          </div>
          <p className="text-zinc-400 mb-10 text-base md:text-xl leading-relaxed italic">
            Don't see exactly what you're looking for? We handle custom metal solutions of all sizes. 
            Reach out to describe your project and our master welders will consult you.
          </p>
          <Link 
            to="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-industrial-black font-black px-10 py-5 rounded-sm hover:-translate-y-1 transition-all shadow-xl uppercase text-xs md:text-sm tracking-widest"
          >
            <span>Talk to an Expert</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
