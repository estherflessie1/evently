import "./EventCard.css";
import { Link } from "react-router-dom";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";

function EventCard({ id, image, category, title, date, location }) {
  console.log("EventCard props:", {
    id,
    title,
  });
  return (
    <Link to={`/event/${id}`} className="event-card-link">
      <article className="event-card">
        <div className="event-image-container">
          <img src={image} alt={title} className="event-image" />

          <span className="event-badge">{category}</span>
        </div>

        <div className="event-content">
          <h3>{title}</h3>

          <div className="event-meta">
            <p>
              <FiCalendar className="icon" />
              <span>{date}</span>
            </p>

            <p>
              <FiMapPin className="icon" />
              <span>{location}</span>
            </p>
          </div>

          <div className="details-btn">
            <span>View Details</span>
            <FiArrowRight />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default EventCard;
