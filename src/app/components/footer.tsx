"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] pt-32 pb-10 px-6 overflow-hidden border-t border-white/5">
      {/* Background Ambient Source */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Status Section */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-light tracking-[0.3em] text-white uppercase">
                A. <span className="font-serif italic text-indigo-400">Kofoworola</span>
              </h3>
              <p className="text-white/40 text-sm font-light max-w-sm leading-relaxed">
                Architecting high-fidelity digital environments through minimalist design and neural-inspired logic.
              </p>
            </div>

            {/* Live System Monitor */}
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/[0.02] border border-white/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                System Status: <span className="text-indigo-400">Operational</span>
              </span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">// Map</h4>
              <ul className="space-y-4 text-sm font-light text-white/50">
                <li><Link href="#about" className="hover:text-indigo-400 transition-colors">About</Link></li>
                <li><Link href="#skills" className="hover:text-indigo-400 transition-colors">Skills</Link></li>
                <li><Link href="#projects" className="hover:text-indigo-400 transition-colors">Projects</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">// Connect</h4>
              <ul className="space-y-4 text-sm font-light text-white/50">
                <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
                <li><a href="mailto:ayomidekofoworola59@gmail.com" className="hover:text-indigo-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          {/* Social Uplinks */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">// Uplinks</h4>
            <div className="flex gap-6 text-white/30">
              <a href="#" className="hover:text-indigo-400 transition-all hover:scale-110"><FaGithub size={18} /></a>
              <a href="#" className="hover:text-indigo-400 transition-all hover:scale-110"><FaLinkedin size={18} /></a>
              <a href="#" className="hover:text-indigo-400 transition-all hover:scale-110"><FaTwitter size={18} /></a>
              <a href="#" className="hover:text-indigo-400 transition-all hover:scale-110"><FaInstagram size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            © {currentYear} Ayomide Kofoworola. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-8 opacity-20 hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]">web developer</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]">cybersecurity</span>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="cursor-pointer text-[10px] font-mono text-indigo-400/60 uppercase tracking-[0.5em] border border-indigo-500/20 px-4 py-2 rounded"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back_To_Top ↑
          </motion.div>
        </div>
      </div>
    </footer>
  );
}