import "./Hero.css";
import { FiSearch } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Discover Events
          <br />
          <span>Anywhere</span>
        </h1>

        <p>Find concerts, conferences, festivals and more.</p>
        <SearchBar />

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search events, cities..." />
        </div>
      </div>

      {/* Decorative circles */}
      <div className="circle left"></div>
      <div className="circle right"></div>
    </section>
  );
}

export default Hero;
