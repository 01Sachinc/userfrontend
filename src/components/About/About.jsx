import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-header">
          <h2>About Me</h2>
          <p>Professional Profile</p>
        </div>

        <div className="about-content">
          <p>
            I am <strong>Sachin</strong>, a passionate <strong>Full Stack Developer</strong>
            with hands-on experience in building scalable web applications.
            I specialize in developing secure backend systems and modern,
            responsive frontend interfaces.
          </p>

          <p>
            My core expertise lies in <strong>Java, Spring Boot, REST APIs</strong>,
            and <strong>MySQL</strong>, along with frontend technologies like
            <strong> React</strong>. I focus on clean architecture, performance,
            and maintainable code.
          </p>

          <p>
            I am actively building real-world projects and continuously improving
            my skills to deliver enterprise-level solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
