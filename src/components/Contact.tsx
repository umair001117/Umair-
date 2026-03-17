import { motion } from "motion/react";
import { MessageSquare, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-neon font-bold tracking-widest text-xs uppercase mb-4">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
            Ready to Turn <br /> <span className="text-neon">Ai Vision On?</span>
          </h2>
          <p className="text-white/40 text-lg mb-12">Your next move starts here.</p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-black transition-all">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">WhatsApp</p>
                <p className="font-bold">03708452240</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-black transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Call Us</p>
                <p className="font-bold">03708452240</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5">
              <h4 className="text-2xl font-black text-neon mb-1">24h</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Response Time</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5">
              <h4 className="text-2xl font-black text-neon mb-1">Free</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Consultation</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5">
          <form className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:border-neon outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:border-neon outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Your Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:border-neon outline-none transition-all text-sm resize-none"
              />
            </div>
            <button className="w-full bg-neon text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all glow-box">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
