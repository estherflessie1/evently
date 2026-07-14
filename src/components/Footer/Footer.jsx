import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

function Footer() {
  const quickLinks = ["Home", "Explore", "About", "Contact"];

  const categories = ["Music", "Tech", "Business", "Sports", "Art", "Festival"];

  const support = [
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Refund Policy",
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Evently</h2>

          <p>
            Discover amazing events happening around you. Find concerts,
            conferences, sports, festivals and much more.
          </p>

          <div className="social-icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
            <FiLinkedin />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Categories</h3>

          <ul>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>

          <ul>
            {support.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Evently. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
