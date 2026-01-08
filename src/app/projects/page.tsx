"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tag: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Topotas Ecosystem",
    description: "A high-fidelity logistics platform featuring secure uplinks and mission-critical scheduling.",
    image: "/images/to.png",
    github: "https://github.com/heisyomide/Topotas",
    demo: "https://topotasoptimumservices.com",
    tag: "Next.js / Logic",
    year: "2025"
  },
  {
    title: "Neural Commerce",
    description: "Architectural e-commerce interface featuring seamless payment bridges and real-time inventory.",
    image: "/images/project2.jpg",
    github: "https://github.com/heisyomide/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    tag: "Full-Stack",
    year: "2024"
  },
  {
    title: "Ether Portfolio",
    description: "A minimalist, neural-inspired developer dossier utilizing luminous brutalism and glassmorphism.",
    image: "/images/project1.jpg",
    github: "https://github.com/heisyomide/portfolio",
    demo: "https://your-portfolio.vercel.app",
    tag: "UX / Design",
    year: "2025"
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-40 pb-20 px-6 relative">
      {/* Background Neural Light Source */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Archive Info */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-white/5 pb-12 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.8em] text-indigo-400 font-bold block">Archive_V2.0</span>
            <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white leading-none">
              Project <span className="font-serif italic opacity-80">Vault.</span>
            </h1>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest leading-loose">
              Total_Modules: {projects.length} <br />
              Encryption: Active <br />
              Status: All_Systems_Stable
            </p>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group"
            >
              {/* Image Portal */}
              <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                
                {/* Year Badge */}
                <div className="absolute bottom-6 left-6">
                   <span className="text-[10px] font-mono text-white/40 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                    Est: {project.year}
                  </span>
                </div>
              </div>

              {/* Data Panel */}
              <div className="px-4 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">{project.tag}</span>
                  <div className="h-[1px] flex-1 mx-6 bg-white/5" />
                </div>

                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h2>
                
                <p className="text-white/40 text-sm leading-relaxed font-light max-w-md">
                  {project.description}
                </p>

                <div className="flex gap-10 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all group/link"
                  >
                    <FaGithub className="group-hover/link:text-indigo-400" /> Source_Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-indigo-400 hover:text-white transition-all group/link"
                  >
                    Live_Deployment <FaExternalLinkAlt className="text-[8px] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}