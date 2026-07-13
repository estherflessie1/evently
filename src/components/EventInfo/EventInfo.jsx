import "./EventInfo.css";
import { FiCalendar, FiMapPin, FiDollarSign, FiUsers } from "react-icons/fi";

function EventInfo() {
  return (
    <section className="event-info">
      <span className="event-category">Music</span>

      <h1>Summer Beats Festival</h1>

      <div className="event-details-list">
        <p>
          <FiCalendar />
          August 12, 2026
        </p>

        <p>
          <FiMapPin />
          Lagos, Nigeria
        </p>

        <p>
          <FiDollarSign />
          ₦10,000
        </p>

        <p>
          <FiUsers />
          250 Seats Available
        </p>
      </div>

      <p className="event-description">
        Experience an unforgettable evening filled with live music, amazing
        performances, delicious food, and networking opportunities.
      </p>
    </section>
  );
}

export default EventInfo;
