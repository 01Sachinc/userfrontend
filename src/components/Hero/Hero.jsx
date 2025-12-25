import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <h1>
            Hi, I’m <span>Sachin</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p>
            I build scalable, secure, and high-performance web applications
            using <strong>React</strong>, <strong>Spring Boot</strong> and <strong>MySQL</strong>.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;