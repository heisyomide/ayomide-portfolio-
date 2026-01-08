"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["about", "skills", "projects"];

  // Handle scroll effect for glass intensity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Logic
  const scrollToSection = (id: string) => {
    setOpen(false); // Close mobile menu
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for the floating navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        
        {/* Logo / Branding - Click to go top */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-light tracking-[0.3em] text-white uppercase cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          A. <span className="font-serif italic text-indigo-400">Kofoworola</span>
        </motion.div>

        {/* Floating Capsule Menu (Desktop) */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`hidden md:flex items-center px-8 py-3 rounded-full border transition-all duration-500 ${
            scrolled 
            ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-2xl shadow-indigo-500/10" 
            : "bg-transparent border-transparent"
          }`}
        >
          <ul className="flex space-x-10">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollToSection(link)}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-indigo-400 transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
            <li className="border-l border-white/10 pl-10">
              <Link 
                href="/contact" 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
          >
            <div className="space-y-1.5">
              <div className={`w-5 h-px bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-5 h-px bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[2px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Glass Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(25px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-black/80 md:hidden flex flex-col items-center justify-center z-[-1] pointer-events-auto"
          >
            <ul className="text-center space-y-10">
              {links.map((link, idx) => (
                <motion.li 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link}
                >
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-3xl font-light uppercase tracking-[0.4em] text-white/80 hover:text-indigo-400"
                  >
                    {link}
                  </button>
                </motion.li>
              ))}
              <motion.li 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="text-3xl font-serif italic text-indigo-400"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;