import React from 'react';
import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { MapPin, Clock, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS, BUSINESS_NAME } from '../constants';

export default function Contact() {
  const infoCards = [
    { icon: MapPin, title: 'Our Location', detail: ADDRESS },
    { icon: Clock, title: 'Lead Time', detail: 'Quotes typically within 24 hours' },
    { icon: ShieldCheck, title: 'Licensed & Reg', detail: 'Fully registered fabrication firm' },
  ];

  return (
    <main className="pt-24 md:pt-32 pb-24 bg-white items-center flex flex-col overflow-x-hidden">
      {/* Header */}
      <section className="mb-12 md:mb-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 italic uppercase tracking-tighter text-industrial-black break-words">Let's Build <br className="sm:hidden" /><span className="text-transparent text-stroke">Something Rigid</span></h1>
            <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-tight text-[10px] md:text-xs">
              Based in Mkondeni, Pietermaritzburg. We're ready to tackle your industrial challenges. 
              Reach out for quotes, site visits, or emergency repairs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-24 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-[#fdfdfd] border border-zinc-200 rounded-sm overflow-hidden shadow-2xl p-6 md:p-12 transition-all hover:border-brand-gold/30">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16 bg-industrial-grey border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {infoCards.map((card, index) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left space-y-4"
              >
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-sm flex items-center justify-center mx-auto md:mx-0 border border-brand-gold/20">
                  <card.icon size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-tight text-industrial-black">{card.title}</h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-bold uppercase tracking-tighter">{card.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map Placeholder */}
      <section className="mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative w-full h-[450px] bg-industrial-grey rounded-sm overflow-hidden border border-zinc-200 group">
            <div className="absolute inset-0 grayscale contrast-125 opacity-20 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-40">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-center" />
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96 glass-panel p-8 rounded-sm shadow-2xl">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-industrial-black italic">Visit Our Workshop</h3>
              <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-6 leading-relaxed">
                Unit 15 Roycol Park, 70 Murray Road, Mkondeni, Pietermaritzburg, 3201
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Roycol+Park+Mkondeni+Pietermaritzburg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-industrial-black text-white font-black px-6 py-3 rounded-sm hover:scale-[1.02] transition-transform w-full uppercase text-xs tracking-widest"
              >
                <span>Navigate via GPS</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
