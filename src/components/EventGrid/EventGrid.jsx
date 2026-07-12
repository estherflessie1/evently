import "./EventGrid.css";
import EventCard from "../EventCard/EventCard";

// Import your images
import music from "../../assets/images/music.jpg";
import tech from "../../assets/images/tech.jpg";
import sports from "../../assets/images/sports.jpg";

const events = [
  {
    id: 1,
    image: music,
    category: "Music",
    title: "Summer Beats Festival",
    date: "August 12, 2026 • 6:00 PM",
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    image: tech,
    category: "Tech",
    title: "Tech Innovators Summit",
    date: "August 18, 2026 • 9:00 AM",
    location: "Abuja, Nigeria",
  },
  {
    id: 3,
    image: sports,
    category: "Sports",
    title: "Champions Basketball Cup",
    date: "August 20, 2026 • 4:00 PM",
    location: "Port Harcourt",
  },
  {
    id: 4,
    image: music,
    category: "Business",
    title: "Startup Builders Conference",
    date: "August 24, 2026 • 10:00 AM",
    location: "Lagos, Nigeria",
  },
  {
    id: 5,
    image: tech,
    category: "Art",
    title: "Creative Design Expo",
    date: "September 2, 2026 • 12:00 PM",
    location: "Ibadan",
  },
  {
    id: 6,
    image: sports,
    category: "Festival",
    title: "Food & Culture Festival",
    date: "September 5, 2026 • 3:00 PM",
    location: "Enugu",
  },
];

function EventGrid() {
  return (
    <section className="event-grid-section">
      <div className="grid-header">
        <h2>{events.length} Events Found</h2>

        <select>
          <option>Sort by: Relevance</option>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Price: Low to High</option>
        </select>
      </div>

      <div className="event-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
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

export default EventGrid;
