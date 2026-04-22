import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../constants';

interface Props {
  service: Service;
  index: number;
  key?: string | number;
}

export default function ServiceCard({ service, index }: Props) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-[#fdfdfd] border border-zinc-200 p-3 hover:border-brand-gold/50 transition-all rounded-sm shadow-sm hover:shadow-md flex flex-col h-full"
    >
      <div className="relative aspect-video rounded-sm overflow-hidden mb-4 bg-industrial-black border border-zinc-100 shadow-inner group">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/40 to-transparent" />
      </div>

      <div className="px-3 pb-3 flex flex-col flex-grow">
        <div className="text-brand-gold mb-3 text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        
        <h4 className="font-bold mb-2 text-xs md:text-sm uppercase tracking-wider text-industrial-black group-hover:text-brand-gold transition-colors">
          {service.title}
        </h4>
        
        <p className="text-[10px] md:text-[11px] text-zinc-500 leading-tight mb-4 flex-grow">
          {service.description}
        </p>
        
        <Link 
          to="/services" 
          className="inline-flex items-center gap-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-brand-gold transition-all"
        >
          Explore Service <ArrowRight size={12} strokeWidth={3} />
        </Link>
      </div>
    </motion.div>
  );
}
