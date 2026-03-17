import { motion } from "motion/react";
import { Power, MessageSquare } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center text-neon glow-box border border-neon/20 mb-4 mx-auto">
          <Power size={32} />
        </div>
        <p className="text-neon font-bold tracking-widest text-xs uppercase">AI Vision: ACTIVE</p>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
        className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8"
      >
        Switch Your <br /> Business <span className="text-neon glow-text italic">to a Brand.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-white/50 text-lg md:text-xl max-w-2xl mb-12"
      >
        Design. Content. Growth. The premium treatment your brand deserves.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col md:row gap-4 mb-20"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={scrollToServices}
            className="flex items-center gap-2 bg-neon text-black px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all glow-box"
          >
            <Power size={20} /> Turn BrandMode On
          </button>
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
            <MessageSquare size={20} /> Request a Quote
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-3 gap-8 md:gap-20 border-t border-white/5 pt-12 w-full max-w-4xl"
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-black text-neon">50+</h3>
          <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest mt-1">Brands Created</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-black text-neon">100%</h3>
          <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest mt-1">Client Retention</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-black text-neon">∞</h3>
          <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest mt-1">Creative Ideas</p>
        </div>
      </motion.div>
    </section>
  );
}
