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
    description:
      "High-fidelity logistics platform with secure visa processing and mission scheduling.",
    image: "/images/to.png",
    github: "https://github.com/heisyomide/Topotas",
    demo: "https://topotasoptimumservices.com",
    tag: "Next.js / Logistics",
    year: "2025",
  },
  {
    title: "Aviorè Careers",
    description:
      "Career management platform for aviation professionals and recruitment workflows.",
    image: "/images/aviore1.PNG",
    github: "https://github.com/heeisyomide/avia-careers",
    demo: "https://aviore-careers.vercel.app",
    tag: "Next.js / Careers",
    year: "2025",
  },
  {
    title: "Aviorè Shop",
    description:
      "Retail interface for aviation equipment and luxury pilot accessories.",
    image: "/images/avi.jpeg",
    github: "https://github.com/eheisyomide/avia-shop",
    demo: "https://aviore-shop.vercel.app",
    tag: "E-Commerce",
    year: "2025",
  },
  {
    title: "HealthMe",
    description:
      "Comprehensive health tracking and wellness platform with smart analytics.",
    image: "/images/health.jpeg",
    github: "https://github.com/heisyeomide/healthme-frontend",
    demo: "https://healthme-frontend.vercel.app",
    tag: "Health Tech",
    year: "2024",
  },
  {
    title: "TraceAm",
    description:
      "Nigeria’s leading personal security and background verification platform.",
    image: "/images/traceam.jpeg",
    github: "https://github.com/heiesyomeide/traceam",
    demo: "https://traceam.vercel.app",
    tag: "Security / Full Stack",
    year: "2024",
  },
  {
    title: "LinkMart",
    description:
      "Connection-driven interface for high-speed networking and data exchange.",
    image: "/images/vercel.png",
    github: "https://github.com/heisyoemide/linkmate-frontend",
    demo: "https://www.linkmart.online/",
    tag: "Marketplace",
    year: "2025",
  },
  {
    title: "Kivora",
    description:
      "Luxury jewelry shopping experience with premium product showcase and checkout flow.",
    image: "/images/kivora.jpg",
    github: "https://github.com/yourusername/kivora",
    demo: "https://kivora.vercel.app",
    tag: "Luxury Commerce",
    year: "2025",
  },
  {
    title: "Kylos",
    description:
      "Waste-to-wealth platform focused on recycling, sustainability, and rewards.",
    image: "/images/kylos.jpg",
    github: "https://github.com/yourusername/kylos",
    demo: "https://kylos.vercel.app",
    tag: "Green Tech",
    year: "2025",
  },
  {
    title: "Lumavolt",
    description:
      "Solar energy sales company website with product catalogs and lead generation.",
    image: "/images/lumavolt.jpg",
    github: "https://github.com/yourusername/lumavolt",
    demo: "https://lumavolt.vercel.app",
    tag: "Solar / Business",
    year: "2025",
  },
  {
    title: "Dental Clinic",
    description:
      "Modern dental healthcare booking and appointment management platform.",
    image: "/images/dental.jpg",
    github: "https://github.com/yourusername/dental-clinic",
    demo: "https://dental-clinic.vercel.app",
    tag: "Healthcare",
    year: "2024",
  },
  {
    title: "CypherX",
    description:
      "Cryptocurrency trading dashboard with live market insights and wallet tracking.",
    image: "/images/cypherx.jpg",
    github: "https://github.com/yourusername/cypherx",
    demo: "https://cypherx.vercel.app",
    tag: "Fintech / Crypto",
    year: "2025",
  },
  {
    title: "Afbam",
    description:
      "Professional plumbing company platform for bookings and service requests.",
    image: "/images/afbam.jpg",
    github: "https://github.com/yourusername/afbam",
    demo: "https://afbam.vercel.app",
    tag: "Service Business",
    year: "2024",
  },
];

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.08 }}
      className="group"
    >
      <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] px-3 py-1 rounded-full bg-black/40 border border-white/10">
            {project.year}
          </span>
        </div>
      </div>

      <div className="space-y-4 px-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-widest text-indigo-400">
            {project.tag}
          </span>
          <div className="h-[1px] flex-1 mx-4 bg-white/10" />
        </div>

        <h2 className="text-3xl font-light group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h2>

        <p className="text-white/40 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-8 pt-2">
          <a
            href={project.github}
            className="flex items-center gap-2 text-xs text-white/40 hover:text-white"
          >
            <FaGithub /> Source
          </a>

          <a
            href={project.demo}
            className="flex items-center gap-2 text-xs text-indigo-400 hover:text-white"
          >
            Live <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.8em] text-indigo-400">
            Project Vault
          </span>

          <h1 className="text-6xl md:text-8xl font-light mt-4">
            Featured <span className="italic font-serif">Projects.</span>
          </h1>

          <p className="text-white/40 mt-4 max-w-xl">
            A collection of products, platforms, and digital systems built
            across fintech, health, logistics, energy, and commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </main>
  );
}