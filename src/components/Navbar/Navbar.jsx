import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Evently logo" />
        </Link>
      </div>

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

        <li>
          <button
            className="sign-in-btn mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </button>
        </li>
      </ul>

      <button className="sign-in-btn desktop-btn">Sign In</button>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}

export default Navbar;
