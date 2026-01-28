import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import { Hero } from "./Hero/Hero";
import Projects from "./Projects/Projects";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
