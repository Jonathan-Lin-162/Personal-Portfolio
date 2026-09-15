import "../styles/experiences.css";

function Experiences(props) {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2>Experience</h2>

        <p className="experience-intro">My work experience.</p>

        <div className="experience-list">
          {props.experiences.map((experience) => (
            <article className="experience-item" key={experience.id}>
              <div className="experience-marker"></div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>

                    <p className="experience-organization">
                      {experience.organization}
                    </p>
                  </div>

                  <p className="experience-date">{experience.date}</p>
                </div>

                <div className="experience-location">
                  <span>{experience.location}</span>
                </div>

                <ul>
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
