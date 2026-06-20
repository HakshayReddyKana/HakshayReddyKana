"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "PingMe: Scalable Real-Time Communication Platform",
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "WebSockets", "Docker", "AWS", "Next.js"],
    description: "Architected a scalable real-time messaging platform using microservices. Designed an event-driven pipeline with Kafka and leveraged Redis caching to reduce retrieval latency by 70%. Implemented JWT, RBAC, typing indicators, and read receipts.",
    github: "https://github.com/HakshayReddyKana/PingMe-SpringBoot",
    demo: "https://pingme.hakshay.engineer/"
  },
  {
    title: "Privacy-Preserving Face Forgery Detection using Federated Learning",
    tech: ["Python", "PyTorch", "Vision Transformers", "Federated Learning", "Flower Framework"],
    description: "Developed a privacy-preserving federated learning framework across distributed nodes. Designed a dual-stream Vision Transformer architecture with spatial and frequency-domain features, achieving 95.12% accuracy on FaceForensics++.",
    github: "https://github.com/HakshayReddyKana/SDP",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-950/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a href={project.github} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <FaGithub className="w-5 h-5" /> <span>Source</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink className="w-5 h-5" /> <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
