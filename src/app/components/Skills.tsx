'use client'
import { motion } from 'framer-motion'

const technicalSkills = [
  // --- Core Development ---
  { name: "Next.js 16", level: 85, sector: "Architecture" },
  { name: "TypeScript", level: 88, sector: "Type Safety" },
  { name: "Tailwind CSS", level: 90, sector: "Aesthetics" },
  { name: "JavaScript", level: 88, sector: "Core" },

  // --- AppSec & Security Engineering ---
  { name: "OWASP Top 10", level: 82, sector: "Vulnerability Research" },
  { name: "Python (Security)", level: 75, sector: "Automation/Scripting" },
  { name: "Burp Suite", level: 70, sector: "Pentesting" },
  { name: "Static Analysis (SAST)", level: 78, sector: "Code Auditing" },
  { name: "JWT & OAuth 2.0", level: 85, sector: "Identity/IAM" },
  { name: "SQL Injection/XSS", level: 80, sector: "Threat Remediation" },
  { name: "Docker Security", level: 65, sector: "DevSecOps" },
];

const professionalSkills = [
  { name: "Global Comm", level: 95 },
  { name: "UX Strategy", level: 85 },
  { name: "Lead Dev", level: 90 },
  { name: "Agile Logic", level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0A0A0A] py-32 px-6 overflow-hidden">
      {/* Background Neural Light Source */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.8em] text-indigo-400 font-bold block">Internal Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
            System <span className="font-serif italic opacity-80">Proficiency.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Technical Section */}
          <div className="space-y-12">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4">
              // Technical_Nodes
            </h3>
            <div className="grid gap-10">
              {technicalSkills.map((skill, idx) => (
                <div key={skill.name} className="group relative">
                  <div className="flex justify-between items-end mb-3">
                    <div className="space-y-1">
                      <span className="text-[10px] text-indigo-400/60 font-mono uppercase tracking-widest block">
                        {skill.sector}
                      </span>
                      <span className="text-xl font-light tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">
                      Power_lvl: {skill.level}%
                    </span>
                  </div>
                  
                  {/* Minimalist Neural Track */}
                  <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-indigo-500 to-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Section */}
          <div className="space-y-12">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4">
              // Soft_Processing
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all duration-500"
                >
                  <div className="flex flex-col gap-4">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                       <svg className="absolute inset-0 w-full h-full -rotate-90">
                          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-white/5" />
                          <motion.circle 
                            cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" fill="transparent" 
                            strokeDasharray="88"
                            initial={{ strokeDashoffset: 88 }}
                            whileInView={{ strokeDashoffset: 88 - (88 * skill.level) / 100 }}
                            className="text-indigo-500"
                          />
                       </svg>
                       <span className="text-[8px] font-mono text-white/40">{skill.level}%</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}