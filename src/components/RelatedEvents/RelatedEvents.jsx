import "./RelatedEvents.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import EventCard from "../EventCard/EventCard";

import music from "../../assets/images/music.jpg";
import tech from "../../assets/images/tech.jpg";
import sports from "../../assets/images/sports.jpg";

function RelatedEvents() {
  const relatedEvents = [
    {
      id: 1,
      image: music,
      category: "Music",
      title: "Afrobeats Live Concert",
      date: "12 Aug 2026",
      location: "Lagos",
    },
    {
      id: 2,
      image: tech,
      category: "Tech",
      title: "Frontend Developers Meetup",
      date: "18 Aug 2026",
      location: "Abuja",
    },
    {
      id: 3,
      image: sports,
      category: "Sports",
      title: "Lagos City Marathon",
      date: "30 Aug 2026",
      location: "Lagos",
    },
  ];

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
