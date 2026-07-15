import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Evently logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/explore" onClick={() => setMenuOpen(false)}>
            Explore
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        {/* Mobile Sign In Button */}
        <li>
          <Link
            to="/signin"
            className="sign-in-btn mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
        </li>
      </ul>

      {/* Desktop Sign In Button */}
      <Link to="/signin" className="sign-in-btn desktop-btn">
        Sign In
      </Link>

      {/* Mobile Menu Toggle */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}

export default Navbar;
