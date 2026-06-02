import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Timeline', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gradient tracking-tighter">
          HN.
        </a>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
