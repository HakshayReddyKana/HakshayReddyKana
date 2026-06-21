"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <footer id="contact" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-slate-400 text-lg mb-12">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology and distributed systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:hakshayreddy.k@gmail.com" className="flex items-center gap-3 px-6 py-3 glass rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>hakshayreddy.k@gmail.com</span>
            </a>
            <a href="tel:+919398237819" className="flex items-center gap-3 px-6 py-3 glass rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+91 9398237819</span>
            </a>
            <div className="flex items-center gap-3 px-6 py-3 glass rounded-full text-slate-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Anantapur, Andhra Pradesh</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/HakshayReddy" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-slate-400 hover:text-blue-400 hover:scale-110 transition-all">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/HakshayReddyKana" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-slate-400 hover:text-white hover:scale-110 transition-all">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/Hakshay_Reddy_K_eight" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-slate-400 hover:text-orange-400 hover:scale-110 transition-all flex items-center justify-center font-bold font-mono">
              LC
            </a>
          </div>
        </motion.div>

        <div className="mt-24 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Kana Hakshay Reddy. Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
