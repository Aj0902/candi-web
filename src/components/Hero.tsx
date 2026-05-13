import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden candi-pattern">
      {/* Decorative center element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-candi-gold/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-candi-gold/10 rounded-full pointer-events-none animate-[pulse_8s_infinite]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.6em] text-candi-gold mb-8 font-mono border-b border-candi-gold/30 pb-2">
            REPOSITORY DIGITAL NUSANTARA
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-8 leading-none tracking-tighter">
            Candi <br /> 
            <span className="italic text-candi-gold">Web</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="max-w-xl mx-auto text-sm md:text-base text-white/60 tracking-wider leading-relaxed font-sans"
        >
          Sebuah ruang ekshibisi yang merajut inovasi teknologi modern 
          dengan kedalaman narasi lokal Nusantara. Penjaga memori bagi 
          warisan budaya dan inovasi yang tak tersorot.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex gap-4">
             <button className="px-8 py-3 bg-candi-gold text-candi-black text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors duration-500 rounded-sm">
                Buka Gerbang
             </button>
             <button className="px-8 py-3 border border-white/20 text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-colors duration-500 rounded-sm">
                Lihat Visi
             </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Meta Labels */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Project State</span>
          <span className="text-xs font-mono text-candi-gold">Archiving: 100 Discoveries</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="flex flex-col items-end gap-2 text-right">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Coordinates</span>
          <span className="text-xs font-mono">07°36′S 110°29′E</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        <MousePointer2 size={12} className="mt-2" />
      </motion.div>
    </section>
  );
}
