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
      className="group relative bg-[#fdfdfd] border border-zinc-200 p-6 hover:border-brand-gold/50 transition-all rounded-sm shadow-sm hover:shadow-md"
    >
      <div className="text-brand-gold mb-4 text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-industrial-black group-hover:text-brand-gold transition-colors">
        {service.title}
      </h4>
      
      <p className="text-[11px] text-zinc-500 leading-tight mb-4">
        {service.description}
      </p>
      
      <Link 
        to="/services" 
        className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-brand-gold transition-all"
      >
        Details <ArrowRight size={12} strokeWidth={3} />
      </Link>
    </motion.div>
  );
}
