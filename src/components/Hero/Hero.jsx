import "./Hero.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Discover Events
          <br />
          <span>Anywhere</span>
        </h1>

        <p>Find concerts, conferences, festivals and more.</p>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          redirect={true}
        />
      </div>

      <div className="circle left"></div>
      <div className="circle right"></div>
    </section>
  );
}

export default Hero;
