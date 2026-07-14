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

  if (!event) {
    return (
      <>
        <Navbar />

        <main className="register-page">
          <div className="register-container">
            <h2>Event not found.</h2>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      const registration = {
        registrationId: "EVT-" + Math.floor(100000 + Math.random() * 900000),
        eventId: event.id,
        eventTitle: event.title,
        eventDate: event.date,
        eventLocation: event.location,
        registeredAt: new Date().toLocaleString(),
      };

      localStorage.setItem("eventRegistration", JSON.stringify(registration));

      setLoading(false);
      setRegistered(true);
    }, 1500);
  };

  if (registered) {
    const registration = JSON.parse(localStorage.getItem("eventRegistration"));

    return (
      <>
        <Navbar />

        <main className="register-page">
          <div className="register-container">
            <h1>🎉 Registration Successful!</h1>

            <p>
              You have successfully registered for{" "}
              <strong>{registration.eventTitle}</strong>.
            </p>

            <p>
              <strong>Registration ID:</strong>
              <br />
              {registration.registrationId}
            </p>

            <p>
              <strong>Date:</strong>
              <br />
              {registration.eventDate}
            </p>

            <p>
              <strong>Location:</strong>
              <br />
              {registration.eventLocation}
            </p>

            <p>
              <strong>Registered On:</strong>
              <br />
              {registration.registeredAt}
            </p>

            <Link to="/explore" className="register-btn">
              Explore More Events
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="register-page">
        <div className="register-container">
          <h1>Register for {event.title}</h1>

          <p>
            <strong>Date:</strong> {event.date}
          </p>

          <p>
            <strong>Location:</strong> {event.location}
          </p>

          <p>
            <strong>Price:</strong> {event.price}
          </p>

          <form className="register-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="tel" placeholder="Phone Number" required />

            <input type="number" min="1" defaultValue="1" />

            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Complete Registration"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
