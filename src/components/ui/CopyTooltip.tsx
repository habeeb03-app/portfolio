import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CopyTooltipProps = {
  textToCopy: string;
  children: React.ReactNode;
};

export const CopyTooltip = ({ textToCopy, children }: CopyTooltipProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-block group" onClick={handleCopy}>
      {children}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-surface border border-primary/20 text-white text-xs font-medium rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
          >
            Copied successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
