import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Vision() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-candi-gray relative overflow-hidden">
      {/* Decorative SVG Motif Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
         <svg viewBox="0 0 100 100" className="w-full h-full fill-candi-gold">
           <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <Quote className="text-candi-gold w-12 h-12 mb-8 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Eksistensi sebagai <br />
            <span className="italic">"Penjaga Memori"</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-6 font-sans">
            Candi Web bukan sekadar situs web portofolio, melainkan sebuah "Candi Digital". Eksistensi platform ini adalah untuk membangun repositori yang memuat 100 kurasi penemuan digital.
          </p>
          <p className="text-white/60 leading-relaxed font-sans">
            Kami membuktikan bahwa teknologi otomasi dan desain web dapat menjadi instrumen pelestarian bagi warisan budaya dan inovasi yang mungkin luput dari sorotan publik.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 border border-white/5 bg-candi-black/40 rounded-sm"
          >
            <h4 className="text-candi-gold font-serif text-3xl mb-2 italic">100</h4>
            <p className="text-[10px] uppercase tracking-widest text-white/40">Target Kurasi Penemuan</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 border border-white/5 bg-candi-black/40 rounded-sm"
          >
            <h4 className="text-candi-gold font-serif text-3xl mb-2 italic">05</h4>
            <p className="text-[10px] uppercase tracking-widest text-white/40">Pilar Ekosistem Panca</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 border border-white/5 bg-candi-black/40 rounded-sm col-span-2"
          >
            <h4 className="text-candi-gold font-serif text-3xl mb-2 italic"> Nusantara</h4>
            <p className="text-[10px] uppercase tracking-widest text-white/40">Fokus Identitas Lokal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
