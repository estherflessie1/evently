import "./EventBanner.css";

function EventBanner({ event }) {
  return (
    <section className="event-banner">
      <img src={event.image} alt={event.title} className="banner-image" />
    </section>
  );
}
export default EventBanner;
