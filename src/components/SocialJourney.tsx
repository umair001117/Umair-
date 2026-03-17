import { motion } from "motion/react";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    handle: "@aivision_studio",
    description: "Behind the scenes, reels & creative inspiration",
    icon: <Instagram size={24} />,
    color: "bg-pink-600"
  },
  {
    name: "LinkedIn",
    handle: "Ai Vision Studio",
    description: "Industry insights, case studies & company updates",
    icon: <Linkedin size={24} />,
    color: "bg-blue-600"
  },
  {
    name: "Behance",
    handle: "AiVisionStudio",
    description: "Full portfolio, case studies & creative projects",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-11.405 3.51h-2.69v-2.225h2.69c.569 0 1.032.459 1.032 1.025 0 .566-.463 1.2-1.032 1.2zm-.235-3.48h-2.455v-1.93h2.455c.492 0 .892.398.892.89 0 .49-.4.94-.892.94zM16.17 15.51h-2.02v-4.5h2.02v4.5zm0-5.25h-2.02v-.75h2.02v.75zM11.5 8.5H7.5v8h4.5c1.38 0 2.5-1.12 2.5-2.5 0-.83-.41-1.56-1.03-2 .62-.44 1.03-1.17 1.03-2 0-1.38-1.12-2.5-2.5-2.5z" />
      </svg>
    ),
    color: "bg-blue-500"
  },
  {
    name: "Facebook",
    handle: "AiVisionStudio",
    description: "Updates, community engagement & brand stories",
    icon: <Facebook size={24} />,
    color: "bg-blue-700"
  }
];

export default function SocialJourney() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          Follow Our <span className="text-neon">Journey</span>
        </h2>
        <p className="text-white/40 mt-4">Get the good stuff first.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map((social, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 text-left group hover:border-neon/20 transition-all relative"
          >
            <div className="absolute top-6 right-6 text-white/20 group-hover:text-neon transition-colors">
              <ArrowUpRight size={20} />
            </div>
            
            <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center mb-6 shadow-lg`}>
              {social.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-1">{social.name}</h3>
            <p className="text-neon text-xs font-bold mb-4">{social.handle}</p>
            <p className="text-white/40 text-xs leading-relaxed mb-6">{social.description}</p>
            
            <button className="text-[10px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white transition-colors flex items-center gap-2">
              Follow Us <span className="w-8 h-[1px] bg-white/20 group-hover:bg-neon transition-all" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
