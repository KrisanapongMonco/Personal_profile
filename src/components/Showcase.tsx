const Showcase = () => {
  return (
    <section id="showcase" className="showcase">
      <div className="showcase__header">
        <h3>I Can Help You With:</h3>
        <button className="btn btn--secondary">See My Work</button>
      </div>
      <div className="showcase__categories">
        <section className="category">
          <div className="category__header">
            <div className="category__title">
              <i className="ri-reactjs-line"></i>
              <h4>Web Application Development</h4>
            </div>
            <div className="category__desc">
              <p>
                End-to-end development of responsive web applications using
                React.js, Next.js, and various back-end technologies with a
                focus on performance and clean design.
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
              <i className="ri-smartphone-line"></i>
              <h4>Mobile App Development</h4>
            </div>
            <div className="category__desc">
              <p>
                Creating cross-platform mobile applications using React Native,
                integrating with Firebase for real-time data management and user
                authentication.
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
              <i className="ri-database-2-line"></i>
              <h4>Database & Backend Systems</h4>
            </div>
            <div className="category__desc">
              <p>
                Designing and implementing database solutions with MySQL,
                PostgreSQL, or MongoDB, and developing secure RESTful APIs using
                Node.js, .NET Core, or PHP.
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
              <i className="ri-wifi-line"></i>
              <h4>IoT Integration</h4>
            </div>
            <div className="category__desc">
              <p>
                Connecting physical devices to web interfaces, creating
                real-time monitoring systems for various applications including
                utility management and smart environments.
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
