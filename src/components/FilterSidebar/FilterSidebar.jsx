import "./FilterSidebar.css";
import { FiCalendar, FiMapPin, FiRotateCcw } from "react-icons/fi";

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>

        <button className="reset-btn">
          <FiRotateCcw />
          Reset
        </button>
      </div>

      {/* Date */}

      <div className="filter-group">
        <label>Date</label>

        <div className="select-box">
          <FiCalendar />
          <select>
            <option>Any Date</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      {/* City */}

      <div className="filter-group">
        <label>City</label>

        <div className="select-box">
          <FiMapPin />
          <select>
            <option>Any City</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
          </select>
        </div>
      </div>

      {/* Categories */}

      <div className="filter-group">
        <label>Category</label>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" />
            Music
          </label>

          <label>
            <input type="checkbox" />
            Tech
          </label>

          <label>
            <input type="checkbox" />
            Business
          </label>

          <label>
            <input type="checkbox" />
            Sports
          </label>

          <label>
            <input type="checkbox" />
            Arts
          </label>

          <label>
            <input type="checkbox" />
            Food & Drink
          </label>
        </div>
      </div>

      {/* Price */}

      <div className="filter-group">
        <label>Price Range</label>

        <input type="range" min="0" max="50000" />

        <div className="price-labels">
          <span>Free</span>
          <span>₦50,000+</span>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
