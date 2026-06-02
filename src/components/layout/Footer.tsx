import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { cvData } from '@/data/cv-data';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-20 relative z-10 glass">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {cvData.personal.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href={cvData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${cvData.personal.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
