import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import LeetCode from "@/components/LeetCode";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Skills />
      <LeetCode />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
