import { motion } from 'framer-motion';
import { cvData } from '@/data/cv-data';
import { Calendar, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 relative z-10 w-full">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gradient tracking-tight">About Me</h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light">
            {cvData.personal.summary}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-800">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-gray-800 flex items-center justify-center">
                <Calendar className="text-primary" size={24} />
              </div>
              <span className="text-lg">Born {cvData.personal.dob}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-gray-800 flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <span className="text-lg">{cvData.personal.address}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
