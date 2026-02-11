'use client';

import { motion } from 'framer-motion';

const About = () => {
  const interests = ["Games", "Music", "Travel", "Coding", "Cars", "Coffee"];

  return (
    <section id="about" className="relative bg-[#0A0A0A] text-white py-32 px-6 overflow-hidden">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Philosophical Intro */}
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.6em] text-indigo-400 font-medium mb-6 block"
            >
              System Origin
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none mb-8">
              Digital <br /><span className="italic font-serif">Intuition.</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed font-light">
              I am Ayomide. I don&apos;t just build interfaces;I sculpt digital experiences that bridge the gap between human intent and machine execution. I merge the precision of a Junior AppSec Engineer with the vision of a Full-Stack developer to engineer secure-by-default applications that protect user trust as much as they delight the eye.
            </p>
            
            <div className="mt-12 flex items-center gap-6">
               <div className="h-[1px] w-20 bg-white/10" />
               <a href="/Ayomide_Kofoworola_CV.pdf" className="text-[10px] uppercase tracking-widest hover:text-indigo-400 transition-colors">
                 Download Cv
               </a>
            </div>
          </div>

          {/* Right Column: Information Nodes */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            
            {/* Metadata Card */}
            <div className="p-8 bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-3xl">
              <p className="text-[10px] text-white/20 uppercase tracking-widest mb-8">Core.Info</p>
              <div className="space-y-4">
                {[
                  { label: 'Alias', val: 'Ayomide' },
                  { label: 'Uptime', val: 'Dec 28' },
                  { label: 'Sector', val: 'Lagos, NG' },
                  { label: 'Availability', val: 'Consultant / Freelance' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[10px] text-white/20 uppercase">{item.label}</span>
                    <span className="text-sm font-light text-white/80">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interest Nodes */}
            <div className="p-8 bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-3xl">
              <p className="text-[10px] text-white/20 uppercase tracking-widest mb-8">Interests.Map</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 bg-white/[0.05] hover:bg-indigo-500/20 hover:border-indigo-500/50 border border-transparent rounded-full text-[10px] text-white/60 transition-all cursor-crosshair"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Bridge */}
            <div className="md:col-span-2 p-8 bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/5 rounded-3xl">
              <p className="text-[10px] text-white/20 uppercase tracking-widest mb-4">Uplink.Secure</p>
              <p className="text-xl font-light tracking-tight text-white/90">ayomidekofoworola59@gmail.com</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;