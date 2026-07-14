import "./RelatedEvents.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import EventCard from "../EventCard/EventCard";

import events from "../../data/events";

function RelatedEvents({ currentEventId }) {
  const relatedEvents = events
    .filter((event) => event.id !== currentEventId)
    .slice(0, 3);

  return (
    <section className="related-events">
      <SectionTitle
        title="Related Events"
        subtitle="You may also like these events"
      />

      <div className="related-events-grid">
        {relatedEvents.map((event) => (
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

export default RelatedEvents;
