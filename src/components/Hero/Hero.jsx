import { useEffect, useState } from "react";
import "./Hero.css";

const splitText = (text) =>
  text.split("").map((char, i) => (
    <span className="char" key={i}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const Hero = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const goNext = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-letter" id="home">
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>

      <div className="hero-container">
        {/* Robotic intro */}
        <p className="hero-intro">
          <span className="dot"></span> FULL STACK DEVELOPER
        </p>

        {/* Big letters */}
        <h1 className="hero-title">
          {splitText("Crafting")}
          <br />
          {splitText("Digital")}
          <br />
          {splitText("Experiences")}
        </h1>

        <p className="hero-desc tech-desc">
          I BUILD SCALABLE, SECURE AND HIGH-PERFORMANCE WEB APPLICATIONS
        </p>

        <div className="hero-actions">
          <button className="hero-primary">
            Full Stack Developer
          </button>

          <button className="hero-next" onClick={goNext}>
            Next Page →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
