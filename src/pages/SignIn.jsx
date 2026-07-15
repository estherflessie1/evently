import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful login
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <main className="signin-page">
        <div className="signin-container">
          <h1>Welcome Back</h1>

          <p>Sign in to continue discovering amazing events.</p>

          <form className="signin-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" required />

            <input type="password" placeholder="Password" required />

            <button type="submit">Sign In</button>
          </form>

          <div className="signin-footer">
            <p>
              Don't have an account?
              <Link to="/signup"> Sign Up</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SignIn;
