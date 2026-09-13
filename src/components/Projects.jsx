import "../styles/projects.css";

function Projects(props) {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <p className="projects-description">
          Selected projects I've built through personal work, coursework, and
          team development.
        </p>

        <div className="projects-list">
          {props.projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-header">
                <h3>
                  {project.title} | {project.type}
                </h3>
                <p className="project-date">{project.date}</p>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-primary-link"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-secondary-link"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
