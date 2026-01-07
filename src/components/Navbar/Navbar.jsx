import "./Navbar.css";
import logo from "../../favicon.png";

const Navbar = () => {
  return (
    <div className="card-nav-container">
      <nav className="card-nav" style={{ backgroundColor: "#fff" }}>
        <div className="card-nav-top">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
          </div>
          <div className="nav-middle-space">
            <nav className="nav-menu">
              <ul>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    <span className="nav-text">ABOUT</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#our-courses" className="nav-link">
                    <span className="nav-text">COURSES</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#why-choose-us" className="nav-link">
                    <span className="nav-text">WHY CHOOSE US?</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#our-students" className="nav-link">
                    <span className="nav-text">OUR STUDENTS</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#our-achievers" className="nav-link">
                    <span className="nav-text">OUR ACHIEVERS</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    <span className="nav-text">CONTACT</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button
            type="button"
            className="card-nav-cta-button"
            style={{ backgroundColor: "#111", color: "#fff" }}
          >
            LOGIN
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
