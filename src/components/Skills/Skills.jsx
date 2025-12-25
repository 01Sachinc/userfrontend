import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">

        <h2 className="skills-title">
          Technical <span>Skills</span>
        </h2>
        <p className="skills-subtitle">Technologies I work with</p>

        <div className="skills-grid">

          <div className="skill-card glow-green">
            <div className="skill-front">Backend</div>
            <div className="skill-content">
              <h3>Backend Development</h3>
              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>REST APIs</li>
                <li>JWT Security</li>
              </ul>
            </div>
          </div>

          <div className="skill-card glow-blue">
            <div className="skill-front">Frontend</div>
            <div className="skill-content">
              <h3>Frontend Development</h3>
              <ul>
                <li>React (Vite)</li>
                <li>JavaScript ES6+</li>
                <li>HTML & CSS</li>
                <li>Responsive UI</li>
              </ul>
            </div>
          </div>

          <div className="skill-card glow-purple">
            <div className="skill-front">Database</div>
            <div className="skill-content">
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li>JPA / Hibernate</li>
                <li>Schema Design</li>
                <li>CRUD Ops</li>
              </ul>
            </div>
          </div>

          <div className="skill-card glow-cyan">
            <div className="skill-front">Tools</div>
            <div className="skill-content">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>VS Code</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
