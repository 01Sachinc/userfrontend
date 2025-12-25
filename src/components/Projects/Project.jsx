import "./Projects.css";


const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-header">
          <h2>Projects</h2>
          <p>Real Applications & System Design</p>
        </div>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <h3>User Management System</h3>
            <p className="project-desc">
              A full-stack web application to manage users with authentication,
              validation, and RESTful APIs.
            </p>

            <ul className="project-tech">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>React (Vite)</li>
            </ul>

            <div className="project-actions">
              <a href="#" className="btn primary">View Code</a>
              <a href="#" className="btn secondary">Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Authentication & Authorization API</h3>
            <p className="project-desc">
              Secure backend authentication system with login, registration,
              validation, and role-based access control.
            </p>

            <ul className="project-tech">
              <li>Spring Security</li>
              <li>JWT</li>
              <li>REST APIs</li>
              <li>MySQL</li>
            </ul>

            <div className="project-actions">
              <a href="#" className="btn primary">View Code</a>
              <a href="#" className="btn secondary">API Docs</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p className="project-desc">
              Professional portfolio website inspired by enterprise UI design,
              integrated with backend APIs.
            </p>

            <ul className="project-tech">
              <li>React</li>
              <li>Vite</li>
              <li>Axios</li>
              <li>REST APIs</li>
            </ul>

            <div className="project-actions">
              <a href="#" className="btn primary">View Code</a>
              <a href="#" className="btn secondary">Live Site</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;