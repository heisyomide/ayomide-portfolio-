'use client';

import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaPinterest, 
  FaTiktok 
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#0A0A0A] overflow-hidden px-6"
    >
      {/* Background Luminous Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Profile Image with "Ether" Glow */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-110 animate-pulse" />
          <div className="w-44 h-44 rounded-full border border-white/10 overflow-hidden relative z-10 p-1 bg-gradient-to-b from-white/20 to-transparent">
            <img
              src="/images/pro.jpg"
              alt="Ayomide Kofoworola"
              className="w-full h-full object-cover rounded-full  transition-all duration-700"
            />
          </div>
        </div>

        {/* Text Stack */}
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.8em] text-indigo-400 font-bold block"
          >
            Digital Architect
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white leading-none">
            Ayomide <span className="font-serif italic opacity-80">Kofoworola.</span>
          </h1>
          
          <p className="text-white/40 text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed">
            Crafting high-fidelity web environments through <br className="hidden md:block"/> 
            minimalist design and neural logic.
          </p>
        </div>

        {/* Floating Social Hub */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12 px-6 py-4 bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-full"
        >
          {[
            { icon: <FaGithub />, link: "https://github.com/heisyomide" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaTwitter />, link: "https://x.com/he_is_yo?s=21" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/1GnCQxft29/?mibextid=wwXIfr" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/heis_yo?igsh=MWI4cXJ5Zmw0NHcxOQ%3D%3D" },
            { icon: <FaPinterest />, link: "https://pin.it/svBTEcxxp" },
            { icon: <FaTiktok />, link: "https://www.tiktok.com/@yomide132" }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/30 hover:text-indigo-400 transition-all duration-300 hover:scale-125"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;