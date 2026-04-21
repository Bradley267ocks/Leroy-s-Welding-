import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowLeftRight } from 'lucide-react';

export default function Projects() {
  return (
    <main className="pt-32 pb-24">
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 italic"><span className="text-gradient">Projects</span> Gallery</h1>
            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Real results for real clients. See the quality of our welding, fabrication, and piping work in Pietermaritzburg.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                  <p className="text-brand-orange text-sm font-bold mt-1 uppercase tracking-wider">{project.service} • {project.client}</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase">
                  <span>Before</span>
                  <ArrowLeftRight size={14} />
                  <span>After</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/5 grayscale">
                    <img src={project.before} alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute top-4 left-4 inline-block px-2 py-1 bg-industrial-black/80 text-[10px] font-black uppercase tracking-tighter text-white">Before</div>
                </div>
                <div className="relative group">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden border border-brand-orange/30 shadow-2xl">
                    <img src={project.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute top-4 left-4 inline-block px-2 py-1 bg-brand-orange text-[10px] font-black uppercase tracking-tighter text-industrial-black">After</div>
                </div>
              </div>

              <p className="text-neutral-500 text-sm leading-relaxed italic">
                Industrial grade finish with full structural integrity verification. Completed on schedule for {project.client}.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
