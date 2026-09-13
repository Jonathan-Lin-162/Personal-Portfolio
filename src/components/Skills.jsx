import "../styles/skills.css";

function Skills(props) {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills & Technologies</h2>

        <p className="skills-description">
          Technologies I've worked with through coursework, personal projects,
          and team projects.
        </p>

        <div className="skills-list">
          {props.skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <h3>{skill.category}</h3>

              <div className="skill-items">
                {skill.items.map((item) => (
                  <span className="skill-badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
