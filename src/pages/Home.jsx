import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Project";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}
