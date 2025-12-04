import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { ProjectsGrid } from './components/ProjectsGrid';
import { CV } from './components/CV';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4EFE4]">
      <Hero />
      <About />
      <Skills />
      <ProjectsCarousel />
      <ProjectsGrid />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}
