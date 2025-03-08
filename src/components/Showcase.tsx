const Showcase = () => {
  return (
    <section id="showcase" className="showcase">
      <div className="showcase__header">
        <h3>I Can Help You With:</h3>
        <button className="btn">See My Work</button>
      </div>
      <div className="showcase_categories">
        <section className="category">
          <div className="category__header">
            <div className="category__title">
              <i className="ri-macbook-line"></i>
              <h4>Portfolio Websites</h4>
            </div>
            <div className="category__desc">
              <p>
                Designing and developing eye-catching, fully responsive
                portfolio websites that highlight your skills and projects,
                ensuring a professional online presence.
              </p>
              <a href="#">
                <i className="ri-share-circle-line"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="category">
          <div className="category__header">
            <div className="category__title">
              <i className="ri-group-2-line"></i>
              <h4>Website Development</h4>
            </div>
            <div className="category__desc">
              <p>
                End-to-end development of responsive websites that look great on
                all devices, with a focus on performance and aesthetics.
              </p>
              <a href="#">
                <i className="ri-share-circle-line"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Showcase;
