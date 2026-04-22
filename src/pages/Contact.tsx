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

      {/* Main Content: Form & Info */}
      <section className="pb-24 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-[#fdfdfd] border border-zinc-200 rounded-sm overflow-hidden shadow-xl p-6 md:p-10 transition-all hover:border-brand-gold/30">
              <ContactForm />
            </div>

            {/* Info and Map */}
            <div className="lg:col-span-5 space-y-8">
              {/* Info Cards Column */}
              <div className="bg-industrial-grey border border-zinc-200 p-8 rounded-sm space-y-8 shadow-inner">
                {infoCards.map((card, index) => (
                  <motion.div 
                    key={card.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-sm flex items-center justify-center border border-brand-gold/20">
                      <card.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{card.title}</h3>
                      <p className="text-xs font-black uppercase tracking-tight text-industrial-black leading-tight">{card.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Integrated Map */}
              <div className="relative w-full h-[350px] bg-industrial-grey rounded-sm overflow-hidden border border-zinc-200 shadow-xl group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.575344314457!2d30.413725576770535!3d-29.6450625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6bd94998797f1%3A0xc3f17f8a7e0a4f5!2s70%20Murray%20Rd%2C%20Mkondeni%2C%20Pietermaritzburg%2C%203201%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1713781200000!5m2!1sen!2sza" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-110 opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                  title="Leroy's Welding Works Location"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
