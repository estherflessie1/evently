import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate account creation
    navigate("/signin");
  };

  return (
    <>
      <Navbar />

      <main className="signup-page">
        <div className="signup-container">
          <h1>Create an Account</h1>

          <p>
            Join Evently today and never miss exciting events happening around
            you.
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="password" placeholder="Password" required />

            <input type="password" placeholder="Confirm Password" required />

            <button type="submit">Create Account</button>
          </form>

          <div className="signup-footer">
            <p>
              Already have an account?
              <Link to="/signin"> Sign In</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SignUp;
