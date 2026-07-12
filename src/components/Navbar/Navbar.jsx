import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Evently logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/explore">Explore</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <button className="sign-in-btn">Sign In</button>
    </nav>
  );
}

export default Navbar;
