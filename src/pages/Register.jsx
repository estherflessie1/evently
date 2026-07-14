import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./Register.css";

function Register() {
  return (
    <>
      <Navbar />

      <main className="register-page">
        <div className="register-container">
          <h1>Event Registration</h1>

          <p>Fill in your details to reserve your seat.</p>

          <form className="register-form">
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="tel" placeholder="Phone Number" required />

            <input
              type="number"
              placeholder="Number of Tickets"
              min="1"
              defaultValue="1"
            />

            <button type="submit">Complete Registration</button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
