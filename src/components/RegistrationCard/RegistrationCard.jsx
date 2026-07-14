import "./RegistrationCard.css";
import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";

function RegistrationCard({ event }) {
  return (
    <aside className="registration-card">
      <h2>{event.price}</h2>

      <div className="register-details">
        <p>
          <FiCalendar />
          {event.date}
        </p>

        <p>
          <FiClock />
          6:00 PM
        </p>

        <p>
          <FiMapPin />
          {event.location}
        </p>

        <p>
          <FiUsers />
          {event.seats}
        </p>
      </div>

      <button>Register Now</button>
    </aside>
  );
}

export default RegistrationCard;
