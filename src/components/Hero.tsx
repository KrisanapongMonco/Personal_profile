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
        <h3>Full Stack Developer | IT Support</h3>
        <p>Specializing in crafting high-performance web solutions.</p>
        <div className="hero__actions">
          <button className="btn">Work With Me</button>
          <button className="btn btn--secondary">See My Portfolio</button>
        </div>
      </div>
      <div className="hero__socials">
        <a href="https://www.instagram.com/moncocs/">
          <i className="ri-instagram-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/krisanapong-jaruenjanporn/">
          <i className="ri-linkedin-box-line"></i>
        </a>
        <a href="https://www.youtube.com/@ajax_jinny2659">
          <i className="ri-youtube-line"></i>
        </a>
      </div>
    </section>
  );
};
export default Hero;
