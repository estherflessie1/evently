import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
