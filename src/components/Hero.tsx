const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <img src="assets/profile.png" alt="Profile" className="hero__image" />
        <h2>Hello! I'm Reza Mehdikhanlou</h2>
      </div>
      <div className="hero__intro">
        <h3>Frontend Developer Based in New York, USA</h3>
        <p>
          Crafting intuitive and high-performance web interfaces for digital
          solutions.
        </p>
        <div className="hero__actions">
          <button className="btn">Work With Me</button>
          <button className="btn btn--secondary">See My Portfolio</button>
        </div>
      </div>
      <div className="hero__socials">
        <a href="#">
          <i className="ri-instagram-line"></i>
        </a>
        <a href="#">
          <i className="ri-dribbble-line"></i>
        </a>
        <a href="#">
          <i className="ri-linkedin-box-line"></i>
        </a>
        <a href="#">
          <i className="ri-youtube-line"></i>
        </a>
      </div>
    </section>
  );
};
export default Hero;
