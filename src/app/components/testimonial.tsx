'use client'

import { motion } from 'framer-motion'
import StarRating from "./StarRating";

const staticTestimonials = [
  {
    name: "Alex Sterling",
    role: "CEO, NexaCorp",
    content: "The neural-inspired architecture Ayomide built for our dashboard transformed how we visualize our metrics.",
    tag: "Protocol_01"
  },
  {
    name: "Sarah Chen",
    role: "UX Director",
    content: "Minimalism at its peak. The Ether UI is not just a design; it's a high-performance experience.",
    tag: "Protocol_02"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Luminous Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.8em] text-indigo-400 font-bold block">
            Client Synchronization
          </span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
            Human <span className="font-serif italic opacity-80">Feedback.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {staticTestimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] relative overflow-hidden group"
            >
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
              
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8 italic">
                &quot;{item.content}&quot;
              </p>
              
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <h4 className="text-white font-medium tracking-tight uppercase text-xs">{item.name}</h4>
                  <p className="text-indigo-400/50 font-mono text-[9px] uppercase tracking-widest">{item.role}</p>
                </div>
                <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.3em]">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Rating Integration */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative pt-20 border-t border-white/5"
        >
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-32 h-[1px] bg-indigo-500 shadow-[0_0_10px_indigo]" />
          
          <div className="text-center space-y-8">
            <h3 className="text-[10px] font-mono font-black text-white/30 uppercase tracking-[0.5em]">
              Initialize_Rating_Sequence
            </h3>
            
            <div className="scale-110">
              <StarRating />
            </div>
            
            <p className="text-white/20 text-[9px] font-mono uppercase tracking-widest">
              // Data is synchronized in real-time via Supabase Neural-Link
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}