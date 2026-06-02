import { motion } from 'framer-motion';
import { cvData } from '@/data/cv-data';
import { ArrowDown, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="px-5 py-2 rounded-full border border-primary/20 bg-surface/50 text-primary text-sm font-semibold tracking-widest uppercase">
            Executive Profile
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-4"
        >
          <span className="text-gray-100">{cvData.personal.name}</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-5xl font-bold text-gradient mb-8 tracking-tight"
        >
          {cvData.personal.role}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light"
        >
          {cvData.personal.summary}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="px-8 py-4 rounded-lg bg-primary hover:bg-white text-black font-semibold transition-all flex items-center gap-2 group w-full sm:w-auto justify-center shadow-lg shadow-primary/20">
            View My Work <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-lg border-2 border-surface hover:border-secondary hover:text-white text-gray-300 font-semibold transition-all w-full sm:w-auto justify-center text-center bg-black/50">
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-gray-500 hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};
