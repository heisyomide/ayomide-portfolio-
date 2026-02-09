"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [
  {
    title: "Topotas Ecosystem",
    description: "High-fidelity logistics platform with secure visa processing and mission scheduling.",
    image: "/images/to.png",
    github: "https://github.com/heisyomide/Topotas",
    demo: "https://topotasoptimumservices.com",
    tag: "Next.js / Logic"
  },
  {
    title: "Neural Commerce",
    description: "Architectural e-commerce interface featuring seamless payment bridges.",
    image: "/images/project2.jpg",
    github: "https://github.com/heisyomide/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    tag: "Full-Stack"
  },
  {
    title: "Aviorè Careers",
    description: "A specialized platform for aviation professionals to manage career paths and applications.",
    image: "/images/aviore1.PNG",
    github: "https://github.com/heisyomide/avia-careers",
    demo: "https://avia-careers.vercel.app",
    tag: "Next.js / Careers"
  },
  {
    title: "Aviorè Shop",
    description: "Retail interface for aviation equipment and luxury pilot accessories.",
    image: "/images/avi.jpeg",
    github: "https://github.com/heisyomide/avia-shop",
    demo: "https://aviore-shop.vercel.app",
    tag: "E-Commerce"
  },
  {
    title: "HealthMe",
    description: "Comprehensive health tracking and wellness platform with data visualization.",
    image: "/images/health.jpeg",
    github: "https://github.com/heisyomide/healthme-frontend",
    demo: "https://healthme-frontend.vercel.app",
    tag: "Full-Stack / Health"
  },
  {
    title: "TraceAm",
    description: "Instant background checks. Nigeria Leading Personal Security Network.",
    image: "/images/traceam.jpeg",
    github: "https://github.com/heisyomide/traceam",
    demo: "https://traceam.vercel.app",
    tag: "UX / Frontend"
  },
  {
    title: "LinkMart",
    description: "A connection-driven interface designed for high-speed networking and data sharing.",
    image: "/images/linkmat.jpg",
    github: "https://github.com/heisyomide/linkmat-frontend",
    demo: "https://linkmat-demo.vercel.app",
    tag: "React / Design"
  },
  {
    title: "Portfolio",
    description: "A minimalist, neural-inspired developer dossier using luminous brutalism.",
    image: "/images/port.png",
    github: "https://github.com/heisyomide/ayomide-portfolio",
    demo: "https://ayomide-portfolio.vercel.app",
    tag: "UX / Design"
  },
  {
    title: "LinkMart",
    description: "A connection-driven interface designed for high-speed networking and data sharing.",
    image: "/images/vercel.png",
    github: "https://github.com/heisyomide/linkmat-frontend",
    demo: "https://linkmat-demo.vercel.app",
    tag: "React / Design"
  },

];
export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Radial Source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.8em] text-indigo-400 font-bold block">Production Logs</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
              Featured <span className="font-serif italic opacity-80">Works.</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs font-light leading-relaxed">
            // A curation of high-performance web environments and digital architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col"
            >
              {/* Image Portal */}
              <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                {/* Tech Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[8px] uppercase tracking-widest text-white/50 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-8 px-2">
                <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="flex space-x-8">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all"
                  >
                    <FaGithub /> Source
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-indigo-400 hover:text-indigo-300 transition-all"
                  >
                    Live Preview <FaExternalLinkAlt className="text-[8px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-24">
          <a
            href="/projects"
            className="relative inline-flex items-center gap-4 group"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">View Complete Archive</span>
            <div className="h-[1px] w-12 bg-indigo-500 group-hover:w-20 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}