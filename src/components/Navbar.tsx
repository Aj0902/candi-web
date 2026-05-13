import { motion } from 'motion/react';
import { Landmark } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent backdrop-blur-sm border-b border-white/5">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <Landmark className="text-candi-gold w-6 h-6" />
        <span className="font-serif text-xl tracking-widest uppercase">Candi Web</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/60"
      >
        <a href="#sectors" className="hover:text-candi-gold transition-colors">Sectors</a>
        <a href="#archive" className="hover:text-candi-gold transition-colors">Archive</a>
        <a href="#about" className="hover:text-candi-gold transition-colors">Vision</a>
      </motion.div>
      
      <div className="md:hidden">
        {/* Simple mobile menu indicator */}
        <div className="w-6 h-[1px] bg-white/60 mb-1.5" />
        <div className="w-4 h-[1px] bg-white/60" />
      </div>
    </nav>
  );
}
