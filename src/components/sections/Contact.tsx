import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '@/data/cv-data';
import { Mail, MapPin, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { CopyTooltip } from '../ui/CopyTooltip';

export const Contact = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${cvData.personal.phone.replace(/\s/g, '')}`;
    } else {
      navigator.clipboard.writeText(cvData.personal.phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border border-gray-800"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/5 rounded-full blur-[120px] -z-10"></div>
          
          <h2 className="text-5xl font-bold mb-8 text-gradient tracking-tight">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Actively seeking internship opportunities in Data Science and AI. 
            My inbox is always open for inquiries, collaborations, or simply a quick hello.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-black border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-1">Email</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${cvData.personal.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm break-all"
                  >
                    {cvData.personal.email} <ExternalLink size={14} />
                  </a>
                  <CopyTooltip textToCopy={cvData.personal.email}>
                    <button className="text-gray-500 hover:text-primary transition-colors text-sm underline underline-offset-4 decoration-gray-800 hover:decoration-primary cursor-pointer">
                      Copy
                    </button>
                  </CopyTooltip>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-black border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-1">Phone</h4>
                <div className="relative mt-2">
                  <button 
                    onClick={handlePhoneClick}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm text-left"
                  >
                    {cvData.personal.phone} <ExternalLink size={14} />
                  </button>
                  <AnimatePresence>
                    {phoneCopied && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                        className="absolute -top-10 left-0 px-3 py-1.5 bg-surface border border-primary/20 text-white text-xs font-medium rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                      >
                        Number copied successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-black border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-1">Location</h4>
                <p className="text-gray-400 text-sm mt-2">
                  {cvData.personal.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-black border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-secondary/50 transition-colors">
                <Linkedin className="text-secondary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-1">LinkedIn</h4>
                <a href={cvData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 text-sm mt-2 break-all">
                  Connect with me <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
          
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${cvData.personal.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-xl bg-primary hover:bg-white text-black font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(192,192,192,0.4)] hover:shadow-[0_0_60px_-10px_rgba(192,192,192,0.6)]"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};
