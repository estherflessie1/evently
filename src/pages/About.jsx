import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <h1>About Evently</h1>

          <p>
            Evently is your one-stop platform for discovering concerts,
            conferences, festivals, workshops, networking events, and more
            across Nigeria.
          </p>
        </section>

        <section className="about-content">
          <div className="about-card">
            <h2>Our Mission</h2>

            <p>
              We believe discovering amazing events should be simple, fast, and
              enjoyable. Evently connects people with experiences they'll never
              forget.
            </p>
          </div>

          <div className="about-card">
            <h2>What You'll Find</h2>

            <ul>
              <li>🎵 Music Concerts</li>
              <li>💻 Tech Conferences</li>
              <li>🏃 Sports Events</li>
              <li>💼 Business Summits</li>
              <li>🎨 Art Exhibitions</li>
              <li>🎉 Cultural Festivals</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>Why Choose Evently?</h2>

            <p>
              Browse events by category, search by location, view event details,
              and register for upcoming experiences—all in one place.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
