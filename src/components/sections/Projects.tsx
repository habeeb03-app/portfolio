import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '@/data/cv-data';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center text-gradient tracking-tight"
        >
          Featured Work
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-16">
          {cvData.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden group border border-gray-800 hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] group-hover:bg-secondary/10 transition-colors duration-700"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                        {project.category}
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-tight">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-xl leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-black border border-gray-800 text-gray-300 text-sm rounded-lg font-medium group-hover:border-primary/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 flex items-center justify-center bg-black/50 rounded-2xl border border-gray-800 p-8 min-h-[300px] relative overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <p className="text-gray-500 text-lg font-light italic text-center z-10">
                    Interactive Preview <br/> Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
