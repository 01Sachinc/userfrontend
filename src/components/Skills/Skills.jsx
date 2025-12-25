import "./Skills.css"

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-header">
          <h2>Technical Skills</h2>
          <p>Technologies I Work With</p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Backend Development</h3>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
              <li>JWT Authentication</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Frontend Development</h3>
            <ul>
              <li>React (Vite)</li>
              <li>HTML5, CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>Responsive UI</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>JPA / Hibernate</li>
              <li>Database Design</li>
              <li>CRUD Operations</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>Linux (Ubuntu)</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;