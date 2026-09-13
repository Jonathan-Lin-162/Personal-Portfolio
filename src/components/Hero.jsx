import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <p className="hero-intro">Hello!</p>

        <h1>I'm Ye Naing (Jonathan) Lin.</h1>

        <p className="hero-description">
          BCIT Computer Systems Technology student focused on software
          development and building full-stack web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

          <a
            href="/resume/Ye-Naing-Lin-Resume.pdf"
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Jonathan-Lin-162"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jonathan-lin-bcit"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
