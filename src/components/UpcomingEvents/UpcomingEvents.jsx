import "./UpcomingEvents.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import EventCard from "../EventCard/EventCard";

import events from "../../data/events";

function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <SectionTitle
        title="Upcoming Events"
        subtitle="Explore events happening around you"
      />

      <div className="events-container">
        {events.slice(0, 3).map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            image={event.image}
            category={event.category}
            title={event.title}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
