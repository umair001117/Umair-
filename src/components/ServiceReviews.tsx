import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    content: "Ai Vision Studio transformed our outdated identity into a futuristic brand that actually converts. Their AI-driven approach is a game-changer.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, Luxe",
    content: "The speed and quality of their content production are unmatched. We received a full brand kit in record time without compromising on aesthetics.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenScale",
    content: "Their social growth strategy helped us scale our reach by 300% in just three months. Highly recommended for any premium brand.",
    rating: 5
  }
];

export default function ServiceReviews() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon font-bold tracking-widest text-xs uppercase mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Proper Review of <span className="text-neon italic">Our Services.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative group"
            >
              <Quote className="absolute top-6 right-6 text-neon/10 group-hover:text-neon/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-neon text-neon" />
                ))}
              </div>

              <p className="text-lg text-white/70 mb-8 italic">"{review.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon/20 flex items-center justify-center font-bold text-neon">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
