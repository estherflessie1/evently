import "./EventBanner.css";

function EventBanner({ event }) {
  return (
    <section className="event-banner">
      <img src={event.image} alt={event.title} />
    </section>
  );
}

export default EventBanner;
