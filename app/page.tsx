"use client"; // 只在客户端渲染

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen w-screen snap-y snap-mandatory 
    overflow-scroll z-0"
    >
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section>
        <Projects />
      </section>

      {/* Contact Me */}
    </div>
  );
}
