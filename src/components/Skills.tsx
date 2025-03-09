const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__desc">
        <h3>Experienced Across Multiple Projects and Technologies</h3>
        <p>
          Bringing creativity and technical proficiency to building responsive
          web applications and enhancing user experiences.
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
        <i className="ri-codepen-line"></i>
        <div className="skill__info">
          <h5>40+</h5>
          <p>JavaScript Projects</p>
        </div>
        <i className="ri-reactjs-line"></i>
        <div className="skill__info">
          <h5>12+</h5>
          <p>Remote Projects</p>
        </div>
        <div className="skill__info">
          <h5>50+</h5>
          <p>Codepen Projects</p>
        </div>
        <i className="ri-rocket-line"></i>
        <div className="skill__info">
          <h5>20+</h5>
          <p>React Projects</p>
        </div>
        <i className="ri-remote-control-line"></i>
      </div>
    </section>
  );
};
export default Skills;
