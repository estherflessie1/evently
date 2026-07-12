import "./ExploreHeader.css";
import { FiSearch, FiMapPin } from "react-icons/fi";

function ExploreHeader() {
  return (
    <section className="explore-header">
      <div className="explore-text">
        <h1>Explore Events</h1>
        <p>Discover exciting events happening near you.</p>
      </div>

      <form className="explore-search">
        <div className="input-group">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search events, cities, venues..." />
        </div>

        <div className="input-group">
          <FiMapPin className="search-icon" />
          <input type="text" placeholder="Location (e.g. Lagos)" />
        </div>

        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default ExploreHeader;
