"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with Next.js 15, TailwindCSS, and TypeScript.",
    image: "/images/project1.jpg",
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.vercel.app",
  },
  {
    title: "E-commerce Store",
    description: "Full-stack e-commerce app with cart and payment integration.",
    image: "/images/project2.jpg",
    github: "https://github.com/your-username/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Topotas Travel Website",
    description: "Topotas Travel helps users apply for visas, Book Appointment,explore destinations, and contact support through a sleek interface.",
    image: "/images/to.png",
    github: "https://github.com/heisyomide/Topotas",
    demo: "https://topotasoptimumservices.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-400 text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-teal-400"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-teal-400"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button to view all projects */}
        <div className="text-center mt-10">
          <a
            href="/projects"
            className="btn-primary inline-block"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}