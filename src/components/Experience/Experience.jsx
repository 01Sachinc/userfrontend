import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-wrapper">

        <h2 className="experience-title">
          Professional <span>Experience</span>
        </h2>
        <p className="experience-subtitle">
          Hover to explore my journey
        </p>

        <div className="experience-grid">

          {/* CARD 1 */}
          <div className="experience-card glow-green">
            <div className="card-layer front">
              <h3>React Developer Intern</h3>
              <p className="company">Animelia</p>
              <span className="year">2024</span>
            </div>

            <div className="card-layer back">
              <p>
                Built scalable UI components, integrated APIs,
                optimized performance, and collaborated with backend teams.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="experience-card glow-blue">
            <div className="card-layer front">
              <h3>Frontend Developer</h3>
              <p className="company">Freelance</p>
              <span className="year">2023 – Present</span>
            </div>

            <div className="card-layer back">
              <p>
                Designed premium UIs, responsive layouts, glassmorphism,
                animations, and client-focused interfaces.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="experience-card glow-purple">
            <div className="card-layer front">
              <h3>Backend & Cloud Training</h3>
              <p className="company">Spring Boot + AWS</p>
              <span className="year">Hands-on</span>
            </div>

            <div className="card-layer back">
              <p>
                Developed REST APIs, JWT security, MySQL schemas,
                Linux deployment & AWS EC2 hosting.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
