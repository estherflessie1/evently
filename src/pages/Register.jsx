import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import events from "../data/events";

import "./Register.css";

function Register() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <>
        <Navbar />
        <main className="register-page">
          <h2>Event not found.</h2>
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

          <form className="register-form">
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="tel" placeholder="Phone Number" required />

            <input type="number" min="1" defaultValue="1" />

            <button type="submit">Complete Registration</button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
