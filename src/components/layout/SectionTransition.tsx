import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionTransitionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export const SectionTransition = ({ children, className = '', id }: SectionTransitionProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
