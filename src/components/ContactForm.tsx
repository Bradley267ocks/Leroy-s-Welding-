import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here
    alert("Message sent! (Demo)");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter text-industrial-black">Get a Fast <span className="text-brand-gold">Quote</span></h2>
        <p className="text-zinc-500 mb-8 leading-relaxed font-medium">
          Need immediate welding work or industrial fabrication? Fill out the form below or reach out directly via WhatsApp for a quick response.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-industrial-grey border border-zinc-200 rounded-sm px-4 py-3 text-industrial-black focus:outline-none focus:border-brand-gold transition-colors font-bold"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Phone</label>
              <input 
                type="tel" 
                required
                className="w-full bg-industrial-grey border border-zinc-200 rounded-sm px-4 py-3 text-industrial-black focus:outline-none focus:border-brand-gold transition-colors font-bold"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Service Needed</label>
            <select className="w-full bg-industrial-grey border border-zinc-200 rounded-sm px-4 py-3 text-industrial-black focus:outline-none focus:border-brand-gold transition-colors font-bold appearance-none">
              <option>General Welding</option>
              <option>Pipework</option>
              <option>Fabrication</option>
              <option>HDPE Piping</option>
              <option>Labour Hire</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Message</label>
            <textarea 
              rows={4}
              required
              className="w-full bg-industrial-grey border border-zinc-200 rounded-sm px-4 py-3 text-industrial-black focus:outline-none focus:border-brand-gold transition-colors resize-none font-bold placeholder:font-normal"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-dark text-white font-black px-8 py-4 rounded-sm transition-all transform active:scale-95 flex items-center justify-center gap-2 uppercase text-xs tracking-widest shadow-lg"
          >
            <Send size={18} />
            Submit Request
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <div className="bg-[#fdfdfd] border border-zinc-200 p-8 rounded-sm shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full transition-all group-hover:bg-brand-gold/10" />
          
          <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter text-industrial-black">Direct <span className="text-brand-gold">Contact</span></h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-sm border border-brand-gold/20">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Call Us Anywhere</p>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-xl font-black text-industrial-black hover:text-brand-gold transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-sm border border-green-100">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">WhatsApp Chat</p>
                <a 
                  href={`https://wa.me/${PHONE_NUMBER.replace(/\s/g, '').replace('+', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-black text-industrial-black hover:text-green-600 transition-colors"
                >
                  Message Leroy Now
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-industrial-grey border border-zinc-100 rounded-sm italic">
            <p className="text-xs font-bold text-zinc-500 italic uppercase">
              "Quick response time and professional industrial-grade results. Based in Mkondeni, serving all of PMB."
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
