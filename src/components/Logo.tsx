import { motion } from 'motion/react';

export default function Logo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3"
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-candi-gold"
      >
        {/* Simplified Temple Structure (Candi) */}
        <rect x="40" y="20" width="20" height="8" fill="currentColor" />
        <rect x="35" y="30" width="30" height="4" fill="currentColor" />
        <rect x="25" y="36" width="50" height="10" fill="currentColor" />
        <rect x="28" y="48" width="10" height="8" fill="currentColor" />
        <rect x="62" y="48" width="10" height="8" fill="currentColor" />
        <rect x="15" y="58" width="70" height="6" fill="currentColor" />
      </svg>
      <span className="font-serif text-xl tracking-[0.2em] uppercase leading-none">
        Candi <span className="text-candi-gold italic">Web</span>
      </span>
    </motion.div>
  );
}
