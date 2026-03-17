import { motion } from "motion/react";

const logos = [
  "MMT FX", "CRIB", "Payoneer", "SuperChef", 
  "MMT FX", "CRIB", "Payoneer", "SuperChef"
];

export default function LogoSlider() {
  return (
    <div className="py-12 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="text-2xl md:text-3xl font-black text-white/10 mx-12 md:mx-20 hover:text-white/30 transition-colors cursor-default"
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
