import "../styles/education.css";

function Education(props) {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2>Education</h2>

        <p className="education-intro">
          My academic background and relevant coursework.
        </p>

        <div className="education-list">
          {props.education.map((item) => (
            <article className="education-card" key={item.id}>
              <div className="education-header">
                <div>
                  <h3>{item.school}</h3>

                  <p className="education-program">{item.program}</p>
                </div>

                <p className="education-date">{item.date}</p>
              </div>

              {item.location && (
                <p className="education-location">{item.location}</p>
              )}

              {item.coursework.length > 0 && (
                <div className="education-coursework">
                  <h4>Relevant Coursework</h4>

                  <div className="coursework-list">
                    {item.coursework.map((course) => (
                      <span key={course}>{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
