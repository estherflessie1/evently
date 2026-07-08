import "./UpcomingEvents.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import EventCard from "../EventCard/EventCard";

import music from "../../assets/images/music.jpg";
import tech from "../../assets/images/tech.jpg";
import sports from "../../assets/images/sports.jpg";

function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <SectionTitle
        title="Upcoming Events"
        subtitle="Explore events happening around you"
      />

      <div className="events-container">
        <EventCard
          image={music}
          category="Music"
          title="Summer Beats Festival"
          date="June 15, 2024 • 6:00 PM"
          location="Lagos, Nigeria"
        />

        <EventCard
          image={tech}
          category="Tech"
          title="Tech Innovators Summit"
          date="June 22, 2024 • 9:00 AM"
          location="Abuja, Nigeria"
        />

        <EventCard
          image={sports}
          category="Sports"
          title="Champions Basketball Cup"
          date="July 5, 2024 • 4:00 PM"
          location="Port Harcourt, Nigeria"
        />
      </div>
    </section>
  );
}

export default UpcomingEvents;
