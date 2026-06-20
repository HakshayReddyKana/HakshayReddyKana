"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] z-0" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-purple-300 text-sm font-medium tracking-wide"
          >
            Incoming Software Engineer @ PayPal
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Kana Hakshay Reddy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            I architect scalable microservices, build real-time distributed systems, and design AI/ML solutions. Passionate about solving complex problems and building robust software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold transition-all hover:scale-105 hover:bg-slate-100"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-white font-semibold transition-all hover:scale-105 hover:bg-slate-800"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
