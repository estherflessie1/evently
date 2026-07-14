import "./EventGrid.css";
import EventCard from "../EventCard/EventCard";
import Pagination from "../Pagination/Pagination";

function EventGrid({
  events,
  currentPage,
  setCurrentPage,
  totalEvents,
  eventsPerPage,
}) {
  return (
    <section className="event-grid-section">
      <div className="grid-header">
        <h2>{totalEvents} Events Found</h2>

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
            id={event.id}
            image={event.image}
            category={event.category}
            title={event.title}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalEvents={totalEvents}
        eventsPerPage={eventsPerPage}
      />
    </section>
  );
}

export default EventGrid;
