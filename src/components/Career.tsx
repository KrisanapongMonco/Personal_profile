const Career = () => {
  return (
    <section id="career" className="career">
      <div className="career__jobs">
        <h3>Work Experience</h3>
        <div className="job">
          <i className="ri-pen-nib-line"></i>
          <div className="job__info">
            <h5>
              IT Support at <span>กลุ่มบริษัทต้องบุญ</span>
            </h5>
            <p>Nov 2024 – Present</p>
          </div>
        </div>
        <div className="job">
          <i className="ri-reactjs-fill"></i>
          <div className="job__info">
            <h5>
              React Developer at <span>WebSolutions</span>
            </h5>
            <p>Feb 2018 – Feb 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
