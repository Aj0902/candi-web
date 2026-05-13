/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Vision from './components/Vision';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen selection:bg-candi-gold/20 selection:text-candi-gold">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-candi-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="relative">
        <Hero />
        
        <div className="relative z-10 bg-candi-black">
          <BentoGrid />
          <Vision />
        </div>

        {/* Decorative background elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-candi-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-candi-bronze/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>

      <footer className="py-12 border-t border-white/5 bg-candi-black text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">
            © 2026 CANDI WEB &bull; PRESERVING MEMORIES THROUGH DIGITAL AUTOMATION
          </p>
          <div className="flex gap-12 text-[9px] uppercase tracking-widest text-zinc-600">
            <span>Jakarta</span>
            <span>Yogyakarta</span>
            <span>Bali</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
