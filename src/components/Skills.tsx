const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__desc">
        <h3>Experienced Across Multiple Projects and Technologies</h3>
        <p>
          Bringing creativity and technical proficiency to building responsive
          web applications and enhancing user experiences with expertise in
          full-stack development.
        </p>
        <div className="skills__actions">
          <button className="btn">Work With Me</button>
          <button className="btn btn--secondary">
            <a
              href="mailto:krisanapongdt@gmail.com"
              className="text-white no-underline"
            >
              Send Email
            </a>
          </button>
        </div>
      </div>
      <div className="skills__stats">
        <div className="skill__stat-item">
          <i className="ri-reactjs-line"></i>
          <div className="skill__info">
            <h5>20+</h5>
            <p>React Projects</p>
          </div>
        </div>
        <div className="skill__stat-item">
          <i className="ri-database-2-line"></i>
          <div className="skill__info">
            <h5>5+</h5>
            <p>Database Systems</p>
          </div>
        </div>
        <div className="skill__stat-item">
          <i className="ri-code-box-line"></i>
          <div className="skill__info">
            <h5>5+</h5>
            <p>Full-Stack Projects</p>
          </div>
        </div>
        <div className="skill__stat-item">
          <i className="ri-terminal-box-line"></i>
          <div className="skill__info">
            <h5>3+</h5>
            <p>IoT Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
