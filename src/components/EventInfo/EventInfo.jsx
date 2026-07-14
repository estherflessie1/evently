import "./EventInfo.css";
import { FiCalendar, FiMapPin, FiDollarSign, FiUsers } from "react-icons/fi";

function EventInfo({ event }) {
  return (
    <section className="event-info">
      <span className="event-category">{event.category}</span>

      <h1>{event.title}</h1>

      <div className="event-details-list">
        <p>
          <FiCalendar />
          {event.date}
        </p>

        <p>
          <FiMapPin />
          {event.location}
        </p>

        <p>
          <FiDollarSign />
          {event.price}
        </p>

        <p>
          <FiUsers />
          {event.seats}
        </p>
      </div>

      <p className="event-description">{event.description}</p>
    </section>
  );
}

export default EventInfo;
