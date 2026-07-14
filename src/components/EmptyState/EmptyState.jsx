import "./EmptyState.css";
import { FiSearch } from "react-icons/fi";

function EmptyState({ onClearFilters }) {
  return (
    <div className="empty-state">
      <FiSearch className="empty-icon" />

      <h2>No Events Found</h2>

      <p>We couldn't find any events matching your search.</p>

      <button onClick={onClearFilters}>Clear Filters</button>
    </div>
  );
}

export default EmptyState;
