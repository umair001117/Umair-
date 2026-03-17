import { motion } from "motion/react";
import { Palette, Video, Rocket, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: <Palette size={32} />,
    title: "High-End Branding",
    description: "Logo & Identity Design that makes your business unforgettable.",
    items: ["Logo Design", "Brand Guidelines", "Visual Identity"]
  },
  {
    icon: <Video size={32} />,
    title: "Content Production",
    description: "Cinematic Reels & Photography that stops the scroll.",
    items: ["Video Production", "Photography", "Motion Graphics"]
  },
  {
    icon: <Zap size={32} />,
    title: "AI Content Creation",
    description: "Smart content that scales. Human creativity meets AI speed.",
    items: ["AI Copywriting", "Image Generation", "Content Automation"]
  },
  {
    icon: <Rocket size={32} />,
    title: "Social Growth",
    description: "Strategy & Ads that turn followers into customers.",
    items: ["Social Strategy", "Paid Advertising", "Analytics"]
  },
  {
    icon: <Globe size={32} />,
    title: "Web Design",
    description: "Digital Presence that converts visitors into clients.",
    items: ["Website Design", "UI/UX", "E-commerce"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-neon font-bold tracking-widest text-xs uppercase mb-2">WHAT WE DO</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Premium Services</h2>
        <p className="text-white/40 mt-4 italic">Full-stack branding. Zero gaps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className={`p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-neon/30 transition-all group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center text-neon mb-6 group-hover:bg-neon/10 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-2 text-xs font-medium">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
