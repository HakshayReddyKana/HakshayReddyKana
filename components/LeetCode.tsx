"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function LeetCode() {
  return (
    <section id="leetcode" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm text-orange-400 text-sm font-medium tracking-wide">
            Top 4.4% Globally
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">LeetCode Knight</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Consistent problem solving and mastery of data structures and algorithms. Ranked in the top 4.4% of competitive programmers worldwide with over 1000+ problems solved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <a 
            href="https://leetcode.com/u/Hakshay_Reddy_K_eight" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative block w-full rounded-2xl overflow-hidden glass-card p-2 border border-slate-700/50 hover:border-orange-500/50 transition-colors"
          >
            <img 
              src="/imgs/leetcode_knight_stats.png" 
              alt="LeetCode Knight Stats" 
              className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500"
            />
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl pointer-events-none">
              <div className="flex items-center gap-2 px-8 py-4 bg-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)] text-white font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-orange-400 hover:scale-105">
                View Full Profile <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
