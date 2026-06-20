"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Java", "Python", "C", "C++", "SQL", "JavaScript", "TypeScript"] },
  { category: "Backend & Frameworks", items: ["Spring Boot", "Next.js", "REST APIs", "Microservices", "WebSockets", "OAuth 2.0", "JWT Auth", "JUnit"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"] },
  { category: "Distributed Systems", items: ["Apache Kafka", "Event-Driven Architecture", "Caching", "Message Queues"] },
  { category: "AI & ML", items: ["PyTorch", "Neural Networks", "LLMs", "RAG", "MCP", "Explainable AI"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive overview of the tools, languages, and technologies I use to build scalable systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-colors"
            >
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-900/80 rounded-lg text-sm text-slate-300 font-medium border border-slate-700/50 hover:bg-slate-800 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
