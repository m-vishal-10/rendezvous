import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path, { replace: true });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        {/* Left Side: Logo & Text */}
        <div className="left-section">
          <img src="/RMDEC.png" alt="College Logo" className="logo" />
          <div className="college-info">
            <h1>R.M.D. Engineering College</h1>
            <p>(An Autonomous Institution)</p>
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="nav-links">
          <span onClick={() => handleNavigation("/home")}>Home</span>
          <span onClick={() => handleNavigation("/events")}>Events</span>
          <span onClick={() => handleNavigation("/about")}>About</span>
          <span onClick={() => handleNavigation("/register")}>Register</span>
          <span onClick={() => handleNavigation("/transport")}>Transport</span>
          <span onClick={() => handleNavigation("/rules")}>Rules</span>
        </nav>

        {/* Mobile Menu Icon */}
        <FaBars className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)} />

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <span onClick={() => handleNavigation("/home")}>Home</span>
          <span onClick={() => handleNavigation("/events")}>Events</span>
          <span onClick={() => handleNavigation("/about")}>About</span>
          <span onClick={() => handleNavigation("/register")}>Register</span>
          <span onClick={() => handleNavigation("/transport")}>Transport</span>
          <span onClick={() => handleNavigation("/rules")}>Rules</span>
        </div>
      </header>

      <div className="content-spacer"></div>

      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 30px;
            background-color: rgba(90, 88, 88, 0.5);
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
            box-sizing: border-box;
            backdrop-filter: blur(5px);
          }

          .left-section {
            display: flex;
            align-items: center;
          }

          .logo {
            width: 50px;
            height: auto;
            margin-right: 15px;
          }

          .college-info h1 {
            font-size: 20px;
            margin: 0;
            color: white;
          }

          .college-info p {
            font-size: 14px;
            margin: 0;
            color: white;
          }
          .college-name {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .nav-links {
            display: flex;
            gap: 20px;
          }

          .nav-links span, .mobile-nav span {
            color: white;
            text-decoration: none;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            padding: 10px;
          }

          .hamburger-menu {
            display: none;
            font-size: 28px;
            color: white;
            cursor: pointer;
          }

          .mobile-nav {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 30px;
            background-color: #222;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
          }

          .mobile-nav.open {
            display: flex;
          }

          .content-spacer {
            margin-top: 80px;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .hamburger-menu {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
