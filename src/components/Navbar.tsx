import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Sectors', href: '#sectors' },
    { name: 'Archive', href: '#archive' },
    { name: 'Vision', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-candi-black/20 backdrop-blur-md border-b border-white/5">
      <Logo />
      
      {/* Desktop Menu */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60"
      >
        {menuItems.map((item) => (
          <a key={item.name} href={item.href} className="hover:text-candi-gold transition-colors">
            {item.name}
          </a>
        ))}
      </motion.div>
      
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white/80 hover:text-candi-gold transition-colors z-[60]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-candi-black z-50 flex flex-col items-center justify-center gap-12"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif tracking-[0.2em] uppercase hover:text-candi-gold transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
