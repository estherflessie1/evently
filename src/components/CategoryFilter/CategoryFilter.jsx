import "./CategoryFilter.css";
import {
  FiMusic,
  FiMonitor,
  FiBriefcase,
  FiActivity,
  FiStar,
} from "react-icons/fi";
import { PiPaletteFill } from "react-icons/pi";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { name: "All", icon: "🌍", color: "#2563EB" },
    { name: "Music", icon: <FiMusic />, color: "#ef5da8" },
    { name: "Tech", icon: <FiMonitor />, color: "#2563EB" },
    { name: "Business", icon: <FiBriefcase />, color: "#F97316" },
    { name: "Sports", icon: <FiActivity />, color: "#22C55E" },
    { name: "Art", icon: <PiPaletteFill />, color: "#8B5CF6" },
    { name: "Festival", icon: <FiStar />, color: "#FACC15" },
  ];

  return (
    <section className="categories">
      {categories.map((category) => (
        <button
          key={category.name}
          className={
            selectedCategory === category.name
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => setSelectedCategory(category.name)}
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
