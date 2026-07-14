import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SearchBar({ searchTerm = "", setSearchTerm, redirect = false }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (redirect) {
      navigate(`/explore?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleChange = (e) => {
    if (setSearchTerm) {
      setSearchTerm(e.target.value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && redirect) {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {redirect && <button onClick={handleSearch}>Search</button>}
    </div>
  );
}

export default SearchBar;
