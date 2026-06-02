import { motion } from 'framer-motion';
import { cvData } from '@/data/cv-data';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-32 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center text-gradient tracking-tight"
        >
          Technical Arsenal
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cvData.skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="glass rounded-2xl p-8 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-8 border border-gray-800 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_rgba(192,192,192,0.3)] transition-all">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-6">{skillGroup.category}</h3>
                <ul className="space-y-4 text-gray-400">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      <div className="w-2 h-2 rounded-full bg-secondary/60 group-hover:bg-primary transition-colors"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};
