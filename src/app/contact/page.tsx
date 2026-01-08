"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SYNCING...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("STABLISED: MESSAGE RECEIVED");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR: LINK FAILED");
      }
    } catch (err) {
      setStatus("ERROR: SYSTEM TIMEOUT");
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-40 pb-20 px-6 overflow-hidden relative">
      {/* Background Neural Light Source */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.8em] text-indigo-400 font-bold block">Terminal Uplink</span>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white leading-none">
            Contact <span className="font-serif italic opacity-80">Me.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Form: Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 ml-2">Operator Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all outline-none"
                    placeholder="Identify yourself"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 ml-2">Return Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all outline-none"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30 ml-2">Transmission Data</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 text-sm h-48 focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all outline-none resize-none"
                  placeholder="Enter your message sequence..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative w-full md:w-auto px-12 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-500"
              >
                Send Email
                <div className="absolute inset-0 rounded-full bg-indigo-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
              
              {status && (
                <p className="font-mono text-[10px] text-indigo-400 mt-4 tracking-widest animate-pulse">
                  {">"} {status}
                </p>
              )}
            </form>
          </motion.div>

          {/* Info + Map: Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-xl">
              <h2 className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.4em] mb-8">// Metadata</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-[10px] text-white/20 uppercase">Email</span>
                  <span className="text-xs font-light">ayomidekofoworola59@gmail.com</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-[10px] text-white/20 uppercase">Phone</span>
                  <span className="text-xs font-light">+234 915 160 2921</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-[10px] text-white/20 uppercase">Sector</span>
                  <span className="text-xs font-light italic">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Google Map with Grayscale Mask */}
            <div className="rounded-[2.5rem] overflow-hidden h-72 border border-white/5 relative grayscale brightness-50 contrast-125 hover:grayscale-0 hover:brightness-100 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.50257321683!2d3.3079203!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a3da577a9!2sLagos!5e0!3m2!1sen!2sng!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-[#0A0A0A] rounded-[2.5rem]" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;