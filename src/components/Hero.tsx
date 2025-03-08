const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-between p-10 bg-gray-100 h-screen"
    >
      <div className="hero__content">
        <img
          src="src/assets/images/profile.jpg"
          alt="Profile"
          className="hero__image"
        />
        <h2>Hello! I'm Krisanapong Jaruenjanporn</h2>
      </div>
      <div className="hero__intro">
        <h3>Full Stack Developer in Nakhon Ratchasima , THAI</h3>
        <p>Crafting intuitive and high-performance web interfaces solutions.</p>
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
