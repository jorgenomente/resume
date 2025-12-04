"use client";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CV } from "./components/CV";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ProjectsCarousel } from "./components/ProjectsCarousel";
import { Skills } from "./components/Skills";

export default function PaolakzPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE4]">
      <Hero />
      <About />
      <Skills />
      <ProjectsCarousel />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}
