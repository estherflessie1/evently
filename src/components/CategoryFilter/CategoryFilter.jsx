import "./CategoryFilter.css";
import {
  FiMusic,
  FiMonitor,
  FiBriefcase,
  FiActivity,
  FiStar,
} from "react-icons/fi";
import { PiPaletteFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  redirect = false,
}) {
  const navigate = useNavigate();

  const categories = [
    { name: "Music", icon: <FiMusic />, color: "#ef5da8" },
    { name: "Tech", icon: <FiMonitor />, color: "#2563EB" },
    { name: "Business", icon: <FiBriefcase />, color: "#F97316" },
    { name: "Sports", icon: <FiActivity />, color: "#22C55E" },
    { name: "Art", icon: <PiPaletteFill />, color: "#8B5CF6" },
    { name: "Festival", icon: <FiStar />, color: "#FACC15" },
  ];

  const handleCategoryClick = (category) => {
    if (redirect) {
      navigate(`/explore?category=${category}`);
    } else if (setSelectedCategory) {
      setSelectedCategory(category);
    }
  };

  return (
    <section className="categories">
      <button
        className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}
        onClick={() => handleCategoryClick("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.name}
          className={`category-btn ${
            selectedCategory === category.name ? "active" : ""
          }`}
          onClick={() => handleCategoryClick(category.name)}
        >
          <span className="category-icon" style={{ color: category.color }}>
            {category.icon}
          </span>

          <span>{category.name}</span>
        </button>
      ))}
    </section>
  );
}

export default CategoryFilter;
