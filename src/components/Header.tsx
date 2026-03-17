import { motion } from "motion/react";
import { Power } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-8 backdrop-blur-sm bg-black/10">
      <div className="text-2xl font-black tracking-tighter">
        Ai Vision<span className="text-neon">Studio</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#" className="hover:text-neon transition-colors">About</a>
        <a href="#" className="hover:text-neon transition-colors">Services</a>
        <a href="#" className="hover:text-neon transition-colors">Work</a>
        <a href="#" className="hover:text-neon transition-colors">Contact</a>
      </nav>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-semibold"
      >
        <span className="text-neon">●</span> Let's Talk
      </motion.button>
    </header>
  );
}
