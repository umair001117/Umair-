import { MessageSquare, Send, Phone } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import SocialJourney from "./components/SocialJourney";
import ServiceReviews from "./components/ServiceReviews";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Grid Background Overlay */}
      <div className="fixed inset-0 grid-bg z-0 pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <LogoSlider />
          <Services />
          <AboutUs />
          <WhyChooseUs />
          <ServiceReviews />
          <SocialJourney />
          <Contact />
        </main>
        
        <footer className="py-16 px-6 md:px-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="text-xl font-black tracking-tighter mb-6">
                Ai Vision<span className="text-neon">Studio</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed mb-6">Where local meets legendary.</p>
              <p className="text-neon text-xs font-bold uppercase tracking-widest">Premium Creative Agency</p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-xs text-white/40">
                <li><a href="#" className="hover:text-neon transition-colors">Branding & Identity</a></li>
                <li><a href="#" className="hover:text-neon transition-colors">Content Creation</a></li>
                <li><a href="#" className="hover:text-neon transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-neon transition-colors">Video Production</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-xs text-white/40">
                <li><a href="#" className="hover:text-neon transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-neon transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-neon transition-colors">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6">Get in Touch</h4>
              <ul className="space-y-4 text-xs text-white/40">
                <li className="flex items-center gap-2"><MessageSquare size={14} className="text-neon" /> Chat with us</li>
                <li className="flex items-center gap-2"><Send size={14} className="text-neon" /> umairrafiq271@gmail.com</li>
                <li className="flex items-center gap-2"><Phone size={14} className="text-neon" /> 03708452240</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-center text-white/20 text-[10px] uppercase tracking-widest font-bold">
            <p>© {new Date().getFullYear()} Ai Vision Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
