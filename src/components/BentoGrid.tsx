import { SECTORS } from '../constants/sectors';
import SectorCard from './SectorCard';
import { motion } from 'motion/react';

export default function BentoGrid() {
  return (
    <section id="sectors" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8"
      >
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-2">Ecosystem Sektor</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Digital <span className="italic text-candi-gold">Repository</span>
          </h2>
        </div>
        
        <div className="flex space-x-12 text-right">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-wider text-zinc-500">Status</span>
            <span className="text-xs text-candi-gold">● PHASE 01: INITIATION</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-wider text-zinc-500">Archives</span>
            <span className="text-xs font-mono">034 / 100</span>
          </div>
        </div>
      </motion.div>

      <div className="bento-grid min-h-[600px]">
        {SECTORS.map((sector, index) => (
          <SectorCard key={sector.id} sector={sector} index={index} />
        ))}
        
        {/* Placeholder for the 100th discovery call to action */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="col-span-1 row-span-1 border border-dashed border-white/10 rounded-sm flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:bg-candi-gold/5 transition-colors"
        >
          <div className="text-4xl font-serif text-white/10 group-hover:text-candi-gold/20 mb-2 font-black italic">100</div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60">Target Penemuan Kurasi</p>
        </motion.div>
      </div>
    </section>
  );
}
