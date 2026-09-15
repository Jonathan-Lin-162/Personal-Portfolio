import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <p className="contact-label">GET IN TOUCH</p>

        <p className="contact-description">
          I’m currently seeking a co-op opportunity where I can apply my
          technical and problem-solving skills, contribute to a team, and
          continue developing as a technology professional. I’m open to
          opportunities across software development, web development, AI,
          cybersecurity, QA, IT, technical analysis, and related areas.
        </p>

        <a href="mailto:yenainglin.lashio@gmail.com" className="contact-email">
          Email
        </a>

        <div className="contact-links">
          <a
            href="https://github.com/Jonathan-Lin-162"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jonathan-lin-bcit"
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

export default Contact;
