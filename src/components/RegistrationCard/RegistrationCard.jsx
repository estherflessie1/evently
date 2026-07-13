import "./RegistrationCard.css";

import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";

function RegistrationCard() {
  return (
    <aside className="registration-card">
      <h2>₦10,000</h2>

      <div className="register-details">
        <p>
          <FiCalendar />
          August 12, 2026
        </p>

        <p>
          <FiClock />
          6:00 PM
        </p>

        <p>
          <FiMapPin />
          Lagos, Nigeria
        </p>

        <p>
          <FiUsers />
          250 Seats Left
        </p>
      </div>

      <button>Register Now</button>
    </aside>
  );
}

export default RegistrationCard;
