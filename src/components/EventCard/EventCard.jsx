import "./EventCard.css";
import { Link } from "react-router-dom";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";

function EventCard({ id, image, category, title, date, location }) {
  return (
    <Link to={`/event/${id}`} className="event-card-link">
      <div className="event-card">
        <div className="event-image-container">
          <img src={image} alt={title} className="event-image" />

          <span className="event-badge">{category}</span>
        </div>

        <div className="event-content">
          <h3>{title}</h3>

          <div className="event-meta">
            <p>
              <FiCalendar className="icon" />
              {date}
            </p>

            <p>
              <FiMapPin className="icon" />
              {location}
            </p>
          </div>

          <button className="details-btn">
            View Details
            <FiArrowRight />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
