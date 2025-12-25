import "./Projects.css";

const projects = [
  {
    title: "User Management System",
    description:
      "Full-stack system for managing users with authentication, validation and REST APIs.",
    tech: ["Java", "Spring Boot", "MySQL", "React (Vite)"],
    github: "https://github.com/SachinSomannachar/user-management",
    live: "#",
  },
  {
    title: "Authentication & Authorization API",
    description:
      "Secure backend API with JWT authentication and role-based access control.",
    tech: ["Spring Security", "JWT", "REST APIs", "MySQL"],
    github: "https://github.com/SachinSomannachar/auth-api",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Premium portfolio website using glassmorphism and enterprise-level UI design.",
    tech: ["React", "Vite", "CSS Glass UI", "REST APIs"],
    github: "https://github.com/SachinSomannachar/portfolio",
    live: "http://localhost:5173",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Real Applications & System Design
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* INITIAL STATE (TITLE ONLY) */}
              <div className="project-title">
                {project.title}
              </div>

              {/* HOVER STATE (DETAILS ONLY) */}
              <div className="project-details">
                <p>{project.description}</p>

                <ul>
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>

                <div className="project-buttons">
                  <a href={project.github} target="_blank">View Code</a>
                  <a href={project.live} target="_blank">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
