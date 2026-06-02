import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_9cszcyy',
          template_id: 'template_dq46cpk',
          user_id: 'CFh5seOiqUfCiNwWi',
          template_params: {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
          }
        }),
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const closeModal = () => {
    onClose();
    setTimeout(() => {
      reset();
      setStatus('idle');
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg glass rounded-2xl p-6 sm:p-8 overflow-hidden"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-2 text-gradient">Say Hello</h3>
            <p className="text-gray-400 mb-6 text-sm">Fill out the form below and I'll get back to you shortly.</p>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-green-400" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400 mb-6">Thank you for reaching out. I'll respond as soon as possible.</p>
                <button 
                  onClick={closeModal}
                  className="px-6 py-2 bg-surface border border-primary/20 rounded-lg text-white hover:bg-primary/10 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input 
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea 
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-secondary transition-colors resize-none"
                    placeholder="How can I help you?"
                  />
                  {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
                </div>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle size={16} />
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-3 bg-secondary hover:bg-secondary/80 disabled:bg-secondary/50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="animate-spin" size={18} /> Sending...</>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
