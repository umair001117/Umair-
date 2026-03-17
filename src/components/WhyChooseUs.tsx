import { motion } from "motion/react";
import { Users, Layers, MapPin, Clock, ShieldCheck, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: <Users className="text-neon" size={24} />,
    title: "Dedicated Partnership",
    description: "Your success = our obsession."
  },
  {
    icon: <Layers className="text-neon" size={24} />,
    title: "End-to-End Solutions",
    description: "Branding to content. All in-house."
  },
  {
    icon: <MapPin className="text-neon" size={24} />,
    title: "Local Market Expertise",
    description: "We know what clicks locally."
  },
  {
    icon: <Clock className="text-neon" size={24} />,
    title: "Fast Turnaround",
    description: "Fast. No shortcuts."
  },
  {
    icon: <ShieldCheck className="text-neon" size={24} />,
    title: "Transparent Pricing",
    description: "What you see is what you pay."
  },
  {
    icon: <TrendingUp className="text-neon" size={24} />,
    title: "Results-Focused",
    description: "Your growth is our KPI."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-center">
      <div className="mb-16">
        <p className="text-neon font-bold tracking-widest text-xs uppercase mb-2">WHY WORK WITH US</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          Why Choose <span className="text-neon">Ai Vision Studio?</span>
        </h2>
        <p className="text-white/40 mt-4">What sets us apart from other creative agencies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 text-left group hover:border-neon/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-6 group-hover:bg-neon/10 transition-colors">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
            <p className="text-white/40 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <button className="bg-neon text-black px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all glow-box">
          Ready to Transform Your Brand?
        </button>
      </div>
    </section>
  );
}
