import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />

      <input type="text" placeholder="Search events, cities..." />
    </div>
  );
}

export default SearchBar;
