"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with Next.js 15, TailwindCSS, and TypeScript to showcase my skills and projects.",
    image: "/images/project1.jpg", // put your project screenshot in public/images
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.vercel.app",
  },
  {
    title: "E-commerce Store",
    description:
      "A full-stack e-commerce application with product listing, shopping cart, and payment integration.",
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

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gray-950 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 text-center mb-12">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="card rounded-lg overflow-hidden bg-gray-900 shadow-lg hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
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
      </div>
    </section>
  );
}