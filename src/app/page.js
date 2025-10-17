import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import About from "@/components/about";
import Certification from "@/components/certification";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
