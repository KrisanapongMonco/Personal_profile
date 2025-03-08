const Career = () => {
  return (
    <section className="career">
      <div className="career__jobs">
        <h3>Work Experience</h3>
        <div className="job">
          <i className="ri-pen-nib-line"></i>
          <div className="job__info">
            <h5>
              Frontend Developer at <span>TechCorp</span>
            </h5>
            <p>February 2020 - Present</p>
          </div>
        </div>
        <div className="job">
          <i className="ri-reactjs-fill"></i>
          <div className="job__info">
            <h5>
              React Developer at <span>WebSolutions</span>
            </h5>
            <p>February 2018 – February 2020</p>
          </div>
        </div>
        <div className="job">
          <i className="ri-paint-brush-line"></i>
          <div className="job__info">
            <h5>
              UI/UX Developer at <span>StartupX</span>
            </h5>
            <p>March 2016 – January 2018</p>
          </div>
        </div>
      </div>
      <div className="career__awards">
        <h3>Awards & Recognition</h3>
        <div className="award">
          <i className="ri-medal-fill"></i>
          <div className="award__info">
            <h5>
              Fron-Dev of the Year at <span>Dev Awards</span>
            </h5>
            <p>November 2023</p>
          </div>
        </div>
        <div className="award">
          <i className="ri-javascript-line"></i>
          <div className="award__info">
            <h5>
              Code Mastery Award at <span>CodeFest</span>
            </h5>
            <p>January 2023</p>
          </div>
        </div>
        <div className="award">
          <i className="ri-award-fill"></i>
          <div className="award__info">
            <h5>
              Top Designer at <span>Design Awards</span>
            </h5>
            <p>August 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
