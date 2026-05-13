import { motion } from 'motion/react';
import { Sector } from '../constants/sectors';
import { ArrowUpRight } from 'lucide-react';

interface SectorCardProps {
  sector: Sector;
  index: number;
}

export default function SectorCard({ sector, index }: SectorCardProps) {
  const Icon = sector.icon;
  
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    large: 'col-span-2 row-span-2',
    tall: 'col-span-1 row-span-2',
    wide: 'col-span-2 row-span-1',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm flex flex-col justify-end p-6 ${sizeClasses[sector.size]} hover:border-candi-gold/30 transition-all duration-700`}
    >
      {/* Background Image with Overlay */}
      {sector.image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={sector.image} 
            alt={sector.title} 
            className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-20 transition-all duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-candi-black via-transparent to-transparent" />
        </div>
      )}

      {/* Decorative Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-candi-gold/5 blur-3xl rounded-full group-hover:bg-candi-gold/10 transition-colors duration-700" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="pb-1 border-b border-white/20">
            <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-zinc-400">
              {sector.title}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-serif mb-2 text-white group-hover:text-candi-gold transition-colors duration-300">
          {sector.id === 'lokal' ? 'Pusaka Nusantara' : sector.title}
        </h3>
        
        <p className="text-xs text-zinc-500 mb-6 line-clamp-2 leading-relaxed">
          {sector.description}
        </p>
        
        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">SEC-{sector.id.toUpperCase()}</span>
          <ArrowUpRight size={16} className="text-candi-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
