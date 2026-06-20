"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const achievements = [
  {
    year: "2023",
    title: "Top CGPA Award - 9th Rank",
    description: "Received top CGPA award for the 9th rank overall at University Day 2023.",
    image: "/imgs/9th_rank_2023.jpg",
  },
  {
    year: "2024",
    title: "Top CGPA Award - 2nd Rank",
    description: "Awarded top CGPA for achieving the 2nd rank at University Day 2024.",
    image: "/imgs/2nd_rank_2024.jpg",
  },
  {
    year: "Summer 2025",
    title: "Software Engineer Intern @ PayPal",
    description: "Migrated database-driven batch jobs to Spring Boot microservices, developed internal Next.js platforms, and integrated AI assistant features.",
    image: "/imgs/PayPal_intern_2025.jpeg",
  },
  {
    year: "2024 - 2025",
    title: "Nova Code Challenge - Runner Up",
    description: "Secured Runner Up position and won an ₹80,000 cash prize in the CP challenge among 500+ students.",
    image: "/imgs/9am_2nd_rank_80000CashPrize.jpg",
    link: "https://9am.careers/code-challenges/9amNCCFRESH2026/",
  },
  {
    year: "2026",
    title: "Chancellor's Gold Medalist & Best Outgoing Student",
    description: "Awarded 1st Rank and recognized as the Best Outgoing Student for exceptional academic and co-curricular performance.",
    images: [
      "/imgs/Best_outgoing_student_award.jpg",
      "/imgs/OverallFirstRank_2026.jpg",
      "/imgs/Recieving_Best_outgoing_student_award.jpg",
    ],
  },
  {
    year: "July 2026",
    title: "Incoming Software Engineer @ PayPal",
    description: "Joining PayPal as a full-time Software Engineer to continue building scalable distributed systems.",
    image: "/imgs/PayPal_Logo_for_fulltime_offer.gif",
  },
];

type SelectedImageData = {
  src: string;
  title: string;
  description: string;
  year: string;
};

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<SelectedImageData | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section id="achievements" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Journey & Milestones</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A timeline of my academic achievements, competitive programming success, and professional growth.</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-24">
              {achievements.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)] hidden md:block"></div>

                    {/* Content Container */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className={`w-full md:w-1/2 flex ${isEven ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12 md:ml-auto"}`}
                    >
                      <div className="glass-card p-6 rounded-2xl w-full group hover:border-purple-500/30 transition-all duration-300">
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 text-cyan-300 text-xs font-semibold tracking-wider mb-4 border border-slate-700/50">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-300 text-sm mb-6 leading-relaxed">{item.description}</p>
                        
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors mb-6">
                            View Challenge <ExternalLink className="w-4 h-4" />
                          </a>
                        )}

                        {/* Images Display */}
                        <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-slate-700/30 group-hover:border-slate-500/30 transition-colors">
                          {item.image ? (
                            <div className="relative w-full cursor-pointer" onClick={() => setSelectedImage({src: item.image, title: item.title, description: item.description, year: item.year})}>
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                          ) : item.images ? (
                            <div className="grid grid-cols-2 w-full bg-slate-900/20">
                              <div className="w-full h-full cursor-pointer overflow-hidden group/img1" onClick={() => setSelectedImage({src: item.images![0], title: item.title, description: item.description, year: item.year})}>
                                <img src={item.images[0]} alt="Award 1" className="w-full h-full object-cover block transform group-hover/img1:scale-110 transition-transform duration-500" />
                              </div>
                              <div className="grid grid-rows-2 w-full h-full">
                                <div className="w-full h-full cursor-pointer overflow-hidden group/img2" onClick={() => setSelectedImage({src: item.images![1], title: item.title, description: item.description, year: item.year})}>
                                  <img src={item.images[1]} alt="Award 2" className="w-full h-full object-cover block transform group-hover/img2:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="w-full h-full cursor-pointer overflow-hidden group/img3" onClick={() => setSelectedImage({src: item.images![2], title: item.title, description: item.description, year: item.year})}>
                                  <img src={item.images[2]} alt="Award 3" className="w-full h-full object-cover block transform group-hover/img3:scale-110 transition-transform duration-500" />
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </motion.div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Lightbox with Side Description */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 lg:p-16 backdrop-blur-md cursor-pointer"
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col lg:flex-row w-full max-w-7xl max-h-[90vh] bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="flex-1 bg-black/60 flex items-center justify-center overflow-hidden relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
              
              {/* Description Panel */}
              <div className="w-full lg:w-96 flex-shrink-0 bg-slate-900 p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-700/50">
                <span className="inline-block self-start py-1 px-3 rounded-full bg-slate-800/80 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 border border-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                  {selectedImage.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {selectedImage.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6"></div>
                <p className="text-slate-300 text-base leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
