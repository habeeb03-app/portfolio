import { motion } from 'framer-motion';
import { cvData } from '@/data/cv-data';
import { GraduationCap, Award, Trophy } from 'lucide-react';

export const Timeline = () => {
  return (
    <section id="timeline" className="py-32 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center text-gradient tracking-tight"
        >
          My Journey
        </motion.h2>

        <div className="relative border-l border-gray-800 ml-4 md:ml-8 space-y-16">
          
          {/* Education */}
          <div className="relative">
            <div className="absolute -left-[2.1rem] md:-left-[2.35rem] top-0 bg-black border border-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(192,192,192,0.15)]">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <div className="pl-12 md:pl-16">
              <h3 className="text-3xl font-bold text-gray-100 mb-8">Education</h3>
              <div className="space-y-8">
                {cvData.education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl border-l-4 border-l-primary hover:border-l-secondary transition-colors"
                  >
                    <h4 className="text-2xl font-bold text-gray-100">{edu.qualification}</h4>
                    <p className="text-primary text-lg font-medium my-2">{edu.institution}</p>
                    <div className="flex justify-between items-center text-gray-400 mt-6 pt-6 border-t border-gray-800">
                      <span className="font-mono text-sm">{edu.year}</span>
                      <span className="font-bold text-gray-300">{edu.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="relative pt-8">
            <div className="absolute -left-[2.1rem] md:-left-[2.35rem] top-8 bg-black border border-secondary w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(91,33,182,0.3)]">
              <Award size={24} className="text-secondary" />
            </div>
            <div className="pl-12 md:pl-16">
              <h3 className="text-3xl font-bold text-gray-100 mb-8">Certifications</h3>
              <div className="space-y-6">
                {cvData.certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl border-l-4 border-l-secondary"
                  >
                    <h4 className="text-xl font-bold text-gray-100">{cert.title}</h4>
                    <p className="text-secondary font-medium mt-2">{cert.issuer} <span className="text-gray-600 mx-2">•</span> {cert.date}</p>
                    {cert.details && <p className="text-gray-400 mt-4 pt-4 border-t border-gray-800">{cert.details}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="relative pt-8">
            <div className="absolute -left-[2.1rem] md:-left-[2.35rem] top-8 bg-black border border-gray-500 w-16 h-16 rounded-2xl flex items-center justify-center">
              <Trophy size={24} className="text-gray-300" />
            </div>
            <div className="pl-12 md:pl-16">
              <h3 className="text-3xl font-bold text-gray-100 mb-8">Achievements</h3>
              <div className="space-y-4">
                {cvData.achievements.map((achieve, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass px-8 py-6 rounded-2xl flex items-center gap-6 group hover:bg-surface transition-colors"
                  >
                    <Trophy size={20} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 text-lg">{achieve}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
