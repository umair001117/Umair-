import { motion } from "motion/react";
import { Award, Users, Calendar, FileText } from "lucide-react";

const stats = [
  {
    icon: <Award className="text-neon" size={20} />,
    value: "10+",
    label: "Industry Awards"
  },
  {
    icon: <Users className="text-neon" size={20} />,
    value: "30+",
    label: "Happy Clients"
  },
  {
    icon: <Calendar className="text-neon" size={20} />,
    value: "5+",
    label: "Years Experience"
  },
  {
    icon: <FileText className="text-neon" size={20} />,
    value: "200+",
    label: "Content Pieces"
  }
];

export default function AboutUs() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-neon font-bold tracking-widest text-xs uppercase mb-4">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
            Crafting Memorable Brand <br /> Experiences Since 2019
          </h2>
          <p className="text-white/40 text-lg mb-8 leading-relaxed">
            Creatives who get business. Strategists who think visually. We've spent 5 years turning "just another shop" into "the place to go."
          </p>
          <p className="text-white font-bold mb-8 italic">Your brand. Elevated.</p>
          
          <div className="flex flex-wrap gap-3">
            {["Innovation", "Quality", "Collaboration", "Results"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-neon/30 text-neon text-xs font-bold bg-neon/5">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 flex flex-col items-center text-center group hover:border-neon/20 transition-all"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
