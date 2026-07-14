import "./ExploreHeader.css";
import { FiSearch, FiMapPin } from "react-icons/fi";

function ExploreHeader({
  searchTerm,
  setSearchTerm,
  selectedCity,
  setSelectedCity,
}) {
  return (
    <section className="explore-header">
      <div className="explore-text">
        <h1>Explore Events</h1>
        <p>Discover exciting events happening near you.</p>
      </div>

      <div className="explore-search">
        <div className="input-group">
          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="input-group">
          <FiMapPin className="search-icon" />

          <input
            type="text"
            placeholder="Location (e.g. Lagos)"
            value={selectedCity === "Any City" ? "" : selectedCity}
            onChange={(e) =>
              setSelectedCity(
                e.target.value === "" ? "Any City" : e.target.value,
              )
            }
          />
        </div>
      </div>
    </section>
  );
}

export default ExploreHeader;
