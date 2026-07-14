import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import events from "../data/events";

import "./Register.css";

function Register() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setRegistered(true);
    }, 1000);
  };

  // Event not found
  if (!event) {
    return (
      <>
        <Navbar />

        <main className="register-page">
          <div className="register-container">
            <h1>Event Not Found</h1>

            <p>Sorry, this event does not exist or has been removed.</p>

            <Link to="/explore" className="register-btn">
              Explore Events
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // Successful registration screen
  if (registered) {
    return (
      <>
        <Navbar />

        <main className="register-page">
          <div className="register-container success-container">
            <div className="success-icon">✓</div>

            <h1>Registration Successful!</h1>

            <p className="success-message">
              Your registration has been confirmed. A confirmation email has
              been sent with your event details.
            </p>

            <div className="success-summary">
              <div>
                <span>Event</span>
                <strong>{event.title}</strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{event.date}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{event.location}</strong>
              </div>

              <div>
                <span>Ticket</span>
                <strong>{event.price}</strong>
              </div>
            </div>

            <Link to="/explore" className="register-btn">
              Explore More Events
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // Registration form
  return (
    <>
      <Navbar />

      <main className="register-page">
        <div className="register-container">
          <h1>Register for {event.title}</h1>

          <p>Complete the form below to reserve your spot.</p>

          <div className="event-preview">
            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Location:</strong> {event.location}
            </p>

            <p>
              <strong>Price:</strong> {event.price}
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="tel" placeholder="Phone Number" required />

            <input
              type="number"
              placeholder="Number of Tickets"
              min="1"
              defaultValue="1"
              required
            />

            <button type="submit">
              {loading ? "Processing..." : "Complete Registration"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
