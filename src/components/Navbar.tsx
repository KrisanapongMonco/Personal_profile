const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        <i className="ri-code-s-slash-line"></i> Logo.
      </a>
      <div className="navbar__menu">
        <a href="#" className="navbar__link">
          Home
        </a>
        <a href="#" className="navbar__link">
          Projects
        </a>
        <a href="#" className="navbar__link">
          Skills
        </a>
        <a href="#" className="navbar__link">
          About
        </a>
      </div>
      <div className="navbar__actions">
        <div className="navbar__location">
          <h5>USA, New York</h5>
          <p>6:18:31 pm</p>
        </div>
        <button className="btn">Get a Quote</button>
      </div>
    </nav>
  );
};
export default Navbar;
