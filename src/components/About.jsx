import "../styles/about.css";

function About(props) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>

        <div className="card-container">
          <div className="card">
            <h3>Intro</h3>
            <p>
              I am a BCIT Computer Systems Technology student interested in
              software development and full-stack web applications.
            </p>
          </div>

          <div className="card">
            <h3>Interest</h3>
            <p>
              I enjoy building practical applications, learning new
              technologies, and exploring areas such as artificial intelligence
              and cybersecurity.
            </p>
          </div>

          <div className="card">
            <h3>Languages</h3>
            {props.languages.map((item) => (
              <p key={item.id}>
                {item.language}: {item.proficiency}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
